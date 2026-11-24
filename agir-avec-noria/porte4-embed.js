/* Carrousel isolé pour l'insertion dans le site existant.
 * Un TOUR COMPLET = 40 000 ms; manuel, souris, clavier, pause, onglet caché.
 */
(() => {
  'use strict';
  const root=document.querySelector('#agir-avec-noria'); if(!root) return;
  const slides=[...root.querySelectorAll('[data-np4-slide]')];
  if(!slides.length) return;
  const dots=[...root.querySelectorAll('[data-np4-dot]')];
  const prev=root.querySelector('[data-np4-prev]'),next=root.querySelector('[data-np4-next]');
  const play=root.querySelector('[data-np4-play]'),counter=root.querySelector('[data-np4-counter]');
  const area=root.querySelector('[data-np4-carousel]');
  const per=40000/slides.length;
  let idx=0,timer=null,hover=false,focus=false,paused=false;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  function canRun(){return !hover&&!focus&&!paused&&!document.hidden&&!reduced.matches}
  function redraw(){
    slides.forEach((s,i)=>{const active=i===idx;s.classList.toggle('np-active',active);s.inert=!active;s.setAttribute('aria-hidden',String(!active))});
    dots.forEach((d,i)=>d.setAttribute('aria-current',String(i===idx)));
    if(counter)counter.textContent=`${idx+1} / ${slides.length}`;
    if(play){play.textContent=paused?'▶':'Ⅱ';play.setAttribute('aria-label',paused?'Reprendre':'Mettre en pause')}
  }
  function schedule(){clearTimeout(timer);timer=null;redraw();if(canRun())timer=setTimeout(()=>go(idx+1),per)}
  function go(n){idx=(n+slides.length)%slides.length;schedule()}
  prev?.addEventListener('click',()=>go(idx-1));next?.addEventListener('click',()=>go(idx+1));
  dots.forEach((d,i)=>d.addEventListener('click',()=>go(i)));
  play?.addEventListener('click',()=>{paused=!paused;schedule()});
  area?.addEventListener('mouseenter',()=>{hover=true;schedule()});
  area?.addEventListener('mouseleave',()=>{hover=false;schedule()});
  area?.addEventListener('focusin',()=>{focus=true;schedule()});
  area?.addEventListener('focusout',()=>setTimeout(()=>{focus=area.contains(document.activeElement);schedule()},0));
  area?.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();go(idx-1)}if(e.key==='ArrowRight'){e.preventDefault();go(idx+1)}});
  document.addEventListener('visibilitychange',schedule);
  reduced.addEventListener?.('change',schedule);
  schedule();
})();
