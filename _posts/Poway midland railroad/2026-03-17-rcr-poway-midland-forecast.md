---
layout: base
title: Tomorrow's Visitor Forecast
permalink: /railroad/forecast
---

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Mono:wght@400;500&family=Source+Serif+4:wght@300;400;600&display=swap" rel="stylesheet">

<style>
  :root{--coal:#1a1410;--iron:#2e2620;--iron2:#3a2e28;--rust:#b94a1c;--ember:#e8621a;--gold:#c9943a;--steam:#e8e0d0;--smoke:#8c7f6e;}
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  .fc-page{background:var(--coal);min-height:100vh;font-family:'Source Serif 4',Georgia,serif;color:var(--steam);}

  .fc-hero{position:relative;padding:50px 24px 40px;text-align:center;background:linear-gradient(180deg,#2a1a0e 0%,var(--coal) 100%);}
  .fc-hero-icon{font-size:60px;display:block;margin-bottom:12px;animation:fc-chug 2.5s ease-in-out infinite;}
  @keyframes fc-chug{0%,100%{transform:translateX(0);}25%{transform:translateX(3px);}75%{transform:translateX(-3px);}}
  .fc-hero-tag{font-family:'DM Mono',monospace;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:var(--gold);margin-bottom:10px;opacity:0.8;}
  .fc-hero-title{font-family:'Playfair Display',serif;font-size:clamp(28px,5vw,56px);font-weight:900;line-height:1;margin-bottom:8px;}
  .fc-hero-title em{font-style:italic;color:var(--ember);}
  .fc-hero-sub{font-size:14px;color:var(--smoke);max-width:500px;margin:8px auto 0;line-height:1.7;font-weight:300;}

  .fc-wrap{max-width:1000px;margin:0 auto;padding:32px 20px 80px;}

  /* Date banner */
  .fc-date-banner{background:var(--iron);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:20px 24px;margin-bottom:20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;border-left:4px solid var(--gold);}
  .fc-date-label{font-family:'DM Mono',monospace;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:var(--smoke);margin-bottom:4px;}
  .fc-date-value{font-family:'Playfair Display',serif;font-size:clamp(18px,3vw,26px);font-weight:700;color:var(--steam);}
  .fc-date-holiday{font-size:13px;color:var(--gold);margin-top:4px;font-family:'DM Mono',monospace;letter-spacing:0.05em;}
  .fc-weather-panel{display:flex;align-items:center;gap:20px;flex-wrap:wrap;}
  .fc-wx-item{text-align:center;}
  .fc-wx-icon{font-size:28px;display:block;}
  .fc-wx-label{font-family:'DM Mono',monospace;font-size:9px;letter-spacing:0.1em;text-transform:uppercase;color:var(--smoke);margin-top:3px;}
  .fc-wx-val{font-size:15px;font-weight:700;color:var(--steam);}
  .fc-wx-loading{font-family:'DM Mono',monospace;font-size:11px;color:var(--smoke);animation:blink 1s infinite;}
  @keyframes blink{0%,100%{opacity:1;}50%{opacity:0.3;}}

  .fc-card{background:var(--iron);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:22px;margin-bottom:18px;}
  .fc-card-title{font-family:'Playfair Display',serif;font-size:16px;font-weight:700;color:var(--gold);margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid rgba(255,255,255,0.08);}

  /* Time grid */
  .fc-time-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:8px;}
  .fc-time-btn{display:flex;flex-direction:column;align-items:center;gap:3px;padding:12px 8px;border-radius:8px;border:1px solid rgba(255,255,255,0.1);background:var(--iron2);cursor:pointer;transition:all 0.2s;}
  .fc-time-btn:has(input:checked){border-color:var(--gold);background:rgba(201,148,58,0.15);}
  .fc-time-btn input{display:none;}
  .fc-time-label{font-family:'DM Mono',monospace;font-size:12px;font-weight:700;color:var(--steam);}
  .fc-time-temp{font-size:11px;color:var(--smoke);}
  .fc-time-busy{font-size:10px;font-family:'DM Mono',monospace;letter-spacing:0.05em;}
  .busy-low{color:#4caf82;}.busy-mid{color:#f59e0b;}.busy-peak{color:#ef4444;}

  /* Event checkboxes */
  .fc-event-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:8px;}
  .fc-event-btn{display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:8px;border:1px solid rgba(255,255,255,0.1);background:var(--iron2);cursor:pointer;font-size:13px;color:var(--smoke);transition:all 0.2s;}
  .fc-event-btn:has(input:checked){border-color:var(--gold);color:var(--gold);background:rgba(201,148,58,0.12);}
  .fc-event-btn input{display:none;}

  .fc-btn{width:100%;padding:14px;background:linear-gradient(135deg,var(--rust),var(--ember));border:none;border-radius:8px;color:#fff;font-family:'DM Mono',monospace;font-size:13px;letter-spacing:0.1em;text-transform:uppercase;cursor:pointer;transition:all 0.2s;margin-top:4px;}
  .fc-btn:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(185,74,28,0.4);}
  .fc-btn:disabled{opacity:0.5;cursor:not-allowed;transform:none;}

  .fc-result{display:none;}
  .fc-result.show{display:block;animation:fc-fade 0.5s ease;}
  @keyframes fc-fade{from{opacity:0;transform:translateY(12px);}to{opacity:1;transform:none;}}

  /* Big number */
  .fc-big{background:linear-gradient(135deg,rgba(185,74,28,0.25),rgba(185,74,28,0.05));border:1px solid rgba(185,74,28,0.4);border-radius:14px;padding:32px;text-align:center;margin-bottom:18px;}
  .fc-big-time{font-family:'DM Mono',monospace;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);margin-bottom:8px;}
  .fc-big-num{font-family:'Playfair Display',serif;font-size:clamp(56px,10vw,88px);font-weight:900;color:var(--ember);line-height:1;}
  .fc-big-unit{font-family:'DM Mono',monospace;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:var(--smoke);margin-top:6px;}
  .fc-crowd-wrap{margin-top:20px;}
  .fc-crowd-sublabel{font-family:'DM Mono',monospace;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:var(--smoke);margin-bottom:8px;}
  .fc-crowd-bar-bg{height:14px;background:rgba(255,255,255,0.08);border-radius:7px;overflow:hidden;}
  .fc-crowd-bar-fill{height:100%;border-radius:7px;transition:width 1.2s cubic-bezier(0.4,0,0.2,1);}
  .fc-crowd-pct-text{font-family:'Playfair Display',serif;font-size:18px;font-weight:700;margin-top:8px;}

  /* Factors */
  .fc-factors{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:18px;}
  .fc-factor{font-family:'DM Mono',monospace;font-size:10px;letter-spacing:0.08em;padding:5px 12px;border-radius:20px;border:1px solid;text-transform:uppercase;}
  .fc-factor.pos{background:rgba(45,106,79,0.15);color:#4caf82;border-color:rgba(76,175,130,0.3);}
  .fc-factor.neg{background:rgba(185,74,28,0.15);color:#fb923c;border-color:rgba(185,74,28,0.3);}
  .fc-factor.neu{background:rgba(255,255,255,0.05);color:var(--smoke);border-color:rgba(255,255,255,0.1);}

  .fc-tip{border-radius:8px;padding:14px 16px;margin-bottom:18px;font-size:13px;line-height:1.6;}
  .fc-tip.busy{background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);color:#fca5a5;}
  .fc-tip.mod{background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);color:#fcd34d;}
  .fc-tip.quiet{background:rgba(45,106,79,0.15);border:1px solid rgba(76,175,130,0.3);color:#a7f3d0;}

  /* Hourly chart */
  .fc-hour-row{display:flex;align-items:center;gap:10px;margin-bottom:7px;}
  .fc-hour-time{font-family:'DM Mono',monospace;font-size:10px;color:var(--smoke);width:70px;flex-shrink:0;text-align:right;}
  .fc-hour-bar-bg{flex:1;height:22px;background:rgba(255,255,255,0.06);border-radius:4px;overflow:hidden;}
  .fc-hour-bar{height:100%;border-radius:4px;transition:width 1s cubic-bezier(0.4,0,0.2,1);display:flex;align-items:center;padding-left:8px;}
  .fc-hour-txt{font-family:'DM Mono',monospace;font-size:10px;color:rgba(255,255,255,0.85);white-space:nowrap;}
  .fc-hour-temp{font-family:'DM Mono',monospace;font-size:10px;color:var(--smoke);width:38px;flex-shrink:0;}
  .fc-active-hour .fc-hour-time{color:var(--gold);font-weight:700;}

  /* Feature weights */
  .fc-wt{font-family:'DM Mono',monospace;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);margin-bottom:12px;display:flex;align-items:center;gap:8px;}
  .fc-wt::after{content:'';flex:1;height:1px;background:rgba(255,255,255,0.08);}
  .fc-wr{display:flex;align-items:center;gap:10px;margin-bottom:7px;}
  .fc-wn{font-family:'DM Mono',monospace;font-size:10px;color:var(--smoke);width:120px;flex-shrink:0;text-transform:uppercase;letter-spacing:0.05em;}
  .fc-wb-bg{flex:1;height:8px;background:rgba(255,255,255,0.06);border-radius:4px;overflow:hidden;}
  .fc-wb{height:100%;border-radius:4px;background:var(--gold);opacity:0.7;transition:width 1s cubic-bezier(0.4,0,0.2,1);}
  .fc-wp{font-family:'DM Mono',monospace;font-size:10px;color:var(--gold);width:36px;text-align:right;flex-shrink:0;}

  .fc-error{display:none;margin-top:12px;padding:12px 16px;background:rgba(127,29,29,0.3);border:1px solid rgba(185,74,28,0.4);border-radius:8px;font-size:13px;color:#fca5a5;}
</style>

<div class="fc-page">
  <div class="fc-hero">
    <span class="fc-hero-icon">🚂</span>
    <div class="fc-hero-tag">ML Powered · Poway–Midland Railroad</div>
    <h1 class="fc-hero-title">Tomorrow's<br><em>Crowd Forecast</em></h1>
    <p class="fc-hero-sub">Real weather data + machine learning. Know how busy PMRR will be before you arrive — down to the hour.</p>
  </div>

  <div class="fc-wrap">

    <!-- Auto date + live weather -->
    <div class="fc-date-banner">
      <div>
        <div class="fc-date-label">Forecasting for</div>
        <div class="fc-date-value" id="fcDateVal">Loading...</div>
        <div class="fc-date-holiday" id="fcHolidayBadge"></div>
      </div>
      <div class="fc-weather-panel" id="fcWeatherPanel">
        <span class="fc-wx-loading">⟳ Fetching Poway weather...</span>
      </div>
    </div>

    <!-- Time selector -->
    <div class="fc-card">
      <div class="fc-card-title">⏰ When Are You Arriving?</div>
      <div class="fc-time-grid" id="fcTimeGrid">
        <div style="font-family:'DM Mono',monospace;font-size:11px;color:var(--smoke);">Loading...</div>
      </div>
    </div>

    <!-- Optional events -->
    <div class="fc-card">
      <div class="fc-card-title">🎪 Any Special Events Tomorrow? <span style="font-size:11px;color:var(--smoke);font-weight:400;">(optional)</span></div>
      <div class="fc-event-grid">
        <label class="fc-event-btn"><input type="checkbox" id="evFestival"> 🎉 Holiday Festival</label>
        <label class="fc-event-btn"><input type="checkbox" id="evHalloween"> 🎃 Halloween Event</label>
        <label class="fc-event-btn"><input type="checkbox" id="evEaster"> 🐰 Easter Event</label>
        <label class="fc-event-btn"><input type="checkbox" id="evThomas"> 🚂 Thomas Train Day</label>
      </div>
    </div>

    <button class="fc-btn" id="fcBtn" onclick="fcPredict()">📈 Generate Forecast</button>
    <div class="fc-error" id="fcError"></div>

    <!-- Result -->
    <div class="fc-result" id="fcResult">
      <div class="fc-big">
        <div class="fc-big-time" id="fcBigTime"></div>
        <div class="fc-big-num"  id="fcBigNum">—</div>
        <div class="fc-big-unit">estimated visitors</div>
        <div class="fc-crowd-wrap">
          <div class="fc-crowd-sublabel">Crowd Level</div>
          <div class="fc-crowd-bar-bg"><div class="fc-crowd-bar-fill" id="fcCrowdFill" style="width:0%"></div></div>
          <div class="fc-crowd-pct-text" id="fcCrowdPct"></div>
        </div>
      </div>

      <div class="fc-factors" id="fcFactors"></div>
      <div class="fc-tip" id="fcTip"></div>

      <div class="fc-card">
        <div class="fc-card-title">📊 Full Day Breakdown</div>
        <div id="fcHourly"></div>
      </div>

      <div class="fc-card">
        <div class="fc-card-title">🤖 Feature Importance</div>
        <div class="fc-wt">What the model learned</div>
        <div id="fcWeights"></div>
      </div>
    </div>

  </div>
</div>

<script>
const BACKEND = 'http://localhost:8587';
const LAT = 32.9728, LON = -117.0359;

const HOLIDAYS = {
  '2026-01-01':"New Year's Day 🎆",'2026-01-19':'MLK Jr. Day',
  '2026-02-16':"Presidents' Day",'2026-05-25':'Memorial Day',
  '2026-07-04':'Independence Day 🎆','2026-09-07':'Labor Day',
  '2026-11-11':'Veterans Day','2026-11-26':'Thanksgiving 🦃',
  '2026-12-25':'Christmas 🎄','2026-12-31':"New Year's Eve",
};
const SCHOOL_BREAKS = [
  ['2026-03-30','2026-04-06'],['2026-06-11','2026-08-14'],
  ['2025-12-22','2026-01-05'],
];

const BUCKETS_SAT = [
  {label:'10–11 AM',start:10,peak:0.55},
  {label:'11 AM–12 PM',start:11,peak:0.85},
  {label:'12–1 PM',start:12,peak:1.00},
  {label:'1–2 PM',start:13,peak:0.75},
];
const BUCKETS_SUN = [
  {label:'11 AM–12 PM',start:11,peak:0.80},
  {label:'12–1 PM',start:12,peak:1.00},
  {label:'1–2 PM',start:13,peak:0.70},
];

const FEAT_NAMES = {
  is_saturday:'Saturday',day_of_month:'Day of Month',weather_sunny:'Sunny',
  rides:'No. Rides',capacity:'Capacity',train_steam:'Steam Loco',
  month:'Month',temperature:'Temperature',is_school_break:'School Break',
  has_event:'Special Event',is_holiday:'Holiday',weather_rainy:'Rainy',
  weather_cloudy:'Cloudy',weather_windy:'Windy',train_cable:'Cable Car',
  temp_mild:'Mild Temp',temp_warm:'Warm Temp',temp_hot:'Hot Temp',temp_cold:'Cold Temp',
};

function wxFromCode(c){
  if(c===0)return{label:'Clear',emoji:'☀️',type:'sunny'};
  if(c<=2) return{label:'Partly Cloudy',emoji:'⛅',type:'cloudy'};
  if(c<=3) return{label:'Overcast',emoji:'☁️',type:'cloudy'};
  if(c<=49)return{label:'Foggy',emoji:'🌫️',type:'cloudy'};
  if(c<=67)return{label:'Rainy',emoji:'🌧️',type:'rainy'};
  if(c<=82)return{label:'Showers',emoji:'🌦️',type:'rainy'};
  return      {label:'Stormy',emoji:'⛈️',type:'rainy'};
}

let fcData={date:'',isSat:false,isSun:false,isHoliday:false,holidayName:'',isSchoolBreak:false,weather:null};

async function fcInit(){
  const tomorrow=new Date(); tomorrow.setDate(tomorrow.getDate()+1);
  const y=tomorrow.getFullYear(), m=String(tomorrow.getMonth()+1).padStart(2,'0'), d=String(tomorrow.getDate()).padStart(2,'0');
  fcData.date=`${y}-${m}-${d}`;
  fcData.isSat=tomorrow.getDay()===6;
  fcData.isSun=tomorrow.getDay()===0;

  // Date display
  const DAYS=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const MONS=['January','February','March','April','May','June','July','August','September','October','November','December'];
  document.getElementById('fcDateVal').textContent=`${DAYS[tomorrow.getDay()]}, ${MONS[tomorrow.getMonth()]} ${tomorrow.getDate()}, ${y}`;

  // Holiday
  fcData.holidayName=HOLIDAYS[fcData.date]||'';
  fcData.isHoliday=!!fcData.holidayName;
  const td=new Date(fcData.date);
  fcData.isSchoolBreak=SCHOOL_BREAKS.some(([s,e])=>td>=new Date(s)&&td<=new Date(e));

  const badge=document.getElementById('fcHolidayBadge');
  if(fcData.holidayName) badge.textContent='🎉 '+fcData.holidayName;
  else if(fcData.isSchoolBreak) badge.textContent='🏫 School Break Week';
  else if(!fcData.isSat&&!fcData.isSun){badge.textContent='⚠️ No rides tomorrow (weekday)';badge.style.color='var(--smoke)';}

  // Build time slots first (no temp yet)
  fcBuildSlots();
  // Fetch weather
  await fcFetchWeather();
}

async function fcFetchWeather(){
  try{
    const url=`https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&hourly=temperature_2m,precipitation_probability,weather_code&temperature_unit=fahrenheit&timezone=America%2FLos_Angeles&forecast_days=2`;
    const res=await fetch(url); const data=await res.json();
    // Tomorrow = indices 24–47
    fcData.weather={
      times:data.hourly.time.slice(24,48),
      temps:data.hourly.temperature_2m.slice(24,48),
      precip:data.hourly.precipitation_probability.slice(24,48),
      codes:data.hourly.weather_code.slice(24,48),
    };
    // Op hours summary (10am–2pm)
    const op=fcData.weather.times.map((t,i)=>{const h=new Date(t).getHours();return h>=10&&h<=14?i:-1;}).filter(i=>i>=0);
    const avgT=Math.round(op.reduce((s,i)=>s+fcData.weather.temps[i],0)/op.length);
    const avgP=Math.round(op.reduce((s,i)=>s+fcData.weather.precip[i],0)/op.length);
    const midWx=wxFromCode(fcData.weather.codes[op[Math.floor(op.length/2)]]);
    document.getElementById('fcWeatherPanel').innerHTML=`
      <div class="fc-wx-item"><span class="fc-wx-icon">${midWx.emoji}</span><div class="fc-wx-label">Conditions</div><div class="fc-wx-val">${midWx.label}</div></div>
      <div class="fc-wx-item"><span class="fc-wx-icon">🌡️</span><div class="fc-wx-label">Temp (op hours)</div><div class="fc-wx-val">${avgT}°F</div></div>
      <div class="fc-wx-item"><span class="fc-wx-icon">☔</span><div class="fc-wx-label">Rain Chance</div><div class="fc-wx-val">${avgP}%</div></div>`;
    // Update slot temps
    fcUpdateSlotTemps();
  }catch(e){
    document.getElementById('fcWeatherPanel').innerHTML=`<span style="font-size:13px;color:var(--smoke);">⚠️ Weather unavailable — using seasonal averages</span>`;
  }
}

function fcBuildSlots(){
  const buckets=fcData.isSat?BUCKETS_SAT:BUCKETS_SUN;
  const grid=document.getElementById('fcTimeGrid');
  if(!fcData.isSat&&!fcData.isSun){
    grid.innerHTML=`<div style="font-family:'DM Mono',monospace;font-size:11px;color:var(--smoke);padding:8px;">⚠️ No rides on weekdays</div>`;
    return;
  }
  grid.innerHTML=buckets.map((b,i)=>`
    <label class="fc-time-btn">
      <input type="radio" name="fcSlot" value="${i}" ${i===1?'checked':''}>
      <span class="fc-time-label">${b.label}</span>
      <span class="fc-time-temp" id="fcST-${i}">—°F</span>
      <span class="fc-time-busy ${b.peak>=0.95?'busy-peak':b.peak>=0.75?'busy-mid':'busy-low'}" id="fcSB-${i}">
        ${b.peak>=0.95?'⬤ Peak':b.peak>=0.75?'⬤ Busy':'⬤ Calm'}
      </span>
    </label>`).join('');
}

function fcUpdateSlotTemps(){
  if(!fcData.weather) return;
  const buckets=fcData.isSat?BUCKETS_SAT:BUCKETS_SUN;
  buckets.forEach((b,i)=>{
    const el=document.getElementById(`fcST-${i}`); if(!el) return;
    const idx=fcData.weather.times.findIndex(t=>new Date(t).getHours()===b.start);
    if(idx>=0) el.textContent=Math.round(fcData.weather.temps[idx])+'°F';
  });
}

async function fcPredict(){
  const btn=document.getElementById('fcBtn'), errEl=document.getElementById('fcError');
  errEl.style.display='none';
  const tomorrow=new Date(); tomorrow.setDate(tomorrow.getDate()+1);
  const month=tomorrow.getMonth()+1, dom=tomorrow.getDate();
  const isSat=fcData.isSat;
  const hasEvent=document.getElementById('evFestival').checked
               ||document.getElementById('evHalloween').checked
               ||document.getElementById('evEaster').checked
               ||document.getElementById('evThomas').checked;

  const slotIdx=parseInt(document.querySelector('input[name="fcSlot"]:checked')?.value||1);
  const buckets=isSat?BUCKETS_SAT:BUCKETS_SUN;
  const bucket=buckets[slotIdx]||buckets[0];

  let weather='sunny', temperature=75, wxEmoji='☀️', wxLabel='Clear';
  if(fcData.weather){
    const idx=fcData.weather.times.findIndex(t=>new Date(t).getHours()===bucket.start);
    if(idx>=0){
      temperature=Math.round(fcData.weather.temps[idx]);
      const wx=wxFromCode(fcData.weather.codes[idx]);
      weather=wx.type; wxEmoji=wx.emoji; wxLabel=wx.label;
    }
  }

  btn.disabled=true; btn.textContent='⏳ Generating...';
  try{
    const res=await fetch(`${BACKEND}/api/visitor/predict`,{
      method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({month,day_of_month:dom,is_saturday:isSat,
        is_holiday:fcData.isHoliday,is_school_break:fcData.isSchoolBreak,
        has_event:hasEvent,weather,train_type:isSat?'steam':'cable',temperature})
    });
    if(!res.ok) throw new Error('HTTP '+res.status);
    const data=await res.json();
    showResult(data,bucket,weather,wxEmoji,wxLabel,temperature,hasEvent,isSat,buckets);
  }catch(e){
    errEl.textContent='⚠️ Could not reach backend. Make sure the server is running on localhost:8587.';
    errEl.style.display='block';
  }finally{btn.disabled=false;btn.textContent='📈 Generate Forecast';}
}

function showResult(data,bucket,weather,wxEmoji,wxLabel,temp,hasEvent,isSat,buckets){
  const base=data.predicted_visitors;
  const visitors=Math.round(base*bucket.peak);
  const cap=data.capacity;
  const occ=Math.min(98,Math.round(visitors/cap*100));
  const weights=data.feature_weights;

  document.getElementById('fcBigTime').textContent='During '+bucket.label;
  document.getElementById('fcBigNum').textContent=visitors.toLocaleString();
  const barColor=occ>=65?'#ef4444':occ>=40?'#f59e0b':'#4caf82';
  document.getElementById('fcCrowdFill').style.background=barColor;
  document.getElementById('fcCrowdPct').textContent=occ+'% capacity';
  document.getElementById('fcCrowdPct').style.color=barColor;
  setTimeout(()=>{document.getElementById('fcCrowdFill').style.width=occ+'%';},50);

  // Factors
  const facts=[];
  facts.push({label:wxEmoji+' '+wxLabel,type:weather==='sunny'?'pos':weather==='rainy'?'neg':'neu'});
  if(temp<60)facts.push({label:'🥶 Cold',type:'neg'});
  else if(temp<78)facts.push({label:'😊 Mild',type:'pos'});
  else if(temp<88)facts.push({label:'😎 Warm',type:'pos'});
  else facts.push({label:'🔥 Hot',type:'neg'});
  if(fcData.isHoliday)facts.push({label:'🎉 '+fcData.holidayName,type:'pos'});
  if(fcData.isSchoolBreak)facts.push({label:'🏫 School Break',type:'pos'});
  if(hasEvent)facts.push({label:'🎪 Special Event',type:'pos'});
  facts.push({label:'⏰ '+bucket.label,type:bucket.peak>=0.95?'neg':'neu'});
  document.getElementById('fcFactors').innerHTML=facts.map(f=>`<span class="fc-factor ${f.type}">${f.label}</span>`).join('');

  // Tip
  const tipEl=document.getElementById('fcTip');
  if(occ>=65){tipEl.className='fc-tip busy';tipEl.innerHTML=`<strong>🔥 Very Busy!</strong> Expect full rides and waits. Arrive 15–20 min early. Book your ride online before heading out.`;}
  else if(occ>=40){tipEl.className='fc-tip mod';tipEl.innerHTML=`<strong>👍 Moderate Crowd.</strong> Good attendance expected — most time slots accessible with short waits.`;}
  else{tipEl.className='fc-tip quiet';tipEl.innerHTML=`<strong>✅ Relaxed Day.</strong> Walk-on rides likely available. ${weather==='rainy'?'Rain may keep crowds away — bring a jacket!':'Enjoy the open air and easy boarding!'}`;}

  // Hourly breakdown
  const maxV=Math.max(...buckets.map(b=>Math.round(base*b.peak)));
  document.getElementById('fcHourly').innerHTML=buckets.map(b=>{
    const v=Math.round(base*b.peak);
    const barW=Math.round(v/maxV*100);
    const color=b.peak>=0.95?'#ef4444':b.peak>=0.75?'#f59e0b':'#4caf82';
    const crowd=b.peak>=0.95?'Peak':b.peak>=0.75?'Busy':'Calm';
    const isActive=b.label===bucket.label;
    let tStr='';
    if(fcData.weather){const idx=fcData.weather.times.findIndex(t=>new Date(t).getHours()===b.start);if(idx>=0)tStr=Math.round(fcData.weather.temps[idx])+'°F';}
    return`<div class="fc-hour-row ${isActive?'fc-active-hour':''}">
      <div class="fc-hour-time">${b.label}</div>
      <div class="fc-hour-bar-bg"><div class="fc-hour-bar" style="width:0%;background:${color};" data-w="${barW}">
        <span class="fc-hour-txt">${v} visitors · ${crowd}</span></div></div>
      <div class="fc-hour-temp">${tStr}</div></div>`;
  }).join('');
  setTimeout(()=>{document.querySelectorAll('.fc-hour-bar').forEach(b=>{b.style.width=b.dataset.w+'%';});},100);

  // Feature weights
  if(weights){
    const sorted=Object.entries(weights).sort((a,b)=>b[1]-a[1]).slice(0,8);
    const max=sorted[0]?.[1]||1;
    document.getElementById('fcWeights').innerHTML=sorted.map(([f,imp])=>`
      <div class="fc-wr"><div class="fc-wn">${FEAT_NAMES[f]||f}</div>
      <div class="fc-wb-bg"><div class="fc-wb" style="width:${Math.round(imp/max*100)}%"></div></div>
      <div class="fc-wp">${Math.round(imp*100)}%</div></div>`).join('');
  }

  document.getElementById('fcResult').classList.add('show');
  setTimeout(()=>{document.getElementById('fcResult').scrollIntoView({behavior:'smooth',block:'start'});},100);
}

fcInit();
</script>