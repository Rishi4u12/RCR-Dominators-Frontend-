---
layout: base
title: Railroad Operations Calendar
permalink: /railroad/calendar
---

<style>
  :root {
    --rust:   #b94a1c;
    --gold:   #c9943a;
    --green:  #2d6a4f;
    --amber:  #e8a020;
    --steel:  #5a6872;
    --light-bg:   #faf8f5;
    --white:      #ffffff;
    --border:     #e8e0d0;
    --text:       #2c1f0e;
    --subtext:    #7a6a58;
    --sat-bg:     #fff8f0;
    --sun-bg:     #f0f7ff;
    --no-op:      #f5f5f5;
  }

  .cal-wrap {
    max-width: 1000px;
    margin: 0 auto;
    padding: 28px 16px 60px;
    background: var(--light-bg);
    min-height: 100vh;
  }

  /* ── HEADER ── */
  .cal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 14px;
    margin-bottom: 24px;
  }

  .cal-header-left { display: flex; align-items: center; gap: 12px; }

  .cal-logo {
    font-size: 28px;
    background: var(--rust);
    border-radius: 10px;
    width: 48px; height: 48px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }

  .cal-title { font-size: clamp(16px,2.5vw,20px); font-weight: 700; color: var(--text); margin: 0; }
  .cal-subtitle { font-size: 11px; color: var(--subtext); letter-spacing: 0.1em; text-transform: uppercase; margin-top: 2px; }

  .cal-back {
    display: flex; align-items: center; gap: 6px;
    padding: 8px 16px;
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--rust);
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
    transition: background 0.2s, transform 0.15s;
  }
  .cal-back:hover { background: #fff0ea; transform: translateY(-1px); }

  /* ── NAV ── */
  .cal-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    flex-wrap: wrap;
    gap: 12px;
  }

  .cal-month-title {
    font-size: clamp(20px, 4vw, 28px);
    font-weight: 800;
    color: var(--text);
    letter-spacing: -0.01em;
  }

  .cal-nav-btns { display: flex; gap: 8px; align-items: center; }

  .cal-nav-btn {
    width: 36px; height: 36px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--white);
    color: var(--text);
    font-size: 16px;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.2s, transform 0.15s;
  }
  .cal-nav-btn:hover { background: #f0ebe0; transform: translateY(-1px); }

  .cal-today-btn {
    padding: 8px 16px;
    border-radius: 8px;
    border: 1px solid var(--rust);
    background: var(--white);
    color: var(--rust);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: background 0.2s;
  }
  .cal-today-btn:hover { background: #fff0ea; }

  /* ── LEGEND ── */
  .cal-legend {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: 16px;
    padding: 12px 16px;
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 10px;
  }

  .legend-item { display: flex; align-items: center; gap: 7px; font-size: 12px; color: var(--subtext); }
  .legend-dot  { width: 12px; height: 12px; border-radius: 3px; flex-shrink: 0; }
  .dot-steam   { background: #e8a020; }
  .dot-cable   { background: #3b82f6; }
  .dot-speeder { background: #10b981; }
  .dot-none    { background: #d1d5db; }

  /* ── GRID ── */
  .cal-grid-header {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 3px;
    margin-bottom: 3px;
  }

  .cal-day-label {
    text-align: center;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--subtext);
    padding: 8px 4px;
  }
  .cal-day-label.weekend { color: var(--rust); }

  .cal-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 3px;
  }

  .cal-cell {
    min-height: 90px;
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 8px;
    position: relative;
    transition: box-shadow 0.2s;
  }

  .cal-cell:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
  .cal-cell.other-month { background: #f9f9f9; opacity: 0.5; }
  .cal-cell.today { border: 2px solid var(--rust); }
  .cal-cell.today .cal-date-num { color: var(--rust); font-weight: 800; }

  .cal-date-num {
    font-size: 13px;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 5px;
  }

  .cal-event {
    font-size: 10px;
    font-weight: 600;
    padding: 3px 7px;
    border-radius: 5px;
    margin-bottom: 3px;
    line-height: 1.3;
    letter-spacing: 0.02em;
  }

  .event-steam   { background: #fff3cd; color: #856404; border-left: 3px solid #e8a020; }
  .event-cable   { background: #dbeafe; color: #1d4ed8; border-left: 3px solid #3b82f6; }
  .event-speeder { background: #d1fae5; color: #065f46; border-left: 3px solid #10b981; }
  .event-none    { background: #f3f4f6; color: #6b7280; border-left: 3px solid #d1d5db; font-style: italic; }

  .cal-event-time {
    font-size: 9px;
    color: var(--subtext);
    margin-top: 2px;
  }

  /* ── INFO BOX ── */
  .cal-info {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px;
    margin-top: 20px;
  }

  .cal-info-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 16px;
    border-top: 3px solid var(--rust);
  }

  .cal-info-label {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--subtext);
    margin-bottom: 6px;
  }

  .cal-info-value {
    font-size: 15px;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 3px;
  }

  .cal-info-sub { font-size: 11px; color: var(--subtext); line-height: 1.4; }

  @media (max-width: 580px) {
    .cal-cell { min-height: 64px; padding: 5px; }
    .cal-event { font-size: 9px; padding: 2px 5px; }
    .cal-date-num { font-size: 11px; }
    .cal-event-time { display: none; }
  }
</style>

<div class="cal-wrap">

  <!-- Header -->
  <div class="cal-header">
    <div class="cal-header-left">
      <div class="cal-logo">🚂</div>
      <div>
        <div class="cal-title">Operations Calendar</div>
        <div class="cal-subtitle">Poway–Midland Railroad · Old Poway Park</div>
      </div>
    </div>
    <a href="/railroad/schedule" class="cal-back">← Schedule &amp; Tracker</a>
  </div>

  <!-- Nav -->
  <div class="cal-nav">
    <div class="cal-month-title" id="calMonthTitle">March 2026</div>
    <div class="cal-nav-btns">
      <button class="cal-nav-btn" onclick="calChangeMonth(-1)">‹</button>
      <button class="cal-today-btn" onclick="calGoToday()">Today</button>
      <button class="cal-nav-btn" onclick="calChangeMonth(1)">›</button>
    </div>
  </div>

  <!-- Legend -->
  <div class="cal-legend">
    <div class="legend-item"><div class="legend-dot dot-steam"></div> Steam Locomotive (Sat 10am–2pm)</div>
    <div class="legend-item"><div class="legend-dot dot-cable"></div> Cable Car (Sun 11am–2pm)</div>
    <div class="legend-item"><div class="legend-dot dot-speeder"></div> Speeder w/ Ore Cars (Sun 11am–2pm)</div>
    <div class="legend-item"><div class="legend-dot dot-none"></div> No Operation</div>
  </div>

  <!-- Day labels -->
  <div class="cal-grid-header">
    <div class="cal-day-label weekend">Sun</div>
    <div class="cal-day-label">Mon</div>
    <div class="cal-day-label">Tue</div>
    <div class="cal-day-label">Wed</div>
    <div class="cal-day-label">Thu</div>
    <div class="cal-day-label">Fri</div>
    <div class="cal-day-label weekend">Sat</div>
  </div>

  <!-- Calendar grid -->
  <div class="cal-grid" id="calGrid"></div>

  <!-- Info cards -->
  <div class="cal-info">
    <div class="cal-info-card">
      <div class="cal-info-label">Steam Locomotive</div>
      <div class="cal-info-value">Every Saturday</div>
      <div class="cal-info-sub">10:00am – 2:00pm<br>Up to 65 riders · Adult $5 · Child $2</div>
    </div>
    <div class="cal-info-card" style="border-top-color:#3b82f6;">
      <div class="cal-info-label">Cable Car</div>
      <div class="cal-info-value">Select Sundays</div>
      <div class="cal-info-sub">11:00am – 2:00pm<br>Up to 30 riders · Adult $5 · Child $2</div>
    </div>
    <div class="cal-info-card" style="border-top-color:#10b981;">
      <div class="cal-info-label">Speeder w/ Ore Cars</div>
      <div class="cal-info-value">Select Sundays</div>
      <div class="cal-info-sub">11:00am – 2:00pm<br>Up to 30 riders · Adult $4 · Child $2</div>
    </div>
    <div class="cal-info-card" style="border-top-color:#9ca3af;">
      <div class="cal-info-label">No Operation</div>
      <div class="cal-info-value">2nd Sunday / Weekdays</div>
      <div class="cal-info-sub">No rides on 2nd Sunday each month or weekdays.<br>Weather may also affect operation.</div>
    </div>
  </div>

</div>

<script>
  // Real PMRR schedule data from powaymidlandrr.org/visit/
  // Key: "YYYY-M-D" → event type
  const RR_SCHEDULE = {
    // March 2026
    '2026-3-7':  'steam',
    '2026-3-8':  'none',      // 2nd Sunday
    '2026-3-14': 'steam',
    '2026-3-15': 'cable',
    '2026-3-21': 'steam',
    '2026-3-22': 'speeder',
    '2026-3-28': 'steam',
    '2026-3-29': 'cable',
    // April 2026
    '2026-4-4':  'steam',
    '2026-4-5':  'cable',
    '2026-4-11': 'steam',
    '2026-4-12': 'none',      // 2nd Sunday
    '2026-4-18': 'steam',
    '2026-4-19': 'cable',
    '2026-4-25': 'steam',
    '2026-4-26': 'speeder',
    // May 2026
    '2026-5-2':  'steam',
    '2026-5-3':  'cable',
    '2026-5-9':  'steam',
    '2026-5-10': 'none',      // 2nd Sunday
    '2026-5-16': 'steam',
    '2026-5-17': 'cable',
    '2026-5-23': 'steam',
    '2026-5-24': 'speeder',
    '2026-5-30': 'steam',
    '2026-5-31': 'cable',
  };

  const EVENT_CONFIG = {
    steam:   { cls:'event-steam',   label:'🚂 Steam Locomotive', time:'10am – 2pm' },
    cable:   { cls:'event-cable',   label:'🚌 Cable Car',        time:'11am – 2pm' },
    speeder: { cls:'event-speeder', label:'🚃 Speeder',          time:'11am – 2pm' },
    none:    { cls:'event-none',    label:'No Operation',        time:'' },
  };

  let calYear, calMonth;

  function calInit() {
    const now = new Date();
    calYear  = now.getFullYear();
    calMonth = now.getMonth(); // 0-indexed
    calRender();
  }

  function calChangeMonth(delta) {
    calMonth += delta;
    if (calMonth > 11) { calMonth = 0;  calYear++; }
    if (calMonth < 0)  { calMonth = 11; calYear--; }
    calRender();
  }

  function calGoToday() {
    const now = new Date();
    calYear  = now.getFullYear();
    calMonth = now.getMonth();
    calRender();
  }

  function calRender() {
    const today    = new Date();
    const months   = ['January','February','March','April','May','June',
                      'July','August','September','October','November','December'];
    document.getElementById('calMonthTitle').textContent = `${months[calMonth]} ${calYear}`;

    const grid     = document.getElementById('calGrid');
    grid.innerHTML = '';

    const firstDay  = new Date(calYear, calMonth, 1).getDay(); // 0=Sun
    const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
    const prevDays  = new Date(calYear, calMonth, 0).getDate();

    // Previous month padding
    for (let i = firstDay - 1; i >= 0; i--) {
      const cell = document.createElement('div');
      cell.className = 'cal-cell other-month';
      cell.innerHTML = `<div class="cal-date-num">${prevDays - i}</div>`;
      grid.appendChild(cell);
    }

    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      const date    = new Date(calYear, calMonth, d);
      const dow     = date.getDay(); // 0=Sun, 6=Sat
      const isToday = today.getFullYear()===calYear && today.getMonth()===calMonth && today.getDate()===d;
      const key     = `${calYear}-${calMonth+1}-${d}`;
      const event   = RR_SCHEDULE[key];

      const cell = document.createElement('div');
      cell.className = 'cal-cell' + (isToday ? ' today' : '');
      cell.innerHTML = `<div class="cal-date-num">${d}</div>`;

      if (event) {
        const cfg = EVENT_CONFIG[event];
        cell.innerHTML += `
          <div class="cal-event ${cfg.cls}">
            ${cfg.label}
            ${cfg.time ? `<div class="cal-event-time">${cfg.time}</div>` : ''}
          </div>`;
      } else if (dow === 6) {
        // Saturday with no explicit entry — default Steam
        cell.innerHTML += `
          <div class="cal-event event-steam">
            🚂 Steam Locomotive
            <div class="cal-event-time">10am – 2pm</div>
          </div>`;
      }
      // Weekdays: no event shown

      grid.appendChild(cell);
    }

    // Next month padding to fill row
    const total = firstDay + daysInMonth;
    const remaining = total % 7 === 0 ? 0 : 7 - (total % 7);
    for (let i = 1; i <= remaining; i++) {
      const cell = document.createElement('div');
      cell.className = 'cal-cell other-month';
      cell.innerHTML = `<div class="cal-date-num">${i}</div>`;
      grid.appendChild(cell);
    }
  }

  calInit();
</script>