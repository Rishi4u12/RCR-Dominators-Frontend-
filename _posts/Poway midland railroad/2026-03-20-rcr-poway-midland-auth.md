---
layout: base
title: Account Access
permalink: /railroad/auth
---

<style>
  :root {
    --coal:#1a1410;--iron:#2e2620;--iron2:#3a2e28;
    --rust:#b94a1c;--ember:#e8621a;--gold:#c9943a;
    --steam:#e8e0d0;--smoke:#8c7f6e;
  }
  *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
  body { background:var(--coal); color:var(--steam); font-family:'Georgia',serif; padding-top:56px; }

  .rr-hero { padding:52px 24px 40px; text-align:center;
    background:radial-gradient(ellipse at 50% 0%,#3d2a18 0%,var(--coal) 70%);
    border-bottom:1px solid rgba(255,255,255,0.06); }
  .rr-hero-tag { font-family:'Courier New',monospace; font-size:10px; letter-spacing:0.3em;
    text-transform:uppercase; color:var(--gold); margin-bottom:10px; opacity:0.8; }
  .rr-hero h1 { font-size:clamp(28px,5vw,52px); font-weight:700; line-height:1; margin-bottom:10px; }
  .rr-hero h1 em { font-style:italic; color:var(--ember); }
  .rr-hero p { font-size:14px; color:var(--smoke); max-width:520px; margin:0 auto 6px; line-height:1.7; }
  .rr-hero-note { font-family:'Courier New',monospace; font-size:11px; color:var(--gold);
    background:rgba(201,148,58,0.1); border:1px solid rgba(201,148,58,0.2);
    border-radius:4px; padding:6px 14px; display:inline-block; margin-top:8px; }

  .rr-wrap { max-width:1000px; margin:0 auto; padding:40px 20px 80px; }
  .rr-grid-2 { display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:20px; }
  @media(max-width:700px){ .rr-grid-2{ grid-template-columns:1fr; } }

  .rr-card { background:var(--iron); border:1px solid rgba(255,255,255,0.07);
    border-radius:12px; padding:24px; border-top:3px solid var(--rust); }
  .rr-card-title { font-family:'Courier New',monospace; font-size:10px; letter-spacing:0.2em;
    text-transform:uppercase; color:var(--gold); margin-bottom:16px;
    padding-bottom:10px; border-bottom:1px solid rgba(255,255,255,0.07); }

  .rr-field { margin-bottom:14px; }
  .rr-label { font-family:'Courier New',monospace; font-size:10px; letter-spacing:0.1em;
    text-transform:uppercase; color:var(--smoke); margin-bottom:5px; display:block; }
  .rr-input {
    width:100%; padding:10px 14px; background:var(--iron2);
    border:1px solid rgba(255,255,255,0.1); border-radius:6px;
    color:var(--steam); font-family:'Georgia',serif; font-size:13px; transition:border-color 0.2s;
  }
  .rr-input:focus { outline:none; border-color:var(--gold); box-shadow:0 0 0 3px rgba(201,148,58,0.15); }
  .rr-feedback { font-size:12px; margin-top:8px; padding:8px 12px; border-radius:4px;
    font-family:'Courier New',monospace; display:none; }
  .rr-feedback.ok { background:rgba(45,106,79,0.2); border:1px solid rgba(76,175,130,0.3); color:#4caf82; display:block; }
  .rr-feedback.err { background:rgba(185,74,28,0.2); border:1px solid rgba(185,74,28,0.3); color:#fb923c; display:block; }

  .rr-btn { width:100%; padding:11px; border:none; border-radius:6px; cursor:pointer;
    font-family:'Courier New',monospace; font-size:11px; letter-spacing:0.1em;
    text-transform:uppercase; transition:all 0.2s; margin-top:4px; }
  .rr-btn-primary { background:var(--rust); color:#fff; }
  .rr-btn-primary:hover { background:var(--ember); }
  .rr-btn-secondary { background:var(--iron2); color:var(--smoke);
    border:1px solid rgba(255,255,255,0.1); }
  .rr-btn-secondary:hover { color:var(--steam); border-color:var(--gold); }
  .hidden { display:none; }

  /* Status card */
  .rr-status { background:var(--iron); border:1px solid rgba(255,255,255,0.07);
    border-radius:12px; padding:24px; border-left:4px solid var(--gold); }
  .rr-status h3 { font-family:'Courier New',monospace; font-size:10px; letter-spacing:0.2em;
    text-transform:uppercase; color:var(--gold); margin-bottom:12px; }
  .rr-pill { font-family:'Courier New',monospace; font-size:11px; padding:4px 12px;
    border-radius:20px; background:rgba(201,148,58,0.15); color:var(--gold);
    border:1px solid rgba(201,148,58,0.3); display:inline-block; margin-bottom:8px; }
  .rr-status p { font-size:13px; color:var(--smoke); line-height:1.6; }
</style>

<div class="rr-hero">
  <div class="rr-hero-tag">Member Access · Poway–Midland Railroad</div>
  <h1>Account <em>Access</em></h1>
  <p>Sign in or register to unlock member-mode messages and personalized recommendations.</p>
  <div class="rr-hero-note" id="authViewMsg">Public View: Sign in to unlock member tools.</div>
</div>

<div class="rr-wrap">
  <div class="rr-grid-2">

    <div class="rr-card">
      <div class="rr-card-title">🔑 Login</div>
      <form id="loginForm" novalidate>
        <div class="rr-field">
          <label class="rr-label" for="loginEmail">Email</label>
          <input class="rr-input" id="loginEmail" type="email" autocomplete="email" required>
        </div>
        <div class="rr-field">
          <label class="rr-label" for="loginPass">Password</label>
          <input class="rr-input" id="loginPass" type="password" autocomplete="current-password" required minlength="6">
        </div>
        <div class="rr-feedback" id="loginFeedback"></div>
        <button class="rr-btn rr-btn-primary" type="submit">Sign In →</button>
      </form>
    </div>

    <div class="rr-card">
      <div class="rr-card-title">📋 Create Account</div>
      <form id="signupForm" novalidate>
        <div class="rr-field">
          <label class="rr-label" for="signupName">Full Name</label>
          <input class="rr-input" id="signupName" type="text" autocomplete="name" required minlength="2">
        </div>
        <div class="rr-field">
          <label class="rr-label" for="signupEmail">Email</label>
          <input class="rr-input" id="signupEmail" type="email" autocomplete="email" required>
        </div>
        <div class="rr-field">
          <label class="rr-label" for="signupPass">Password</label>
          <input class="rr-input" id="signupPass" type="password" autocomplete="new-password" required minlength="6">
        </div>
        <div class="rr-feedback" id="signupFeedback"></div>
        <button class="rr-btn rr-btn-primary" type="submit">Register →</button>
      </form>
    </div>

  </div>

  <div class="rr-status">
    <h3>Account Status</h3>
    <div class="rr-pill" id="authPill">Guest</div>
    <p id="authStatusText">You are currently browsing public content.</p>
    <br><button class="rr-btn rr-btn-secondary hidden" id="logoutBtn" style="max-width:200px;margin-top:10px;">Logout</button>
  </div>
</div>

<script>
let currentUser = null;
const validateEmail = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

function setFeedback(el, msg, type) {
  el.textContent = msg; el.className = 'rr-feedback ' + (type==='ok'?'ok':'err');
}
function updateView() {
  const pill = document.getElementById('authPill');
  const txt  = document.getElementById('authStatusText');
  const msg  = document.getElementById('authViewMsg');
  const btn  = document.getElementById('logoutBtn');
  if (currentUser) {
    pill.textContent = `Logged in: ${currentUser.name}`;
    txt.textContent  = 'Private tools unlocked: personalized suggestions and saved preferences.';
    msg.textContent  = 'Member View: Personalized recommendations and account features are now available.';
    btn.classList.remove('hidden');
  } else {
    pill.textContent = 'Guest';
    txt.textContent  = 'You are currently browsing public content.';
    msg.textContent  = 'Public View: Sign in to unlock member tools.';
    btn.classList.add('hidden');
  }
}

document.getElementById('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const pass  = document.getElementById('loginPass').value.trim();
  const fb    = document.getElementById('loginFeedback');
  if (!validateEmail(email)||pass.length<6) { setFeedback(fb,'Enter a valid email and password (min 6 chars).','err'); return; }
  currentUser = { name: email.split('@')[0], email };
  setFeedback(fb,'Login successful. Welcome back!','ok');
  updateView();
});

document.getElementById('signupForm').addEventListener('submit', e => {
  e.preventDefault();
  const name  = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const pass  = document.getElementById('signupPass').value.trim();
  const fb    = document.getElementById('signupFeedback');
  if (name.length<2||!validateEmail(email)||pass.length<6) { setFeedback(fb,'Check name, email, and password requirements.','err'); return; }
  currentUser = { name, email };
  setFeedback(fb,'Account created! You are now logged in.','ok');
  updateView();
});

document.getElementById('logoutBtn').addEventListener('click', () => {
  currentUser = null;
  document.getElementById('loginForm').reset();
  document.getElementById('signupForm').reset();
  setFeedback(document.getElementById('loginFeedback'),'Logged out successfully.','ok');
  updateView();
});

updateView();
</script>
