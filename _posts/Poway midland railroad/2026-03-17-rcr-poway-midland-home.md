---
layout: base
title: Home page of the project
permalink: /railroad/home
---

<style>
  :root {
    --rust:  #b94a1c; --ember: #e8621a; --gold:  #c9943a;
    --coal:  #1a1410; --iron:  #2e2620; --iron2: #3a2e28;
    --steam: #e8e0d0; --smoke: #8c7f6e; --rail:  #4a3f35;
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: var(--coal);
    color: var(--steam);
    font-family: 'Georgia', serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding-top: 56px;
  }

  /* ── TRAIN BACKGROUND ── */
  .moving-train-background {
    position: fixed; top: 0; left: 0;
    width: 100%; height: 100%;
    z-index: 0; overflow: hidden; pointer-events: none;
  }
  .bg-scene {
    position: absolute; bottom: 0; left: 0;
    width: 100%; height: 100%;
    background: linear-gradient(180deg,
      #1a1208 0%,
      #2a1a0e 40%,
      #3d2510 70%,
      #4a2e14 85%,
      #3a2010 100%);
  }
  /* Distant silhouette hills */
  .bg-hills {
    position: absolute; bottom: 28px; left: 0;
    width: 100%; height: 120px;
    background: repeating-linear-gradient(
      118deg, #2a1e10 0px, #2a1e10 80px, #321e10 80px, #321e10 160px);
    border-radius: 100% 100% 0 0 / 50px 50px 0 0;
    opacity: 0.8;
  }
  /* Warm sunset glow on horizon */
  .bg-glow {
    position: absolute; bottom: 20px; left: 0;
    width: 100%; height: 80px;
    background: linear-gradient(180deg, transparent, rgba(185,74,28,0.18) 50%, rgba(232,98,26,0.1));
  }
  /* Sunset sky glow at top */
  .bg-sky-glow {
    position: absolute; top: 0; left: 0;
    width: 100%; height: 40%;
    background: radial-gradient(ellipse at 30% 0%, rgba(185,74,28,0.15) 0%, transparent 70%);
  }
  /* Rail track */
  .rail-track {
    position: absolute; bottom: 0; left: 0;
    width: 100%; height: 28px;
    background: #1a140e; z-index: 5;
    box-shadow: 0 -2px 8px rgba(185,74,28,0.2);
  }
  .rail-track::before {
    content: '';
    position: absolute; top: 0; left: 0;
    width: 100%; height: 100%;
    background: repeating-linear-gradient(
      90deg, #3a2e22 0px, #3a2e22 12px, #251e16 12px, #251e16 24px);
  }
  .rail-steel {
    position: absolute; width: 100%; height: 5px;
    background: linear-gradient(180deg, #c9943a, #8b6a2a); z-index: 6;
  }
  .rail-steel.left  { bottom: 17px; }
  .rail-steel.right { bottom: 9px; }
  /* Train wrapper — starts off-screen left, moves right */
  .train-wrapper {
    position: absolute; bottom: 22px; left: -900px;
    display: flex; align-items: flex-end; gap: 0;
    z-index: 20;
    animation: trainLTR 22s linear infinite;
    filter: drop-shadow(2px 4px 10px rgba(0,0,0,0.6));
  }
  @keyframes trainLTR {
    0%   { transform: translateX(0); }
    100% { transform: translateX(calc(100vw + 1000px)); }
  }
  /* Locomotive */
  .locomotive {
    position: relative; width: 180px; height: 90px;
    background: linear-gradient(135deg, #2c1e14, #1a1008);
    border-radius: 12px 20px 8px 8px;
    border-bottom: 4px solid var(--rust);
    box-shadow: 0 5px 14px rgba(0,0,0,0.7), inset 0 1px 0 rgba(201,148,58,0.1);
  }
  /* Locomotive front faces RIGHT (leading direction) */
  .locomotive-front {
    position: absolute; left: -14px; top: 14px;
    width: 34px; height: 44px;
    background: #5a3a1a;
    border-radius: 50% 30% 30% 50%;
    border: 2px solid var(--gold);
    box-shadow: inset 0 0 10px rgba(232,98,26,0.4), 0 0 8px rgba(232,98,26,0.3);
  }
  .chimney {
    position: absolute; top: -22px; left: 35px;
    width: 28px; height: 38px;
    background: #3a2a1a;
    border-radius: 8px 8px 4px 4px;
  }
  .chimney-top {
    position: absolute; top: -8px; left: -3px;
    width: 34px; height: 12px;
    background: #5a4228; border-radius: 6px 6px 2px 2px;
  }
  .cab {
    position: absolute; left: 100px; top: 20px;
    width: 50px; height: 45px;
    background: #2a1e14; border: 2px solid var(--gold); border-radius: 6px;
  }
  .cab-window {
    position: absolute; top: 10px; left: 8px;
    width: 32px; height: 24px;
    background: rgba(201,148,58,0.2); border-radius: 4px;
    box-shadow: inset 0 0 0 1px rgba(201,148,58,0.3), 0 0 6px rgba(232,98,26,0.2);
  }
  .wheel {
    position: absolute; bottom: -12px;
    width: 28px; height: 28px;
    background: radial-gradient(circle, #3a2a1a 30%, #1a0e08 80%);
    border-radius: 50%; border: 3px solid var(--gold);
    box-shadow: 0 2px 6px rgba(0,0,0,0.8);
  }
  .wheel::after {
    content: ''; position: absolute; top: 6px; left: 6px;
    width: 10px; height: 10px;
    background: #5a3a22; border-radius: 50%;
  }
  .wheel-1 { left: 15px; } .wheel-2 { left: 55px; }
  .wheel-3 { left: 95px; } .wheel-4 { left: 135px; }
  /* Steam */
  .steam { position: absolute; top: -15px; left: 25px; width: 50px; height: 50px; pointer-events: none; }
  .steam-puff {
    position: absolute;
    background: radial-gradient(circle, rgba(201,148,58,0.5) 0%, rgba(185,74,28,0.2) 60%, transparent 100%);
    border-radius: 50%; opacity: 0;
    animation: steamPuff 1.4s infinite ease-out;
  }
  .steam-puff:nth-child(1) { width:28px; height:28px; left:5px;  top:5px;  animation-delay:0s; }
  .steam-puff:nth-child(2) { width:34px; height:34px; left:14px; top:-3px; animation-delay:0.45s; }
  .steam-puff:nth-child(3) { width:24px; height:24px; left:-4px; top:8px;  animation-delay:0.9s; }
  @keyframes steamPuff {
    0%   { opacity:0.7; transform:scale(0.3) translateY(0); }
    50%  { opacity:0.4; transform:scale(1)   translateY(-14px); }
    100% { opacity:0;   transform:scale(1.7) translateY(-30px); }
  }
  /* Tender */
  .tender {
    position: relative; width: 100px; height: 70px;
    background: linear-gradient(145deg, #221810, #140e08);
    border-radius: 8px 12px 8px 8px;
    border-bottom: 3px solid var(--rust); margin-left: -2px;
  }
  .coal-pile {
    position: absolute; top: 10px; left: 15px;
    width: 70px; height: 28px;
    background: #1a1608; border-radius: 20px 20px 8px 8px;
  }
  .tender .wheel { position: absolute; bottom: -10px; }
  .tender .wheel:nth-of-type(1) { left: 10px; }
  .tender .wheel:nth-of-type(2) { left: 55px; }
  /* Carriages */
  .carriage {
    position: relative; width: 110px; height: 65px;
    background: linear-gradient(100deg, #3a2216, #221408);
    border-radius: 8px 12px 8px 8px;
    border-bottom: 3px solid var(--gold); margin-left: -2px;
  }
  .carriage-window {
    position: absolute; top: 18px;
    width: 28px; height: 28px;
    background: rgba(201,148,58,0.15);
    border-radius: 4px; border: 2px solid var(--gold);
    box-shadow: 0 0 6px rgba(201,148,58,0.2);
  }
  .carriage-window.left  { left: 15px; }
  .carriage-window.mid   { left: 50px; }
  .carriage-window.right { left: 70px; }
  .carriage .wheel { position: absolute; bottom: -10px; }
  .carriage .wheel:nth-of-type(1) { left: 12px; }
  .carriage .wheel:nth-of-type(2) { left: 70px; }
  .carriage-small { width: 95px; }
  .carriage-small .carriage-window { width:22px; height:22px; top:20px; }
  .carriage-small .wheel:nth-of-type(1) { left: 10px; }
  .carriage-small .wheel:nth-of-type(2) { left: 65px; }
  .caboose-deco {
    position: absolute; right: 8px; top: 12px;
    background: var(--rust); width: 14px; height: 14px; border-radius: 2px;
  }
  /* Clouds — ember-tinted */
  .cloud {
    position: absolute;
    background: rgba(185,74,28,0.07);
    border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%;
    filter: blur(6px);
    animation: cloudRTL 60s linear infinite; z-index: 2;
  }
  @keyframes cloudRTL {
    0%   { transform: translateX(0); }
    100% { transform: translateX(calc(-100vw - 300px)); }
  }
  .cloud1 { width:120px; height:55px; top:6%;  right:-160px; animation-duration:70s; opacity:0.5; }
  .cloud2 { width:160px; height:70px; top:14%; right:-220px; animation-duration:90s; opacity:0.35; }
  .cloud3 { width: 90px; height:42px; top:2%;  right:-110px; animation-duration:55s; animation-delay:-12s; opacity:0.4; }

  /* ── PAGE CONTENT — needs z-index to sit above background ── */
  .rr-hero, .rr-wrap, .rr-footer, .rr-ai-fab { position: relative; z-index: 10; }

  /* ── HERO ── */
  .rr-hero {
    padding: 80px 24px 64px; text-align: center;
    background: radial-gradient(ellipse at 50% 0%, rgba(61,42,24,0.85) 0%, rgba(26,20,16,0.75) 70%);
    overflow: hidden;
  }
  .rr-hero::before {
    content: ''; position: absolute; inset: 0;
    background-image: repeating-linear-gradient(
      90deg, transparent, transparent 60px,
      rgba(255,255,255,0.012) 60px, rgba(255,255,255,0.012) 61px);
    pointer-events: none;
  }
  .rr-hero-track {
    position: absolute; bottom: 0; left: 0; right: 0; height: 20px;
    background: repeating-linear-gradient(
      90deg, var(--rail) 0px, var(--rail) 30px, transparent 30px, transparent 50px);
    opacity: 0.4;
  }
  .rr-hero-icon { font-size:72px; display:block; margin-bottom:16px; animation:rr-chug 3s ease-in-out infinite; }
  @keyframes rr-chug {
    0%,100% { transform:translateX(0); }
    25%     { transform:translateX(4px); }
    75%     { transform:translateX(-4px); }
  }
  .rr-hero-badge {
    font-family:'Courier New',monospace; font-size:10px;
    letter-spacing:0.3em; text-transform:uppercase;
    color:var(--gold); margin-bottom:16px; opacity:0.85;
  }
  .rr-hero-title {
    font-size:clamp(36px,7vw,76px); font-weight:700;
    color:var(--steam); line-height:1; margin-bottom:16px;
  }
  .rr-hero-title em { font-style:italic; color:var(--ember); }
  .rr-hero-sub {
    font-size:16px; color:var(--smoke); max-width:560px;
    margin:0 auto 36px; line-height:1.7;
  }
  .rr-hero-btns { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
  .rr-btn-primary {
    padding:14px 28px; background:var(--rust); border:none;
    border-radius:4px; color:#fff; text-decoration:none;
    font-family:'Courier New',monospace; font-size:12px;
    letter-spacing:0.12em; text-transform:uppercase;
    transition:background 0.2s, transform 0.15s; cursor:pointer;
  }
  .rr-btn-primary:hover { background:var(--ember); transform:translateY(-2px); }
  .rr-btn-secondary {
    padding:14px 28px; background:transparent;
    border:1px solid var(--gold); border-radius:4px;
    color:var(--gold); text-decoration:none;
    font-family:'Courier New',monospace; font-size:12px;
    letter-spacing:0.12em; text-transform:uppercase; transition:all 0.2s;
  }
  .rr-btn-secondary:hover { background:rgba(201,148,58,0.15); transform:translateY(-2px); }

  /* ── CONTENT ── */
  .rr-wrap { max-width:1100px; margin:0 auto; padding:60px 20px 80px; flex:1; }
  .rr-section-title {
    font-family:'Courier New',monospace; font-size:10px;
    letter-spacing:0.3em; text-transform:uppercase;
    color:var(--gold); margin-bottom:24px;
    display:flex; align-items:center; gap:12px;
  }
  .rr-section-title::after { content:''; flex:1; height:1px; background:rgba(255,255,255,0.08); }

  /* Quick links */
  .rr-quick {
    display:grid; grid-template-columns:repeat(4,1fr);
    gap:12px; margin-bottom:60px;
  }
  @media(max-width:900px){ .rr-quick{ grid-template-columns:repeat(2,1fr); } }
  .rr-quick-card {
    background:rgba(46,38,32,0.85); border:1px solid rgba(255,255,255,0.07);
    border-radius:10px; padding:20px; text-align:center;
    text-decoration:none; transition:all 0.2s;
    backdrop-filter:blur(4px);
  }
  .rr-quick-card:hover { background:rgba(58,46,40,0.95); transform:translateY(-3px); border-color:var(--gold); }
  .rr-quick-icon { font-size:32px; display:block; margin-bottom:10px; }
  .rr-quick-label { font-family:'Courier New',monospace; font-size:10px; letter-spacing:0.15em; text-transform:uppercase; color:var(--gold); }
  .rr-quick-sub { font-size:12px; color:var(--smoke); margin-top:4px; }

  /* News */
  .rr-news-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:16px; margin-bottom:60px; }
  .rr-news-card {
    background:rgba(46,38,32,0.85); border:1px solid rgba(255,255,255,0.07);
    border-radius:10px; padding:22px; border-top:3px solid var(--rust);
    transition:transform 0.2s, box-shadow 0.2s; backdrop-filter:blur(4px);
  }
  .rr-news-card:hover { transform:translateY(-3px); box-shadow:0 8px 24px rgba(0,0,0,0.5); }
  .rr-news-date { font-family:'Courier New',monospace; font-size:10px; letter-spacing:0.1em; text-transform:uppercase; color:var(--gold); margin-bottom:10px; }
  .rr-news-card h3 { font-size:18px; color:var(--steam); margin-bottom:8px; line-height:1.3; }
  .rr-news-card p  { font-size:13px; color:var(--smoke); line-height:1.7; margin-bottom:14px; }
  .rr-news-tag { font-family:'Courier New',monospace; font-size:9px; letter-spacing:0.15em; text-transform:uppercase; padding:4px 10px; border-radius:2px; background:rgba(201,148,58,0.15); color:var(--gold); border:1px solid rgba(201,148,58,0.2); }

  /* Contact */
  .rr-contact {
    background:rgba(46,38,32,0.9); border:1px solid rgba(255,255,255,0.07);
    border-radius:12px; padding:36px; border-left:4px solid var(--rust);
    display:flex; justify-content:space-between; align-items:center;
    flex-wrap:wrap; gap:24px; backdrop-filter:blur(4px);
  }
  .rr-contact h2 { font-size:24px; color:var(--steam); margin-bottom:12px; }
  .rr-contact p  { font-size:14px; color:var(--smoke); line-height:1.8; }
  .rr-contact p span { color:var(--gold); font-family:'Courier New',monospace; font-size:12px; }

  /* Footer */
  .rr-footer {
    background:rgba(46,38,32,0.95); border-top:1px solid rgba(255,255,255,0.07);
    padding:20px; text-align:center;
    font-family:'Courier New',monospace; font-size:10px;
    letter-spacing:0.1em; text-transform:uppercase; color:var(--smoke);
  }

  /* Floating AI button */
  .rr-ai-fab {
    position:fixed; bottom:28px; right:28px;
    display:flex; align-items:center; gap:10px;
    background:linear-gradient(135deg,var(--rust),var(--ember));
    color:#fff; text-decoration:none;
    padding:12px 20px 12px 14px; border-radius:50px;
    box-shadow:0 4px 20px rgba(185,74,28,0.5);
    font-family:'Courier New',monospace; font-size:11px;
    letter-spacing:0.1em; text-transform:uppercase;
    z-index:9999; transition:all 0.2s;
    border:1px solid rgba(255,255,255,0.2);
  }
  .rr-ai-fab:hover { transform:translateY(-3px); box-shadow:0 8px 28px rgba(185,74,28,0.6); }
  .rr-ai-fab-icon { font-size:22px; line-height:1; }

  @media(max-width:600px){
    .rr-contact{ flex-direction:column; }
    .rr-ai-fab{ bottom:16px; right:16px; padding:10px 16px 10px 12px; font-size:10px; }
  }
</style>

<!-- ── ANIMATED TRAIN BACKGROUND ── -->
<div class="moving-train-background">
  <div class="bg-scene"></div>
  <div class="bg-sky-glow"></div>
  <div class="bg-hills"></div>
  <div class="bg-glow"></div>
  <div class="rail-track"></div>
  <div class="rail-steel left"></div>
  <div class="rail-steel right"></div>
  <div class="train-wrapper">
    <!-- 车头在最左边，朝右行驶 -->
    <div class="locomotive">
      <div class="locomotive-front"></div>
      <div class="chimney">
        <div class="chimney-top"></div>
        <div class="steam">
          <div class="steam-puff"></div>
          <div class="steam-puff"></div>
          <div class="steam-puff"></div>
        </div>
      </div>
      <div class="cab"><div class="cab-window"></div></div>
      <div class="wheel wheel-1"></div>
      <div class="wheel wheel-2"></div>
      <div class="wheel wheel-3"></div>
      <div class="wheel wheel-4"></div>
    </div>
    <div class="tender">
      <div class="coal-pile"></div>
      <div class="wheel"></div>
      <div class="wheel" style="left:55px;"></div>
    </div>
    <div class="carriage">
      <div class="carriage-window left"></div>
      <div class="carriage-window mid"></div>
      <div class="wheel"></div>
      <div class="wheel" style="left:70px;"></div>
    </div>
    <div class="carriage carriage-small">
      <div class="carriage-window left" style="left:12px;"></div>
      <div class="carriage-window right" style="left:58px;"></div>
      <div class="wheel"></div>
      <div class="wheel" style="left:68px;"></div>
    </div>
    <!-- 守车在最后 -->
    <div class="carriage" style="width:100px;">
      <div class="carriage-window left"></div>
      <div class="carriage-window right" style="left:62px;"></div>
      <div class="caboose-deco"></div>
      <div class="wheel"></div>
      <div class="wheel" style="left:68px;"></div>
    </div>
  </div>
  <div class="cloud cloud1"></div>
  <div class="cloud cloud2"></div>
  <div class="cloud cloud3"></div>
</div>

<!-- HERO -->
<div class="rr-hero">
  <span class="rr-hero-icon">🚂</span>
  <div class="rr-hero-badge">Since 1987 · Heritage Rail · Old Poway Park</div>
  <h1 class="rr-hero-title">Poway–Midland<br><em>Railroad</em></h1>
  <p class="rr-hero-sub">Your digital depot for steam, steel, and stories. Explore vintage locomotives, real-time schedules, and the volunteers who keep the iron horse alive every weekend in Poway, CA.</p>
  <div class="rr-hero-btns">
    <a href="/railroad/calendar" class="rr-btn-primary">🎟 Book a Ride</a>
    <a href="/railroad/trains" class="rr-btn-secondary">🚂 Our Fleet</a>
  </div>
  <div class="rr-hero-track"></div>
</div>

<div class="rr-wrap">
  <div class="rr-section-title">Quick Access</div>
  <div class="rr-quick">
    <a href="/railroad/schedule" class="rr-quick-card"><span class="rr-quick-icon">📅</span><div class="rr-quick-label">Schedule</div><div class="rr-quick-sub">View today's rides</div></a>
    <a href="/railroad/calendar" class="rr-quick-card"><span class="rr-quick-icon">🎟</span><div class="rr-quick-label">Book a Ride</div><div class="rr-quick-sub">Reserve your seat</div></a>
    <a href="/railroad/trains"   class="rr-quick-card"><span class="rr-quick-icon">🚂</span><div class="rr-quick-label">Our Fleet</div><div class="rr-quick-sub">Meet the trains</div></a>
    <a href="/railroad/notes"    class="rr-quick-card"><span class="rr-quick-icon">📸</span><div class="rr-quick-label">Notes</div><div class="rr-quick-sub">Share your experience</div></a>
    <a href="/railroad/forecast" class="rr-quick-card"><span class="rr-quick-icon">📊</span><div class="rr-quick-label">Visitor Forecast</div><div class="rr-quick-sub">ML prediction</div></a>
    <a href="/railroad/events"   class="rr-quick-card"><span class="rr-quick-icon">🎪</span><div class="rr-quick-label">Events</div><div class="rr-quick-sub">Upcoming activities</div></a>
    <a href="/railroad/camera"   class="rr-quick-card"><span class="rr-quick-icon">🎥</span><div class="rr-quick-label">Live Camera</div><div class="rr-quick-sub">Watch the park live</div></a>
    <a href="/railroad/assistant" class="rr-quick-card"><span class="rr-quick-icon">🤖</span><div class="rr-quick-label">AI Assistant</div><div class="rr-quick-sub">Visit recommendations</div></a>
  </div>

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

  <div class="rr-section-title">Contact Us</div>
  <div class="rr-contact">
    <div>
      <h2>🚉 Get in Touch</h2>
      <p>
        <span>📞</span> (858) 748-0379<br>
        <span>📧</span> info@powaymidlandrr.org<br>
        <span>📍</span> 14134 Midland Rd, Poway, CA 92064<br>
        <span>🕐</span> Saturdays &amp; Select Sundays · 10am – 2pm
      </p>
    </div>
    <a href="https://powaymidlandrr.org" target="_blank" class="rr-btn-primary">Visit Official Site →</a>
  </div>
</div>

<a href="/railroad/assistant" class="rr-ai-fab">
  <span class="rr-ai-fab-icon">🤖</span>
  AI Assistant
</a>

<div class="rr-footer">
  © 2026 Poway–Midland Railroad · All aboard for a journey through rail heritage
</div>