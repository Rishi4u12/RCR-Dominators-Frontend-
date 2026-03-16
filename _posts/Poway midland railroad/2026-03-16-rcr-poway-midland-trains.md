---
layout: base
title: Our Trains
permalink: /railroad/trains
---

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,300&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">

<style>
  :root {
    --coal:    #1a1410;
    --iron:    #2e2620;
    --rust:    #b94a1c;
    --ember:   #e8621a;
    --gold:    #c9943a;
    --brass:   #d4a843;
    --steam:   #e8e0d0;
    --parchment: #f5f0e8;
    --smoke:   #8c7f6e;
    --rail:    #4a3f35;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .eq-page {
    background: var(--coal);
    min-height: 100vh;
    font-family: 'Source Serif 4', Georgia, serif;
    color: var(--steam);
    overflow-x: hidden;
  }

  /* ── Hero ── */
  .eq-hero {
    position: relative;
    padding: 80px 24px 60px;
    text-align: center;
    background: radial-gradient(ellipse at 50% 0%, #3d2a18 0%, var(--coal) 70%);
    overflow: hidden;
  }
  .eq-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
      90deg, transparent, transparent 40px,
      rgba(255,255,255,0.015) 40px, rgba(255,255,255,0.015) 41px
    );
    pointer-events: none;
  }
  .eq-hero-track {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 24px;
    background: repeating-linear-gradient(
      90deg,
      var(--rail) 0px, var(--rail) 30px,
      transparent 30px, transparent 50px
    );
    opacity: 0.4;
  }
  .eq-hero-track::before, .eq-hero-track::after {
    content: '';
    position: absolute;
    left: 0; right: 0;
    height: 4px;
    background: var(--rail);
    opacity: 0.8;
  }
  .eq-hero-track::before { top: 4px; }
  .eq-hero-track::after  { bottom: 4px; }

  .eq-back {
    position: absolute;
    top: 24px; left: 24px;
    display: flex; align-items: center; gap: 8px;
    color: var(--gold); text-decoration: none;
    font-family: 'DM Mono', monospace; font-size: 11px;
    letter-spacing: 0.15em; text-transform: uppercase;
    opacity: 0.7; transition: opacity 0.2s;
  }
  .eq-back:hover { opacity: 1; }

  .eq-hero-tag {
    font-family: 'DM Mono', monospace; font-size: 10px;
    letter-spacing: 0.3em; text-transform: uppercase;
    color: var(--gold); margin-bottom: 16px; opacity: 0.8;
  }
  .eq-hero-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(42px, 8vw, 88px);
    font-weight: 900;
    color: var(--steam);
    line-height: 0.95;
    letter-spacing: -0.02em;
    margin-bottom: 20px;
  }
  .eq-hero-title em {
    font-style: italic;
    color: var(--ember);
    display: block;
  }
  .eq-hero-sub {
    font-size: 16px; color: var(--smoke);
    max-width: 520px; margin: 0 auto 40px;
    line-height: 1.7; font-weight: 300;
  }

  /* ── Filter tabs ── */
  .eq-filters {
    display: flex; justify-content: center; gap: 8px;
    flex-wrap: wrap; padding: 0 24px 48px;
  }
  .eq-filter-btn {
    font-family: 'DM Mono', monospace; font-size: 11px;
    letter-spacing: 0.12em; text-transform: uppercase;
    padding: 8px 18px; border-radius: 2px;
    border: 1px solid rgba(255,255,255,0.12);
    background: transparent; color: var(--smoke);
    cursor: pointer; transition: all 0.2s;
  }
  .eq-filter-btn:hover { border-color: var(--gold); color: var(--gold); }
  .eq-filter-btn.active { background: var(--rust); border-color: var(--rust); color: #fff; }

  /* ── Grid ── */
  .eq-grid {
    max-width: 1200px; margin: 0 auto;
    padding: 0 24px 80px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 2px;
  }

  /* ── Card ── */
  .eq-card {
    position: relative;
    background: var(--iron);
    cursor: pointer;
    overflow: hidden;
    transition: transform 0.3s;
  }
  .eq-card:hover { transform: translateY(-4px); z-index: 2; }
  .eq-card.hidden { display: none; }

  .eq-card-banner {
    height: 6px;
    background: var(--rust);
  }
  .eq-card-banner.cable  { background: #3b82f6; }
  .eq-card-banner.speeder { background: #10b981; }
  .eq-card-banner.gondola { background: #8b5cf6; }
  .eq-card-banner.coach   { background: var(--gold); }
  .eq-card-banner.static  { background: var(--smoke); }
  .eq-card-banner.sold    { background: linear-gradient(90deg, #6b4c8a, #9b59b6); }

  .eq-card-emoji {
    font-size: 52px;
    padding: 32px 28px 8px;
    display: block;
    filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5));
    transition: transform 0.3s;
  }
  .eq-card:hover .eq-card-emoji { transform: scale(1.1) rotate(-3deg); }

  .eq-card-body { padding: 0 28px 28px; }

  .eq-card-type {
    font-family: 'DM Mono', monospace; font-size: 9px;
    letter-spacing: 0.25em; text-transform: uppercase;
    color: var(--gold); margin-bottom: 8px;
  }
  .eq-card-name {
    font-family: 'Playfair Display', serif;
    font-size: clamp(20px, 3vw, 26px); font-weight: 700;
    color: var(--steam); line-height: 1.15; margin-bottom: 12px;
  }
  .eq-card-desc {
    font-size: 13px; color: var(--smoke);
    line-height: 1.65; margin-bottom: 20px;
    font-weight: 300;
    display: -webkit-box; -webkit-line-clamp: 3;
    -webkit-box-orient: vertical; overflow: hidden;
  }

  .eq-card-specs {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 10px; margin-bottom: 20px;
  }
  .eq-spec {
    border-left: 2px solid rgba(255,255,255,0.08);
    padding-left: 10px;
  }
  .eq-spec-label {
    font-family: 'DM Mono', monospace; font-size: 8px;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--smoke); margin-bottom: 3px;
  }
  .eq-spec-value { font-size: 12px; color: var(--steam); font-weight: 600; }

  .eq-card-status {
    display: inline-flex; align-items: center; gap: 6px;
    font-family: 'DM Mono', monospace; font-size: 10px;
    letter-spacing: 0.1em; text-transform: uppercase;
    padding: 5px 10px; border-radius: 2px;
    margin-bottom: 16px;
  }
  .status-operational { background: rgba(45,106,79,0.2); color: #4caf82; border: 1px solid rgba(76,175,130,0.3); }
  .status-static { background: rgba(255,255,255,0.05); color: var(--smoke); border: 1px solid rgba(255,255,255,0.1); }
  .status-sold   { background: rgba(107,76,138,0.2); color: #c084fc; border: 1px solid rgba(192,132,252,0.3); }
  .eq-status-dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }

  .eq-card-btn {
    width: 100%; padding: 11px;
    background: transparent;
    border: 1px solid rgba(255,255,255,0.15);
    color: var(--steam); font-family: 'DM Mono', monospace;
    font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase;
    cursor: pointer; transition: all 0.2s;
    display: flex; align-items: center; justify-content: center; gap: 8px;
  }
  .eq-card-btn:hover { background: var(--rust); border-color: var(--rust); }

  /* ── Modal ── */
  .eq-modal-overlay {
    position: fixed; inset: 0; z-index: 1000;
    background: rgba(10,8,6,0.92);
    display: flex; align-items: center; justify-content: center;
    padding: 24px;
    opacity: 0; pointer-events: none;
    transition: opacity 0.3s;
  }
  .eq-modal-overlay.open { opacity: 1; pointer-events: all; }

  .eq-modal {
    background: var(--iron);
    max-width: 720px; width: 100%;
    max-height: 90vh; overflow-y: auto;
    position: relative;
    transform: translateY(30px) scale(0.97);
    transition: transform 0.3s;
    scrollbar-width: thin;
    scrollbar-color: var(--rail) transparent;
  }
  .eq-modal-overlay.open .eq-modal { transform: none; }

  .eq-modal-banner { height: 8px; background: var(--rust); }
  .eq-modal-banner.cable   { background: #3b82f6; }
  .eq-modal-banner.speeder { background: #10b981; }
  .eq-modal-banner.gondola { background: #8b5cf6; }
  .eq-modal-banner.coach   { background: var(--gold); }

  .eq-modal-close {
    position: absolute; top: 20px; right: 20px;
    width: 32px; height: 32px; border-radius: 50%;
    background: rgba(255,255,255,0.08); border: none;
    color: var(--steam); font-size: 18px; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.2s;
  }
  .eq-modal-close:hover { background: var(--rust); }

  .eq-modal-header { padding: 36px 40px 28px; }
  .eq-modal-emoji { font-size: 64px; display: block; margin-bottom: 16px; }
  .eq-modal-type {
    font-family: 'DM Mono', monospace; font-size: 10px;
    letter-spacing: 0.25em; text-transform: uppercase;
    color: var(--gold); margin-bottom: 10px;
  }
  .eq-modal-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(28px, 5vw, 42px); font-weight: 900;
    color: var(--steam); line-height: 1.1; margin-bottom: 16px;
  }

  .eq-modal-body { padding: 0 40px 40px; }

  /* Specs table */
  .eq-modal-specs {
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 4px; overflow: hidden; margin-bottom: 32px;
  }
  .eq-modal-spec-row {
    display: grid; grid-template-columns: 160px 1fr;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .eq-modal-spec-row:last-child { border-bottom: none; }
  .eq-modal-spec-key {
    font-family: 'DM Mono', monospace; font-size: 10px;
    letter-spacing: 0.12em; text-transform: uppercase;
    color: var(--smoke); padding: 12px 16px;
    background: rgba(0,0,0,0.2);
  }
  .eq-modal-spec-val {
    font-size: 13px; color: var(--steam);
    padding: 12px 16px; line-height: 1.5;
  }

  /* History */
  .eq-modal-section-title {
    font-family: 'Playfair Display', serif;
    font-size: 18px; font-weight: 700;
    color: var(--gold); margin-bottom: 16px;
    display: flex; align-items: center; gap: 10px;
  }
  .eq-modal-section-title::after {
    content: ''; flex: 1; height: 1px;
    background: rgba(255,255,255,0.08);
  }
  .eq-modal-history {
    font-size: 14px; color: rgba(232,224,208,0.8);
    line-height: 1.8; font-weight: 300;
    margin-bottom: 32px;
  }

  /* Timeline */
  .eq-timeline { position: relative; padding-left: 24px; margin-bottom: 32px; }
  .eq-timeline::before {
    content: ''; position: absolute; left: 6px; top: 0; bottom: 0;
    width: 2px; background: rgba(255,255,255,0.08);
  }
  .eq-timeline-item { position: relative; margin-bottom: 20px; }
  .eq-timeline-dot {
    position: absolute; left: -22px; top: 4px;
    width: 10px; height: 10px; border-radius: 50%;
    background: var(--rust); border: 2px solid var(--iron);
  }
  .eq-timeline-year {
    font-family: 'DM Mono', monospace; font-size: 11px;
    color: var(--gold); font-weight: 500; margin-bottom: 4px;
  }
  .eq-timeline-text { font-size: 13px; color: var(--smoke); line-height: 1.6; }

  @media (max-width: 600px) {
    .eq-modal-header { padding: 28px 24px 20px; }
    .eq-modal-body { padding: 0 24px 32px; }
    .eq-modal-spec-row { grid-template-columns: 120px 1fr; }
    .eq-grid { grid-template-columns: 1fr; }
  }
</style>

<div class="eq-page">

  <div class="eq-hero">
    <a href="/railroad/schedule" class="eq-back">← Schedule</a>
    <div class="eq-hero-tag">Poway–Midland Railroad · Est. 1987</div>
    <h1 class="eq-hero-title">Our<em>Fleet</em></h1>
    <p class="eq-hero-sub">Over a century of railroad history, lovingly restored and running every weekend at Old Poway Park.</p>
    <div class="eq-hero-track"></div>
  </div>

  <div class="eq-filters">
    <button class="eq-filter-btn active" onclick="eqFilter('all', this)">All Equipment</button>
    <button class="eq-filter-btn" onclick="eqFilter('operational', this)">🟢 Operational</button>
    <button class="eq-filter-btn" onclick="eqFilter('steam', this)">🚂 Steam</button>
    <button class="eq-filter-btn" onclick="eqFilter('cable', this)">🚌 Cable Car</button>
    <button class="eq-filter-btn" onclick="eqFilter('speeder', this)">🚃 Speeder</button>
    <button class="eq-filter-btn" onclick="eqFilter('static', this)">🏛 Static</button>
  </div>

  <div class="eq-grid" id="eqGrid"></div>

</div>

<!-- Modal -->
<div class="eq-modal-overlay" id="eqModal" onclick="eqCloseModal(event)">
  <div class="eq-modal" id="eqModalInner">
    <div class="eq-modal-banner" id="eqModalBanner"></div>
    <button class="eq-modal-close" onclick="eqCloseModal()">✕</button>
    <div id="eqModalPhoto" style="display:none;">
      <img id="eqModalPhotoImg" src="" alt="" style="width:100%;max-height:340px;object-fit:cover;display:block;">
    </div>
    <div class="eq-modal-header">
      <span class="eq-modal-emoji" id="eqModalEmoji"></span>
      <div class="eq-modal-type" id="eqModalType"></div>
      <div class="eq-modal-title" id="eqModalTitle"></div>
      <div id="eqModalStatus"></div>
    </div>
    <div class="eq-modal-body">
      <div class="eq-modal-specs" id="eqModalSpecs"></div>
      <div class="eq-modal-section-title">History</div>
      <div class="eq-modal-history" id="eqModalHistory"></div>
      <div class="eq-modal-section-title">Timeline</div>
      <div class="eq-timeline" id="eqModalTimeline"></div>
    </div>
  </div>
</div>

<script>
const EQ_DATA = [
  {
    id: 'steam',
    photo: '/assets/img/trains/steam-engine1-1.png',
    emoji: '🚂',
    type: 'Steam Locomotive',
    name: '1907 Baldwin 0-4-0',
    bannerClass: '',
    category: 'steam',
    status: 'operational',
    tagline: 'The crown jewel — over 100 years of steam power.',
    specs: {
      'Built':          '#30646, April 1907 · Baldwin Locomotive Works, Philadelphia PA',
      'Classification': '0-4-0 T (Whyte)',
      'Weight':         '~16 tons (with tender)',
      'Driver Diameter':'28 inches',
      'Boiler Pressure':'150 p.s.i.',
      'Tractive Effort':'5,160 LBS (as built)',
      'Fuel':           'Diesel #2',
      'Cylinders':      '9" × 14" bore & stroke',
    },
    history: `The centerpiece of the PMRR collection was built in 1907 by the Baldwin Locomotive Works in Philadelphia for the Henry Cowell Lime and Portland Cement Company of Cowell, CA. Originally dubbed "Engine No. 3," it hauled rock from quarry to crushing mill — a distance of three miles.\n\nIn 1952 it was sold to South San Francisco Scrap Metals. In 1960, Charles Pollard of Vista, CA extensively modified it to resemble an 1870s engine, renaming it the "Robert E. Lee." After Pollard's death in 1966, John S. Porter of Poway purchased it and built a small railroad on his land.\n\nIn December 1987 the City of Poway purchased the Porter property — locomotive and all. PMRR volunteers restored it to full operational condition, and on July 4, 1997 it made its inaugural PMRR passenger run.`,
    timeline: [
      { year: '1907', text: 'Built by Baldwin Locomotive Works, Philadelphia, PA for Henry Cowell Lime & Cement Co.' },
      { year: '1952', text: 'Sold to South San Francisco Scrap Metals Company.' },
      { year: '1960', text: 'Purchased by Charles Pollard; extensively modified to resemble an 1870s engine.' },
      { year: '1966', text: 'Pollard dies; locomotive sold to John S. Porter of Poway who builds a private railroad.' },
      { year: '1987', text: 'City of Poway purchases the Porter property, acquiring the locomotive.' },
      { year: '1997', text: 'Full restoration completed. Makes inaugural PMRR passenger run on July 4th.' },
    ]
  },
  {
    id: 'cable',
    photo: '/assets/img/trains/cablecar-17.png',
    emoji: '🚌',
    type: 'Historic Cable Car',
    name: 'SF Cable Car #17',
    bannerClass: 'cable',
    category: 'cable',
    status: 'operational',
    tagline: 'Born in the ashes of the 1906 earthquake. Now riding the rails of Poway.',
    specs: {
      'Built':          'August 1906 · California St. Cable Railroad Co., San Francisco CA',
      'Construction':   'Wood with iron frame',
      'Length':         "30' 5\"",
      'Weight':         '11,500 LBS',
      'Seating':        '34 passengers',
      'Original Power': 'Continuous underground cable',
      'Current Power':  'Battery electric (upgraded 2013)',
    },
    history: `Cable Car #17 was donated by the City of San Diego to the City of Poway on October 30, 1997. It was once part of a fleet of 45 cars on the California Street Cable Railroad — a 12-mile line between Market Street and Presidio Avenue in San Francisco.\n\nBuilt in August 1906 to replace stock destroyed in the great San Francisco earthquake and fire, it still bears its original number 17. Constructed to the 1890 design of the original fleet, it is 30′5″ long, 8′ wide and seats 34.\n\nIn 1955 it was sold to Knott's Berry Farm in Orange County. After 33 years of service there, it was retired in 1988 and acquired by the City of San Diego — intended for the Gaslamp District, a plan that never happened. It was found decaying in an MTDB maintenance yard in 1997, and that's how it ended up in Poway.`,
    timeline: [
      { year: '1906', text: 'Built to replace cable cars destroyed in the San Francisco earthquake and fire.' },
      { year: '1952', text: 'City of San Francisco acquires the California Street line; car becomes municipal.' },
      { year: '1955', text: 'Retired from SF service; sold to Knott\'s Berry Farm amusement park.' },
      { year: '1988', text: 'Retired from Knott\'s Berry Farm after 33 years of service.' },
      { year: '1997', text: 'Donated by City of San Diego to City of Poway; cosmetic restoration begins.' },
      { year: '2013', text: 'Battery-electric drive system upgraded by PMRR Volunteers and City of Poway.' },
    ]
  },
  {
    id: 'speeder',
    photo: '/assets/img/trains/speeder.png',
    emoji: '🚃',
    type: 'Maintenance Vehicle',
    name: 'Fairmont Speeder',
    bannerClass: 'speeder',
    category: 'speeder',
    status: 'operational',
    tagline: 'The workhorse of the line — rebuilt from near-ruin.',
    specs: {
      'Built':        '1950 · Fairmont Co., Fairmont, MN',
      'Rebuilt':      '1992–1994 by PMRR Volunteers at Old Poway Park',
      'Engine':       '4-cylinder gasoline',
      'Transmission': '4 forward gears, 1 reverse',
    },
    history: `The Speeder was built in 1950 by the Fairmont Company of Fairmont, MN. It was among the railroad equipment purchased from the estate of John Porter in 1987 when the City of Poway acquired the property.\n\nSpeeder cars like this one were used to transport work crews and their supplies down the track to work sites. When acquired by the City it was in very poor condition — but it was the first piece of rolling stock to be restored by PMRR Volunteers, and stands as an example of the terrific results that can be achieved through hard work and dedication.`,
    timeline: [
      { year: '1950', text: 'Built by Fairmont Company, Fairmont, MN.' },
      { year: '1987', text: 'Acquired by City of Poway from the John Porter estate.' },
      { year: '1992', text: 'Restoration begins — the first piece of rolling stock tackled by PMRR Volunteers.' },
      { year: '1994', text: 'Restoration complete; enters regular service at Old Poway Park.' },
    ]
  },
  {
    id: 'gondola',
    photo: '/assets/img/trains/gondola-cars.png',
    emoji: '🛤️',
    type: 'Passenger Cars',
    name: 'Mining Gondola Cars (×4)',
    bannerClass: 'gondola',
    category: 'operational',
    status: 'operational',
    tagline: 'Once hauled ore from the mines. Now carries smiling families.',
    specs: {
      'Built':      'c. 1880s',
      'Rebuilt':    '1992–1995 by PMRR Volunteers',
      'Capacity':   '12 passengers each',
      'Material':   'Wood-sided',
      'Count':      '4 cars',
    },
    history: `These four wood-sided gondola cars are used today for carrying passengers around the track behind the Fairmont Speeder and behind the Locomotive. They were built in the 1880s for hauling a very different cargo — rocks and ore from the mines. They are typical of the narrow gauge ore cars once used in mining operations throughout the American West.\n\nOriginally the interiors were faced with sheet metal to prolong the life of the wooden planks. All of the wood was in such poor condition when acquired that it was fully replaced, and seats were installed to carry passengers. Each car comfortably seats up to 12 passengers.`,
    timeline: [
      { year: '1880s', text: 'Built for hauling ore and rock from western mining operations.' },
      { year: '1987', text: 'Acquired by City of Poway from the John Porter estate.' },
      { year: '1992', text: 'Restoration begins; wood replaced and passenger seating installed.' },
      { year: '1995', text: 'All four cars restored and placed in passenger service.' },
    ]
  },
  {
    id: 'coach',
    emoji: '🚋',
    type: 'Passenger Coach',
    name: '"Paquay Valley" Coach',
    bannerClass: 'coach',
    category: 'operational',
    status: 'operational',
    tagline: "The PMRR's primary passenger vehicle — built from scratch in the 1960s.",
    specs: {
      'Built':     'c. 1963–1965 by Charles Pollard, Vista CA',
      'Style':     '1870s replica passenger coach',
      'Rebuilt':   '1993–1996 by PMRR Volunteers',
      'Capacity':  '32 passengers',
      'Frame':     'Steel with clerestory roof',
      'Named':     '"Paquay Valley" (1999) — old Native American name for Poway Valley',
    },
    history: `When Charles Pollard acquired the Baldwin locomotive, he needed something for it to pull. He fabricated an 1870s-style passenger coach entirely from scratch — from the wheels up. The coach was among the rolling stock purchased by John Porter and eventually acquired by the City.\n\nConstructed of plywood on a steel frame, it was in very bad shape when rolled into the train barn for renovation. PMRR Volunteers stripped the wood from the frame and added steel to form a clerestory roof, giving it a more elegant appearance consistent with the vintage of the steam locomotive.\n\nIn 1999 it was repainted and given the name "Paquay Valley," the old Native American name for the Poway Valley.`,
    timeline: [
      { year: '1963', text: 'Charles Pollard of Vista, CA fabricates the coach to accompany his Baldwin locomotive.' },
      { year: '1987', text: 'Acquired by City of Poway along with the rest of the Porter collection.' },
      { year: '1993', text: 'Restoration begins; wood stripped, steel clerestory roof added.' },
      { year: '1996', text: 'Restoration complete; enters service as primary passenger vehicle.' },
      { year: '1999', text: 'Repainted and named "Paquay Valley" — the Native American name for Poway Valley.' },
    ]
  },
  {
    id: 'trolley',
    photo: '/assets/img/trains/Exhibit-12A-Trolley-Car-756x1024-1.png',
    emoji: '🚃',
    type: 'Historic Trolley Car',
    name: 'LA Railway Trolley #57',
    bannerClass: 'sold',
    category: 'static',
    status: 'sold',
    tagline: 'A Hollywood prop, a San Francisco survivor — once a beloved PMRR icon. Sold 2020.',
      'Built':          '1894–1897 as Electric Trolley #54',
      'Converted':      '1912 as Materials Car #9306',
      'Construction':   'Wood with iron frame',
      'Length':         "26'",
      'Weight':         '~24,000 LBS',
      'Original Power': 'DC electric from overhead wire',
      'Final Power':    'GM flat 6-cylinder (Corvair), 94 hp',
      'Status':         '⚠️ Sold 2020 to Samuel Slater Experience, Webster MA',
    },
    history: `This trolley has had one of the most fascinating and complicated histories of any vehicle in the PMRR collection. The best research suggests portions of it — mostly the wheel truck frame — could date as far back as 1894, when the Maguire Manufacturing Company of Chicago began building open bench seat trolleys for the Los Angeles Railway Co.\n\nThey ran on two General Electric 25-horsepower electric traction motors. By the late 1890s most had been removed from service as Los Angeles grew. In 1912, many survivors — including this one — were converted into material-hauling cars, renumbered as #9306. They hauled rails, spikes, bolts and rubbish across the expanding city.\n\nIn 1926, #9306 was sold to Lasky Studios (which became Paramount in 1928), where it was remodeled to "cable car" appearance for use in several films. Its last known film appearance was in the 1969 movie "Gaily, Gaily." It then sat on a back lot until 1977 when sold to a private collector, eventually acquired by PMRR Volunteers in early 1993.\n\nAfter years of devoted restoration by PMRR Volunteers — replacing the wheel truck, rebuilding the superstructure, and adding safety features — the trolley became fully operational in Spring 1996 and became a firm favourite with members and visitors alike.\n\nIn 2020, the trolley was sold to the Samuel Slater Experience in Webster, MA, where it continues its remarkable journey.`,
    timeline: [
      { year: '1894', text: 'Built by Maguire Manufacturing Co. for the Los Angeles Railway Co. as Electric Trolley #54.' },
      { year: '1912', text: 'Converted into a materials-hauling car, renumbered #9306.' },
      { year: '1926', text: 'Sold to Lasky Studios (later Paramount); remodeled as a "cable car" movie prop.' },
      { year: '1969', text: 'Last known film appearance in "Gaily, Gaily."' },
      { year: '1977', text: 'Sold from Paramount back lot to a private collector.' },
      { year: '1993', text: 'Acquired by PMRR Volunteers; restoration begins.' },
      { year: '1996', text: 'Full restoration complete; enters regular service at Old Poway Park.' },
      { year: '2020', text: 'Sold to the Samuel Slater Experience, Webster MA — a new chapter begins.' },
    ]
  },
  {
    emoji: '🔧',
    type: 'Static Display',
    name: 'Replica 1900 Handcar',
    bannerClass: 'static',
    category: 'static',
    status: 'static',
    tagline: 'A tribute to the section gangs who kept the railroads running.',
    specs: {
      'Built':  '2012–2013 by PMRR Volunteers',
      'Style':  'Replica circa 1900',
      'Status': 'Static display',
    },
    history: `Beginning in the late 1800s, handcars emerged as an effective way to travel on the rails without expensive full-size train equipment. Originally powered by a hand crank that spun a wheel, handcars were useful for getting a small crew and light equipment down the line for maintenance.\n\nA typical crew of 4–6 (a "Section Gang") was responsible for a 4–5 mile section of track. Their handcar was loaded with spike tools, shovels, picks, rail-cutting chisels, signal flags, water, oilcans, and small hand tools.\n\nHandcars were quite dangerous — fast-moving trains could come around a blind corner before crews could escape. By 1910 or so, they were gradually replaced by safer gas-powered speeder cars like the Fairmont Speeder here at PMRR.`,
    timeline: [
      { year: 'c.1900', text: 'Original handcars widely used by railroad section gangs across the American West.' },
      { year: '1910s', text: 'Handcars begin to be replaced by safer, faster gas-powered speeder cars.' },
      { year: '2012', text: 'PMRR Volunteers begin construction of a replica handcar.' },
      { year: '2013', text: 'Replica completed and placed on static display at Old Poway Park.' },
    ]
  },
  {
    id: 'caboose',
    emoji: '🏠',
    type: 'Static Display',
    name: '1937 Southern Pacific Caboose',
    bannerClass: 'static',
    category: 'static',
    status: 'static',
    tagline: 'A classic end-of-train icon from the Southern Pacific era.',
    specs: {
      'Built':     '1937',
      'Railroad':  'Southern Pacific',
      'Status':    'Static display',
    },
    history: `This 1937 Southern Pacific caboose is a classic example of the end-of-train car that was once a familiar sight on American railroads. Cabooses served as the crew car for train conductors and brakemen, providing a workspace, shelter, and observation platform at the rear of freight trains.\n\nThe Southern Pacific Railroad was one of the most significant railroads in the American West, connecting California to the rest of the nation. This caboose stands as a static display at Old Poway Park, representing an important chapter in American railroad history.`,
    timeline: [
      { year: '1937', text: 'Built for Southern Pacific Railroad service.' },
      { year: '1980s', text: 'Cabooses phased out of service on most American railroads.' },
      { year: 'Present', text: 'On static display at Old Poway Park as part of the PMRR collection.' },
    ]
  },
  {
    id: 'boxcar',
    emoji: '📦',
    type: 'Static Display',
    name: '1960 Santa Fe Boxcar',
    bannerClass: 'static',
    category: 'static',
    status: 'static',
    tagline: 'A piece of the legendary Atchison, Topeka and Santa Fe Railway.',
    specs: {
      'Built':    '1960',
      'Railroad': 'Atchison, Topeka and Santa Fe Railway (ATSF)',
      'Type':     'Boxcar',
      'Status':   'Static display',
    },
    history: `This 1960 boxcar once served the legendary Atchison, Topeka and Santa Fe Railway — one of the most famous and romanticized railroads in American history, known simply as the "Santa Fe." Boxcars like this one were the backbone of American freight transportation for over a century, hauling everything from agricultural products to manufactured goods across the country.\n\nThe Santa Fe Railway was known for its iconic red-and-silver "Warbonnet" paint scheme and its role in connecting the Midwest to California. Today this boxcar stands as a static exhibit at Old Poway Park.`,
    timeline: [
      { year: '1860s', text: 'Atchison, Topeka and Santa Fe Railway founded; grows into a major transcontinental railroad.' },
      { year: '1960', text: 'This boxcar built for Santa Fe freight service.' },
      { year: 'Present', text: 'On static display at Old Poway Park as part of the PMRR collection.' },
    ]
  },
];

// ── Render cards ──────────────────────────────────────────────────────────────
function eqRender(data) {
  const grid = document.getElementById('eqGrid');
  grid.innerHTML = '';
  data.forEach(eq => {
    const card = document.createElement('div');
    card.className = 'eq-card';
    card.dataset.category = eq.category;
    card.dataset.status   = eq.status;
    card.dataset.id       = eq.id;

    const specEntries = Object.entries(eq.specs).slice(0, 4);
    const specsHtml = specEntries.map(([k, v]) => `
      <div class="eq-spec">
        <div class="eq-spec-label">${k}</div>
        <div class="eq-spec-value">${v.length > 28 ? v.slice(0,28)+'…' : v}</div>
      </div>`).join('');

    const statusLabel = eq.status === 'operational' ? 'Operational' : eq.status === 'sold' ? '⚠️ Sold — Left PMRR 2020' : 'Static Display';
    const statusClass = eq.status === 'operational' ? 'status-operational' : eq.status === 'sold' ? 'status-sold' : 'status-static';

    card.innerHTML = `
      <div class="eq-card-banner ${eq.bannerClass}"></div>
      <span class="eq-card-emoji">${eq.emoji}</span>
      <div class="eq-card-body">
        <div class="eq-card-type">${eq.type}</div>
        <div class="eq-card-name">${eq.name}</div>
        <div class="eq-card-status ${statusClass}">
          <span class="eq-status-dot"></span>${statusLabel}
        </div>
        <div class="eq-card-desc">${eq.tagline}</div>
        <div class="eq-card-specs">${specsHtml}</div>
        <button class="eq-card-btn" onclick="eqOpenModal('${eq.id}')">
          View Full Profile →
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ── Filter ────────────────────────────────────────────────────────────────────
function eqFilter(type, btn) {
  document.querySelectorAll('.eq-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.eq-card').forEach(card => {
    const show = type === 'all'
      || card.dataset.category === type
      || card.dataset.status   === type;
    card.classList.toggle('hidden', !show);
  });
}

// ── Modal ─────────────────────────────────────────────────────────────────────
function eqOpenModal(id) {
  const eq = EQ_DATA.find(e => e.id === id);
  if (!eq) return;

  document.getElementById('eqModalBanner').className = `eq-modal-banner ${eq.bannerClass}`;

  // Photo
  const photoEl    = document.getElementById('eqModalPhoto');
  const photoImgEl = document.getElementById('eqModalPhotoImg');
  if (eq.photo) {
    photoImgEl.src        = eq.photo;
    photoImgEl.alt        = eq.name;
    photoEl.style.display = 'block';
  } else {
    photoEl.style.display = 'none';
    photoImgEl.src        = '';
  }

  document.getElementById('eqModalEmoji').textContent  = eq.emoji;
  document.getElementById('eqModalType').textContent   = eq.type;
  document.getElementById('eqModalTitle').textContent  = eq.name;

  const statusLabel = eq.status === 'operational' ? 'Operational' : eq.status === 'sold' ? '⚠️ Sold — Left PMRR 2020' : 'Static Display';
  const statusClass = eq.status === 'operational' ? 'status-operational' : eq.status === 'sold' ? 'status-sold' : 'status-static';
  document.getElementById('eqModalStatus').innerHTML =
    `<span class="eq-card-status ${statusClass}"><span class="eq-status-dot"></span>${statusLabel}</span>`;

  // Specs
  const specsHtml = Object.entries(eq.specs).map(([k,v]) => `
    <div class="eq-modal-spec-row">
      <div class="eq-modal-spec-key">${k}</div>
      <div class="eq-modal-spec-val">${v}</div>
    </div>`).join('');
  document.getElementById('eqModalSpecs').innerHTML = specsHtml;

  // History
  document.getElementById('eqModalHistory').innerHTML =
    eq.history.split('\n\n').map(p => `<p style="margin-bottom:14px">${p}</p>`).join('');

  // Timeline
  const tlHtml = eq.timeline.map(t => `
    <div class="eq-timeline-item">
      <div class="eq-timeline-dot"></div>
      <div class="eq-timeline-year">${t.year}</div>
      <div class="eq-timeline-text">${t.text}</div>
    </div>`).join('');
  document.getElementById('eqModalTimeline').innerHTML = tlHtml;

  const overlay = document.getElementById('eqModal');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  // Scroll modal to top
  document.getElementById('eqModalInner').scrollTop = 0;
}

function eqCloseModal(e) {
  if (e && e.target !== document.getElementById('eqModal')) return;
  document.getElementById('eqModal').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') eqCloseModal();
});

// ── Init ──────────────────────────────────────────────────────────────────────
eqRender(EQ_DATA);
</script>