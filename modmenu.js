(function () {
  if (document.getElementById('__modmenu__')) {
    document.getElementById('__modmenu__').style.display = 'flex';
    return;
  }

  const style = document.createElement('style');
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Syne:wght@700;800&display=swap');
    #__modmenu__ *, #__modmenu__ *::before, #__modmenu__ *::after { box-sizing: border-box; margin: 0; padding: 0; font-family: 'JetBrains Mono', monospace; }
    #__modmenu__ {
      position: fixed; top: 40px; right: 40px; z-index: 2147483647;
      width: 520px; height: 520px;
      background: #0a0a0f; border: 1px solid #ffffff18; border-radius: 10px;
      display: flex; flex-direction: column; overflow: hidden;
      box-shadow: 0 24px 80px #000000cc, 0 0 0 1px #ffffff08;
      color: #e2e8f0; font-size: 12px; resize: both;
    }
    #__modmenu__ #mm-topbar { display: flex; align-items: center; gap: 8px; padding: 9px 12px; background: #111118; border-bottom: 1px solid #ffffff18; cursor: grab; user-select: none; flex-shrink: 0; }
    #__modmenu__ #mm-topbar:active { cursor: grabbing; }
    #__modmenu__ .mm-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; cursor: pointer; }
    #__modmenu__ .mm-dot-r { background: #ef4444; } #__modmenu__ .mm-dot-y { background: #f59e0b; } #__modmenu__ .mm-dot-g { background: #10b981; }
    #__modmenu__ #mm-title { font-family: 'Syne', sans-serif; font-size: 12px; font-weight: 800; color: #00e5ff; letter-spacing: .1em; flex: 1; text-align: center; }
    #__modmenu__ #mm-ver { font-size: 9px; color: #475569; }
    #__modmenu__ #mm-tabs { display: flex; background: #111118; border-bottom: 1px solid #ffffff18; flex-shrink: 0; overflow-x: auto; }
    #__modmenu__ #mm-tabs::-webkit-scrollbar { display: none; }
    #__modmenu__ .mm-tab { padding: 7px 12px; font-size: 10px; cursor: pointer; color: #64748b; border-bottom: 2px solid transparent; white-space: nowrap; transition: color .1s, background .1s; user-select: none; }
    #__modmenu__ .mm-tab:hover { color: #e2e8f0; background: #1a1a24; }
    #__modmenu__ .mm-tab.mm-active { color: #00e5ff; border-bottom-color: #00e5ff; background: #1a1a24; }
    #__modmenu__ .mm-tab.mm-blooket { color: #7c3aed; }
    #__modmenu__ .mm-tab.mm-blooket.mm-active { color: #a78bfa; border-bottom-color: #a78bfa; }
    #__modmenu__ #mm-panels { flex: 1; overflow: hidden; }
    #__modmenu__ .mm-panel { display: none; flex-direction: column; height: 100%; overflow: hidden; }
    #__modmenu__ .mm-panel.mm-active { display: flex; }
    #__modmenu__ ::-webkit-scrollbar { width: 3px; } #__modmenu__ ::-webkit-scrollbar-thumb { background: #222230; border-radius: 2px; }
    #__modmenu__ #mm-cout { flex: 1; overflow-y: auto; padding: 8px 10px; font-size: 11px; line-height: 1.7; }
    #__modmenu__ .mm-log { display: flex; gap: 8px; padding: 1px 0; }
    #__modmenu__ .mm-ts { color: #475569; font-size: 9px; min-width: 48px; padding-top: 2px; }
    #__modmenu__ .mm-li { color: #10b981; } #__modmenu__ .mm-lw { color: #f59e0b; } #__modmenu__ .mm-le { color: #ef4444; }
    #__modmenu__ #mm-cinwrap { display: flex; align-items: center; gap: 6px; padding: 7px 10px; border-top: 1px solid #ffffff18; background: #111118; flex-shrink: 0; }
    #__modmenu__ #mm-cprompt { color: #00e5ff; font-weight: 600; font-size: 13px; }
    #__modmenu__ #mm-cinput { flex: 1; background: transparent; border: none; outline: none; color: #e2e8f0; font-family: 'JetBrains Mono', monospace; font-size: 11px; }
    #__modmenu__ #mm-runbtn { background: #00e5ff; color: #0a0a0f; padding: 3px 10px; border-radius: 4px; border: none; font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 600; cursor: pointer; }
    #__modmenu__ .mm-isubs { display: flex; border-bottom: 1px solid #ffffff18; flex-shrink: 0; }
    #__modmenu__ .mm-isub { padding: 5px 10px; font-size: 10px; cursor: pointer; color: #64748b; border-bottom: 2px solid transparent; user-select: none; }
    #__modmenu__ .mm-isub.mm-active { color: #7c3aed; border-bottom-color: #7c3aed; }
    #__modmenu__ #mm-icontent { flex: 1; overflow-y: auto; padding: 8px 10px; font-size: 10.5px; line-height: 1.9; }
    #__modmenu__ .mm-prow { display: flex; gap: 8px; border-bottom: 1px solid #ffffff06; }
    #__modmenu__ .mm-pk { color: #a78bfa; min-width: 140px; font-size: 10px; } #__modmenu__ .mm-pv { color: #e2e8f0; font-size: 10px; word-break: break-all; }
    #__modmenu__ .mm-pv.n { color: #f59e0b; } #__modmenu__ .mm-pv.b { color: #00e5ff; }
    #__modmenu__ #mm-csearch { width: calc(100% - 16px); margin: 8px; background: #1a1a24; border: 1px solid #ffffff18; border-radius: 5px; padding: 6px 9px; color: #e2e8f0; font-family: 'JetBrains Mono', monospace; font-size: 10.5px; outline: none; }
    #__modmenu__ #mm-csearch:focus { border-color: #00e5ff; }
    #__modmenu__ #mm-clist { flex: 1; overflow-y: auto; padding: 0 8px 8px; }
    #__modmenu__ .mm-cmd { background: #1a1a24; border: 1px solid #ffffff18; border-radius: 6px; padding: 7px 9px; margin-bottom: 5px; cursor: pointer; transition: border-color .1s; }
    #__modmenu__ .mm-cmd:hover { border-color: #00e5ff; background: #222230; }
    #__modmenu__ .mm-cname { font-size: 11px; font-weight: 600; color: #00e5ff; } #__modmenu__ .mm-cdesc { font-size: 9.5px; color: #64748b; margin-top: 2px; }
    #__modmenu__ .mm-ctag { font-size: 9px; padding: 1px 6px; border-radius: 3px; display: inline-block; margin-top: 4px; }
    #__modmenu__ .t-dom{background:#00e5ff15;color:#00e5ff} #__modmenu__ .t-nav{background:#7c3aed15;color:#a78bfa} #__modmenu__ .t-net{background:#10b98115;color:#10b981} #__modmenu__ .t-storage{background:#f59e0b15;color:#f59e0b} #__modmenu__ .t-page{background:#ef444415;color:#fca5a5}
    #__modmenu__ .mm-stabs { display: flex; border-bottom: 1px solid #ffffff18; flex-shrink: 0; }
    #__modmenu__ .mm-stab { padding: 5px 10px; font-size: 10px; cursor: pointer; color: #64748b; border-bottom: 2px solid transparent; user-select: none; }
    #__modmenu__ .mm-stab.mm-active { color: #f59e0b; border-bottom-color: #f59e0b; }
    #__modmenu__ #mm-scontent { flex: 1; overflow-y: auto; padding: 6px 8px; font-size: 10px; }
    #__modmenu__ .mm-srow { display: flex; gap: 6px; padding: 3px 4px; border-bottom: 1px solid #ffffff06; align-items: flex-start; }
    #__modmenu__ .mm-sk { color: #f59e0b; min-width: 100px; word-break: break-all; font-size: 9.5px; } #__modmenu__ .mm-sv { color: #e2e8f0; word-break: break-all; flex: 1; font-size: 9.5px; } #__modmenu__ .mm-sdel { color: #ef4444; cursor: pointer; padding: 0 3px; flex-shrink: 0; }
    #__modmenu__ #mm-sadd { display: flex; gap: 5px; padding: 6px 8px; border-top: 1px solid #ffffff18; background: #111118; flex-shrink: 0; }
    #__modmenu__ #mm-sadd input { flex: 1; background: #1a1a24; border: 1px solid #ffffff18; border-radius: 4px; padding: 4px 7px; color: #e2e8f0; font-family: 'JetBrains Mono', monospace; font-size: 10px; outline: none; }
    #__modmenu__ .mm-sbtn { background: #f59e0b; color: #0a0a0f; border: none; border-radius: 4px; padding: 4px 9px; font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 600; cursor: pointer; }
    #__modmenu__ #mm-picontent { flex: 1; overflow-y: auto; padding: 8px 10px; }
    #__modmenu__ .mm-pisec { margin-bottom: 10px; } #__modmenu__ .mm-pititle { font-size: 9px; color: #64748b; text-transform: uppercase; letter-spacing: .08em; margin-bottom: 4px; }
    #__modmenu__ .mm-pirow { display: flex; gap: 8px; border-bottom: 1px solid #ffffff06; } #__modmenu__ .mm-pik { color: #a78bfa; min-width: 110px; font-size: 10px; } #__modmenu__ .mm-piv { color: #e2e8f0; font-size: 10px; word-break: break-all; }
    #__modmenu__ #mm-blooket-content { flex: 1; overflow-y: auto; padding: 8px; }
    #__modmenu__ .bl-section { margin-bottom: 10px; }
    #__modmenu__ .bl-title { font-size: 9px; color: #7c3aed; text-transform: uppercase; letter-spacing: .1em; margin-bottom: 5px; padding: 0 2px; }
    #__modmenu__ .bl-btn { display: flex; align-items: center; gap: 8px; background: #12101f; border: 1px solid #7c3aed30; border-radius: 6px; padding: 8px 10px; margin-bottom: 5px; cursor: pointer; transition: all .1s; width: 100%; text-align: left; }
    #__modmenu__ .bl-btn:hover { border-color: #a78bfa; background: #1a1428; }
    #__modmenu__ .bl-icon { font-size: 14px; width: 20px; text-align: center; flex-shrink: 0; }
    #__modmenu__ .bl-info { flex: 1; }
    #__modmenu__ .bl-name { font-size: 11px; font-weight: 600; color: #a78bfa; } #__modmenu__ .bl-desc { font-size: 9.5px; color: #64748b; margin-top: 1px; }
    #__modmenu__ .bl-badge { font-size: 9px; padding: 2px 6px; border-radius: 3px; background: #7c3aed20; color: #a78bfa; flex-shrink: 0; }
    #__modmenu__ .bl-badge.danger { background: #ef444420; color: #fca5a5; } #__modmenu__ .bl-badge.safe { background: #10b98120; color: #10b981; }
    #__modmenu__ .bl-input-row { display: flex; gap: 6px; margin-bottom: 5px; }
    #__modmenu__ .bl-input { flex: 1; background: #12101f; border: 1px solid #7c3aed30; border-radius: 5px; padding: 6px 9px; color: #e2e8f0; font-family: 'JetBrains Mono', monospace; font-size: 10.5px; outline: none; }
    #__modmenu__ .bl-input:focus { border-color: #a78bfa; }
    #__modmenu__ .bl-go { background: #7c3aed; color: #fff; border: none; border-radius: 5px; padding: 6px 12px; font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 600; cursor: pointer; white-space: nowrap; }
    #__modmenu__ #bl-status { font-size: 10px; padding: 6px 8px; border-radius: 5px; margin-bottom: 6px; display: none; }
    #__modmenu__ #bl-status.ok { background: #10b98115; color: #10b981; border: 1px solid #10b98130; display: block; }
    #__modmenu__ #bl-status.err { background: #ef444415; color: #fca5a5; border: 1px solid #ef444430; display: block; }
    #__modmenu__ #bl-status.warn { background: #f59e0b15; color: #f59e0b; border: 1px solid #f59e0b30; display: block; }
    #__modmenu__.mm-min { height: 34px !important; overflow: hidden; resize: none; }
  `;
  document.head.appendChild(style);

  const el = document.createElement('div');
  el.id = '__modmenu__';
  el.innerHTML = `
    <div id="mm-topbar">
      <div class="mm-dot mm-dot-r"></div><div class="mm-dot mm-dot-y"></div><div class="mm-dot mm-dot-g"></div>
      <div id="mm-title">// MOD MENU //</div>
      <div id="mm-ver">v2.0</div>
    </div>
    <div id="mm-tabs">
      <div class="mm-tab mm-active" data-tab="console">console</div>
      <div class="mm-tab" data-tab="inspect">inspect</div>
      <div class="mm-tab" data-tab="commands">commands</div>
      <div class="mm-tab" data-tab="storage">storage</div>
      <div class="mm-tab" data-tab="pageinfo">page info</div>
      <div class="mm-tab mm-blooket" data-tab="blooket">★ blooket</div>
    </div>
    <div id="mm-panels">
      <div class="mm-panel mm-active" id="mm-panel-console">
        <div id="mm-cout"></div>
        <div id="mm-cinwrap"><span id="mm-cprompt">&gt;</span><input id="mm-cinput" type="text" placeholder="js expression..." autocomplete="off" spellcheck="false" /><button id="mm-runbtn">run</button></div>
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
        <div id="mm-sadd"><input id="mm-skey" type="text" placeholder="key" /><input id="mm-sval" type="text" placeholder="value" /><button class="mm-sbtn" id="mm-saddbtn">set</button></div>
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
    </div>
  `;
  document.body.appendChild(el);

  const $m = id => document.getElementById(id);

  // drag
  let dragging=false,dx=0,dy=0;
  $m('mm-topbar').addEventListener('mousedown',e=>{if(e.target.classList.contains('mm-dot'))return;dragging=true;dx=e.clientX-el.offsetLeft;dy=e.clientY-el.offsetTop;});
  document.addEventListener('mousemove',e=>{if(!dragging)return;el.style.left=(e.clientX-dx)+'px';el.style.top=(e.clientY-dy)+'px';el.style.right='auto';});
  document.addEventListener('mouseup',()=>dragging=false);
  document.querySelector('#__modmenu__ .mm-dot-r').addEventListener('click',()=>el.style.display='none');
  document.querySelector('#__modmenu__ .mm-dot-y').addEventListener('click',()=>el.classList.toggle('mm-min'));
  document.querySelector('#__modmenu__ .mm-dot-g').addEventListener('click',()=>renderInspect(curIsub));

  // tabs
  document.querySelectorAll('#__modmenu__ .mm-tab').forEach(t=>{
    t.addEventListener('click',()=>{
      document.querySelectorAll('#__modmenu__ .mm-tab').forEach(x=>x.classList.remove('mm-active'));
      document.querySelectorAll('#__modmenu__ .mm-panel').forEach(x=>x.classList.remove('mm-active'));
      t.classList.add('mm-active');$m('mm-panel-'+t.dataset.tab).classList.add('mm-active');
    });
  });

  // console
  const cout=$m('mm-cout'),history=[]; let histIdx=-1;
  function ts(){const n=new Date();return[n.getHours(),n.getMinutes(),n.getSeconds()].map(x=>String(x).padStart(2,'0')).join(':');}
  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
  function fmt(v){
    if(v===null)return'<span style="color:#475569">null</span>';
    if(v===undefined)return'<span style="color:#475569">undefined</span>';
    if(typeof v==='string')return`<span style="color:#10b981">"${esc(v.slice(0,200))}"</span>`;
    if(typeof v==='number')return`<span style="color:#f59e0b">${v}</span>`;
    if(typeof v==='boolean')return`<span style="color:#00e5ff">${v}</span>`;
    if(typeof v==='function')return`<span style="color:#a78bfa">f ${esc(v.name||'anon')}()</span>`;
    if(Array.isArray(v))return`<span style="color:#475569">[Array(${v.length})]</span>`;
    if(typeof v==='object'){try{return`<span style="color:#475569">${esc(JSON.stringify(v).slice(0,120))}</span>`;}catch{return'<span style="color:#475569">[Object]</span>';}}
    return esc(String(v));
  }
  function log(msg,type='x'){
    const icon=type==='i'?'i':type==='w'?'!':type==='e'?'x':'>';
    const row=document.createElement('div');row.className='mm-log';
    row.innerHTML=`<span class="mm-ts">${ts()}</span><span class="mm-l${type}">${icon}</span><span style="flex:1;word-break:break-all">${esc(String(msg))}</span>`;
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
    row.innerHTML=`<span class="mm-ts">${ts()}</span><span style="color:#00e5ff">></span><span style="flex:1;word-break:break-all;color:#e2e8f0">${esc(code)}</span>`;
    cout.appendChild(row);
    try{const r=(0,eval)(code);const r2=document.createElement('div');r2.className='mm-log';r2.innerHTML=`<span class="mm-ts"></span><span style="color:#475569"><</span><span style="flex:1">${fmt(r)}</span>`;cout.appendChild(r2);}
    catch(e){log(e.message,'e');}
    cout.scrollTop=cout.scrollHeight;
  }
  $m('mm-runbtn').addEventListener('click',()=>{const v=$m('mm-cinput').value;if(!v.trim())return;history.unshift(v);histIdx=-1;runCode(v);$m('mm-cinput').value='';});
  $m('mm-cinput').addEventListener('keydown',e=>{
    if(e.key==='Enter')$m('mm-runbtn').click();
    if(e.key==='ArrowUp'){e.preventDefault();histIdx=Math.min(histIdx+1,history.length-1);$m('mm-cinput').value=history[histIdx]||'';}
    if(e.key==='ArrowDown'){e.preventDefault();histIdx=Math.max(histIdx-1,-1);$m('mm-cinput').value=histIdx<0?'':history[histIdx];}
  });
  log('Mod Menu v2.0 on: '+location.hostname,'i');
  log('Go to blooket.com and click the Blooket tab','i');

  // inspect
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

  // commands
  const commands=[
    {name:'scroll to top',desc:'Smooth scroll to top',tag:'dom',code:`window.scrollTo({top:0,behavior:'smooth'})`},
    {name:'scroll to bottom',desc:'Smooth scroll to bottom',tag:'dom',code:`window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'})`},
    {name:'highlight all links',desc:'Outline every anchor in cyan',tag:'dom',code:`document.querySelectorAll('a').forEach(a=>a.style.outline='2px solid #00e5ff')`},
    {name:'remove all images',desc:'Remove every img element',tag:'dom',code:`document.querySelectorAll('img').forEach(i=>i.remove())`},
    {name:'make page editable',desc:'Turn page into live editor',tag:'dom',code:`document.body.contentEditable='true'`},
    {name:'count all elements',desc:'Alert total DOM element count',tag:'dom',code:`alert('Total: '+document.querySelectorAll('*').length)`},
    {name:'copy page URL',desc:'Copy current URL to clipboard',tag:'nav',code:`navigator.clipboard.writeText(location.href).then(()=>alert('Copied!'))`},
    {name:'open blank tab',desc:'Open about:blank',tag:'nav',code:`window.open('about:blank','_blank')`},
    {name:'hard reload',desc:'Force reload ignoring cache',tag:'nav',code:`location.reload(true)`},
    {name:'log fetch calls',desc:'Patch fetch to log all requests',tag:'net',code:`const _f=window.fetch;window.fetch=(...a)=>{console.log('[fetch]',a[0]);return _f(...a)};alert('fetch patched')`},
    {name:'clear localStorage',desc:'Wipe all localStorage keys',tag:'storage',code:`localStorage.clear();alert('cleared')`},
    {name:'clear sessionStorage',desc:'Wipe all sessionStorage keys',tag:'storage',code:`sessionStorage.clear();alert('cleared')`},
    {name:'dark mode toggle',desc:'Invert page colors',tag:'page',code:`document.body.style.filter=document.body.style.filter?'':'invert(1) hue-rotate(180deg)'`},
    {name:'zoom 150%',desc:'Scale page to 150%',tag:'page',code:`document.body.style.zoom='1.5'`},
    {name:'zoom reset',desc:'Reset zoom to 100%',tag:'page',code:`document.body.style.zoom='1'`},
    {name:'rainbow mode',desc:'Cycle hue-rotate animation',tag:'page',code:`let h=0;setInterval(()=>{document.body.style.filter='hue-rotate('+h+'deg)';h+=2},30)`},
    {name:'disable all CSS',desc:'Remove all stylesheets',tag:'page',code:`document.querySelectorAll('link[rel="stylesheet"],style').forEach(s=>s.remove())`},
  ];
  const tagCls={dom:'t-dom',nav:'t-nav',net:'t-net',storage:'t-storage',page:'t-page'};
  function renderCommands(filter=''){
    const list=$m('mm-clist');list.innerHTML='';
    commands.filter(c=>(c.name+c.desc+c.tag).toLowerCase().includes(filter.toLowerCase())).forEach(c=>{
      const el2=document.createElement('div');el2.className='mm-cmd';
      el2.innerHTML=`<div class="mm-cname">${c.name}</div><div class="mm-cdesc">${c.desc}</div><span class="mm-ctag ${tagCls[c.tag]}">#${c.tag}</span>`;
      el2.addEventListener('click',()=>{goConsole();runCode(c.code);});
      list.appendChild(el2);
    });
  }
  renderCommands();
  $m('mm-csearch').addEventListener('input',e=>renderCommands(e.target.value));

  // storage
  let curStab='local';
  function renderStorage(tab){
    const c=$m('mm-scontent');c.innerHTML='';
    if(tab==='local'||tab==='session'){
      const store=tab==='local'?localStorage:sessionStorage;
      if(!store.length){c.innerHTML='<div style="color:#475569;padding:10px;font-size:10px">(empty)</div>';return;}
      for(let i=0;i<store.length;i++){
        const k=store.key(i),v=store.getItem(k);
        const row=document.createElement('div');row.className='mm-srow';
        row.innerHTML=`<span class="mm-sk">${esc(k)}</span><span class="mm-sv">${esc(v)}</span><span class="mm-sdel" data-k="${esc(k)}" data-st="${tab}">x</span>`;
        c.appendChild(row);
      }
    } else {
      const cookies=document.cookie.split(';').map(x=>x.trim()).filter(Boolean);
      if(!cookies.length){c.innerHTML='<div style="color:#475569;padding:10px;font-size:10px">(no cookies)</div>';return;}
      cookies.forEach(cookie=>{const[k,...rest]=cookie.split('=');const row=document.createElement('div');row.className='mm-srow';row.innerHTML=`<span class="mm-sk">${esc(k)}</span><span class="mm-sv">${esc(rest.join('='))}</span>`;c.appendChild(row);});
    }
    c.querySelectorAll('.mm-sdel').forEach(btn=>{btn.addEventListener('click',()=>{if(btn.dataset.st==='local')localStorage.removeItem(btn.dataset.k);else sessionStorage.removeItem(btn.dataset.k);renderStorage(curStab);});});
  }
  document.querySelectorAll('#__modmenu__ .mm-stab').forEach(btn=>{btn.addEventListener('click',()=>{document.querySelectorAll('#__modmenu__ .mm-stab').forEach(x=>x.classList.remove('mm-active'));btn.classList.add('mm-active');curStab=btn.dataset.stab;renderStorage(curStab);});});
  renderStorage('local');
  $m('mm-saddbtn').addEventListener('click',()=>{const k=$m('mm-skey').value.trim(),v=$m('mm-sval').value.trim();if(!k)return;if(curStab==='local')localStorage.setItem(k,v);else if(curStab==='session')sessionStorage.setItem(k,v);$m('mm-skey').value='';$m('mm-sval').value='';renderStorage(curStab);});

  // page info
  function renderPageInfo(){
    const c=$m('mm-picontent');c.innerHTML='';
    const perf=performance.timing||{};
    const load=perf.loadEventEnd&&perf.navigationStart?perf.loadEventEnd-perf.navigationStart:0;
    const sections=[
      {title:'location',rows:[['href',location.href],['origin',location.origin],['pathname',location.pathname],['search',location.search||'(none)'],['hash',location.hash||'(none)'],['protocol',location.protocol]]},
      {title:'document',rows:[['title',document.title],['domain',document.domain||'(none)'],['charset',document.characterSet],['readyState',document.readyState],['elements',document.querySelectorAll('*').length],['scripts',document.scripts.length],['images',document.images.length]]},
      {title:'performance',rows:[['load time',load?load+'ms':'N/A'],['memory',performance.memory?Math.round(performance.memory.usedJSHeapSize/1048576)+'MB':'N/A'],['resources',performance.getEntriesByType?performance.getEntriesByType('resource').length:'N/A']]},
      {title:'viewport',rows:[['innerSize',innerWidth+' x '+innerHeight],['devicePixelRatio',devicePixelRatio],['screen',screen.width+' x '+screen.height]]},
    ];
    sections.forEach(sec=>{
      const wrap=document.createElement('div');wrap.className='mm-pisec';
      const hd=document.createElement('div');hd.className='mm-pititle';hd.textContent=sec.title;wrap.appendChild(hd);
      sec.rows.forEach(([k,v])=>{const row=document.createElement('div');row.className='mm-pirow';row.innerHTML=`<span class="mm-pik">${k}</span><span class="mm-piv">${esc(String(v))}</span>`;wrap.appendChild(row);});
      c.appendChild(wrap);
    });
  }
  renderPageInfo();

  // ── BLOOKET ──
  function blStatus(msg,type='ok'){
    const s=$m('bl-status');s.textContent=msg;s.className=type;s.style.display='block';
    setTimeout(()=>s.style.display='none',3500);
  }

  $m('bl-add-coins').addEventListener('click',()=>{
    const amt=parseInt($m('bl-coin-amt').value)||500;
    let patched=false;
    try {
      ['coins','tokens','gold','bucks','currency','balance','points'].forEach(key=>{
        const ex=localStorage.getItem(key);
        if(ex!==null&&!isNaN(ex)){localStorage.setItem(key,parseInt(ex)+amt);patched=true;}
      });
      // patch React numeric state
      document.querySelectorAll('*').forEach(node=>{
        const k=Object.keys(node).find(x=>x.startsWith('__reactFiber'));
        if(!k)return;let fiber=node[k];
        for(let i=0;i<25&&fiber;i++){
          if(fiber.memoizedState){let s=fiber.memoizedState;while(s){if(s.queue&&typeof s.memoizedState==='number'&&s.memoizedState>=0&&s.memoizedState<100000){s.memoizedState+=amt;patched=true;}s=s.next;}}
          fiber=fiber.return;
        }
      });
      blStatus((patched?'Added '+amt+' tokens! ':'Injected — ')+'Refresh if no visible change.', patched?'ok':'warn');
      log('[Blooket] +'+amt+' tokens attempted','i');
    } catch(e){blStatus('Error: '+e.message,'err');}
  });

  $m('bl-max-coins').addEventListener('click',()=>{
    ['coins','tokens','gold','bucks','currency','balance','points'].forEach(k=>{if(localStorage.getItem(k)!==null)localStorage.setItem(k,99999);});
    blStatus('Token keys set to 99,999 — refresh to apply','ok');
    log('[Blooket] max tokens set','i');
  });

  let autoAnswerOn=false,autoAnswerInterval=null;
  $m('bl-auto-answer').addEventListener('click',()=>{
    autoAnswerOn=!autoAnswerOn;
    $m('bl-aa-badge').textContent=autoAnswerOn?'ON':'toggle';
    if(autoAnswerOn){
      autoAnswerInterval=setInterval(()=>{
        try{
          document.querySelectorAll('[class*="answer"],[class*="Answer"],[class*="correct"],[class*="choice"],[class*="option"]').forEach(a=>{
            if(a.dataset.correct==='true'||a.getAttribute('iscorrect')==='true'||a.className.toLowerCase().includes('correct'))a.click();
          });
        }catch(e){}
      },800);
      blStatus('Auto answer ON','ok');log('[Blooket] auto answer ON','i');
    } else {
      clearInterval(autoAnswerInterval);blStatus('Auto answer OFF','warn');log('[Blooket] auto answer OFF','w');
    }
  });

  $m('bl-instant-answer').addEventListener('click',()=>{
    let clicked=false;
    document.querySelectorAll('[class*="answer"],[class*="Answer"],[class*="choice"],[class*="option"]').forEach(a=>{
      if(!clicked&&(a.dataset.correct==='true'||a.getAttribute('iscorrect')==='true'||a.className.toLowerCase().includes('correct'))){a.click();clicked=true;}
    });
    if(!clicked){const first=document.querySelector('[class*="answer"],[class*="Answer"],[class*="choice"]');if(first){first.click();clicked=true;}}
    blStatus(clicked?'Answered!':'No question found — join a game first',clicked?'ok':'warn');
  });

  let speedOn=false;
  $m('bl-speed').addEventListener('click',()=>{
    speedOn=!speedOn;$m('bl-sp-badge').textContent=speedOn?'ON':'toggle';
    try{
      if(speedOn){
        window.__origDateNow=Date.now;let offset=0;
        window.__speedIv=setInterval(()=>{offset+=500;},100);
        Date.now=()=>window.__origDateNow()+offset;
        blStatus('Speed hack ON — 5x timers','ok');log('[Blooket] speed ON','i');
      } else {
        if(window.__origDateNow)Date.now=window.__origDateNow;
        clearInterval(window.__speedIv);blStatus('Speed hack OFF','warn');log('[Blooket] speed OFF','w');
      }
    }catch(e){blStatus('Error: '+e.message,'err');}
  });

  $m('bl-unlock-blooks').addEventListener('click',()=>{
    let found=false;
    document.querySelectorAll('*').forEach(node=>{
      const k=Object.keys(node).find(x=>x.startsWith('__reactFiber'));
      if(!k)return;let fiber=node[k];
      for(let i=0;i<20&&fiber;i++){
        if(fiber.memoizedProps&&(fiber.memoizedProps.blooks||fiber.memoizedProps.unlockedBlooks)){
          log('[Blooket] blook props: '+JSON.stringify(Object.keys(fiber.memoizedProps.blooks||{})).slice(0,100),'i');
          found=true;
        }
        fiber=fiber.return;
      }
    });
    blStatus(found?'Blook data found — see console':'Open the Blooks page first, then try again',found?'ok':'warn');
    if(found)goConsole();
  });

  let boxInterval=null;
  $m('bl-open-box').addEventListener('click',()=>{
    if(boxInterval){clearInterval(boxInterval);boxInterval=null;$m('bl-box-badge').textContent='boxes';blStatus('Box opener stopped','warn');return;}
    $m('bl-box-badge').textContent='STOP';
    boxInterval=setInterval(()=>{
      const btn=document.querySelector('[class*="open"],[class*="Open"],[class*="box"],[class*="Box"],[class*="pack"],[class*="Pack"]');
      if(btn)btn.click();
    },300);
    blStatus('Auto opening boxes — click again to stop','ok');
  });

  $m('bl-get-answers').addEventListener('click',()=>{
    let found=false;
    document.querySelectorAll('*').forEach(node=>{
      const k=Object.keys(node).find(x=>x.startsWith('__reactFiber'));
      if(!k)return;let fiber=node[k];
      for(let i=0;i<15&&fiber;i++){
        const p=fiber.memoizedProps;
        if(p&&(p.question||p.correctAnswer||p.answers)){
          if(p.question)log('[Q] '+p.question,'i');
          if(p.correctAnswer)log('[A] '+p.correctAnswer,'i');
          if(p.answers)log('[answers] '+JSON.stringify(p.answers).slice(0,120),'i');
          found=true;
        }
        fiber=fiber.return;
      }
    });
    goConsole();
    if(!found)log('[Blooket] No Q&A found — join a game first','w');
  });

  let ghostOn=false;
  $m('bl-ghost').addEventListener('click',()=>{
    ghostOn=!ghostOn;$m('bl-gh-badge').textContent=ghostOn?'ON':'stealth';
    document.querySelectorAll('[class*="name"],[class*="Name"],[class*="username"],[class*="player"]').forEach(el2=>{
      if(ghostOn){el2.dataset.origText=el2.textContent;el2.textContent='???';}
      else if(el2.dataset.origText)el2.textContent=el2.dataset.origText;
    });
    blStatus(ghostOn?'Ghost mode ON — name hidden':'Ghost mode OFF',ghostOn?'ok':'warn');
  });

})();
