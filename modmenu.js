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
    #__modmenu__ .mm-tab.mm-vw.mm-active { color: #f87171; border-bottom-color: #f87171; }
    #__modmenu__ .mm-tab.mm-kahoot.mm-active { color: #a78bfa; border-bottom-color: #a78bfa; }
    #__modmenu__ .mm-tab.mm-home.mm-active { color: #fff; border-bottom-color: #fff; }
    #__modmenu__ .mm-tab.mm-tools.mm-active { color: #22d3ee; border-bottom-color: #22d3ee; }
    #__modmenu__ .mm-tab.mm-notepad.mm-active { color: #facc15; border-bottom-color: #facc15; }
    #__modmenu__ .mm-tab.mm-timer.mm-active { color: #fb923c; border-bottom-color: #fb923c; }
    #__modmenu__ .mm-tab.mm-privacy.mm-active { color: #f87171; border-bottom-color: #f87171; }

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
    #__modmenu__ .t-game{background:rgba(250,204,21,0.1);color:#facc15}

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


    /* Toast notifications */
    #__mm_toast__ {
      position: fixed; bottom: 20px; right: 20px; z-index: 2147483647;
      display: flex; flex-direction: column; gap: 6px; pointer-events: none;
    }
    .mm-toast {
      padding: 9px 14px; border-radius: 8px; font-family: 'Geist Mono', monospace;
      font-size: 11px; line-height: 1.5; max-width: 300px; word-break: break-word;
      pointer-events: none; transform: translateX(120%); transition: transform .22s cubic-bezier(.34,1.56,.64,1);
      box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    }
    .mm-toast.mm-toast-in { transform: translateX(0); }
    .mm-toast.mm-toast-out { transform: translateX(120%); transition: transform .18s ease-in; }
    .mm-toast-ok {
      background: #0d2e16; border: 1px solid #166534;
      color: #4ade80;
    }
    .mm-toast-ok .mm-toast-title { color: #86efac; font-weight: 600; font-size: 11.5px; }
    .mm-toast-err {
      background: #2d0e0e; border: 1px solid #7f1d1d;
      color: #f87171;
    }
    .mm-toast-err .mm-toast-title { color: #fca5a5; font-weight: 600; font-size: 11.5px; }
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
      <div id="mm-title">modmenuhacker</div>
      <div id="mm-ver">v3.0</div>
    </div>
    <div id="mm-tabs">
      <div class="mm-tab mm-home mm-active" data-tab="home">home</div>
      <div class="mm-tab" data-tab="console">console</div>
      <div class="mm-tab" data-tab="inspect">inspect</div>
      <div class="mm-tab" data-tab="commands">commands</div>
      <div class="mm-tab" data-tab="storage">storage</div>
      <div class="mm-tab" data-tab="pageinfo">page info</div>
      <div class="mm-tab mm-blooket" data-tab="blooket">blooket</div>
      <div class="mm-tab mm-calc" data-tab="calc">calc</div>
      <div class="mm-tab mm-games" data-tab="games">games</div>
      <div class="mm-tab mm-vw" data-tab="videowatchr">▶ videowatchr</div>
      <div class="mm-tab mm-kahoot" data-tab="kahoot">★ kahoot</div>
      <div class="mm-tab mm-tools" data-tab="tools">tools</div>
      <div class="mm-tab mm-notepad" data-tab="notepad">notepad</div>
      <div class="mm-tab mm-timer" data-tab="timer">timer</div>
      <div class="mm-tab mm-privacy" data-tab="privacy">privacy</div>
    </div>
    <div id="mm-panels">

      <div class="mm-panel mm-active" id="mm-panel-home">
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:0;padding:20px;text-align:center;position:relative;overflow:hidden">

          <!-- Background glow -->
          <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-60%);width:300px;height:300px;background:radial-gradient(circle,rgba(255,255,255,0.03) 0%,transparent 70%);pointer-events:none"></div>

          <!-- Name -->
          <div style="font-family:Geist,sans-serif;font-size:22px;font-weight:600;color:#fff;letter-spacing:0.04em;margin-bottom:5px">modmenuhacker</div>

          <!-- Tagline -->
          <div style="font-family:Geist,sans-serif;font-size:11px;font-weight:300;color:rgba(255,255,255,0.3);letter-spacing:0.08em;margin-bottom:40px">bringing modmenus to you</div>

          <!-- Divider -->
          <div style="width:40px;height:1px;background:rgba(255,255,255,0.1);margin-bottom:40px"></div>

          <!-- Clock -->
          <div id="mm-home-time" style="font-family:Geist Mono,monospace;font-size:52px;font-weight:300;color:#fff;letter-spacing:-0.02em;line-height:1;margin-bottom:8px">00:00</div>
          <div id="mm-home-secs" style="font-family:Geist Mono,monospace;font-size:22px;font-weight:300;color:rgba(255,255,255,0.25);letter-spacing:0.05em;margin-bottom:32px">00</div>

          <!-- Date -->
          <div id="mm-home-date" style="font-family:Geist,sans-serif;font-size:11px;color:rgba(255,255,255,0.2);letter-spacing:0.1em;text-transform:uppercase"></div>

          <!-- Theme picker -->
          <div style="margin-top:32px;display:flex;flex-direction:column;align-items:center;gap:10px">
            <div style="font-size:9.5px;color:rgba(255,255,255,0.15);letter-spacing:.12em;text-transform:uppercase;font-family:Geist,sans-serif">accent color</div>
            <div id="mm-theme-swatches" style="display:flex;gap:8px">
              <div class="mm-swatch" data-color="#22d3ee" style="width:18px;height:18px;border-radius:50%;background:#22d3ee;cursor:pointer;transition:transform .15s;outline:2px solid rgba(255,255,255,0.4);outline-offset:2px"></div>
              <div class="mm-swatch" data-color="#f87171" style="width:18px;height:18px;border-radius:50%;background:#f87171;cursor:pointer;transition:transform .15s"></div>
              <div class="mm-swatch" data-color="#a78bfa" style="width:18px;height:18px;border-radius:50%;background:#a78bfa;cursor:pointer;transition:transform .15s"></div>
              <div class="mm-swatch" data-color="#4ade80" style="width:18px;height:18px;border-radius:50%;background:#4ade80;cursor:pointer;transition:transform .15s"></div>
              <div class="mm-swatch" data-color="#fb923c" style="width:18px;height:18px;border-radius:50%;background:#fb923c;cursor:pointer;transition:transform .15s"></div>
              <div class="mm-swatch" data-color="#facc15" style="width:18px;height:18px;border-radius:50%;background:#facc15;cursor:pointer;transition:transform .15s"></div>
              <div class="mm-swatch" data-color="#f472b6" style="width:18px;height:18px;border-radius:50%;background:#f472b6;cursor:pointer;transition:transform .15s"></div>
              <div class="mm-swatch" data-color="#fff" style="width:18px;height:18px;border-radius:50%;background:#fff;cursor:pointer;transition:transform .15s"></div>
            </div>
          </div>

        </div>
      </div>

      <div class="mm-panel" id="mm-panel-console">
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

      <div class="mm-panel" id="mm-panel-kahoot">
        <div id="mm-kahoot-content" style="flex:1;overflow-y:auto;padding:10px 12px">
          <div id="kh-status" style="font-size:11px;padding:7px 11px;border-radius:7px;margin-bottom:8px;display:none;font-family:Geist Mono,monospace"></div>

          <div class="bl-section">
            <div class="bl-title" style="color:rgba(167,139,250,0.6)">answer reveal</div>
            <button class="bl-btn" id="kh-show-answer" style="border-color:rgba(167,139,250,0.2)">
              <span class="bl-icon">👁</span>
              <div class="bl-info"><div class="bl-name">show correct answer</div><div class="bl-desc">Dump current Q&amp;A to console tab</div></div>
              <span class="bl-badge" style="background:rgba(167,139,250,0.1);color:#a78bfa">once</span>
            </button>
            <button class="bl-btn" id="kh-auto-reveal" style="border-color:rgba(167,139,250,0.2)">
              <span class="bl-icon">⚡</span>
              <div class="bl-info"><div class="bl-name">auto reveal</div><div class="bl-desc">Continuously dump answers as questions appear</div></div>
              <span class="bl-badge" id="kh-ar-badge" style="background:rgba(167,139,250,0.1);color:#a78bfa">toggle</span>
            </button>
          </div>

          <div class="bl-section">
            <div class="bl-title" style="color:rgba(167,139,250,0.6)">display</div>
            <button class="bl-btn" id="kh-ghost" style="border-color:rgba(167,139,250,0.2)">
              <span class="bl-icon">👻</span>
              <div class="bl-info"><div class="bl-name">ghost mode</div><div class="bl-desc">Hide your nickname locally</div></div>
              <span class="bl-badge" id="kh-gh-badge" style="background:rgba(167,139,250,0.1);color:#a78bfa">stealth</span>
            </button>
            <button class="bl-btn" id="kh-highlight" style="border-color:rgba(167,139,250,0.2)">
              <span class="bl-icon">🎨</span>
              <div class="bl-info"><div class="bl-name">highlight answers</div><div class="bl-desc">Colour-code answer buttons by position</div></div>
              <span class="bl-badge" id="kh-hl-badge" style="background:rgba(167,139,250,0.1);color:#a78bfa">toggle</span>
            </button>
          </div>

          <div class="bl-section">
            <div class="bl-title" style="color:rgba(167,139,250,0.6)">info</div>
            <button class="bl-btn" id="kh-dump-state" style="border-color:rgba(167,139,250,0.2)">
              <span class="bl-icon">📋</span>
              <div class="bl-info"><div class="bl-name">dump game state</div><div class="bl-desc">Log full React game state to console</div></div>
              <span class="bl-badge" style="background:rgba(74,222,128,0.1);color:#4ade80">safe</span>
            </button>
            <button class="bl-btn" id="kh-get-pin" style="border-color:rgba(167,139,250,0.2)">
              <span class="bl-icon">📌</span>
              <div class="bl-info"><div class="bl-name">get game PIN</div><div class="bl-desc">Extract current game PIN from state</div></div>
              <span class="bl-badge" style="background:rgba(74,222,128,0.1);color:#4ade80">safe</span>
            </button>
          </div>
        </div>
      </div>

      <div class="mm-panel" id="mm-panel-videowatchr">
        <div id="vw-app" style="display:flex;flex-direction:column;height:100%;background:#0a0a0e;overflow:hidden">

          <!-- Search bar -->
          <div style="display:flex;gap:6px;padding:8px 10px;border-bottom:1px solid rgba(255,255,255,0.07);flex-shrink:0;background:#111118">
            <input id="vw-search" type="text" placeholder="Search YouTube videos..." autocomplete="off" spellcheck="false"
              style="flex:1;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:7px;padding:6px 11px;color:#e2e8f0;font-family:Geist,sans-serif;font-size:11.5px;outline:none"/>
            <button id="vw-search-btn" style="background:rgba(248,113,113,0.15);color:#f87171;border:1px solid rgba(248,113,113,0.25);border-radius:7px;padding:6px 14px;font-family:Geist,sans-serif;font-size:11px;font-weight:500;cursor:pointer;white-space:nowrap">Search</button>
            <button id="vw-back-btn" style="display:none;background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.4);border:1px solid rgba(255,255,255,0.1);border-radius:7px;padding:6px 12px;font-family:Geist Mono,monospace;font-size:11px;cursor:pointer">← back</button>
          </div>

          <!-- Player view (hidden initially) -->
          <div id="vw-player-view" style="display:none;flex-direction:column;flex:1;overflow:hidden">
            <div style="position:relative;width:100%;padding-top:56.25%;background:#000;flex-shrink:0">
              <iframe id="vw-player-frame" style="position:absolute;top:0;left:0;width:100%;height:100%;border:none"
                allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>
            </div>
            <div id="vw-video-info" style="padding:8px 12px;border-bottom:1px solid rgba(255,255,255,0.06);flex-shrink:0">
              <div style="display:flex;align-items:flex-start;gap:8px">
                <div style="flex:1;min-width:0">
                  <div id="vw-video-title" style="font-size:12px;font-weight:500;color:#e2e8f0;line-height:1.4;margin-bottom:2px"></div>
                  <div id="vw-video-channel" style="font-size:10.5px;color:rgba(255,255,255,0.35);font-family:Geist Mono,monospace"></div>
                </div>
                <div style="display:flex;gap:5px;flex-shrink:0;margin-top:1px">
                  <button id="vw-fav-btn" title="Add to favorites" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:6px;padding:4px 8px;color:rgba(255,255,255,0.4);font-size:13px;cursor:pointer;transition:all .15s">☆</button>
                  <button id="vw-pip-btn" title="Picture in Picture" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:6px;padding:4px 8px;color:rgba(255,255,255,0.4);font-size:11px;cursor:pointer;font-family:Geist,sans-serif;transition:all .15s">⊡ pip</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Results / home view -->
          <div id="vw-results-view" style="flex:1;overflow-y:auto;padding:6px 8px">
            <div id="vw-results-list"></div>
          </div>

          <!-- History / Favorites tabs -->
          <div id="vw-lib-bar" style="display:none;flex-shrink:0;border-top:1px solid rgba(255,255,255,0.06);background:#111118">
            <div style="display:flex;gap:2px;padding:0 8px">
              <button class="vw-lib-tab vw-lib-on" data-lib="history" style="padding:6px 10px;font-size:10px;color:rgba(248,113,113,0.8);border-bottom:2px solid #f87171;background:none;border-top:none;border-left:none;border-right:none;cursor:pointer;font-family:Geist,sans-serif">history</button>
              <button class="vw-lib-tab" data-lib="favorites" style="padding:6px 10px;font-size:10px;color:rgba(255,255,255,0.3);border:none;background:none;cursor:pointer;font-family:Geist,sans-serif">★ favorites</button>
            </div>
          </div>
          <div id="vw-lib-content" style="display:none;flex:1;overflow-y:auto;padding:6px 8px"></div>

          <!-- Status bar -->
          <div id="vw-status" style="padding:4px 10px;font-family:Geist Mono,monospace;font-size:10px;color:rgba(255,255,255,0.2);flex-shrink:0;border-top:1px solid rgba(255,255,255,0.05)">videowatchr — powered by youtube</div>

        </div>
      </div>

      <div class="mm-panel" id="mm-panel-tools">
        <div style="flex:1;overflow-y:auto;padding:10px 12px">

          <div class="bl-section">
            <div class="bl-title" style="color:rgba(34,211,238,0.6)">inspectors</div>
            <button class="bl-btn" id="tl-colorpicker">
              <span class="bl-icon">🎨</span>
              <div class="bl-info"><div class="bl-name">color picker</div><div class="bl-desc">Click any element to copy its color</div></div>
              <span class="bl-badge" id="tl-cp-badge" style="background:rgba(34,211,238,0.1);color:#22d3ee">toggle</span>
            </button>
            <button class="bl-btn" id="tl-ruler">
              <span class="bl-icon">📏</span>
              <div class="bl-info"><div class="bl-name">ruler</div><div class="bl-desc">Drag to measure pixel distances</div></div>
              <span class="bl-badge" id="tl-rl-badge" style="background:rgba(34,211,238,0.1);color:#22d3ee">toggle</span>
            </button>
            <button class="bl-btn" id="tl-fontinspect">
              <span class="bl-icon">🔤</span>
              <div class="bl-info"><div class="bl-name">font inspector</div><div class="bl-desc">Click any text to see its font info</div></div>
              <span class="bl-badge" id="tl-fi-badge" style="background:rgba(34,211,238,0.1);color:#22d3ee">toggle</span>
            </button>
          </div>

          <div class="bl-section">
            <div class="bl-title" style="color:rgba(34,211,238,0.6)">utilities</div>
            <button class="bl-btn" id="tl-imgdown">
              <span class="bl-icon">🖼</span>
              <div class="bl-info"><div class="bl-name">image downloader</div><div class="bl-desc">List all images with download buttons</div></div>
              <span class="bl-badge" style="background:rgba(34,211,238,0.1);color:#22d3ee">scan</span>
            </button>
            <button class="bl-btn" id="tl-wikipedia">
              <span class="bl-icon">📖</span>
              <div class="bl-info"><div class="bl-name">wikipedia lookup</div><div class="bl-desc">Search Wikipedia inline</div></div>
              <span class="bl-badge" style="background:rgba(34,211,238,0.1);color:#22d3ee">search</span>
            </button>
            <button class="bl-btn" id="tl-units">
              <span class="bl-icon">⚖️</span>
              <div class="bl-info"><div class="bl-name">unit converter</div><div class="bl-desc">Length, weight, temperature</div></div>
              <span class="bl-badge" style="background:rgba(34,211,238,0.1);color:#22d3ee">tool</span>
            </button>
            <button class="bl-btn" id="tl-css">
              <span class="bl-icon">💅</span>
              <div class="bl-info"><div class="bl-name">CSS injector</div><div class="bl-desc">Write and apply custom CSS live</div></div>
              <span class="bl-badge" style="background:rgba(34,211,238,0.1);color:#22d3ee">inject</span>
            </button>
          </div>

          <!-- Expandable areas -->
          <div id="tl-imglist" style="display:none"></div>
          <div id="tl-wiki-box" style="display:none;margin-top:8px"></div>
          <div id="tl-units-box" style="display:none;margin-top:8px"></div>
          <div id="tl-css-box" style="display:none;margin-top:8px"></div>
        </div>
      </div>

      <div class="mm-panel" id="mm-panel-notepad">
        <div style="display:flex;flex-direction:column;height:100%">
          <div style="display:flex;align-items:center;justify-content:space-between;padding:7px 12px;border-bottom:1px solid rgba(255,255,255,0.06);flex-shrink:0;background:#111118">
            <span style="font-size:10px;color:rgba(255,255,255,0.25);font-family:Geist Mono,monospace" id="np-wordcount">0 words</span>
            <div style="display:flex;gap:6px">
              <button id="np-copy" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:5px;padding:3px 10px;color:rgba(255,255,255,0.4);font-family:Geist,sans-serif;font-size:10px;cursor:pointer">copy</button>
              <button id="np-clear" style="background:rgba(248,113,113,0.08);border:1px solid rgba(248,113,113,0.2);border-radius:5px;padding:3px 10px;color:#f87171;font-family:Geist,sans-serif;font-size:10px;cursor:pointer">clear</button>
            </div>
          </div>
          <textarea id="np-area" spellcheck="true" placeholder="Start typing... notes are saved automatically."
            style="flex:1;background:transparent;border:none;outline:none;resize:none;padding:12px 14px;color:#e2e8f0;font-family:Geist,sans-serif;font-size:12.5px;line-height:1.7;color:#e2e8f0"></textarea>
        </div>
      </div>

      <div class="mm-panel" id="mm-panel-timer">
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:16px;padding:20px">

          <!-- Mode selector -->
          <div style="display:flex;gap:6px">
            <button class="mm-timer-mode tm-active" data-mins="25" data-label="pomodoro">🍅 pomodoro</button>
            <button class="mm-timer-mode" data-mins="5" data-label="short break">☕ short break</button>
            <button class="mm-timer-mode" data-mins="15" data-label="long break">😴 long break</button>
            <button class="mm-timer-mode" data-mins="0" data-label="custom">⚙ custom</button>
          </div>

          <!-- Custom input -->
          <div id="tm-custom-row" style="display:none;gap:6px;align-items:center">
            <input id="tm-custom-mins" type="number" min="1" max="999" value="10"
              style="width:60px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:6px;padding:5px 8px;color:#e2e8f0;font-family:Geist Mono,monospace;font-size:13px;outline:none;text-align:center"/>
            <span style="color:rgba(255,255,255,0.3);font-size:12px;font-family:Geist,sans-serif">minutes</span>
          </div>

          <!-- Big clock display -->
          <div id="tm-display" style="font-family:Geist Mono,monospace;font-size:64px;font-weight:300;color:#fff;letter-spacing:-0.02em;line-height:1">25:00</div>
          <div id="tm-label" style="font-size:11px;color:rgba(255,255,255,0.25);font-family:Geist,sans-serif;letter-spacing:.1em;text-transform:uppercase">pomodoro</div>

          <!-- Progress bar -->
          <div style="width:240px;height:3px;background:rgba(255,255,255,0.08);border-radius:2px;overflow:hidden">
            <div id="tm-progress" style="height:100%;background:#fb923c;width:100%;transition:width .5s linear;border-radius:2px"></div>
          </div>

          <!-- Controls -->
          <div style="display:flex;gap:10px">
            <button id="tm-start" style="background:rgba(251,146,60,0.15);border:1px solid rgba(251,146,60,0.3);border-radius:8px;padding:8px 28px;color:#fb923c;font-family:Geist,sans-serif;font-size:13px;font-weight:500;cursor:pointer">start</button>
            <button id="tm-reset" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:8px 18px;color:rgba(255,255,255,0.35);font-family:Geist,sans-serif;font-size:13px;cursor:pointer">reset</button>
          </div>

          <div id="tm-session" style="font-size:10px;color:rgba(255,255,255,0.2);font-family:Geist Mono,monospace">session 1</div>
        </div>
        <style>
          .mm-timer-mode{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:6px;padding:5px 10px;font-family:Geist,sans-serif;font-size:10px;color:rgba(255,255,255,0.35);cursor:pointer}
          .mm-timer-mode.tm-active{background:rgba(251,146,60,0.12);border-color:rgba(251,146,60,0.3);color:#fb923c}
        </style>
      </div>

      <div class="mm-panel" id="mm-panel-privacy">
        <div style="flex:1;overflow-y:auto;padding:10px 12px">
          <div id="pv-status" style="display:none;font-size:11px;padding:7px 11px;border-radius:7px;margin-bottom:8px;font-family:Geist Mono,monospace"></div>
          <div class="bl-section">
            <div class="bl-title" style="color:rgba(248,113,113,0.6)">fingerprint</div>
            <button class="bl-btn" id="pv-canvas">
              <span class="bl-icon">🖼</span>
              <div class="bl-info"><div class="bl-name">canvas fingerprint spoofer</div><div class="bl-desc">Adds random noise to canvas reads</div></div>
              <span class="bl-badge" id="pv-cv-badge" style="background:rgba(248,113,113,0.1);color:#f87171">toggle</span>
            </button>
            <button class="bl-btn" id="pv-audio">
              <span class="bl-icon">🔊</span>
              <div class="bl-info"><div class="bl-name">audio fingerprint spoofer</div><div class="bl-desc">Randomizes AudioContext output</div></div>
              <span class="bl-badge" id="pv-au-badge" style="background:rgba(248,113,113,0.1);color:#f87171">toggle</span>
            </button>
            <button class="bl-btn" id="pv-webgl">
              <span class="bl-icon">🎮</span>
              <div class="bl-info"><div class="bl-name">WebGL spoofer</div><div class="bl-desc">Masks GPU vendor/renderer strings</div></div>
              <span class="bl-badge" id="pv-wg-badge" style="background:rgba(248,113,113,0.1);color:#f87171">toggle</span>
            </button>
          </div>
          <div class="bl-section">
            <div class="bl-title" style="color:rgba(248,113,113,0.6)">network</div>
            <button class="bl-btn" id="pv-referrer">
              <span class="bl-icon">🔗</span>
              <div class="bl-info"><div class="bl-name">referrer blocker</div><div class="bl-desc">Strips referrer from all outgoing requests</div></div>
              <span class="bl-badge" id="pv-rf-badge" style="background:rgba(248,113,113,0.1);color:#f87171">toggle</span>
            </button>
            <button class="bl-btn" id="pv-useragent">
              <span class="bl-icon">🕵️</span>
              <div class="bl-info"><div class="bl-name">user agent spoofer</div><div class="bl-desc">Randomize navigator.userAgent</div></div>
              <span class="bl-badge" id="pv-ua-badge" style="background:rgba(248,113,113,0.1);color:#f87171">toggle</span>
            </button>
          </div>
          <div class="bl-section">
            <div class="bl-title" style="color:rgba(248,113,113,0.6)">info</div>
            <button class="bl-btn" id="pv-report">
              <span class="bl-icon">📋</span>
              <div class="bl-info"><div class="bl-name">fingerprint report</div><div class="bl-desc">Show what sites can see about your browser</div></div>
              <span class="bl-badge" style="background:rgba(74,222,128,0.1);color:#4ade80">safe</span>
            </button>
          </div>
        </div>
      </div>

      <div class="mm-panel" id="mm-panel-games">
        <div class="gm-bar">
          <button class="gm-pick gm-on" id="gm-tetris">tetris</button>
          <button class="gm-pick" id="gm-flappy">flappy bird</button>
          <button class="gm-pick" id="gm-space">space invaders</button>
          <button class="gm-pick" id="gm-snake">snake</button>
          <button class="gm-pick" id="gm-pong">pong</button>
          <button class="gm-pick" id="gm-mine">minesweeper</button>
        </div>
        <canvas id="mm-gamecanvas"></canvas>
        <div class="gm-hud">score: <span id="gm-score">0</span> &nbsp;|&nbsp; <span id="gm-status-label">arrows / space to play</span></div>
      </div>

    </div>
  `;
  document.body.appendChild(el);
  const toastContainer=document.createElement('div');toastContainer.id='__mm_toast__';document.body.appendChild(toastContainer);

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
  function showToast(type,title,detail,duration){
    const t=document.createElement('div');
    t.className='mm-toast mm-toast-'+(type==='ok'?'ok':'err');
    t.innerHTML='<div class="mm-toast-title">'+(type==='ok'?'&#10003; '+title:'&#10007; '+title)+'</div>'
      +(detail?'<div style="margin-top:2px;opacity:0.75;font-size:10px">'+String(detail).slice(0,120)+'</div>':'');
    toastContainer.appendChild(t);
    requestAnimationFrame(function(){requestAnimationFrame(function(){t.classList.add('mm-toast-in');});});
    setTimeout(function(){
      t.classList.remove('mm-toast-in');t.classList.add('mm-toast-out');
      setTimeout(function(){t.remove();},200);
    },duration||2800);
  }
  function goConsole(){
    document.querySelectorAll('#__modmenu__ .mm-tab').forEach(x=>x.classList.remove('mm-active'));
    document.querySelectorAll('#__modmenu__ .mm-panel').forEach(x=>x.classList.remove('mm-active'));
    document.querySelector('#__modmenu__ [data-tab="console"]').classList.add('mm-active');
    $m('mm-panel-console').classList.add('mm-active');
  }
  function runCode(code,cmdName){
    if(!code.trim())return;
    const row=document.createElement('div');row.className='mm-log';
    row.innerHTML=`<span class="mm-ts">${ts()}</span><span style="color:rgba(255,255,255,0.3)">›</span><span style="flex:1;word-break:break-all;color:#e2e8f0">${esc(code)}</span>`;
    cout.appendChild(row);
    try{
      const r=(0,eval)(code);
      const r2=document.createElement('div');r2.className='mm-log';
      r2.innerHTML=`<span class="mm-ts"></span><span style="color:rgba(255,255,255,0.2)">‹</span><span style="flex:1">${fmt(r)}</span>`;
      cout.appendChild(r2);
      showToast('ok', cmdName||'command executed', r!==undefined?String(r).slice(0,60):null);
    }
    catch(e){
      log(e.message,'e');
      showToast('err', 'command failed', e.message);
    }
    cout.scrollTop=cout.scrollHeight;
  }
  $m('mm-runbtn').addEventListener('click',()=>{const v=$m('mm-cinput').value;if(!v.trim())return;history.unshift(v);histIdx=-1;runCode(v,'eval');$m('mm-cinput').value='';});
  $m('mm-cinput').addEventListener('keydown',e=>{
    if(e.key==='Enter')$m('mm-runbtn').click();
    if(e.key==='ArrowUp'){e.preventDefault();histIdx=Math.min(histIdx+1,history.length-1);$m('mm-cinput').value=history[histIdx]||'';}
    if(e.key==='ArrowDown'){e.preventDefault();histIdx=Math.max(histIdx-1,-1);$m('mm-cinput').value=histIdx<0?'':history[histIdx];}
  });
  log('ModMenuHacker v3.0 — '+location.hostname,'i');
  // ── home clock ──
  (function(){
    const DAYS=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const MONTHS=['January','February','March','April','May','June','July','August','September','October','November','December'];
    function tickClock(){
      const n=new Date();
      const h=String(n.getHours()).padStart(2,'0');
      const m=String(n.getMinutes()).padStart(2,'0');
      const s=String(n.getSeconds()).padStart(2,'0');
      const timeEl=document.getElementById('mm-home-time');
      const secsEl=document.getElementById('mm-home-secs');
      const dateEl=document.getElementById('mm-home-date');
      if(timeEl)timeEl.textContent=h+':'+m;
      if(secsEl)secsEl.textContent=s;
      if(dateEl)dateEl.textContent=DAYS[n.getDay()]+', '+MONTHS[n.getMonth()]+' '+n.getDate()+' '+n.getFullYear();
    }
    tickClock();
    setInterval(tickClock,1000);
  })();



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

  // ── asteroid game ──
  let asteroidOverlay=null;
  function launchAsteroids(){
    if(asteroidOverlay){asteroidOverlay.remove();asteroidOverlay=null;return;}
    const ov=document.createElement('div');
    ov.id='__asteroid_ov__';
    Object.assign(ov.style,{position:'fixed',top:'0',left:'0',width:'100vw',height:'100vh',zIndex:'2147483646',background:'#000',overflow:'hidden'});
    const cv=document.createElement('canvas');
    cv.style.cssText='display:block;width:100%;height:100%';
    const hud=document.createElement('div');
    Object.assign(hud.style,{position:'absolute',top:'0',left:'0',right:'0',padding:'14px 20px',display:'flex',justifyContent:'space-between',alignItems:'center',pointerEvents:'none',fontFamily:'\'Geist Mono\',monospace',fontSize:'13px',color:'rgba(255,255,255,0.7)',zIndex:'10'});
    hud.innerHTML='<span id="__ast_score__">SCORE: 0</span><span style="font-size:11px;opacity:.5">ARROWS turn · W thrust · SPACE shoot · ESC quit</span><span id="__ast_lives__">LIVES: ♦♦♦</span>';
    ov.appendChild(cv);ov.appendChild(hud);
    document.body.appendChild(ov);
    asteroidOverlay=ov;
    cv.width=window.innerWidth;cv.height=window.innerHeight;
    const W=cv.width,H=cv.height,CX=W/2,CY=H/2;
    const ctx=cv.getContext('2d');
    const FOV=700;

    // Camera/ship state — camera IS the ship
    // yaw = left/right, pitch = up/down
    const cam={x:0,y:0,z:0,vx:0,vy:0,vz:0,yaw:0,pitch:0,dead:false,inv:0};

    // World-to-camera transform then perspective project
    // Returns null if behind camera
    function worldToScreen(wx,wy,wz){
      // Translate relative to camera
      let dx=wx-cam.x, dy=wy-cam.y, dz=wz-cam.z;
      // Rotate by -yaw around Y axis
      const cy=Math.cos(-cam.yaw), sy=Math.sin(-cam.yaw);
      let rx= dx*cy + dz*sy;
      let ry= dy;
      let rz=-dx*sy + dz*cy;
      // Rotate by -pitch around X axis
      const cp=Math.cos(-cam.pitch), sp=Math.sin(-cam.pitch);
      let ry2= ry*cp - rz*sp;
      let rz2= ry*sp + rz*cp;
      ry=ry2; rz=rz2;
      if(rz<1)return null; // behind camera
      const scale=FOV/rz;
      return{sx:CX+rx*scale, sy:CY+ry*scale, scale, depth:rz};
    }

    // Forward vector of camera in world space
    function fwdVec(){
      return{
        x: Math.sin(cam.yaw)*Math.cos(cam.pitch),
        y:-Math.sin(cam.pitch),
        z: Math.cos(cam.yaw)*Math.cos(cam.pitch)
      };
    }

    let bullets=[],asteroids=[],particles=[],stars=[];
    let score=0,lives=3,level=1,gameOver=false,gameWon=false,keys={},shootCool=0;

    // Stars in world space on a large sphere
    for(let i=0;i<300;i++){
      const theta=Math.random()*Math.PI*2, phi=Math.acos(2*Math.random()-1), r=4000;
      stars.push({x:Math.sin(phi)*Math.cos(theta)*r, y:Math.cos(phi)*r, z:Math.sin(phi)*Math.sin(theta)*r, br:Math.random()});
    }

    function randAsteroid(dist){
      const angle=Math.random()*Math.PI*2;
      const size=28+Math.random()*55;
      const vc=7+Math.floor(Math.random()*5), verts=[];
      for(let j=0;j<vc;j++){const a=j/vc*Math.PI*2,r=size*(0.6+Math.random()*0.45);verts.push([Math.cos(a)*r,Math.sin(a)*r]);}
      return{
        x:cam.x+Math.cos(angle)*dist, y:cam.y+(Math.random()-0.5)*dist*0.4, z:cam.z+Math.sin(angle)*dist,
        vx:(Math.random()-0.5)*1.4, vy:(Math.random()-0.5)*0.6, vz:(Math.random()-0.5)*1.4,
        spinX:(Math.random()-0.5)*0.025, spinY:(Math.random()-0.5)*0.025,
        angX:Math.random()*Math.PI*2, angY:Math.random()*Math.PI*2,
        size, verts, hp:size>55?2:1,
        hue:Math.random()*40+10, sat:15+Math.random()*15, lit:28+Math.random()*22
      };
    }
    function makeLevel(){
      asteroids=[];
      const n=5+level*2;
      for(let i=0;i<n;i++)asteroids.push(randAsteroid(500+Math.random()*600));
    }
    makeLevel();

    function spawnParticles(x,y,z,n,col){
      for(let i=0;i<n;i++)particles.push({x,y,z,vx:(Math.random()-0.5)*8,vy:(Math.random()-0.5)*8,vz:(Math.random()-0.5)*8,life:1,maxLife:1,col});
    }

    function updateHUD(){
      document.getElementById('__ast_score__').textContent='SCORE: '+score;
      const lh=document.getElementById('__ast_lives__');
      lh.textContent='LIVES: '+'♦'.repeat(Math.max(0,lives))+'◇'.repeat(Math.max(0,3-lives));
    }
    function respawn(){Object.assign(cam,{x:0,y:0,z:0,vx:0,vy:0,vz:0,yaw:0,pitch:0,dead:false,inv:180});}

    // Rotate a 2D vertex by angX and angY for a "3D spinning rock" look
    // We apply angX as a vertical squish and angY as a horizontal squish
    function spinVert(v,angX,angY){
      const cosX=Math.cos(angX), cosY=Math.cos(angY);
      return[v[0]*cosY, v[1]*cosX];
    }

    function loop(){
      if(!asteroidOverlay)return;
      requestAnimationFrame(loop);
      ctx.fillStyle='rgba(0,0,0,0.22)';ctx.fillRect(0,0,W,H);

      // --- Stars (fixed in world) ---
      for(const s of stars){
        const p=worldToScreen(s.x,s.y,s.z);
        if(!p)continue;
        // Only draw if on screen
        if(p.sx<-10||p.sx>W+10||p.sy<-10||p.sy>H+10)continue;
        const br=0.3+s.br*0.6;
        ctx.fillStyle=`rgba(255,255,255,${br})`;
        ctx.beginPath();ctx.arc(p.sx,p.sy,Math.min(2,Math.max(0.4,p.scale*40)),0,Math.PI*2);ctx.fill();
      }

      if(!gameOver&&!gameWon){
        const turnSpd=0.032, thrust=0.22, drag=0.972;
        if(!cam.dead){
          if(keys['ArrowLeft'])cam.yaw-=turnSpd;
          if(keys['ArrowRight'])cam.yaw+=turnSpd;
          if(keys['ArrowUp'])cam.pitch=Math.max(-1.1,cam.pitch-turnSpd*0.8);
          if(keys['ArrowDown'])cam.pitch=Math.min(1.1,cam.pitch+turnSpd*0.8);
          if(keys['w']||keys['W']||keys['z']||keys['Z']){
            const f=fwdVec();
            cam.vx+=f.x*thrust; cam.vy+=f.y*thrust; cam.vz+=f.z*thrust;
          }
          if(keys['s']||keys['S']){
            const f=fwdVec();
            cam.vx-=f.x*thrust*0.5; cam.vy-=f.y*thrust*0.5; cam.vz-=f.z*thrust*0.5;
          }
          if(shootCool>0)shootCool--;
          if(keys[' ']&&shootCool===0){
            const f=fwdVec(), spd=26;
            bullets.push({x:cam.x,y:cam.y,z:cam.z, vx:cam.vx+f.x*spd, vy:cam.vy+f.y*spd, vz:cam.vz+f.z*spd, life:90});
            shootCool=10;
          }
        }
        cam.vx*=drag; cam.vy*=drag; cam.vz*=drag;
        cam.x+=cam.vx; cam.y+=cam.vy; cam.z+=cam.vz;
        if(cam.inv>0)cam.inv--;

        // Update bullets
        for(const b of bullets){b.x+=b.vx;b.y+=b.vy;b.z+=b.vz;b.life--;}
        bullets=bullets.filter(b=>b.life>0);

        // Update asteroids
        for(const a of asteroids){
          a.x+=a.vx; a.y+=a.vy; a.z+=a.vz;
          a.angX+=a.spinX; a.angY+=a.spinY;
          // Soft wrap — if too far from cam, mirror on opposite side
          const WRAP=2000;
          const relX=a.x-cam.x, relZ=a.z-cam.z;
          if(relX>WRAP)a.x-=WRAP*2; if(relX<-WRAP)a.x+=WRAP*2;
          if(relZ>WRAP)a.z-=WRAP*2; if(relZ<-WRAP)a.z+=WRAP*2;
          const relY=a.y-cam.y;
          if(relY>800)a.y-=1600; if(relY<-800)a.y+=1600;
        }

        // Bullet–asteroid collision
        for(let bi=bullets.length-1;bi>=0;bi--){
          const b=bullets[bi]; let hit=false;
          for(let ai=asteroids.length-1;ai>=0;ai--){
            const a=asteroids[ai];
            const dx=b.x-a.x, dy=b.y-a.y, dz=b.z-a.z;
            if(dx*dx+dy*dy+dz*dz < a.size*a.size){
              spawnParticles(a.x,a.y,a.z,14,`hsl(${a.hue},60%,60%)`);
              a.hp--;
              if(a.hp<=0){
                score+=a.size>55?150:300; updateHUD();
                if(a.size>55){
                  for(let k=0;k<2;k++){
                    const c=randAsteroid(0);
                    Object.assign(c,{x:a.x+(Math.random()-0.5)*60, y:a.y+(Math.random()-0.5)*30, z:a.z+(Math.random()-0.5)*60,
                      vx:a.vx+(Math.random()-0.5)*2.5, vy:a.vy+(Math.random()-0.5)*1, vz:a.vz+(Math.random()-0.5)*2.5,
                      size:a.size*0.5, hp:1});
                    asteroids.push(c);
                  }
                }
                asteroids.splice(ai,1);
              }
              bullets.splice(bi,1); hit=true; break;
            }
          }
          if(hit)break;
        }

        // Ship–asteroid collision
        if(!cam.dead&&cam.inv===0){
          for(const a of asteroids){
            const dx=cam.x-a.x, dy=cam.y-a.y, dz=cam.z-a.z;
            if(dx*dx+dy*dy+dz*dz < (a.size+14)*(a.size+14)){
              cam.dead=true; lives--;
              spawnParticles(cam.x,cam.y,cam.z,40,'#22d3ee');
              updateHUD();
              if(lives>0)setTimeout(()=>respawn(),1800); else gameOver=true;
              break;
            }
          }
        }

        if(asteroids.length===0){
          level++; score+=1000; updateHUD();
          if(level>5)gameWon=true; else{makeLevel();}
        }
      }

      // --- Draw particles ---
      for(const p of particles){
        p.x+=p.vx; p.y+=p.vy; p.z+=p.vz;
        p.vx*=0.93; p.vy*=0.93; p.vz*=0.93;
        p.life-=0.03;
      }
      particles=particles.filter(p=>p.life>0);
      for(const p of particles){
        const sp=worldToScreen(p.x,p.y,p.z); if(!sp)continue;
        ctx.globalAlpha=p.life*0.85;
        ctx.fillStyle=p.col;
        ctx.beginPath();ctx.arc(sp.sx,sp.sy,Math.max(1,sp.scale*8),0,Math.PI*2);ctx.fill();
      }
      ctx.globalAlpha=1;

      // --- Draw asteroids (back to front) ---
      const sortedAsts=[...asteroids].sort((a,b)=>{
        const da=(a.x-cam.x)**2+(a.y-cam.y)**2+(a.z-cam.z)**2;
        const db=(b.x-cam.x)**2+(b.y-cam.y)**2+(b.z-cam.z)**2;
        return db-da;
      });
      for(const a of sortedAsts){
        const sp=worldToScreen(a.x,a.y,a.z); if(!sp)continue;
        if(sp.sx<-300||sp.sx>W+300||sp.sy<-300||sp.sy>H+300)continue;
        const S=sp.scale;
        // Build screen-space verts by spinning and scaling
        const sverts=a.verts.map(v=>{
          const sv=spinVert(v,a.angX,a.angY);
          return[sp.sx+sv[0]*S, sp.sy+sv[1]*S];
        });
        // Dark face
        ctx.beginPath(); ctx.moveTo(sverts[0][0],sverts[0][1]);
        for(let i=1;i<sverts.length;i++)ctx.lineTo(sverts[i][0],sverts[i][1]);
        ctx.closePath();
        ctx.fillStyle=`hsl(${a.hue},${a.sat}%,${a.lit}%)`;
        ctx.fill();
        // Lit edge highlight (top-left light source)
        ctx.strokeStyle=`rgba(255,255,255,0.18)`; ctx.lineWidth=Math.max(0.5,S*1.5);
        ctx.stroke();
        // Bright top edge
        if(sverts.length>2){
          ctx.beginPath(); ctx.moveTo(sverts[0][0],sverts[0][1]);
          for(let i=1;i<Math.ceil(sverts.length/2);i++)ctx.lineTo(sverts[i][0],sverts[i][1]);
          ctx.strokeStyle=`rgba(255,255,255,0.38)`; ctx.lineWidth=Math.max(0.5,S*2);
          ctx.stroke();
        }
        // HP indicator
        if(a.hp>1){
          ctx.fillStyle='rgba(251,146,60,0.8)'; ctx.font=`${Math.max(9,S*14)}px Geist Mono,monospace`;
          ctx.textAlign='center'; ctx.fillText('▲',sp.sx,sp.sy-a.size*S-6);
        }
      }

      // --- Draw bullets ---
      for(const b of bullets){
        const sp=worldToScreen(b.x,b.y,b.z); if(!sp)continue;
        if(sp.sx<0||sp.sx>W||sp.sy<0||sp.sy>H)continue;
        ctx.shadowColor='#facc15'; ctx.shadowBlur=10;
        ctx.fillStyle='#facc15';
        ctx.beginPath(); ctx.arc(sp.sx,sp.sy,Math.max(2,sp.scale*6),0,Math.PI*2); ctx.fill();
        ctx.shadowBlur=0;
      }

      // --- Draw ship (fixed HUD element at bottom center) ---
      if(!cam.dead){
        const alpha=cam.inv>0?(Math.floor(cam.inv/7)%2===0?0.1:0.9):1;
        ctx.globalAlpha=alpha;
        const SX=CX, SY=H-80;
        // Ship body
        ctx.strokeStyle='#22d3ee'; ctx.lineWidth=1.5;
        ctx.fillStyle='rgba(34,211,238,0.12)';
        ctx.beginPath(); ctx.moveTo(SX,SY-20); ctx.lineTo(SX+16,SY+12); ctx.lineTo(SX,SY+6); ctx.lineTo(SX-16,SY+12); ctx.closePath();
        ctx.fill(); ctx.stroke();
        // Cockpit
        ctx.fillStyle='rgba(34,211,238,0.35)';
        ctx.beginPath(); ctx.ellipse(SX,SY-6,5,8,0,0,Math.PI*2); ctx.fill();
        // Wings
        ctx.strokeStyle='rgba(34,211,238,0.5)'; ctx.lineWidth=1;
        ctx.beginPath(); ctx.moveTo(SX-16,SY+12); ctx.lineTo(SX-26,SY+20); ctx.lineTo(SX-10,SY+8); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(SX+16,SY+12); ctx.lineTo(SX+26,SY+20); ctx.lineTo(SX+10,SY+8); ctx.stroke();
        // Thrust flame
        if(keys['w']||keys['W']||keys['z']||keys['Z']){
          ctx.fillStyle=`rgba(251,146,60,${0.5+Math.random()*0.4})`;
          const fl=12+Math.random()*16;
          ctx.beginPath(); ctx.moveTo(SX-6,SY+10); ctx.lineTo(SX,SY+10+fl); ctx.lineTo(SX+6,SY+10); ctx.closePath(); ctx.fill();
        }
        ctx.globalAlpha=1;
      }

      // --- Speed lines when thrusting ---
      if((keys['w']||keys['W']||keys['z']||keys['Z'])&&!cam.dead){
        ctx.strokeStyle='rgba(34,211,238,0.08)'; ctx.lineWidth=1;
        for(let i=0;i<8;i++){
          const sx=Math.random()*W, sy=Math.random()*H;
          const len=30+Math.random()*60;
          ctx.beginPath(); ctx.moveTo(sx,sy); ctx.lineTo(sx+(sx-CX)*0.04,sy+(sy-CY)*0.04+len); ctx.stroke();
        }
      }

      // --- Crosshair ---
      ctx.strokeStyle='rgba(255,255,255,0.22)'; ctx.lineWidth=1;
      ctx.beginPath(); ctx.moveTo(CX-18,CY); ctx.lineTo(CX-7,CY); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(CX+7,CY); ctx.lineTo(CX+18,CY); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(CX,CY-18); ctx.lineTo(CX,CY-7); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(CX,CY+7); ctx.lineTo(CX,CY+18); ctx.stroke();
      ctx.strokeStyle='rgba(255,255,255,0.1)';
      ctx.beginPath(); ctx.arc(CX,CY,24,0,Math.PI*2); ctx.stroke();

      // --- Minimap (top-down view, rotates with ship yaw) ---
      const MX=W-76,MY=H-76,MR=60;
      ctx.save();
      ctx.beginPath(); ctx.arc(MX,MY,MR,0,Math.PI*2);
      ctx.fillStyle='rgba(0,0,0,0.45)'; ctx.fill();
      ctx.strokeStyle='rgba(255,255,255,0.08)'; ctx.lineWidth=1; ctx.stroke();
      ctx.clip();
      // Rotate minimap to match heading
      ctx.translate(MX,MY); ctx.rotate(-cam.yaw);
      for(const a of asteroids){
        const mx=(a.x-cam.x)/22, mz=(a.z-cam.z)/22;
        if(mx*mx+mz*mz>MR*MR)continue;
        ctx.fillStyle='rgba(251,146,60,0.7)';
        ctx.beginPath(); ctx.arc(mx,mz,Math.max(2,a.size/14),0,Math.PI*2); ctx.fill();
      }
      // Ship dot (always at center, pointing up)
      ctx.fillStyle='#22d3ee';
      ctx.beginPath(); ctx.moveTo(0,-5); ctx.lineTo(3,3); ctx.lineTo(-3,3); ctx.closePath(); ctx.fill();
      ctx.restore();

      // --- Level / speed HUD ---
      ctx.fillStyle='rgba(255,255,255,0.18)'; ctx.font='11px Geist Mono,monospace'; ctx.textAlign='left';
      ctx.fillText('LVL '+level,20,H-20);
      const spd=Math.sqrt(cam.vx*cam.vx+cam.vy*cam.vy+cam.vz*cam.vz);
      ctx.fillText('SPD '+(spd*10|0),80,H-20);
      ctx.fillText('AST '+asteroids.length,150,H-20);

      // --- Game over / win ---
      if(gameOver||gameWon){
        ctx.fillStyle='rgba(0,0,0,0.7)'; ctx.fillRect(0,0,W,H);
        ctx.textAlign='center';
        ctx.fillStyle=gameWon?'#4ade80':'#f87171';
        ctx.font='bold 52px Geist,sans-serif'; ctx.fillText(gameWon?'MISSION COMPLETE':'GAME OVER',CX,CY-24);
        ctx.fillStyle='rgba(255,255,255,0.55)'; ctx.font='15px Geist Mono,monospace';
        ctx.fillText('FINAL SCORE: '+score,CX,CY+18);
        ctx.fillStyle='rgba(255,255,255,0.28)'; ctx.font='12px Geist,sans-serif';
        ctx.fillText('R to restart   ·   ESC to quit',CX,CY+52);
      }
      if(cam.dead&&!gameOver){
        ctx.textAlign='center'; ctx.fillStyle='rgba(34,211,238,0.65)'; ctx.font='15px Geist Mono,monospace';
        ctx.fillText('— RESPAWNING —',CX,CY+70);
      }
    }

    const keydown=e=>{
      keys[e.key]=true;
      if(e.key==='Escape'){asteroidOverlay.remove();asteroidOverlay=null;document.removeEventListener('keydown',keydown);document.removeEventListener('keyup',keyup);return;}
      if((e.key==='r'||e.key==='R')&&(gameOver||gameWon)){gameOver=false;gameWon=false;lives=3;score=0;level=1;makeLevel();respawn();updateHUD();}
      if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight',' '].includes(e.key))e.preventDefault();
    };
    const keyup=e=>{keys[e.key]=false;};
    document.addEventListener('keydown',keydown);
    document.addEventListener('keyup',keyup);
    updateHUD();
    loop();
    log('Asteroids launched — ESC to quit','i');
  }

  // ── commands ──
  const commands=[
    {name:'edit anything',desc:'Click any element on the page to edit its text',tag:'edit',toggle:true,
      run:(el2)=>{editOn=!editOn;el2.classList.toggle('mm-cmd-on',editOn);el2.querySelector('.mm-ctag').textContent=editOn?'on':'#edit';el2.querySelector('.mm-cdesc').textContent=editOn?'Active — click any element, Escape to commit':'Click any element on the page to edit its text';editOn?enableEdit():disableEdit();}},
    {name:'scroll to top',desc:'Smooth scroll to top of page',tag:'dom',code:`window.scrollTo({top:0,behavior:'smooth'});log('Scrolled to top','i')`},
    {name:'scroll to bottom',desc:'Smooth scroll to bottom of page',tag:'dom',code:`window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'});log('Scrolled to bottom','i')`},
    {name:'highlight all links',desc:'Outline every anchor element',tag:'dom',code:`const n=document.querySelectorAll('a').length;document.querySelectorAll('a').forEach(a=>a.style.outline='2px solid #22d3ee');log('Highlighted '+n+' links','i')`},
    {name:'remove all images',desc:'Remove every img element from the page',tag:'dom',code:`const n=document.querySelectorAll('img').length;document.querySelectorAll('img').forEach(i=>i.remove());log('Removed '+n+' images','w')`},
    {name:'count all elements',desc:'Log total DOM element count',tag:'dom',code:`log('Total elements: '+document.querySelectorAll('*').length,'i')`},
    {name:'copy page URL',desc:'Copy current URL to clipboard',tag:'nav',code:`navigator.clipboard.writeText(location.href).then(()=>log('Copied URL: '+location.href,'i')).catch(()=>log('Clipboard blocked','e'))`},
    {name:'open blank tab',desc:'Open about:blank in new tab',tag:'nav',code:`window.open('about:blank','_blank');log('Opened blank tab','i')`},
    {name:'hard reload',desc:'Force reload ignoring cache',tag:'nav',code:`log('Reloading...','w');setTimeout(()=>location.reload(true),300)`},
    {name:'log fetch calls',desc:'Patch fetch to log all network requests',tag:'net',code:`const _f=window.fetch;window.fetch=(...a)=>{log('[fetch] '+String(a[0]),'i');return _f(...a)};log('fetch() patched — all requests will appear here','i')`},
    {name:'clear localStorage',desc:'Wipe all localStorage keys',tag:'storage',code:`localStorage.clear();log('localStorage cleared','w')`},
    {name:'clear sessionStorage',desc:'Wipe all sessionStorage keys',tag:'storage',code:`sessionStorage.clear();log('sessionStorage cleared','w')`},
    {name:'dark mode toggle',desc:'Invert page colors',tag:'page',code:`const on=!document.body.style.filter;document.body.style.filter=on?'invert(1) hue-rotate(180deg)':'';log('Dark mode '+(on?'ON':'OFF'),'i')`},
    {name:'zoom 150%',desc:'Scale page to 150%',tag:'page',code:`document.body.style.zoom='1.5';log('Zoom set to 150%','i')`},
    {name:'zoom reset',desc:'Reset page zoom to 100%',tag:'page',code:`document.body.style.zoom='1';log('Zoom reset to 100%','i')`},
    {name:'rainbow mode',desc:'Cycle hue-rotate animation on the page',tag:'page',code:`let h=0;setInterval(()=>{document.body.style.filter='hue-rotate('+h+'deg)';h+=2},30);log('Rainbow mode ON — refresh to stop','i')`},
    {name:'disable all CSS',desc:'Remove all stylesheets from page',tag:'page',code:`const n=document.querySelectorAll('link[rel="stylesheet"],style').length;document.querySelectorAll('link[rel="stylesheet"],style').forEach(s=>s.remove());log('Removed '+n+' stylesheet(s) — refresh to restore','w')`},
    {name:'asteroids 3D',desc:'Fullscreen 3D asteroid shooter overlay — ESC to quit',tag:'game',toggle:true,
      run:(el2)=>{const on=!!asteroidOverlay;launchAsteroids();el2.classList.toggle('mm-cmd-on',!on);el2.querySelector('.mm-ctag').textContent=!on?'PLAYING':'#game';el2.querySelector('.mm-cdesc').textContent=!on?'Running — ESC or click again to quit':'Fullscreen 3D asteroid shooter overlay — ESC to quit';}},
    // ── dom ──
    {name:'show all passwords',desc:'Reveal all password input fields as plain text',tag:'dom',code:`const n=document.querySelectorAll('input[type="password"]').length;document.querySelectorAll('input[type="password"]').forEach(i=>{i.type='text'});log('Revealed '+n+' password field(s)','i')`},
    {name:'click all checkboxes',desc:'Check every checkbox on the page',tag:'dom',code:`document.querySelectorAll('input[type="checkbox"]:not(:checked)').forEach(c=>c.click())`},
    {name:'remove all popups',desc:'Remove fixed/sticky overlays and modals',tag:'dom',code:`let n=0;document.querySelectorAll('*').forEach(e=>{const s=getComputedStyle(e);if((s.position==='fixed'||s.position==='sticky')&&e!==document.getElementById('__modmenu__')){e.remove();n++}});log('Removed '+n+' fixed/sticky element(s)','w')`},
    {name:'remove cookie banners',desc:'Nuke common cookie consent banners',tag:'dom',code:`let n=0;['cookie','consent','gdpr','banner','popup','overlay','modal'].forEach(w=>document.querySelectorAll('[id*="'+w+'"],[class*="'+w+'"]').forEach(e=>{if(e!==document.getElementById('__modmenu__')){e.remove();n++}}));log('Removed '+n+' banner/popup element(s)','w')`},
    {name:'show hidden elements',desc:'Make all hidden elements visible',tag:'dom',code:`let n=0;document.querySelectorAll('*').forEach(e=>{const s=getComputedStyle(e);if(s.display==='none'||s.visibility==='hidden'||s.opacity==='0'){e.style.cssText+='display:block!important;visibility:visible!important;opacity:1!important';n++}});log('Made '+n+' hidden element(s) visible','i')`},
    {name:'dump all links',desc:'Log every hyperlink href to mod menu console',tag:'dom',code:`const links=Array.from(document.querySelectorAll('a[href]'));links.forEach(a=>log(a.href,'i'));log('--- '+links.length+' links total ---','w')`},
    {name:'dump all images',desc:'Log every image src to mod menu console',tag:'dom',code:`const imgs=Array.from(document.images);imgs.forEach(i=>log(i.src,'i'));log('--- '+imgs.length+' images total ---','w')`},
    {name:'outline all elements',desc:'Draw a coloured outline around every DOM element',tag:'dom',code:`const all=document.querySelectorAll('*');all.forEach((e,i)=>{e.style.outline='1px solid hsl('+(i*37%360)+',80%,55%)'});log('Outlined '+all.length+' elements','i')`},
    {name:'remove all outlines',desc:'Strip all inline outlines added by debug tools',tag:'dom',code:`document.querySelectorAll('*').forEach(e=>e.style.outline='');log('All outlines removed','i')`},
    {name:'freeze page',desc:'Disable all pointer events — page becomes unclickable',tag:'dom',code:`document.body.style.pointerEvents='none';log('Page frozen — refresh to undo','w')`},
    // ── nav ──
    {name:'go back',desc:'Navigate to previous page in history',tag:'nav',code:`history.back();log('Navigating back...','i')`},
    {name:'go forward',desc:'Navigate forward in history',tag:'nav',code:`history.forward();log('Navigating forward...','i')`},
    {name:'copy page title',desc:'Copy the current page title to clipboard',tag:'nav',code:`navigator.clipboard.writeText(document.title).then(()=>log('Copied title: '+document.title,'i')).catch(()=>log('Clipboard blocked','e'))`},
    {name:'copy all text',desc:'Copy the entire visible page text to clipboard',tag:'nav',code:`navigator.clipboard.writeText(document.body.innerText).then(()=>log('Page text copied ('+document.body.innerText.length+' chars)','i')).catch(()=>log('Clipboard blocked','e'))`},
    {name:'print page',desc:'Open the browser print dialog',tag:'nav',code:`log('Opening print dialog...','i');window.print()`},
    // ── net ──
    {name:'block all images',desc:'Intercept future image requests and block them',tag:'net',code:`const s=document.createElement('style');s.textContent='img{display:none!important}';document.head.appendChild(s);log('All images hidden — refresh to restore','w')`},
    {name:'dump network timing',desc:'Log resource load times to mod menu console',tag:'net',code:`const res=performance.getEntriesByType('resource').sort((a,b)=>b.duration-a.duration).slice(0,20);res.forEach(r=>log(r.duration.toFixed(0).padStart(6)+' ms  '+r.name.split('/').pop(),'i'));log('--- top '+res.length+' slowest resources ---','w')`},
    {name:'intercept XHR',desc:'Patch XMLHttpRequest to log all requests',tag:'net',code:`const _open=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(m,u,...a){log('[XHR] '+m+' '+String(u),'i');return _open.call(this,m,u,...a)};log('XHR patched — all requests will appear here','i')`},
    // ── storage ──
    {name:'dump localStorage JSON',desc:'Pretty-print all localStorage to mod menu console',tag:'storage',code:`const d={};for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);try{d[k]=JSON.parse(localStorage.getItem(k))}catch(e){d[k]=localStorage.getItem(k)}}if(!localStorage.length){log('localStorage is empty','w')}else{Object.entries(d).forEach(([k,v])=>log(k+' → '+JSON.stringify(v).slice(0,120),'i'));log('--- '+localStorage.length+' keys total ---','w')}`},
    {name:'backup localStorage',desc:'Copy localStorage as JSON to clipboard',tag:'storage',code:`const d={};for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);try{d[k]=JSON.parse(localStorage.getItem(k))}catch(e){d[k]=localStorage.getItem(k)}}navigator.clipboard.writeText(JSON.stringify(d,null,2)).then(()=>log('localStorage backup copied to clipboard ('+localStorage.length+' keys)','i')).catch(()=>log('Clipboard blocked','e'))`},
    {name:'clear all cookies',desc:'Expire every cookie on the current domain',tag:'storage',code:`const cks=document.cookie.split(';').filter(c=>c.trim());cks.forEach(c=>{const k=c.split('=')[0].trim();document.cookie=k+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';document.cookie=k+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain='+location.hostname});log('Cleared '+cks.length+' cookie(s)','w')`},
    // ── page ──
    {name:'focus mode',desc:'Dim everything except the element you hover over',tag:'page',toggle:true,
      run:(el2)=>{
        const on=!!document.getElementById('__focus_style__');
        if(on){document.getElementById('__focus_style__').remove();document.getElementById('__focus_overlay__')?.remove();el2.classList.remove('mm-cmd-on');el2.querySelector('.mm-ctag').textContent='#page';return;}
        const s=document.createElement('style');s.id='__focus_style__';
        s.textContent='.__focus_dim__{opacity:.08!important;transition:opacity .2s} .__focus_bright__{outline:2px solid #22d3ee!important}';
        document.head.appendChild(s);
        document.addEventListener('mouseover',function fn(e){if(document.getElementById('__modmenu__').contains(e.target))return;document.querySelectorAll('.__focus_dim__').forEach(x=>x.classList.remove('__focus_dim__'));document.querySelectorAll('*').forEach(x=>{if(x!==e.target&&!x.contains(e.target)&&!e.target.contains(x))x.classList.add('__focus_dim__');});});
        el2.classList.add('mm-cmd-on');el2.querySelector('.mm-ctag').textContent='ON';
        log('Focus mode ON — hover elements to highlight','i');
      }
    },
    {name:'reading mode',desc:'Strip page to just main text content',tag:'page',code:`const main=document.querySelector('article,main,[role="main"],.post,.entry-content')||document.body;const clone=main.cloneNode(true);document.body.innerHTML='';document.body.style.cssText='max-width:720px;margin:40px auto;padding:20px;font:18px/1.7 Georgia,serif;color:#111;background:#fff';document.body.appendChild(clone)`},
    {name:'night mode',desc:'Dark background, light text, low contrast',tag:'page',code:`document.body.style.cssText+='background:#111!important;color:#ccc!important;filter:brightness(.85)';log('Night mode applied','i')`},
    {name:'sepia mode',desc:'Apply warm sepia tone to the page',tag:'page',code:`document.body.style.filter='sepia(0.7) brightness(0.95)';log('Sepia mode applied','i')`},
    {name:'font size up',desc:'Increase all text size by 20%',tag:'page',code:`const s=(parseFloat(getComputedStyle(document.body).fontSize||'16')*1.2);document.body.style.fontSize=s+'px';log('Font size: '+s.toFixed(1)+'px','i')`},
    {name:'font size down',desc:'Decrease all text size by 20%',tag:'page',code:`const s=(parseFloat(getComputedStyle(document.body).fontSize||'16')*0.8);document.body.style.fontSize=s+'px';log('Font size: '+s.toFixed(1)+'px','i')`},
    {name:'take screenshot',desc:'Capture page to canvas and open in new tab',tag:'page',code:`import('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js').then(m=>m.default(document.body)).then(c=>window.open(c.toDataURL(),'_blank')).catch(e=>log('Screenshot failed: '+e.message,'e'))`},
    {name:'word count',desc:'Count all visible words on the page',tag:'page',code:`const txt=document.body.innerText;const words=txt.trim().split(/\s+/).filter(Boolean);log('Words: '+words.length,'i');log('Chars: '+txt.length,'i');log('Lines: '+txt.split('\n').length,'i')`},
    {name:'find & highlight',desc:'Highlight all occurrences of a word',tag:'page',code:"const q=prompt('Highlight word or phrase:');if(q){document.body.innerHTML=document.body.innerHTML.replace(new RegExp(q.replace(/[.*+?^${}()|[\\]\\\\]/g,'\\\\$&'),'gi'),'<mark style=\"background:#facc15;color:#000\">$&</mark>')}"},
    {name:'full screen',desc:'Toggle fullscreen mode for the page',tag:'page',code:`document.fullscreenElement?(document.exitFullscreen(),log('Exited fullscreen','i')):(document.documentElement.requestFullscreen(),log('Entered fullscreen','i'))`},
    {name:'page to grayscale',desc:'Render entire page in black and white',tag:'page',code:`const on=!document.body.style.filter.includes('grayscale');document.body.style.filter=on?'grayscale(1)':'';log('Grayscale '+(on?'ON':'OFF'),'i')`},
    {name:'confetti',desc:'Drop confetti animation on the page (runs for ~10 sec)',tag:'page',code:`(()=>{const c=document.createElement('canvas');Object.assign(c.style,{position:'fixed',top:0,left:0,width:'100%',height:'100%',pointerEvents:'none',zIndex:2147483645});document.body.appendChild(c);const ctx=c.getContext('2d');c.width=innerWidth;c.height=innerHeight;const p=Array.from({length:150},()=>({x:Math.random()*c.width,y:Math.random()*-c.height,v:2+Math.random()*4,a:Math.random()*Math.PI*2,r:4+Math.random()*6,col:'hsl('+(Math.random()*360)+',80%,60%)'}));let frames=0;(function loop(){if(frames++>300){c.remove();return}ctx.clearRect(0,0,c.width,c.height);p.forEach(q=>{q.y+=q.v;q.a+=0.05;ctx.save();ctx.translate(q.x,q.y);ctx.rotate(q.a);ctx.fillStyle=q.col;ctx.fillRect(-q.r/2,-q.r/2,q.r,q.r);ctx.restore();if(q.y>c.height)q.y=-20});requestAnimationFrame(loop)})()})()`},
  ];
  const tagCls={dom:'t-dom',nav:'t-nav',net:'t-net',storage:'t-storage',page:'t-page',edit:'t-edit',game:'t-game'};
  function renderCommands(filter=''){
    const list=$m('mm-clist');list.innerHTML='';
    commands.filter(c=>(c.name+c.desc+c.tag).toLowerCase().includes(filter.toLowerCase())).forEach(c=>{
      const el2=document.createElement('div');el2.className='mm-cmd';
      if(c.toggle&&c.name==='edit anything'&&editOn)el2.classList.add('mm-cmd-on');
      el2.innerHTML=`<div class="mm-cname">${c.name}</div><div class="mm-cdesc">${c.desc}</div><span class="mm-ctag ${tagCls[c.tag]}">${c.toggle&&editOn?'on':'#'+c.tag}</span>`;
      el2.addEventListener('click',()=>{if(c.toggle){c.run(el2);}else{goConsole();runCode(c.code,c.name);}});
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
    }else{
      const cookies=document.cookie.split(';').map(x=>x.trim()).filter(Boolean);
      if(!cookies.length){c.innerHTML='<div style="color:rgba(255,255,255,0.2);padding:14px;font-size:11px;font-family:\'Geist Mono\',monospace">(no cookies)</div>';return;}
      cookies.forEach(cookie=>{
        const eqIdx=cookie.indexOf('=');
        const k=cookie.slice(0,eqIdx).trim();
        const v=cookie.slice(eqIdx+1);
        const row=document.createElement('div');row.className='mm-srow';row.style.alignItems='center';
        const keySpan=document.createElement('span');keySpan.className='mm-sk';keySpan.textContent=k;
        const valInput=document.createElement('input');
        valInput.value=v;
        valInput.style.cssText='flex:1;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:4px;padding:2px 6px;color:#e2e8f0;font-family:"Geist Mono",monospace;font-size:9.5px;outline:none;min-width:0';
        const saveBtn=document.createElement('button');
        saveBtn.textContent='save';
        saveBtn.style.cssText='background:rgba(251,146,60,0.1);border:1px solid rgba(251,146,60,0.2);border-radius:4px;padding:2px 7px;color:#fb923c;font-size:9px;cursor:pointer;flex-shrink:0;font-family:sans-serif';
        saveBtn.addEventListener('click',function(){
          document.cookie=k+'='+valInput.value+';path=/';
          showToast('ok','cookie saved',k+'='+valInput.value.slice(0,30));
          log('[Cookie] set '+k+'='+valInput.value.slice(0,60),'i');
        });
        const delBtn=document.createElement('span');delBtn.className='mm-sdel';delBtn.textContent='×';
        delBtn.addEventListener('click',function(){
          document.cookie=k+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
          document.cookie=k+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain='+location.hostname;
          showToast('ok','cookie deleted',k);
          renderStorage('cookies');
        });
        row.appendChild(keySpan);row.appendChild(valInput);row.appendChild(saveBtn);row.appendChild(delBtn);
        c.appendChild(row);
      });
    }
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
  function blStatus(msg,type='ok'){const s=$m('bl-status');s.textContent=msg;s.className=type;s.style.display='block';setTimeout(()=>s.style.display='none',4000);}

  // Deep React fiber walker — finds the root game state store
  function blFindReactState(rootKey,maxDepth=60){
    const results=[];
    document.querySelectorAll('*').forEach(node=>{
      const fk=Object.keys(node).find(k=>k.startsWith('__reactFiber')||k.startsWith('__reactInternalInstance'));
      if(!fk)return;
      let fiber=node[fk];
      for(let i=0;i<maxDepth&&fiber;i++){
        // Check memoizedProps
        try{
          const p=fiber.memoizedProps;
          if(p&&typeof p==='object'){
            if(rootKey in p)results.push({obj:p,key:rootKey,src:'props'});
            Object.keys(p).forEach(k=>{if(p[k]&&typeof p[k]==='object'&&rootKey in p[k])results.push({obj:p[k],key:rootKey,src:'props.'+k});});
          }
        }catch(e){}
        // Check memoizedState chain
        try{
          let s=fiber.memoizedState;
          while(s){
            if(s.memoizedState&&typeof s.memoizedState==='object'&&rootKey in s.memoizedState)results.push({obj:s.memoizedState,key:rootKey,src:'state'});
            s=s.next;
          }
        }catch(e){}
        fiber=fiber.return;
      }
    });
    return results;
  }

  // Patch numeric fields in React fiber state — returns patch count
  function blPatchNumbers(targetKey,addAmt){
    let count=0;
    document.querySelectorAll('*').forEach(node=>{
      const fk=Object.keys(node).find(k=>k.startsWith('__reactFiber')||k.startsWith('__reactInternalInstance'));
      if(!fk)return;
      let fiber=node[fk];
      for(let i=0;i<80&&fiber;i++){
        try{
          let s=fiber.memoizedState;
          while(s){
            if(s.memoizedState&&typeof s.memoizedState==='object'){
              const obj=s.memoizedState;
              if(targetKey in obj&&typeof obj[targetKey]==='number'&&obj[targetKey]>=0&&obj[targetKey]<500000){
                obj[targetKey]+=addAmt;count++;
              }
              Object.keys(obj).forEach(k=>{
                if(obj[k]&&typeof obj[k]==='object'&&targetKey in obj[k]&&typeof obj[k][targetKey]==='number'&&obj[k][targetKey]>=0&&obj[k][targetKey]<500000){
                  obj[k][targetKey]+=addAmt;count++;
                }
              });
            }
            s=s.next;
          }
        }catch(e){}
        fiber=fiber.return;
      }
    });
    return count;
  }

  // Token/coin injection — tries localStorage, React state, and window globals
  function blAddTokens(amt){
    let patched=0;
    // 1. localStorage sweep
    const tokenKeys=['coins','tokens','gold','bucks','currency','balance','points','xp','gems','credits'];
    tokenKeys.forEach(k=>{
      const v=localStorage.getItem(k);
      if(v!==null&&!isNaN(Number(v))){localStorage.setItem(k,String(Number(v)+amt));patched++;}
    });
    // 2. All localStorage keys that have numeric values
    for(let i=0;i<localStorage.length;i++){
      const k=localStorage.key(i);
      try{
        const v=JSON.parse(localStorage.getItem(k));
        if(typeof v==='number'&&v>=0&&v<500000){localStorage.setItem(k,String(v+amt));patched++;}
        if(v&&typeof v==='object'){
          let changed=false;
          tokenKeys.forEach(tk=>{if(tk in v&&typeof v[tk]==='number'&&v[tk]>=0){v[tk]+=amt;changed=true;patched++;}});
          if(changed)localStorage.setItem(k,JSON.stringify(v));
        }
      }catch(e){}
    }
    // 3. window globals
    tokenKeys.forEach(k=>{if(typeof window[k]==='number'&&window[k]>=0){window[k]+=amt;patched++;}});
    // 4. React state numeric patch
    const rPatched=blPatchNumbers('coins',amt,v=>v>=0&&v<500000)+blPatchNumbers('tokens',amt,v=>v>=0&&v<500000)+blPatchNumbers('gold',amt,v=>v>=0&&v<500000);
    patched+=rPatched;
    return patched;
  }

  $m('bl-add-coins').addEventListener('click',()=>{
    const amt=parseInt($m('bl-coin-amt').value)||500;
    try{
      const n=blAddTokens(amt);
      blStatus(n>0?`+${amt} injected into ${n} location(s) — refresh if needed`:'Nothing found yet — join a game or open dashboard first','ok');
      log('[Blooket] +'+amt+' tokens, '+n+' patches','i');
    }catch(e){blStatus('Error: '+e.message,'err');}
  });

  $m('bl-max-coins').addEventListener('click',()=>{
    let patched=0;
    const tokenKeys=['coins','tokens','gold','bucks','currency','balance','points','xp','gems','credits'];
    tokenKeys.forEach(k=>{if(localStorage.getItem(k)!==null){localStorage.setItem(k,'999999');patched++;}});
    // Also patch all numeric LS values that look like currencies
    for(let i=0;i<localStorage.length;i++){
      const k=localStorage.key(i);
      try{
        const v=JSON.parse(localStorage.getItem(k));
        if(typeof v==='number'&&v>=0&&v<500000){localStorage.setItem(k,'999999');patched++;}
        if(v&&typeof v==='object'){
          let changed=false;
          tokenKeys.forEach(tk=>{if(tk in v&&typeof v[tk]==='number'){v[tk]=999999;changed=true;patched++;}});
          if(changed)localStorage.setItem(k,JSON.stringify(v));
        }
      }catch(e){}
    }
    tokenKeys.forEach(k=>{if(typeof window[k]==='number'){window[k]=999999;patched++;}});
    blStatus(patched>0?`Set ${patched} value(s) to 999,999 — refresh to apply`:'No token keys found yet','ok');
    log('[Blooket] max tokens: '+patched+' locations','i');
  });

  // Auto answer — improved: walks fiber for question/answer data each tick
  let autoAnswerOn=false,autoAnswerInterval=null;
  function blClickCorrect(){
    // Strategy 1: data attributes
    const candidates=document.querySelectorAll('[data-correct],[iscorrect],[data-iscorrect]');
    for(const el2 of candidates){
      if(el2.dataset.correct==='true'||el2.getAttribute('iscorrect')==='true'||el2.dataset.iscorrect==='true'){el2.click();return true;}
    }
    // Strategy 2: class name contains 'correct' (not 'incorrect')
    const allBtns=document.querySelectorAll('button,div[class*="answer"],div[class*="Answer"],div[class*="choice"],div[class*="Choice"],div[class*="option"],div[class*="Option"]');
    for(const el2 of allBtns){
      const cn=el2.className||'';
      if(/correct/i.test(cn)&&!/incorrect/i.test(cn)){el2.click();return true;}
    }
    // Strategy 3: find correct answer text from React fiber, match to DOM
    let correctText=null;
    document.querySelectorAll('*').forEach(node=>{
      if(correctText)return;
      const fk=Object.keys(node).find(k=>k.startsWith('__reactFiber'));
      if(!fk)return;
      let fiber=node[fk];
      for(let i=0;i<30&&fiber&&!correctText;i++){
        try{
          const p=fiber.memoizedProps;
          if(p){
            if(p.correctAnswer&&typeof p.correctAnswer==='string')correctText=p.correctAnswer;
            if(p.correct&&typeof p.correct==='string')correctText=p.correct;
            if(Array.isArray(p.answers)){const ca=p.answers.find(a=>a.correct||a.isCorrect);if(ca)correctText=ca.answer||ca.text||ca.val;}
          }
        }catch(e){}
        fiber=fiber.return;
      }
    });
    if(correctText){
      const allText=document.querySelectorAll('button,div[class*="answer"],div[class*="Answer"],div[class*="choice"],div[class*="option"]');
      for(const el2 of allText){
        if(el2.textContent.trim()===correctText.trim()){el2.click();return true;}
      }
    }
    return false;
  }

  $m('bl-auto-answer').addEventListener('click',()=>{
    autoAnswerOn=!autoAnswerOn;
    $m('bl-aa-badge').textContent=autoAnswerOn?'ON':'toggle';
    if(autoAnswerOn){
      autoAnswerInterval=setInterval(()=>{try{blClickCorrect();}catch(e){}},600);
      blStatus('Auto answer ON','ok');log('[Blooket] auto answer ON','i');
    }else{
      clearInterval(autoAnswerInterval);
      blStatus('Auto answer OFF','warn');log('[Blooket] auto answer OFF','w');
    }
  });

  $m('bl-instant-answer').addEventListener('click',()=>{
    const clicked=blClickCorrect();
    blStatus(clicked?'Answered!':'No answerable question found — join a game first',clicked?'ok':'warn');
  });

  // Speed hack — patches performance.now and Date.now
  let speedOn=false;
  $m('bl-speed').addEventListener('click',()=>{
    speedOn=!speedOn;$m('bl-sp-badge').textContent=speedOn?'ON':'toggle';
    try{
      if(speedOn){
        window.__bl_origDate=Date.now;
        window.__bl_origPerf=performance.now.bind(performance);
        const start=window.__bl_origDate();const perfStart=window.__bl_origPerf();
        const MULT=8;
        Date.now=()=>start+(window.__bl_origDate()-start)*MULT;
        performance.now=()=>perfStart+(window.__bl_origPerf()-perfStart)*MULT;
        blStatus('Speed ×8 ON — timers accelerated','ok');log('[Blooket] speed hack ON','i');
      }else{
        if(window.__bl_origDate)Date.now=window.__bl_origDate;
        if(window.__bl_origPerf)performance.now=window.__bl_origPerf;
        blStatus('Speed hack OFF','warn');log('[Blooket] speed hack OFF','w');
      }
    }catch(e){blStatus('Error: '+e.message,'err');}
  });

  // Blook data dump
  $m('bl-unlock-blooks').addEventListener('click',()=>{
    let found=false;
    document.querySelectorAll('*').forEach(node=>{
      const fk=Object.keys(node).find(k=>k.startsWith('__reactFiber'));
      if(!fk)return;
      let fiber=node[fk];
      for(let i=0;i<40&&fiber;i++){
        try{
          const p=fiber.memoizedProps;
          if(p){
            ['blooks','unlockedBlooks','myBlooks','ownedBlooks'].forEach(key=>{
              if(p[key]&&typeof p[key]==='object'){
                log('[Blooket] '+key+': '+JSON.stringify(Object.keys(p[key])).slice(0,200),'i');
                found=true;
              }
            });
          }
          let s=fiber.memoizedState;
          while(s){
            if(s.memoizedState&&typeof s.memoizedState==='object'){
              ['blooks','unlockedBlooks','myBlooks'].forEach(key=>{
                if(key in s.memoizedState){log('[Blooket] state.'+key+': '+JSON.stringify(s.memoizedState[key]).slice(0,200),'i');found=true;}
              });
            }
            s=s.next;
          }
        }catch(e){}
        fiber=fiber.return;
      }
    });
    blStatus(found?'Blook data dumped to console':'Navigate to your Blooks page first','ok');
    if(found)goConsole();
  });

  // Box opener
  let boxInterval=null;
  $m('bl-open-box').addEventListener('click',()=>{
    if(boxInterval){clearInterval(boxInterval);boxInterval=null;$m('bl-box-badge').textContent='boxes';blStatus('Box opener stopped','warn');return;}
    $m('bl-box-badge').textContent='STOP';
    let clicks=0;
    boxInterval=setInterval(()=>{
      // Try multiple selectors that Blooket uses for box/pack buttons
      const btn=document.querySelector('[class*="OpenBtn"],[class*="openBtn"],[class*="PackBtn"],[class*="packBtn"],[class*="BoxBtn"],[class*="Continue"],[class*="continue"],[class*="openBox"],[class*="OpenBox"]')
        ||document.querySelector('button[class*="open"],button[class*="Open"],button[class*="pack"],button[class*="Pack"]');
      if(btn){btn.click();clicks++;}
    },250);
    blStatus('Opening boxes — click again to stop','ok');
    log('[Blooket] box opener started','i');
  });

  // Show answers — improved fiber walk
  $m('bl-get-answers').addEventListener('click',()=>{
    let found=0;
    const seen=new Set();
    document.querySelectorAll('*').forEach(node=>{
      const fk=Object.keys(node).find(k=>k.startsWith('__reactFiber'));
      if(!fk)return;
      let fiber=node[fk];
      for(let i=0;i<40&&fiber;i++){
        try{
          const p=fiber.memoizedProps;
          if(p){
            // Direct Q&A props
            if(p.question&&!seen.has(p.question)){seen.add(p.question);log('[Q] '+p.question,'i');found++;}
            if(p.correctAnswer&&!seen.has(p.correctAnswer)){seen.add(p.correctAnswer);log('[A✓] '+p.correctAnswer,'i');}
            if(p.correct&&typeof p.correct==='string'&&!seen.has(p.correct)){seen.add(p.correct);log('[A✓] '+p.correct,'i');}
            // Answers array
            if(Array.isArray(p.answers)&&p.answers.length&&!seen.has(JSON.stringify(p.answers))){
              seen.add(JSON.stringify(p.answers));
              p.answers.forEach((a,i2)=>{
                const txt=a.answer||a.text||a.val||String(a);
                const correct=a.correct||a.isCorrect?'✓':'✗';
                log(`  [${correct}] ${txt}`,'i');
              });
            }
            // Question object nested
            if(p.question&&typeof p.question==='object'){
              const q=p.question;
              if(q.question&&!seen.has(q.question)){seen.add(q.question);log('[Q] '+q.question,'i');found++;}
              if(q.correctAnswer)log('[A✓] '+q.correctAnswer,'i');
              if(Array.isArray(q.answers))q.answers.forEach(a=>{const correct=a.correct?'✓':'✗';log(`  [${correct}] ${a.answer||a}`,'i');});
            }
          }
        }catch(e){}
        fiber=fiber.return;
      }
    });
    goConsole();
    if(!found)log('[Blooket] No Q&A in current view — make sure a question is on screen','w');
    else blStatus(found+' question(s) dumped to console','ok');
  });

  // Ghost mode
  let ghostOn=false;
  $m('bl-ghost').addEventListener('click',()=>{
    ghostOn=!ghostOn;$m('bl-gh-badge').textContent=ghostOn?'ON':'stealth';
    const sel='[class*="Name"],[class*="name"],[class*="username"],[class*="Username"],[class*="playerName"],[class*="PlayerName"]';
    document.querySelectorAll(sel).forEach(el2=>{
      if(!el2.children.length){ // only leaf text nodes
        if(ghostOn){el2.dataset.origText=el2.textContent;el2.textContent='???';}
        else if(el2.dataset.origText){el2.textContent=el2.dataset.origText;delete el2.dataset.origText;}
      }
    });
    blStatus(ghostOn?'Ghost mode ON':'Ghost mode OFF',ghostOn?'ok':'warn');
  });


  // ── kahoot ──
  function khStatus(msg,type='ok'){
    const s=document.getElementById('kh-status');
    if(!s)return;
    s.textContent=msg;
    s.style.cssText='font-size:11px;padding:7px 11px;border-radius:7px;margin-bottom:8px;font-family:\'Geist Mono\',monospace;display:block;';
    if(type==='ok')s.style.cssText+='background:rgba(74,222,128,0.08);color:#4ade80;border:1px solid rgba(74,222,128,0.2)';
    else if(type==='warn')s.style.cssText+='background:rgba(251,146,60,0.08);color:#fb923c;border:1px solid rgba(251,146,60,0.2)';
    else s.style.cssText+='background:rgba(248,113,113,0.08);color:#f87171;border:1px solid rgba(248,113,113,0.2)';
    setTimeout(()=>{if(s)s.style.display='none';},4000);
  }

  // Walk React fiber to find Kahoot game state
  function khFindState(){
    const results=[];
    const kahootKeys=['quizQuestionAnswers','currentQuestion','correctAnswer','correctAnswers','answers','question','gameBlockType','gameMode','twoFactorAuth','pin','playerName','challengeId','questionIndex','timeLeft'];
    document.querySelectorAll('*').forEach(node=>{
      const fk=Object.keys(node).find(k=>k.startsWith('__reactFiber')||k.startsWith('__reactInternalInstance'));
      if(!fk)return;
      let fiber=node[fk];
      for(let i=0;i<80&&fiber;i++){
        try{
          // Check memoizedProps
          const p=fiber.memoizedProps;
          if(p&&typeof p==='object'){
            kahootKeys.forEach(k=>{
              if(k in p&&p[k]!==null&&p[k]!==undefined){
                results.push({key:k,val:p[k],src:'props'});
              }
            });
          }
          // Check memoizedState chain
          let s=fiber.memoizedState;
          while(s){
            if(s.memoizedState&&typeof s.memoizedState==='object'&&!Array.isArray(s.memoizedState)){
              const obj=s.memoizedState;
              kahootKeys.forEach(k=>{
                if(k in obj&&obj[k]!==null&&obj[k]!==undefined){
                  results.push({key:k,val:obj[k],src:'state'});
                }
              });
              // One level deeper
              Object.keys(obj).forEach(ok=>{
                if(obj[ok]&&typeof obj[ok]==='object'&&!Array.isArray(obj[ok])){
                  kahootKeys.forEach(k=>{
                    if(k in obj[ok]&&obj[ok][k]!==null){
                      results.push({key:k,val:obj[ok][k],src:'state.'+ok});
                    }
                  });
                }
              });
            }
            s=s.next;
          }
        }catch(e){}
        fiber=fiber.return;
      }
    });
    // Deduplicate by key, prefer deepest found
    const seen={};
    results.forEach(r=>{seen[r.key]=r;});
    return seen;
  }

  // Also try window.__NEXT_DATA__ and window.gamePin which Kahoot sometimes exposes
  function khGetWindowState(){
    const out={};
    try{
      if(window.__NEXT_DATA__){
        const d=window.__NEXT_DATA__;
        if(d.props)out.nextProps=d.props;
        if(d.query)out.query=d.query;
      }
    }catch(e){}
    try{if(window.gamePin)out.gamePin=window.gamePin;}catch(e){}
    try{if(window.playerName)out.playerName=window.playerName;}catch(e){}
    // Kahoot stores things in __store sometimes
    try{
      if(window.__store){
        const state=window.__store.getState();
        if(state)out.storeState=state;
      }
    }catch(e){}
    // Redux devtools
    try{
      const stores=Object.keys(window).filter(k=>window[k]&&typeof window[k].getState==='function'&&typeof window[k].dispatch==='function');
      stores.forEach(k=>{try{out['store_'+k]=window[k].getState();}catch(e){}});
    }catch(e){}
    return out;
  }

  function khRevealAnswers(){
    let found=0;
    const state=khFindState();
    const winState=khGetWindowState();

    // Log question
    if(state.question){
      const q=typeof state.question.val==='object'?state.question.val.question||JSON.stringify(state.question.val):state.question.val;
      log('[Kahoot] Q: '+String(q).slice(0,200),'i');
      found++;
    }

    // Log correct answers — various formats Kahoot uses
    const answerKeys=['correctAnswer','correctAnswers','quizQuestionAnswers'];
    answerKeys.forEach(k=>{
      if(state[k]){
        const v=state[k].val;
        if(Array.isArray(v)){
          v.forEach((a,i)=>{
            const correct=a.correct||a.isCorrect;
            const text=a.answer||a.choice||a.text||String(a);
            log('[Kahoot] ['+(correct?'✓':'✗')+'] '+text,'i');
          });
          found++;
        } else if(typeof v==='string'||typeof v==='number'){
          log('[Kahoot] Correct: '+v,'i');
          found++;
        } else if(typeof v==='object'&&v){
          log('[Kahoot] '+k+': '+JSON.stringify(v).slice(0,300),'i');
          found++;
        }
      }
    });

    // Answers array
    if(state.answers){
      const v=state.answers.val;
      if(Array.isArray(v)){
        v.forEach((a,i)=>{
          const correct=a.correct||a.isCorrect||a.isCorrectAnswer;
          const text=a.answer||a.choice||a.text||String(a);
          log('[Kahoot] ['+(correct?'✓':'✗')+'] '+String(text).slice(0,100),'i');
        });
        found++;
      }
    }

    // Index-based correct answer (Kahoot classic format)
    if(state.gameBlockType){
      log('[Kahoot] block type: '+state.gameBlockType.val,'i');
    }

    // Window store data
    if(winState.storeState){
      const gs=winState.storeState;
      const interesting=['currentQuestion','correctAnswer','answers','question','questionIndex'];
      interesting.forEach(k=>{
        if(gs[k]!==undefined){log('[Kahoot] store.'+k+': '+JSON.stringify(gs[k]).slice(0,200),'i');found++;}
        // nested
        Object.keys(gs).forEach(sk=>{
          if(gs[sk]&&typeof gs[sk]==='object'&&k in gs[sk]){
            log('[Kahoot] store.'+sk+'.'+k+': '+JSON.stringify(gs[sk][k]).slice(0,200),'i');found++;
          }
        });
      });
    }

    // Also try to read answer colours from DOM
    // Kahoot's 4 answer buttons are always in the same order: red=0, blue=1, yellow=2, green=3
    const btnSelectors=['[data-functional-selector*="answer"]','[class*="AnswerButton"]','[class*="answer-btn"]','[class*="answerButton"]','[class*="choiceButton"]','button[class*="answer"]'];
    let domFound=false;
    for(const sel of btnSelectors){
      const btns=document.querySelectorAll(sel);
      if(btns.length>=2){
        log('[Kahoot] DOM answers ('+btns.length+' found):','i');
        btns.forEach((b,i)=>{
          const correct=b.dataset.correct==='true'||b.getAttribute('aria-label')?.includes('correct')||b.className.includes('correct');
          log('  ['+(correct?'✓':'?')+'] '+(b.textContent||b.getAttribute('aria-label')||'btn '+i).trim().slice(0,80),'i');
        });
        domFound=true; found++;
        break;
      }
    }

    return found;
  }

  document.getElementById('kh-show-answer').addEventListener('click',()=>{
    const n=khRevealAnswers();
    goConsole();
    khStatus(n>0?n+' answer(s) dumped to console':'Nothing found — make sure a question is visible on screen',n>0?'ok':'warn');
  });

  let khAutoRevealOn=false,khAutoRevealIv=null,khLastQ='';
  document.getElementById('kh-auto-reveal').addEventListener('click',()=>{
    khAutoRevealOn=!khAutoRevealOn;
    document.getElementById('kh-ar-badge').textContent=khAutoRevealOn?'ON':'toggle';
    if(khAutoRevealOn){
      khLastQ='';
      khAutoRevealIv=setInterval(()=>{
        try{
          const state=khFindState();
          const qVal=state.question?JSON.stringify(state.question.val):'';
          if(qVal&&qVal!==khLastQ){
            khLastQ=qVal;
            khRevealAnswers();
            log('[Kahoot] --- new question detected ---','w');
          }
        }catch(e){}
      },800);
      khStatus('Auto reveal ON — answers logged as questions appear','ok');
      log('[Kahoot] auto reveal ON','i');
    } else {
      clearInterval(khAutoRevealIv);
      khStatus('Auto reveal OFF','warn');
      log('[Kahoot] auto reveal OFF','w');
    }
  });

  let khGhostOn=false;
  document.getElementById('kh-ghost').addEventListener('click',()=>{
    khGhostOn=!khGhostOn;
    document.getElementById('kh-gh-badge').textContent=khGhostOn?'ON':'stealth';
    const sel='[class*="Nickname"],[class*="nickname"],[class*="playerName"],[class*="PlayerName"],[data-functional-selector*="nickname"]';
    document.querySelectorAll(sel).forEach(el=>{
      if(!el.children.length){
        if(khGhostOn){el.dataset.khOrig=el.textContent;el.textContent='???';}
        else if(el.dataset.khOrig){el.textContent=el.dataset.khOrig;delete el.dataset.khOrig;}
      }
    });
    khStatus(khGhostOn?'Ghost mode ON — nickname hidden locally':'Ghost mode OFF',khGhostOn?'ok':'warn');
  });

  let khHlOn=false,khHlIv=null;
  document.getElementById('kh-highlight').addEventListener('click',()=>{
    khHlOn=!khHlOn;
    document.getElementById('kh-hl-badge').textContent=khHlOn?'ON':'toggle';
    if(khHlOn){
      // Kahoot's 4 answer colours already exist but this adds extra glow
      const COLORS=['rgba(226,55,68,0.35)','rgba(19,104,206,0.35)','rgba(216,173,0,0.35)','rgba(38,137,12,0.35)'];
      khHlIv=setInterval(()=>{
        const sels=['[data-functional-selector*="answer"]','[class*="AnswerButton"]','[class*="answerButton"]','[class*="choiceButton"]','button[class*="answer"]'];
        for(const sel of sels){
          const btns=document.querySelectorAll(sel);
          if(btns.length>=2){
            btns.forEach((b,i)=>{b.style.boxShadow='0 0 16px 4px '+COLORS[i%4]+',inset 0 0 8px '+COLORS[i%4];});
            break;
          }
        }
      },500);
      khStatus('Answers highlighted','ok');
    } else {
      clearInterval(khHlIv);
      const sels=['[data-functional-selector*="answer"]','[class*="AnswerButton"]','[class*="answerButton"]','[class*="choiceButton"]'];
      sels.forEach(s=>document.querySelectorAll(s).forEach(b=>b.style.boxShadow=''));
      khStatus('Highlights removed','warn');
    }
  });

  document.getElementById('kh-dump-state').addEventListener('click',()=>{
    const state=khFindState();
    const winState=khGetWindowState();
    let found=0;
    Object.entries(state).forEach(([k,v])=>{
      log('[Kahoot] '+k+' ('+v.src+'): '+JSON.stringify(v.val).slice(0,200),'i');
      found++;
    });
    Object.entries(winState).forEach(([k,v])=>{
      log('[Kahoot] window.'+k+': '+JSON.stringify(v).slice(0,200),'i');
      found++;
    });
    goConsole();
    khStatus(found>0?found+' state entries dumped to console':'No Kahoot state found — join a game first',found>0?'ok':'warn');
  });

  document.getElementById('kh-get-pin').addEventListener('click',()=>{
    let pin=null;
    // Try URL first
    const urlMatch=location.href.match(/[?&]pin=(\d+)/)||location.pathname.match(/\/(\d{6,8})/);
    if(urlMatch)pin=urlMatch[1];
    // Try window
    try{if(window.gamePin)pin=window.gamePin;}catch(e){}
    // Try state
    const state=khFindState();
    if(state.pin)pin=state.pin.val;
    // Try __NEXT_DATA__
    try{
      const nd=window.__NEXT_DATA__;
      if(nd&&nd.query&&nd.query.pin)pin=nd.query.pin;
      if(nd&&nd.props&&nd.props.pageProps&&nd.props.pageProps.pin)pin=nd.props.pageProps.pin;
    }catch(e){}
    // Try DOM
    if(!pin){
      const pinEl=document.querySelector('[class*="pin"],[class*="Pin"],[data-functional-selector*="pin"]');
      if(pinEl)pin=pinEl.textContent.replace(/\D/g,'').slice(0,8)||null;
    }
    if(pin){
      navigator.clipboard.writeText(String(pin)).catch(()=>{});
      khStatus('PIN: '+pin+' (copied to clipboard)','ok');
      log('[Kahoot] Game PIN: '+pin,'i');
    } else {
      khStatus('No PIN found — navigate to a Kahoot game first','warn');
    }
  });


  // ── videowatchr frontend ──
  (function(){
    const vwSearch=$m('vw-search'), vwSearchBtn=$m('vw-search-btn'), vwBackBtn=$m('vw-back-btn');
    const vwPlayerView=$m('vw-player-view'), vwResultsView=$m('vw-results-view');
    const vwResultsList=$m('vw-results-list'), vwStatus=$m('vw-status');
    const vwPlayerFrame=$m('vw-player-frame');
    const vwVideoTitle=$m('vw-video-title'), vwVideoChannel=$m('vw-video-channel');
    if(!vwSearch)return;

    function vwSetStatus(msg){if(vwStatus)vwStatus.textContent=msg;}

    function vwShowPlayer(videoId,title,channel){
      vwPlayerFrame.src='https://www.youtube-nocookie.com/embed/'+videoId+'?autoplay=1&rel=0&modestbranding=1';
      vwVideoTitle.textContent=title||videoId;
      vwVideoChannel.textContent=channel||'';
      vwPlayerView.style.display='flex';
      vwBackBtn.style.display='block';
      vwSetStatus('playing: '+videoId);
    }

    function vwShowResults(){
      vwPlayerView.style.display='none';
      vwPlayerFrame.src='';
      vwBackBtn.style.display='none';
    }

    function vwCard(videoId,title,channel,thumb,duration){
      const card=document.createElement('div');
      card.style.cssText='display:flex;gap:9px;padding:7px 6px;border-radius:8px;cursor:pointer;transition:background .12s;margin-bottom:4px;align-items:flex-start';
      const safethumb=thumb||('https://i.ytimg.com/vi/'+videoId+'/mqdefault.jpg');
      const safeTitle=(title||videoId).replace(/</g,'&lt;');
      const safeChan=(channel||'').replace(/</g,'&lt;');
      card.innerHTML='<div style="flex-shrink:0;width:112px;height:63px;border-radius:5px;overflow:hidden;background:#111;position:relative">'
        +'<img src="'+safethumb+'" style="width:100%;height:100%;object-fit:cover" loading="lazy"/>'
        +(duration?'<span style="position:absolute;bottom:3px;right:3px;background:rgba(0,0,0,0.85);color:#fff;font-size:9px;padding:1px 4px;border-radius:3px;font-family:monospace">'+duration+'</span>':'')
        +'</div>'
        +'<div style="flex:1;min-width:0">'
        +'<div style="font-size:11.5px;font-weight:500;color:#e2e8f0;line-height:1.35;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical">'+safeTitle+'</div>'
        +'<div style="font-size:10px;color:rgba(255,255,255,0.35);margin-top:3px;font-family:monospace;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+safeChan+'</div>'
        +'</div>';
      card.addEventListener('mouseenter',function(){card.style.background='rgba(255,255,255,0.05)';});
      card.addEventListener('mouseleave',function(){card.style.background='';});
      card.addEventListener('click',function(){vwShowPlayer(videoId,title,channel);});
      return card;
    }

    function vwSectionHeader(text){
      const h=document.createElement('div');
      h.style.cssText='font-size:9.5px;color:rgba(248,113,113,0.6);text-transform:uppercase;letter-spacing:.1em;font-weight:600;padding:6px 4px 4px;font-family:sans-serif';
      h.textContent=text;
      return h;
    }

    function vwSpinner(msg){
      const d=document.createElement('div');
      d.style.cssText='text-align:center;padding:30px 10px;color:rgba(255,255,255,0.25);font-size:11px;font-family:monospace';
      d.textContent=msg||'loading...';
      return d;
    }

    function vwFetchTimeout(url,ms){
      return new Promise(function(resolve,reject){
        const ctrl=new AbortController();
        const timer=setTimeout(function(){ctrl.abort();reject(new Error('timeout'));},ms||5000);
        fetch(url,{signal:ctrl.signal}).then(function(r){clearTimeout(timer);resolve(r);}).catch(function(e){clearTimeout(timer);reject(e);});
      });
    }

    // Public no-key YouTube search APIs (no CORS issues)
    // Primary: yt.lemnoslife.com/noKey - free public YouTube Data API proxy
    // Fallback: pipedapi.kavin.rocks - Piped API (YouTube frontend)
    // Fallback 2: direct ID entry

    async function vwSearchAPI(q){
      // Try Piped API instances (they allow CORS)
      var pipedInstances=['https://pipedapi.kavin.rocks','https://pipedapi.adminforge.de','https://piped-api.garudalinux.org'];
      for(var i=0;i<pipedInstances.length;i++){
        try{
          var r=await vwFetchTimeout(pipedInstances[i]+'/search?q='+encodeURIComponent(q)+'&filter=videos',5000);
          if(r.ok){
            var data=await r.json();
            if(data&&data.items&&data.items.length)return{source:'piped',items:data.items};
          }
        }catch(e){}
      }
      return null;
    }

    async function vwTrendingAPI(){
      var pipedInstances=['https://pipedapi.kavin.rocks','https://pipedapi.adminforge.de','https://piped-api.garudalinux.org'];
      for(var i=0;i<pipedInstances.length;i++){
        try{
          var r=await vwFetchTimeout(pipedInstances[i]+'/trending?region=US',5000);
          if(r.ok){
            var data=await r.json();
            if(data&&data.length)return data;
          }
        }catch(e){}
      }
      return null;
    }

    function vwSecsToTime(s){
      if(!s||s<0)return'';
      var m=Math.floor(s/60),sec=String(s%60).padStart(2,'0');
      return m+':'+sec;
    }

    function vwRenderPipedItems(items,max){
      (items||[]).slice(0,max||15).forEach(function(item){
        var videoId=(item.url||'').replace('/watch?v=','');
        var thumb=item.thumbnail||('https://i.ytimg.com/vi/'+videoId+'/mqdefault.jpg');
        var dur=vwSecsToTime(item.duration);
        vwResultsList.appendChild(vwCard(videoId,item.title,item.uploaderName,thumb,dur));
      });
    }

    async function vwDoSearch(q){
      vwResultsList.innerHTML='';
      vwResultsList.appendChild(vwSpinner('searching "'+q+'"...'));
      vwSetStatus('searching...');
      try{
        var res=await vwSearchAPI(q);
        vwResultsList.innerHTML='';
        if(res&&res.items&&res.items.length){
          vwResultsList.appendChild(vwSectionHeader('results for "'+q+'"'));
          vwRenderPipedItems(res.items,15);
          vwSetStatus(res.items.length+' results');
        } else {
          vwResultsList.appendChild(vwSectionHeader('search unavailable on this network'));
          vwShowFallback(q);
        }
      }catch(e){
        vwResultsList.innerHTML='';
        vwResultsList.appendChild(vwSectionHeader('search unavailable on this network'));
        vwShowFallback(q);
      }
    }

    function vwShowFallback(q){
      var div=document.createElement('div');
      div.style.cssText='padding:10px 4px;font-size:11px;color:rgba(255,255,255,0.4);font-family:sans-serif;line-height:2';
      div.innerHTML='<a href="https://videowatchr.com/search?q='+encodeURIComponent(q||'')+'" target="_blank" style="color:#f87171;text-decoration:none;display:block">▶ Open on VideoWatchr.com</a>'
        +'<a href="https://www.youtube.com/results?search_query='+encodeURIComponent(q||'')+'" target="_blank" style="color:#f87171;text-decoration:none;display:block">▶ Open on YouTube</a>'
        +'<div style="margin-top:10px;font-size:10px;color:rgba(255,255,255,0.2)">Or paste a YouTube URL / video ID to watch:</div>'
        +'<div style="display:flex;gap:6px;margin-top:6px">'
        +'<input id="vw-direct-id" placeholder="youtube.com/watch?v=... or video ID" type="text" style="flex:1;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:6px;padding:5px 9px;color:#e2e8f0;font-family:monospace;font-size:10.5px;outline:none"/>'
        +'<button id="vw-direct-play" style="background:rgba(248,113,113,0.15);color:#f87171;border:1px solid rgba(248,113,113,0.25);border-radius:6px;padding:5px 12px;font-family:sans-serif;font-size:11px;cursor:pointer">play</button>'
        +'</div>';
      vwResultsList.appendChild(div);
      vwSetStatus('search unavailable — paste a video ID to watch');
      var playBtn=document.getElementById('vw-direct-play');
      if(playBtn){
        playBtn.addEventListener('click',function(){
          var raw=(document.getElementById('vw-direct-id')||{}).value||'';
          var match=raw.match(/[?&]v=([a-zA-Z0-9_-]{11})/)||raw.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/)||raw.match(/^([a-zA-Z0-9_-]{11})$/);
          if(match)vwShowPlayer(match[1],'','');
          else vwSetStatus('invalid YouTube URL or ID');
        });
      }
    }

    async function vwLoadHome(){
      vwResultsList.innerHTML='';
      vwResultsList.appendChild(vwSpinner('loading...'));
      vwSetStatus('loading...');

      // Category pills
      var categories=[
        {name:'🎮 gaming',q:'gaming highlights'},
        {name:'🎵 music',q:'music video'},
        {name:'😂 comedy',q:'funny videos'},
        {name:'🔬 tech',q:'science technology'},
        {name:'🏅 sports',q:'sports highlights'},
        {name:'🎬 movies',q:'movie trailer 2024'},
      ];
      vwResultsList.innerHTML='';
      var row=document.createElement('div');
      row.style.cssText='display:flex;flex-wrap:wrap;gap:5px;padding:4px 2px 10px';
      categories.forEach(function(cat){
        var btn=document.createElement('button');
        btn.textContent=cat.name;
        btn.style.cssText='background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.09);border-radius:20px;padding:4px 11px;font-family:sans-serif;font-size:10.5px;color:rgba(255,255,255,0.55);cursor:pointer';
        btn.addEventListener('mouseenter',function(){btn.style.background='rgba(248,113,113,0.1)';btn.style.borderColor='rgba(248,113,113,0.3)';btn.style.color='#f87171';});
        btn.addEventListener('mouseleave',function(){btn.style.background='rgba(255,255,255,0.05)';btn.style.borderColor='rgba(255,255,255,0.09)';btn.style.color='rgba(255,255,255,0.55)';});
        btn.addEventListener('click',function(){vwSearch.value=cat.q;vwDoSearch(cat.q);});
        row.appendChild(btn);
      });
      vwResultsList.appendChild(row);

      try{
        var trending=await vwTrendingAPI();
        if(trending&&trending.length){
          vwResultsList.appendChild(vwSectionHeader('trending'));
          vwRenderPipedItems(trending,12);
          vwSetStatus('trending loaded');
        } else {
          vwResultsList.appendChild(vwSectionHeader('search above or pick a category'));
          vwSetStatus('search unavailable on this network — type to search or paste a video ID');
        }
      }catch(e){
        vwResultsList.appendChild(vwSectionHeader('search above or pick a category'));
        vwSetStatus('ready');
      }
    }

    vwSearchBtn.addEventListener('click',function(){var q=vwSearch.value.trim();if(q)vwDoSearch(q);});
    vwSearch.addEventListener('keydown',function(e){if(e.key==='Enter'){var q=vwSearch.value.trim();if(q)vwDoSearch(q);}});
    vwBackBtn.addEventListener('click',function(){vwShowResults();});

    document.querySelectorAll('#__modmenu__ .mm-tab').forEach(function(t){
      if(t.dataset.tab==='videowatchr'){
        t.addEventListener('click',function(){
          if(!vwResultsList.children.length)vwLoadHome();
        });
      }
    });
  })();


  // ── notepad ──
  (function(){
    const area = document.getElementById('np-area');
    const wc = document.getElementById('np-wordcount');
    if(!area) return;
    // Load saved
    try{ area.value = localStorage.getItem('__mm_notes__') || ''; }catch(e){}
    function updateWC(){
      const words = area.value.trim().split(/\s+/).filter(Boolean).length;
      if(wc) wc.textContent = words + ' word' + (words!==1?'s':'') + ' · ' + area.value.length + ' chars';
      try{ localStorage.setItem('__mm_notes__', area.value); }catch(e){}
    }
    updateWC();
    area.addEventListener('input', updateWC);
    document.getElementById('np-copy').addEventListener('click', function(){
      navigator.clipboard.writeText(area.value).then(function(){
        showToast('ok','notes copied',''+area.value.length+' characters');
      }).catch(function(){ showToast('err','clipboard blocked',''); });
    });
    document.getElementById('np-clear').addEventListener('click', function(){
      if(area.value && confirm('Clear all notes?')){ area.value=''; updateWC(); showToast('ok','notes cleared',''); }
    });
  })();

  // ── pomodoro timer ──
  (function(){
    let tmTotal=25*60, tmLeft=25*60, tmRunning=false, tmInterval=null, tmSession=1;
    const disp=document.getElementById('tm-display');
    const prog=document.getElementById('tm-progress');
    const lbl=document.getElementById('tm-label');
    const sess=document.getElementById('tm-session');
    const startBtn=document.getElementById('tm-start');
    const resetBtn=document.getElementById('tm-reset');
    const customRow=document.getElementById('tm-custom-row');
    const customMins=document.getElementById('tm-custom-mins');
    if(!disp)return;

    function tmFmt(s){ return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0'); }
    function tmRender(){
      disp.textContent=tmFmt(tmLeft);
      prog.style.width=(tmLeft/tmTotal*100)+'%';
    }
    function tmBeep(){
      try{
        const ac=new AudioContext();
        const o=ac.createOscillator();
        const g=ac.createGain();
        o.connect(g);g.connect(ac.destination);
        o.frequency.value=880;g.gain.setValueAtTime(0.3,ac.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001,ac.currentTime+0.8);
        o.start();o.stop(ac.currentTime+0.8);
      }catch(e){}
    }

    document.querySelectorAll('.mm-timer-mode').forEach(function(btn){
      btn.addEventListener('click',function(){
        document.querySelectorAll('.mm-timer-mode').forEach(function(b){b.classList.remove('tm-active');});
        btn.classList.add('tm-active');
        const mins=parseInt(btn.dataset.mins);
        if(mins===0){ customRow.style.display='flex'; tmTotal=(parseInt(customMins.value)||10)*60; }
        else{ customRow.style.display='none'; tmTotal=mins*60; }
        lbl.textContent=btn.dataset.label;
        tmLeft=tmTotal; tmRunning=false; clearInterval(tmInterval);
        startBtn.textContent='start'; tmRender();
      });
    });
    customMins.addEventListener('input',function(){
      tmTotal=(parseInt(customMins.value)||1)*60; tmLeft=tmTotal; tmRender();
    });
    startBtn.addEventListener('click',function(){
      if(tmRunning){
        tmRunning=false; clearInterval(tmInterval); startBtn.textContent='resume';
      } else {
        tmRunning=true; startBtn.textContent='pause';
        tmInterval=setInterval(function(){
          tmLeft--;
          tmRender();
          if(tmLeft<=0){
            clearInterval(tmInterval); tmRunning=false; startBtn.textContent='start';
            tmBeep(); tmSession++;
            if(sess)sess.textContent='session '+tmSession;
            showToast('ok','timer done!',lbl.textContent+' complete');
          }
        },1000);
      }
    });
    resetBtn.addEventListener('click',function(){
      tmRunning=false; clearInterval(tmInterval); tmLeft=tmTotal;
      startBtn.textContent='start'; tmRender();
    });
    tmRender();
  })();

  // ── tools ──
  (function(){
    // --- Color Picker ---
    let cpOn=false;
    function cpHandler(e){
      if(document.getElementById('__modmenu__').contains(e.target))return;
      e.preventDefault(); e.stopPropagation();
      const s=getComputedStyle(e.target);
      const bg=s.backgroundColor, fg=s.color, border=s.borderColor;
      const result='bg: '+bg+' | text: '+fg;
      navigator.clipboard.writeText(bg).catch(function(){});
      showToast('ok','color copied',bg);
      log('[ColorPicker] bg='+bg+' text='+fg,'i');
      // Show swatch overlay briefly
      const swatch=document.createElement('div');
      swatch.style.cssText='position:fixed;top:10px;left:50%;transform:translateX(-50%);z-index:2147483645;padding:8px 16px;border-radius:8px;font-family:monospace;font-size:12px;color:#fff;text-shadow:0 1px 3px rgba(0,0,0,0.8);pointer-events:none;background:'+bg+';border:2px solid rgba(255,255,255,0.3);box-shadow:0 4px 20px rgba(0,0,0,0.5)';
      swatch.textContent=bg;
      document.body.appendChild(swatch);
      setTimeout(function(){swatch.remove();},1500);
    }
    document.getElementById('tl-colorpicker').addEventListener('click',function(){
      cpOn=!cpOn;
      document.getElementById('tl-cp-badge').textContent=cpOn?'ON':'toggle';
      if(cpOn){ document.addEventListener('click',cpHandler,true); document.body.style.cursor='crosshair'; log('Color picker ON — click any element','i'); }
      else{ document.removeEventListener('click',cpHandler,true); document.body.style.cursor=''; log('Color picker OFF','w'); }
    });

    // --- Ruler ---
    let rlOn=false, rlStart=null, rlOverlay=null;
    function rlDown(e){ rlStart={x:e.clientX,y:e.clientY}; }
    function rlMove(e){
      if(!rlStart)return;
      if(!rlOverlay){ rlOverlay=document.createElement('div'); rlOverlay.style.cssText='position:fixed;z-index:2147483645;pointer-events:none;border:1px dashed #22d3ee;background:rgba(34,211,238,0.05)'; document.body.appendChild(rlOverlay); }
      const x=Math.min(rlStart.x,e.clientX), y=Math.min(rlStart.y,e.clientY);
      const w=Math.abs(e.clientX-rlStart.x), h=Math.abs(e.clientY-rlStart.y);
      rlOverlay.style.cssText='position:fixed;z-index:2147483645;pointer-events:none;border:1px dashed #22d3ee;background:rgba(34,211,238,0.05);left:'+x+'px;top:'+y+'px;width:'+w+'px;height:'+h+'px';
      rlOverlay.textContent='';
      const lbl=document.createElement('span');
      lbl.style.cssText='position:absolute;top:2px;left:4px;font-family:monospace;font-size:10px;color:#22d3ee;background:rgba(0,0,0,0.7);padding:1px 4px;border-radius:3px';
      lbl.textContent=w+'×'+h+'px';
      rlOverlay.appendChild(lbl);
    }
    function rlUp(e){
      if(!rlStart)return;
      const w=Math.abs(e.clientX-rlStart.x), h=Math.abs(e.clientY-rlStart.y);
      log('[Ruler] '+w+' × '+h+' px','i');
      showToast('ok','measured',w+' × '+h+' px');
      rlStart=null;
      setTimeout(function(){if(rlOverlay){rlOverlay.remove();rlOverlay=null;}},1200);
    }
    document.getElementById('tl-ruler').addEventListener('click',function(){
      rlOn=!rlOn;
      document.getElementById('tl-rl-badge').textContent=rlOn?'ON':'toggle';
      if(rlOn){ document.addEventListener('mousedown',rlDown); document.addEventListener('mousemove',rlMove); document.addEventListener('mouseup',rlUp); log('Ruler ON — drag to measure','i'); }
      else{ document.removeEventListener('mousedown',rlDown); document.removeEventListener('mousemove',rlMove); document.removeEventListener('mouseup',rlUp); if(rlOverlay){rlOverlay.remove();rlOverlay=null;} log('Ruler OFF','w'); }
    });

    // --- Font Inspector ---
    let fiOn=false;
    function fiHandler(e){
      if(document.getElementById('__modmenu__').contains(e.target))return;
      e.preventDefault(); e.stopPropagation();
      const s=getComputedStyle(e.target);
      const info='font: '+s.fontFamily+' | size: '+s.fontSize+' | weight: '+s.fontWeight+' | line-height: '+s.lineHeight+' | color: '+s.color;
      log('[Font] '+info,'i');
      showToast('ok',s.fontSize+' '+s.fontWeight,s.fontFamily.split(',')[0].replace(/['"]/g,'').trim());
    }
    document.getElementById('tl-fontinspect').addEventListener('click',function(){
      fiOn=!fiOn;
      document.getElementById('tl-fi-badge').textContent=fiOn?'ON':'toggle';
      if(fiOn){ document.addEventListener('click',fiHandler,true); document.body.style.cursor='help'; log('Font inspector ON — click any text','i'); }
      else{ document.removeEventListener('click',fiHandler,true); document.body.style.cursor=''; log('Font inspector OFF','w'); }
    });

    // --- Image Downloader ---
    document.getElementById('tl-imgdown').addEventListener('click',function(){
      const imgs=Array.from(document.images).filter(function(i){return i.src&&!i.src.startsWith('data:')&&i.width>32&&i.height>32;});
      const box=document.getElementById('tl-imglist');
      if(!imgs.length){ showToast('err','no images found',''); return; }
      box.style.display='block';
      box.innerHTML='<div style="font-size:9.5px;color:rgba(255,255,255,0.2);text-transform:uppercase;letter-spacing:.1em;margin-bottom:6px;font-weight:600">'+imgs.length+' images found</div>';
      imgs.forEach(function(img,i){
        const row=document.createElement('div');
        row.style.cssText='display:flex;align-items:center;gap:8px;padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.05)';
        const thumb=document.createElement('img');
        thumb.src=img.src; thumb.style.cssText='width:40px;height:28px;object-fit:cover;border-radius:4px;flex-shrink:0;background:#111';
        const info=document.createElement('div');
        info.style.cssText='flex:1;min-width:0';
        info.innerHTML='<div style="font-size:10px;color:rgba(255,255,255,0.5);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:monospace">'+img.src.split('/').pop().slice(0,40)+'</div>'
          +'<div style="font-size:9.5px;color:rgba(255,255,255,0.25)">'+img.naturalWidth+'×'+img.naturalHeight+'</div>';
        const btn=document.createElement('a');
        btn.href=img.src; btn.download=''; btn.target='_blank';
        btn.style.cssText='background:rgba(34,211,238,0.1);border:1px solid rgba(34,211,238,0.2);border-radius:5px;padding:3px 9px;color:#22d3ee;font-size:10px;font-family:sans-serif;text-decoration:none;flex-shrink:0;cursor:pointer';
        btn.textContent='save';
        row.appendChild(thumb); row.appendChild(info); row.appendChild(btn);
        box.appendChild(row);
      });
      showToast('ok','found '+imgs.length+' images','click save to download each');
    });

    // --- Wikipedia ──
    document.getElementById('tl-wikipedia').addEventListener('click',function(){
      const box=document.getElementById('tl-wiki-box');
      if(box.style.display!=='none'&&box.innerHTML){ box.style.display='none'; return; }
      box.style.display='block';
      box.innerHTML='<div style="display:flex;gap:6px;margin-bottom:8px">'
        +'<input id="tl-wiki-q" type="text" placeholder="Search Wikipedia..." style="flex:1;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:6px;padding:6px 10px;color:#e2e8f0;font-family:sans-serif;font-size:11px;outline:none"/>'
        +'<button id="tl-wiki-go" style="background:rgba(34,211,238,0.12);border:1px solid rgba(34,211,238,0.25);border-radius:6px;padding:6px 12px;color:#22d3ee;font-family:sans-serif;font-size:11px;cursor:pointer">go</button>'
        +'</div><div id="tl-wiki-result" style="font-size:11px;color:rgba(255,255,255,0.6);line-height:1.6;font-family:sans-serif"></div>';
      function doWiki(){
        const q=document.getElementById('tl-wiki-q').value.trim();
        if(!q)return;
        const res=document.getElementById('tl-wiki-result');
        res.textContent='searching...';
        fetch('https://en.wikipedia.org/api/rest_v1/page/summary/'+encodeURIComponent(q))
          .then(function(r){return r.json();})
          .then(function(d){
            if(d.extract){
              res.innerHTML='<div style="font-weight:600;color:#e2e8f0;margin-bottom:4px">'+d.title+'</div>'
                +d.extract.slice(0,400)+'...'
                +'<a href="'+d.content_urls.desktop.page+'" target="_blank" style="display:block;margin-top:6px;color:#22d3ee;text-decoration:none;font-size:10px">read more on wikipedia →</a>';
              showToast('ok','wikipedia: '+d.title,'');
            } else { res.textContent='Not found. Try a different search term.'; }
          }).catch(function(e){ res.textContent='Error: '+e.message; });
      }
      document.getElementById('tl-wiki-go').addEventListener('click',doWiki);
      document.getElementById('tl-wiki-q').addEventListener('keydown',function(e){if(e.key==='Enter')doWiki();});
      setTimeout(function(){document.getElementById('tl-wiki-q').focus();},50);
    });

    // --- Unit Converter ---
    document.getElementById('tl-units').addEventListener('click',function(){
      const box=document.getElementById('tl-units-box');
      if(box.style.display!=='none'&&box.innerHTML){ box.style.display='none'; return; }
      box.style.display='block';
      const cats={
        length:{ units:['mm','cm','m','km','in','ft','yd','mi'], factors:[0.001,0.01,1,1000,0.0254,0.3048,0.9144,1609.34] },
        weight:{ units:['mg','g','kg','t','oz','lb','st'], factors:[0.000001,0.001,1,1000,0.0283495,0.453592,6.35029] },
        temp:{ units:['°C','°F','K'], special:true }
      };
      box.innerHTML='<div style="display:flex;gap:5px;margin-bottom:8px;flex-wrap:wrap">'
        +'<button class="uc-cat uc-on" data-cat="length">length</button>'
        +'<button class="uc-cat" data-cat="weight">weight</button>'
        +'<button class="uc-cat" data-cat="temp">temp</button>'
        +'</div>'
        +'<div id="uc-body"></div>'
        +'<style>.uc-cat{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:5px;padding:3px 10px;font-family:sans-serif;font-size:10px;color:rgba(255,255,255,0.4);cursor:pointer}.uc-cat.uc-on{background:rgba(34,211,238,0.1);border-color:rgba(34,211,238,0.3);color:#22d3ee}.uc-field{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:5px;padding:4px 8px;color:#e2e8f0;font-family:monospace;font-size:11px;outline:none;width:80px}.uc-field:focus{border-color:rgba(34,211,238,0.4)}</style>';
      function renderCat(cat){
        const body=document.getElementById('uc-body');
        body.innerHTML='';
        if(cat==='temp'){
          body.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:6px">'
            +'<label style="font-size:10px;color:rgba(255,255,255,0.35);font-family:sans-serif;display:flex;flex-direction:column;gap:3px">°C<input class="uc-field" id="uc-c" type="number" placeholder="0"/></label>'
            +'<label style="font-size:10px;color:rgba(255,255,255,0.35);font-family:sans-serif;display:flex;flex-direction:column;gap:3px">°F<input class="uc-field" id="uc-f" type="number" placeholder="32"/></label>'
            +'<label style="font-size:10px;color:rgba(255,255,255,0.35);font-family:sans-serif;display:flex;flex-direction:column;gap:3px">K<input class="uc-field" id="uc-k" type="number" placeholder="273.15"/></label>'
            +'</div>';
          document.getElementById('uc-c').addEventListener('input',function(){
            const c=parseFloat(this.value);if(isNaN(c))return;
            document.getElementById('uc-f').value=(c*9/5+32).toFixed(4);
            document.getElementById('uc-k').value=(c+273.15).toFixed(4);
          });
          document.getElementById('uc-f').addEventListener('input',function(){
            const f=parseFloat(this.value);if(isNaN(f))return;
            const c=(f-32)*5/9;
            document.getElementById('uc-c').value=c.toFixed(4);
            document.getElementById('uc-k').value=(c+273.15).toFixed(4);
          });
          document.getElementById('uc-k').addEventListener('input',function(){
            const k=parseFloat(this.value);if(isNaN(k))return;
            const c=k-273.15;
            document.getElementById('uc-c').value=c.toFixed(4);
            document.getElementById('uc-f').value=(c*9/5+32).toFixed(4);
          });
        } else {
          const d=cats[cat];
          const wrap=document.createElement('div');
          wrap.style.cssText='display:flex;flex-wrap:wrap;gap:6px';
          d.units.forEach(function(u,i){
            const lbl=document.createElement('label');
            lbl.style.cssText='font-size:10px;color:rgba(255,255,255,0.35);font-family:sans-serif;display:flex;flex-direction:column;gap:3px';
            lbl.innerHTML=u+'<input class="uc-field uc-val" data-idx="'+i+'" type="number" placeholder="0"/>';
            wrap.appendChild(lbl);
          });
          body.appendChild(wrap);
          body.querySelectorAll('.uc-val').forEach(function(inp){
            inp.addEventListener('input',function(){
              const idx=parseInt(this.dataset.idx);
              const val=parseFloat(this.value);if(isNaN(val))return;
              const inMeters=val*d.factors[idx];
              body.querySelectorAll('.uc-val').forEach(function(other){
                const oi=parseInt(other.dataset.idx);
                if(oi!==idx)other.value=(inMeters/d.factors[oi]).toFixed(6).replace(/\.?0+$/,'');
              });
            });
          });
        }
      }
      renderCat('length');
      box.querySelectorAll('.uc-cat').forEach(function(btn){
        btn.addEventListener('click',function(){
          box.querySelectorAll('.uc-cat').forEach(function(b){b.classList.remove('uc-on');});
          btn.classList.add('uc-on');
          renderCat(btn.dataset.cat);
        });
      });
    });

    // --- CSS Injector ---
    document.getElementById('tl-css').addEventListener('click',function(){
      const box=document.getElementById('tl-css-box');
      if(box.style.display!=='none'&&box.innerHTML){ box.style.display='none'; return; }
      box.style.display='block';
      box.innerHTML='<textarea id="tl-css-input" placeholder="/* type CSS here */" spellcheck="false"'
        +' style="width:100%;height:110px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:6px;padding:8px 10px;color:#e2e8f0;font-family:monospace;font-size:11px;outline:none;resize:vertical;display:block;margin-bottom:6px"></textarea>'
        +'<div style="display:flex;gap:6px">'
        +'<button id="tl-css-apply" style="background:rgba(34,211,238,0.12);border:1px solid rgba(34,211,238,0.25);border-radius:6px;padding:5px 14px;color:#22d3ee;font-family:sans-serif;font-size:11px;cursor:pointer">apply</button>'
        +'<button id="tl-css-remove" style="background:rgba(248,113,113,0.08);border:1px solid rgba(248,113,113,0.2);border-radius:6px;padding:5px 14px;color:#f87171;font-family:sans-serif;font-size:11px;cursor:pointer">remove</button>'
        +'</div>';
      let injected=null;
      document.getElementById('tl-css-apply').addEventListener('click',function(){
        const css=document.getElementById('tl-css-input').value;
        if(!css.trim()){ showToast('err','no CSS to inject',''); return; }
        if(injected)injected.remove();
        injected=document.createElement('style');
        injected.id='__mm_injected_css__';
        injected.textContent=css;
        document.head.appendChild(injected);
        showToast('ok','CSS applied',css.length+' chars injected');
        log('[CSS] injected '+css.length+' chars','i');
      });
      document.getElementById('tl-css-remove').addEventListener('click',function(){
        const s=document.getElementById('__mm_injected_css__');
        if(s){s.remove();injected=null;showToast('ok','CSS removed','');}
        else showToast('err','nothing to remove','');
      });
    });
  })();

  // ── privacy ──
  (function(){
    function pvStatus(msg,type){
      const s=document.getElementById('pv-status');
      if(!s)return;
      s.textContent=msg;
      s.style.cssText='display:block;font-size:11px;padding:7px 11px;border-radius:7px;margin-bottom:8px;font-family:"Geist Mono",monospace;'
        +(type==='ok'?'background:rgba(74,222,128,0.08);color:#4ade80;border:1px solid rgba(74,222,128,0.2)'
        :'background:rgba(248,113,113,0.08);color:#f87171;border:1px solid rgba(248,113,113,0.2)');
      setTimeout(function(){s.style.display='none';},3500);
    }

    // Canvas spoofer
    let cvOn=false;
    document.getElementById('pv-canvas').addEventListener('click',function(){
      cvOn=!cvOn;
      document.getElementById('pv-cv-badge').textContent=cvOn?'ON':'toggle';
      if(cvOn){
        const orig=HTMLCanvasElement.prototype.toDataURL;
        HTMLCanvasElement.prototype.toDataURL=function(){
          const ctx=this.getContext('2d');
          if(ctx){const id=ctx.getImageData(0,0,1,1);id.data[0]=(id.data[0]+Math.floor(Math.random()*3)-1+256)%256;ctx.putImageData(id,0,0);}
          return orig.apply(this,arguments);
        };
        window.__mm_cvOrig=orig;
        pvStatus('Canvas spoofer ON','ok'); log('[Privacy] canvas spoofer ON','i');
      } else {
        if(window.__mm_cvOrig)HTMLCanvasElement.prototype.toDataURL=window.__mm_cvOrig;
        pvStatus('Canvas spoofer OFF','ok'); log('[Privacy] canvas spoofer OFF','w');
      }
    });

    // Audio spoofer
    let auOn=false;
    document.getElementById('pv-audio').addEventListener('click',function(){
      auOn=!auOn;
      document.getElementById('pv-au-badge').textContent=auOn?'ON':'toggle';
      if(auOn){
        const origGetChan=AnalyserNode.prototype.getFloatFrequencyData;
        AnalyserNode.prototype.getFloatFrequencyData=function(arr){
          origGetChan.call(this,arr);
          for(let i=0;i<arr.length;i++)arr[i]+=Math.random()*0.0001-0.00005;
        };
        window.__mm_auOrig=origGetChan;
        pvStatus('Audio spoofer ON','ok'); log('[Privacy] audio spoofer ON','i');
      } else {
        if(window.__mm_auOrig)AnalyserNode.prototype.getFloatFrequencyData=window.__mm_auOrig;
        pvStatus('Audio spoofer OFF','ok'); log('[Privacy] audio spoofer OFF','w');
      }
    });

    // WebGL spoofer
    let wgOn=false;
    document.getElementById('pv-webgl').addEventListener('click',function(){
      wgOn=!wgOn;
      document.getElementById('pv-wg-badge').textContent=wgOn?'ON':'toggle';
      if(wgOn){
        const origGetParam=WebGLRenderingContext.prototype.getParameter;
        WebGLRenderingContext.prototype.getParameter=function(p){
          if(p===37445)return'Intel Inc.';
          if(p===37446)return'Intel Iris OpenGL Engine';
          return origGetParam.call(this,p);
        };
        window.__mm_wgOrig=origGetParam;
        pvStatus('WebGL spoofer ON — reporting as Intel Iris','ok'); log('[Privacy] WebGL spoofer ON','i');
      } else {
        if(window.__mm_wgOrig)WebGLRenderingContext.prototype.getParameter=window.__mm_wgOrig;
        pvStatus('WebGL spoofer OFF','ok'); log('[Privacy] WebGL spoofer OFF','w');
      }
    });

    // Referrer blocker
    let rfOn=false;
    document.getElementById('pv-referrer').addEventListener('click',function(){
      rfOn=!rfOn;
      document.getElementById('pv-rf-badge').textContent=rfOn?'ON':'toggle';
      if(rfOn){
        const origFetch=window.fetch;
        window.__mm_rfFetch=origFetch;
        window.fetch=function(url,opts){
          opts=opts||{};opts.headers=opts.headers||{};
          if(typeof opts.headers.set==='function')opts.headers.set('Referer','');
          return origFetch(url,opts);
        };
        // Meta referrer tag
        let meta=document.querySelector('meta[name="referrer"]');
        if(!meta){meta=document.createElement('meta');meta.name='referrer';document.head.appendChild(meta);}
        meta.content='no-referrer';
        pvStatus('Referrer blocker ON','ok'); log('[Privacy] referrer blocker ON','i');
      } else {
        if(window.__mm_rfFetch)window.fetch=window.__mm_rfFetch;
        pvStatus('Referrer blocker OFF','ok'); log('[Privacy] referrer blocker OFF','w');
      }
    });

    // UA spoofer
    let uaOn=false;
    const fakeUAs=[
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 Safari/605.1.15',
      'Mozilla/5.0 (X11; Linux x86_64; rv:121.0) Gecko/20100101 Firefox/121.0',
    ];
    document.getElementById('pv-useragent').addEventListener('click',function(){
      uaOn=!uaOn;
      document.getElementById('pv-ua-badge').textContent=uaOn?'ON':'toggle';
      if(uaOn){
        const fakeUA=fakeUAs[Math.floor(Math.random()*fakeUAs.length)];
        try{
          Object.defineProperty(navigator,'userAgent',{get:function(){return fakeUA;},configurable:true});
          pvStatus('UA spoofed: '+fakeUA.slice(0,60)+'...','ok');
          log('[Privacy] UA spoofed: '+fakeUA,'i');
        }catch(e){pvStatus('UA spoof failed: '+e.message,'ok');log('[Privacy] UA spoof error: '+e.message,'e');}
      } else {
        try{Object.defineProperty(navigator,'userAgent',{get:function(){return navigator.userAgent;},configurable:true});}catch(e){}
        pvStatus('UA restored (reload page for full effect)','ok'); log('[Privacy] UA spoofer OFF','w');
      }
    });

    // Fingerprint report
    document.getElementById('pv-report').addEventListener('click',function(){
      goConsole();
      log('--- fingerprint report ---','w');
      log('userAgent: '+navigator.userAgent,'i');
      log('platform: '+navigator.platform,'i');
      log('language: '+navigator.language+' / '+navigator.languages,'i');
      log('hardwareConcurrency: '+navigator.hardwareConcurrency,'i');
      log('deviceMemory: '+(navigator.deviceMemory||'unknown')+'GB','i');
      log('screen: '+screen.width+'×'+screen.height+' depth:'+screen.colorDepth,'i');
      log('timezone: '+Intl.DateTimeFormat().resolvedOptions().timeZone,'i');
      log('plugins: '+navigator.plugins.length,'i');
      try{const c=document.createElement('canvas');const ctx=c.getContext('2d');ctx.fillText('test',0,10);log('canvas: '+c.toDataURL().slice(0,80)+'...','i');}catch(e){}
      log('cookiesEnabled: '+navigator.cookieEnabled,'i');
      log('doNotTrack: '+navigator.doNotTrack,'i');
      log('--- end report ---','w');
      showToast('ok','report logged','check console tab');
    });
  })();


  // ── theme switcher ──
  (function(){
    const THEME_KEY='__mm_accent__';
    function applyTheme(color){
      try{localStorage.setItem(THEME_KEY,color);}catch(e){}
      // Recolor all active tab indicators and key accent elements
      const styleId='__mm_theme_style__';
      let s=document.getElementById(styleId);
      if(!s){s=document.createElement('style');s.id=styleId;document.head.appendChild(s);}
      s.textContent=
        '#__modmenu__ .mm-tab.mm-active{color:'+color+'!important;border-bottom-color:'+color+'!important}'
        +'#__modmenu__ #mm-title{color:'+color+'!important}'
        +'#__modmenu__ #mm-cprompt{color:'+color+'!important}'
        +'#__modmenu__ #mm-runbtn{background:'+color+'22!important;color:'+color+'!important;border-color:'+color+'44!important}'
        +'#__modmenu__ #mm-home-time{color:'+color+'!important}'
        +'#__modmenu__ #mm-home-secs{color:'+color+'88!important}';
    }
    // Load saved
    try{const saved=localStorage.getItem(THEME_KEY);if(saved)applyTheme(saved);}catch(e){}
    // Wire up swatches
    document.querySelectorAll('#__modmenu__ .mm-swatch').forEach(function(sw){
      sw.addEventListener('click',function(){
        document.querySelectorAll('#__modmenu__ .mm-swatch').forEach(function(s){s.style.outlineColor='transparent';});
        sw.style.outlineColor='rgba(255,255,255,0.5)';
        applyTheme(sw.dataset.color);
        showToast('ok','theme updated',sw.dataset.color);
      });
    });
  })();

  // ── videowatchr — history, favorites, pip ──
  (function(){
    const HIST_KEY='__mm_vw_history__';
    const FAV_KEY='__mm_vw_favs__';

    function loadArr(key){try{return JSON.parse(localStorage.getItem(key)||'[]');}catch(e){return[];}}
    function saveArr(key,arr){try{localStorage.setItem(key,JSON.stringify(arr.slice(0,50)));}catch(e){}}

    function addHistory(videoId,title,channel,thumb){
      const hist=loadArr(HIST_KEY).filter(function(h){return h.id!==videoId;});
      hist.unshift({id:videoId,title:title,channel:channel,thumb:thumb,ts:Date.now()});
      saveArr(HIST_KEY,hist);
      updateLibBadge();
    }

    function toggleFav(videoId,title,channel,thumb){
      const favs=loadArr(FAV_KEY);
      const idx=favs.findIndex(function(f){return f.id===videoId;});
      if(idx>=0){favs.splice(idx,1);saveArr(FAV_KEY,favs);return false;}
      else{favs.unshift({id:videoId,title:title,channel:channel,thumb:thumb});saveArr(FAV_KEY,favs);return true;}
    }

    function isFav(videoId){return loadArr(FAV_KEY).some(function(f){return f.id===videoId;});}

    function updateLibBadge(){
      const hist=loadArr(HIST_KEY);
      const libBar=document.getElementById('vw-lib-bar');
      if(libBar&&hist.length>0)libBar.style.display='block';
    }

    function renderLib(type){
      const libBar=document.getElementById('vw-lib-bar');
      const libContent=document.getElementById('vw-lib-content');
      const resultsView=document.getElementById('vw-results-view');
      if(!libBar||!libContent)return;
      const items=loadArr(type===('favorites')?FAV_KEY:HIST_KEY);
      libBar.style.display='block';
      libContent.style.display='flex';
      libContent.style.flexDirection='column';
      resultsView.style.display='none';
      libContent.innerHTML='';
      if(!items.length){
        libContent.innerHTML='<div style="padding:20px;text-align:center;color:rgba(255,255,255,0.2);font-size:11px;font-family:Geist,sans-serif">'+(type==='favorites'?'No favorites yet — star a video to save it':'No watch history yet')+'</div>';
        return;
      }
      items.forEach(function(item){
        const card=document.createElement('div');
        card.style.cssText='display:flex;gap:9px;padding:7px 6px;border-radius:8px;cursor:pointer;margin-bottom:4px;align-items:flex-start';
        const thumb=item.thumb||('https://i.ytimg.com/vi/'+item.id+'/mqdefault.jpg');
        card.innerHTML='<div style="flex-shrink:0;width:90px;height:52px;border-radius:5px;overflow:hidden;background:#111">'
          +'<img src="'+thumb+'" style="width:100%;height:100%;object-fit:cover"/></div>'
          +'<div style="flex:1;min-width:0">'
          +'<div style="font-size:11px;font-weight:500;color:#e2e8f0;line-height:1.35;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical">'+(item.title||item.id)+'</div>'
          +'<div style="font-size:10px;color:rgba(255,255,255,0.3);margin-top:2px;font-family:Geist Mono,monospace">'+(item.channel||'')+'</div>'
          +(item.ts?'<div style="font-size:9.5px;color:rgba(255,255,255,0.18);margin-top:2px">'+new Date(item.ts).toLocaleDateString()+'</div>':'')
          +'</div>';
        card.addEventListener('mouseenter',function(){card.style.background='rgba(255,255,255,0.05)';});
        card.addEventListener('mouseleave',function(){card.style.background='';});
        card.addEventListener('click',function(){
          libContent.style.display='none';
          resultsView.style.display='flex';
          // Call vwShowPlayer if available
          const frame=document.getElementById('vw-player-frame');
          const titleEl=document.getElementById('vw-video-title');
          const chanEl=document.getElementById('vw-video-channel');
          const playerView=document.getElementById('vw-player-view');
          const backBtn=document.getElementById('vw-back-btn');
          if(frame){
            frame.src='https://www.youtube-nocookie.com/embed/'+item.id+'?autoplay=1&rel=0&modestbranding=1';
            if(titleEl)titleEl.textContent=item.title||item.id;
            if(chanEl)chanEl.textContent=item.channel||'';
            if(playerView)playerView.style.display='flex';
            if(backBtn)backBtn.style.display='block';
            updateFavBtn(item.id);
          }
        });
        libContent.appendChild(card);
      });
    }

    // Wire up lib tabs
    document.querySelectorAll('.vw-lib-tab').forEach(function(tab){
      tab.addEventListener('click',function(){
        document.querySelectorAll('.vw-lib-tab').forEach(function(t){
          t.style.color='rgba(255,255,255,0.3)';
          t.style.borderBottom='none';
        });
        tab.style.color='rgba(248,113,113,0.8)';
        tab.style.borderBottom='2px solid #f87171';
        renderLib(tab.dataset.lib);
      });
    });

    // Add history tab button to search bar
    const searchBar=document.querySelector('#vw-app > div:first-child');
    if(searchBar){
      const histBtn=document.createElement('button');
      histBtn.id='vw-lib-btn';
      histBtn.textContent='☰';
      histBtn.title='History & Favorites';
      histBtn.style.cssText='background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:7px;padding:6px 10px;color:rgba(255,255,255,0.4);font-size:13px;cursor:pointer;transition:all .15s;flex-shrink:0';
      histBtn.addEventListener('click',function(){
        const libContent=document.getElementById('vw-lib-content');
        const resultsView=document.getElementById('vw-results-view');
        const libBar=document.getElementById('vw-lib-bar');
        if(libContent&&libContent.style.display!=='none'){
          libContent.style.display='none';
          if(resultsView)resultsView.style.display='flex';
        } else {
          if(resultsView)resultsView.style.display='none';
          updateLibBadge();
          renderLib('history');
        }
      });
      searchBar.appendChild(histBtn);
    }

    function updateFavBtn(videoId){
      const btn=document.getElementById('vw-fav-btn');
      if(!btn)return;
      if(isFav(videoId)){btn.textContent='★';btn.style.color='#facc15';btn.style.borderColor='rgba(250,204,21,0.3)';}
      else{btn.textContent='☆';btn.style.color='rgba(255,255,255,0.4)';btn.style.borderColor='rgba(255,255,255,0.1)';}
    }

    // PiP button
    const pipBtn=document.getElementById('vw-pip-btn');
    if(pipBtn){
      pipBtn.addEventListener('click',function(){
        const frame=document.getElementById('vw-player-frame');
        if(!frame)return;
        // Get the video element inside the iframe if possible
        try{
          const video=frame.contentDocument&&frame.contentDocument.querySelector('video');
          if(video&&video.requestPictureInPicture){video.requestPictureInPicture();return;}
        }catch(e){}
        // Fallback: open in new window
        const src=frame.src;
        if(src){window.open(src.replace('embed/','watch?v=').replace('www.youtube-nocookie.com','www.youtube.com'),'_blank');}
        showToast('ok','opened in new tab','pip requires same-origin video');
      });
    }

    // Fav button
    const favBtn=document.getElementById('vw-fav-btn');
    if(favBtn){
      favBtn.addEventListener('click',function(){
        const frame=document.getElementById('vw-player-frame');
        if(!frame||!frame.src)return;
        const match=frame.src.match(/embed\/([a-zA-Z0-9_-]{11})/);
        if(!match)return;
        const vid=match[1];
        const title=(document.getElementById('vw-video-title')||{}).textContent||vid;
        const channel=(document.getElementById('vw-video-channel')||{}).textContent||'';
        const thumb='https://i.ytimg.com/vi/'+vid+'/mqdefault.jpg';
        const added=toggleFav(vid,title,channel,thumb);
        updateFavBtn(vid);
        showToast('ok',added?'added to favorites':'removed from favorites',title.slice(0,50));
      });
    }

    // Hook into vwShowPlayer to record history
    // Override the existing vwShowPlayer by patching it after the IIFE runs
    const origVwShow=window.__vwShowPlayer;
    function patchVwHistory(){
      const frame=document.getElementById('vw-player-frame');
      if(!frame)return;
      const observer=new MutationObserver(function(){
        const src=frame.src;
        if(!src)return;
        const match=src.match(/embed\/([a-zA-Z0-9_-]{11})/);
        if(!match)return;
        const vid=match[1];
        const title=(document.getElementById('vw-video-title')||{}).textContent||vid;
        const channel=(document.getElementById('vw-video-channel')||{}).textContent||'';
        const thumb='https://i.ytimg.com/vi/'+vid+'/mqdefault.jpg';
        addHistory(vid,title,channel,thumb);
        updateFavBtn(vid);
      });
      observer.observe(frame,{attributes:true,attributeFilter:['src']});
    }
    patchVwHistory();
    updateLibBadge();
  })();

  // ── games ──
  let gmGame=null,gmRAF=null,gmKeys={},gmScore=0;
  function gmSetScore(n){gmScore=n;$m('gm-score').textContent=n;}
  function gmStatus(t){$m('gm-status-label').textContent=t;}
  function stopGame(){if(gmRAF)cancelAnimationFrame(gmRAF);gmRAF=null;if(gmGame&&gmGame.destroy)gmGame.destroy();gmGame=null;}
  function sizeCanvas(){const cv=$m('mm-gamecanvas');const panel=$m('mm-panel-games');const bar=panel.querySelector('.gm-bar');const hud=panel.querySelector('.gm-hud');cv.width=panel.clientWidth||480;cv.height=panel.clientHeight-bar.offsetHeight-hud.offsetHeight-4||380;}
  function initGamesPanel(){sizeCanvas();startTetris();}
  document.querySelectorAll('#__modmenu__ .gm-pick').forEach(btn=>{btn.addEventListener('click',()=>{document.querySelectorAll('#__modmenu__ .gm-pick').forEach(x=>x.classList.remove('gm-on'));btn.classList.add('gm-on');stopGame();gmSetScore(0);if(btn.id==='gm-tetris')startTetris();else if(btn.id==='gm-flappy')startFlappy();else if(btn.id==='gm-space')startSpace();else if(btn.id==='gm-snake')startSnake();else if(btn.id==='gm-pong')startPong();else if(btn.id==='gm-mine')startMinesweeper();});});
  document.addEventListener('keydown',e=>{gmKeys[e.key]=true;if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown',' '].includes(e.key)&&$m('mm-panel-games').classList.contains('mm-active'))e.preventDefault();});
  document.addEventListener('keyup',e=>{gmKeys[e.key]=false;});

  // ── snake ──
  function startSnake(){
    const cv=$m('mm-gamecanvas'),ctx=cv.getContext('2d');
    const W=cv.width,H=cv.height;
    const SZ=18,COLS=Math.floor(W/SZ),ROWS=Math.floor(H/SZ);
    let snake=[{x:Math.floor(COLS/2),y:Math.floor(ROWS/2)}];
    let dir={x:1,y:0},nextDir={x:1,y:0},food=null,dead=false,lastTime=0,speed=110;
    function placeFood(){
      let pos;
      do{pos={x:Math.floor(Math.random()*COLS),y:Math.floor(Math.random()*ROWS)};}
      while(snake.some(function(s){return s.x===pos.x&&s.y===pos.y;}));
      food=pos;
    }
    placeFood();
    function draw(){
      ctx.fillStyle='#0a0a0e';ctx.fillRect(0,0,W,H);
      ctx.strokeStyle='rgba(255,255,255,0.03)';ctx.lineWidth=1;
      for(let x=0;x<COLS;x++){ctx.beginPath();ctx.moveTo(x*SZ,0);ctx.lineTo(x*SZ,H);ctx.stroke();}
      for(let y=0;y<ROWS;y++){ctx.beginPath();ctx.moveTo(0,y*SZ);ctx.lineTo(W,y*SZ);ctx.stroke();}
      snake.forEach(function(s,i){
        ctx.fillStyle=i===0?'#4ade80':('rgba(74,222,128,'+(0.4+0.6*(i/snake.length))+')');
        ctx.fillRect(s.x*SZ+1,s.y*SZ+1,SZ-2,SZ-2);
        if(i===0){
          ctx.fillStyle='#0a0a0e';
          ctx.beginPath();ctx.arc(s.x*SZ+SZ/2+dir.x*3+dir.y*3,s.y*SZ+SZ/2+dir.y*3-dir.x*3,2,0,Math.PI*2);ctx.fill();
          ctx.beginPath();ctx.arc(s.x*SZ+SZ/2+dir.x*3-dir.y*3,s.y*SZ+SZ/2+dir.y*3+dir.x*3,2,0,Math.PI*2);ctx.fill();
        }
      });
      if(food){ctx.fillStyle='#f87171';ctx.shadowColor='#f87171';ctx.shadowBlur=8;ctx.fillRect(food.x*SZ+3,food.y*SZ+3,SZ-6,SZ-6);ctx.shadowBlur=0;}
      if(dead){
        ctx.fillStyle='rgba(0,0,0,0.65)';ctx.fillRect(0,H/2-26,W,52);
        ctx.fillStyle='#f87171';ctx.font='bold 15px Geist,sans-serif';ctx.textAlign='center';
        ctx.fillText('GAME OVER — space to restart',W/2,H/2+6);
      }
    }
    function loop(ts){
      if(!gmGame)return;
      if(dead){draw();if(gmKeys[' ']){dead=false;snake=[{x:Math.floor(COLS/2),y:Math.floor(ROWS/2)}];dir={x:1,y:0};nextDir={x:1,y:0};gmSetScore(0);speed=110;placeFood();gmKeys[' ']=false;}gmRAF=requestAnimationFrame(loop);return;}
      if(ts-lastTime>speed){
        lastTime=ts;
        if(!(nextDir.x===-dir.x&&nextDir.y===-dir.y))dir={x:nextDir.x,y:nextDir.y};
        const head={x:(snake[0].x+dir.x+COLS)%COLS,y:(snake[0].y+dir.y+ROWS)%ROWS};
        if(snake.some(function(s){return s.x===head.x&&s.y===head.y;})){dead=true;}
        else{
          snake.unshift(head);
          if(food&&head.x===food.x&&head.y===food.y){gmSetScore(gmScore+10);speed=Math.max(55,speed-2);placeFood();}
          else snake.pop();
        }
      }
      if(gmKeys['ArrowLeft']&&dir.x!==1)nextDir={x:-1,y:0};
      if(gmKeys['ArrowRight']&&dir.x!==-1)nextDir={x:1,y:0};
      if(gmKeys['ArrowUp']&&dir.y!==1)nextDir={x:0,y:-1};
      if(gmKeys['ArrowDown']&&dir.y!==-1)nextDir={x:0,y:1};
      draw();gmRAF=requestAnimationFrame(loop);
    }
    gmGame={destroy:function(){}};gmSetScore(0);gmStatus('arrows=move  eat red squares');
    gmRAF=requestAnimationFrame(loop);
  }

  // ── pong ──
  function startPong(){
    const cv=$m('mm-gamecanvas'),ctx=cv.getContext('2d');
    const W=cv.width,H=cv.height;
    const PAD_H=55,PAD_W=8,BALL_S=8;
    let p1={y:H/2-PAD_H/2,score:0},p2={y:H/2-PAD_H/2,score:0};
    let ball={x:W/2,y:H/2,vx:3.5,vy:2.5};
    let started=false,lastTime=0;
    function resetBall(d){ball={x:W/2,y:H/2,vx:(d||1)*3.5,vy:(Math.random()-0.5)*5};}
    function draw(){
      ctx.fillStyle='#0a0a0e';ctx.fillRect(0,0,W,H);
      ctx.setLineDash([6,6]);ctx.strokeStyle='rgba(255,255,255,0.08)';ctx.lineWidth=1;
      ctx.beginPath();ctx.moveTo(W/2,0);ctx.lineTo(W/2,H);ctx.stroke();ctx.setLineDash([]);
      ctx.fillStyle='rgba(255,255,255,0.15)';ctx.font='bold 28px Geist Mono,monospace';ctx.textAlign='center';
      ctx.fillText(p1.score,W/4,36);ctx.fillText(p2.score,3*W/4,36);
      ctx.fillStyle='#e2e8f0';
      ctx.fillRect(10,p1.y,PAD_W,PAD_H);ctx.fillRect(W-10-PAD_W,p2.y,PAD_W,PAD_H);
      ctx.fillStyle='#facc15';ctx.shadowColor='#facc15';ctx.shadowBlur=8;
      ctx.fillRect(ball.x-BALL_S/2,ball.y-BALL_S/2,BALL_S,BALL_S);ctx.shadowBlur=0;
      if(!started){ctx.fillStyle='rgba(255,255,255,0.2)';ctx.font='11px Geist,sans-serif';ctx.textAlign='center';ctx.fillText('W/S=left  ↑/↓=right  SPACE=start',W/2,H-14);}
    }
    function loop(ts){
      if(!gmGame)return;
      lastTime=ts;
      if(gmKeys['ArrowUp'])p2.y=Math.max(0,p2.y-5);
      if(gmKeys['ArrowDown'])p2.y=Math.min(H-PAD_H,p2.y+5);
      if(gmKeys['w']||gmKeys['W'])p1.y=Math.max(0,p1.y-5);
      if(gmKeys['s']||gmKeys['S'])p1.y=Math.min(H-PAD_H,p1.y+5);
      if(gmKeys[' ']&&!started){started=true;gmKeys[' ']=false;}
      if(started){
        ball.x+=ball.vx;ball.y+=ball.vy;
        if(ball.y<=0||ball.y>=H)ball.vy*=-1;
        if(ball.x<=10+PAD_W+BALL_S/2&&ball.y>=p1.y&&ball.y<=p1.y+PAD_H){ball.vx=Math.min(Math.abs(ball.vx)*1.05,9);ball.vy+=((ball.y-(p1.y+PAD_H/2))/(PAD_H/2))*2;}
        if(ball.x>=W-10-PAD_W-BALL_S/2&&ball.y>=p2.y&&ball.y<=p2.y+PAD_H){ball.vx=-Math.min(Math.abs(ball.vx)*1.05,9);ball.vy+=((ball.y-(p2.y+PAD_H/2))/(PAD_H/2))*2;}
        if(ball.x<0){p2.score++;gmSetScore(p1.score+p2.score);resetBall(1);}
        if(ball.x>W){p1.score++;gmSetScore(p1.score+p2.score);resetBall(-1);}
      }
      draw();gmRAF=requestAnimationFrame(loop);
    }
    gmGame={destroy:function(){}};gmSetScore(0);gmStatus('W/S=left  ↑/↓=right  space=start');
    lastTime=performance.now();gmRAF=requestAnimationFrame(loop);
  }

  // ── minesweeper ──
  function startMinesweeper(){
    const cv=$m('mm-gamecanvas'),ctx=cv.getContext('2d');
    const W=cv.width,H=cv.height;
    const SZ=Math.floor(Math.min(W,H-40)/16);
    const COLS=Math.floor(W/SZ),ROWS=Math.floor((H-40)/SZ);
    const MINES=Math.floor(COLS*ROWS*0.16);
    let grid=[],revealed=[],flagged=[],gameOver=false,won=false,firstClick=true,mineCount=MINES,startTime=null;
    const NC=['','#60a5fa','#4ade80','#f87171','#a78bfa','#fb923c','#22d3ee','#facc15','#e2e8f0'];
    function initGrid(sx,sy){
      grid=Array.from({length:ROWS},function(){return Array(COLS).fill(0);});
      revealed=Array.from({length:ROWS},function(){return Array(COLS).fill(false);});
      flagged=Array.from({length:ROWS},function(){return Array(COLS).fill(false);});
      let p=0;
      while(p<MINES){const r=Math.floor(Math.random()*ROWS),c=Math.floor(Math.random()*COLS);if(grid[r][c]===-1)continue;if(Math.abs(r-sy)<=1&&Math.abs(c-sx)<=1)continue;grid[r][c]=-1;p++;}
      for(let r=0;r<ROWS;r++)for(let c=0;c<COLS;c++){if(grid[r][c]===-1)continue;let n=0;for(let dr=-1;dr<=1;dr++)for(let dc=-1;dc<=1;dc++){const nr=r+dr,nc=c+dc;if(nr>=0&&nr<ROWS&&nc>=0&&nc<COLS&&grid[nr][nc]===-1)n++;}grid[r][c]=n;}
    }
    function reveal(r,c){if(r<0||r>=ROWS||c<0||c>=COLS||revealed[r][c]||flagged[r][c])return;revealed[r][c]=true;if(grid[r][c]===0)for(let dr=-1;dr<=1;dr++)for(let dc=-1;dc<=1;dc++)reveal(r+dr,c+dc);}
    function draw(){
      ctx.fillStyle='#0a0a0e';ctx.fillRect(0,0,W,H);
      ctx.fillStyle='rgba(255,255,255,0.2)';ctx.font='11px Geist Mono,monospace';ctx.textAlign='left';
      ctx.fillText('💣 '+mineCount,8,22);
      if(startTime){ctx.textAlign='right';ctx.fillText('⏱ '+Math.floor((Date.now()-startTime)/1000)+'s',W-8,22);}
      for(let r=0;r<ROWS;r++)for(let c=0;c<COLS;c++){
        const x=c*SZ,y=r*SZ+30;
        if(revealed[r][c]){
          ctx.fillStyle='rgba(255,255,255,0.05)';ctx.fillRect(x+1,y+1,SZ-2,SZ-2);
          if(grid[r][c]>0){ctx.fillStyle=NC[grid[r][c]]||'#fff';ctx.font='bold '+(SZ-4)+'px Geist Mono,monospace';ctx.textAlign='center';ctx.fillText(grid[r][c],x+SZ/2,y+SZ-4);}
          else if(grid[r][c]===-1){ctx.fillStyle='#f87171';ctx.fillRect(x+1,y+1,SZ-2,SZ-2);ctx.font=(SZ-4)+'px sans-serif';ctx.textAlign='center';ctx.fillText('💣',x+SZ/2,y+SZ-2);}
        }else{
          ctx.fillStyle='rgba(255,255,255,0.07)';ctx.fillRect(x+1,y+1,SZ-2,SZ-2);
          if(flagged[r][c]){ctx.font=(SZ-4)+'px sans-serif';ctx.textAlign='center';ctx.fillText('🚩',x+SZ/2,y+SZ-2);}
        }
      }
      if(gameOver||won){ctx.fillStyle='rgba(0,0,0,0.7)';ctx.fillRect(0,H/2-28,W,56);ctx.fillStyle=won?'#4ade80':'#f87171';ctx.font='bold 14px Geist,sans-serif';ctx.textAlign='center';ctx.fillText(won?'YOU WIN! — click to restart':'BOOM! — click to restart',W/2,H/2+6);}
    }
    function clickHandler(e){
      if(gameOver||won){gameOver=false;won=false;firstClick=true;mineCount=MINES;startTime=null;gmSetScore(0);draw();return;}
      const rect=cv.getBoundingClientRect();
      const mx=Math.floor((e.clientX-rect.left)/SZ),my=Math.floor((e.clientY-rect.top-30)/SZ);
      if(my<0||my>=ROWS||mx<0||mx>=COLS||flagged[my][mx])return;
      if(firstClick){firstClick=false;initGrid(mx,my);startTime=Date.now();}
      if(grid[my][mx]===-1){revealed[my][mx]=true;gameOver=true;for(let r=0;r<ROWS;r++)for(let c=0;c<COLS;c++)if(grid[r][c]===-1)revealed[r][c]=true;showToast('err','BOOM!','you hit a mine');}
      else{reveal(my,mx);if(revealed.flat().filter(Boolean).length>=COLS*ROWS-MINES){won=true;gmSetScore(gmScore+1000);showToast('ok','you win!','minesweeper cleared');}}
    }
    function ctxHandler(e){
      e.preventDefault();if(gameOver||won||firstClick)return;
      const rect=cv.getBoundingClientRect();
      const mx=Math.floor((e.clientX-rect.left)/SZ),my=Math.floor((e.clientY-rect.top-30)/SZ);
      if(my<0||my>=ROWS||mx<0||mx>=COLS||revealed[my][mx])return;
      flagged[my][mx]=!flagged[my][mx];mineCount+=flagged[my][mx]?-1:1;
    }
    cv.addEventListener('click',clickHandler);cv.addEventListener('contextmenu',ctxHandler);
    function loop(){if(!gmGame)return;draw();gmRAF=requestAnimationFrame(loop);}
    gmGame={destroy:function(){cv.removeEventListener('click',clickHandler);cv.removeEventListener('contextmenu',ctxHandler);}};
    gmStatus('left=reveal  right click=flag');draw();gmRAF=requestAnimationFrame(loop);
  }

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
