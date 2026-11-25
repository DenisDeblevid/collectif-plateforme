/* NORIA HORIZON — Quatrième porte. Sans framework, sans dépendances.
 * Carrousel : un cycle COMPLET de 40 s sur toutes les slides.
 * data-cycle-ms=40000 est modifiable dans index.html.
 */
(() => {
  'use strict';
  const menuButton = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('#menu-principal');
  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }

  const carousel = document.querySelector('[data-carousel]');
  if (carousel) {
    const slides = Array.from(carousel.querySelectorAll('[data-slide]'));
    const dots = Array.from(carousel.querySelectorAll('[data-dot]'));
    const prev = document.querySelector('[data-prev]');
    const next = document.querySelector('[data-next]');
    const play = document.querySelector('[data-play]');
    const counter = document.querySelector('[data-counter]');
    const progress = carousel.querySelector('.carousel-progress');
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
    // Intentional: 40 seconds is one full loop, not 40 s per slide.
    const totalCycleMs = Number(carousel.getAttribute('data-cycle-ms')) || 40000;
    const perSlideMs = Math.round(totalCycleMs / Math.max(slides.length, 1));
    carousel.style.setProperty('--slide-ms', `${perSlideMs}ms`);
    if (progress) progress.style.setProperty('--slide-ms', `${perSlideMs}ms`);
    let index = 0, timer = null, manualPause = false, hoverPause = false, focusPause = false;
    const canAutoPlay = () => !manualPause && !hoverPause && !focusPause && !document.hidden && !reduceMotion.matches;
    const cancelTimer = () => { if (timer !== null) { clearTimeout(timer); timer = null; } };
    const updatePlayButton = () => {
      if (!play) return;
      const paused = manualPause || reduceMotion.matches;
      play.textContent = paused ? '▶' : 'Ⅱ';
      play.setAttribute('aria-label', paused ? 'Reprendre le défilement' : 'Mettre le défilement en pause');
    };
    const restartProgress = () => {
      if (!progress) return;
      progress.classList.remove('running');
      // Force a real transition restart on manual navigation.
      void progress.offsetWidth;
      if (canAutoPlay()) progress.classList.add('running');
    };
    const plan = () => {
      cancelTimer();
      restartProgress();
      if (canAutoPlay() && slides.length > 1) timer = setTimeout(() => show(index + 1), perSlideMs);
      updatePlayButton();
    };
    const show = nextIndex => {
      index = (nextIndex + slides.length) % slides.length;
      slides.forEach((slide,i) => {
        const active = i === index;
        slide.classList.toggle('active',active);
        slide.setAttribute('aria-hidden',String(!active));
        slide.inert = !active;
      });
      dots.forEach((d,i) => d.setAttribute('aria-current', String(i === index)));
      if (counter) counter.textContent = `${index + 1} / ${slides.length}`;
      plan();
    };
    prev?.addEventListener('click',() => show(index - 1));
    next?.addEventListener('click',() => show(index + 1));
    dots.forEach((d,i) => d.addEventListener('click',() => show(i)));
    play?.addEventListener('click',() => { manualPause = !manualPause; plan(); });
    carousel.addEventListener('mouseenter',() => { hoverPause = true; plan(); });
    carousel.addEventListener('mouseleave',() => { hoverPause = false; plan(); });
    carousel.addEventListener('focusin',() => { focusPause = true; plan(); });
    carousel.addEventListener('focusout',() => { setTimeout(() => {
      focusPause = carousel.contains(document.activeElement);
      plan();
    },0); });
    carousel.addEventListener('keydown',event => {
      if (event.key === 'ArrowLeft') { event.preventDefault(); show(index - 1); }
      if (event.key === 'ArrowRight') { event.preventDefault(); show(index + 1); }
    });
    document.addEventListener('visibilitychange',plan);
    reduceMotion.addEventListener?.('change',plan);
    show(0);
  }

  const form = document.querySelector('[data-contact-form]');
  if (form) {
    const selected = new URLSearchParams(location.search).get('objet');
    if (selected && form.elements.offre) form.elements.offre.value = selected.replaceAll('-', ' ');
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const fields = new FormData(form);
      const lines = [
        'Bonjour,', '', 'Je vous contacte au sujet de : ' + fields.get('offre'), '',
        'Nom : ' + fields.get('nom'),
        'Entreprise : ' + (fields.get('entreprise') || 'Non précisée'),
        'E-mail : ' + fields.get('email'), '',
        'Ma situation / mon projet :', fields.get('message'), '',
        'Bien cordialement.'
      ];
      const subject = 'Demande NORIA HORIZON — ' + fields.get('offre');
      // Intentionally a mailto: no phantom server-side submission or success message.
      window.location.href = `mailto:noriahorizoncontacts@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
    });
  }
})();

/* Ouverture dans la fenêtre du site principal (24 nov. 2026) :
   les fiches déjà en ligne (/#offre-…) s'ouvrent sur le site principal,
   Échap ferme la fenêtre. */
(function(){
  var p = null;
  try{ if(window.parent !== window && typeof window.parent.closeAgir === 'function') p = window.parent; }catch(e){}
  if(!p) return;
  document.documentElement.classList.add('in-overlay');
  document.addEventListener('click', function(e){
    var a = e.target.closest && e.target.closest('a[href]'); if(!a) return;
    var m = a.getAttribute('href').match(/^\/#offre-([a-z]+)$/);
    if(m){ e.preventDefault(); p.closeAgir(); setTimeout(function(){ p.openOffre(m[1]); }, 350); }
    var h = a.getAttribute('href');
    if(/^contact\.html/.test(h) && typeof p.openDevisNoria === 'function'){
      e.preventDefault();
      var t = (document.querySelector('h1') || {}).innerText || 'Agir avec NORIA';
      var page = location.pathname.split('/').pop();
      var sujet = /^fiche-/.test(page) ? t.replace(/\s+/g,' ').trim() : 'Agir avec NORIA';
      p.openDevisNoria('Agir avec NORIA · ' + sujet, '', 'Demander un devis · Agir avec NORIA');
    }
  });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') p.closeAgir(); });
})();
