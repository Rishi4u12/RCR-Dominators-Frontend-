---
layout: base
title: AI Visitor Assistant
permalink: /railroad/assistant
---

<style>
  :root {
    --coal:#1a1410;--iron:#2e2620;--iron2:#3a2e28;--iron3:#251e18;
    --rust:#b94a1c;--ember:#e8621a;--gold:#c9943a;--gold2:#f0c060;
    --steam:#e8e0d0;--smoke:#8c7f6e;--green:#2d6a4f;
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: var(--coal); color: var(--steam); font-family: 'Georgia', serif; padding-top: 56px; }

  .rr-hero {
    padding: 52px 24px 40px; text-align: center;
    background: radial-gradient(ellipse at 50% 0%, #3d2a18 0%, var(--coal) 70%);
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .rr-hero-tag { font-family:'Courier New',monospace; font-size:10px; letter-spacing:0.3em;
    text-transform:uppercase; color:var(--gold); margin-bottom:10px; opacity:0.8; }
  .rr-hero h1 { font-size:clamp(28px,5vw,52px); font-weight:700; color:var(--steam); line-height:1; margin-bottom:10px; }
  .rr-hero h1 em { font-style:italic; color:var(--ember); }
  .rr-hero p { font-size:14px; color:var(--smoke); max-width:520px; margin:0 auto; line-height:1.7; }

  .rr-wrap { max-width:1100px; margin:0 auto; padding:40px 20px 80px; }

  .rr-grid-2 { display:grid; grid-template-columns:1fr 1fr; gap:20px; }
  @media(max-width:800px){ .rr-grid-2{ grid-template-columns:1fr; } }

  .rr-card {
    background:var(--iron); border:1px solid rgba(255,255,255,0.07);
    border-radius:12px; padding:24px; border-top:3px solid var(--rust);
  }
  .rr-card-title {
    font-family:'Courier New',monospace; font-size:10px; letter-spacing:0.2em;
    text-transform:uppercase; color:var(--gold); margin-bottom:16px;
    padding-bottom:10px; border-bottom:1px solid rgba(255,255,255,0.07);
    display:flex; align-items:center; gap:8px;
  }

  /* Chat */
  .chat-window {
    background:var(--iron2); border-radius:8px; padding:14px;
    height:320px; overflow-y:auto; margin-bottom:14px;
    border:1px solid rgba(255,255,255,0.06);
    display:flex; flex-direction:column; gap:10px;
  }
  .chat-message { padding:10px 14px; border-radius:8px; font-size:13px; line-height:1.6; max-width:88%; }
  .chat-message.assistant {
    background:rgba(185,74,28,0.15); border:1px solid rgba(185,74,28,0.25);
    color:var(--steam); align-self:flex-start;
  }
  .chat-message.user {
    background:rgba(201,148,58,0.15); border:1px solid rgba(201,148,58,0.25);
    color:var(--steam); align-self:flex-end; text-align:right;
  }
  .rr-label { font-family:'Courier New',monospace; font-size:10px; letter-spacing:0.1em;
    text-transform:uppercase; color:var(--smoke); margin-bottom:6px; display:block; }
  .rr-textarea {
    width:100%; padding:10px 14px; background:var(--iron2);
    border:1px solid rgba(255,255,255,0.1); border-radius:6px;
    color:var(--steam); font-family:'Georgia',serif; font-size:13px;
    resize:vertical; margin-bottom:10px; transition:border-color 0.2s;
  }
  .rr-textarea:focus { outline:none; border-color:var(--gold); }
  .rr-btn-row { display:flex; gap:8px; }
  .rr-btn {
    padding:10px 20px; border:none; border-radius:6px; cursor:pointer;
    font-family:'Courier New',monospace; font-size:11px; letter-spacing:0.1em;
    text-transform:uppercase; transition:all 0.2s;
  }
  .rr-btn-primary { background:var(--rust); color:#fff; }
  .rr-btn-primary:hover { background:var(--ember); transform:translateY(-1px); }
  .rr-btn-secondary { background:var(--iron2); color:var(--smoke); border:1px solid rgba(255,255,255,0.1); }
  .rr-btn-secondary:hover { color:var(--steam); border-color:var(--gold); }

  /* Insights table */
  .rr-table { width:100%; border-collapse:collapse; font-size:13px; }
  .rr-table th {
    font-family:'Courier New',monospace; font-size:9px; letter-spacing:0.15em;
    text-transform:uppercase; color:var(--gold); padding:10px 12px;
    border-bottom:2px solid rgba(255,255,255,0.1); text-align:left;
  }
  .rr-table td { padding:10px 12px; color:var(--smoke); border-bottom:1px solid rgba(255,255,255,0.05); }
  .rr-table tr:hover td { background:rgba(255,255,255,0.03); color:var(--steam); }
  .rr-note { font-size:11px; color:var(--smoke); margin-bottom:12px; font-family:'Courier New',monospace; }
</style>

<div class="rr-hero">
  <div class="rr-hero-tag">AI Powered · Poway–Midland Railroad</div>
  <h1>Visitor <em>Assistant</em></h1>
  <p>Ask for visit recommendations, plan your trip, or explore engagement insights.</p>
</div>

<div class="rr-wrap">
  <div class="rr-grid-2">

    <div class="rr-card">
      <div class="rr-card-title">🤖 Visitor Assistant</div>
      <div class="chat-window" id="chatWindow"></div>
      <label class="rr-label" for="aiInput">Ask for a recommendation</label>
      <textarea class="rr-textarea" id="aiInput" rows="3" placeholder="e.g. Suggest a 45-minute family visit plan"></textarea>
      <div class="rr-btn-row">
        <button class="rr-btn rr-btn-primary" id="sendBtn">🚂 Get Recommendation</button>
        <button class="rr-btn rr-btn-secondary" id="clearBtn">Clear</button>
      </div>
    </div>

    <div class="rr-card">
      <div class="rr-card-title">📊 Engagement Insights</div>
      <p class="rr-note">Prototype metrics showing visitor interaction patterns.</p>
      <table class="rr-table">
        <thead>
          <tr><th>Feature</th><th>Usage</th><th>Insight</th></tr>
        </thead>
        <tbody id="insightTable"></tbody>
      </table>
    </div>

  </div>
</div>

<script>
const insights = [
  { feature:"Panorama Viewer", usage:"78%", insight:"Highest interaction on mobile after hero scroll" },
  { feature:"Route Map",       usage:"64%", insight:"Users click turnaround marker to understand route" },
  { feature:"History Timeline",usage:"57%", insight:"Timeline cards help retention in presentation mode" },
  { feature:"AI Assistant",    usage:"49%", insight:"Most prompts request family plans and visit duration" }
];

const chatWindow = document.getElementById('chatWindow');
const aiInput    = document.getElementById('aiInput');

function addMsg(role, text) {
  const d = document.createElement('div');
  d.className = `chat-message ${role}`;
  d.textContent = text;
  chatWindow.appendChild(d);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function getReply(p) {
  const lp = p.toLowerCase();
  if (lp.includes('family')||lp.includes('kids'))
    return 'Recommendation: Start with the route map, ride the steam train before noon, then finish with the history timeline for a perfect 45-minute family visit.';
  if (lp.includes('history')||lp.includes('learn'))
    return 'Recommendation: Begin with hotspots 1 and 2, then open the 1995 and 1996 timeline cards for a focused history walkthrough.';
  if (lp.includes('volunteer')||lp.includes('help'))
    return "Recommendation: Use the contact form with subject 'Volunteer Opportunities' and mention your preferred weekend availability.";
  return 'Recommendation: Explore panoramas first, then route map markers, and finish with announcements to check upcoming events.';
}

document.getElementById('sendBtn').addEventListener('click', () => {
  const p = aiInput.value.trim();
  if (!p) return;
  addMsg('user', p);
  addMsg('assistant', getReply(p));
  aiInput.value = '';
});

document.getElementById('clearBtn').addEventListener('click', () => {
  chatWindow.innerHTML = '';
  addMsg('assistant', 'Chat reset. Ask a new question to get recommendations.');
});

// Insights table
const tbody = document.getElementById('insightTable');
insights.forEach(r => {
  const tr = document.createElement('tr');
  tr.innerHTML = `<td>${r.feature}</td><td style="color:var(--gold);font-family:'Courier New',monospace;">${r.usage}</td><td>${r.insight}</td>`;
  tbody.appendChild(tr);
});

addMsg('assistant', 'Hello! Ask for visit ideas, family plans, or volunteer recommendations. 🚂');
</script>
