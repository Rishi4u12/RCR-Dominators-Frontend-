---
layout: base
title: Book a Train Ride
permalink: /railroad/book
---

<style>
  :root {
    --rust:     #b94a1c;
    --gold:     #c9943a;
    --green:    #2d6a4f;
    --light-bg: #faf8f5;
    --white:    #ffffff;
    --border:   #e8e0d0;
    --text:     #2c1f0e;
    --subtext:  #7a6a58;
    --input-bg: #f5f0e8;
  }

  * { box-sizing: border-box; }

  .bk-wrap { max-width: 680px; margin: 0 auto; padding: 28px 16px 60px; background: var(--light-bg); min-height: 100vh; }

  /* Header */
  .bk-header { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:14px; margin-bottom:28px; }
  .bk-header-left { display:flex; align-items:center; gap:12px; }
  .bk-logo { font-size:26px; background:var(--rust); border-radius:10px; width:46px; height:46px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
  .bk-title { font-size:clamp(16px,2.5vw,20px); font-weight:700; color:var(--text); margin:0; }
  .bk-subtitle { font-size:11px; color:var(--subtext); letter-spacing:0.1em; text-transform:uppercase; margin-top:2px; }
  .bk-back { display:flex; align-items:center; gap:6px; padding:8px 16px; background:var(--white); border:1px solid var(--border); border-radius:8px; color:var(--rust); text-decoration:none; font-size:13px; font-weight:600; transition:background 0.2s; }
  .bk-back:hover { background:#fff0ea; }

  /* Ride summary card */
  .bk-ride-card { background:var(--white); border:1px solid var(--border); border-radius:14px; padding:22px 24px; margin-bottom:24px; border-top:4px solid var(--rust); }
  .bk-ride-label { font-size:10px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:var(--subtext); margin-bottom:12px; }
  .bk-ride-main { display:flex; align-items:center; gap:18px; flex-wrap:wrap; }
  .bk-ride-time { font-size:48px; font-weight:900; color:var(--text); line-height:1; }
  .bk-ride-info { flex:1; }
  .bk-ride-type { font-size:17px; font-weight:700; color:var(--text); margin-bottom:4px; }
  .bk-ride-date { font-size:13px; color:var(--subtext); }
  .bk-ride-details { display:grid; grid-template-columns:repeat(auto-fill,minmax(140px,1fr)); gap:10px; margin-top:16px; padding-top:16px; border-top:1px solid var(--border); }
  .bk-detail { font-size:12px; color:var(--subtext); }
  .bk-detail strong { display:block; font-size:14px; color:var(--text); margin-bottom:1px; }

  /* Form */
  .bk-form { background:var(--white); border:1px solid var(--border); border-radius:14px; padding:24px; }
  .bk-form-title { font-size:16px; font-weight:700; color:var(--text); margin-bottom:20px; padding-bottom:12px; border-bottom:1px solid var(--border); }

  .bk-field { margin-bottom:18px; }
  .bk-field label { display:block; font-size:12px; font-weight:600; color:var(--subtext); letter-spacing:0.05em; text-transform:uppercase; margin-bottom:6px; }
  .bk-field input, .bk-field select {
    width:100%; padding:11px 14px; background:var(--input-bg); border:1px solid var(--border);
    border-radius:8px; font-size:14px; color:var(--text); font-family:inherit;
    transition:border-color 0.2s, box-shadow 0.2s;
  }
  .bk-field input:focus, .bk-field select:focus { outline:none; border-color:var(--rust); box-shadow:0 0 0 3px rgba(185,74,28,0.1); }

  .bk-row { display:grid; grid-template-columns:1fr 1fr; gap:14px; }

  .bk-ticket-row { display:flex; align-items:center; justify-content:space-between; padding:12px 0; border-bottom:1px solid var(--border); }
  .bk-ticket-row:last-of-type { border-bottom:none; }
  .bk-ticket-label { font-size:14px; color:var(--text); }
  .bk-ticket-sub { font-size:11px; color:var(--subtext); margin-top:1px; }
  .bk-ticket-ctrl { display:flex; align-items:center; gap:12px; }
  .bk-qty-btn { width:30px; height:30px; border-radius:6px; border:1px solid var(--border); background:var(--input-bg); color:var(--text); font-size:16px; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background 0.2s; }
  .bk-qty-btn:hover { background:#ede8df; }
  .bk-qty-val { font-size:16px; font-weight:700; color:var(--text); min-width:20px; text-align:center; }
  .bk-ticket-price { font-size:14px; font-weight:600; color:var(--rust); min-width:40px; text-align:right; }

  .bk-total { display:flex; justify-content:space-between; align-items:center; padding:16px; background:var(--input-bg); border-radius:10px; margin-top:16px; }
  .bk-total-label { font-size:13px; font-weight:700; color:var(--subtext); letter-spacing:0.05em; text-transform:uppercase; }
  .bk-total-amt { font-size:24px; font-weight:900; color:var(--text); }

  .bk-submit { width:100%; margin-top:20px; padding:15px; background:var(--rust); border:none; border-radius:10px; color:#fff; font-size:15px; font-weight:700; letter-spacing:0.05em; cursor:pointer; transition:background 0.2s,transform 0.15s; }
  .bk-submit:hover { background:#a03d16; transform:translateY(-1px); }
  .bk-submit:disabled { background:#ccc; cursor:not-allowed; transform:none; }

  .bk-note { font-size:11px; color:var(--subtext); text-align:center; margin-top:12px; line-height:1.5; }

  /* Confirmation screen */
  .bk-confirm { display:none; background:var(--white); border:1px solid var(--border); border-radius:14px; padding:36px 28px; text-align:center; }
  .bk-confirm.show { display:block; }
  .bk-confirm-icon { font-size:52px; margin-bottom:14px; }
  .bk-confirm-title { font-size:22px; font-weight:800; color:var(--text); margin-bottom:8px; }
  .bk-confirm-sub { font-size:14px; color:var(--subtext); line-height:1.6; margin-bottom:24px; }
  .bk-confirm-code { font-family:'Courier New',monospace; font-size:22px; font-weight:700; letter-spacing:0.2em; color:var(--rust); background:var(--input-bg); padding:12px 24px; border-radius:8px; display:inline-block; margin-bottom:24px; border:1px solid var(--border); }
  .bk-confirm-details { background:var(--input-bg); border-radius:10px; padding:16px 20px; text-align:left; margin-bottom:24px; font-size:13px; color:var(--text); line-height:1.8; }
  .bk-confirm-back { display:inline-block; padding:12px 28px; background:var(--rust); color:#fff; border-radius:8px; text-decoration:none; font-weight:700; font-size:14px; transition:background 0.2s; }
  .bk-confirm-back:hover { background:#a03d16; }

  @media (max-width:500px) {
    .bk-row { grid-template-columns:1fr; }
    .bk-ride-time { font-size:36px; }
  }
</style>

<div class="bk-wrap">

  <!-- Header -->
  <div class="bk-header">
    <div class="bk-header-left">
      <div class="bk-logo">🎟</div>
      <div>
        <div class="bk-title">Book a Train Ride</div>
        <div class="bk-subtitle">Poway–Midland Railroad · Old Poway Park</div>
      </div>
    </div>
    <a href="#" id="bkBackBtn" class="bk-back">← Back to Schedule</a>
  </div>

  <!-- Ride summary -->
  <div class="bk-ride-card">
    <div class="bk-ride-label">Your Selected Ride</div>
    <div class="bk-ride-main">
      <div class="bk-ride-time" id="bkTime">--:--</div>
      <div class="bk-ride-info">
        <div class="bk-ride-type" id="bkType">Loading...</div>
        <div class="bk-ride-date" id="bkDate">—</div>
      </div>
    </div>
    <div class="bk-ride-details">
      <div class="bk-detail"><strong id="bkDuration">~10–15 min</strong>Ride Duration</div>
      <div class="bk-detail"><strong>Old Poway Park</strong>Location</div>
      <div class="bk-detail"><strong id="bkFareAdult">$5.00</strong>Adult Fare</div>
      <div class="bk-detail"><strong id="bkSeatsAvail" style="color:#2d6a4f;">—</strong>Seats Available</div>
      <div class="bk-detail"><strong>$2.00</strong>Child Fare (2–12)</div>
    </div>
  </div>

  <!-- Booking form -->
  <div class="bk-form" id="bkFormSection">
    <div class="bk-form-title">Passenger Information</div>

    <div class="bk-row">
      <div class="bk-field">
        <label>First Name</label>
        <input type="text" id="bkFirstName" placeholder="Jane">
      </div>
      <div class="bk-field">
        <label>Last Name</label>
        <input type="text" id="bkLastName" placeholder="Smith">
      </div>
    </div>

    <div class="bk-field">
      <label>Email Address</label>
      <input type="email" id="bkEmail" placeholder="jane@example.com">
    </div>

    <div class="bk-field">
      <label>Phone Number</label>
      <input type="tel" id="bkPhone" placeholder="(619) 555-0123">
    </div>

    <div class="bk-form-title" style="margin-top:24px;">Tickets</div>

    <div class="bk-ticket-row">
      <div>
        <div class="bk-ticket-label">Adult</div>
        <div class="bk-ticket-sub" id="bkAdultPriceSub">$5.00 each</div>
      </div>
      <div class="bk-ticket-ctrl">
        <button class="bk-qty-btn" onclick="bkChange('adult',-1)">−</button>
        <div class="bk-qty-val" id="bkAdultQty">1</div>
        <button class="bk-qty-btn" onclick="bkChange('adult',1)">+</button>
        <div class="bk-ticket-price" id="bkAdultTotal">$5.00</div>
      </div>
    </div>

    <div class="bk-ticket-row">
      <div>
        <div class="bk-ticket-label">Child (ages 2–12)</div>
        <div class="bk-ticket-sub">$2.00 each</div>
      </div>
      <div class="bk-ticket-ctrl">
        <button class="bk-qty-btn" onclick="bkChange('child',-1)">−</button>
        <div class="bk-qty-val" id="bkChildQty">0</div>
        <button class="bk-qty-btn" onclick="bkChange('child',1)">+</button>
        <div class="bk-ticket-price" id="bkChildTotal">$0.00</div>
      </div>
    </div>

    <div class="bk-ticket-row">
      <div>
        <div class="bk-ticket-label">Child under 2</div>
        <div class="bk-ticket-sub">Free</div>
      </div>
      <div class="bk-ticket-ctrl">
        <button class="bk-qty-btn" onclick="bkChange('infant',-1)">−</button>
        <div class="bk-qty-val" id="bkInfantQty">0</div>
        <button class="bk-qty-btn" onclick="bkChange('infant',1)">+</button>
        <div class="bk-ticket-price">$0.00</div>
      </div>
    </div>

    <div class="bk-total">
      <div class="bk-total-label">Total</div>
      <div class="bk-total-amt" id="bkGrandTotal">$5.00</div>
    </div>

    <div id="bkSeatWarning" style="display:none;background:#fef2f2;border:1px solid #fca5a5;border-radius:8px;padding:10px 14px;margin-top:12px;font-size:13px;color:#c0392b;font-weight:600;">
      ⚠️ Not enough seats available. Only <span id="bkMaxMsg"></span> seat(s) remaining for this ride.
    </div>
    <button class="bk-submit" id="bkSubmitBtn" onclick="bkSubmit()">🎟 Confirm Booking</button>
    <p class="bk-note">Tickets are not pre-purchased online. This reserves your spot and you pay at the depot on the day of your ride. Cash and credit cards accepted.</p>
  </div>

  <!-- Confirmation -->
  <div class="bk-confirm" id="bkConfirmSection">
    <div class="bk-confirm-icon">🎉</div>
    <div class="bk-confirm-title">Reservation Confirmed!</div>
    <div class="bk-confirm-sub">Your spot has been reserved. Please pay at the depot on the day of your ride.</div>
    <div class="bk-confirm-code" id="bkConfirmCode">PMR-000000</div>
    <div class="bk-confirm-details" id="bkConfirmDetails"></div>
    <a href="/railroad/schedule" class="bk-confirm-back">← Back to Schedule</a>
  </div>

</div>

<script>
  let bkAdult = 1, bkChild = 0, bkInfant = 0;
  let bkAdultPrice = 5;
  let bkRideDate = '', bkRideTime = '', bkRideType = '';
  let bkMaxSeats = 99; // set from URL param, enforced in bkChange()

  function bkInit() {
    const params = new URLSearchParams(window.location.search);
    bkRideDate = params.get('date') || '';
    bkRideTime = params.get('time') || '';
    bkRideType = params.get('type') || '';

    // Back button goes back to schedule with same date
    const backUrl = bkRideDate ? `/railroad/schedule?date=${bkRideDate}` : '/railroad/schedule';
    document.getElementById('bkBackBtn').href = backUrl;

    // Fill ride summary
    document.getElementById('bkTime').textContent = bkRideTime || '--:--';
    document.getElementById('bkType').textContent = bkRideType || 'Train Ride';

    if (bkRideDate) {
      const d = new Date(bkRideDate + 'T12:00:00');
      const days   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      document.getElementById('bkDate').textContent = `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    }

    // Read available seats from URL, show in ride card
    const seatsParam = parseInt(params.get('seats'));
    if (!isNaN(seatsParam)) {
      bkMaxSeats = seatsParam;
    }
    const seatsInfoEl = document.getElementById('bkSeatsAvail');
    if (seatsInfoEl) {
      seatsInfoEl.textContent = bkMaxSeats >= 99 ? 'Loading...' : `${bkMaxSeats} seat${bkMaxSeats!==1?'s':''} available`;
      seatsInfoEl.style.color = bkMaxSeats <= 3 ? '#c0392b' : '#2d6a4f';
    }

    // Speeder is $4 adult
    if (bkRideType.includes('Speeder')) {
      bkAdultPrice = 4;
      document.getElementById('bkFareAdult').textContent = '$4.00';
      document.getElementById('bkAdultPriceSub').textContent = '$4.00 each';
    }

    bkUpdateTotals();
  }

  function bkChange(type, delta) {
    const totalPaid = bkAdult + bkChild; // infants are free and don't take seats
    if (type === 'adult') {
      const next = bkAdult + delta;
      if (next < 1) return;
      if (delta > 0 && totalPaid >= bkMaxSeats) { bkShowSeatWarning(); return; }
      bkAdult = next;
    }
    if (type === 'child') {
      const next = bkChild + delta;
      if (next < 0) return;
      if (delta > 0 && totalPaid >= bkMaxSeats) { bkShowSeatWarning(); return; }
      bkChild = next;
    }
    if (type === 'infant') {
      bkInfant = Math.max(0, bkInfant + delta);
    }
    bkUpdateTotals();
  }

  function bkShowSeatWarning() {
    const w = document.getElementById('bkSeatWarning');
    const msg = document.getElementById('bkMaxMsg');
    if (msg) msg.textContent = bkMaxSeats;
    if (w) { w.style.display='block'; setTimeout(()=>{ w.style.display='none'; }, 3000); }
  }

  function bkUpdateTotals() {
    const adultTotal = bkAdult * bkAdultPrice;
    const childTotal = bkChild * 2;
    const grand      = adultTotal + childTotal;
    document.getElementById('bkAdultQty').textContent   = bkAdult;
    document.getElementById('bkChildQty').textContent   = bkChild;
    document.getElementById('bkInfantQty').textContent  = bkInfant;
    document.getElementById('bkAdultTotal').textContent = `$${adultTotal.toFixed(2)}`;
    document.getElementById('bkChildTotal').textContent = `$${childTotal.toFixed(2)}`;
    document.getElementById('bkGrandTotal').textContent = `$${grand.toFixed(2)}`;
  }

  function bkSubmit() {
    const first = document.getElementById('bkFirstName').value.trim();
    const last  = document.getElementById('bkLastName').value.trim();
    const email = document.getElementById('bkEmail').value.trim();
    const phone = document.getElementById('bkPhone').value.trim();

    const totalTickets = bkAdult + bkChild;
    if (totalTickets > bkMaxSeats) {
      alert(`Only ${bkMaxSeats} seat(s) available for this ride. Please reduce your ticket count.`);
      return;
    }
    if (!first || !last || !email || !phone) {
      alert('Please fill in all passenger information fields.');
      return;
    }
    if (!email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    const btn = document.getElementById('bkSubmitBtn');
    btn.disabled = true;
    btn.textContent = 'Submitting...';

    // Simulate API call to POST /api/reservations
    setTimeout(() => {
      const code = 'PMR-' + Math.floor(100000 + Math.random() * 900000);
      const totalPeople = bkAdult + bkChild + bkInfant;
      const grand = (bkAdult * bkAdultPrice) + (bkChild * 2);

      document.getElementById('bkConfirmCode').textContent = code;
      document.getElementById('bkConfirmDetails').innerHTML = `
        <strong>Name:</strong> ${first} ${last}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Ride:</strong> ${bkRideType}<br>
        <strong>Date:</strong> ${document.getElementById('bkDate').textContent}<br>
        <strong>Departure:</strong> ${bkRideTime}<br>
        <strong>Tickets:</strong> ${bkAdult} adult${bkAdult!==1?'s':''}, ${bkChild} child${bkChild!==1?'ren':''}, ${bkInfant} infant${bkInfant!==1?'s':''} (${totalPeople} total)<br>
        <strong>Amount Due at Depot:</strong> $${grand.toFixed(2)}
      `;

      document.getElementById('bkFormSection').style.display = 'none';
      document.getElementById('bkConfirmSection').classList.add('show');
    }, 1200);
  }

  bkInit();
</script>