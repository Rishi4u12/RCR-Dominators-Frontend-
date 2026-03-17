---
layout: base
title: Visitor Forecast
permalink: /railroad/forecast
---

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Mono:wght@400;500&family=Source+Serif+4:wght@300;400;600&display=swap" rel="stylesheet">

<style>
  :root {
    --coal:  #1a1410; --iron:  #2e2620; --iron2: #3a2e28;
    --rust:  #b94a1c; --ember: #e8621a; --gold:  #c9943a;
    --steam: #e8e0d0; --smoke: #8c7f6e; --green: #2d6a4f;
  }
  *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
  .vc-page { background:var(--coal); min-height:100vh; font-family:'Source Serif 4',Georgia,serif; color:var(--steam); }

  /* Hero */
  .vc-hero { position:relative; padding:60px 24px 48px; text-align:center;
    background:linear-gradient(180deg,#2a1a0e 0%,var(--coal) 100%); overflow:hidden; }
  .vc-hero-icon { font-size:64px; display:block; margin-bottom:14px;
    animation:vc-bounce 2s ease-in-out infinite; }
  @keyframes vc-bounce { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-8px);} }
  .vc-hero-tag { font-family:'DM Mono',monospace; font-size:10px; letter-spacing:0.3em;
    text-transform:uppercase; color:var(--gold); margin-bottom:12px; opacity:0.8; }
  .vc-hero-title { font-family:'Playfair Display',serif; font-size:clamp(30px,6vw,64px);
    font-weight:900; line-height:1; margin-bottom:8px; }
  .vc-hero-title em { font-style:italic; color:var(--ember); }
  .vc-hero-sub { font-size:14px; color:var(--smoke); max-width:480px; margin:10px auto 0;
    line-height:1.7; font-weight:300; }

  /* Layout */
  .vc-wrap { max-width:960px; margin:0 auto; padding:36px 20px 80px; }
  .vc-cols { display:grid; grid-template-columns:1fr 1fr; gap:24px; }
  @media(max-width:700px){ .vc-cols{grid-template-columns:1fr;} }

  /* Card */
  .vc-card { background:var(--iron); border:1px solid rgba(255,255,255,0.07);
    border-radius:12px; padding:26px; }
  .vc-card-title { font-family:'Playfair Display',serif; font-size:17px; font-weight:700;
    color:var(--gold); margin-bottom:18px; padding-bottom:12px;
    border-bottom:1px solid rgba(255,255,255,0.08); }

  /* Fields */
  .vc-field { margin-bottom:15px; }
  .vc-field label { display:block; font-family:'DM Mono',monospace; font-size:10px;
    letter-spacing:0.15em; text-transform:uppercase; color:var(--smoke); margin-bottom:6px; }
  .vc-field select, .vc-field input { width:100%; padding:10px 14px;
    background:var(--iron2); border:1px solid rgba(255,255,255,0.1); border-radius:6px;
    color:var(--steam); font-family:'Source Serif 4',serif; font-size:14px;
    transition:border-color 0.2s; }
  .vc-field select:focus, .vc-field input:focus { outline:none; border-color:var(--gold);
    box-shadow:0 0 0 3px rgba(201,148,58,0.15); }
  .vc-field select option { background:var(--iron2); }

  /* Toggle group */
  .vc-toggle { display:flex; gap:8px; }
  .vc-toggle-btn { flex:1; display:flex; align-items:center; justify-content:center; gap:6px;
    padding:9px; border-radius:6px; border:1px solid rgba(255,255,255,0.1);
    background:var(--iron2); cursor:pointer; font-size:13px; color:var(--smoke);
    transition:all 0.2s; }
  .vc-toggle-btn:has(input:checked) { border-color:var(--gold); color:var(--gold);
    background:rgba(201,148,58,0.12); }
  .vc-toggle-btn input { display:none; }

  /* Weather grid */
  .vc-weather { display:grid; grid-template-columns:repeat(4,1fr); gap:8px; }
  .vc-weather-btn { display:flex; flex-direction:column; align-items:center; gap:4px;
    padding:10px 6px; border-radius:8px; border:1px solid rgba(255,255,255,0.1);
    background:var(--iron2); cursor:pointer; font-family:'DM Mono',monospace; font-size:9px;
    letter-spacing:0.08em; text-transform:uppercase; color:var(--smoke); transition:all 0.2s; }
  .vc-weather-btn:has(input:checked) { border-color:var(--gold); color:var(--gold);
    background:rgba(201,148,58,0.12); }
  .vc-weather-btn input { display:none; }
  .vc-wi { font-size:22px; }

  /* Predict button */
  .vc-btn { width:100%; padding:14px; margin-top:6px;
    background:linear-gradient(135deg,var(--rust),var(--ember));
    border:none; border-radius:8px; color:#fff; font-family:'DM Mono',monospace;
    font-size:13px; letter-spacing:0.1em; text-transform:uppercase;
    cursor:pointer; transition:all 0.2s; }
  .vc-btn:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(185,74,28,0.4); }
  .vc-btn:disabled { opacity:0.5; cursor:not-allowed; transform:none; }

  /* Result */
  .vc-result { display:none; }
  .vc-result.show { display:block; animation:vc-fade 0.5s ease; }
  @keyframes vc-fade { from{opacity:0;transform:translateY(12px);} to{opacity:1;transform:none;} }

  /* Big number */
  .vc-big { background:linear-gradient(135deg,rgba(185,74,28,0.2),rgba(185,74,28,0.05));
    border:1px solid rgba(185,74,28,0.3); border-radius:12px; padding:28px;
    text-align:center; margin-bottom:16px; }
  .vc-big-num { font-family:'Playfair Display',serif; font-size:clamp(52px,10vw,80px);
    font-weight:900; color:var(--ember); line-height:1; }
  .vc-big-label { font-family:'DM Mono',monospace; font-size:10px; letter-spacing:0.2em;
    text-transform:uppercase; color:var(--smoke); margin-top:6px; }
  .vc-big-sub { font-size:13px; color:var(--smoke); margin-top:10px; line-height:1.5; }

  /* Occupancy bar */
  .vc-occ { background:var(--iron2); border-radius:8px; padding:16px; margin-bottom:16px;
    border:1px solid rgba(255,255,255,0.07); }
  .vc-occ-header { display:flex; justify-content:space-between; align-items:center;
    margin-bottom:10px; }
  .vc-occ-label { font-family:'DM Mono',monospace; font-size:10px; letter-spacing:0.15em;
    text-transform:uppercase; color:var(--smoke); }
  .vc-occ-pct { font-family:'Playfair Display',serif; font-size:22px; font-weight:700; }
  .vc-occ-bar-wrap { height:10px; background:rgba(255,255,255,0.08); border-radius:5px; overflow:hidden; }
  .vc-occ-bar { height:100%; border-radius:5px; transition:width 1s cubic-bezier(0.4,0,0.2,1); }

  /* Tips */
  .vc-tip { background:rgba(45,106,79,0.15); border:1px solid rgba(76,175,130,0.3);
    border-radius:8px; padding:14px 16px; margin-bottom:16px; font-size:13px;
    color:#a7f3d0; line-height:1.6; }
  .vc-tip strong { color:#4caf82; }

  /* Feature weights */
  .vc-weights-title { font-family:'DM Mono',monospace; font-size:10px; letter-spacing:0.2em;
    text-transform:uppercase; color:var(--gold); margin-bottom:12px;
    display:flex; align-items:center; gap:8px; }
  .vc-weights-title::after { content:''; flex:1; height:1px; background:rgba(255,255,255,0.08); }
  .vc-wrow { display:flex; align-items:center; gap:10px; margin-bottom:7px; }
  .vc-wname { font-family:'DM Mono',monospace; font-size:10px; color:var(--smoke);
    width:110px; flex-shrink:0; text-transform:uppercase; letter-spacing:0.05em; }
  .vc-wbar-wrap { flex:1; height:8px; background:rgba(255,255,255,0.06); border-radius:4px; overflow:hidden; }
  .vc-wbar { height:100%; border-radius:4px; background:var(--gold); opacity:0.7;
    transition:width 1s cubic-bezier(0.4,0,0.2,1); }
  .vc-wpct { font-family:'DM Mono',monospace; font-size:10px; color:var(--gold);
    width:36px; text-align:right; flex-shrink:0; }

  /* Error */
  .vc-error { display:none; margin-top:12px; padding:12px 16px;
    background:rgba(127,29,29,0.3); border:1px solid rgba(185,74,28,0.4);
    border-radius:8px; font-size:13px; color:#fca5a5; }

  /* Info */
  .vc-info { background:var(--iron); border:1px solid rgba(255,255,255,0.07);
    border-left:4px solid var(--rust); border-radius:12px; padding:18px; margin-bottom:22px; }
  .vc-info-title { font-family:'DM Mono',monospace; font-size:10px; letter-spacing:0.2em;
    text-transform:uppercase; color:var(--gold); margin-bottom:7px; }
  .vc-info-text { font-size:13px; color:var(--smoke); line-height:1.7; font-weight:300; }
  .vc-info-text strong { color:var(--steam); }
</style>

<div class="vc-page">
  <div class="vc-hero">
    <span class="vc-hero-icon">📊</span>
    <div class="vc-hero-tag">Machine Learning · Poway–Midland Railroad</div>
    <h1 class="vc-hero-title">Visitor<br><em>Forecast</em></h1>
    <p class="vc-hero-sub">Pick a date and conditions — our ML model predicts how many visitors the Poway–Midland Railroad will see that day.</p>
  </div>

  <div class="vc-wrap">
    <div class="vc-info">
      <div class="vc-info-title">🤖 How It Works</div>
      <div class="vc-info-text">
        This predictor uses <strong>Gradient Boosting</strong> (R² = 0.93) trained on 277 PMRR operating days from 2023–2025. It learns from <strong>month, weather, train type, holidays,</strong> and <strong>ride schedule</strong> to estimate expected visitor turnout.
      </div>
    </div>

    <div class="vc-cols">

      <!-- Form -->
      <div class="vc-card">
        <div class="vc-card-title">🗓 Predict a Day</div>

        <div class="vc-field">
          <label>Month</label>
          <select id="vcMonth">
            <option value="1">January</option><option value="2">February</option>
            <option value="3">March</option><option value="4">April</option>
            <option value="5">May</option><option value="6">June</option>
            <option value="7">July</option><option value="8">August</option>
            <option value="9">September</option><option value="10">October</option>
            <option value="11">November</option><option value="12">December</option>
          </select>
        </div>

        <div class="vc-field">
          <label>Day Type</label>
          <div class="vc-toggle">
            <label class="vc-toggle-btn">
              <input type="radio" name="vcDay" value="saturday" checked> 🚂 Saturday (Steam)
            </label>
            <label class="vc-toggle-btn">
              <input type="radio" name="vcDay" value="sunday"> 🚌 Sunday (Cable/Speeder)
            </label>
          </div>
        </div>

        <div class="vc-field" id="vcTrainField">
          <label>Train Type (Sunday)</label>
          <div class="vc-toggle">
            <label class="vc-toggle-btn">
              <input type="radio" name="vcTrain" value="cable" checked> 🚌 Cable Car
            </label>
            <label class="vc-toggle-btn">
              <input type="radio" name="vcTrain" value="speeder"> 🚃 Speeder
            </label>
          </div>
        </div>

        <div class="vc-field">
          <label>Is it a Holiday?</label>
          <div class="vc-toggle">
            <label class="vc-toggle-btn">
              <input type="radio" name="vcHoliday" value="false" checked> 📅 Regular Day
            </label>
            <label class="vc-toggle-btn">
              <input type="radio" name="vcHoliday" value="true"> 🎉 Holiday
            </label>
          </div>
        </div>

        <div class="vc-field">
          <label>Weather</label>
          <div class="vc-weather">
            <label class="vc-weather-btn">
              <input type="radio" name="vcWeather" value="sunny" checked>
              <span class="vc-wi">☀️</span>Sunny
            </label>
            <label class="vc-weather-btn">
              <input type="radio" name="vcWeather" value="cloudy">
              <span class="vc-wi">⛅</span>Cloudy
            </label>
            <label class="vc-weather-btn">
              <input type="radio" name="vcWeather" value="rainy">
              <span class="vc-wi">🌧️</span>Rainy
            </label>
            <label class="vc-weather-btn">
              <input type="radio" name="vcWeather" value="windy">
              <span class="vc-wi">💨</span>Windy
            </label>
          </div>
        </div>

        <button class="vc-btn" id="vcBtn" onclick="vcPredict()">
          📈 Forecast Visitors
        </button>
        <div class="vc-error" id="vcError"></div>
      </div>

      <!-- Result -->
      <div>
        <div class="vc-result" id="vcResult">

          <div class="vc-big">
            <div class="vc-big-num" id="vcNum">—</div>
            <div class="vc-big-label">Predicted Visitors</div>
            <div class="vc-big-sub" id="vcBigSub"></div>
          </div>

          <div class="vc-occ">
            <div class="vc-occ-header">
              <div class="vc-occ-label">Estimated Occupancy</div>
              <div class="vc-occ-pct" id="vcOccPct" style="color:var(--ember)">—</div>
            </div>
            <div class="vc-occ-bar-wrap">
              <div class="vc-occ-bar" id="vcOccBar" style="width:0%"></div>
            </div>
          </div>

          <div class="vc-tip" id="vcTip"></div>

          <div class="vc-card">
            <div class="vc-weights-title">What Drives Predictions</div>
            <div id="vcWeights"></div>
          </div>

        </div>

        <!-- Placeholder -->
        <div class="vc-card" id="vcPlaceholder" style="text-align:center;padding:60px 28px;">
          <div style="font-size:48px;margin-bottom:16px;">🚉</div>
          <div style="font-family:'Playfair Display',serif;font-size:18px;color:var(--steam);margin-bottom:10px;">Awaiting your input</div>
          <div style="font-size:13px;color:var(--smoke);line-height:1.7;">Select conditions and click <em>Forecast Visitors</em> to see the ML prediction.</div>
        </div>
      </div>

    </div>
  </div>
</div>

<script>
  const BACKEND = 'http://localhost:8587';

  const FEATURE_NAMES = {
    is_saturday:    'Saturday',
    weather_sunny:  'Sunny Weather',
    rides:          'No. of Rides',
    capacity:       'Capacity',
    train_steam:    'Steam Loco',
    month:          'Month',
    weather_rainy:  'Rainy Weather',
    weather_cloudy: 'Cloudy Weather',
    weather_windy:  'Windy Weather',
    train_cable:    'Cable Car',
    train_speeder:  'Speeder',
    is_holiday:     'Holiday',
  };

  // Show/hide train type selector based on day
  document.querySelectorAll('input[name="vcDay"]').forEach(r => {
    r.addEventListener('change', () => {
      const isSat = r.value === 'saturday';
      document.getElementById('vcTrainField').style.display = isSat ? 'none' : 'block';
    });
  });
  document.getElementById('vcTrainField').style.display = 'none'; // default Saturday

  async function vcPredict() {
    const btn     = document.getElementById('vcBtn');
    const errorEl = document.getElementById('vcError');
    errorEl.style.display = 'none';

    const month      = parseInt(document.getElementById('vcMonth').value);
    const isSaturday = document.querySelector('input[name="vcDay"]:checked').value === 'saturday';
    const isHoliday  = document.querySelector('input[name="vcHoliday"]:checked').value === 'true';
    const weather    = document.querySelector('input[name="vcWeather"]:checked').value;
    const trainType  = isSaturday ? 'steam' : document.querySelector('input[name="vcTrain"]:checked').value;

    btn.disabled    = true;
    btn.textContent = '⏳ Forecasting...';

    try {
      const res = await fetch(`${BACKEND}/api/visitor/predict`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ month, is_saturday: isSaturday, is_holiday: isHoliday, weather, train_type: trainType })
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      showResult(data, isSaturday, weather, isHoliday);
    } catch (err) {
      errorEl.textContent   = '⚠️ Could not reach backend. Make sure the server is running on localhost:8587.';
      errorEl.style.display = 'block';
    } finally {
      btn.disabled    = false;
      btn.textContent = '📈 Forecast Visitors';
    }
  }

  function showResult(data, isSaturday, weather, isHoliday) {
    const visitors   = data.predicted_visitors;
    const capacity   = data.capacity;
    const occPct     = data.occupancy_pct;
    const weights    = data.feature_weights;

    document.getElementById('vcNum').textContent    = visitors.toLocaleString();
    document.getElementById('vcBigSub').textContent =
      `out of ${capacity.toLocaleString()} total capacity across all rides`;

    // Occupancy bar color
    const barColor = occPct >= 70 ? '#ef4444' : occPct >= 45 ? '#f59e0b' : '#4caf82';
    document.getElementById('vcOccPct').textContent  = occPct + '%';
    document.getElementById('vcOccPct').style.color  = barColor;
    document.getElementById('vcOccBar').style.background = barColor;
    setTimeout(() => {
      document.getElementById('vcOccBar').style.width = Math.min(occPct, 100) + '%';
    }, 50);

    // Tip
    let tip = '';
    if (occPct >= 70)      tip = `<strong>🔥 Very Busy Day!</strong> Expect long lines — arrive early and consider booking in advance.`;
    else if (occPct >= 45) tip = `<strong>👍 Moderate Crowd.</strong> A typical weekend. Rides should be accessible without too long a wait.`;
    else                   tip = `<strong>✅ Quiet Day.</strong> ${weather === 'rainy' ? 'Rain keeps crowds away — ' : isHoliday ? '' : 'Great time for a relaxed visit. '}Plenty of room on every ride.`;
    document.getElementById('vcTip').innerHTML = tip;

    // Feature weights
    if (weights) {
      const sorted = Object.entries(weights).sort((a,b) => b[1]-a[1]).slice(0,8);
      const max    = sorted[0]?.[1] || 1;
      document.getElementById('vcWeights').innerHTML = sorted.map(([f, imp]) => `
        <div class="vc-wrow">
          <div class="vc-wname">${FEATURE_NAMES[f] || f}</div>
          <div class="vc-wbar-wrap"><div class="vc-wbar" style="width:${Math.round(imp/max*100)}%"></div></div>
          <div class="vc-wpct">${Math.round(imp*100)}%</div>
        </div>`).join('');
    }

    document.getElementById('vcPlaceholder').style.display = 'none';
    document.getElementById('vcResult').classList.add('show');
  }
</script>