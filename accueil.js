/* ===== Nouvel accueil NORIA (25 nov. 2026) — fenêtres Continuum, Prisme, Experts ===== */
(function(){
  function porte(name){ return document.getElementById('porte-' + name); }
  function anyOpen(){ return !!document.querySelector('.porte-overlay.open'); }

  var CT = '/continuum-parcours/';
  window.openContinuum = function(page){ if(typeof openAgir === 'function') openAgir(CT + (page || 'continuum.html')); };
  window.openPorte = function(name, cibleId){
    if(name === 'continuum'){ openContinuum(); return; }
    var ov = porte(name); if(!ov) return;
    document.querySelectorAll('.porte-overlay.open').forEach(function(o){ if(o !== ov) o.classList.remove('open'); });
    ov.classList.add('open'); document.body.style.overflow = 'hidden';
    var sc = ov.querySelector('.porte-scroll');
    setTimeout(function(){
      if(cibleId){ porteScroll(name, cibleId); }
      else if(sc){ sc.scrollTop = 0; }
    }, cibleId ? 450 : 0);
  };
  window.closePorte = function(){
    var open = document.querySelectorAll('.porte-overlay.open');
    if(!open.length) return;
    open.forEach(function(o){ o.classList.remove('open'); });
    var autres = document.querySelector('.modal-overlay.open, .service-overlay.open, .devis-overlay.open, .map-overlay.open, .intra-overlay.open:not(.porte-overlay)');
    if(!autres) document.body.style.overflow = '';
  };
  window.porteScroll = function(name, cibleId){
    var ov = porte(name), el = document.getElementById(cibleId); if(!ov || !el) return;
    var sc = ov.querySelector('.porte-scroll'), nav = ov.querySelector('.porte-subnav');
    var off = el.getBoundingClientRect().top - sc.getBoundingClientRect().top + sc.scrollTop - (nav ? nav.offsetHeight + 16 : 16);
    sc.scrollTo({ top: Math.max(0, off), behavior: 'smooth' });
  };

  // Liens internes (#tarifs, #formules, #prisme, #equipe…) vers un contenu placé dans une fenêtre
  function porteDe(id){
    var el = document.getElementById(id); if(!el) return null;
    var ov = el.closest('.porte-overlay'); return ov ? ov.id.replace('porte-', '') : null;
  }
  document.addEventListener('click', function(e){
    var a = e.target.closest && e.target.closest('a[href^="#"]'); if(!a) return;
    var id = a.getAttribute('href').slice(1); if(!id) return;
    if(id === 'tarifs' || id === 'formules'){ e.preventDefault(); e.stopPropagation(); if(a.closest('.porte-overlay')) closePorte(); openContinuum(); return; }
    var p = porteDe(id);
    if(p){
      e.preventDefault(); e.stopPropagation();
      var dejaDedans = a.closest('#porte-' + p);
      if(dejaDedans){ porteScroll(p, id); }
      else { openPorte(p, (id === 'tarifs' || id === 'prisme' || id === 'equipe') ? null : id); }
      return;
    }
    // lien vers une section de la page depuis une fenêtre ouverte : on ferme d'abord
    if(a.closest('.porte-overlay') && document.getElementById(id)){ closePorte(); }
  }, true);

  // Les 3 accès du héros
  document.querySelectorAll('#accueil [data-nh-link]').forEach(function(a){
    var k = a.getAttribute('data-nh-link');
    if(k === 'agir') a.setAttribute('href', '#agir-avec-noria');
    if(k === 'instant') a.setAttribute('href', '#tunnel');
    if(k === 'continuum'){ a.setAttribute('href', '#continuum'); a.addEventListener('click', function(e){ e.preventDefault(); openPorte('continuum'); }); }
    if(k === 'prisme'){ a.setAttribute('href', '#noria-prisme'); a.addEventListener('click', function(e){ e.preventDefault(); openPorte('prisme'); }); }
  });

  // Bandeau « Découvrir tous les experts » : lettres qui arrivent de la droite, puis reflet
  var vb = document.querySelector('.visages-btn');
  if(vb){
    var txt = vb.getAttribute('data-texte') || vb.textContent.trim();
    vb.setAttribute('aria-label', txt);
    var n = 0;
    vb.innerHTML = (txt + ' →').split(' ').map(function(mot){
      return '<span class="mot" aria-hidden="true">' + mot.split('').map(function(ch){ return '<span class="lt" style="--i:' + (n++) + '">' + ch + '</span>'; }).join('') + '</span>';
    }).join('<span class="esp" aria-hidden="true"> </span>');
    var lancer = function(){
      if(vb.classList.contains('go')) return;
      vb.classList.add('go');
      setTimeout(function(){ vb.classList.add('shine'); }, (txt.length + 1) * 45 + 750);
    };
    if('IntersectionObserver' in window){
      var io = new IntersectionObserver(function(es){ es.forEach(function(en){ if(en.isIntersecting){ lancer(); io.disconnect(); } }); }, { threshold: .6 });
      io.observe(vb);
    } else { lancer(); }
  }

  document.addEventListener('keydown', function(e){
    if(e.key !== 'Escape' || !anyOpen()) return;
    // une fiche ouverte par-dessus se ferme d'abord
    if(document.querySelector('.modal-overlay.open, .service-overlay.open, .devis-overlay.open, .map-overlay.open, #intraOverlay.open')) return;
    closePorte();
  }, true);

  // À l'ouverture d'une fenêtre, le focus passe sur son bouton Fermer (Échap fonctionne aussitôt)
  ['openIntra','openAgir'].forEach(function(fn){
    if(typeof window[fn] !== 'function') return;
    var orig = window[fn];
    window[fn] = function(){
      try{ if(document.activeElement && document.activeElement.blur) document.activeElement.blur(); }catch(e){}
      var r = orig.apply(this, arguments);
      var id = fn === 'openIntra' ? 'intraOverlay' : 'agirOverlay';
      setTimeout(function(){ var b = document.querySelector('#' + id + ' .intra-close'); if(b) b.focus({preventScroll:true}); }, 520);
      return r;
    };
  });

  // Demande depuis le parcours CONTINUUM : formulaire de devis NORIA (Brevo)
  var devisTitre = null;
  window.openDevisNoria = function(libelle, message, titre){
    if(typeof closeAgir === 'function') closeAgir();
    var sel = document.getElementById('devis-service'), t = libelle || 'Demande NORIA';
    if(sel){ if(![].some.call(sel.options, function(o){ return o.text === t; })){ var o = document.createElement('option'); o.text = t; sel.insertBefore(o, sel.options[1]); } sel.value = t; }
    var msg = document.querySelector('#devis-form [data-k=MESSAGE]'); if(msg) msg.value = message || '';
    var h2 = document.querySelector('#devis-form h2'); if(h2){ if(devisTitre === null) devisTitre = h2.textContent; h2.textContent = titre || 'Demander un devis'; }
    setTimeout(function(){ document.getElementById('devisOverlay').classList.add('open'); document.body.style.overflow = 'hidden'; }, 300);
  };
  window.openDevisContinuum = function(sujet, message){
    openDevisNoria('CONTINUUM · ' + (sujet || 'Conseil sur le bon parcours'), message, 'Échanger avec NORIA · CONTINUUM');
  };

  if(typeof window.closeDevis === 'function'){
    var _closeDevis = window.closeDevis;
    window.closeDevis = function(){ _closeDevis.apply(this, arguments); if(devisTitre !== null){ var h2 = document.querySelector('#devis-form h2'); if(h2) h2.textContent = devisTitre; devisTitre = null; } };
  }

  // Arrivée sur la page avec une ancre placée dans une fenêtre
  window.addEventListener('load', function(){
    if(location.hash === '#tarifs' || location.hash === '#formules' || location.hash === '#continuum-intra'){ if(location.hash === '#continuum-intra' && typeof openIntra === 'function') openIntra(); else openContinuum(); return; }
    var id = location.hash.slice(1); var p = id && porteDe(id);
    if(p) openPorte(p, (id === 'tarifs' || id === 'prisme' || id === 'equipe') ? null : id);
  });
})();
