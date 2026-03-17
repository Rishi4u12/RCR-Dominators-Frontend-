---
layout: base
title: Train Schedule & Tracker
permalink: /railroad/schedule
---

<style>
  :root {
    --rust:  #b94a1c;
    --gold:  #c9943a;
    --green: #2d6a4f;
    --amber: #e8a020;
    --red:   #c0392b;
    --steel: #5a6872;
    --smoke: #8c7f6e;
    --track: #2a1f18;
    --card:  rgba(255,255,255,0.05);
    --border: rgba(255,255,255,0.08);
  }

  .rr-wrap { max-width:1000px; margin:0 auto; padding:32px 16px 64px; }

  .rr-header { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:16px; background:var(--track); border-radius:14px; padding:24px 28px; margin-bottom:12px; border:1px solid var(--border); }
  .rr-header-left { display:flex; align-items:center; gap:14px; }
  .rr-logo { font-size:32px; background:var(--rust); border-radius:50%; width:52px; height:52px; display:flex; align-items:center; justify-content:center; border:2px solid var(--gold); flex-shrink:0; }
  .rr-title { font-size:clamp(15px,3vw,20px); font-weight:700; color:#fff; margin:0; line-height:1.2; }
  .rr-subtitle { font-size:10px; color:var(--gold); letter-spacing:0.15em; text-transform:uppercase; margin-top:3px; }

  .rr-clock { text-align:right; }
  .rr-clock .time { font-family:'Courier New',monospace; font-size:clamp(18px,3.5vw,28px); color:#fff; font-weight:700; letter-spacing:0.05em; }
  .rr-clock .date { font-size:10px; color:var(--smoke); letter-spacing:0.08em; text-transform:uppercase; }

  .rr-ticker { background:var(--rust); border-radius:8px; overflow:hidden; white-space:nowrap; padding:7px 0; margin-bottom:20px; }
  .rr-ticker-inner { display:inline-block; animation:rr-scroll 30s linear infinite; font-family:'Courier New',monospace; font-size:11px; color:#fff; letter-spacing:0.1em; }
  @keyframes rr-scroll { from { transform:translateX(100vw); } to { transform:translateX(-100%); } }

  .rr-date-switcher { display:flex; align-items:center; gap:10px; background:var(--track); border:1px solid var(--border); border-radius:10px; padding:12px 18px; margin-bottom:16px; flex-wrap:wrap; }
  .rr-date-switcher label { font-family:'Courier New',monospace; font-size:10px; letter-spacing:0.15em; text-transform:uppercase; color:var(--gold); white-space:nowrap; }
  .rr-date-input { background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.15); border-radius:6px; color:#fff; font-family:'Courier New',monospace; font-size:12px; padding:6px 10px; cursor:pointer; }
  .rr-date-input:focus { outline:none; border-color:var(--gold); }
  .rr-date-today { background:rgba(201,148,58,0.15); border:1px solid var(--gold); color:var(--gold); font-family:'Courier New',monospace; font-size:11px; letter-spacing:0.08em; padding:6px 12px; border-radius:6px; cursor:pointer; transition:background 0.2s; white-space:nowrap; }
  .rr-date-today:hover { background:rgba(201,148,58,0.3); }
  .rr-viewing-badge { margin-left:auto; font-size:11px; color:var(--smoke); font-family:'Courier New',monospace; }
  .rr-viewing-badge span { color:#fff; font-weight:700; }

  .rr-label { font-family:'Courier New',monospace; font-size:10px; letter-spacing:0.2em; text-transform:uppercase; color:var(--gold); display:flex; align-items:center; gap:8px; margin-bottom:10px; }
  .rr-label::after { content:''; flex:1; height:1px; background:var(--gold); opacity:0.2; }

  .rr-status { display:flex; align-items:center; gap:14px; flex-wrap:wrap; background:var(--track); border:1px solid var(--border); border-left:4px solid var(--green); border-radius:10px; padding:14px 20px; margin-bottom:20px; }
  .rr-dot { width:12px; height:12px; border-radius:50%; background:var(--green); flex-shrink:0; animation:rr-pulse 2s ease-in-out infinite; box-shadow:0 0 0 4px rgba(45,106,79,0.25); }
  @keyframes rr-pulse { 0%,100% { box-shadow:0 0 0 4px rgba(45,106,79,0.25); } 50% { box-shadow:0 0 0 8px rgba(45,106,79,0.08); } }
  .rr-status-text { font-size:13px; color:#ccc; }
  .rr-status-text strong { color:#4caf82; }
  .rr-refresh { margin-left:auto; background:rgba(255,255,255,0.06); border:1px solid var(--border); color:#ccc; font-family:'Courier New',monospace; font-size:11px; letter-spacing:0.08em; padding:7px 14px; border-radius:6px; cursor:pointer; transition:background 0.2s,transform 0.15s; text-transform:uppercase; }
  .rr-refresh:hover { background:rgba(255,255,255,0.12); transform:translateY(-1px); }
  .rr-refresh.spinning .rr-spin { display:inline-block; animation:spin 0.8s linear infinite; }
  @keyframes spin { to { transform:rotate(360deg); } }

  .rr-next { background:var(--track); border:1px solid var(--border); border-radius:14px; padding:26px 22px; margin-bottom:24px; display:grid; grid-template-columns:1fr auto; gap:20px; align-items:center; position:relative; overflow:hidden; }
  .rr-next::before { content:'🚂'; position:absolute; right:-8px; bottom:-14px; font-size:90px; opacity:0.05; pointer-events:none; transform:scaleX(-1); }
  .rr-next-label { font-family:'Courier New',monospace; font-size:10px; letter-spacing:0.2em; text-transform:uppercase; color:var(--gold); margin-bottom:6px; }
  .rr-next-time { font-size:clamp(38px,7vw,58px); font-weight:900; color:#fff; line-height:1; }
  .rr-next-sub { font-size:13px; color:var(--smoke); margin-top:8px; }
  .rr-seats-row { display:flex; align-items:center; gap:10px; margin-top:12px; flex-wrap:wrap; }
  .rr-bar-wrap { flex:1; min-width:100px; height:6px; background:rgba(255,255,255,0.1); border-radius:3px; overflow:hidden; }
  .rr-bar-fill { height:100%; border-radius:3px; transition:width 0.6s ease; }
  .rr-seats-text { font-family:'Courier New',monospace; font-size:11px; color:var(--smoke); white-space:nowrap; }
  .rr-badge { padding:10px 16px; border-radius:8px; font-family:'Courier New',monospace; font-size:12px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#fff; text-align:center; white-space:nowrap; }

  .rr-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(230px,1fr)); gap:12px; margin-bottom:32px; }

  .rr-card { background:var(--card); border:1px solid var(--border); border-radius:12px; padding:16px; transition:transform 0.2s,box-shadow 0.2s; }
  .rr-card:hover { transform:translateY(-3px); box-shadow:0 8px 24px rgba(0,0,0,0.3); }
  .rr-card-top { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px; }
  .rr-card-time { font-size:24px; font-weight:800; color:#fff; line-height:1; }
  .rr-card-period { font-size:11px; color:var(--smoke); margin-top:2px; }
  .rr-pill { font-family:'Courier New',monospace; font-size:10px; font-weight:700; letter-spacing:0.07em; text-transform:uppercase; padding:4px 10px; border-radius:20px; }
  .pill-ontime   { background:rgba(45,106,79,0.2);    color:#4caf82; }
  .pill-boarding { background:rgba(232,160,32,0.2);   color:var(--amber); }
  .pill-delayed  { background:rgba(185,74,28,0.2);    color:#e07050; }
  .pill-full     { background:rgba(255,255,255,0.06); color:var(--smoke); }
  .rr-divider { height:1px; background:var(--border); margin:10px 0; }
  .rr-info-row { display:flex; justify-content:space-between; font-size:12px; color:var(--smoke); margin-bottom:4px; }
  .rr-info-row span:last-child { color:#ccc; font-weight:500; }
  .rr-card-bar { height:4px; background:rgba(255,255,255,0.08); border-radius:2px; overflow:hidden; margin-top:10px; }
  .rr-card-fill { height:100%; border-radius:2px; transition:width 0.5s; }
  .rr-alert { margin-top:10px; font-size:11px; font-family:'Courier New',monospace; padding:6px 10px; border-radius:6px; border-left:3px solid; }
  .alert-full { background:rgba(255,255,255,0.04); color:var(--smoke); border-color:#555; }

  .rr-book-btn { display:block; width:100%; margin-top:12px; padding:9px; background:rgba(201,148,58,0.15); border:1px solid var(--gold); color:var(--gold); font-family:'Courier New',monospace; font-size:11px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; text-align:center; border-radius:7px; text-decoration:none; transition:background 0.2s,transform 0.15s; cursor:pointer; }
  .rr-book-btn:hover { background:rgba(201,148,58,0.3); transform:translateY(-1px); }
  .rr-book-btn.disabled { opacity:0.35; pointer-events:none; border-color:var(--smoke); color:var(--smoke); background:transparent; }

  .rr-tracker { background:var(--track); border:1px solid var(--border); border-radius:14px; padding:26px 22px; margin-bottom:32px; }
  .rr-track-diagram { position:relative; margin:22px 0 14px; }
  .rr-track-line { height:5px; background:var(--steel); border-radius:3px; margin:26px 0; position:relative; }
  .rr-track-line::before,.rr-track-line::after { content:''; position:absolute; top:50%; transform:translateY(-50%); width:12px; height:12px; background:var(--gold); border-radius:50%; border:3px solid var(--track); }
  .rr-track-line::before { left:0; } .rr-track-line::after { right:0; }
  .rr-train-pos { position:absolute; top:50%; transform:translateY(-50%) translateX(-50%); font-size:20px; z-index:10; filter:drop-shadow(0 0 8px rgba(201,148,58,0.7)); transition:left 1.5s cubic-bezier(0.4,0,0.2,1); }
  .rr-stops { display:flex; justify-content:space-between; }
  .rr-stop { display:flex; flex-direction:column; align-items:center; gap:5px; }
  .rr-stop-dot { width:14px; height:14px; border-radius:50%; background:var(--steel); border:3px solid var(--track); z-index:2; }
  .rr-stop-dot.passed { background:var(--rust); } .rr-stop-dot.active { background:var(--gold); box-shadow:0 0 10px rgba(201,148,60,0.6); }
  .rr-stop-name { font-family:'Courier New',monospace; font-size:9px; color:var(--smoke); text-align:center; letter-spacing:0.06em; text-transform:uppercase; max-width:60px; }
  .rr-stop-name.active-name { color:var(--gold); }
  .rr-stats { display:grid; grid-template-columns:repeat(auto-fill,minmax(150px,1fr)); gap:10px; margin-top:18px; }
  .rr-stat { background:rgba(255,255,255,0.04); border:1px solid var(--border); border-radius:10px; padding:14px; }
  .rr-stat-label { font-family:'Courier New',monospace; font-size:9px; letter-spacing:0.15em; text-transform:uppercase; color:var(--smoke); margin-bottom:5px; }
  .rr-stat-value { font-size:20px; font-weight:700; color:#fff; }
  .rr-stat-sub { font-size:11px; color:var(--smoke); margin-top:2px; }

  @media (max-width:580px) {
    .rr-next { grid-template-columns:1fr; }
    .rr-clock { text-align:left; }
    .rr-stop-name { font-size:8px; max-width:46px; }
    .rr-date-switcher { gap:8px; }
  }
</style>

<div class="rr-wrap">

  <div class="rr-header">
    <div class="rr-header-left">
      <div class="rr-logo">🚂</div>
      <div>
        <div class="rr-title">Poway–Midland Railroad</div>
        <div class="rr-subtitle">Old Poway Park · Schedule &amp; Live Tracker</div>
      </div>
    </div>
    <div style="display:flex;align-items:center;gap:12px;">
      <a href="/railroad/calendar" title="View Operations Calendar" style="display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:10px;background:rgba(201,148,58,0.15);border:1px solid #c9943a;font-size:22px;text-decoration:none;flex-shrink:0;transition:background 0.2s,transform 0.15s;" onmouseover="this.style.background='rgba(201,148,58,0.3)';this.style.transform='translateY(-2px)'" onmouseout="this.style.background='rgba(201,148,58,0.15)';this.style.transform='none'">📅</a>
      <div class="rr-clock">
        <div class="time" id="rrTime">--:--:--</div>
        <div class="date" id="rrDate">---</div>
      </div>
    </div>
  </div>

  <div class="rr-ticker">
    <span class="rr-ticker-inner">
      🚂 &nbsp; WELCOME TO POWAY–MIDLAND RAILROAD &nbsp;·&nbsp;
      TRAIN RIDES EVERY WEEKEND &amp; HOLIDAYS &nbsp;·&nbsp;
      OLD POWAY PARK, POWAY CA &nbsp;·&nbsp;
      CHECK BELOW FOR TODAY'S SCHEDULE &nbsp;·&nbsp;&nbsp;
    </span>
  </div>

  <!-- Date Switcher -->
  <div class="rr-date-switcher">
    <label>📅 Date:</label>
    <select id="rrSelMonth" class="rr-date-input" onchange="rrDropdownChange()">
      <option value="0">January</option><option value="1">February</option>
      <option value="2">March</option><option value="3">April</option>
      <option value="4">May</option><option value="5">June</option>
      <option value="6">July</option><option value="7">August</option>
      <option value="8">September</option><option value="9">October</option>
      <option value="10">November</option><option value="11">December</option>
    </select>
    <select id="rrSelDay" class="rr-date-input" onchange="rrDropdownChange()" style="width:72px;"></select>
    <select id="rrSelYear" class="rr-date-input" onchange="rrDropdownChange()" style="width:90px;">
      <option value="2026">2026</option><option value="2027">2027</option>
    </select>
    <button class="rr-date-today" onclick="rrSetDate('today')">Today</button>
    <div class="rr-viewing-badge">Showing: <span id="rrViewingLabel">Today</span></div>
  </div>

  <div class="rr-status" id="rrStatus">
    <div class="rr-dot"></div>
    <div class="rr-status-text"><strong>TRAINS RUNNING ON TIME</strong> — Service operating normally</div>
    <button class="rr-refresh" id="rrRefreshBtn" onclick="rrRefresh()"><span class="rr-spin">↻</span> Refresh</button>
  </div>

  <div class="rr-label">Next Departure</div>
  <div class="rr-next">
    <div>
      <div class="rr-next-label">NEXT TRAIN DEPARTS</div>
      <div class="rr-next-time" id="rrNextTime">--:--</div>
      <div class="rr-next-sub"  id="rrNextSub">Loading schedule...</div>
      <div class="rr-seats-row">
        <div class="rr-bar-wrap"><div class="rr-bar-fill" id="rrNextBar" style="width:0%;background:var(--green)"></div></div>
        <div class="rr-seats-text" id="rrNextSeats">-- / -- seats</div>
      </div>
    </div>
    <div class="rr-badge" id="rrNextBadge" style="background:var(--green)">On Time</div>
  </div>

  <div class="rr-label">Schedule</div>
  <div class="rr-grid" id="rrGrid"><div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--smoke);font-family:'Courier New',monospace;font-size:12px;">Loading schedule...</div></div>

  <div class="rr-label">Live Tracker</div>
  <div class="rr-tracker">
    <div style="font-size:17px;font-weight:700;color:#fff;margin-bottom:4px;">Train Position</div>
    <div style="font-size:12px;color:var(--smoke);">Updates every 15 seconds</div>
    <div class="rr-track-diagram">
      <div style="position:relative;">
        <div class="rr-track-line"></div>
        <div class="rr-train-pos" id="rrTrainIcon" style="left:10%">🚂</div>
      </div>
      <div class="rr-stops" id="rrStops"></div>
    </div>
    <div class="rr-stats">
      <div class="rr-stat"><div class="rr-stat-label">Current Location</div><div class="rr-stat-value" id="rrLoc">—</div><div class="rr-stat-sub" id="rrLocSub">Loading...</div></div>
      <div class="rr-stat"><div class="rr-stat-label">Train Status</div><div class="rr-stat-value" id="rrStat">—</div><div class="rr-stat-sub" id="rrStatSub">—</div></div>
      <div class="rr-stat"><div class="rr-stat-label">Est. Arrival</div><div class="rr-stat-value" id="rrETA">—</div><div class="rr-stat-sub">at Main Station</div></div>
      <div class="rr-stat"><div class="rr-stat-label">Speed</div><div class="rr-stat-value" id="rrSpeed">—</div><div class="rr-stat-sub">mph</div></div>
    </div>
  </div>

</div>

<script>
  const BACKEND = 'http://localhost:8587';
  const RR_STOPS = ['Depot Station','Oak Grove','Midland Curve','Park Loop','Return to Depot'];

  let rrViewDate = null; // null = today
  let rrApiData  = null; // cached response from GET /api/schedule?date=...

  function getViewDate() {
    return rrViewDate ? new Date(rrViewDate + 'T12:00:00') : new Date();
  }

  function todayStr() {
    const t = new Date();
    return `${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,'0')}-${String(t.getDate()).padStart(2,'0')}`;
  }

  // ── Fetch real seat data from backend ──────────────────────────────────────
  async function rrFetchSchedule(dateStr) {
    try {
      const res = await fetch(`${BACKEND}/api/schedule?date=${dateStr}`, {
        credentials: 'include'
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return await res.json();
    } catch (e) {
      console.warn('Schedule fetch failed:', e);
      return null;
    }
  }

  // ── Build ride objects from API response ───────────────────────────────────
  function buildRidesFromApi(apiData, viewDate) {
    const now     = new Date();
    const isToday = viewDate.toDateString() === now.toDateString();

    if (!apiData || !apiData.operating) {
      return { open: false, rides: [], trainType: null };
    }

    const rides = apiData.rides.map(r => {
      const [hh, mm] = r.time.split(':').map(Number);
      const dep  = new Date(viewDate);
      dep.setHours(hh, mm, 0, 0);
      const diff = Math.round((dep - now) / 60000);

      let status;
      if (r.status === 'full')                     status = 'full';
      else if (isToday && diff < -15)              status = 'full';
      else if (isToday && diff < 0)                status = 'boarding';
      else                                         status = 'ontime';

      return {
        time:      r.time,
        h:         hh,
        diff,
        status,
        seats:     r.available,
        total:     r.capacity,
        taken:     r.booked,
        trainType: r.train_type,
        isToday,
        dateStr:   apiData.date
      };
    });

    return { open: true, rides, trainType: apiData.train_type };
  }

  const SC = {
    ontime:   {label:'On Time',  pill:'pill-ontime',   color:'var(--green)', bar:'#4caf82'},
    boarding: {label:'Boarding', pill:'pill-boarding',  color:'var(--amber)', bar:'var(--amber)'},
    full:     {label:'Full',     pill:'pill-full',      color:'var(--steel)', bar:'#666'},
  };

  // ── Render schedule using API data ─────────────────────────────────────────
  async function rrRenderSchedule() {
    const viewDate = getViewDate();
    const isToday  = viewDate.toDateString() === new Date().toDateString();
    const isFuture = viewDate > new Date();
    const dateStr  = `${viewDate.getFullYear()}-${String(viewDate.getMonth()+1).padStart(2,'0')}-${String(viewDate.getDate()).padStart(2,'0')}`;

    const grid = document.getElementById('rrGrid');
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--smoke);font-family:'Courier New',monospace;font-size:12px;">Loading from server...</div>`;

    const apiData = await rrFetchSchedule(dateStr);
    rrApiData = apiData;
    const { open, rides, trainType } = buildRidesFromApi(apiData, viewDate);

    const statusEl = document.getElementById('rrStatus');
    const dot = statusEl.querySelector('.rr-dot');
    const txt = statusEl.querySelector('.rr-status-text');

    if (!open) {
      statusEl.style.borderLeftColor = 'var(--steel)';
      dot.style.background = 'var(--steel)';
      dot.style.animation  = 'none';
      txt.innerHTML = `<strong style="color:var(--smoke)">NO OPERATION</strong> — No rides scheduled for this date`;
      document.getElementById('rrNextTime').textContent  = 'No Rides';
      document.getElementById('rrNextSub').textContent   = 'No train rides on this date.';
      document.getElementById('rrNextBadge').textContent = 'Closed';
      document.getElementById('rrNextBadge').style.background = 'var(--steel)';
      document.getElementById('rrNextSeats').textContent = '';
      document.getElementById('rrNextBar').style.width   = '0%';
      grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px 20px;color:var(--smoke);"><div style="font-size:36px;margin-bottom:10px;">🚫</div><div style="font-family:'Courier New',monospace;font-size:12px;">No operation on this date.<br><span style="opacity:0.6">Saturdays: Steam · Select Sundays: Cable Car or Speeder</span></div></div>`;
      return;
    }

    statusEl.style.borderLeftColor = 'var(--green)';
    dot.style.background = 'var(--green)';
    dot.style.animation  = '';
    txt.innerHTML = `<strong>TRAINS RUNNING</strong> — ${trainType} · Last ride at 1:45pm`;

    // Next departure
    const upcoming = isToday ? rides.filter(r => r.diff > -5 && r.status !== 'full') : rides;
    const next = upcoming[0];
    if (next) {
      document.getElementById('rrNextTime').textContent = next.time;
      let sub = '';
      if (isFuture)          sub = `First ride at ${rides[0].time} · ${trainType}`;
      else if (next.diff<=0) sub = `Boarding now! · ${trainType}`;
      else if (next.diff<60) sub = `Departs in ${next.diff} min · ${trainType}`;
      else                   sub = `Departs in ${Math.floor(next.diff/60)}h ${next.diff%60}m · ${trainType}`;
      document.getElementById('rrNextSub').textContent = sub;
      const pct = Math.round((next.taken / next.total) * 100);
      const bar = document.getElementById('rrNextBar');
      bar.style.width      = pct + '%';
      bar.style.background = pct>80 ? 'var(--red)' : pct>50 ? 'var(--amber)' : 'var(--green)';
      document.getElementById('rrNextSeats').textContent = `${next.seats} / ${next.total} seats available`;
      const cfg = SC[next.status];
      document.getElementById('rrNextBadge').textContent       = cfg.label;
      document.getElementById('rrNextBadge').style.background  = cfg.color;
    }

    // Ride cards
    grid.innerHTML = '';
    rides.forEach(r => {
      const cfg = SC[r.status];
      const pct = Math.round((r.taken / r.total) * 100);
      const canBook = r.status !== 'full';
      const bookUrl = `/railroad/book?date=${r.dateStr}&time=${encodeURIComponent(r.time)}&type=${encodeURIComponent(r.trainType)}&seats=${r.seats}`;
      const card = document.createElement('div');
      card.className = 'rr-card';
      card.innerHTML = `
        <div class="rr-card-top">
          <div>
            <div class="rr-card-time">${r.time}</div>
            <div class="rr-card-period">${r.h<12?'Morning':'Afternoon'} · ${r.trainType}</div>
          </div>
          <span class="rr-pill ${cfg.pill}">${cfg.label}</span>
        </div>
        <div class="rr-divider"></div>
        <div class="rr-info-row"><span>Available Seats</span><span>${r.status==='full'?'0':r.seats} / ${r.total}</span></div>
        <div class="rr-info-row"><span>Ride Duration</span><span>~10–15 min</span></div>
        <div class="rr-info-row"><span>Adult Fare</span><span>${r.trainType.includes('Speeder')?'$4.00':'$5.00'}</span></div>
        <div class="rr-card-bar"><div class="rr-card-fill" style="width:${pct}%;background:${cfg.bar}"></div></div>
        ${r.status==='full'?`<div class="rr-alert alert-full">🔒 This ride is fully booked</div>`:''}
        <a href="${bookUrl}" class="rr-book-btn ${canBook?'':'disabled'}">${canBook?'🎟 Book This Ride':'Fully Booked'}</a>
      `;
      grid.appendChild(card);
    });
  }

  function rrRenderTracker() {
    const viewDate = getViewDate();
    const isToday  = viewDate.toDateString() === new Date().toDateString();

    if (!rrApiData || !rrApiData.operating || !isToday) {
      document.getElementById('rrLoc').textContent    = isToday ? 'No Service' : '—';
      document.getElementById('rrLocSub').textContent = isToday ? 'Not operating today' : 'Live tracker only available for today';
      document.getElementById('rrStat').textContent   = 'Offline';
      document.getElementById('rrStatSub').textContent = '—';
      document.getElementById('rrETA').textContent    = '—';
      document.getElementById('rrSpeed').textContent  = '0';
      document.getElementById('rrTrainIcon').style.left = '6%';
      document.getElementById('rrStops').innerHTML = '';
      return;
    }

    const p  = (Math.sin(Date.now()/30000)+1)/2;
    const si = Math.min(Math.floor(p*RR_STOPS.length), RR_STOPS.length-1);
    const moving = Math.random() > 0.2;
    const stopsEl = document.getElementById('rrStops');
    stopsEl.innerHTML = '';
    RR_STOPS.forEach((s,i) => {
      const d = document.createElement('div'); d.className = 'rr-stop';
      d.innerHTML = `<div class="rr-stop-dot ${i<si?'passed':i===si?'active':''}"></div><div class="rr-stop-name ${i===si?'active-name':''}">${s}</div>`;
      stopsEl.appendChild(d);
    });
    document.getElementById('rrTrainIcon').style.left     = (Math.round(p*88)+6)+'%';
    document.getElementById('rrLoc').textContent          = RR_STOPS[si];
    document.getElementById('rrLocSub').textContent       = si===0?'At depot':si===RR_STOPS.length-1?'Returning':'In transit';
    document.getElementById('rrStat').textContent         = moving?'Moving':'Stopped';
    document.getElementById('rrStatSub').textContent      = moving?'En route':'At platform';
    document.getElementById('rrETA').textContent          = moving?`~${Math.round((1-p)*12+2)} min`:'—';
    document.getElementById('rrSpeed').textContent        = moving?Math.round(8+Math.random()*6):0;
  }

  function rrClock() {
    const now = new Date(), pad = n => String(n).padStart(2,'0');
    document.getElementById('rrTime').textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    document.getElementById('rrDate').textContent = `${days[now.getDay()]} · ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
  }

  async function rrRefresh() {
    const btn = document.getElementById('rrRefreshBtn');
    btn.classList.add('spinning'); btn.disabled = true;
    await rrRenderSchedule();
    rrRenderTracker();
    btn.classList.remove('spinning'); btn.disabled = false;
  }

  function rrDropdownChange() {
    const y = parseInt(document.getElementById('rrSelYear').value);
    const m = parseInt(document.getElementById('rrSelMonth').value);
    const daysInMonth = new Date(y, m+1, 0).getDate();
    const dayEl = document.getElementById('rrSelDay');
    const curDay = parseInt(dayEl.value) || 1;
    dayEl.innerHTML = '';
    for (let d = 1; d <= daysInMonth; d++) {
      const opt = document.createElement('option');
      opt.value = d; opt.textContent = d;
      if (d === curDay) opt.selected = true;
      dayEl.appendChild(opt);
    }
    const mm = String(m+1).padStart(2,'0');
    const dd = String(parseInt(dayEl.value)).padStart(2,'0');
    rrSetDate(`${y}-${mm}-${dd}`);
  }

  function rrSetDropdown(dateStr) {
    const parts = dateStr.split('-');
    const y = parseInt(parts[0]), m = parseInt(parts[1])-1, d = parseInt(parts[2]);
    document.getElementById('rrSelYear').value  = y;
    document.getElementById('rrSelMonth').value = m;
    const daysInMonth = new Date(y, m+1, 0).getDate();
    const dayEl = document.getElementById('rrSelDay');
    dayEl.innerHTML = '';
    for (let i = 1; i <= daysInMonth; i++) {
      const opt = document.createElement('option');
      opt.value = i; opt.textContent = i;
      if (i === d) opt.selected = true;
      dayEl.appendChild(opt);
    }
  }

  function rrSetDate(val) {
    const ts = todayStr();
    if (val === 'today' || val === ts) {
      rrViewDate = null;
      rrSetDropdown(ts);
      document.getElementById('rrViewingLabel').textContent = 'Today';
    } else {
      rrViewDate = val;
      rrSetDropdown(val);
      const d = new Date(val + 'T12:00:00');
      const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      const days   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      document.getElementById('rrViewingLabel').textContent = `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    }
    rrRenderSchedule();
    rrRenderTracker();
  }

  function rrInit() {
    const ts = todayStr();
    rrSetDropdown(ts);
    const params    = new URLSearchParams(window.location.search);
    const dateParam = params.get('date');
    if (dateParam && dateParam !== ts) {
      rrSetDate(dateParam);
    } else {
      rrSetDate('today');
    }
  }

  setInterval(rrClock, 1000); rrClock();
  setInterval(rrRenderTracker, 15000);
  setInterval(rrRenderSchedule, 60000);
  rrInit();
</script>