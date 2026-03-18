---
layout: base
title: Home page of the project
permalink: /railroad/home
---

<style>
  :root {
    --rust:    #b94a1c;
    --ember:   #e8621a;
    --gold:    #c9943a;
    --coal:    #1a1410;
    --iron:    #2e2620;
    --iron2:   #3a2e28;
    --steam:   #e8e0d0;
    --smoke:   #8c7f6e;
    --green:   #2d6a4f;
    --rail:    #4a3f35;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: var(--coal);
    color: var(--steam);
    font-family: 'Georgia', serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* ── NAV ── */
  .rr-nav {
    background: var(--iron);
    border-bottom: 3px solid var(--rust);
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    position: sticky; top: 0; z-index: 100;
    flex-wrap: wrap;
  }

  .rr-nav-item {
    position: relative;
  }

  .rr-nav-link {
    display: flex; align-items: center; gap: 5px;
    color: var(--steam);
    text-decoration: none;
    font-family: 'Courier New', monospace;
    font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;
    padding: 18px 20px;
    border-bottom: 3px solid transparent;
    transition: all 0.2s;
    cursor: pointer;
    background: none; border-top: none; border-left: none; border-right: none;
    white-space: nowrap;
  }
  .rr-nav-link:hover, .rr-nav-link.active {
    color: var(--gold);
    border-bottom-color: var(--gold);
  }
  .rr-nav-link .arrow {
    font-size: 8px; transition: transform 0.2s;
  }
  .rr-nav-item.open .arrow { transform: rotate(180deg); }

  /* Dropdown */
  .rr-dropdown {
    display: none;
    position: absolute; top: 100%; left: 0;
    background: var(--iron2);
    border: 1px solid rgba(255,255,255,0.1);
    border-top: 2px solid var(--rust);
    border-radius: 0 0 8px 8px;
    min-width: 180px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.4);
    overflow: hidden;
    z-index: 200;
  }
  .rr-nav-item.open .rr-dropdown { display: block; }

  .rr-dropdown a {
    display: block;
    padding: 12px 18px;
    color: var(--smoke);
    text-decoration: none;
    font-family: 'Courier New', monospace;
    font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
    transition: all 0.15s;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  .rr-dropdown a:last-child { border-bottom: none; }
  .rr-dropdown a:hover { background: rgba(201,148,58,0.15); color: var(--gold); padding-left: 24px; }

  /* ── HERO ── */
  .rr-hero {
    position: relative;
    padding: 80px 24px 64px;
    text-align: center;
    background: radial-gradient(ellipse at 50% 0%, #3d2a18 0%, var(--coal) 70%);
    overflow: hidden;
  }
  .rr-hero::before {
    content: '';
    position: absolute; inset: 0;
    background-image: repeating-linear-gradient(
      90deg, transparent, transparent 60px,
      rgba(255,255,255,0.015) 60px, rgba(255,255,255,0.015) 61px
    );
    pointer-events: none;
  }
  .rr-hero-track {
    position: absolute; bottom: 0; left: 0; right: 0; height: 20px;
    background: repeating-linear-gradient(
      90deg, var(--rail) 0px, var(--rail) 30px, transparent 30px, transparent 50px
    );
    opacity: 0.4;
  }
  .rr-hero-icon { font-size: 72px; display: block; margin-bottom: 16px;
    animation: rr-chug 3s ease-in-out infinite; }
  @keyframes rr-chug {
    0%,100% { transform: translateX(0); }
    25%      { transform: translateX(4px); }
    75%      { transform: translateX(-4px); }
  }
  .rr-hero-badge {
    font-family: 'Courier New', monospace; font-size: 10px;
    letter-spacing: 0.3em; text-transform: uppercase;
    color: var(--gold); margin-bottom: 16px; opacity: 0.8;
  }
  .rr-hero-title {
    font-size: clamp(36px, 7vw, 76px); font-weight: 700;
    color: var(--steam); line-height: 1; margin-bottom: 16px;
    letter-spacing: -0.01em;
  }
  .rr-hero-title em { font-style: italic; color: var(--ember); }
  .rr-hero-sub {
    font-size: 16px; color: var(--smoke); max-width: 560px;
    margin: 0 auto 36px; line-height: 1.7;
  }
  .rr-hero-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
  .rr-btn-primary {
    padding: 14px 28px; background: var(--rust); border: none;
    border-radius: 4px; color: #fff; text-decoration: none;
    font-family: 'Courier New', monospace; font-size: 12px;
    letter-spacing: 0.12em; text-transform: uppercase;
    transition: background 0.2s, transform 0.15s; cursor: pointer;
  }
  .rr-btn-primary:hover { background: var(--ember); transform: translateY(-2px); }
  .rr-btn-secondary {
    padding: 14px 28px; background: transparent;
    border: 1px solid var(--gold); border-radius: 4px;
    color: var(--gold); text-decoration: none;
    font-family: 'Courier New', monospace; font-size: 12px;
    letter-spacing: 0.12em; text-transform: uppercase;
    transition: all 0.2s;
  }
  .rr-btn-secondary:hover { background: rgba(201,148,58,0.15); transform: translateY(-2px); }

  /* ── CONTENT ── */
  .rr-wrap { max-width: 1100px; margin: 0 auto; padding: 60px 20px 80px; flex: 1; }

  .rr-section-title {
    font-family: 'Courier New', monospace; font-size: 10px;
    letter-spacing: 0.3em; text-transform: uppercase;
    color: var(--gold); margin-bottom: 24px;
    display: flex; align-items: center; gap: 12px;
  }
  .rr-section-title::after { content: ''; flex: 1; height: 1px; background: rgba(255,255,255,0.08); }

  /* News grid */
  .rr-news-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px; margin-bottom: 60px;
  }
  .rr-news-card {
    background: var(--iron); border: 1px solid rgba(255,255,255,0.07);
    border-radius: 10px; padding: 22px;
    border-top: 3px solid var(--rust);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .rr-news-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }
  .rr-news-date {
    font-family: 'Courier New', monospace; font-size: 10px;
    letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--gold); margin-bottom: 10px;
  }
  .rr-news-card h3 { font-size: 18px; color: var(--steam); margin-bottom: 8px; line-height: 1.3; }
  .rr-news-card p { font-size: 13px; color: var(--smoke); line-height: 1.7; margin-bottom: 14px; }
  .rr-news-tag {
    font-family: 'Courier New', monospace; font-size: 9px;
    letter-spacing: 0.15em; text-transform: uppercase;
    padding: 4px 10px; border-radius: 2px;
    background: rgba(201,148,58,0.15); color: var(--gold);
    border: 1px solid rgba(201,148,58,0.2);
  }

  /* Quick links */
  .rr-quick { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px; margin-bottom: 60px; }
  .rr-quick-card {
    background: var(--iron); border: 1px solid rgba(255,255,255,0.07);
    border-radius: 10px; padding: 20px; text-align: center;
    text-decoration: none; transition: all 0.2s;
  }
  .rr-quick-card:hover { background: var(--iron2); transform: translateY(-3px);
    border-color: var(--gold); }
  .rr-quick-icon { font-size: 32px; display: block; margin-bottom: 10px; }
  .rr-quick-label {
    font-family: 'Courier New', monospace; font-size: 10px;
    letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold);
  }
  .rr-quick-sub { font-size: 12px; color: var(--smoke); margin-top: 4px; }

  /* Contact */
  .rr-contact {
    background: var(--iron); border: 1px solid rgba(255,255,255,0.07);
    border-radius: 12px; padding: 36px;
    border-left: 4px solid var(--rust);
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: 24px;
  }
  .rr-contact h2 { font-size: 24px; color: var(--steam); margin-bottom: 12px; }
  .rr-contact p { font-size: 14px; color: var(--smoke); line-height: 1.8; }
  .rr-contact p span { color: var(--gold); font-family: 'Courier New', monospace; font-size: 12px; }

  /* Footer */
  .rr-footer {
    background: var(--iron); border-top: 1px solid rgba(255,255,255,0.07);
    padding: 20px; text-align: center;
    font-family: 'Courier New', monospace; font-size: 10px;
    letter-spacing: 0.1em; text-transform: uppercase; color: var(--smoke);
  }

  @media (max-width: 600px) {
    .rr-nav-link { padding: 14px 12px; font-size: 10px; }
    .rr-contact { flex-direction: column; }
  }
