---
layout: base
title: Railroad Safety Predictor
permalink: /railroad/titanic
---

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Mono:wght@400;500&family=Source+Serif+4:wght@300;400;600&display=swap" rel="stylesheet">

<style>
  :root {
    --coal:    #1a1410;
    --iron:    #2e2620;
    --iron2:   #3a2e28;
    --rust:    #b94a1c;
    --ember:   #e8621a;
    --gold:    #c9943a;
    --steam:   #e8e0d0;
    --smoke:   #8c7f6e;
    --survive: #2d6a4f;
    --danger:  #7f1d1d;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .rr-page {
    background: var(--coal);
    min-height: 100vh;
    font-family: 'Source Serif 4', Georgia, serif;
    color: var(--steam);
  }

  /* ── Hero ── */
  .rr-hero {
    position: relative;
    padding: 60px 24px 48px;
    text-align: center;
    background: linear-gradient(180deg, #2a1a0e 0%, var(--coal) 100%);
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
      90deg, #4a3f35 0px, #4a3f35 30px, transparent 30px, transparent 50px
    );
    opacity: 0.4;
  }
  .rr-hero-icon {
    font-size: 72px; display: block; margin-bottom: 16px;
    animation: rr-chug 2s ease-in-out infinite;
  }
  @keyframes rr-chug {
    0%,100% { transform: translateX(0) rotate(-1deg); }
    25%      { transform: translateX(3px) rotate(0.5deg); }
    75%      { transform: translateX(-3px) rotate(-0.5deg); }
  }
  .rr-hero-tag {
    font-family: 'DM Mono', monospace; font-size: 10px;
    letter-spacing: 0.3em; text-transform: uppercase;
    color: var(--gold); margin-bottom: 14px; opacity: 0.8;
  }
  .rr-hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(32px, 7vw, 68px); font-weight: 900;
    color: var(--steam); line-height: 1; margin-bottom: 8px;
  }
  .rr-hero-title em { font-style: italic; color: var(--ember); }
  .rr-hero-sub {
    font-size: 15px; color: var(--smoke); max-width: 500px;
    margin: 12px auto 0; line-height: 1.7; font-weight: 300;
  }

  /* ── Layout ── */
  .rr-wrap { max-width: 960px; margin: 0 auto; padding: 40px 20px 80px; }
  .rr-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  @media (max-width: 700px) { .rr-cols { grid-template-columns: 1fr; } }

  /* ── Card ── */
  .rr-card {
    background: var(--iron);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 12px; padding: 28px;
  }
  .rr-card-title {
    font-family: 'Playfair Display', serif;
    font-size: 18px; font-weight: 700; color: var(--gold);
    margin-bottom: 20px; padding-bottom: 12px;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    display: flex; align-items: center; gap: 10px;
  }

  /* ── Form fields ── */
  .rr-field { margin-bottom: 16px; }
  .rr-field label {
    display: block; font-family: 'DM Mono', monospace;
    font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--smoke); margin-bottom: 6px;
  }
  .rr-field input, .rr-field select {
    width: 100%; padding: 10px 14px;
    background: var(--iron2); border: 1px solid rgba(255,255,255,0.1);
    border-radius: 6px; color: var(--steam);
    font-family: 'Source Serif 4', serif; font-size: 14px;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .rr-field input:focus, .rr-field select:focus {
    outline: none; border-color: var(--gold);
    box-shadow: 0 0 0 3px rgba(201,148,58,0.15);
  }
  .rr-field select option { background: var(--iron2); }
  .rr-field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

  /* Radio group */
  .rr-radio-group { display: flex; gap: 8px; flex-wrap: wrap; }
  .rr-radio-label {
    flex: 1; min-width: 80px;
    display: flex; align-items: center; justify-content: center; gap: 6px;
    padding: 9px 12px; border-radius: 6px;
    border: 1px solid rgba(255,255,255,0.1);
    background: var(--iron2); cursor: pointer;
    font-size: 13px; color: var(--smoke); transition: all 0.2s;
    white-space: nowrap;
  }
  .rr-radio-label:has(input:checked) {
    border-color: var(--gold); color: var(--gold);
    background: rgba(201,148,58,0.12);
  }
  .rr-radio-label input { display: none; }

  /* Weather selector */
  .rr-weather-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 8px; }
  .rr-weather-btn {
    display: flex; flex-direction: column; align-items: center; gap: 4px;
    padding: 10px 6px; border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.1);
    background: var(--iron2); cursor: pointer;
    font-family: 'DM Mono', monospace; font-size: 9px;
    letter-spacing: 0.08em; text-transform: uppercase;
    color: var(--smoke); transition: all 0.2s;
  }
  .rr-weather-btn:has(input:checked) {
    border-color: var(--gold); color: var(--gold);
    background: rgba(201,148,58,0.12);
  }
  .rr-weather-btn input { display: none; }
  .rr-weather-icon { font-size: 22px; }

  /* Predict button */
  .rr-predict-btn {
    width: 100%; padding: 15px; margin-top: 8px;
    background: linear-gradient(135deg, var(--rust), var(--ember));
    border: none; border-radius: 8px;
    color: #fff; font-family: 'DM Mono', monospace;
    font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase;
    cursor: pointer; transition: all 0.2s;
  }
  .rr-predict-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(185,74,28,0.4); }
  .rr-predict-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

  /* ── Result ── */
  .rr-result { display: none; margin-top: 0; }
  .rr-result.show { display: block; animation: rr-fadein 0.5s ease; }
  @keyframes rr-fadein { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:none; } }

  .rr-verdict {
    border-radius: 12px; padding: 28px;
    text-align: center; margin-bottom: 16px;
  }
  .rr-verdict.safe {
    background: linear-gradient(135deg, rgba(45,106,79,0.3), rgba(45,106,79,0.1));
    border: 1px solid rgba(76,175,130,0.4);
  }
  .rr-verdict.unsafe {
    background: linear-gradient(135deg, rgba(185,74,28,0.3), rgba(185,74,28,0.1));
    border: 1px solid rgba(185,74,28,0.4);
  }
  .rr-verdict-icon { font-size: 52px; display: block; margin-bottom: 12px; }
  .rr-verdict-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(20px, 4vw, 30px); font-weight: 900; margin-bottom: 8px;
  }
  .rr-verdict.safe   .rr-verdict-title { color: #4caf82; }
  .rr-verdict.unsafe .rr-verdict-title { color: #fb923c; }
  .rr-verdict-sub { font-size: 13px; color: var(--smoke); line-height: 1.6; }
  .rr-weather-note {
    font-family: 'DM Mono', monospace; font-size: 10px;
    letter-spacing: 0.1em; color: var(--gold);
    margin-top: 8px; opacity: 0.8;
  }

  /* Probability bars */
  .rr-probs { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px; }
  .rr-prob-box {
    background: var(--iron2); border-radius: 8px; padding: 16px;
    text-align: center; border: 1px solid rgba(255,255,255,0.07);
  }
  .rr-prob-label {
    font-family: 'DM Mono', monospace; font-size: 9px;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--smoke); margin-bottom: 8px;
  }
  .rr-prob-pct {
    font-family: 'Playfair Display', serif;
    font-size: 36px; font-weight: 900; line-height: 1;
  }
  .rr-prob-pct.safe   { color: #4caf82; }
  .rr-prob-pct.unsafe { color: #fb923c; }
  .rr-prob-bar-wrap {
    height: 6px; background: rgba(255,255,255,0.08);
    border-radius: 3px; overflow: hidden; margin-top: 10px;
  }
  .rr-prob-bar { height: 100%; border-radius: 3px; transition: width 1s cubic-bezier(0.4,0,0.2,1); }
  .rr-prob-bar.safe   { background: #4caf82; }
  .rr-prob-bar.unsafe { background: #fb923c; }

  /* Feature weights */
  .rr-weights-title {
    font-family: 'DM Mono', monospace; font-size: 10px;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--gold); margin-bottom: 14px;
    display: flex; align-items: center; gap: 8px;
  }
  .rr-weights-title::after { content:''; flex:1; height:1px; background:rgba(255,255,255,0.08); }
  .rr-weight-row { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
  .rr-weight-name {
    font-family: 'DM Mono', monospace; font-size: 10px;
    color: var(--smoke); width: 110px; flex-shrink: 0;
    text-transform: uppercase; letter-spacing: 0.06em;
  }
  .rr-weight-bar-wrap {
    flex: 1; height: 8px; background: rgba(255,255,255,0.06);
    border-radius: 4px; overflow: hidden;
  }
  .rr-weight-bar {
    height: 100%; border-radius: 4px; background: var(--gold);
    transition: width 1s cubic-bezier(0.4,0,0.2,1); opacity: 0.7;
  }
  .rr-weight-pct {
    font-family: 'DM Mono', monospace; font-size: 10px;
    color: var(--gold); width: 36px; text-align: right; flex-shrink: 0;
  }

  /* Info box */
  .rr-info {
    background: var(--iron); border: 1px solid rgba(255,255,255,0.07);
    border-radius: 12px; padding: 20px; margin-bottom: 24px;
    border-left: 4px solid var(--rust);
  }
  .rr-info-title {
    font-family: 'DM Mono', monospace; font-size: 10px;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--gold); margin-bottom: 8px;
  }
  .rr-info-text { font-size: 13px; color: var(--smoke); line-height: 1.7; font-weight: 300; }
  .rr-info-text strong { color: var(--steam); }

  .rr-error {
    display: none; margin-top: 12px; padding: 12px 16px;
    background: rgba(127,29,29,0.3); border: 1px solid rgba(185,74,28,0.4);
    border-radius: 8px; font-size: 13px; color: #fca5a5;
  }
</style>

<div class="rr-page">

  <div class="rr-hero">
    <div class="rr-hero-track"></div>
    <span class="rr-hero-icon">🚂</span>
    <div class="rr-hero-tag">Machine Learning · Poway–Midland Railroad</div>
    <h1 class="rr-hero-title">Would Your Ride Be<br><em>Safe?</em></h1>
    <p class="rr-hero-sub">Enter your details. Our ML model will predict how safe your Poway–Midland Railroad ride would be — factoring in weather, age, and more.</p>
  </div>

  <div class="rr-wrap">

    <div class="rr-info">
      <div class="rr-info-title">🤖 How It Works</div>
      <div class="rr-info-text">
        This predictor uses <strong>Logistic Regression</strong> trained on historical passenger safety data. A <strong>Decision Tree</strong> reveals which factors matter most. Weather conditions apply an additional adjustment to reflect real-world conditions on our outdoor track.
      </div>
    </div>

    <div class="rr-cols">

      <!-- Form -->
      <div class="rr-card">
        <div class="rr-card-title">🎟 Your Ride Profile</div>

        <div class="rr-field">
          <label>Your Name</label>
          <input type="text" id="rrName" placeholder="e.g. Jane Smith">
        </div>

        <div class="rr-field">
          <label>Gender</label>
          <div class="rr-radio-group">
            <label class="rr-radio-label">
              <input type="radio" name="rrSex" value="male"> 👨 Male
            </label>
            <label class="rr-radio-label">
              <input type="radio" name="rrSex" value="female" checked> 👩 Female
            </label>
          </div>
        </div>

        <div class="rr-field-row">
          <div class="rr-field">
            <label>Age</label>
            <input type="number" id="rrAge" min="1" max="100" value="25">
          </div>
          <div class="rr-field">
            <label>Times Ridden Before</label>
            <select id="rrPclass">
              <option value="1">Many times 🌟</option>
              <option value="2" selected>A few times</option>
              <option value="3">First time 🎉</option>
            </select>
          </div>
        </div>

        <div class="rr-field-row">
          <div class="rr-field">
            <label>Family Members Along</label>
            <input type="number" id="rrSibsp" min="0" max="10" value="0" placeholder="0">
          </div>
          <div class="rr-field">
            <label>Children Along</label>
            <input type="number" id="rrParch" min="0" max="10" value="0" placeholder="0">
          </div>
        </div>

        <div class="rr-field">
          <label>Riding Alone?</label>
          <div class="rr-radio-group">
            <label class="rr-radio-label">
              <input type="radio" name="rrAlone" value="true"> 🧍 Alone
            </label>
            <label class="rr-radio-label">
              <input type="radio" name="rrAlone" value="false" checked> 👨‍👩‍👧 With Others
            </label>
          </div>
        </div>

        <div class="rr-field">
          <label>Today's Weather</label>
          <div class="rr-weather-grid">
            <label class="rr-weather-btn">
              <input type="radio" name="rrWeather" value="sunny" checked>
              <span class="rr-weather-icon">☀️</span>Sunny
            </label>
            <label class="rr-weather-btn">
              <input type="radio" name="rrWeather" value="cloudy">
              <span class="rr-weather-icon">⛅</span>Cloudy
            </label>
            <label class="rr-weather-btn">
              <input type="radio" name="rrWeather" value="rainy">
              <span class="rr-weather-icon">🌧️</span>Rainy
            </label>
            <label class="rr-weather-btn">
              <input type="radio" name="rrWeather" value="stormy">
              <span class="rr-weather-icon">⛈️</span>Stormy
            </label>
          </div>
        </div>

        <button class="rr-predict-btn" id="rrPredictBtn" onclick="rrPredict()">
          🔮 Check My Safety
        </button>
        <div class="rr-error" id="rrError"></div>
      </div>

      <!-- Result -->
      <div>
        <div class="rr-result" id="rrResult">
          <div class="rr-verdict" id="rrVerdict">
            <span class="rr-verdict-icon" id="rrVerdictIcon"></span>
            <div class="rr-verdict-title" id="rrVerdictTitle"></div>
            <div class="rr-verdict-sub"   id="rrVerdictSub"></div>
            <div class="rr-weather-note"  id="rrWeatherNote"></div>
          </div>

          <div class="rr-probs">
            <div class="rr-prob-box">
              <div class="rr-prob-label">Safe Arrival</div>
              <div class="rr-prob-pct safe" id="rrSafePct">0%</div>
              <div class="rr-prob-bar-wrap">
                <div class="rr-prob-bar safe" id="rrSafeBar" style="width:0%"></div>
              </div>
            </div>
            <div class="rr-prob-box">
              <div class="rr-prob-label">Incident Risk</div>
              <div class="rr-prob-pct unsafe" id="rrRiskPct">0%</div>
              <div class="rr-prob-bar-wrap">
                <div class="rr-prob-bar unsafe" id="rrRiskBar" style="width:0%"></div>
              </div>
            </div>
          </div>

          <div class="rr-card">
            <div class="rr-weights-title">What Factors Matter Most</div>
            <div id="rrWeights"></div>
          </div>
        </div>

        <!-- Placeholder -->
        <div class="rr-card" id="rrPlaceholder" style="text-align:center;padding:60px 28px;">
          <div style="font-size:48px;margin-bottom:16px;">🚉</div>
          <div style="font-family:'Playfair Display',serif;font-size:18px;color:var(--steam);margin-bottom:10px;">Your prediction awaits</div>
          <div style="font-size:13px;color:var(--smoke);line-height:1.7;">Fill in your details and click <em>Check My Safety</em> to see your predicted ride outcome.</div>
        </div>
      </div>

    </div>
  </div>
</div>

<script>
  const BACKEND = 'http://localhost:8587';

  // Weather adjustment factors (applied to base survive probability)
  const WEATHER = {
    sunny:  { label: '☀️ Sunny skies — ideal conditions',        delta: +0.05 },
    cloudy: { label: '⛅ Overcast — slightly reduced visibility', delta: +0.01 },
    rainy:  { label: '🌧️ Rainy — wet rails, reduced speed',      delta: -0.05 },
    stormy: { label: '⛈️ Stormy — service may be affected',      delta: -0.10 },
  };

  // Friendly names for feature weights display
  const FEATURE_NAMES = {
    pclass:      'Experience',
    sex:         'Gender',
    age:         'Age',
    sibsp:       'Family',
    parch:       'Children',
    fare:        'Ticket Type',
    alone:       'Solo Rider',
    embarked_C:  'Route C',
    embarked_Q:  'Route Q',
    embarked_S:  'Route S',
  };

  async function rrPredict() {
    const btn     = document.getElementById('rrPredictBtn');
    const errorEl = document.getElementById('rrError');
    errorEl.style.display = 'none';

    const name    = document.getElementById('rrName').value.trim() || 'Rider';
    const sex     = document.querySelector('input[name="rrSex"]:checked')?.value || 'female';
    const age     = parseFloat(document.getElementById('rrAge').value);
    const pclass  = parseInt(document.getElementById('rrPclass').value);
    const sibsp   = parseInt(document.getElementById('rrSibsp').value) || 0;
    const parch   = parseInt(document.getElementById('rrParch').value) || 0;
    const alone   = document.querySelector('input[name="rrAlone"]:checked')?.value === 'true';
    const weather = document.querySelector('input[name="rrWeather"]:checked')?.value || 'sunny';

    if (isNaN(age) || age < 1) {
      showError('Please enter a valid age.'); return;
    }

    btn.disabled    = true;
    btn.textContent = '⏳ Analyzing...';

    try {
      const res = await fetch(`${BACKEND}/api/titanic/predict`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, pclass, sex, age, sibsp, parch,
          fare: 14,        // fixed middle value, not shown to user
          embarked: 'S',   // fixed, not relevant to railroad
          alone
        })
      });

      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();

      // Apply weather adjustment
      const weatherCfg = WEATHER[weather];
      let survive = (data.survive ?? 0) + weatherCfg.delta;
      let die     = 1 - survive;
      // Clamp between 0 and 1
      survive = Math.min(0.99, Math.max(0.01, survive));
      die     = Math.min(0.99, Math.max(0.01, die));

      showResult(name, survive, die, weatherCfg.label, data.feature_weights);

    } catch (err) {
      showError('Could not reach the backend. Make sure the server is running on localhost:8587.');
    } finally {
      btn.disabled    = false;
      btn.innerHTML   = '🔮 Check My Safety';
    }
  }

  function showResult(name, survive, die, weatherNote, weights) {
    const safePct = Math.round(survive * 100);
    const riskPct = Math.round(die * 100);
    const isSafe  = survive >= 0.5;

    // Verdict
    const verdictEl = document.getElementById('rrVerdict');
    verdictEl.className = 'rr-verdict ' + (isSafe ? 'safe' : 'unsafe');
    document.getElementById('rrVerdictIcon').textContent  = isSafe ? '✅' : '⚠️';
    document.getElementById('rrVerdictTitle').textContent = isSafe
      ? `${name}'s Ride Looks Safe!`
      : `${name} — Ride with Caution`;
    document.getElementById('rrVerdictSub').textContent = isSafe
      ? `Our model predicts a smooth, safe journey on the Poway–Midland Railroad. Enjoy the ride!`
      : `Conditions suggest a higher risk today. Our staff always prioritize your safety — stay alert and follow crew instructions.`;
    document.getElementById('rrWeatherNote').textContent = weatherNote;

    // Probabilities
    document.getElementById('rrSafePct').textContent = safePct + '%';
    document.getElementById('rrRiskPct').textContent = riskPct + '%';
    setTimeout(() => {
      document.getElementById('rrSafeBar').style.width = safePct + '%';
      document.getElementById('rrRiskBar').style.width = riskPct + '%';
    }, 50);

    // Feature weights
    if (weights) renderWeights(weights);

    document.getElementById('rrPlaceholder').style.display = 'none';
    document.getElementById('rrResult').classList.add('show');
  }

  function renderWeights(weights) {
    const sorted = Object.entries(weights).sort((a,b) => b[1]-a[1]);
    const max    = sorted[0]?.[1] || 1;
    const html   = sorted.map(([feat, imp]) => {
      const pct  = Math.round(imp * 100);
      const barW = Math.round((imp / max) * 100);
      const name = FEATURE_NAMES[feat] || feat;
      return `
        <div class="rr-weight-row">
          <div class="rr-weight-name">${name}</div>
          <div class="rr-weight-bar-wrap">
            <div class="rr-weight-bar" style="width:${barW}%"></div>
          </div>
          <div class="rr-weight-pct">${pct}%</div>
        </div>`;
    }).join('');
    document.getElementById('rrWeights').innerHTML = html;
  }

  function showError(msg) {
    const el = document.getElementById('rrError');
    el.textContent   = '⚠️ ' + msg;
    el.style.display = 'block';
  }
</script>