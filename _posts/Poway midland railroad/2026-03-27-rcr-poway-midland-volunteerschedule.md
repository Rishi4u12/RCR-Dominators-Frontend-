---
layout: base
title: Train Schedule & Tracker
permalink: /railroad/volunteer-schedule
AI: true
---

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --rust: #b94a1c;
      --gold: #c9943a;
      --green: #2d6a4f;
      --light-bg: #faf8f5;
      --white: #ffffff;
      --border: #e8e0d0;
      --text: #2c1f0e;
      --subtext: #8f7455;
      --steam-bg: #fff3cd;
      --cable-bg: #dbeafe;
      --speeder-bg: #d1fae5;
      --none-bg: #f3f4f6;
    }

    body {
      background: #ede7db;
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
    }

    .vol-wrap {
      max-width: 1280px;
      margin: 0 auto;
      padding: 32px 20px 56px;
      background: var(--light-bg);
      min-height: 100vh;
    }

    /* header */
    .vol-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 16px;
      margin-bottom: 28px;
      padding-bottom: 12px;
      border-bottom: 2px solid var(--border);
    }
    .vol-brand {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .vol-logo {
      background: var(--rust);
      border-radius: 14px;
      width: 52px;
      height: 52px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.05);
    }
    .vol-title h1 {
      font-size: 1.7rem;
      font-weight: 800;
      color: var(--text);
      letter-spacing: -0.2px;
    }
    .vol-title p {
      font-size: 0.8rem;
      color: var(--subtext);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-top: 4px;
    }
    .vol-back {
      background: var(--white);
      border: 1px solid var(--border);
      border-radius: 40px;
      padding: 8px 20px;
      text-decoration: none;
      color: var(--rust);
      font-weight: 600;
      font-size: 0.85rem;
      transition: all 0.2s;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .vol-back:hover {
      background: #fff0ea;
      transform: translateY(-1px);
      border-color: var(--gold);
    }

    /* summary cards */
    .stats-row {
      display: flex;
      flex-wrap: wrap;
      gap: 18px;
      margin-bottom: 32px;
    }
    .stat-card {
      background: var(--white);
      border-radius: 24px;
      padding: 18px 22px;
      flex: 1 1 180px;
      border: 1px solid var(--border);
      box-shadow: 0 2px 6px rgba(0,0,0,0.02);
      transition: all 0.2s;
    }
    .stat-card .stat-label {
      font-size: 0.7rem;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 1px;
      color: var(--subtext);
    }
    .stat-card .stat-number {
      font-size: 2.2rem;
      font-weight: 800;
      color: var(--rust);
      line-height: 1.1;
      margin-top: 6px;
    }
    .stat-card .stat-sub {
      font-size: 0.75rem;
      color: var(--subtext);
      margin-top: 6px;
    }

    /* filters */
    .filters {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 28px;
      align-items: center;
      justify-content: space-between;
    }
    .filter-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .filter-btn {
      background: var(--white);
      border: 1px solid var(--border);
      padding: 6px 16px;
      border-radius: 40px;
      font-size: 0.8rem;
      font-weight: 500;
      color: var(--text);
      cursor: pointer;
      transition: all 0.2s;
    }
    .filter-btn.active {
      background: var(--rust);
      border-color: var(--rust);
      color: white;
    }
    .filter-btn:hover:not(.active) {
      background: #f5ede3;
      border-color: var(--gold);
    }
    .search-box {
      display: flex;
      align-items: center;
      background: var(--white);
      border: 1px solid var(--border);
      border-radius: 40px;
      padding: 5px 12px;
      gap: 6px;
    }
    .search-box input {
      border: none;
      background: transparent;
      padding: 8px 4px;
      font-size: 0.85rem;
      width: 180px;
      outline: none;
      color: var(--text);
    }

    /* volunteer schedule table */
    .schedule-table-container {
      background: var(--white);
      border-radius: 24px;
      border: 1px solid var(--border);
      overflow-x: auto;
      box-shadow: 0 4px 12px rgba(0,0,0,0.03);
      margin-bottom: 32px;
    }
    .vol-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.85rem;
      min-width: 800px;
    }
    .vol-table th {
      text-align: left;
      padding: 16px 14px;
      background: #fefaf5;
      border-bottom: 1px solid var(--border);
      font-weight: 700;
      color: var(--text);
      font-size: 0.8rem;
      letter-spacing: 0.3px;
    }
    .vol-table td {
      padding: 14px 14px;
      border-bottom: 1px solid #f0e9df;
      vertical-align: middle;
    }
    .date-cell {
      font-weight: 700;
      color: var(--text);
      white-space: nowrap;
    }
    .badge-event {
      display: inline-block;
      padding: 5px 12px;
      border-radius: 40px;
      font-size: 0.75rem;
      font-weight: 600;
      white-space: nowrap;
    }
    .badge-steam { background: var(--steam-bg); color: #856404; border-left: 3px solid #e8a020; }
    .badge-cable { background: var(--cable-bg); color: #1d4ed8; border-left: 3px solid #3b82f6; }
    .badge-speeder { background: var(--speeder-bg); color: #065f46; border-left: 3px solid #10b981; }
    .badge-none { background: var(--none-bg); color: #6b7280; border-left: 3px solid #9ca3af; }

    .time-slot {
      font-size: 0.75rem;
      color: var(--subtext);
      margin-top: 3px;
    }
    .volunteer-buttons {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      align-items: center;
    }
    .vol-btn {
      background: #f3efe8;
      border: none;
      padding: 6px 12px;
      border-radius: 30px;
      font-size: 0.7rem;
      font-weight: 600;
      cursor: pointer;
      transition: 0.1s linear;
      color: var(--text);
    }
    .vol-btn.signup {
      background: var(--green);
      color: white;
    }
    .vol-btn.signup:hover {
      background: #1f543f;
      transform: scale(0.97);
    }
    .vol-btn.cancel {
      background: #e9e2d8;
    }
    .vol-btn.cancel:hover {
      background: #ddd2c2;
    }
    .vol-status {
      font-size: 0.7rem;
      background: #eef2e6;
      display: inline-block;
      padding: 4px 10px;
      border-radius: 20px;
      color: #2b5e3b;
    }
    .slot-full {
      color: #b1624b;
      font-weight: 500;
      font-size: 0.7rem;
    }
    .shift-count {
      font-size: 0.7rem;
      color: var(--subtext);
    }

    /* footer info */
    .volunteer-info {
      background: var(--white);
      border-radius: 20px;
      border: 1px solid var(--border);
      padding: 20px 24px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 20px;
    }
    
    .volunteer-info h4 {
      color: var(--gold);
      font-size: 0.95rem;
      font-weight: 700;
      margin-bottom: 12px;
    }
    
    .volunteer-info p {
      font-size: 0.8rem;
      color: var(--subtext);
      line-height: 1.5;
    }
    
    .info-text h4 {
      color: var(--gold);
    }
    
    .coordinator h4 {
      color: var(--gold);
    }
    
    @media (max-width: 680px) {
      .vol-wrap { padding: 20px 16px; }
      .vol-title h1 { font-size: 1.4rem; }
      .stat-number { font-size: 1.8rem; }
    }
  </style>
</head>
<body>
<div class="vol-wrap">
  <div class="vol-header">
    <div class="vol-brand">
      <div class="vol-logo">👥</div>
      <div class="vol-title">
        <h1>Volunteer Crew Schedule</h1>
        <p>Poway–Midland Railroad · Operations Sign-up</p>
      </div>
    </div>
    <a href="/railroad/calendar" class="vol-back">← Back to Calendar</a>
  </div>

  <!-- stats summary (dynamic JS fill) -->
  <div class="stats-row" id="statsContainer">
    <div class="stat-card"><div class="stat-label">Total Shifts</div><div class="stat-number" id="totalShifts">—</div><div class="stat-sub">Mar–May 2026</div></div>
    <div class="stat-card"><div class="stat-label">Open Spots</div><div class="stat-number" id="openSpots">—</div><div class="stat-sub">volunteers needed</div></div>
    <div class="stat-card"><div class="stat-label">Signed Up</div><div class="stat-number" id="signedUpCount">—</div><div class="stat-sub">crew members</div></div>
    <div class="stat-card"><div class="stat-label">Steam Saturdays</div><div class="stat-number" id="steamCount">—</div><div class="stat-sub">locomotive days</div></div>
  </div>

  <!-- filter + search -->
  <div class="filters">
    <div class="filter-buttons">
      <button class="filter-btn active" data-filter="all">All shifts</button>
      <button class="filter-btn" data-filter="steam">🚂 Steam</button>
      <button class="filter-btn" data-filter="cable">🚋 Cable Car</button>
      <button class="filter-btn" data-filter="speeder">🚃 Speeder</button>
      <button class="filter-btn" data-filter="open">🟢 Open spots</button>
      <button class="filter-btn" data-filter="my">⭐ My sign-ups</button>
    </div>
    <div class="search-box">
      <span>🔍</span>
      <input type="text" id="searchInput" placeholder="Search by date (e.g., Apr 18) or event" autocomplete="off">
    </div>
  </div>

  <!-- volunteer schedule table -->
  <div class="schedule-table-container">
    <table class="vol-table" id="volTable">
      <thead>
        <tr><th>Date & Day</th><th>Operation Type</th><th>Time</th><th>Volunteer Slots (max 4)</th><th>Actions</th></tr>
      </thead>
      <tbody id="tableBody">
        <!-- dynamic rows from JS -->
      </tbody>
    </table>
  </div>

  <div class="volunteer-info">
    <div class="info-text">
      <h4>📋 Volunteer guidelines</h4>
      <p>• Each shift needs 2–4 volunteers (conductors, ticket takers, safety).<br>
      • Sign up at least 48h in advance. Arrive 30 min before operation.<br>
      • Contact railroad ops for training: (858) 486-4063.</p>
    </div>
    <div class="coordinator">
      <h4>👨‍✈️ Crew coordinator</h4>
      <p>Volunteer desk: oldpoway.volunteer@poway.org<br>📍 Old Poway Park – 14134 Midland Rd</p>
    </div>
  </div>
</div>

<script>
  // ========================
  // DATA from calendar schedule (Mar 2026 - May 2026)
  // ========================
  const RR_SCHEDULE = {
    '2026-3-7':'steam','2026-3-8':'none','2026-3-14':'steam','2026-3-15':'cable',
    '2026-3-21':'steam','2026-3-22':'speeder','2026-3-28':'steam','2026-3-29':'cable',
    '2026-4-4':'steam','2026-4-5':'cable','2026-4-11':'steam','2026-4-12':'none',
    '2026-4-18':'steam','2026-4-19':'cable','2026-4-25':'steam','2026-4-26':'speeder',
    '2026-5-2':'steam','2026-5-3':'cable','2026-5-9':'steam','2026-5-10':'none',
    '2026-5-16':'steam','2026-5-17':'cable','2026-5-23':'steam','2026-5-24':'speeder',
    '2026-5-30':'steam','2026-5-31':'cable',
  };
  
  function getEventForDate(y,m,d) {
    const key = `${y}-${m+1}-${d}`;
    if (RR_SCHEDULE[key]) return RR_SCHEDULE[key];
    const dow = new Date(y, m, d).getDay();
    if (dow === 6) return 'steam';
    return null;
  }

  const startDate = new Date(2026, 2, 1);
  const endDate = new Date(2026, 4, 31);
  const allOps = [];
  let current = new Date(startDate);
  while (current <= endDate) {
    const y = current.getFullYear();
    const m = current.getMonth();
    const d = current.getDate();
    const eventType = getEventForDate(y, m, d);
    if (eventType && eventType !== 'none') {
      let timeRange = '';
      let displayLabel = '';
      if (eventType === 'steam') { displayLabel = 'Steam Locomotive'; timeRange = '10:00am – 2:00pm'; }
      if (eventType === 'cable') { displayLabel = 'Cable Car'; timeRange = '11:00am – 2:00pm'; }
      if (eventType === 'speeder') { displayLabel = 'Speeder w/ Ore Cars'; timeRange = '11:00am – 2:00pm'; }
      
      const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dateObj = new Date(y, m, d);
      const dayOfWeek = weekdayNames[dateObj.getDay()];
      const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      const formattedDate = `${months[m]} ${d}, ${y}`;
      const isoDate = `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
      
      allOps.push({
        id: isoDate,
        year: y, month: m, day: d,
        dateDisplay: formattedDate,
        weekday: dayOfWeek,
        eventType: eventType,
        eventLabel: displayLabel,
        timeRange: timeRange,
        iso: isoDate,
        slotsTotal: 4,
        volunteers: []
      });
    }
    current.setDate(current.getDate() + 1);
  }
  
  let volunteerData = {};
  let currentUser = "CrewMember_" + (Math.floor(Math.random() * 900) + 100);
  
  function loadVolunteerData() {
    const stored = localStorage.getItem("PMRR_Volunteers");
    if (stored) {
      try {
        volunteerData = JSON.parse(stored);
      } catch(e) { volunteerData = {}; }
    } else {
      volunteerData = {
        '2026-3-7': ['Tom R.', 'Linda S.'],
        '2026-3-15': ['Greg M.'],
        '2026-3-22': ['Sarah K.', 'David L.'],
        '2026-4-4': ['Emily W.'],
        '2026-4-19': ['James C.', 'Robert N.'],
        '2026-5-2': ['Anna P.'],
        '2026-5-24': ['Mike D.', 'Chris T.', 'Olivia B.']
      };
    }
    for (let op of allOps) {
      if (!volunteerData[op.iso]) volunteerData[op.iso] = [];
    }
    saveVolunteerData();
  }
  
  function saveVolunteerData() {
    localStorage.setItem("PMRR_Volunteers", JSON.stringify(volunteerData));
  }
  
  function isUserSignedUp(iso) {
    let list = volunteerData[iso] || [];
    return list.includes(currentUser);
  }
  
  function signUpForShift(iso) {
    if (!volunteerData[iso]) volunteerData[iso] = [];
    const slots = volunteerData[iso];
    const shiftObj = allOps.find(op => op.iso === iso);
    if (!shiftObj) return false;
    if (slots.length >= shiftObj.slotsTotal) return false;
    if (slots.includes(currentUser)) return false;
    slots.push(currentUser);
    saveVolunteerData();
    return true;
  }
  
  function cancelSignUp(iso) {
    if (!volunteerData[iso]) return false;
    const idx = volunteerData[iso].indexOf(currentUser);
    if (idx !== -1) {
      volunteerData[iso].splice(idx, 1);
      saveVolunteerData();
      return true;
    }
    return false;
  }
  
  let currentFilter = "all";
  let searchQuery = "";
  
  function getFilteredOps() {
    let filtered = [...allOps];
    if (currentFilter === 'steam') filtered = filtered.filter(op => op.eventType === 'steam');
    else if (currentFilter === 'cable') filtered = filtered.filter(op => op.eventType === 'cable');
    else if (currentFilter === 'speeder') filtered = filtered.filter(op => op.eventType === 'speeder');
    else if (currentFilter === 'open') filtered = filtered.filter(op => (volunteerData[op.iso]?.length || 0) < op.slotsTotal);
    else if (currentFilter === 'my') filtered = filtered.filter(op => isUserSignedUp(op.iso));
    
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(op => 
        op.dateDisplay.toLowerCase().includes(q) || 
        op.eventLabel.toLowerCase().includes(q) ||
        op.weekday.toLowerCase().includes(q)
      );
    }
    filtered.sort((a,b) => new Date(a.iso) - new Date(b.iso));
    return filtered;
  }
  
  function updateStats() {
    const totalShifts = allOps.length;
    let openSpotsCount = 0;
    let totalSigned = 0;
    let steamDays = allOps.filter(op => op.eventType === 'steam').length;
    for (let op of allOps) {
      const taken = volunteerData[op.iso]?.length || 0;
      openSpotsCount += Math.max(0, op.slotsTotal - taken);
      totalSigned += taken;
    }
    document.getElementById('totalShifts').innerText = totalShifts;
    document.getElementById('openSpots').innerText = openSpotsCount;
    document.getElementById('signedUpCount').innerText = totalSigned;
    document.getElementById('steamCount').innerText = steamDays;
  }
  
  function renderTable() {
    const filtered = getFilteredOps();
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';
    if (filtered.length === 0) {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td colspan="5" style="text-align:center; padding:40px;">✨ No volunteer shifts match the filter. Try adjusting search or filter. ✨</td>`;
      tbody.appendChild(tr);
      updateStats();
      return;
    }
    for (let op of filtered) {
      const volunteersList = volunteerData[op.iso] || [];
      const takenCount = volunteersList.length;
      const slotsLeft = op.slotsTotal - takenCount;
      const isSigned = isUserSignedUp(op.iso);
      const isFull = takenCount >= op.slotsTotal;
      
      const badgeClass = `badge-${op.eventType}`;
      let eventIcon = '';
      if (op.eventType === 'steam') eventIcon = '🚂 ';
      else if (op.eventType === 'cable') eventIcon = '🚋 ';
      else eventIcon = '🚃 ';
      
      const volunteersDisplay = volunteersList.length > 0 ? volunteersList.join(', ') : '— no volunteers yet';
      
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="date-cell">${op.dateDisplay}<br><span style="font-size:0.7rem; color:#7a6a58;">${op.weekday}</span></td>
        <td><span class="badge-event ${badgeClass}">${eventIcon} ${op.eventLabel}</span></td>
        <td><div>${op.timeRange}</div><div class="time-slot"></div></td>
        <td>
          <div><strong>${takenCount}/${op.slotsTotal} slots filled</strong></div>
          <div class="shift-count" style="font-size:0.7rem; margin-top:4px;">👥 ${volunteersDisplay}</div>
          ${isFull ? '<div class="slot-full">⚠️ Shift full</div>' : `<div class="slot-full" style="color:#2d6a4f;">${slotsLeft} spot(s) open</div>`}
        </td>
        <td class="volunteer-buttons">
          ${!isSigned && !isFull ? `<button class="vol-btn signup" data-iso="${op.iso}">➕ Sign up</button>` : ''}
          ${isSigned ? `<button class="vol-btn cancel" data-iso="${op.iso}">✖ Cancel</button>` : ''}
          ${isSigned ? `<span class="vol-status">✓ You're signed</span>` : (isFull ? `<span class="vol-status" style="background:#f3e0d4;">🔒 Full</span>` : `<span class="vol-status" style="background:#eae2d4;">Open</span>`)}
        </td>
      `;
      tbody.appendChild(tr);
    }
    
    document.querySelectorAll('.vol-btn.signup').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const iso = btn.getAttribute('data-iso');
        const success = signUpForShift(iso);
        if (success) {
          renderTable();
          updateStats();
        } else {
          alert('Unable to sign up: shift may be full or you already signed up.');
          renderTable();
        }
      });
    });
    document.querySelectorAll('.vol-btn.cancel').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const iso = btn.getAttribute('data-iso');
        cancelSignUp(iso);
        renderTable();
        updateStats();
      });
    });
    updateStats();
  }
  
  function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter');
        renderTable();
      });
    });
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderTable();
    });
  }
  
  loadVolunteerData();
  renderTable();
  initFilters();
  updateStats();
</script>
</body>
</html>