</style>

<!-- NAV -->
<nav class="rr-nav" id="rrNav">

  <div class="rr-nav-item">
    <a href="/railroad/home" class="rr-nav-link active">🏠 Home</a>
  </div>

  <!-- Schedule dropdown -->
  <div class="rr-nav-item" id="navSchedule">
    <button class="rr-nav-link" onclick="toggleNav('navSchedule')">
      📅 Schedule <span class="arrow">▼</span>
    </button>
    <div class="rr-dropdown">
      <a href="/railroad/schedule">🚂 Train Schedule</a>
      <a href="#">👷 Volunteer Schedule</a>
    </div>
  </div>

  <!-- Notes -->
  <div class="rr-nav-item">
    <a href="/railroad/notes" class="rr-nav-link">📸 Notes</a>
  </div>

  <!-- About Us dropdown -->
  <div class="rr-nav-item" id="navAbout">
    <button class="rr-nav-link" onclick="toggleNav('navAbout')">
      ℹ️ About Us <span class="arrow">▼</span>
    </button>
    <div class="rr-dropdown">
      <a href="/railroad/trains">🚂 Our Trains</a>
      <a href="#">📖 History</a>
    </div>
  </div>

  <div class="rr-nav-item">
    <a href="#" class="rr-nav-link">🎥 Live Camera</a>
  </div>

  <div class="rr-nav-item">
    <a href="#" class="rr-nav-link">🤝 Membership</a>
  </div>

