javascript:(function(){if(document.getElementById('__modmenu__')){document.getElementById('__modmenu__').style.display='flex';return;}const style=document.createElement('style');style.textContent=`
    @import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400;500;600&family=Geist:wght@300;400;500;600&display=swap');
    #__modmenu__ *, #__modmenu__ *::before, #__modmenu__ *::after { box-sizing: border-box; margin: 0; padding: 0; }
    #__modmenu__ {
      position: fixed; top: 32px; right: 32px; z-index: 2147483647;
      width: 480px; height: 540px;
      background: rgba(12,12,16,0.97);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 14px;
      display: flex; flex-direction: column; overflow: hidden;
      box-shadow: 0 32px 96px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06);
      color: #e2e8f0; font-family: 'Geist', sans-serif; font-size: 13px;
      backdrop-filter: blur(20px); resize: both;
    }
    #__modmenu__ #mm-topbar {
      display: flex; align-items: center; gap: 8px; padding: 12px 16px;
      cursor: grab; user-select: none; flex-shrink: 0;
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    #__modmenu__ #mm-topbar:active { cursor: grabbing; }
    #__modmenu__ .mm-dot { width: 11px; height: 11px; border-radius: 50%; flex-shrink: 0; cursor: pointer; transition: opacity .15s; }
    #__modmenu__ .mm-dot:hover { opacity: 0.8; }
    #__modmenu__ .mm-dot-r { background: #ff5f57; }
    #__modmenu__ .mm-dot-y { background: #ffbd2e; }
    #__modmenu__ .mm-dot-g { background: #28c840; }
    #__modmenu__ #mm-title {
      font-family: 'Geist Mono', monospace; font-size: 11px; font-weight: 500;
      color: rgba(255,255,255,0.35); letter-spacing: .12em; flex: 1; text-align: center;
      text-transform: uppercase;
    }
    #__modmenu__ #mm-ver { font-family: 'Geist Mono', monospace; font-size: 10px; color: rgba(255,255,255,0.18); }

    #__modmenu__ #mm-tabs {
      display: flex; background: transparent; flex-shrink: 0;
      padding: 0 8px; gap: 2px;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      overflow-x: auto;
    }
    #__modmenu__ #mm-tabs::-webkit-scrollbar { display: none; }
    #__modmenu__ .mm-tab {
      padding: 8px 10px; font-size: 11px; font-weight: 400; cursor: pointer;
      color: rgba(255,255,255,0.3); border-bottom: 2px solid transparent;
      white-space: nowrap; transition: color .15s; user-select: none;
      letter-spacing: .01em;
    }
    #__modmenu__ .mm-tab:hover { color: rgba(255,255,255,0.65); }
    #__modmenu__ .mm-tab.mm-active { color: #fff; border-bottom-color: rgba(255,255,255,0.6); }
    #__modmenu__ .mm-tab.mm-blooket { }
    #__modmenu__ .mm-tab.mm-blooket.mm-active { color: #c084fc; border-bottom-color: #c084fc; }
    #__modmenu__ .mm-tab.mm-games.mm-active { color: #4ade80; border-bottom-color: #4ade80; }
    #__modmenu__ .mm-tab.mm-calc.mm-active { color: #fb923c; border-bottom-color: #fb923c; }

    #__modmenu__ #mm-panels { flex: 1; overflow: hidden; }
    #__modmenu__ .mm-panel { display: none; flex-direction: column; height: 100%; overflow: hidden; }
    #__modmenu__ .mm-panel.mm-active { display: flex; }
    #__modmenu__ ::-webkit-scrollbar { width: 3px; }
    #__modmenu__ ::-webkit-scrollbar-track { background: transparent; }
    #__modmenu__ ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 2px; }

    /* Console */
    #__modmenu__ #mm-cout { flex: 1; overflow-y: auto; padding: 10px 14px; font-size: 11px; line-height: 1.8; font-family: 'Geist Mono', monospace; }
    #__modmenu__ .mm-log { display: flex; gap: 10px; padding: 1px 0; }
    #__modmenu__ .mm-ts { color: rgba(255,255,255,0.2); font-size: 9px; min-width: 48px; padding-top: 2px; }
    #__modmenu__ .mm-li { color: #4ade80; } #__modmenu__ .mm-lw { color: #fb923c; } #__modmenu__ .mm-le { color: #f87171; }
    #__modmenu__ #mm-cinwrap {
      display: flex; align-items: center; gap: 8px; padding: 10px 14px;
      border-top: 1px solid rgba(255,255,255,0.06); background: rgba(255,255,255,0.02); flex-shrink: 0;
    }
    #__modmenu__ #mm-cprompt { color: rgba(255,255,255,0.25); font-family: 'Geist Mono', monospace; font-size: 13px; }
    #__modmenu__ #mm-cinput {
      flex: 1; background: transparent; border: none; outline: none; color: #e2e8f0;
      font-family: 'Geist Mono', monospace; font-size: 11.5px;
    }
    #__modmenu__ #mm-cinput::placeholder { color: rgba(255,255,255,0.18); }
    #__modmenu__ #mm-runbtn {
      background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.6);
      padding: 4px 12px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.1);
      font-family: 'Geist Mono', monospace; font-size: 10px; font-weight: 500; cursor: pointer;
      transition: all .15s;
    }
    #__modmenu__ #mm-runbtn:hover { background: rgba(255,255,255,0.13); color: #fff; }

    /* Inspect */
    #__modmenu__ .mm-isubs { display: flex; border-bottom: 1px solid rgba(255,255,255,0.06); flex-shrink: 0; padding: 0 8px; gap: 2px; }
    #__modmenu__ .mm-isub { padding: 7px 10px; font-size: 11px; cursor: pointer; color: rgba(255,255,255,0.3); border-bottom: 2px solid transparent; user-select: none; transition: color .15s; }
    #__modmenu__ .mm-isub:hover { color: rgba(255,255,255,0.6); }
    #__modmenu__ .mm-isub.mm-active { color: #fff; border-bottom-color: rgba(255,255,255,0.5); }
    #__modmenu__ #mm-icontent { flex: 1; overflow-y: auto; padding: 8px 14px; }
    #__modmenu__ .mm-prow { display: flex; gap: 10px; padding: 4px 0; border-bottom: 1px solid rgba(255,255,255,0.04); }
    #__modmenu__ .mm-pk { color: rgba(255,255,255,0.35); min-width: 140px; font-size: 10.5px; font-family: 'Geist Mono', monospace; }
    #__modmenu__ .mm-pv { color: #e2e8f0; font-size: 10.5px; word-break: break-all; font-family: 'Geist Mono', monospace; }
    #__modmenu__ .mm-pv.n { color: #fb923c; } #__modmenu__ .mm-pv.b { color: #60a5fa; }

    /* Commands */
    #__modmenu__ #mm-csearch {
      width: calc(100% - 28px); margin: 10px 14px 6px;
      background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
      border-radius: 8px; padding: 8px 12px; color: #e2e8f0;
      font-family: 'Geist', sans-serif; font-size: 11.5px; outline: none; transition: border-color .15s;
    }
    #__modmenu__ #mm-csearch:focus { border-color: rgba(255,255,255,0.2); }
    #__modmenu__ #mm-csearch::placeholder { color: rgba(255,255,255,0.2); }
    #__modmenu__ #mm-clist { flex: 1; overflow-y: auto; padding: 0 10px 10px; }
    #__modmenu__ .mm-cmd {
      background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
      border-radius: 8px; padding: 9px 12px; margin-bottom: 5px; cursor: pointer;
      transition: all .15s;
    }
    #__modmenu__ .mm-cmd:hover { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.14); }
    #__modmenu__ .mm-cmd.mm-cmd-on { border-color: rgba(74,222,128,0.4); background: rgba(74,222,128,0.06); }
    #__modmenu__ .mm-cname { font-size: 12px; font-weight: 500; color: #e2e8f0; }
    #__modmenu__ .mm-cdesc { font-size: 10.5px; color: rgba(255,255,255,0.3); margin-top: 2px; }
    #__modmenu__ .mm-ctag {
      font-size: 9.5px; padding: 2px 7px; border-radius: 4px;
      display: inline-block; margin-top: 5px; font-family: 'Geist Mono', monospace;
    }
    #__modmenu__ .t-dom{background:rgba(96,165,250,0.1);color:#60a5fa}
    #__modmenu__ .t-nav{background:rgba(192,132,252,0.1);color:#c084fc}
    #__modmenu__ .t-net{background:rgba(74,222,128,0.1);color:#4ade80}
    #__modmenu__ .t-storage{background:rgba(251,146,60,0.1);color:#fb923c}
    #__modmenu__ .t-page{background:rgba(248,113,113,0.1);color:#f87171}
    #__modmenu__ .t-edit{background:rgba(34,211,238,0.1);color:#22d3ee}

    /* Storage */
    #__modmenu__ .mm-stabs { display: flex; border-bottom: 1px solid rgba(255,255,255,0.06); flex-shrink: 0; padding: 0 8px; gap: 2px; }
    #__modmenu__ .mm-stab { padding: 7px 10px; font-size: 11px; cursor: pointer; color: rgba(255,255,255,0.3); border-bottom: 2px solid transparent; user-select: none; transition: color .15s; }
    #__modmenu__ .mm-stab:hover { color: rgba(255,255,255,0.6); }
    #__modmenu__ .mm-stab.mm-active { color: #fb923c; border-bottom-color: #fb923c; }
    #__modmenu__ #mm-scontent { flex: 1; overflow-y: auto; padding: 8px 14px; }
    #__modmenu__ .mm-srow { display: flex; gap: 8px; padding: 4px 0; border-bottom: 1px solid rgba(255,255,255,0.04); align-items: flex-start; }
    #__modmenu__ .mm-sk { color: #fb923c; min-width: 100px; word-break: break-all; font-size: 10px; font-family: 'Geist Mono', monospace; }
    #__modmenu__ .mm-sv { color: rgba(255,255,255,0.6); word-break: break-all; flex: 1; font-size: 10px; font-family: 'Geist Mono', monospace; }
    #__modmenu__ .mm-sdel { color: rgba(248,113,113,0.5); cursor: pointer; padding: 0 4px; flex-shrink: 0; font-size: 11px; transition: color .15s; }
    #__modmenu__ .mm-sdel:hover { color: #f87171; }
    #__modmenu__ #mm-sadd { display: flex; gap: 6px; padding: 8px 12px; border-top: 1px solid rgba(255,255,255,0.06); background: rgba(255,255,255,0.02); flex-shrink: 0; }
    #__modmenu__ #mm-sadd input {
      flex: 1; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
      border-radius: 6px; padding: 5px 9px; color: #e2e8f0;
      font-family: 'Geist Mono', monospace; font-size: 10.5px; outline: none; transition: border-color .15s;
    }
    #__modmenu__ #mm-sadd input:focus { border-color: rgba(255,255,255,0.18); }
    #__modmenu__ .mm-sbtn {
      background: rgba(251,146,60,0.15); color: #fb923c; border: 1px solid rgba(251,146,60,0.25);
      border-radius: 6px; padding: 5px 12px; font-family: 'Geist', sans-serif;
      font-size: 11px; font-weight: 500; cursor: pointer; white-space: nowrap; transition: all .15s;
    }
    #__modmenu__ .mm-sbtn:hover { background: rgba(251,146,60,0.25); }

    /* Page Info */
    #__modmenu__ #mm-picontent { flex: 1; overflow-y: auto; padding: 10px 14px; }
    #__modmenu__ .mm-pisec { margin-bottom: 14px; }
    #__modmenu__ .mm-pititle { font-size: 9.5px; color: rgba(255,255,255,0.2); text-transform: uppercase; letter-spacing: .1em; margin-bottom: 5px; font-weight: 600; }
    #__modmenu__ .mm-pirow { display: flex; gap: 10px; padding: 3px 0; border-bottom: 1px solid rgba(255,255,255,0.04); }
    #__modmenu__ .mm-pik { color: rgba(255,255,255,0.3); min-width: 110px; font-size: 10.5px; font-family: 'Geist Mono', monospace; }
    #__modmenu__ .mm-piv { color: #e2e8f0; font-size: 10.5px; word-break: break-all; font-family: 'Geist Mono', monospace; }

    /* Blooket */
    #__modmenu__ #mm-blooket-content { flex: 1; overflow-y: auto; padding: 10px 12px; }
    #__modmenu__ .bl-section { margin-bottom: 12px; }
    #__modmenu__ .bl-title { font-size: 9.5px; color: rgba(192,132,252,0.5); text-transform: uppercase; letter-spacing: .1em; margin-bottom: 6px; padding: 0 2px; font-weight: 600; }
    #__modmenu__ .bl-btn {
      display: flex; align-items: center; gap: 10px;
      background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
      border-radius: 8px; padding: 9px 12px; margin-bottom: 5px; cursor: pointer;
      transition: all .15s; width: 100%; text-align: left;
    }
    #__modmenu__ .bl-btn:hover { background: rgba(192,132,252,0.07); border-color: rgba(192,132,252,0.25); }
    #__modmenu__ .bl-icon { font-size: 15px; width: 22px; text-align: center; flex-shrink: 0; }
    #__modmenu__ .bl-info { flex: 1; }
    #__modmenu__ .bl-name { font-size: 12px; font-weight: 500; color: #e2e8f0; }
    #__modmenu__ .bl-desc { font-size: 10px; color: rgba(255,255,255,0.3); margin-top: 2px; }
    #__modmenu__ .bl-badge { font-size: 9.5px; padding: 2px 8px; border-radius: 4px; background: rgba(192,132,252,0.1); color: #c084fc; flex-shrink: 0; font-family: 'Geist Mono', monospace; }
    #__modmenu__ .bl-badge.danger { background: rgba(248,113,113,0.1); color: #f87171; }
    #__modmenu__ .bl-badge.safe { background: rgba(74,222,128,0.1); color: #4ade80; }
    #__modmenu__ .bl-input-row { display: flex; gap: 7px; margin-bottom: 6px; }
    #__modmenu__ .bl-input {
      flex: 1; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
      border-radius: 7px; padding: 7px 11px; color: #e2e8f0;
      font-family: 'Geist Mono', monospace; font-size: 11px; outline: none; transition: border-color .15s;
    }
    #__modmenu__ .bl-input:focus { border-color: rgba(192,132,252,0.4); }
    #__modmenu__ .bl-go {
      background: rgba(192,132,252,0.15); color: #c084fc; border: 1px solid rgba(192,132,252,0.25);
      border-radius: 7px; padding: 7px 14px; font-family: 'Geist', sans-serif;
      font-size: 11px; font-weight: 500; cursor: pointer; white-space: nowrap; transition: all .15s;
    }
    #__modmenu__ .bl-go:hover { background: rgba(192,132,252,0.25); }
    #__modmenu__ #bl-status {
      font-size: 11px; padding: 7px 11px; border-radius: 7px; margin-bottom: 8px; display: none;
      font-family: 'Geist Mono', monospace;
    }
    #__modmenu__ #bl-status.ok { background: rgba(74,222,128,0.08); color: #4ade80; border: 1px solid rgba(74,222,128,0.2); display: block; }
    #__modmenu__ #bl-status.err { background: rgba(248,113,113,0.08); color: #f87171; border: 1px solid rgba(248,113,113,0.2); display: block; }
    #__modmenu__ #bl-status.warn { background: rgba(251,146,60,0.08); color: #fb923c; border: 1px solid rgba(251,146,60,0.2); display: block; }

    /* Games */
    #__modmenu__ #mm-panel-games { background: #0a0a0e; }
    #__modmenu__ .gm-bar { display: flex; gap: 5px; padding: 8px 10px; border-bottom: 1px solid rgba(255,255,255,0.06); flex-shrink: 0; }
    #__modmenu__ .gm-pick {
      padding: 5px 12px; font-size: 10.5px; cursor: pointer; color: rgba(255,255,255,0.3);
      background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07);
      border-radius: 6px; font-family: 'Geist', sans-serif; transition: all .15s;
    }
    #__modmenu__ .gm-pick:hover { color: rgba(255,255,255,0.6); }
    #__modmenu__ .gm-pick.gm-on { color: #4ade80; border-color: rgba(74,222,128,0.35); background: rgba(74,222,128,0.08); }
    #__modmenu__ #mm-gamecanvas { display: block; flex: 1; width: 100%; }
    #__modmenu__ .gm-hud { display: flex; align-items: center; gap: 8px; padding: 5px 12px; border-top: 1px solid rgba(255,255,255,0.06); font-size: 10.5px; color: rgba(255,255,255,0.3); flex-shrink: 0; font-family: 'Geist Mono', monospace; }
    #__modmenu__ .gm-hud span { color: #4ade80; font-weight: 600; }

    /* CALCULATOR */
    #__modmenu__ #mm-panel-calc { background: #0c0c10; }
    #__modmenu__ #mm-calc-display {
      padding: 16px 20px 10px; flex-shrink: 0;
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    #__modmenu__ #mm-calc-expr {
      font-family: 'Geist Mono', monospace; font-size: 11px;
      color: rgba(255,255,255,0.25); min-height: 18px; text-align: right;
      word-break: break-all; letter-spacing: .02em;
    }
    #__modmenu__ #mm-calc-val {
      font-family: 'Geist Mono', monospace; font-size: 32px; font-weight: 300;
      color: #fff; text-align: right; line-height: 1.1; margin-top: 4px;
      word-break: break-all; letter-spacing: -.02em;
    }
    #__modmenu__ #mm-calc-buttons {
      flex: 1; display: grid; grid-template-columns: repeat(4, 1fr);
      gap: 6px; padding: 10px 10px 12px;
    }
    #__modmenu__ .cc {
      border: none; border-radius: 8px; cursor: pointer;
      font-family: 'Geist', sans-serif; font-size: 14px; font-weight: 400;
      transition: all .1s; outline: none; padding: 0;
      display: flex; align-items: center; justify-content: center;
    }
    #__modmenu__ .cc:active { transform: scale(0.94); }
    #__modmenu__ .cc-num { background: rgba(255,255,255,0.07); color: #e2e8f0; }
    #__modmenu__ .cc-num:hover { background: rgba(255,255,255,0.12); }
    #__modmenu__ .cc-op { background: rgba(251,146,60,0.15); color: #fb923c; font-size: 16px; font-weight: 400; }
    #__modmenu__ .cc-op:hover { background: rgba(251,146,60,0.25); }
    #__modmenu__ .cc-fn { background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.5); font-size: 12px; }
    #__modmenu__ .cc-fn:hover { background: rgba(255,255,255,0.09); color: rgba(255,255,255,0.8); }
    #__modmenu__ .cc-eq { background: #fb923c; color: #0c0c10; font-size: 18px; font-weight: 500; }
    #__modmenu__ .cc-eq:hover { background: #f97316; }
    #__modmenu__ .cc-zero { grid-column: span 2; }

    /* Minimize */
    #__modmenu__.mm-min { height: 44px !important; overflow: hidden; resize: none; }

    /* Edit anything highlight */
    .__mm_editable_hover__ { outline: 2px dashed rgba(34,211,238,0.5) !important; outline-offset: 2px !important; cursor: text !important; }
    .__mm_editable_active__ { outline: 2px solid #22d3ee !important; outline-offset: 2px !important; background: rgba(34,211,238,0.05) !important; }
  `;
  document.head.appendChild(style);

  const el = document.createElement('div');
  el.id = '__modmenu__';
  el.innerHTML = `
    <div id="mm-topbar">
      <div class="mm-dot mm-dot-r"></div>
      <div class="mm-dot mm-dot-y"></div>
      <div class="mm-dot mm-dot-g"></div>
      <div id="mm-title">mod menu</div>
      <div id="mm-ver">v3.0</div>
    </div>
    <div id="mm-tabs">
      <div class="mm-tab mm-active" data-tab="console">console</div>
      <div class="mm-tab" data-tab="inspect">inspect</div>
      <div class="mm-tab" data-tab="commands">commands</div>
      <div class="mm-tab" data-tab="storage">storage</div>
      <div class="mm-tab" data-tab="pageinfo">page info</div>
      <div class="mm-tab mm-blooket" data-tab="blooket">blooket</div>
      <div class="mm-tab mm-calc" data-tab="calc">calc</div>
      <div class="mm-tab mm-games" data-tab="games">games</div>
    </div>
    <div id="mm-panels">

      <div class="mm-panel mm-active" id="mm-panel-console">
        <div id="mm-cout"></div>
        <div id="mm-cinwrap">
          <span id="mm-cprompt">&rsaquo;</span>
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

      <div class="mm-panel" id="mm-panel-pageinfo"><div id="mm-picontent"></div></div>

      <div class="mm-panel" id="mm-panel-blooket">
        <div id="mm-blooket-content">
          <div id="bl-status"></div>
          <div class="bl-section">
            <div class="bl-title">tokens &amp; coins</div>
            <div class="bl-input-row">
              <input class="bl-input" id="bl-coin-amt" type="number" value="500" min="1" max="99999" />
              <button class="bl-go" id="bl-add-coins">Add Tokens</button>
            </div>
            <button class="bl-btn" id="bl-max-coins"><span class="bl-icon">💰</span><div class="bl-info"><div class="bl-name">max tokens</div><div class="bl-desc">Set tokens to 99,999</div></div><span class="bl-badge">coins</span></button>
          </div>
          <div class="bl-section">
            <div class="bl-title">game cheats</div>
            <button class="bl-btn" id="bl-auto-answer"><span class="bl-icon">⚡</span><div class="bl-info"><div class="bl-name">auto answer</div><div class="bl-desc">Automatically select correct answers</div></div><span class="bl-badge safe" id="bl-aa-badge">toggle</span></button>
            <button class="bl-btn" id="bl-instant-answer"><span class="bl-icon">🎯</span><div class="bl-info"><div class="bl-name">instant answer</div><div class="bl-desc">Click correct answer right now</div></div><span class="bl-badge">once</span></button>
            <button class="bl-btn" id="bl-speed"><span class="bl-icon">🚀</span><div class="bl-info"><div class="bl-name">speed hack</div><div class="bl-desc">Accelerate game timers 5x</div></div><span class="bl-badge" id="bl-sp-badge">toggle</span></button>
          </div>
          <div class="bl-section">
            <div class="bl-title">blooks</div>
            <button class="bl-btn" id="bl-unlock-blooks"><span class="bl-icon">🎴</span><div class="bl-info"><div class="bl-name">unlock all blooks</div><div class="bl-desc">Attempt to unlock every blook</div></div><span class="bl-badge danger">risky</span></button>
            <button class="bl-btn" id="bl-open-box"><span class="bl-icon">📦</span><div class="bl-info"><div class="bl-name">auto open boxes</div><div class="bl-desc">Rapidly open boxes — click to stop</div></div><span class="bl-badge" id="bl-box-badge">boxes</span></button>
          </div>
          <div class="bl-section">
            <div class="bl-title">extras</div>
            <button class="bl-btn" id="bl-get-answers"><span class="bl-icon">📋</span><div class="bl-info"><div class="bl-name">show all answers</div><div class="bl-desc">Dump Q&amp;A to console tab</div></div><span class="bl-badge safe">safe</span></button>
            <button class="bl-btn" id="bl-ghost"><span class="bl-icon">👻</span><div class="bl-info"><div class="bl-name">ghost mode</div><div class="bl-desc">Hide your name from leaderboard</div></div><span class="bl-badge" id="bl-gh-badge">stealth</span></button>
          </div>
        </div>
      </div>

      <div class="mm-panel" id="mm-panel-calc">
        <div id="mm-calc-display">
          <div id="mm-calc-expr"></div>
          <div id="mm-calc-val">0</div>
        </div>
        <div id="mm-calc-buttons">
          <button class="cc cc-fn" data-cc="AC">AC</button>
          <button class="cc cc-fn" data-cc="+/-">+/−</button>
          <button class="cc cc-fn" data-cc="%">%</button>
          <button class="cc cc-op" data-cc="÷">÷</button>

          <button class="cc cc-num" data-cc="7">7</button>
          <button class="cc cc-num" data-cc="8">8</button>
          <button class="cc cc-num" data-cc="9">9</button>
          <button class="cc cc-op" data-cc="×">×</button>

          <button class="cc cc-num" data-cc="4">4</button>
          <button class="cc cc-num" data-cc="5">5</button>
          <button class="cc cc-num" data-cc="6">6</button>
          <button class="cc cc-op" data-cc="−">−</button>

          <button class="cc cc-num" data-cc="1">1</button>
          <button class="cc cc-num" data-cc="2">2</button>
          <button class="cc cc-num" data-cc="3">3</button>
          <button class="cc cc-op" data-cc="+">+</button>

          <button class="cc cc-num cc-zero" data-cc="0">0</button>
          <button class="cc cc-num" data-cc=".">.</button>
          <button class="cc cc-eq" data-cc="=">=</button>
        </div>
      </div>

      <div class="mm-panel" id="mm-panel-games">
        <div class="gm-bar">
          <button class="gm-pick gm-on" id="gm-tetris">tetris</button>
          <button class="gm-pick" id="gm-flappy">flappy bird</button>
          <button class="gm-pick" id="gm-space">space invaders</button>
        </div>
        <canvas id="mm-gamecanvas"></canvas>
        <div class="gm-hud">score: <span id="gm-score">0</span> &nbsp;|&nbsp; <span id="gm-status-label">arrows / space to play</span></div>
      </div>

    </div>
  `;
  document.body.appendChild(el);

  const $m = id => document.getElementById(id);

  // ── drag ──
  let dragging = false, dx = 0, dy = 0;
  $m('mm-topbar').addEventListener('mousedown', e => {
    if (e.target.classList.contains('mm-dot')) return;
    dragging = true; dx = e.clientX - el.offsetLeft; dy = e.clientY - el.offsetTop;
  });
  document.addEventListener('mousemove', e => { if (!dragging) return; el.style.left=(e.clientX-dx)+'px'; el.style.top=(e.clientY-dy)+'px'; el.style.right='auto'; });
  document.addEventListener('mouseup', () => dragging = false);
  document.querySelector('#__modmenu__ .mm-dot-r').addEventListener('click', () => el.style.display='none');
  document.querySelector('#__modmenu__ .mm-dot-y').addEventListener('click', () => el.classList.toggle('mm-min'));
  document.querySelector('#__modmenu__ .mm-dot-g').addEventListener('click', () => renderInspect(curIsub));

  // ── tabs ──
  document.querySelectorAll('#__modmenu__ .mm-tab').forEach(t => {
    t.addEventListener('click', () => {
      document.querySelectorAll('#__modmenu__ .mm-tab').forEach(x=>x.classList.remove('mm-active'));
      document.querySelectorAll('#__modmenu__ .mm-panel').forEach(x=>x.classList.remove('mm-active'));
      t.classList.add('mm-active');
      $m('mm-panel-'+t.dataset.tab).classList.add('mm-active');
      if (t.dataset.tab==='games') initGamesPanel();
    });
  });

  // ── console ──
  const cout=$m('mm-cout'), history=[]; let histIdx=-1;
  function ts(){const n=new Date();return[n.getHours(),n.getMinutes(),n.getSeconds()].map(x=>String(x).padStart(2,'0')).join(':');}
  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
  function fmt(v){
    if(v===null)return'<span style="color:rgba(255,255,255,0.25)">null</span>';
    if(v===undefined)return'<span style="color:rgba(255,255,255,0.25)">undefined</span>';
    if(typeof v==='string')return`<span style="color:#4ade80">"${esc(v.slice(0,200))}"</span>`;
    if(typeof v==='number')return`<span style="color:#fb923c">${v}</span>`;
    if(typeof v==='boolean')return`<span style="color:#60a5fa">${v}</span>`;
    if(typeof v==='function')return`<span style="color:#c084fc">ƒ ${esc(v.name||'anon')}()</span>`;
    if(Array.isArray(v))return`<span style="color:rgba(255,255,255,0.3)">[Array(${v.length})]</span>`;
    if(typeof v==='object'){try{return`<span style="color:rgba(255,255,255,0.3)">${esc(JSON.stringify(v).slice(0,120))}</span>`;}catch{return'<span style="color:rgba(255,255,255,0.3)">[Object]</span>';}}
    return esc(String(v));
  }
  function log(msg,type='x'){
    const row=document.createElement('div');row.className='mm-log';
    row.innerHTML=`<span class="mm-ts">${ts()}</span><span class="mm-l${type}">${type==='i'?'›':type==='w'?'!':`×`}</span><span style="flex:1;word-break:break-all;color:rgba(255,255,255,0.7)">${esc(String(msg))}</span>`;
    cout.appendChild(row);cout.scrollTop=cout.scrollHeight;
  }
  function goConsole(){
    document.querySelectorAll('#__modmenu__ .mm-tab').forEach(x=>x.classList.remove('mm-active'));
    document.querySelectorAll('#__modmenu__ .mm-panel').forEach(x=>x.classList.remove('mm-active'));
    document.querySelector('#__modmenu__ [data-tab="console"]').classList.add('mm-active');
    $m('mm-panel-console').classList.add('mm-active');
  }
  function runCode(code){
    if(!code.trim())return;
    const row=document.createElement('div');row.className='mm-log';
    row.innerHTML=`<span class="mm-ts">${ts()}</span><span style="color:rgba(255,255,255,0.3)">›</span><span style="flex:1;word-break:break-all;color:#e2e8f0">${esc(code)}</span>`;
    cout.appendChild(row);
    try{const r=(0,eval)(code);const r2=document.createElement('div');r2.className='mm-log';r2.innerHTML=`<span class="mm-ts"></span><span style="color:rgba(255,255,255,0.2)">‹</span><span style="flex:1">${fmt(r)}</span>`;cout.appendChild(r2);}
    catch(e){log(e.message,'e');}
    cout.scrollTop=cout.scrollHeight;
  }
  $m('mm-runbtn').addEventListener('click',()=>{const v=$m('mm-cinput').value;if(!v.trim())return;history.unshift(v);histIdx=-1;runCode(v);$m('mm-cinput').value='';});
  $m('mm-cinput').addEventListener('keydown',e=>{
    if(e.key==='Enter')$m('mm-runbtn').click();
    if(e.key==='ArrowUp'){e.preventDefault();histIdx=Math.min(histIdx+1,history.length-1);$m('mm-cinput').value=history[histIdx]||'';}
    if(e.key==='ArrowDown'){e.preventDefault();histIdx=Math.max(histIdx-1,-1);$m('mm-cinput').value=histIdx<0?'':history[histIdx];}
  });
  log('Mod Menu v3.0 — '+location.hostname,'i');

  // ── inspect ──
  const inspectData={
    window:{'innerWidth':()=>window.innerWidth,'innerHeight':()=>window.innerHeight,'scrollX':()=>Math.round(scrollX),'scrollY':()=>Math.round(scrollY),'devicePixelRatio':()=>devicePixelRatio,'origin':()=>location.origin,'pathname':()=>location.pathname,'search':()=>location.search||'(none)','hash':()=>location.hash||'(none)','referrer':()=>document.referrer||'(none)','readyState':()=>document.readyState,'visibilityState':()=>document.visibilityState},
    document:{'title':()=>document.title,'URL':()=>document.URL,'domain':()=>document.domain||'(none)','contentType':()=>document.contentType,'scripts':()=>document.scripts.length,'stylesheets':()=>document.styleSheets.length,'images':()=>document.images.length,'links':()=>document.links.length,'totalElements':()=>document.querySelectorAll('*').length},
    navigator:{'userAgent':()=>navigator.userAgent,'platform':()=>navigator.platform,'language':()=>navigator.language,'onLine':()=>navigator.onLine,'cookieEnabled':()=>navigator.cookieEnabled,'hardwareConcurrency':()=>navigator.hardwareConcurrency},
    screen:{'width':()=>screen.width,'height':()=>screen.height,'availWidth':()=>screen.availWidth,'availHeight':()=>screen.availHeight,'colorDepth':()=>screen.colorDepth+'bit'}
  };
  let curIsub='window';
  function renderInspect(sub){
    const c=$m('mm-icontent');c.innerHTML='';
    for(const[k,fn]of Object.entries(inspectData[sub])){
      let v;try{v=fn();}catch{v='(error)';}
      const cls=typeof v==='number'?'n':typeof v==='boolean'?'b':'';
      const row=document.createElement('div');row.className='mm-prow';
      row.innerHTML=`<span class="mm-pk">${k}</span><span class="mm-pv ${cls}">${esc(String(v))}</span>`;
      c.appendChild(row);
    }
  }
  document.querySelectorAll('#__modmenu__ .mm-isub').forEach(btn=>{btn.addEventListener('click',()=>{document.querySelectorAll('#__modmenu__ .mm-isub').forEach(x=>x.classList.remove('mm-active'));btn.classList.add('mm-active');curIsub=btn.dataset.isub;renderInspect(curIsub);});});
  renderInspect('window');

  // ── edit anything ──
  let editOn=false, editHovered=null;
  function editHandleMouseOver(e){if(el.contains(e.target))return;if(editHovered&&editHovered!==e.target)editHovered.classList.remove('__mm_editable_hover__');editHovered=e.target;editHovered.classList.add('__mm_editable_hover__');}
  function editHandleMouseOut(e){if(e.target&&e.target!==el)e.target.classList.remove('__mm_editable_hover__');}
  function editHandleClick(e){
    if(el.contains(e.target))return;
    e.preventDefault();e.stopPropagation();
    const target=e.target;
    target.classList.remove('__mm_editable_hover__');
    target.classList.add('__mm_editable_active__');
    target.contentEditable='true';target.focus();
    function done(){target.contentEditable='false';target.classList.remove('__mm_editable_active__');target.removeEventListener('blur',done);target.removeEventListener('keydown',keyHandler);}
    function keyHandler(ev){if(ev.key==='Escape')done();}
    target.addEventListener('blur',done);target.addEventListener('keydown',keyHandler);
  }
  function enableEdit(){document.addEventListener('mouseover',editHandleMouseOver,true);document.addEventListener('mouseout',editHandleMouseOut,true);document.addEventListener('click',editHandleClick,true);document.body.style.cursor='text';log('Edit mode ON — click any element to edit','i');}
  function disableEdit(){document.removeEventListener('mouseover',editHandleMouseOver,true);document.removeEventListener('mouseout',editHandleMouseOut,true);document.removeEventListener('click',editHandleClick,true);if(editHovered){editHovered.classList.remove('__mm_editable_hover__');editHovered=null;}document.querySelectorAll('.__mm_editable_active__').forEach(n=>{n.contentEditable='false';n.classList.remove('__mm_editable_active__');});document.body.style.cursor='';log('Edit mode OFF','w');}

  // ── commands ──
  const commands=[
    {name:'edit anything',desc:'Click any element on the page to edit its text',tag:'edit',toggle:true,
      run:(el2)=>{editOn=!editOn;el2.classList.toggle('mm-cmd-on',editOn);el2.querySelector('.mm-ctag').textContent=editOn?'on':'#edit';el2.querySelector('.mm-cdesc').textContent=editOn?'Active — click any element, Escape to commit':'Click any element on the page to edit its text';editOn?enableEdit():disableEdit();}},
    {name:'scroll to top',desc:'Smooth scroll to top of page',tag:'dom',code:`window.scrollTo({top:0,behavior:'smooth'})`},
    {name:'scroll to bottom',desc:'Smooth scroll to bottom of page',tag:'dom',code:`window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'})`},
    {name:'highlight all links',desc:'Outline every anchor element',tag:'dom',code:`document.querySelectorAll('a').forEach(a=>a.style.outline='2px solid #22d3ee')`},
    {name:'remove all images',desc:'Remove every img element from the page',tag:'dom',code:`document.querySelectorAll('img').forEach(i=>i.remove())`},
    {name:'count all elements',desc:'Log total DOM element count',tag:'dom',code:`alert('Total elements: '+document.querySelectorAll('*').length)`},
    {name:'copy page URL',desc:'Copy current URL to clipboard',tag:'nav',code:`navigator.clipboard.writeText(location.href).then(()=>alert('Copied!'))`},
    {name:'open blank tab',desc:'Open about:blank in new tab',tag:'nav',code:`window.open('about:blank','_blank')`},
    {name:'hard reload',desc:'Force reload ignoring cache',tag:'nav',code:`location.reload(true)`},
    {name:'log fetch calls',desc:'Patch fetch to log all network requests',tag:'net',code:`const _f=window.fetch;window.fetch=(...a)=>{console.log('[fetch]',a[0]);return _f(...a)};alert('fetch patched')`},
    {name:'clear localStorage',desc:'Wipe all localStorage keys',tag:'storage',code:`localStorage.clear();alert('cleared')`},
    {name:'clear sessionStorage',desc:'Wipe all sessionStorage keys',tag:'storage',code:`sessionStorage.clear();alert('cleared')`},
    {name:'dark mode toggle',desc:'Invert page colors',tag:'page',code:`document.body.style.filter=document.body.style.filter?'':'invert(1) hue-rotate(180deg)'`},
    {name:'zoom 150%',desc:'Scale page to 150%',tag:'page',code:`document.body.style.zoom='1.5'`},
    {name:'zoom reset',desc:'Reset page zoom to 100%',tag:'page',code:`document.body.style.zoom='1'`},
    {name:'rainbow mode',desc:'Cycle hue-rotate animation on the page',tag:'page',code:`let h=0;setInterval(()=>{document.body.style.filter='hue-rotate('+h+'deg)';h+=2},30)`},
    {name:'disable all CSS',desc:'Remove all stylesheets from page',tag:'page',code:`document.querySelectorAll('link[rel="stylesheet"],style').forEach(s=>s.remove())`},
  ];
  const tagCls={dom:'t-dom',nav:'t-nav',net:'t-net',storage:'t-storage',page:'t-page',edit:'t-edit'};
  function renderCommands(filter=''){
    const list=$m('mm-clist');list.innerHTML='';
    commands.filter(c=>(c.name+c.desc+c.tag).toLowerCase().includes(filter.toLowerCase())).forEach(c=>{
      const el2=document.createElement('div');el2.className='mm-cmd';
      if(c.toggle&&c.name==='edit anything'&&editOn)el2.classList.add('mm-cmd-on');
      el2.innerHTML=`<div class="mm-cname">${c.name}</div><div class="mm-cdesc">${c.desc}</div><span class="mm-ctag ${tagCls[c.tag]}">${c.toggle&&editOn?'on':'#'+c.tag}</span>`;
      el2.addEventListener('click',()=>{if(c.toggle){c.run(el2);}else{goConsole();runCode(c.code);}});
      list.appendChild(el2);
    });
  }
  renderCommands();
  $m('mm-csearch').addEventListener('input',e=>renderCommands(e.target.value));

  // ── storage ──
  let curStab='local';
  function renderStorage(tab){
    const c=$m('mm-scontent');c.innerHTML='';
    if(tab==='local'||tab==='session'){
      const store=tab==='local'?localStorage:sessionStorage;
      if(!store.length){c.innerHTML='<div style="color:rgba(255,255,255,0.2);padding:14px;font-size:11px;font-family:\'Geist Mono\',monospace">(empty)</div>';return;}
      for(let i=0;i<store.length;i++){const k=store.key(i),v=store.getItem(k);const row=document.createElement('div');row.className='mm-srow';row.innerHTML=`<span class="mm-sk">${esc(k)}</span><span class="mm-sv">${esc(v)}</span><span class="mm-sdel" data-k="${esc(k)}" data-st="${tab}">×</span>`;c.appendChild(row);}
    }else{const cookies=document.cookie.split(';').map(x=>x.trim()).filter(Boolean);if(!cookies.length){c.innerHTML='<div style="color:rgba(255,255,255,0.2);padding:14px;font-size:11px;font-family:\'Geist Mono\',monospace">(no cookies)</div>';return;}cookies.forEach(cookie=>{const[k,...rest]=cookie.split('=');const row=document.createElement('div');row.className='mm-srow';row.innerHTML=`<span class="mm-sk">${esc(k)}</span><span class="mm-sv">${esc(rest.join('='))}</span>`;c.appendChild(row);});}
    c.querySelectorAll('.mm-sdel').forEach(btn=>{btn.addEventListener('click',()=>{if(btn.dataset.st==='local')localStorage.removeItem(btn.dataset.k);else sessionStorage.removeItem(btn.dataset.k);renderStorage(curStab);});});
  }
  document.querySelectorAll('#__modmenu__ .mm-stab').forEach(btn=>{btn.addEventListener('click',()=>{document.querySelectorAll('#__modmenu__ .mm-stab').forEach(x=>x.classList.remove('mm-active'));btn.classList.add('mm-active');curStab=btn.dataset.stab;renderStorage(curStab);});});
  renderStorage('local');
  $m('mm-saddbtn').addEventListener('click',()=>{const k=$m('mm-skey').value.trim(),v=$m('mm-sval').value.trim();if(!k)return;if(curStab==='local')localStorage.setItem(k,v);else if(curStab==='session')sessionStorage.setItem(k,v);$m('mm-skey').value='';$m('mm-sval').value='';renderStorage(curStab);});

  // ── page info ──
  function renderPageInfo(){
    const c=$m('mm-picontent');c.innerHTML='';
    const perf=performance.timing||{};
    const load=perf.loadEventEnd&&perf.navigationStart?perf.loadEventEnd-perf.navigationStart:0;
    const sections=[
      {title:'location',rows:[['href',location.href],['origin',location.origin],['pathname',location.pathname],['search',location.search||'(none)'],['hash',location.hash||'(none)'],['protocol',location.protocol]]},
      {title:'document',rows:[['title',document.title],['domain',document.domain||'(none)'],['charset',document.characterSet],['readyState',document.readyState],['elements',document.querySelectorAll('*').length],['scripts',document.scripts.length],['images',document.images.length]]},
      {title:'performance',rows:[['load time',load?load+'ms':'N/A'],['memory',performance.memory?Math.round(performance.memory.usedJSHeapSize/1048576)+'MB':'N/A'],['resources',performance.getEntriesByType?performance.getEntriesByType('resource').length:'N/A']]},
      {title:'viewport',rows:[['innerSize',innerWidth+' × '+innerHeight],['devicePixelRatio',devicePixelRatio],['screen',screen.width+' × '+screen.height]]},
    ];
    sections.forEach(sec=>{
      const wrap=document.createElement('div');wrap.className='mm-pisec';
      const hd=document.createElement('div');hd.className='mm-pititle';hd.textContent=sec.title;wrap.appendChild(hd);
      sec.rows.forEach(([k,v])=>{const row=document.createElement('div');row.className='mm-pirow';row.innerHTML=`<span class="mm-pik">${k}</span><span class="mm-piv">${esc(String(v))}</span>`;wrap.appendChild(row);});
      c.appendChild(wrap);
    });
  }
  renderPageInfo();

  // ── calculator ──
  (function(){
    let expr='', val='0', hasResult=false;
    const display=$m('mm-calc-val'), exprEl=$m('mm-calc-expr');
    function update(){display.textContent=val;exprEl.textContent=expr;}
    function calcPressKey(k){
      if(k==='AC'){expr='';val='0';hasResult=false;update();return;}
      if(k==='+/-'){if(val!=='0'&&val!==''){val=(parseFloat(val)*-1).toString();update();}return;}
      if(k==='%'){try{val=(parseFloat(val)/100).toString();update();}catch(e){}return;}
      if(k==='='){
        if(!expr&&val==='0')return;
        const full=(expr+val).replace(/×/g,'*').replace(/÷/g,'/').replace(/−/g,'-');
        try{
          // eslint-disable-next-line no-new-func
          const r=Function('"use strict";return('+full+')')();
          exprEl.textContent=expr+val+' =';
          val=parseFloat(r.toFixed(10)).toString();
          expr='';hasResult=true;
        }catch(e){val='Error';exprEl.textContent='';expr='';hasResult=true;}
        update();return;
      }
      const isOp=['÷','×','−','+'].includes(k);
      if(isOp){
        if(val!=='0'||expr){expr+=(hasResult?val:val)+k;val='0';hasResult=false;}
        else if(expr){expr=expr.slice(0,-1)+k;}
        update();return;
      }
      if(k==='.'){
        if(hasResult){expr='';val='0.';hasResult=false;update();return;}
        if(val.includes('.'))return;
        val+='.';update();return;
      }
      // digit
      if(hasResult){expr='';val=k;hasResult=false;update();return;}
      val=val==='0'?k:val+k;
      update();
    }
    document.querySelectorAll('#__modmenu__ .cc').forEach(btn=>{
      btn.addEventListener('click',()=>calcPressKey(btn.dataset.cc));
    });
    document.addEventListener('keydown',e=>{
      if(!$m('mm-panel-calc').classList.contains('mm-active'))return;
      const map={'0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9','+':'+','-':'−','*':'×','/':'÷','Enter':'=','=':'=','Escape':'AC','Backspace':'BS','.':'.'};
      const k=map[e.key];
      if(!k)return;
      if(k==='BS'){if(val.length>1)val=val.slice(0,-1);else val='0';update();return;}
      if(k)calcPressKey(k);
    });
  })();

  // ── blooket ──
  function blStatus(msg,type='ok'){const s=$m('bl-status');s.textContent=msg;s.className=type;s.style.display='block';setTimeout(()=>s.style.display='none',3500);}
  $m('bl-add-coins').addEventListener('click',()=>{
    const amt=parseInt($m('bl-coin-amt').value)||500;let patched=false;
    try{['coins','tokens','gold','bucks','currency','balance','points'].forEach(key=>{const ex=localStorage.getItem(key);if(ex!==null&&!isNaN(ex)){localStorage.setItem(key,parseInt(ex)+amt);patched=true;}});document.querySelectorAll('*').forEach(node=>{const k=Object.keys(node).find(x=>x.startsWith('__reactFiber'));if(!k)return;let fiber=node[k];for(let i=0;i<25&&fiber;i++){if(fiber.memoizedState){let s=fiber.memoizedState;while(s){if(s.queue&&typeof s.memoizedState==='number'&&s.memoizedState>=0&&s.memoizedState<100000){s.memoizedState+=amt;patched=true;}s=s.next;}}fiber=fiber.return;}});blStatus((patched?'Added '+amt+' tokens! ':'Injected — ')+'Refresh if no visible change.',patched?'ok':'warn');log('[Blooket] +'+amt+' tokens attempted','i');}catch(e){blStatus('Error: '+e.message,'err');}
  });
  $m('bl-max-coins').addEventListener('click',()=>{['coins','tokens','gold','bucks','currency','balance','points'].forEach(k=>{if(localStorage.getItem(k)!==null)localStorage.setItem(k,99999);});blStatus('Token keys set to 99,999 — refresh to apply','ok');log('[Blooket] max tokens set','i');});
  let autoAnswerOn=false,autoAnswerInterval=null;
  $m('bl-auto-answer').addEventListener('click',()=>{autoAnswerOn=!autoAnswerOn;$m('bl-aa-badge').textContent=autoAnswerOn?'ON':'toggle';if(autoAnswerOn){autoAnswerInterval=setInterval(()=>{try{document.querySelectorAll('[class*="answer"],[class*="Answer"],[class*="correct"],[class*="choice"],[class*="option"]').forEach(a=>{if(a.dataset.correct==='true'||a.getAttribute('iscorrect')==='true'||a.className.toLowerCase().includes('correct'))a.click();});}catch(e){}},800);blStatus('Auto answer ON','ok');log('[Blooket] auto answer ON','i');}else{clearInterval(autoAnswerInterval);blStatus('Auto answer OFF','warn');log('[Blooket] auto answer OFF','w');}});
  $m('bl-instant-answer').addEventListener('click',()=>{let clicked=false;document.querySelectorAll('[class*="answer"],[class*="Answer"],[class*="choice"],[class*="option"]').forEach(a=>{if(!clicked&&(a.dataset.correct==='true'||a.getAttribute('iscorrect')==='true'||a.className.toLowerCase().includes('correct'))){a.click();clicked=true;}});if(!clicked){const first=document.querySelector('[class*="answer"],[class*="Answer"],[class*="choice"]');if(first){first.click();clicked=true;}}blStatus(clicked?'Answered!':'No question found — join a game first',clicked?'ok':'warn');});
  let speedOn=false;
  $m('bl-speed').addEventListener('click',()=>{speedOn=!speedOn;$m('bl-sp-badge').textContent=speedOn?'ON':'toggle';try{if(speedOn){window.__origDateNow=Date.now;let offset=0;window.__speedIv=setInterval(()=>{offset+=500;},100);Date.now=()=>window.__origDateNow()+offset;blStatus('Speed hack ON','ok');log('[Blooket] speed ON','i');}else{if(window.__origDateNow)Date.now=window.__origDateNow;clearInterval(window.__speedIv);blStatus('Speed hack OFF','warn');log('[Blooket] speed OFF','w');}}catch(e){blStatus('Error: '+e.message,'err');}});
  $m('bl-unlock-blooks').addEventListener('click',()=>{let found=false;document.querySelectorAll('*').forEach(node=>{const k=Object.keys(node).find(x=>x.startsWith('__reactFiber'));if(!k)return;let fiber=node[k];for(let i=0;i<20&&fiber;i++){if(fiber.memoizedProps&&(fiber.memoizedProps.blooks||fiber.memoizedProps.unlockedBlooks)){log('[Blooket] blook props: '+JSON.stringify(Object.keys(fiber.memoizedProps.blooks||{})).slice(0,100),'i');found=true;}fiber=fiber.return;}});blStatus(found?'Blook data found — see console':'Open the Blooks page first, then try again',found?'ok':'warn');if(found)goConsole();});
  let boxInterval=null;
  $m('bl-open-box').addEventListener('click',()=>{if(boxInterval){clearInterval(boxInterval);boxInterval=null;$m('bl-box-badge').textContent='boxes';blStatus('Box opener stopped','warn');return;}$m('bl-box-badge').textContent='STOP';boxInterval=setInterval(()=>{const btn=document.querySelector('[class*="open"],[class*="Open"],[class*="box"],[class*="Box"],[class*="pack"],[class*="Pack"]');if(btn)btn.click();},300);blStatus('Auto opening boxes — click again to stop','ok');});
  $m('bl-get-answers').addEventListener('click',()=>{let found=false;document.querySelectorAll('*').forEach(node=>{const k=Object.keys(node).find(x=>x.startsWith('__reactFiber'));if(!k)return;let fiber=node[k];for(let i=0;i<15&&fiber;i++){const p=fiber.memoizedProps;if(p&&(p.question||p.correctAnswer||p.answers)){if(p.question)log('[Q] '+p.question,'i');if(p.correctAnswer)log('[A] '+p.correctAnswer,'i');if(p.answers)log('[answers] '+JSON.stringify(p.answers).slice(0,120),'i');found=true;}fiber=fiber.return;}});goConsole();if(!found)log('[Blooket] No Q&A found — join a game first','w');});
  let ghostOn=false;
  $m('bl-ghost').addEventListener('click',()=>{ghostOn=!ghostOn;$m('bl-gh-badge').textContent=ghostOn?'ON':'stealth';document.querySelectorAll('[class*="name"],[class*="Name"],[class*="username"],[class*="player"]').forEach(el2=>{if(ghostOn){el2.dataset.origText=el2.textContent;el2.textContent='???';}else if(el2.dataset.origText)el2.textContent=el2.dataset.origText;});blStatus(ghostOn?'Ghost mode ON — name hidden':'Ghost mode OFF',ghostOn?'ok':'warn');});

  // ── games ──
  let gmGame=null,gmRAF=null,gmKeys={},gmScore=0;
  function gmSetScore(n){gmScore=n;$m('gm-score').textContent=n;}
  function gmStatus(t){$m('gm-status-label').textContent=t;}
  function stopGame(){if(gmRAF)cancelAnimationFrame(gmRAF);gmRAF=null;if(gmGame&&gmGame.destroy)gmGame.destroy();gmGame=null;}
  function sizeCanvas(){const cv=$m('mm-gamecanvas');const panel=$m('mm-panel-games');const bar=panel.querySelector('.gm-bar');const hud=panel.querySelector('.gm-hud');cv.width=panel.clientWidth||480;cv.height=panel.clientHeight-bar.offsetHeight-hud.offsetHeight-4||380;}
  function initGamesPanel(){sizeCanvas();startTetris();}
  document.querySelectorAll('#__modmenu__ .gm-pick').forEach(btn=>{btn.addEventListener('click',()=>{document.querySelectorAll('#__modmenu__ .gm-pick').forEach(x=>x.classList.remove('gm-on'));btn.classList.add('gm-on');stopGame();gmSetScore(0);if(btn.id==='gm-tetris')startTetris();else if(btn.id==='gm-flappy')startFlappy();else startSpace();});});
  document.addEventListener('keydown',e=>{gmKeys[e.key]=true;if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown',' '].includes(e.key)&&$m('mm-panel-games').classList.contains('mm-active'))e.preventDefault();});
  document.addEventListener('keyup',e=>{gmKeys[e.key]=false;});

  function startTetris(){
    const cv=$m('mm-gamecanvas'),ctx=cv.getContext('2d');
    const W=cv.width,H=cv.height;
    const COLS=10,SZ=Math.floor(W/COLS),ROWS=Math.floor(H/SZ);
    const COLORS=['#22d3ee','#fb923c','#c084fc','#4ade80','#f87171','#e2e8f0','#f97316'];
    const PIECES=[[[1,1,1,1]],[[1,1],[1,1]],[[0,1,0],[1,1,1]],[[1,1,0],[0,1,1]],[[0,1,1],[1,1,0]],[[1,0,0],[1,1,1]],[[0,0,1],[1,1,1]]];
    let board=Array.from({length:ROWS},()=>Array(COLS).fill(0));
    let cur,curX,curY,curColor,gameOver=false,dropTimer=0,dropInterval=500,lastTime=0;
    function randPiece(){const i=Math.floor(Math.random()*PIECES.length);cur=PIECES[i].map(r=>[...r]);curColor=COLORS[i];curX=Math.floor(COLS/2)-Math.floor(cur[0].length/2);curY=0;if(collide())gameOver=true;}
    function collide(ox=0,oy=0,piece=cur){for(let r=0;r<piece.length;r++)for(let c=0;c<piece[r].length;c++)if(piece[r][c]){const nx=curX+c+ox,ny=curY+r+oy;if(nx<0||nx>=COLS||ny>=ROWS||ny>=0&&board[ny][nx])return true;}return false;}
    function rotate(p){return p[0].map((_,c)=>p.map(r=>r[c]).reverse());}
    function lock(){for(let r=0;r<cur.length;r++)for(let c=0;c<cur[r].length;c++)if(cur[r][c]&&curY+r>=0)board[curY+r][curX+c]=curColor;let lines=0;board=board.filter(r=>{if(r.every(c=>c)){lines++;return false;}return true;});while(board.length<ROWS)board.unshift(Array(COLS).fill(0));gmSetScore(gmScore+lines*100);randPiece();}
    function draw(){ctx.fillStyle='#0a0a0e';ctx.fillRect(0,0,W,H);for(let r=0;r<ROWS;r++)for(let c=0;c<COLS;c++){if(board[r][c]){ctx.fillStyle=board[r][c];ctx.fillRect(c*SZ,r*SZ,SZ-1,SZ-1);}else{ctx.fillStyle='rgba(255,255,255,0.02)';ctx.fillRect(c*SZ,r*SZ,SZ-1,SZ-1);}}for(let r=0;r<cur.length;r++)for(let c=0;c<cur[r].length;c++)if(cur[r][c]){ctx.fillStyle=curColor;ctx.fillRect((curX+c)*SZ,(curY+r)*SZ,SZ-1,SZ-1);}if(gameOver){ctx.fillStyle='rgba(0,0,0,0.7)';ctx.fillRect(0,H/2-26,W,52);ctx.fillStyle='#f87171';ctx.font='bold 16px Geist,sans-serif';ctx.textAlign='center';ctx.fillText('GAME OVER',W/2,H/2+6);}}
    let leftDown=false,rightDown=false,leftTimer=0,rightTimer=0;
    function loop(ts){if(!gmGame)return;const dt=ts-lastTime;lastTime=ts;if(gameOver){draw();gmStatus('game over — pick a game to restart');return;}if(gmKeys['ArrowLeft']){if(!leftDown){leftDown=true;leftTimer=0;if(!collide(-1,0))curX--;}else{leftTimer+=dt;if(leftTimer>200){curX-=collide(-1,0)?0:1;leftTimer-=80;}}}else leftDown=false;if(gmKeys['ArrowRight']){if(!rightDown){rightDown=true;rightTimer=0;if(!collide(1,0))curX++;}else{rightTimer+=dt;if(rightTimer>200){curX+=collide(1,0)?0:1;rightTimer-=80;}}}else rightDown=false;if(gmKeys['ArrowUp']){const r=rotate(cur);if(!collide(0,0,r))cur=r;gmKeys['ArrowUp']=false;}if(gmKeys['ArrowDown'])dropTimer+=dt*4;else dropTimer+=dt;if(gmKeys[' ']){while(!collide(0,1))curY++;lock();gmKeys[' ']=false;}if(dropTimer>dropInterval){dropTimer=0;if(!collide(0,1))curY++;else lock();}draw();gmRAF=requestAnimationFrame(loop);}
    gmGame={destroy:()=>{}};gmSetScore(0);gmStatus('arrows=move  up=rotate  space=drop');randPiece();lastTime=performance.now();gmRAF=requestAnimationFrame(loop);
  }

  function startFlappy(){
    const cv=$m('mm-gamecanvas'),ctx=cv.getContext('2d');
    const W=cv.width,H=cv.height;
    let bird={x:W*0.2,y:H/2,v:0},pipes=[],frameN=0,started=false,dead=false,lastTime=0;
    const GAP=H*0.28,PIPE_W=36,SPEED=2.2,GRAV=0.32,JUMP=-6.5;
    function addPipe(){const top=H*0.15+Math.random()*(H*0.45);pipes.push({x:W,top});}
    function jump(){if(dead){resetFlappy();return;}if(!started)started=true;bird.v=JUMP;}
    function resetFlappy(){bird={x:W*0.2,y:H/2,v:0};pipes=[];frameN=0;started=false;dead=false;gmSetScore(0);}
    cv.addEventListener('click',jump);
    function draw(){ctx.fillStyle='#0a0a0e';ctx.fillRect(0,0,W,H);ctx.fillStyle='#4ade80';for(const p of pipes){ctx.fillRect(p.x,0,PIPE_W,p.top-GAP/2);ctx.fillRect(p.x,p.top+GAP/2,PIPE_W,H);}ctx.fillStyle='#fb923c';ctx.beginPath();ctx.ellipse(bird.x,bird.y,12,9,bird.v*0.04,0,Math.PI*2);ctx.fill();if(!started){ctx.fillStyle='rgba(255,255,255,0.25)';ctx.font='11px Geist,sans-serif';ctx.textAlign='center';ctx.fillText('click or space to flap',W/2,H/2+40);}if(dead){ctx.fillStyle='rgba(0,0,0,0.7)';ctx.fillRect(0,H/2-26,W,52);ctx.fillStyle='#f87171';ctx.font='bold 15px Geist,sans-serif';ctx.textAlign='center';ctx.fillText('dead — click to retry',W/2,H/2+6);}}
    function loop(ts){if(!gmGame)return;lastTime=ts;if(!dead&&started){bird.v+=GRAV;bird.y+=bird.v;if(frameN%80===0)addPipe();frameN++;for(const p of pipes)p.x-=SPEED;pipes=pipes.filter(p=>p.x>-PIPE_W);for(const p of pipes){if(bird.x+10>p.x&&bird.x-10<p.x+PIPE_W&&(bird.y-9<p.top-GAP/2||bird.y+9>p.top+GAP/2))dead=true;}if(bird.y>H||bird.y<0)dead=true;const passed=pipes.filter(p=>p.x+PIPE_W<bird.x).length;gmSetScore(passed);}if(gmKeys[' ']){jump();gmKeys[' ']=false;}draw();gmRAF=requestAnimationFrame(loop);}
    gmGame={destroy:()=>cv.removeEventListener('click',jump)};gmSetScore(0);gmStatus('click or space to flap');lastTime=performance.now();gmRAF=requestAnimationFrame(loop);
  }

  function startSpace(){
    const cv=$m('mm-gamecanvas'),ctx=cv.getContext('2d');
    const W=cv.width,H=cv.height;
    let ship={x:W/2,y:H-30,w:24,h:16},bullets=[],enemies=[],ebullets=[];
    let eDir=1,eMoveTimer=0,eMoveInterval=600,eshoot=0,dead=false,won=false,lastTime=0;
    function makeEnemies(){enemies=[];const cols=Math.floor((W-40)/40),rows=3;for(let r=0;r<rows;r++)for(let c=0;c<cols;c++)enemies.push({x:20+c*40+8,y:40+r*30,w:18,h:12,alive:true,row:r});}
    makeEnemies();
    function draw(){ctx.fillStyle='#0a0a0e';ctx.fillRect(0,0,W,H);ctx.fillStyle='#4ade80';ctx.fillRect(ship.x-ship.w/2,ship.y-ship.h,ship.w,ship.h);ctx.fillRect(ship.x-4,ship.y-ship.h-6,8,8);for(const b of bullets){ctx.fillStyle='#22d3ee';ctx.fillRect(b.x-1,b.y,3,8);}for(const b of ebullets){ctx.fillStyle='#f87171';ctx.fillRect(b.x-1,b.y,3,8);}for(const e of enemies){if(!e.alive)continue;const col=e.row===0?'#c084fc':e.row===1?'#fb923c':'#e2e8f0';ctx.fillStyle=col;ctx.fillRect(e.x-e.w/2,e.y-e.h,e.w,e.h);ctx.fillStyle='#0a0a0e';ctx.fillRect(e.x-6,e.y-e.h+3,4,4);ctx.fillRect(e.x+2,e.y-e.h+3,4,4);}if(dead||won){ctx.fillStyle='rgba(0,0,0,0.7)';ctx.fillRect(0,H/2-26,W,52);ctx.fillStyle=won?'#4ade80':'#f87171';ctx.font='bold 14px Geist,sans-serif';ctx.textAlign='center';ctx.fillText(won?'YOU WIN! space to restart':'GAME OVER — space to restart',W/2,H/2+6);}}
    function loop(ts){if(!gmGame)return;lastTime=ts;if(!dead&&!won){if(gmKeys['ArrowLeft'])ship.x=Math.max(ship.w/2,ship.x-3.5);if(gmKeys['ArrowRight'])ship.x=Math.min(W-ship.w/2,ship.x+3.5);if(gmKeys[' ']){bullets.push({x:ship.x,y:ship.y-ship.h});gmKeys[' ']=false;}for(const b of bullets)b.y-=7;bullets=bullets.filter(b=>b.y>-10);for(const b of ebullets)b.y+=3.5;ebullets=ebullets.filter(b=>b.y<H+10);for(const b of ebullets){if(b.y>ship.y-ship.h&&b.y<ship.y&&Math.abs(b.x-ship.x)<ship.w/2)dead=true;}for(const b of bullets){for(const e of enemies){if(e.alive&&Math.abs(b.x-e.x)<e.w/2&&Math.abs(b.y-e.y)<e.h){e.alive=false;b.y=-999;gmSetScore(gmScore+10*(3-e.row+1));}}}eMoveTimer+=16;if(eMoveTimer>=eMoveInterval){eMoveTimer=0;const alive=enemies.filter(e=>e.alive);let hitEdge=false;for(const e of alive){e.x+=16*eDir;if(e.x>W-20||e.x<20)hitEdge=true;}if(hitEdge){eDir*=-1;for(const e of alive)e.y+=16;}eMoveInterval=Math.max(100,600-gmScore*2);}eshoot++;if(eshoot>45){eshoot=0;const alive=enemies.filter(e=>e.alive);if(alive.length){const s=alive[Math.floor(Math.random()*alive.length)];ebullets.push({x:s.x,y:s.y});}}if(!enemies.some(e=>e.alive))won=true;for(const e of enemies){if(e.alive&&e.y>ship.y-ship.h)dead=true;}}if((dead||won)&&gmKeys[' ']){dead=false;won=false;makeEnemies();gmSetScore(0);gmKeys[' ']=false;}draw();gmRAF=requestAnimationFrame(loop);}
    gmGame={destroy:()=>{}};gmSetScore(0);gmStatus('arrows=move  space=shoot');lastTime=performance.now();gmRAF=requestAnimationFrame(loop);
  }

})();
