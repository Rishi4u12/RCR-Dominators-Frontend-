---
layout: base
title: Titanic Survival Predictor
permalink: /railroad/titanic
---

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Mono:wght@400;500&family=Source+Serif+4:wght@300;400;600&display=swap" rel="stylesheet">

<style>
  :root {
    --coal:    #0f0d0b;
    --iron:    #1e1a16;
    --iron2:   #2a2420;
    --rust:    #b94a1c;
    --ember:   #e8621a;
    --gold:    #c9943a;
    --steam:   #e8e0d0;
    --smoke:   #8c7f6e;
    --ocean:   #1a3a5c;
    --water:   #2563a8;
    --ice:     #a8c8e8;
    --survive: #2d6a4f;
    --die:     #7f1d1d;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .tt-page {
    background: var(--coal);
    min-height: 100vh;
    font-family: 'Source Serif 4', Georgia, serif;
    color: var(--steam);
  }

  /* ── Hero ── */
  .tt-hero {
    position: relative;
    padding: 60px 24px 48px;
    text-align: center;
    background: linear-gradient(180deg, #0a1628 0%, var(--coal) 100%);
    overflow: hidden;
  }
  .tt-hero-stars {
    position: absolute; inset: 0;
    background-image:
      radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.6) 0%, transparent 100%),
      radial-gradient(1px 1px at 80% 10%, rgba(255,255,255,0.4) 0%, transparent 100%),
      radial-gradient(1px 1px at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 100%),
      radial-gradient(1px 1px at 10% 80%, rgba(255,255,255,0.5) 0%, transparent 100%),
      radial-gradient(1px 1px at 70% 70%, rgba(255,255,255,0.4) 0%, transparent 100%),
      radial-gradient(1px 1px at 35% 15%, rgba(255,255,255,0.6) 0%, transparent 100%),
      radial-gradient(1px 1px at 90% 55%, rgba(255,255,255,0.3) 0%, transparent 100%);
    pointer-events: none;
  }
  .tt-hero-ship {
    font-size: 72px;
    display: block;
    margin-bottom: 16px;
    filter: drop-shadow(0 0 30px rgba(168,200,232,0.3));
    animation: tt-float 4s ease-in-out infinite;
  }
  @keyframes tt-float {
    0%, 100% { transform: translateY(0) rotate(-1deg); }
    50%       { transform: translateY(-8px) rotate(1deg); }
  }
  .tt-hero-tag {
    font-family: 'DM Mono', monospace; font-size: 10px;
    letter-spacing: 0.3em; text-transform: uppercase;
    color: var(--ice); margin-bottom: 14px; opacity: 0.7;
  }
  .tt-hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(32px, 7vw, 72px); font-weight: 900;
    color: var(--steam); line-height: 1; margin-bottom: 8px;
  }
  .tt-hero-title em { font-style: italic; color: var(--ice); }
  .tt-hero-sub {
    font-size: 15px; color: var(--smoke); max-width: 500px;
    margin: 12px auto 0; line-height: 1.7; font-weight: 300;
  }
  .tt-hero-wave {
    position: absolute; bottom: 0; left: 0; right: 0; height: 40px;
    background: linear-gradient(180deg, transparent, var(--coal));
  }

  /* ── Layout ── */
  .tt-wrap { max-width: 960px; margin: 0 auto; padding: 40px 20px 80px; }
  .tt-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  @media (max-width: 700px) { .tt-cols { grid-template-columns: 1fr; } }

  /* ── Card ── */
  .tt-card {
    background: var(--iron);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 12px;
    padding: 28px;
  }
  .tt-card-title {
    font-family: 'Playfair Display', serif;
    font-size: 18px; font-weight: 700; color: var(--gold);
    margin-bottom: 20px; padding-bottom: 12px;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    display: flex; align-items: center; gap: 10px;
  }

  /* ── Form fields ── */
  .tt-field { margin-bottom: 16px; }
  .tt-field label {
    display: block; font-family: 'DM Mono', monospace;
    font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--smoke); margin-bottom: 6px;
  }
  .tt-field input, .tt-field select {
    width: 100%; padding: 10px 14px;
    background: var(--iron2); border: 1px solid rgba(255,255,255,0.1);
    border-radius: 6px; color: var(--steam);
    font-family: 'Source Serif 4', serif; font-size: 14px;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .tt-field input:focus, .tt-field select:focus {
    outline: none; border-color: var(--gold);
    box-shadow: 0 0 0 3px rgba(201,148,58,0.15);
  }
  .tt-field select option { background: var(--iron2); }

  .tt-field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

  /* Radio group */
  .tt-radio-group { display: flex; gap: 10px; }
  .tt-radio-label {
    flex: 1; display: flex; align-items: center; justify-content: center;
    gap: 8px; padding: 10px; border-radius: 6px;
    border: 1px solid rgba(255,255,255,0.1);
    background: var(--iron2); cursor: pointer;
    font-size: 13px; color: var(--smoke);
    transition: all 0.2s;
  }
  .tt-radio-label:has(input:checked) {
    border-color: var(--gold); color: var(--gold);
    background: rgba(201,148,58,0.1);
  }
  .tt-radio-label input { display: none; }

  /* Predict button */
  .tt-predict-btn {
    width: 100%; padding: 15px; margin-top: 8px;
    background: linear-gradient(135deg, var(--ocean), var(--water));
    border: none; border-radius: 8px;
    color: #fff; font-family: 'DM Mono', monospace;
    font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase;
    cursor: pointer; transition: all 0.2s;
    display: flex; align-items: center; justify-content: center; gap: 10px;
  }
  .tt-predict-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(37,99,168,0.4); }
  .tt-predict-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

  /* ── Result panel ── */
  .tt-result { display: none; margin-top: 24px; }
  .tt-result.show { display: block; animation: tt-fadein 0.5s ease; }
  @keyframes tt-fadein { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }

  .tt-verdict {
    border-radius: 12px; padding: 28px;
    text-align: center; margin-bottom: 20px;
    position: relative; overflow: hidden;
  }
  .tt-verdict.survived {
    background: linear-gradient(135deg, rgba(45,106,79,0.3), rgba(45,106,79,0.1));
    border: 1px solid rgba(76,175,130,0.4);
  }
  .tt-verdict.perished {
    background: linear-gradient(135deg, rgba(127,29,29,0.3), rgba(127,29,29,0.1));
    border: 1px solid rgba(185,74,28,0.4);
  }
  .tt-verdict-icon { font-size: 52px; display: block; margin-bottom: 12px; }
  .tt-verdict-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(22px, 4vw, 32px); font-weight: 900;
    margin-bottom: 8px;
  }
  .tt-verdict.survived .tt-verdict-title { color: #4caf82; }
  .tt-verdict.perished .tt-verdict-title { color: #f87171; }
  .tt-verdict-sub { font-size: 13px; color: var(--smoke); line-height: 1.6; }

  /* Probability bars */
  .tt-probs { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px; }
  .tt-prob-box {
    background: var(--iron2); border-radius: 8px; padding: 16px;
    text-align: center; border: 1px solid rgba(255,255,255,0.07);
  }
  .tt-prob-label {
    font-family: 'DM Mono', monospace; font-size: 9px;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--smoke); margin-bottom: 8px;
  }
  .tt-prob-pct {
    font-family: 'Playfair Display', serif;
    font-size: 36px; font-weight: 900; line-height: 1;
  }
  .tt-prob-pct.survive { color: #4caf82; }
  .tt-prob-pct.die     { color: #f87171; }
  .tt-prob-bar-wrap {
    height: 6px; background: rgba(255,255,255,0.08);
    border-radius: 3px; overflow: hidden; margin-top: 10px;
  }
  .tt-prob-bar {
    height: 100%; border-radius: 3px;
    transition: width 1s cubic-bezier(0.4,0,0.2,1);
  }
  .tt-prob-bar.survive { background: #4caf82; }
  .tt-prob-bar.die     { background: #f87171; }

  /* Feature weights */
  .tt-weights-title {
    font-family: 'DM Mono', monospace; font-size: 10px;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--gold); margin-bottom: 14px;
    display: flex; align-items: center; gap: 8px;
  }
  .tt-weights-title::after { content: ''; flex: 1; height: 1px; background: rgba(255,255,255,0.08); }
  .tt-weight-row { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
  .tt-weight-name {
    font-family: 'DM Mono', monospace; font-size: 10px;
    color: var(--smoke); width: 100px; flex-shrink: 0;
    text-transform: uppercase; letter-spacing: 0.08em;
  }
  .tt-weight-bar-wrap {
    flex: 1; height: 8px; background: rgba(255,255,255,0.06);
    border-radius: 4px; overflow: hidden;
  }
  .tt-weight-bar {
    height: 100%; border-radius: 4px; background: var(--gold);
    transition: width 1s cubic-bezier(0.4,0,0.2,1);
    opacity: 0.7;
  }
  .tt-weight-pct {
    font-family: 'DM Mono', monospace; font-size: 10px;
    color: var(--gold); width: 36px; text-align: right; flex-shrink: 0;
  }

  /* Error */
  .tt-error {
    display: none; margin-top: 12px; padding: 12px 16px;
    background: rgba(127,29,29,0.3); border: 1px solid rgba(185,74,28,0.4);
    border-radius: 8px; font-size: 13px; color: #fca5a5;
  }

  /* Info box */
  .tt-info {
    background: var(--iron); border: 1px solid rgba(255,255,255,0.07);
    border-radius: 12px; padding: 24px; margin-bottom: 24px;
    border-left: 4px solid var(--ocean);
  }
  .tt-info-title {
    font-family: 'DM Mono', monospace; font-size: 10px;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--ice); margin-bottom: 10px;
  }
  .tt-info-text { font-size: 13px; color: var(--smoke); line-height: 1.7; font-weight: 300; }
  .tt-info-text strong { color: var(--steam); }
</style>

<div class="tt-page">

  <div class="tt-hero">
    <div class="tt-hero-stars"></div>
    <span class="tt-hero-ship">🚢</span>
    <div class="tt-hero-tag">Machine Learning · Poway–Midland Railroad</div>
    <h1 class="tt-hero-title">Would You Have<br><em>Survived?</em></h1>
    <p class="tt-hero-sub">Enter your details below. Our ML model — trained on real Titanic passenger data — will predict your fate on the night of April 14, 1912.</p>
    <div class="tt-hero-wave"></div>
  </div>

  <div class="tt-wrap">

    <div class="tt-info">
      <div class="tt-info-title">🤖 How It Works</div>
      <div class="tt-info-text">
        This predictor uses <strong>Logistic Regression</strong> trained on 891 real Titanic passengers. The model analyzes factors like passenger class, age, sex, and fare to estimate survival probability. A <strong>Decision Tree</strong> is also trained to reveal which features matter most.
      </div>
    </div>

    <div class="tt-cols">

      <!-- Form -->
      <div class="tt-card">
        <div class="tt-card-title">🎫 Your Passenger Profile</div>

        <div class="tt-field">
          <label>Your Name</label>
          <input type="text" id="ttName" placeholder="e.g. Jane Smith" value="">
        </div>

        <div class="tt-field">
          <label>Sex</label>
          <div class="tt-radio-group">
            <label class="tt-radio-label">
              <input type="radio" name="ttSex" value="male"> 👨 Male
            </label>
            <label class="tt-radio-label">
              <input type="radio" name="ttSex" value="female" checked> 👩 Female
            </label>
          </div>
        </div>

        <div class="tt-field-row">
          <div class="tt-field">
            <label>Age</label>
            <input type="number" id="ttAge" min="1" max="100" value="25" placeholder="25">
          </div>
          <div class="tt-field">
            <label>Passenger Class</label>
            <select id="ttPclass">
              <option value="1">1st Class 🥂</option>
              <option value="2" selected>2nd Class</option>
              <option value="3">3rd Class</option>
            </select>
          </div>
        </div>

        <div class="tt-field">
          <label>Fare Paid (£0–512)</label>
          <input type="number" id="ttFare" min="0" max="512" step="0.5" value="16.00" placeholder="16.00">
        </div>

        <div class="tt-field">
          <label>Port of Embarkation</label>
          <select id="ttEmbarked">
            <option value="S" selected>Southampton (S) — most common</option>
            <option value="C">Cherbourg (C)</option>
            <option value="Q">Queenstown (Q)</option>
          </select>
        </div>

        <div class="tt-field-row">
          <div class="tt-field">
            <label>Siblings / Spouses</label>
            <input type="number" id="ttSibsp" min="0" max="10" value="0" placeholder="0">
          </div>
          <div class="tt-field">
            <label>Parents / Children</label>
            <input type="number" id="ttParch" min="0" max="10" value="0" placeholder="0">
          </div>
        </div>

        <div class="tt-field">
          <label>Travelling Alone?</label>
          <div class="tt-radio-group">
            <label class="tt-radio-label">
              <input type="radio" name="ttAlone" value="true"> 🧍 Alone
            </label>
            <label class="tt-radio-label">
              <input type="radio" name="ttAlone" value="false" checked> 👨‍👩‍👧 With Others
            </label>
          </div>
        </div>

        <button class="tt-predict-btn" id="ttPredictBtn" onclick="ttPredict()">
          🔮 Predict My Fate
        </button>
        <div class="tt-error" id="ttError"></div>
      </div>

      <!-- Result -->
      <div>
        <div class="tt-result" id="ttResult">

          <div class="tt-verdict" id="ttVerdict">
            <span class="tt-verdict-icon" id="ttVerdictIcon"></span>
            <div class="tt-verdict-title" id="ttVerdictTitle"></div>
            <div class="tt-verdict-sub" id="ttVerdictSub"></div>
          </div>

          <div class="tt-probs">
            <div class="tt-prob-box">
              <div class="tt-prob-label">Survival Chance</div>
              <div class="tt-prob-pct survive" id="ttSurvivePct">0%</div>
              <div class="tt-prob-bar-wrap">
                <div class="tt-prob-bar survive" id="ttSurviveBar" style="width:0%"></div>
              </div>
            </div>
            <div class="tt-prob-box">
              <div class="tt-prob-label">Death Chance</div>
              <div class="tt-prob-pct die" id="ttDiePct">0%</div>
              <div class="tt-prob-bar-wrap">
                <div class="tt-prob-bar die" id="ttDieBar" style="width:0%"></div>
              </div>
            </div>
          </div>

          <div class="tt-card">
            <div class="tt-weights-title">Feature Importance</div>
            <div id="ttWeights"></div>
          </div>

        </div>

        <!-- Placeholder before prediction -->
        <div class="tt-card" id="ttPlaceholder" style="text-align:center;padding:60px 28px;">
          <div style="font-size:48px;margin-bottom:16px;">⚓</div>
          <div style="font-family:'Playfair Display',serif;font-size:18px;color:var(--steam);margin-bottom:10px;">Your fate awaits</div>
          <div style="font-size:13px;color:var(--smoke);line-height:1.7;">Fill in your details and click <em>Predict My Fate</em> to see if you would have survived the Titanic.</div>
        </div>
      </div>

    </div>
  </div>
</div>

<script>
  const BACKEND = 'http://localhost:8587';

  async function ttPredict() {
    const btn      = document.getElementById('ttPredictBtn');
    const errorEl  = document.getElementById('ttError');
    errorEl.style.display = 'none';

    // Gather form data
    const name     = document.getElementById('ttName').value.trim() || 'Passenger';
    const sex      = document.querySelector('input[name="ttSex"]:checked')?.value || 'female';
    const age      = parseFloat(document.getElementById('ttAge').value);
    const pclass   = parseInt(document.getElementById('ttPclass').value);
    const fare     = parseFloat(document.getElementById('ttFare').value);
    const embarked = document.getElementById('ttEmbarked').value;
    const sibsp    = parseInt(document.getElementById('ttSibsp').value) || 0;
    const parch    = parseInt(document.getElementById('ttParch').value) || 0;
    const alone    = document.querySelector('input[name="ttAlone"]:checked')?.value === 'true';

    if (isNaN(age) || age < 1) {
      ttShowError('Please enter a valid age.'); return;
    }

    btn.disabled = true;
    btn.textContent = '⏳ Predicting...';

    try {
      const res = await fetch(`${BACKEND}/api/titanic/predict`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, pclass, sex, age, sibsp, parch, fare, embarked, alone })
      });

      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();

      ttShowResult(name, data);

    } catch (err) {
      ttShowError('Could not reach the backend. Make sure the server is running on localhost:8587.');
    } finally {
      btn.disabled = false;
      btn.innerHTML = '🔮 Predict My Fate';
    }
  }

  function ttShowResult(name, data) {
    const survive = data.survive ?? data.Survive ?? 0;
    const die     = data.die     ?? data.Die     ?? 0;
    const survived = survive >= 0.5;

    // Verdict
    const verdictEl = document.getElementById('ttVerdict');
    verdictEl.className = 'tt-verdict ' + (survived ? 'survived' : 'perished');
    document.getElementById('ttVerdictIcon').textContent  = survived ? '🎉' : '🌊';
    document.getElementById('ttVerdictTitle').textContent = survived
      ? `${name} Would Survive!`
      : `${name} Would Perish`;
    document.getElementById('ttVerdictSub').textContent = survived
      ? `The model predicts you would have made it onto a lifeboat and survived the sinking.`
      : `The model predicts you would not have survived the sinking of the Titanic on April 15, 1912.`;

    // Probabilities
    const survivePct = Math.round(survive * 100);
    const diePct     = Math.round(die * 100);
    document.getElementById('ttSurvivePct').textContent = survivePct + '%';
    document.getElementById('ttDiePct').textContent     = diePct + '%';
    setTimeout(() => {
      document.getElementById('ttSurviveBar').style.width = survivePct + '%';
      document.getElementById('ttDieBar').style.width     = diePct + '%';
    }, 50);

    // Feature weights
    const weights = data.weights || data.feature_weights;
    if (weights) {
      ttRenderWeights(weights);
    } else {
      // Fetch weights separately if not included
      fetch(`${BACKEND}/api/titanic/predict`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'test', pclass: 2, sex: 'female', age: 25, sibsp: 0, parch: 0, fare: 16, embarked: 'S', alone: true })
      });
      document.getElementById('ttWeights').innerHTML = '<div style="font-size:12px;color:var(--smoke);">Feature weights not available from this endpoint.</div>';
    }

    // Show result, hide placeholder
    document.getElementById('ttPlaceholder').style.display = 'none';
    const resultEl = document.getElementById('ttResult');
    resultEl.classList.add('show');
  }

  function ttRenderWeights(weights) {
    const sorted = Object.entries(weights).sort((a,b) => b[1]-a[1]);
    const max    = sorted[0][1];
    const html   = sorted.map(([feat, imp]) => {
      const pct  = Math.round(imp * 100);
      const barW = max > 0 ? Math.round((imp / max) * 100) : 0;
      const name = feat.replace('embarked_', 'emb_').replace('_', ' ');
      return `
        <div class="tt-weight-row">
          <div class="tt-weight-name">${name}</div>
          <div class="tt-weight-bar-wrap">
            <div class="tt-weight-bar" style="width:${barW}%"></div>
          </div>
          <div class="tt-weight-pct">${pct}%</div>
        </div>`;
    }).join('');
    document.getElementById('ttWeights').innerHTML = html;
  }

  function ttShowError(msg) {
    const el = document.getElementById('ttError');
    el.textContent    = '⚠️ ' + msg;
    el.style.display  = 'block';
  }
</script>