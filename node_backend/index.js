const http = require("http");
const express = require("express");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const { Server } = require("socket.io");
const { v4: uuidv4 } = require('uuid');

// ---------------------------------------------------------------------------
// Express app + HTTP server (auth routes live here)
// ---------------------------------------------------------------------------
const app = express();

app.use(cors({
  origin: true,           // reflect request origin — tighten to your domain in production
  credentials: true       // allow cookies / session
}));
app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET || "change-me-in-production", // set SESSION_SECRET env var
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,       // not readable from JS — mitigates XSS token theft
    secure: process.env.NODE_ENV === "production",  // HTTPS-only in prod
    sameSite: "lax",
    maxAge: 1000 * 60 * 60 * 2   // 2-hour session
  }
}));

// ---- Demo user store -------------------------------------------------------
// In production, look users up from a database and store bcrypt hashes there.
// NEVER hard-code real credentials here; this hash is for the demo account only.
// Hash for password: "demo-password"
const DEMO_USER_HASH = "$2a$12$QzXP1E.v.C9H2wZt5YVNwe2GU3TxW5zJKvLLEUTaVpJlmjqLPNvRa";
const users = {
  "demo@example.com": { passwordHash: DEMO_USER_HASH, username: "demo" }
};
// ---------------------------------------------------------------------------

// POST /login
app.post("/login", async (req, res) => {
  const { identifier, password } = req.body || {};

  if (!identifier || !password) {
    return res.status(400).json({ error: "Email/username and password are required." });
  }

  const record = users[identifier.toLowerCase().trim()];
  if (!record) {
    // Constant-time placeholder to avoid timing-based user enumeration
    await bcrypt.compare(password, "$2a$12$invalidhashpaddingtomakethisaconstanttimecheck000000000");
    return res.status(401).json({ error: "Invalid username or password." });
  }

  const match = await bcrypt.compare(password, record.passwordHash);
  if (!match) {
    return res.status(401).json({ error: "Invalid username or password." });
  }

  // Regenerate session ID to prevent session fixation
  req.session.regenerate((err) => {
    if (err) return res.status(500).json({ error: "Session error." });
    req.session.user = { identifier: identifier.toLowerCase().trim(), username: record.username };
    res.json({ success: true, username: record.username });
  });
});

// POST /logout
app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ error: "Logout failed." });
    res.clearCookie("connect.sid");
    res.json({ success: true });
  });
});

// GET /auth/check  — call from frontend to verify authentication status
app.get("/auth/check", (req, res) => {
  if (req.session && req.session.user) {
    return res.json({ authenticated: true, username: req.session.user.username });
  }
  res.status(401).json({ authenticated: false });
});

const httpServer = http.createServer(app);

const io = new Server(httpServer, { cors: { origin: true, credentials: true } });

const routeStations = ["Central Station", "Riverside", "City Center", "North Terminal"];
const segmentDurationSeconds = 300;
const stationWaitSeconds = 20;

const trainState = {
  segmentIndex: 0,
  progressInSegment: 0,
  waitingAtStation: true,
  waitRemainingSeconds: stationWaitSeconds
};

function minutesLabel(totalSeconds) {
  const minutes = Math.ceil(totalSeconds / 60);
  return `${minutes} min`;
}

function buildTrainSnapshot() {
  const currentLocation = routeStations[trainState.segmentIndex];
  const nextStop = routeStations[trainState.segmentIndex + 1] || null;

  const rawPosition = ((trainState.segmentIndex + trainState.progressInSegment) /
    (routeStations.length - 1)) * 100;
  const positionPercent = Math.max(0, Math.min(100, rawPosition));

  let movementStatus = "Train is currently moving";
  let statusBoxMessage = "Train is currently moving";
  let etaSeconds = Math.max(0, (1 - trainState.progressInSegment) * segmentDurationSeconds);

  if (trainState.waitingAtStation) {
    movementStatus = "Train is at station";
    statusBoxMessage = "Train is at station";
    etaSeconds = trainState.waitRemainingSeconds;
  } else if (etaSeconds <= 120) {
    movementStatus = "Train arriving in 2 minutes";
    statusBoxMessage = "Train arriving in 2 minutes";
  }

  if (!nextStop) {
    movementStatus = "Train is at station";
    statusBoxMessage = "Train is at station";
    etaSeconds = 0;
  }

  return {
    routeStations,
    currentLocation,
    nextStop,
    positionPercent,
    estimatedArrival: etaSeconds === 0 ? "Arrived" : minutesLabel(etaSeconds),
    movementStatus,
    statusBoxMessage
  };
}

function advanceTrainState() {
  if (trainState.waitingAtStation) {
    trainState.waitRemainingSeconds -= 1;
    if (trainState.waitRemainingSeconds <= 0 && trainState.segmentIndex < routeStations.length - 1) {
      trainState.waitingAtStation = false;
      trainState.waitRemainingSeconds = 0;
    }
    return;
  }

  const progressPerTick = 1 / segmentDurationSeconds;
  trainState.progressInSegment += progressPerTick;

  if (trainState.progressInSegment >= 1) {
    trainState.segmentIndex = Math.min(trainState.segmentIndex + 1, routeStations.length - 1);
    trainState.progressInSegment = 0;
    trainState.waitingAtStation = true;
    trainState.waitRemainingSeconds = stationWaitSeconds;
  }
}

setInterval(() => {
  advanceTrainState();
  io.emit("trainUpdate", buildTrainSnapshot());
}, 1000);

io.on("connection", (socket) => {
  const id = uuidv4()
  socket.emit("id", id)

  socket.emit("trainUpdate", buildTrainSnapshot());

  socket.on("trainRequestState", () => {
    socket.emit("trainUpdate", buildTrainSnapshot());
  });

  socket.on("update", (data) => {
    console.log(data)
    io.emit("stateUpdate", data)
  })

  socket.on("disconnect", () => {
    io.emit("disconnection", id)
  })
});

httpServer.listen(3000);