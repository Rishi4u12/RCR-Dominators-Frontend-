---
layout: base
title: My Profile
permalink: /railroad/profile
---

<style>
  :root {
    --coal:#1a1410; --iron:#2e2620; --iron2:#3a2e28;
    --rust:#b94a1c; --ember:#e8621a; --gold:#c9943a;
    --steam:#e8e0d0; --smoke:#8c7f6e; --green:#2d6a4f;
  }
  *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
  body { background:var(--coal); color:var(--steam); font-family:'Georgia',serif; padding-top:56px; }

  .pf-hero {
    padding: 40px 24px 32px; text-align: center;
    background: radial-gradient(ellipse at 50% 0%, #3d2a18 0%, var(--coal) 70%);
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .pf-avatar {
    width: 80px; height: 80px; border-radius: 50%;
    background: var(--rust); border: 3px solid var(--gold);
    display: flex; align-items: center; justify-content: center;
    font-size: 36px; font-weight: 700; color: #fff;
    margin: 0 auto 14px;
  }
  .pf-name { font-size: clamp(22px,4vw,34px); font-weight: 700; color: var(--steam); margin-bottom: 4px; }
  .pf-email { font-family: 'Courier New', monospace; font-size: 12px; color: var(--smoke); }
  .pf-tag {
    display: inline-block; margin-top: 10px;
    font-family: 'Courier New', monospace; font-size: 10px; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--gold);
    background: rgba(201,148,58,0.1); border: 1px solid rgba(201,148,58,0.25);
    border-radius: 4px; padding: 4px 14px;
  }

  .pf-wrap { max-width: 900px; margin: 0 auto; padding: 36px 20px 80px; }

  .pf-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 28px; }
  @media(max-width:680px) { .pf-grid { grid-template-columns: 1fr; } }

  .pf-card {
    background: var(--iron); border: 1px solid rgba(255,255,255,0.07);
    border-radius: 12px; padding: 24px; border-top: 3px solid var(--rust);
  }
  .pf-card-title {
    font-family: 'Courier New', monospace; font-size: 10px;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--gold); margin-bottom: 18px;
    padding-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.07);
  }

  .pf-field { margin-bottom: 14px; }
  .pf-label {
    font-family: 'Courier New', monospace; font-size: 10px;
    letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--smoke); margin-bottom: 5px; display: block;
  }
  .pf-value {
    font-size: 14px; color: var(--steam); padding: 10px 14px;
    background: var(--iron2); border-radius: 6px;
    border: 1px solid rgba(255,255,255,0.08);
  }
  .pf-input {
    width: 100%; padding: 10px 14px; background: var(--iron2);
    border: 1px solid rgba(255,255,255,0.1); border-radius: 6px;
    color: var(--steam); font-family: 'Georgia', serif; font-size: 14px;
    transition: border-color 0.2s;
  }
  .pf-input:focus { outline: none; border-color: var(--gold); box-shadow: 0 0 0 3px rgba(201,148,58,0.15); }

  .pf-feedback {
    font-size: 12px; margin-top: 8px; padding: 8px 12px; border-radius: 4px;
    font-family: 'Courier New', monospace; display: none;
  }
  .pf-feedback.ok  { background: rgba(45,106,79,0.2);  border: 1px solid rgba(76,175,130,0.3); color: #4caf82; display: block; }
  .pf-feedback.err { background: rgba(185,74,28,0.2);  border: 1px solid rgba(185,74,28,0.3);  color: #fb923c; display: block; }

  .pf-btn {
    width: 100%; padding: 11px; border: none; border-radius: 6px; cursor: pointer;
    font-family: 'Courier New', monospace; font-size: 11px; letter-spacing: 0.1em;
    text-transform: uppercase; transition: all 0.2s; margin-top: 6px;
  }
  .pf-btn-primary { background: var(--rust); color: #fff; }
  .pf-btn-primary:hover { background: var(--ember); }
  .pf-btn-danger  { background: rgba(185,74,28,0.15); color: #e07050; border: 1px solid rgba(185,74,28,0.3); }
  .pf-btn-danger:hover { background: rgba(185,74,28,0.3); }

  /* Booking history */
  .pf-bookings { background: var(--iron); border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 24px; border-top: 3px solid var(--gold); }
  .pf-booking-row {
    display: grid; grid-template-columns: auto 1fr auto;
    gap: 14px; align-items: center;
    padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .pf-booking-row:last-child { border-bottom: none; }
  .pf-booking-code {
    font-family: 'Courier New', monospace; font-size: 13px;
    font-weight: 700; color: var(--rust); letter-spacing: 0.1em;
    white-space: nowrap;
  }
  .pf-booking-detail { font-size: 13px; color: var(--steam); line-height: 1.5; }
  .pf-booking-detail small { display: block; font-size: 11px; color: var(--smoke); margin-top: 2px; }
  .pf-booking-price {
    font-family: 'Courier New', monospace; font-size: 14px;
    font-weight: 700; color: var(--gold); white-space: nowrap; text-align: right;
  }
  .pf-empty {
    text-align: center; padding: 40px 20px;
    font-family: 'Courier New', monospace; font-size: 12px; color: var(--smoke);
  }
  .pf-empty a { color: var(--gold); }

  /* Not logged in state */
  .pf-gate {
    display: none; text-align: center; padding: 60px 20px;
    max-width: 480px; margin: 40px auto;
  }
  .pf-gate.show { display: block; }
  .pf-gate-icon { font-size: 48px; margin-bottom: 16px; }
  .pf-gate h2 { font-size: 22px; color: var(--steam); margin-bottom: 10px; }
  .pf-gate p { font-size: 14px; color: var(--smoke); line-height: 1.7; margin-bottom: 24px; }
  .pf-gate a {
    display: inline-block; padding: 12px 28px; background: var(--rust);
    color: #fff; text-decoration: none; border-radius: 6px; font-weight: 700;
    font-family: 'Courier New', monospace; font-size: 12px; letter-spacing: 0.1em;
    text-transform: uppercase; transition: background 0.2s;
  }
  .pf-gate a:hover { background: var(--ember); }

  #pfMain { display: none; }
  #pfMain.show { display: block; }
</style>

<!-- Not logged in -->
<div class="pf-gate" id="pfGate">
  <div class="pf-gate-icon">🔒</div>
  <h2>Members Only</h2>
  <p>Sign in to view your profile, booking history, and account settings.</p>
  <a href="/railroad/login">Sign In →</a>
</div>

<!-- Profile content -->
<div id="pfMain">
  <div class="pf-hero">
    <div class="pf-avatar" id="pfAvatar">?</div>
    <div class="pf-name"  id="pfName">Loading...</div>
    <div class="pf-email" id="pfEmail"></div>
    <div class="pf-tag">🚂 Railroad Member</div>
  </div>

  <div class="pf-wrap">
    <div class="pf-grid">

      <!-- Account Info -->
      <div class="pf-card">
        <div class="pf-card-title">👤 Account Info</div>
        <div class="pf-field">
          <label class="pf-label">Full Name</label>
          <div class="pf-value" id="pfInfoName">—</div>
        </div>
        <div class="pf-field">
          <label class="pf-label">Email Address</label>
          <div class="pf-value" id="pfInfoEmail">—</div>
        </div>
        <div class="pf-field">
          <label class="pf-label">Password</label>
          <div class="pf-value">●●●●●●●●●●</div>
        </div>
      </div>

      <!-- Change Password -->
      <div class="pf-card">
        <div class="pf-card-title">🔑 Change Password</div>
        <div class="pf-field">
          <label class="pf-label">Current Password</label>
          <input class="pf-input" type="password" id="pfCurPass" placeholder="Enter current password">
        </div>
        <div class="pf-field">
          <label class="pf-label">New Password</label>
          <input class="pf-input" type="password" id="pfNewPass" placeholder="At least 6 characters">
        </div>
        <div class="pf-field">
          <label class="pf-label">Confirm New Password</label>
          <input class="pf-input" type="password" id="pfConPass" placeholder="Repeat new password">
        </div>
        <div class="pf-feedback" id="pfPassFeedback"></div>
        <button class="pf-btn pf-btn-primary" onclick="pfChangePassword()">Update Password</button>
      </div>

    </div>

    <!-- Booking History -->
    <div class="pf-bookings">
      <div class="pf-card-title" style="font-family:'Courier New',monospace;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);margin-bottom:18px;padding-bottom:10px;border-bottom:1px solid rgba(255,255,255,0.07);">
        🎟 My Booking History
      </div>
      <div id="pfBookingList">
        <div class="pf-empty">Loading reservations...</div>
      </div>
    </div>

    <!-- Danger zone -->
    <div style="margin-top:20px;text-align:right;">
      <button class="pf-btn pf-btn-danger" style="width:auto;padding:10px 24px;" onclick="pfLogout()">
        🚪 Sign Out
      </button>
    </div>

  </div>
</div>

<script>
  const BACKEND = 'http://localhost:8587';
  let pfUser = null;

  async function pfInit() {
    try {
      const res  = await fetch(`${BACKEND}/api/auth/status`, { credentials: 'include' });
      const data = await res.json();
      if (!data.logged_in) { pfShowGate(); return; }
      pfUser = data;
      pfShowProfile(data);
      pfLoadBookings(data.email);
    } catch {
      pfShowGate();
    }
  }

  function pfShowGate() {
    document.getElementById('pfGate').classList.add('show');
  }

  function pfShowProfile(user) {
    document.getElementById('pfMain').classList.add('show');
    document.getElementById('pfAvatar').textContent  = user.name.charAt(0).toUpperCase();
    document.getElementById('pfName').textContent    = user.name;
    document.getElementById('pfEmail').textContent   = user.email;
    document.getElementById('pfInfoName').textContent  = user.name;
    document.getElementById('pfInfoEmail').textContent = user.email;
  }

  async function pfLoadBookings(email) {
    const list = document.getElementById('pfBookingList');
    try {
      const res  = await fetch(`${BACKEND}/api/reservations`, { credentials: 'include' });
      const data = await res.json();

      // Filter to this user's bookings by email
      const mine = data.filter(r => r.email && r.email.toLowerCase() === email.toLowerCase());

      if (!mine.length) {
        list.innerHTML = `<div class="pf-empty">No bookings yet. <a href="/railroad/schedule">Book a ride →</a></div>`;
        return;
      }

      // Sort newest first
      mine.sort((a,b) => new Date(b.created_at) - new Date(a.created_at));

      const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      list.innerHTML = mine.map(r => {
        const d = new Date(r.date + 'T12:00:00');
        const dateLabel = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
        const tickets = [
          r.adults   ? `${r.adults} adult${r.adults!==1?'s':''}` : '',
          r.children ? `${r.children} child${r.children!==1?'ren':''}` : '',
          r.infants  ? `${r.infants} infant${r.infants!==1?'s':''}` : '',
        ].filter(Boolean).join(', ');
        return `
          <div class="pf-booking-row">
            <div class="pf-booking-code">${r.confirm_code}</div>
            <div class="pf-booking-detail">
              ${r.train_type} · ${dateLabel} at ${r.time}
              <small>${tickets} · Pay at depot</small>
            </div>
            <div class="pf-booking-price">$${r.total_price.toFixed(2)}</div>
          </div>`;
      }).join('');

    } catch {
      list.innerHTML = `<div class="pf-empty">Could not load bookings. Make sure backend is running.</div>`;
    }
  }

  function pfFeedback(id, msg, type) {
    const el = document.getElementById(id);
    el.textContent  = msg;
    el.className    = 'pf-feedback ' + (type === 'ok' ? 'ok' : 'err');
  }

  async function pfChangePassword() {
    const cur  = document.getElementById('pfCurPass').value.trim();
    const nw   = document.getElementById('pfNewPass').value.trim();
    const conf = document.getElementById('pfConPass').value.trim();
    const fb   = 'pfPassFeedback';

    if (!cur || !nw || !conf) { pfFeedback(fb, 'Please fill in all password fields.', 'err'); return; }
    if (nw.length < 6)        { pfFeedback(fb, 'New password must be at least 6 characters.', 'err'); return; }
    if (nw !== conf)           { pfFeedback(fb, 'New passwords do not match.', 'err'); return; }

    try {
      const res  = await fetch(`${BACKEND}/api/auth/change-password`, {
        method:      'POST',
        credentials: 'include',
        headers:     { 'Content-Type': 'application/json' },
        body:        JSON.stringify({ current_password: cur, new_password: nw })
      });
      const data = await res.json();
      if (!res.ok) { pfFeedback(fb, data.error || 'Failed to update password.', 'err'); return; }
      pfFeedback(fb, 'Password updated successfully! 🚂', 'ok');
      document.getElementById('pfCurPass').value = '';
      document.getElementById('pfNewPass').value = '';
      document.getElementById('pfConPass').value = '';
    } catch {
      pfFeedback(fb, 'Could not reach server.', 'err');
    }
  }

  async function pfLogout() {
    try { await fetch(`${BACKEND}/api/auth/logout`, { method: 'POST', credentials: 'include' }); } catch {}
    window.location.href = '/railroad/login';
  }

  pfInit();
</script>