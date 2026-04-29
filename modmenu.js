(function () {
  if (document.getElementById('__modmenu__')) {
    document.getElementById('__modmenu__').style.display = 'flex';
    return;
  }

  // ── STYLES ──
  const style = document.createElement('style');
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Syne:wght@700;800&display=swap');
    #__modmenu__ *, #__modmenu__ *::before, #__modmenu__ *::after { box-sizing: border-box; margin: 0; padding: 0; font-family: 'JetBrains Mono', monospace; }
    #__modmenu__ {
      position: fixed; top: 40px; right: 40px; z-index: 2147483647;
      width: 520px; height: 500px;
      background: #0a0a0f; border: 1px solid #ffffff18; border-radius: 10px;
      display: flex; flex-direction: column; overflow: hidden;
      box-shadow: 0 24px 80px #000000cc, 0 0 0 1px #ffffff08;
      color: #e2e8f0; font-size: 12px;
      resize: both;
    }
    #__modmenu__ #mm-topbar {
      display: flex; align-items: center; gap: 8px; padding: 9px 12px;
      background: #111118; border-bottom: 1px solid #ffffff18;
      cursor: grab; user-select: none; flex-shrink: 0;
    }
    #__modmenu__ #mm-topbar:active { cursor: grabbing; }
    #__modmenu__ .mm-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; cursor: pointer; }
    #__modmenu__ .mm-dot-r { background: #ef4444; }
    #__modmenu__ .mm-dot-y { background: #f59e0b; }
    #__modmenu__ .mm-dot-g { background: #10b981; }
    #__modmenu__ #mm-title {
      font-family: 'Syne', sans-serif; font-size: 12px; font-weight: 800;
      color: #00e5ff; letter-spacing: .1em; flex: 1; text-align: center;
    }
    #__modmenu__ #mm-ver { font-size: 9px; color: #475569; }
    #__modmenu__ #mm-tabs {
      display: flex; background: #111118; border-bottom: 1px solid #ffffff18;
      flex-shrink: 0; overflow-x: auto;
    }
    #__modmenu__ #mm-tabs::-webkit-scrollbar { display: none; }
    #__modmenu__ .mm-tab {
      padding: 7px 12px; font-size: 10px; cursor: pointer; color: #64748b;
      border-bottom: 2px solid transparent; white-space: nowrap;
      transition: color .1s, background .1s; user-select: none;
    }
    #__modmenu__ .mm-tab:hover { color: #e2e8f0; background: #1a1a24; }
    #__modmenu__ .mm-tab.mm-active { color: #00e5ff; border-bottom-color: #00e5ff; background: #1a1a24; }
    #__modmenu__ #mm-panels { flex: 1; overflow: hidden; position: relative; }
    #__modmenu__ .mm-panel { display: none; flex-direction: column; height: 100%; overflow: hidden; }
    #__modmenu__ .mm-panel.mm-active { display: flex; }

    /* scrollbars */
    #__modmenu__ ::-webkit-scrollbar { width: 3px; height: 3px; }
    #__modmenu__ ::-webkit-scrollbar-thumb { background: #222230; border-radius: 2px; }

    /* console */
    #__modmenu__ #mm-cout {
      flex: 1; overflow-y: auto; padding: 8px 10px; font-size: 11px; line-height: 1.7;
    }
    #__modmenu__ .mm-log { display: flex; gap: 8px; padding: 1px 0; }
    #__modmenu__ .mm-ts { color: #475569; font-size: 9px; min-width: 48px; padding-top: 2px; }
    #__modmenu__ .mm-li { color: #10b981; } #__modmenu__ .mm-lw { color: #f59e0b; }
    #__modmenu__ .mm-le { color: #ef4444; } #__modmenu__ .mm-lx { color: #e2e8f0; }
    #__modmenu__ #mm-cinwrap {
      display: flex; align-items: center; gap: 6px; padding: 7px 10px;
      border-top: 1px solid #ffffff18; background: #111118; flex-shrink: 0;
    }
    #__modmenu__ #mm-cprompt { color: #00e5ff; font-weight: 600; font-size: 13px; }
    #__modmenu__ #mm-cinput {
      flex: 1; background: transparent; border: none; outline: none;
      color: #e2e8f0; font-family: 'JetBrains Mono', monospace; font-size: 11px;
    }
    #__modmenu__ #mm-runbtn {
      background: #00e5ff; color: #0a0a0f; padding: 3px 10px; border-radius: 4px;
      border: none; font-family: 'JetBrains Mono', monospace; font-size: 10px;
      font-weight: 600; cursor: pointer;
    }
    #__modmenu__ #mm-runbtn:hover { opacity: .8; }

    /* inspect */
    #__modmenu__ .mm-isubs {
      display: flex; border-bottom: 1px solid #ffffff18; flex-shrink: 0; overflow-x: auto;
    }
    #__modmenu__ .mm-isubs::-webkit-scrollbar { display: none; }
    #__modmenu__ .mm-isub {
      padding: 5px 10px; font-size: 10px; cursor: pointer; color: #64748b;
      border-bottom: 2px solid transparent; white-space: nowrap; user-select: none;
    }
    #__modmenu__ .mm-isub:hover { color: #e2e8f0; }
    #__modmenu__ .mm-isub.mm-active { color: #7c3aed; border-bottom-color: #7c3aed; }
    #__modmenu__ #mm-icontent {
      flex: 1; overflow-y: auto; padding: 8px 10px; font-size: 10.5px; line-height: 1.9;
    }
    #__modmenu__ .mm-prow { display: flex; gap: 8px; border-bottom: 1px solid #ffffff06; }
    #__modmenu__ .mm-pk { color: #a78bfa; min-width: 140px; font-size: 10px; }
    #__modmenu__ .mm-pv { color: #e2e8f0; font-size: 10px; word-break: break-all; }
    #__modmenu__ .mm-pv.s { color: #10b981; } #__modmenu__ .mm-pv.n { color: #f59e0b; }
    #__modmenu__ .mm-pv.b { color: #00e5ff; }

    /* commands */
    #__modmenu__ #mm-csearch {
      width: calc(100% - 16px); margin: 8px; background: #1a1a24;
      border: 1px solid #ffffff18; border-radius: 5px; padding: 6px 9px;
      color: #e2e8f0; font-family: 'JetBrains Mono', monospace; font-size: 10.5px; outline: none;
    }
    #__modmenu__ #mm-csearch:focus { border-color: #00e5ff; }
    #__modmenu__ #mm-clist { flex: 1; overflow-y: auto; padding: 0 8px 8px; }
    #__modmenu__ .mm-cmd {
      background: #1a1a24; border: 1px solid #ffffff18; border-radius: 6px;
      padding: 7px 9px; margin-bottom: 5px; cursor: pointer; transition: border-color .1s;
    }
    #__modmenu__ .mm-cmd:hover { border-color: #00e5ff; background: #222230; }
    #__modmenu__ .mm-cname { font-size: 11px; font-weight: 600; color: #00e5ff; }
    #__modmenu__ .mm-cdesc { font-size: 9.5px; color: #64748b; margin-top: 2px; }
    #__modmenu__ .mm-ctag {
      font-size: 9px; padding: 1px 6px; border-radius: 3px; display: inline-block; margin-top: 4px;
    }
    #__modmenu__ .t-dom { background: #00e5ff15; color: #00e5ff; }
    #__modmenu__ .t-nav { background: #7c3aed15; color: #a78bfa; }
    #__modmenu__ .t-net { background: #10b98115; color: #10b981; }
    #__modmenu__ .t-storage { background: #f59e0b15; color: #f59e0b; }
    #__modmenu__ .t-page { background: #ef444415; color: #fca5a5; }

    /* storage */
    #__modmenu__ .mm-stabs {
      display: flex; border-bottom: 1px solid #ffffff18; flex-shrink: 0;
    }
    #__modmenu__ .mm-stab {
      padding: 5px 10px; font-size: 10px; cursor: pointer; color: #64748b;
      border-bottom: 2px solid transparent; user-select: none;
    }
    #__modmenu__ .mm-stab:hover { color: #e2e8f0; }
    #__modmenu__ .mm-stab.mm-active { color: #f59e0b; border-bottom-color: #f59e0b; }
    #__modmenu__ #mm-scontent { flex: 1; overflow-y: auto; padding: 6px 8px; font-size: 10px; }
    #__modmenu__ .mm-srow {
      display: flex; gap: 6px; padding: 3px 4px; border-bottom: 1px solid #ffffff06; align-items: flex-start;
    }
    #__modmenu__ .mm-sk { color: #f59e0b; min-width: 100px; word-break: break-all; font-size: 9.5px; }
    #__modmenu__ .mm-sv { color: #e2e8f0; word-break: break-all; flex: 1; font-size: 9.5px; }
    #__modmenu__ .mm-sdel { color: #ef4444; cursor: pointer; padding: 0 3px; flex-shrink: 0; }
    #__modmenu__ #mm-sadd {
      display: flex; gap: 5px; padding: 6px 8px; border-top: 1px solid #ffffff18;
      background: #111118; flex-shrink: 0;
    }
    #__modmenu__ #mm-sadd input {
      flex: 1; background: #1a1a24; border: 1px solid #ffffff18; border-radius: 4px;
      padding: 4px 7px; color: #e2e8f0; font-family: 'JetBrains Mono', monospace;
      font-size: 10px; outline: none;
    }
    #__modmenu__ #mm-sadd input:focus { border-color: #f59e0b; }
    #__modmenu__ .mm-sbtn {
      background: #f59e0b; color: #0a0a0f; border: none; border-radius: 4px;
      padding: 4px 9px; font-family: 'JetBrains Mono', monospace; font-size: 10px;
      font-weight: 600; cursor: pointer;
    }

    /* page info */
    #__modmenu__ #mm-picontent { flex: 1; overflow-y: auto; padding: 8px 10px; }
    #__modmenu__ .mm-pisec { margin-bottom: 10px; }
    #__modmenu__ .mm-pititle {
      font-size: 9px; color: #64748b; text-transform: uppercase;
      letter-spacing: .08em; margin-bottom: 4px;
    }
    #__modmenu__ .mm-pirow { display: flex; gap: 8px; border-bottom: 1px solid #ffffff06; }
    #__modmenu__ .mm-pik { color: #a78bfa; min-width: 110px; font-size: 10px; }
    #__modmenu__ .mm-piv { color: #e2e8f0; font-size: 10px; word-break: break-all; }

    /* minimized state */
    #__modmenu__.mm-min {
      height: 34px !important; overflow: hidden; resize: none;
    }
  `;
  document.head.appendChild(style);

  // ── HTML ──
  const el = document.createElement('div');
  el.id = '__modmenu__';
  el.innerHTML = `
    <div id="mm-topbar">
      <div class="mm-dot mm-dot-r" title="close"></div>
      <div class="mm-dot mm-dot-y" title="minimize"></div>
      <div class="mm-dot mm-dot-g" title="reload inspect"></div>
      <div id="mm-title">// MOD MENU //</div>
      <div id="mm-ver">v1.0</div>
    </div>
    <div id="mm-tabs">
      <div class="mm-tab mm-active" data-tab="console">console</div>
      <div class="mm-tab" data-tab="inspect">inspect</div>
      <div class="mm-tab" data-tab="commands">commands</div>
      <div class="mm-tab" data-tab="storage">storage</div>
      <div class="mm-tab" data-tab="pageinfo">page info</div>
    </div>
    <div id="mm-panels">

      <div class="mm-panel mm-active" id="mm-panel-console">
        <div id="mm-cout"></div>
        <div id="mm-cinwrap">
          <span id="mm-cprompt">&gt;</span>
          <input id="mm-cinput" type="text" placeholder="js expression..." autocomplete="off" spellcheck="false" />
          <button id="mm-runbtn">run</button>
        </div>
      </div>

      <div class="mm-panel" id="mm-panel-inspect">
        <div class="mm-isubs">
          <div class="mm-isub mm-active" data-isub="window">window</div>
          <div class="mm-isub" data-isub="document">document</div>
          <div class="mm-isub" data-isub="navigator">navigator</div>
          <div class="mm-isub" data-isub="screen">screen</div>
        </div>
        <div id="mm-icontent"></div>
      </div>

      <div class="mm-panel" id="mm-panel-commands">
        <input id="mm-csearch" type="text" placeholder="search commands..." />
        <div id="mm-clist"></div>
      </div>

      <div class="mm-panel" id="mm-panel-storage">
        <div class="mm-stabs">
          <div class="mm-stab mm-active" data-stab="local">localStorage</div>
          <div class="mm-stab" data-stab="session">sessionStorage</div>
          <div class="mm-stab" data-stab="cookies">cookies</div>
        </div>
        <div id="mm-scontent"></div>
        <div id="mm-sadd">
          <input id="mm-skey" type="text" placeholder="key" />
          <input id="mm-sval" type="text" placeholder="value" />
          <button class="mm-sbtn" id="mm-saddbtn">set</button>
        </div>
      </div>

      <div class="mm-panel" id="mm-panel-pageinfo">
        <div id="mm-picontent"></div>
      </div>

    </div>
  `;
  document.body.appendChild(el);

  const $m = id => document.getElementById(id);

  // ── DRAGGING ──
  let dragging = false, dx = 0, dy = 0;
  $m('mm-topbar').addEventListener('mousedown', e => {
    if (e.target.classList.contains('mm-dot')) return;
    dragging = true;
    dx = e.clientX - el.offsetLeft;
    dy = e.clientY - el.offsetTop;
  });
  document.addEventListener('mousemove', e => {
    if (!dragging) return;
    el.style.left = (e.clientX - dx) + 'px';
    el.style.top = (e.clientY - dy) + 'px';
    el.style.right = 'auto';
  });
  document.addEventListener('mouseup', () => dragging = false);

  // ── DOT CONTROLS ──
  document.querySelector('#__modmenu__ .mm-dot-r').addEventListener('click', () => el.style.display = 'none');
  document.querySelector('#__modmenu__ .mm-dot-y').addEventListener('click', () => el.classList.toggle('mm-min'));
  document.querySelector('#__modmenu__ .mm-dot-g').addEventListener('click', () => renderInspect(curIsub));

  // ── TAB SWITCHING ──
  document.querySelectorAll('#__modmenu__ .mm-tab').forEach(t => {
    t.addEventListener('click', () => {
      document.querySelectorAll('#__modmenu__ .mm-tab').forEach(x => x.classList.remove('mm-active'));
      document.querySelectorAll('#__modmenu__ .mm-panel').forEach(x => x.classList.remove('mm-active'));
      t.classList.add('mm-active');
      $m('mm-panel-' + t.dataset.tab).classList.add('mm-active');
    });
  });

  // ── CONSOLE ──
  const cout = $m('mm-cout');
  const history = []; let histIdx = -1;

  function ts() {
    const n = new Date();
    return [n.getHours(), n.getMinutes(), n.getSeconds()].map(x => String(x).padStart(2, '0')).join(':');
  }

  function esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  function fmt(v) {
    if (v === null) return '<span style="color:#475569">null</span>';
    if (v === undefined) return '<span style="color:#475569">undefined</span>';
    if (typeof v === 'string') return `<span style="color:#10b981">"${esc(v.slice(0,200))}"</span>`;
    if (typeof v === 'number') return `<span style="color:#f59e0b">${v}</span>`;
    if (typeof v === 'boolean') return `<span style="color:#00e5ff">${v}</span>`;
    if (typeof v === 'function') return `<span style="color:#a78bfa">ƒ ${esc(v.name||'anonymous')}()</span>`;
    if (Array.isArray(v)) return `<span style="color:#475569">[Array(${v.length})]</span>`;
    if (typeof v === 'object') { try { return `<span style="color:#475569">${esc(JSON.stringify(v).slice(0,120))}</span>`; } catch { return '<span style="color:#475569">[Object]</span>'; } }
    return esc(String(v));
  }

  function log(msg, type = 'x') {
    const icon = type==='i'?'ℹ':type==='w'?'⚠':type==='e'?'✖':'›';
    const row = document.createElement('div');
    row.className = 'mm-log';
    row.innerHTML = `<span class="mm-ts">${ts()}</span><span class="mm-l${type}">${icon}</span><span style="flex:1;word-break:break-all">${esc(String(msg))}</span>`;
    cout.appendChild(row);
    cout.scrollTop = cout.scrollHeight;
  }

  function runCode(code) {
    if (!code.trim()) return;
    const row = document.createElement('div');
    row.className = 'mm-log';
    row.innerHTML = `<span class="mm-ts">${ts()}</span><span style="color:#00e5ff">›</span><span style="flex:1;word-break:break-all;color:#e2e8f0">${esc(code)}</span>`;
    cout.appendChild(row);
    try {
      const r = (0, eval)(code);
      const row2 = document.createElement('div');
      row2.className = 'mm-log';
      row2.innerHTML = `<span class="mm-ts"></span><span style="color:#475569">←</span><span style="flex:1">${fmt(r)}</span>`;
      cout.appendChild(row2);
    } catch (e) { log(e.message, 'e'); }
    cout.scrollTop = cout.scrollHeight;
  }

  $m('mm-runbtn').addEventListener('click', () => {
    const v = $m('mm-cinput').value;
    if (!v.trim()) return;
    history.unshift(v); histIdx = -1;
    runCode(v); $m('mm-cinput').value = '';
  });
  $m('mm-cinput').addEventListener('keydown', e => {
    if (e.key === 'Enter') { $m('mm-runbtn').click(); }
    if (e.key === 'ArrowUp') { e.preventDefault(); histIdx = Math.min(histIdx+1, history.length-1); $m('mm-cinput').value = history[histIdx]||''; }
    if (e.key === 'ArrowDown') { e.preventDefault(); histIdx = Math.max(histIdx-1, -1); $m('mm-cinput').value = histIdx<0?'':history[histIdx]; }
  });

  log('Mod Menu injected on: ' + location.hostname, 'i');
  log('Arrow ↑↓ for history. Try: document.title', 'i');

  // ── INSPECT ──
  const inspectData = {
    window: {
      'innerWidth': () => window.innerWidth, 'innerHeight': () => window.innerHeight,
      'scrollX': () => Math.round(window.scrollX), 'scrollY': () => Math.round(window.scrollY),
      'devicePixelRatio': () => window.devicePixelRatio, 'origin': () => location.origin,
      'pathname': () => location.pathname, 'search': () => location.search||'(none)',
      'hash': () => location.hash||'(none)', 'referrer': () => document.referrer||'(none)',
      'readyState': () => document.readyState, 'visibilityState': () => document.visibilityState,
    },
    document: {
      'title': () => document.title, 'URL': () => document.URL,
      'domain': () => document.domain||'(none)', 'contentType': () => document.contentType,
      'scripts': () => document.scripts.length, 'stylesheets': () => document.styleSheets.length,
      'images': () => document.images.length, 'links': () => document.links.length,
      'forms': () => document.forms.length,
      'cookies': () => document.cookie ? document.cookie.split(';').length + ' cookie(s)' : 'none',
      'totalElements': () => document.querySelectorAll('*').length,
    },
    navigator: {
      'userAgent': () => navigator.userAgent, 'platform': () => navigator.platform,
      'language': () => navigator.language, 'onLine': () => navigator.onLine,
      'cookieEnabled': () => navigator.cookieEnabled,
      'hardwareConcurrency': () => navigator.hardwareConcurrency,
      'maxTouchPoints': () => navigator.maxTouchPoints,
      'vendor': () => navigator.vendor||'(none)',
    },
    screen: {
      'width': () => screen.width, 'height': () => screen.height,
      'availWidth': () => screen.availWidth, 'availHeight': () => screen.availHeight,
      'colorDepth': () => screen.colorDepth + 'bit',
      'orientation': () => screen.orientation ? screen.orientation.type : '(none)',
    }
  };

  let curIsub = 'window';

  function renderInspect(sub) {
    const c = $m('mm-icontent'); c.innerHTML = '';
    for (const [k, fn] of Object.entries(inspectData[sub])) {
      let v; try { v = fn(); } catch { v = '(error)'; }
      const cls = typeof v === 'number' ? 'n' : typeof v === 'boolean' ? 'b' : '';
      const row = document.createElement('div'); row.className = 'mm-prow';
      row.innerHTML = `<span class="mm-pk">${k}</span><span class="mm-pv ${cls}">${esc(String(v))}</span>`;
      c.appendChild(row);
    }
  }

  document.querySelectorAll('#__modmenu__ .mm-isub').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#__modmenu__ .mm-isub').forEach(x => x.classList.remove('mm-active'));
      btn.classList.add('mm-active'); curIsub = btn.dataset.isub; renderInspect(curIsub);
    });
  });
  renderInspect('window');

  // ── COMMANDS ──
  const commands = [
    { name: 'scroll to top', desc: 'Smooth scroll to top of page', tag: 'dom', code: `window.scrollTo({top:0,behavior:'smooth'})` },
    { name: 'scroll to bottom', desc: 'Smooth scroll to bottom of page', tag: 'dom', code: `window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'})` },
    { name: 'highlight all links', desc: 'Outline every <a> tag in cyan', tag: 'dom', code: `document.querySelectorAll('a').forEach(a=>a.style.outline='2px solid #00e5ff')` },
    { name: 'remove all images', desc: 'Remove every img element from the page', tag: 'dom', code: `document.querySelectorAll('img').forEach(i=>i.remove())` },
    { name: 'make page editable', desc: 'Turn the whole page into a live editor', tag: 'dom', code: `document.body.contentEditable='true'` },
    { name: 'count all elements', desc: 'Alert total number of DOM elements', tag: 'dom', code: `alert('Total DOM elements: '+document.querySelectorAll('*').length)` },
    { name: 'show all hidden elements', desc: 'Force all hidden elements visible', tag: 'dom', code: `document.querySelectorAll('*').forEach(e=>{if(getComputedStyle(e).display==='none')e.style.setProperty('display','block','important')})` },
    { name: 'copy page URL', desc: 'Copy current URL to clipboard', tag: 'nav', code: `navigator.clipboard.writeText(location.href).then(()=>alert('Copied!'))` },
    { name: 'open blank tab', desc: 'Open a clean about:blank tab', tag: 'nav', code: `window.open('about:blank','_blank')` },
    { name: 'hard reload', desc: 'Force reload ignoring cache', tag: 'nav', code: `location.reload(true)` },
    { name: 'go back', desc: 'Navigate to previous history entry', tag: 'nav', code: `history.back()` },
    { name: 'go forward', desc: 'Navigate forward in history', tag: 'nav', code: `history.forward()` },
    { name: 'log all fetch calls', desc: 'Monkey-patch fetch to log every request', tag: 'net', code: `const _f=window.fetch;window.fetch=(...a)=>{console.log('[fetch]',a[0]);return _f(...a)};alert('fetch patched — check browser console')` },
    { name: 'show all cookies', desc: 'Alert all cookies as text', tag: 'net', code: `alert(document.cookie||'no cookies')` },
    { name: 'clear localStorage', desc: 'Wipe all localStorage keys', tag: 'storage', code: `localStorage.clear();alert('localStorage cleared')` },
    { name: 'clear sessionStorage', desc: 'Wipe all sessionStorage keys', tag: 'storage', code: `sessionStorage.clear();alert('sessionStorage cleared')` },
    { name: 'clear all cookies', desc: 'Expire every cookie on this domain', tag: 'storage', code: `document.cookie.split(';').forEach(c=>{document.cookie=c.split('=')[0]+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/'});alert('cookies cleared')` },
    { name: 'dark mode toggle', desc: 'Invert page colors for quick dark mode', tag: 'page', code: `document.body.style.filter=document.body.style.filter?'':'invert(1) hue-rotate(180deg)'` },
    { name: 'zoom 150%', desc: 'Scale the page up to 150%', tag: 'page', code: `document.body.style.zoom='1.5'` },
    { name: 'zoom reset', desc: 'Reset page zoom to 100%', tag: 'page', code: `document.body.style.zoom='1'` },
    { name: 'print page', desc: 'Open browser print dialog', tag: 'page', code: `window.print()` },
    { name: 'disable all CSS', desc: 'Remove all stylesheets from the page', tag: 'page', code: `document.querySelectorAll('link[rel="stylesheet"],style').forEach(s=>s.remove())` },
    { name: 'rainbow background', desc: 'Cycle through hue-rotate for fun', tag: 'page', code: `let h=0;setInterval(()=>{document.body.style.filter='hue-rotate('+h+'deg)';h+=2},30)` },
  ];

  const tagCls = { dom: 't-dom', nav: 't-nav', net: 't-net', storage: 't-storage', page: 't-page' };

  function renderCommands(filter = '') {
    const list = $m('mm-clist'); list.innerHTML = '';
    commands.filter(c => (c.name+c.desc+c.tag).toLowerCase().includes(filter.toLowerCase())).forEach(c => {
      const el2 = document.createElement('div'); el2.className = 'mm-cmd';
      el2.innerHTML = `<div class="mm-cname">${c.name}</div><div class="mm-cdesc">${c.desc}</div><span class="mm-ctag ${tagCls[c.tag]}">#${c.tag}</span>`;
      el2.addEventListener('click', () => {
        document.querySelectorAll('#__modmenu__ .mm-tab').forEach(x => x.classList.remove('mm-active'));
        document.querySelectorAll('#__modmenu__ .mm-panel').forEach(x => x.classList.remove('mm-active'));
        document.querySelector('#__modmenu__ [data-tab="console"]').classList.add('mm-active');
        $m('mm-panel-console').classList.add('mm-active');
        runCode(c.code);
      });
      list.appendChild(el2);
    });
  }

  renderCommands();
  $m('mm-csearch').addEventListener('input', e => renderCommands(e.target.value));

  // ── STORAGE ──
  let curStab = 'local';

  function renderStorage(tab) {
    const c = $m('mm-scontent'); c.innerHTML = '';
    if (tab === 'local' || tab === 'session') {
      const store = tab === 'local' ? localStorage : sessionStorage;
      if (!store.length) { c.innerHTML = '<div style="color:#475569;padding:10px;font-size:10px">(empty)</div>'; return; }
      for (let i = 0; i < store.length; i++) {
        const k = store.key(i), v = store.getItem(k);
        const row = document.createElement('div'); row.className = 'mm-srow';
        row.innerHTML = `<span class="mm-sk">${esc(k)}</span><span class="mm-sv">${esc(v)}</span><span class="mm-sdel" data-k="${esc(k)}" data-st="${tab}">✕</span>`;
        c.appendChild(row);
      }
    } else {
      const cookies = document.cookie.split(';').map(x => x.trim()).filter(Boolean);
      if (!cookies.length) { c.innerHTML = '<div style="color:#475569;padding:10px;font-size:10px">(no cookies)</div>'; return; }
      cookies.forEach(cookie => {
        const [k, ...rest] = cookie.split('=');
        const row = document.createElement('div'); row.className = 'mm-srow';
        row.innerHTML = `<span class="mm-sk">${esc(k)}</span><span class="mm-sv">${esc(rest.join('='))}</span>`;
        c.appendChild(row);
      });
    }
    c.querySelectorAll('.mm-sdel').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.dataset.st === 'local') localStorage.removeItem(btn.dataset.k);
        else sessionStorage.removeItem(btn.dataset.k);
        renderStorage(curStab);
      });
    });
  }

  document.querySelectorAll('#__modmenu__ .mm-stab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#__modmenu__ .mm-stab').forEach(x => x.classList.remove('mm-active'));
      btn.classList.add('mm-active'); curStab = btn.dataset.stab; renderStorage(curStab);
    });
  });
  renderStorage('local');

  $m('mm-saddbtn').addEventListener('click', () => {
    const k = $m('mm-skey').value.trim(), v = $m('mm-sval').value.trim();
    if (!k) return;
    if (curStab === 'local') localStorage.setItem(k, v);
    else if (curStab === 'session') sessionStorage.setItem(k, v);
    $m('mm-skey').value = ''; $m('mm-sval').value = '';
    renderStorage(curStab);
  });

  // ── PAGE INFO ──
  function renderPageInfo() {
    const c = $m('mm-picontent'); c.innerHTML = '';
    const perf = performance.timing || {};
    const load = perf.loadEventEnd && perf.navigationStart ? perf.loadEventEnd - perf.navigationStart : 0;
    const sections = [
      { title: 'location', rows: [['href', location.href], ['origin', location.origin], ['pathname', location.pathname], ['search', location.search||'(none)'], ['hash', location.hash||'(none)'], ['protocol', location.protocol]] },
      { title: 'document', rows: [['title', document.title], ['domain', document.domain||'(none)'], ['charset', document.characterSet], ['readyState', document.readyState], ['elements', document.querySelectorAll('*').length], ['scripts', document.scripts.length], ['stylesheets', document.styleSheets.length], ['images', document.images.length], ['links', document.links.length]] },
      { title: 'performance', rows: [['load time', load ? load + 'ms' : 'N/A'], ['memory', performance.memory ? Math.round(performance.memory.usedJSHeapSize / 1048576) + 'MB' : 'N/A'], ['resources', performance.getEntriesByType ? performance.getEntriesByType('resource').length : 'N/A']] },
      { title: 'viewport', rows: [['innerSize', window.innerWidth + ' × ' + window.innerHeight], ['devicePixelRatio', window.devicePixelRatio], ['scrollPos', Math.round(scrollX) + ', ' + Math.round(scrollY)], ['screen', screen.width + ' × ' + screen.height]] },
    ];
    sections.forEach(sec => {
      const wrap = document.createElement('div'); wrap.className = 'mm-pisec';
      const hd = document.createElement('div'); hd.className = 'mm-pititle'; hd.textContent = sec.title;
      wrap.appendChild(hd);
      sec.rows.forEach(([k, v]) => {
        const row = document.createElement('div'); row.className = 'mm-pirow';
        row.innerHTML = `<span class="mm-pik">${k}</span><span class="mm-piv">${esc(String(v))}</span>`;
        wrap.appendChild(row);
      });
      c.appendChild(wrap);
    });
  }
  renderPageInfo();

})();
