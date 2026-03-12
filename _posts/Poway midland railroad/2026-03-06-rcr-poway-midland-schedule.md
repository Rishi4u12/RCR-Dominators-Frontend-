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

  .rr-wrap {
    max-width: 1000px;
    margin: 0 auto;
    padding: 32px 16px 64px;
  }

  .rr-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
    background: var(--track);
    border-radius: 14px;
    padding: 24px 28px;
    margin-bottom: 12px;
    border: 1px solid var(--border);
  }

  .rr-header-left { display: flex; align-items: center; gap: 14px; }

  .rr-logo {
    font-size: 32px;
    background: var(--rust);
    border-radius: 50%;
    width: 52px; height: 52px;
    display: flex; align-items: center; justify-content: center;
    border: 2px solid var(--gold);
    flex-shrink: 0;
  }

  .rr-title { font-size: clamp(15px,3vw,20px); font-weight: 700; color: #fff; margin: 0; line-height: 1.2; }
  .rr-subtitle { font-size: 10px; color: var(--gold); letter-spacing: 0.15em; text-transform: uppercase; margin-top: 3px; }

  .rr-clock { text-align: right; }
  .rr-clock .time { font-family: 'Courier New', monospace; font-size: clamp(18px,3.5vw,28px); color: #fff; font-weight: 700; letter-spacing: 0.05em; }
  .rr-clock .date { font-size: 10px; color: var(--smoke); letter-spacing: 0.08em; text-transform: uppercase; }

  .rr-ticker {
    background: var(--rust);
    border-radius: 8px;
    overflow: hidden;
    white-space: nowrap;
    padding: 7px 0;
    margin-bottom: 20px;
  }

  .rr-ticker-inner {
    display: inline-block;
    animation: rr-scroll 30s linear infinite;
    font-family: 'Courier New', monospace;
    font-size: 11px;
    color: #fff;
    letter-spacing: 0.1em;
  }

  @keyframes rr-scroll { from { transform: translateX(100vw); } to { transform: translateX(-100%); } }

  .rr-label {
    font-family: 'Courier New', monospace;
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
  }
  .rr-label::after { content: ''; flex: 1; height: 1px; background: var(--gold); opacity: 0.2; }

  .rr-status {
    display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
    background: var(--track);
    border: 1px solid var(--border);
    border-left: 4px solid var(--green);
    border-radius: 10px;
    padding: 14px 20px;
    margin-bottom: 20px;
  }

  .rr-dot {
    width: 12px; height: 12px; border-radius: 50%;
    background: var(--green); flex-shrink: 0;
    animation: rr-pulse 2s ease-in-out infinite;
    box-shadow: 0 0 0 4px rgba(45,106,79,0.25);
  }

  @keyframes rr-pulse {
    0%,100% { box-shadow: 0 0 0 4px rgba(45,106,79,0.25); }
    50%     { box-shadow: 0 0 0 8px rgba(45,106,79,0.08); }
  }

  .rr-status-text { font-size: 13px; color: #ccc; }
  .rr-status-text strong { color: #4caf82; }

  .rr-refresh {
    margin-left: auto;
    background: rgba(255,255,255,0.06);
    border: 1px solid var(--border);
    color: #ccc;
    font-family: 'Courier New', monospace;
    font-size: 11px;
    letter-spacing: 0.08em;
    padding: 7px 14px;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
    text-transform: uppercase;
  }
  .rr-refresh:hover { background: rgba(255,255,255,0.12); transform: translateY(-1px); }
  .rr-refresh.spinning .rr-spin { display: inline-block; animation: spin 0.8s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }

  .rr-next {
    background: var(--track);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 26px 22px;
    margin-bottom: 24px;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;
    align-items: center;
    position: relative;
    overflow: hidden;
  }
  .rr-next::before { content:'🚂'; position:absolute; right:-8px; bottom:-14px; font-size:90px; opacity:0.05; pointer-events:none; transform:scaleX(-1); }

  .rr-next-label { font-family:'Courier New',monospace; font-size:10px; letter-spacing:0.2em; text-transform:uppercase; color:var(--gold); margin-bottom:6px; }
  .rr-next-time  { font-size: clamp(38px,7vw,58px); font-weight:900; color:#fff; line-height:1; }
  .rr-next-sub   { font-size:13px; color:var(--smoke); margin-top:8px; }

  .rr-seats-row { display:flex; align-items:center; gap:10px; margin-top:12px; flex-wrap:wrap; }
  .rr-bar-wrap  { flex:1; min-width:100px; height:6px; background:rgba(255,255,255,0.1); border-radius:3px; overflow:hidden; }
  .rr-bar-fill  { height:100%; border-radius:3px; transition:width 0.6s ease; }
  .rr-seats-text { font-family:'Courier New',monospace; font-size:11px; color:var(--smoke); white-space:nowrap; }

  .rr-badge { padding:10px 16px; border-radius:8px; font-family:'Courier New',monospace; font-size:12px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#fff; text-align:center; white-space:nowrap; }

  .rr-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(230px,1fr)); gap:12px; margin-bottom:32px; }

  .rr-card { background:var(--card); border:1px solid var(--border); border-radius:12px; padding:16px; transition:transform 0.2s,box-shadow 0.2s; }
  .rr-card:hover { transform:translateY(-3px); box-shadow:0 8px 24px rgba(0,0,0,0.3); }

  .rr-card-top { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px; }
  .rr-card-time   { font-size:24px; font-weight:800; color:#fff; line-height:1; }
  .rr-card-period { font-size:11px; color:var(--smoke); margin-top:2px; }

  .rr-pill { font-family:'Courier New',monospace; font-size:10px; font-weight:700; letter-spacing:0.07em; text-transform:uppercase; padding:4px 10px; border-radius:20px; }
  .pill-ontime   { background:rgba(45,106,79,0.2);  color:#4caf82; }
  .pill-boarding { background:rgba(232,160,32,0.2); color:var(--amber); }
  .pill-delayed  { background:rgba(185,74,28,0.2);  color:#e07050; }
  .pill-full     { background:rgba(255,255,255,0.06); color:var(--smoke); }

  .rr-divider { height:1px; background:var(--border); margin:10px 0; }
  .rr-info-row { display:flex; justify-content:space-between; font-size:12px; color:var(--smoke); margin-bottom:4px; }
  .rr-info-row span:last-child { color:#ccc; font-weight:500; }
  .rr-card-bar  { height:4px; background:rgba(255,255,255,0.08); border-radius:2px; overflow:hidden; margin-top:10px; }
  .rr-card-fill { height:100%; border-radius:2px; transition:width 0.5s; }

  .rr-alert { margin-top:10px; font-size:11px; font-family:'Courier New',monospace; padding:6px 10px; border-radius:6px; border-left:3px solid; }
  .alert-delay { background:rgba(185,74,28,0.15); color:#e07050; border-color:var(--rust); }
  .alert-full  { background:rgba(255,255,255,0.04); color:var(--smoke); border-color:#555; }

  .rr-tracker { background:var(--track); border:1px solid var(--border); border-radius:14px; padding:26px 22px; margin-bottom:32px; }

  .rr-track-diagram { position:relative; margin:22px 0 14px; }
  .rr-track-line { height:5px; background:var(--steel); border-radius:3px; margin:26px 0; position:relative; }
  .rr-track-line::before,.rr-track-line::after { content:''; position:absolute; top:50%; transform:translateY(-50%); width:12px; height:12px; background:var(--gold); border-radius:50%; border:3px solid var(--track); }
  .rr-track-line::before { left:0; }
  .rr-track-line::after  { right:0; }

  .rr-train-pos { position:absolute; top:50%; transform:translateY(-50%) translateX(-50%); font-size:20px; z-index:10; filter:drop-shadow(0 0 8px rgba(201,148,58,0.7)); transition:left 1.5s cubic-bezier(0.4,0,0.2,1); }

  .rr-stops { display:flex; justify-content:space-between; }
  .rr-stop  { display:flex; flex-direction:column; align-items:center; gap:5px; }

  .rr-stop-dot { width:14px; height:14px; border-radius:50%; background:var(--steel); border:3px solid var(--track); z-index:2; }
  .rr-stop-dot.passed { background:var(--rust); }
  .rr-stop-dot.active { background:var(--gold); box-shadow:0 0 10px rgba(201,148,58,0.6); }

  .rr-stop-name { font-family:'Courier New',monospace; font-size:9px; color:var(--smoke); text-align:center; letter-spacing:0.06em; text-transform:uppercase; max-width:60px; }
  .rr-stop-name.active-name { color:var(--gold); }

  .rr-stats { display:grid; grid-template-columns:repeat(auto-fill,minmax(150px,1fr)); gap:10px; margin-top:18px; }
  .rr-stat  { background:rgba(255,255,255,0.04); border:1px solid var(--border); border-radius:10px; padding:14px; }
  .rr-stat-label { font-family:'Courier New',monospace; font-size:9px; letter-spacing:0.15em; text-transform:uppercase; color:var(--smoke); margin-bottom:5px; }
  .rr-stat-value { font-size:20px; font-weight:700; color:#fff; }
  .rr-stat-sub   { font-size:11px; color:var(--smoke); margin-top:2px; }

  @media (max-width:580px) {
    .rr-next { grid-template-columns:1fr; }
    .rr-clock { text-align:left; }
    .rr-stop-name { font-size:8px; max-width:46px; }
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
    <div class="rr-clock">
      <div class="time" id="rrTime">--:--:--</div>
      <div class="date" id="rrDate">---</div>
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

  <div class="rr-status">
    <div class="rr-dot"></div>
    <div class="rr-status-text"><strong>TRAINS RUNNING ON TIME</strong> — Service operating normally today</div>
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

  <div class="rr-label">Today's Schedule</div>
  <div class="rr-grid" id="rrGrid"></div>

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
  function rrClock() {
    const now = new Date(), pad = n => String(n).padStart(2,'0');
    document.getElementById('rrTime').textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    document.getElementById('rrDate').textContent = `${days[now.getDay()]} · ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
  }
  setInterval(rrClock,1000); rrClock();

  const RR_STOPS = ['Depot Station','Oak Grove','Midland Curve','Park Loop','Return to Depot'];

  // Real Poway-Midland Railroad schedule data
  // Source: powaymidlandrr.org/visit/
  // Saturdays: Steam Locomotive 10am-2pm (max 65 riders)
  // Sundays: Cable Car or Speeder 11am-2pm (max 30 riders)
  // Last ride: 15 min before closing = 1:45pm
  // 2nd Sunday each month: NO OPERATION

  function getTodaySchedule() {
    const now  = new Date();
    const dow  = now.getDay(); // 0=Sun, 6=Sat
    const date = now.getDate();

    // Check if 2nd Sunday (no operation)
    const isSecondSunday = dow === 0 && date >= 8 && date <= 14;

    if (dow === 6) {
      // Saturday — Steam Locomotive, rides every ~15 min, 10am-1:45pm
      return {
        type: 'Steam Locomotive 🚂',
        times: [{h:10,m:0},{h:10,m:15},{h:10,m:30},{h:10,m:45},
                {h:11,m:0},{h:11,m:15},{h:11,m:30},{h:11,m:45},
                {h:12,m:0},{h:12,m:15},{h:12,m:30},{h:12,m:45},
                {h:13,m:0},{h:13,m:15},{h:13,m:30},{h:13,m:45}],
        totalSeats: 65,
        open: true
      };
    } else if (dow === 0 && !isSecondSunday) {
      // Sunday (not 2nd) — Cable Car or Speeder, 11am-1:45pm
      // Alternate by week: odd weeks = Cable Car, even weeks = Speeder
      const weekNum = Math.ceil(date / 7);
      const isSpeeder = weekNum % 2 === 0;
      return {
        type: isSpeeder ? 'Speeder w/ Ore Cars 🚃' : 'Cable Car 🚌',
        times: [{h:11,m:0},{h:11,m:20},{h:11,m:40},
                {h:12,m:0},{h:12,m:20},{h:12,m:40},
                {h:13,m:0},{h:13,m:20},{h:13,m:45}],
        totalSeats: 30,
        open: true
      };
    } else {
      // Weekday or 2nd Sunday — no operation
      return { type: null, times: [], totalSeats: 0, open: false };
    }
  }

  function getMockSchedule() {
    const now      = new Date();
    const schedule = getTodaySchedule();

    if (!schedule.open) return [];

    return schedule.times.map((t, i) => {
      const dep  = new Date(now); dep.setHours(t.h, t.m, 0, 0);
      const diff = Math.round((dep - now) / 60000);
      const total = schedule.totalSeats;
      let taken, status;
      if      (diff < -15) { status='full';     taken=total; }
      else if (diff < 0)   { status='boarding'; taken=Math.floor(Math.random()*Math.floor(total*0.3))+Math.floor(total*0.6); }
      else                 { status='ontime';   taken=Math.floor(Math.random()*Math.floor(total*0.5)); }
      return {
        time: `${String(t.h).padStart(2,'0')}:${String(t.m).padStart(2,'0')}`,
        h: t.h, diff, status,
        seats: total - taken, total, taken,
        delay: 0,
        trainType: schedule.type
      };
    });
  }

  function getMockTracker() {
    const schedule = getTodaySchedule();
    if (!schedule.open) return { open: false };
    const p=(Math.sin(Date.now()/30000)+1)/2, si=Math.min(Math.floor(p*RR_STOPS.length),RR_STOPS.length-1), moving=Math.random()>0.2;
    return { open:true, p, si, moving, speed:moving?Math.round(8+Math.random()*6):0, eta:moving?Math.round((1-p)*12+2):'—' };
  }

  const SC = {
    ontime:   {label:'On Time',  pill:'pill-ontime',   color:'var(--green)', bar:'#4caf82'},
    boarding: {label:'Boarding', pill:'pill-boarding',  color:'var(--amber)', bar:'var(--amber)'},
    delayed:  {label:'Delayed',  pill:'pill-delayed',   color:'var(--rust)',  bar:'#e07050'},
    full:     {label:'Full',     pill:'pill-full',      color:'var(--steel)', bar:'#666'},
  };

  function rrRenderSchedule() {
    const rides=getMockSchedule(), upcoming=rides.filter(r=>r.diff>-5&&r.status!=='full'), next=upcoming[0];
    if (next) {
      document.getElementById('rrNextTime').textContent = next.time;
      const mins=next.diff, sub=mins<=0?'Boarding now!':mins<60?`Departs in ${mins} minute${mins!==1?'s':''}`:`Departs in ${Math.floor(mins/60)}h ${mins%60}m`;
      document.getElementById('rrNextSub').textContent = sub+(next.delay?` (+${next.delay} min delay)`:'');
      const pct=Math.round((next.taken/next.total)*100), bar=document.getElementById('rrNextBar');
      bar.style.width=pct+'%'; bar.style.background=pct>80?'var(--red)':pct>50?'var(--amber)':'var(--green)';
      document.getElementById('rrNextSeats').textContent=`${next.seats} / ${next.total} seats available`;
      const cfg=SC[next.status];
      document.getElementById('rrNextBadge').textContent=cfg.label;
      document.getElementById('rrNextBadge').style.background=cfg.color;
    } else {
      document.getElementById('rrNextTime').textContent='No Rides';
      document.getElementById('rrNextSub').textContent='No train rides scheduled at this time.';
    }
    const grid=document.getElementById('rrGrid'); grid.innerHTML='';
    rides.forEach(r => {
      const cfg=SC[r.status], pct=Math.round((r.taken/r.total)*100), card=document.createElement('div');
      card.className='rr-card';
      card.innerHTML=`
        <div class="rr-card-top">
          <div><div class="rr-card-time">${r.time}</div><div class="rr-card-period">${r.h<12?'Morning':r.h<15?'Afternoon':'Late Afternoon'} Departure</div></div>
          <span class="rr-pill ${cfg.pill}">${cfg.label}</span>
        </div>
        <div class="rr-divider"></div>
        <div class="rr-info-row"><span>Available Seats</span><span>${r.status==='full'?'0':r.seats} / ${r.total}</span></div>
        <div class="rr-info-row"><span>Ride Duration</span><span>~25 min</span></div>
        ${r.delay?`<div class="rr-info-row"><span>Delay</span><span>+${r.delay} min</span></div>`:''}
        <div class="rr-card-bar"><div class="rr-card-fill" style="width:${pct}%;background:${cfg.bar}"></div></div>
        ${r.status==='delayed'?`<div class="rr-alert alert-delay">⚠ Delayed ~${r.delay} min — mechanical check</div>`:''}
        ${r.status==='full'?`<div class="rr-alert alert-full">🔒 This ride is fully booked</div>`:''}
      `;
      grid.appendChild(card);
    });
  }

  function rrRenderTracker() {
    const t=getMockTracker(), stopsEl=document.getElementById('rrStops');
    stopsEl.innerHTML='';
    RR_STOPS.forEach((s,i) => {
      const d=document.createElement('div'); d.className='rr-stop';
      d.innerHTML=`<div class="rr-stop-dot ${i<t.si?'passed':i===t.si?'active':''}"></div><div class="rr-stop-name ${i===t.si?'active-name':''}">${s}</div>`;
      stopsEl.appendChild(d);
    });
    document.getElementById('rrTrainIcon').style.left=(Math.round(t.p*88)+6)+'%';
    document.getElementById('rrLoc').textContent=RR_STOPS[t.si];
    document.getElementById('rrLocSub').textContent=t.si===0?'At station':t.si===RR_STOPS.length-1?'Final stop':'In transit';
    document.getElementById('rrStat').textContent=t.moving?'Moving':'Stopped';
    document.getElementById('rrStatSub').textContent=t.moving?'En route':'At platform';
    document.getElementById('rrETA').textContent=t.eta==='—'?'—':`~${t.eta} min`;
    document.getElementById('rrSpeed').textContent=t.speed;
  }

  function rrRefresh() {
    const btn=document.getElementById('rrRefreshBtn');
    btn.classList.add('spinning'); btn.disabled=true;
    setTimeout(()=>{ rrRenderSchedule(); rrRenderTracker(); btn.classList.remove('spinning'); btn.disabled=false; },900);
  }

  rrRenderSchedule(); rrRenderTracker();
  setInterval(rrRenderTracker,15000);
  setInterval(rrRenderSchedule,60000);
</script>