</nav>

<!-- HERO -->
<div class="rr-hero">
  <span class="rr-hero-icon">🚂</span>
  <div class="rr-hero-badge">Since 1987 · Heritage Rail · Old Poway Park</div>
  <h1 class="rr-hero-title">Poway–Midland<br><em>Railroad</em></h1>
  <p class="rr-hero-sub">Your digital depot for steam, steel, and stories. Explore vintage locomotives, real-time schedules, and the volunteers who keep the iron horse alive every weekend in Poway, CA.</p>
  <div class="rr-hero-btns">
    <a href="/railroad/schedule" class="rr-btn-primary">🎟 Book a Ride</a>
    <a href="/railroad/trains" class="rr-btn-secondary">🚂 Our Fleet</a>
  </div>
  <div class="rr-hero-track"></div>
</div>

<div class="rr-wrap">

  <!-- Quick links -->
  <div class="rr-section-title">Quick Access</div>
  <div class="rr-quick">
    <a href="/railroad/schedule" class="rr-quick-card">
      <span class="rr-quick-icon">📅</span>
      <div class="rr-quick-label">Schedule</div>
      <div class="rr-quick-sub">View today's rides</div>
    </a>
    <a href="/railroad/book" class="rr-quick-card">
      <span class="rr-quick-icon">🎟</span>
      <div class="rr-quick-label">Book a Ride</div>
      <div class="rr-quick-sub">Reserve your seat</div>
    </a>
    <a href="/railroad/trains" class="rr-quick-card">
      <span class="rr-quick-icon">🚂</span>
      <div class="rr-quick-label">Our Fleet</div>
      <div class="rr-quick-sub">Meet the trains</div>
    </a>
    <a href="/railroad/notes" class="rr-quick-card">
      <span class="rr-quick-icon">📸</span>
      <div class="rr-quick-label">Notes</div>
      <div class="rr-quick-sub">Share your experience</div>
    </a>
    <a href="/railroad/forecast" class="rr-quick-card">
      <span class="rr-quick-icon">📊</span>
      <div class="rr-quick-label">Visitor Forecast</div>
      <div class="rr-quick-sub">ML prediction</div>
    </a>
  </div>

  <!-- News -->
  <div class="rr-section-title">Latest News from the Line</div>
  <div class="rr-news-grid">
    <div class="rr-news-card">
      <div class="rr-news-date">📆 March 10, 2026</div>
      <h3>Steam Every Saturday!</h3>
      <p>Starting 2026, our beloved 1907 Baldwin Steam Locomotive runs every single Saturday. Come feel the steam and hear the whistle every weekend.</p>
      <span class="rr-news-tag">steam · event</span>
    </div>
    <div class="rr-news-card">
      <div class="rr-news-date">📆 February 28, 2026</div>
      <h3>New Online Booking</h3>
      <p>Reserve your seat before you arrive! Our new online booking system lets you pick your ride time and secure your spot ahead of the weekend rush.</p>
      <span class="rr-news-tag">booking · new</span>
    </div>
    <div class="rr-news-card">
      <div class="rr-news-date">📆 February 12, 2026</div>
      <h3>Depot Restoration Begins</h3>
      <p>The historic Midland depot is getting a faithful renovation. Volunteer carpenters and historians are working to preserve the 1890s structure.</p>
      <span class="rr-news-tag">preservation</span>
    </div>
  </div>

  <!-- Contact -->
  <div class="rr-section-title">Contact Us</div>
  <div class="rr-contact">
    <div>
      <h2>🚉 Get in Touch</h2>
      <p>
        <span>📞</span> (858) 748-0379<br>
        <span>📧</span> info@powaymidlandrr.org<br>
        <span>📍</span> 14134 Midland Rd, Poway, CA 92064<br>
        <span>🕐</span> Saturdays & Select Sundays · 10am – 2pm
      </p>
    </div>
    <a href="https://powaymidlandrr.org" target="_blank" class="rr-btn-primary">Visit Official Site →</a>
  </div>

</div>

<!-- FOOTER -->
<div class="rr-footer">
  © 2026 Poway–Midland Railroad · All aboard for a journey through rail heritage
</div>

<script>
  function toggleNav(id) {
    const item = document.getElementById(id);
    const isOpen = item.classList.contains('open');
    // Close all dropdowns first
    document.querySelectorAll('.rr-nav-item.open').forEach(el => el.classList.remove('open'));
    // Toggle clicked one
    if (!isOpen) item.classList.add('open');
  }

  // Close dropdowns when clicking outside
  document.addEventListener('click', e => {
    if (!e.target.closest('.rr-nav-item')) {
      document.querySelectorAll('.rr-nav-item.open').forEach(el => el.classList.remove('open'));
    }
  });
</script>