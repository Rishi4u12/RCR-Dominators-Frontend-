---
layout: base
title: Railroad Notes
permalink: /railroad/notes
---

<style>
  :root {
    --rust:     #b94a1c;
    --gold:     #c9943a;
    --green:    #2d6a4f;
    --bg:       #faf8f5;
    --white:    #ffffff;
    --border:   #e8e0d0;
    --text:     #2c1f0e;
    --subtext:  #7a6a58;
    --input-bg: #f5f0e8;
  }

  * { box-sizing: border-box; }

  .nt-wrap { max-width: 1100px; margin: 0 auto; padding: 28px 16px 60px; }

  /* Header */
  .nt-header { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:14px; margin-bottom:28px; }
  .nt-header-left { display:flex; align-items:center; gap:12px; }
  .nt-logo { font-size:26px; background:var(--rust); border-radius:10px; width:46px; height:46px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
  .nt-title { font-size:clamp(16px,2.5vw,22px); font-weight:800; color:var(--text); margin:0; }
  .nt-subtitle { font-size:11px; color:var(--subtext); letter-spacing:0.1em; text-transform:uppercase; margin-top:2px; }
  .nt-back { display:flex; align-items:center; gap:6px; padding:8px 16px; background:var(--white); border:1px solid var(--border); border-radius:8px; color:var(--rust); text-decoration:none; font-size:13px; font-weight:600; transition:background 0.2s; }
  .nt-back:hover { background:#fff0ea; }

  /* Compose box */
  .nt-compose { background:var(--white); border:1px solid var(--border); border-radius:16px; padding:24px; margin-bottom:32px; border-top:4px solid var(--rust); }
  .nt-compose-title { font-size:15px; font-weight:700; color:var(--text); margin-bottom:16px; }
  .nt-field { margin-bottom:14px; }
  .nt-field label { display:block; font-size:11px; font-weight:600; color:var(--subtext); letter-spacing:0.08em; text-transform:uppercase; margin-bottom:6px; }
  .nt-field input, .nt-field textarea {
    width:100%; padding:10px 14px; background:var(--input-bg); border:1px solid var(--border);
    border-radius:8px; font-size:14px; color:var(--text); font-family:inherit;
    transition:border-color 0.2s, box-shadow 0.2s; resize:vertical;
  }
  .nt-field input:focus, .nt-field textarea:focus { outline:none; border-color:var(--rust); box-shadow:0 0 0 3px rgba(185,74,28,0.1); }

  /* Image upload */
  .nt-upload-area { border:2px dashed var(--border); border-radius:10px; padding:24px; text-align:center; cursor:pointer; transition:border-color 0.2s, background 0.2s; position:relative; }
  .nt-upload-area:hover { border-color:var(--rust); background:#fff7f3; }
  .nt-upload-area input[type=file] { position:absolute; inset:0; opacity:0; cursor:pointer; width:100%; height:100%; }
  .nt-upload-icon { font-size:28px; margin-bottom:6px; }
  .nt-upload-text { font-size:13px; color:var(--subtext); }
  .nt-upload-text strong { color:var(--rust); }
  .nt-preview { margin-top:12px; display:none; }
  .nt-preview img { max-height:200px; border-radius:8px; border:1px solid var(--border); object-fit:cover; }
  .nt-preview-remove { margin-top:8px; font-size:12px; color:var(--rust); cursor:pointer; font-weight:600; }
  .nt-preview-remove:hover { text-decoration:underline; }

  .nt-post-btn { width:100%; padding:13px; background:var(--rust); border:none; border-radius:10px; color:#fff; font-size:14px; font-weight:700; cursor:pointer; transition:background 0.2s, transform 0.15s; margin-top:4px; }
  .nt-post-btn:hover { background:#a03d16; transform:translateY(-1px); }
  .nt-post-btn:disabled { background:#ccc; cursor:not-allowed; transform:none; }
  .nt-post-error { display:none; margin-top:10px; padding:10px 14px; background:#fef2f2; border:1px solid #fca5a5; border-radius:8px; font-size:13px; color:#c0392b; font-weight:600; }

  /* Feed label */
  .nt-feed-label { font-size:11px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:var(--subtext); display:flex; align-items:center; gap:10px; margin-bottom:20px; }
  .nt-feed-label::after { content:''; flex:1; height:1px; background:var(--border); }
  .nt-feed-count { font-size:13px; color:var(--rust); font-weight:700; margin-left:auto; letter-spacing:0; }

  /* Masonry grid */
  .nt-grid { columns: 3; column-gap: 16px; }
  @media (max-width: 800px) { .nt-grid { columns: 2; } }
  @media (max-width: 500px) { .nt-grid { columns: 1; } }

  .nt-card { break-inside: avoid; background:var(--white); border:1px solid var(--border); border-radius:14px; margin-bottom:16px; overflow:hidden; transition:transform 0.2s, box-shadow 0.2s; }
  .nt-card:hover { transform:translateY(-3px); box-shadow:0 8px 28px rgba(0,0,0,0.1); }

  .nt-card-img { width:100%; display:block; object-fit:cover; max-height:360px; }

  .nt-card-body { padding:14px 16px 12px; }
  .nt-card-author { font-size:12px; font-weight:700; color:var(--rust); margin-bottom:6px; display:flex; align-items:center; gap:6px; }
  .nt-card-author-icon { width:26px; height:26px; border-radius:50%; background:var(--rust); color:#fff; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:700; flex-shrink:0; }
  .nt-card-content { font-size:14px; color:var(--text); line-height:1.6; margin-bottom:10px; white-space:pre-wrap; word-break:break-word; }
  .nt-card-footer { display:flex; align-items:center; justify-content:space-between; padding-top:8px; border-top:1px solid var(--border); }
  .nt-card-time { font-size:11px; color:var(--subtext); }
  .nt-card-actions { display:flex; align-items:center; gap:10px; }
  .nt-like-btn { display:flex; align-items:center; gap:5px; padding:5px 10px; border-radius:20px; border:1px solid var(--border); background:var(--input-bg); color:var(--subtext); font-size:12px; font-weight:600; cursor:pointer; transition:background 0.2s, color 0.2s, border-color 0.2s; }
  .nt-like-btn:hover, .nt-like-btn.liked { background:#fff0ea; color:var(--rust); border-color:var(--rust); }
  .nt-delete-btn { display:flex; align-items:center; gap:4px; padding:5px 10px; border-radius:20px; border:1px solid #fca5a5; background:#fef2f2; color:#c0392b; font-size:12px; font-weight:600; cursor:pointer; transition:background 0.2s; }
  .nt-delete-btn:hover { background:#fde8e8; }

  /* Empty state */
  .nt-empty { text-align:center; padding:60px 20px; color:var(--subtext); }
  .nt-empty-icon { font-size:48px; margin-bottom:12px; }
  .nt-empty-text { font-size:14px; }

  /* Loading */
  .nt-loading { text-align:center; padding:40px; color:var(--subtext); font-size:13px; font-family:'Courier New',monospace; }
</style>

<div class="nt-wrap">

  <!-- Header -->
  <div class="nt-header">
    <div class="nt-header-left">
      <div class="nt-logo">📸</div>
      <div>
        <div class="nt-title">Railroad Notes</div>
        <div class="nt-subtitle">Poway–Midland Railroad · Share Your Experience</div>
      </div>
    </div>
    <a href="/railroad/schedule" class="nt-back">← Schedule</a>
  </div>

  <!-- Compose -->
  <div class="nt-compose">
    <div class="nt-compose-title">✍️ Share Your Experience</div>

    <div class="nt-field">
      <label>Your Name (optional)</label>
      <input type="text" id="ntAuthor" placeholder="e.g. Jane Smith">
    </div>

    <div class="nt-field">
      <label>Your Note</label>
      <textarea id="ntContent" rows="4" placeholder="Share your experience, a fun moment, or say hi to fellow riders..."></textarea>
    </div>

    <div class="nt-field">
      <label>Photo (optional)</label>
      <div class="nt-upload-area" id="ntUploadArea">
        <input type="file" id="ntImageInput" accept="image/*" onchange="ntHandleImage(this)">
        <div class="nt-upload-icon">🖼️</div>
        <div class="nt-upload-text"><strong>Click to upload</strong> or drag & drop<br>JPG, PNG, GIF up to 5MB</div>
      </div>
      <div class="nt-preview" id="ntPreview">
        <img id="ntPreviewImg" src="" alt="Preview">
        <div class="nt-preview-remove" onclick="ntRemoveImage()">✕ Remove photo</div>
      </div>
    </div>

    <div class="nt-post-error" id="ntPostError"></div>
    <button class="nt-post-btn" id="ntPostBtn" onclick="ntSubmit()">📮 Post Note</button>
  </div>

  <!-- Feed -->
  <div class="nt-feed-label">
    Community Notes
    <span class="nt-feed-count" id="ntCount"></span>
  </div>
  <div id="ntGrid" class="nt-grid">
    <div class="nt-loading">Loading notes...</div>
  </div>

</div>

<script>
  const BACKEND = 'http://localhost:8587';

  let ntImageBase64 = null;
  let ntImageType   = null;
  // Track which notes the user has liked this session (by id)
  const likedNotes = new Set();

  // ── Image handling ──────────────────────────────────────────────────────────
  function ntHandleImage(input) {
    const file = input.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      alert('Image must be under 5MB.');
      input.value = '';
      return;
    }
    ntImageType = file.type;
    const reader = new FileReader();
    reader.onload = e => {
      ntImageBase64 = e.target.result.split(',')[1]; // strip data:...;base64,
      document.getElementById('ntPreviewImg').src = e.target.result;
      document.getElementById('ntPreview').style.display = 'block';
      document.getElementById('ntUploadArea').style.display = 'none';
    };
    reader.readAsDataURL(file);
  }

  function ntRemoveImage() {
    ntImageBase64 = null;
    ntImageType   = null;
    document.getElementById('ntImageInput').value = '';
    document.getElementById('ntPreview').style.display  = 'none';
    document.getElementById('ntUploadArea').style.display = 'block';
  }

  // ── Submit ──────────────────────────────────────────────────────────────────
  async function ntSubmit() {
    const content = document.getElementById('ntContent').value.trim();
    const author  = document.getElementById('ntAuthor').value.trim();
    const errEl   = document.getElementById('ntPostError');
    errEl.style.display = 'none';

    if (!content) {
      errEl.textContent   = 'Please write something before posting!';
      errEl.style.display = 'block';
      return;
    }

    const btn = document.getElementById('ntPostBtn');
    btn.disabled    = true;
    btn.textContent = 'Posting...';

    try {
      const res = await fetch(`${BACKEND}/api/notes`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          author,
          content,
          image_data: ntImageBase64,
          image_type: ntImageType,
        })
      });

      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.error || 'Post failed');
      }

      // Reset form
      document.getElementById('ntContent').value = '';
      document.getElementById('ntAuthor').value  = '';
      ntRemoveImage();

      // Reload feed
      await ntLoadFeed();

    } catch (err) {
      errEl.textContent   = 'Could not post: ' + err.message;
      errEl.style.display = 'block';
    } finally {
      btn.disabled    = false;
      btn.textContent = '📮 Post Note';
    }
  }

  // ── Load feed ───────────────────────────────────────────────────────────────
  async function ntLoadFeed() {
    const grid = document.getElementById('ntGrid');
    try {
      const res   = await fetch(`${BACKEND}/api/notes`);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const notes = await res.json();

      document.getElementById('ntCount').textContent = notes.length + ' note' + (notes.length !== 1 ? 's' : '');

      if (notes.length === 0) {
        grid.innerHTML = `
          <div class="nt-empty" style="grid-column:1/-1">
            <div class="nt-empty-icon">🚂</div>
            <div class="nt-empty-text">No notes yet — be the first to share your experience!</div>
          </div>`;
        return;
      }

      grid.innerHTML = '';
      notes.forEach(n => grid.appendChild(ntBuildCard(n)));

    } catch (err) {
      grid.innerHTML = `<div class="nt-loading">Could not load notes. Make sure the backend is running.</div>`;
    }
  }

  // ── Build card ──────────────────────────────────────────────────────────────
  function ntBuildCard(n) {
    const card = document.createElement('div');
    card.className = 'nt-card';
    card.id = `nt-card-${n.id}`;

    const initials = (n.author || 'A').charAt(0).toUpperCase();
    const timeStr  = ntFormatTime(n.created_at);
    const isLiked  = likedNotes.has(n.id);

    let imgHtml = '';
    if (n.image_data && n.image_type) {
      imgHtml = `<img class="nt-card-img" src="data:${n.image_type};base64,${n.image_data}" alt="Note photo" loading="lazy">`;
    }

    card.innerHTML = `
      ${imgHtml}
      <div class="nt-card-body">
        <div class="nt-card-author">
          <div class="nt-card-author-icon">${initials}</div>
          ${n.author || 'Anonymous'}
        </div>
        <div class="nt-card-content">${ntEscape(n.content)}</div>
        <div class="nt-card-footer">
          <div class="nt-card-time">${timeStr}</div>
          <div class="nt-card-actions">
            <button class="nt-like-btn ${isLiked ? 'liked' : ''}" id="like-btn-${n.id}" onclick="ntLike(${n.id})">
              ❤️ <span id="like-count-${n.id}">${n.likes}</span>
            </button>
            <button class="nt-delete-btn" onclick="ntDelete(${n.id})">🗑 Delete</button>
          </div>
        </div>
      </div>
    `;
    return card;
  }

  // ── Like ────────────────────────────────────────────────────────────────────
  async function ntLike(id) {
    if (likedNotes.has(id)) return; // already liked
    try {
      const res  = await fetch(`${BACKEND}/api/notes/${id}/like`, { method: 'POST' });
      if (!res.ok) throw new Error();
      const data = await res.json();
      document.getElementById(`like-count-${id}`).textContent = data.likes;
      document.getElementById(`like-btn-${id}`).classList.add('liked');
      likedNotes.add(id);
    } catch {
      alert('Could not like this note. Try again.');
    }
  }

  // ── Delete ──────────────────────────────────────────────────────────────────
  async function ntDelete(id) {
    if (!confirm('Delete this note?')) return;
    try {
      const res = await fetch(`${BACKEND}/api/notes/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error();
      const card = document.getElementById(`nt-card-${id}`);
      if (card) card.remove();
      // Update count
      const remaining = document.querySelectorAll('.nt-card').length;
      document.getElementById('ntCount').textContent = remaining + ' note' + (remaining !== 1 ? 's' : '');
      if (remaining === 0) ntLoadFeed();
    } catch {
      alert('Could not delete. Try again.');
    }
  }

  // ── Helpers ─────────────────────────────────────────────────────────────────
  function ntFormatTime(iso) {
    try {
      const d    = new Date(iso);
      const now  = new Date();
      const diff = Math.floor((now - d) / 1000);
      if (diff < 60)   return 'just now';
      if (diff < 3600) return Math.floor(diff/60) + 'm ago';
      if (diff < 86400) return Math.floor(diff/3600) + 'h ago';
      return d.toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' });
    } catch { return ''; }
  }

  function ntEscape(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  // ── Init ────────────────────────────────────────────────────────────────────
  ntLoadFeed();
</script>