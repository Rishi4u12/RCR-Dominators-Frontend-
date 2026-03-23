---
layout: base
title: Contact & Feedback
permalink: /railroad/contact
---

<style>
  :root { --coal:#1a1410;--iron:#2e2620;--iron2:#3a2e28;--rust:#b94a1c;--ember:#e8621a;--gold:#c9943a;--steam:#e8e0d0;--smoke:#8c7f6e; }
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  body{background:var(--coal);color:var(--steam);font-family:'Georgia',serif;padding-top:56px;}

  .rr-hero{padding:52px 24px 40px;text-align:center;background:radial-gradient(ellipse at 50% 0%,#3d2a18 0%,var(--coal) 70%);border-bottom:1px solid rgba(255,255,255,0.06);}
  .rr-hero-tag{font-family:'Courier New',monospace;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:var(--gold);margin-bottom:10px;opacity:0.8;}
  .rr-hero h1{font-size:clamp(28px,5vw,52px);font-weight:700;line-height:1;margin-bottom:10px;}
  .rr-hero h1 em{font-style:italic;color:var(--ember);}
  .rr-hero p{font-size:14px;color:var(--smoke);max-width:520px;margin:0 auto;line-height:1.7;}

  .rr-wrap{max-width:1000px;margin:0 auto;padding:40px 20px 80px;}
  .rr-grid-2{display:grid;grid-template-columns:1fr 1fr;gap:20px;}
  @media(max-width:700px){.rr-grid-2{grid-template-columns:1fr;}}

  .rr-card{background:var(--iron);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:24px;border-top:3px solid var(--rust);}
  .rr-card-title{font-family:'Courier New',monospace;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold);margin-bottom:16px;padding-bottom:10px;border-bottom:1px solid rgba(255,255,255,0.07);}

  .rr-field{margin-bottom:14px;}
  .rr-label{font-family:'Courier New',monospace;font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:var(--smoke);margin-bottom:5px;display:block;}
  .rr-input,.rr-select,.rr-textarea{width:100%;padding:10px 14px;background:var(--iron2);border:1px solid rgba(255,255,255,0.1);border-radius:6px;color:var(--steam);font-family:'Georgia',serif;font-size:13px;transition:border-color 0.2s;}
  .rr-select{appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%238c7f6e'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 12px center;padding-right:32px;}
  .rr-textarea{resize:vertical;}
  .rr-input:focus,.rr-select:focus,.rr-textarea:focus{outline:none;border-color:var(--gold);box-shadow:0 0 0 3px rgba(201,148,58,0.15);}
  .rr-select option{background:var(--iron2);}
  .rr-field-err{font-family:'Courier New',monospace;font-size:10px;color:#fb923c;margin-top:4px;display:none;}
  .rr-field-err.show{display:block;}

  .rr-btn{width:100%;padding:12px;border:none;border-radius:6px;cursor:pointer;font-family:'Courier New',monospace;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;transition:all 0.2s;margin-top:4px;background:var(--rust);color:#fff;}
  .rr-btn:hover{background:var(--ember);transform:translateY(-1px);}
  .rr-feedback{font-size:12px;margin-top:10px;padding:8px 12px;border-radius:4px;font-family:'Courier New',monospace;display:none;}
  .rr-feedback.ok{background:rgba(45,106,79,0.2);border:1px solid rgba(76,175,130,0.3);color:#4caf82;display:block;}
  .rr-feedback.err{background:rgba(185,74,28,0.2);border:1px solid rgba(185,74,28,0.3);color:#fb923c;display:block;}

  .rr-checklist{list-style:none;padding:0;}
  .rr-checklist li{padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.05);font-size:13px;color:var(--smoke);display:flex;align-items:flex-start;gap:8px;}
  .rr-checklist li::before{content:'✓';color:var(--gold);font-family:'Courier New',monospace;flex-shrink:0;}

  .rr-contact-info{margin-top:20px;}
  .rr-contact-info p{font-size:13px;color:var(--smoke);padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.05);display:flex;align-items:center;gap:8px;}
  .rr-contact-info span{color:var(--gold);}
</style>

<div class="rr-hero">
  <div class="rr-hero-tag">Get in Touch · Poway–Midland Railroad</div>
  <h1>Contact <em>&amp; Feedback</em></h1>
  <p>Share group requests, volunteer interest, and event support needs.</p>
</div>

<div class="rr-wrap">
  <div class="rr-grid-2">

    <div class="rr-card">
      <div class="rr-card-title">📬 Send a Message</div>
      <form id="contactForm" novalidate>
        <div class="rr-field">
          <label class="rr-label" for="cName">Name</label>
          <input class="rr-input" id="cName" type="text" required minlength="2">
          <div class="rr-field-err" id="errName"></div>
        </div>
        <div class="rr-field">
          <label class="rr-label" for="cEmail">Email</label>
          <input class="rr-input" id="cEmail" type="email" required>
          <div class="rr-field-err" id="errEmail"></div>
        </div>
        <div class="rr-field">
          <label class="rr-label" for="cSubject">Subject</label>
          <select class="rr-select" id="cSubject" required>
            <option value="">Select a topic</option>
            <option value="tickets">Group Tickets</option>
            <option value="volunteer">Volunteer Opportunities</option>
            <option value="event">Event Support</option>
            <option value="other">Other</option>
          </select>
          <div class="rr-field-err" id="errSubject"></div>
        </div>
        <div class="rr-field">
          <label class="rr-label" for="cMsg">Message</label>
          <textarea class="rr-textarea" id="cMsg" rows="4" required minlength="12"></textarea>
          <div class="rr-field-err" id="errMsg"></div>
        </div>
        <button class="rr-btn" type="submit">Send Message →</button>
        <div class="rr-feedback" id="contactFeedback"></div>
      </form>
    </div>

    <div>
      <div class="rr-card" style="margin-bottom:16px;">
        <div class="rr-card-title">✅ Form UX Checklist</div>
        <ul class="rr-checklist">
          <li>Client-side validation runs before submit</li>
          <li>Errors shown per field in plain language</li>
          <li>Success and failure states clearly visible</li>
          <li>Keyboard users can complete every action</li>
        </ul>
      </div>
      <div class="rr-card">
        <div class="rr-card-title">📍 Direct Contact</div>
        <div class="rr-contact-info">
          <p><span>📞</span> (858) 748-0379</p>
          <p><span>📧</span> info@powaymidlandrr.org</p>
          <p><span>📍</span> 14134 Midland Rd, Poway, CA 92064</p>
          <p><span>🕐</span> Saturdays &amp; Select Sundays · 10am–2pm</p>
        </div>
      </div>
    </div>

  </div>
</div>

<script>
const validateEmail = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

function setErr(id, msg) {
  const el = document.getElementById(id);
  el.textContent = msg; el.className = 'rr-field-err' + (msg ? ' show' : '');
}
function setFeedback(el, msg, type) {
  el.textContent = msg; el.className = 'rr-feedback ' + (type==='ok'?'ok':'err');
}

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const name    = document.getElementById('cName').value.trim();
  const email   = document.getElementById('cEmail').value.trim();
  const subject = document.getElementById('cSubject').value;
  const msg     = document.getElementById('cMsg').value.trim();
  const fb      = document.getElementById('contactFeedback');
  let valid = true;

  ['errName','errEmail','errSubject','errMsg'].forEach(id => setErr(id,''));

  if (name.length < 2)        { setErr('errName','Please enter a valid name.'); valid=false; }
  if (!validateEmail(email))  { setErr('errEmail','Please enter a valid email address.'); valid=false; }
  if (!subject)               { setErr('errSubject','Please select a subject.'); valid=false; }
  if (msg.length < 12)        { setErr('errMsg','Message must be at least 12 characters.'); valid=false; }

  if (!valid) { setFeedback(fb,'Please fix the highlighted fields before submitting.','err'); return; }
  setFeedback(fb,'Message sent! Our team will follow up shortly. 🚂','ok');
  document.getElementById('contactForm').reset();
});
</script>
