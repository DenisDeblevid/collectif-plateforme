/* ===== Décor de Noël NORIA — s'arrête seul après le 6 janvier ===== */
(function(){
  var d = new Date(), m = d.getMonth(), j = d.getDate();
  var actif = (m === 10 && j >= 20) || m === 11 || (m === 0 && j <= 6);   // du 20 novembre au 6 janvier
  if(!actif) return;
  var reduit = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var mobile = window.matchMedia && window.matchMedia('(max-width:700px)').matches;

  /* Guirlande sous le menu */
  var nav = document.querySelector('nav');
  if(nav){
    var g = document.createElement('div'); g.className = 'noel-guirlande'; g.setAttribute('aria-hidden','true');
    var n = mobile ? 14 : 30; for(var i = 0; i < n; i++) g.appendChild(document.createElement('i'));
    nav.appendChild(g);
  }

  /* Petite scène en bas à gauche : sapin, lanterne, panneau */
  var scene = document.createElement('div'); scene.className = 'noel-scene'; scene.setAttribute('aria-hidden','true');
  scene.innerHTML =
    '<svg viewBox="0 0 150 130" xmlns="http://www.w3.org/2000/svg">' +
      '<ellipse cx="75" cy="124" rx="72" ry="6" fill="#FFFFFF" opacity=".85"/>' +
      /* sapin */
      '<polygon points="42,10 18,52 30,52 10,86 26,86 4,118 80,118 58,86 74,86 54,52 66,52" fill="#234B5E"/>' +
      '<rect x="37" y="118" width="10" height="7" fill="#7A4A30"/>' +
      '<polygon points="42,2 44.5,8 51,8 46,12 48,18 42,14 36,18 38,12 33,8 39.5,8" fill="#E8C27A"/>' +
      '<circle cx="34" cy="48" r="2.4" fill="#B86F4C"/><circle cx="52" cy="66" r="2.4" fill="#E8C27A"/><circle cx="26" cy="80" r="2.4" fill="#E8C27A"/><circle cx="56" cy="98" r="2.4" fill="#B86F4C"/><circle cx="20" cy="108" r="2.4" fill="#E8C27A"/>' +
      /* lanterne */
      '<g transform="translate(92,84)"><path d="M6 0 h12 l-2 4 h-8 z" fill="#B86F4C"/><rect x="4" y="4" width="16" height="26" rx="2" fill="none" stroke="#B86F4C" stroke-width="2"/><ellipse class="noel-lanterne-flamme" cx="12" cy="18" rx="4" ry="7" fill="#F3C978"/><circle class="noel-lanterne-flamme" cx="12" cy="18" r="11" fill="#F3C978" opacity=".25"/><rect x="2" y="30" width="20" height="4" rx="1" fill="#B86F4C"/></g>' +
      /* panneau */
      '<g transform="translate(116,74)"><rect x="12" y="10" width="3" height="42" fill="#7A4A30"/><rect x="0" y="8" width="32" height="18" rx="2" fill="#F4EFE6" stroke="#B86F4C" stroke-width="1.5" transform="rotate(-6 16 17)"/><text x="16" y="15" font-family="Georgia,serif" font-size="5.6" fill="#234B5E" text-anchor="middle" transform="rotate(-6 16 17)">Joyeuses</text><text x="16" y="22" font-family="Georgia,serif" font-size="5.6" fill="#B86F4C" text-anchor="middle" transform="rotate(-6 16 17)">fêtes</text></g>' +
    '</svg>';
  document.body.appendChild(scene);

  if(reduit) return;

  /* Neige légère */
  var c = document.createElement('canvas'); c.className = 'noel-neige'; c.setAttribute('aria-hidden','true');
  document.body.appendChild(c);
  var ctx = c.getContext('2d'), W = 0, H = 0, flocons = [];
  function taille(){ W = c.width = window.innerWidth; H = c.height = window.innerHeight; }
  taille(); window.addEventListener('resize', taille);
  var total = mobile ? 28 : 60;
  for(var k = 0; k < total; k++) flocons.push({ x:Math.random()*W, y:Math.random()*H, r:0.8+Math.random()*2.2, v:0.25+Math.random()*0.7, o:0.35+Math.random()*0.5, p:Math.random()*6.28 });
  function neige(){
    ctx.clearRect(0,0,W,H);
    for(var i = 0; i < flocons.length; i++){
      var f = flocons[i];
      f.y += f.v; f.p += 0.01; f.x += Math.sin(f.p) * 0.35;
      if(f.y > H + 5){ f.y = -5; f.x = Math.random()*W; }
      ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, 6.2832);
      ctx.fillStyle = (i % 2) ? 'rgba(255,255,255,' + f.o + ')' : 'rgba(150,176,192,' + f.o + ')';
      ctx.shadowColor = 'rgba(35,75,94,.45)'; ctx.shadowBlur = 3;
      ctx.fill();
    }
    requestAnimationFrame(neige);
  }
  requestAnimationFrame(neige);

  /* Père Noël et son traîneau : un passage par minute */
  var t = document.createElement('div'); t.className = 'noel-traineau'; t.setAttribute('aria-hidden','true');
  var renne = function(x){ return '<g transform="translate(' + x + ',6)">' +
      '<path d="M6 22 q4 -8 16 -7 q8 0 12 -6 l3 1 q-2 6 -6 9 q2 6 -2 10 l-1 9 h-2 l0 -8 q-6 1 -12 0 l-3 8 h-2 l1 -9 q-5 -2 -4 -7z"/>' +
      '<path d="M33 8 l-3 -7 m3 7 l2 -6 m-2 6 l6 -3" stroke="#E8C27A" stroke-width="1.4" fill="none"/></g>'; };
  t.innerHTML =
    '<svg viewBox="0 0 260 60" xmlns="http://www.w3.org/2000/svg" fill="#E8C27A">' +
      renne(130) + renne(178) +
      '<path d="M126 34 L208 26" stroke="#E8C27A" stroke-width="1" fill="none" opacity=".8"/>' +
      /* traîneau */
      '<path d="M40 30 h62 q10 0 14 -10 l4 2 q-4 18 -20 18 h-56 q-8 0 -10 -6 z"/>' +
      '<path d="M30 46 h86 q8 0 10 -6" stroke="#E8C27A" stroke-width="2.2" fill="none"/>' +
      '<path d="M52 40 v6 M96 40 v6" stroke="#E8C27A" stroke-width="2"/>' +
      /* Père Noël */
      '<circle cx="72" cy="12" r="6"/><path d="M66 10 q6 -12 14 -4 l4 -1 l-2 4 z"/><path d="M62 30 q0 -14 10 -14 q10 0 10 14 z"/>' +
      '<path d="M50 30 q2 -10 10 -8 q4 2 2 8 z" opacity=".85"/>' +
    '</svg>';
  document.body.appendChild(t);
  function passer(){ t.classList.remove('passe'); void t.offsetWidth; t.classList.add('passe'); }
  setTimeout(passer, 8000);
  setInterval(passer, 60000);
})();
