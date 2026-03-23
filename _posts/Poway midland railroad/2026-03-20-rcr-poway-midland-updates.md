---
layout: base
title: Announcements & Updates
permalink: /railroad/updates
---

<style>
  :root{--coal:#1a1410;--iron:#2e2620;--iron2:#3a2e28;--rust:#b94a1c;--ember:#e8621a;--gold:#c9943a;--steam:#e8e0d0;--smoke:#8c7f6e;}
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  body{background:var(--coal);color:var(--steam);font-family:'Georgia',serif;padding-top:56px;}

  .rr-hero{padding:52px 24px 40px;text-align:center;background:radial-gradient(ellipse at 50% 0%,#3d2a18 0%,var(--coal) 70%);border-bottom:1px solid rgba(255,255,255,0.06);}
  .rr-hero-tag{font-family:'Courier New',monospace;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:var(--gold);margin-bottom:10px;opacity:0.8;}
  .rr-hero h1{font-size:clamp(28px,5vw,52px);font-weight:700;line-height:1;margin-bottom:10px;}
  .rr-hero h1 em{font-style:italic;color:var(--ember);}
  .rr-hero p{font-size:14px;color:var(--smoke);max-width:520px;margin:0 auto;line-height:1.7;}

  .rr-wrap{max-width:1000px;margin:0 auto;padding:40px 20px 80px;}
  .rr-grid-2{display:grid;grid-template-columns:280px 1fr;gap:20px;}
  @media(max-width:700px){.rr-grid-2{grid-template-columns:1fr;}}

  .rr-card{background:var(--iron);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:24px;border-top:3px solid var(--rust);}
  .rr-card-title{font-family:'Courier New',monospace;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);margin-bottom:16px;padding-bottom:10px;border-bottom:1px solid rgba(255,255,255,0.07);}

  .rr-field{margin-bottom:14px;}
  .rr-label{font-family:'Courier New',monospace;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:var(--smoke);margin-bottom:5px;display:block;}
  .rr-input,.rr-select{width:100%;padding:10px 14px;background:var(--iron2);border:1px solid rgba(255,255,255,0.1);border-radius:6px;color:var(--steam);font-family:'Georgia',serif;font-size:13px;transition:border-color 0.2s;}
  .rr-select{appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%238c7f6e'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 12px center;padding-right:32px;}
  .rr-input:focus,.rr-select:focus{outline:none;border-color:var(--gold);}
  .rr-select option{background:var(--iron2);}
  .rr-status-note{font-family:'Courier New',monospace;font-size:10px;color:var(--smoke);margin-top:10px;}

  .rr-announcement{background:var(--iron2);border:1px solid rgba(255,255,255,0.06);border-radius:8px;padding:16px;margin-bottom:10px;transition:all 0.2s;}
  .rr-announcement:hover{border-color:rgba(201,148,58,0.3);background:rgba(42,31,24,0.6);}
  .rr-ann-title{font-size:15px;color:var(--steam);font-weight:600;margin-bottom:6px;}
  .rr-ann-meta{font-family:'Courier New',monospace;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:var(--gold);margin-bottom:8px;}
  .rr-ann-body{font-size:13px;color:var(--smoke);line-height:1.6;}
  .rr-empty{text-align:center;padding:40px;font-family:'Courier New',monospace;font-size:12px;color:var(--smoke);}
</style>

<div class="rr-hero">
  <div class="rr-hero-tag">Latest News · Poway–Midland Railroad</div>
  <h1>Announcements <em>&amp; Updates</em></h1>
  <p>Search and filter operational updates and event announcements.</p>
</div>

<div class="rr-wrap">
  <div class="rr-grid-2">

    <div class="rr-card" style="align-self:start;">
      <div class="rr-card-title">🔍 Filter Updates</div>
      <div class="rr-field">
        <label class="rr-label" for="searchInput">Search</label>
        <input class="rr-input" id="searchInput" type="search" placeholder="Search by title or keyword">
      </div>
      <div class="rr-field">
        <label class="rr-label" for="catFilter">Category</label>
        <select class="rr-select" id="catFilter">
          <option value="all">All Categories</option>
        </select>
      </div>
      <div class="rr-status-note" id="statusNote">Loading updates...</div>
    </div>

    <div class="rr-card">
      <div class="rr-card-title">📰 Latest Updates</div>
      <div id="updatesList"></div>
    </div>

  </div>
</div>

<script>
const UPDATES = [
  { id:1, title:"Spring Family Ride Window Expanded",   category:"events",     date:"2026-03-12", summary:"Saturday rides now run until 4:30 PM during spring programming weeks." },
  { id:2, title:"Volunteer Engineer Orientation",       category:"volunteer",  date:"2026-03-08", summary:"New volunteer orientation includes dispatch basics, safety checks, and guest operations." },
  { id:3, title:"Group Booking Support Added",          category:"service",    date:"2026-02-27", summary:"School and community groups can request planning support through the online form." },
  { id:4, title:"Track Maintenance Complete",           category:"operations", date:"2026-02-15", summary:"Routine maintenance improved ride smoothness and reduced dwell time at turnaround point." },
  { id:5, title:"Steam Locomotive Seasonal Schedule",   category:"events",     date:"2026-02-10", summary:"Full steam operations confirmed for all Saturdays through summer 2026." },
];

let store = [...UPDATES];
const listEl   = document.getElementById('updatesList');
const statusEl = document.getElementById('statusNote');
const searchEl = document.getElementById('searchInput');
const catEl    = document.getElementById('catFilter');

// Populate categories
const cats = [...new Set(store.map(u=>u.category))];
cats.forEach(c => {
  const o = document.createElement('option');
  o.value = c; o.textContent = c[0].toUpperCase()+c.slice(1);
  catEl.appendChild(o);
});

function render() {
  const q   = searchEl.value.trim().toLowerCase();
  const cat = catEl.value;
  const filtered = store.filter(u => {
    const matchQ   = !q || (u.title+' '+u.summary).toLowerCase().includes(q);
    const matchCat = cat==='all' || u.category===cat;
    return matchQ && matchCat;
  });
  statusEl.textContent = `${filtered.length} item(s) shown`;
  listEl.innerHTML = '';
  if (!filtered.length) {
    listEl.innerHTML = '<div class="rr-empty">No results match your search.</div>';
    return;
  }
  filtered.forEach(u => {
    listEl.innerHTML += `
      <div class="rr-announcement">
        <div class="rr-ann-title">${u.title}</div>
        <div class="rr-ann-meta">${u.category.toUpperCase()} · ${u.date}</div>
        <div class="rr-ann-body">${u.summary}</div>
      </div>`;
  });
}

searchEl.addEventListener('input', render);
catEl.addEventListener('change', render);
render();
</script>
