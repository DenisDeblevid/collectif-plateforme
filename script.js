const experts = {
  florian: {
    photo:'Florian-Dhaussy.png',
    name:'Florian Dhaussy',
    role:'Formateur Management · Consultant RH · Co-fondateur',
    location:'Hauts-de-France (France entière)',
    phone:'+33 6 00 00 00 00',
    email:'florian.dhaussy@noria-horizon.fr',
    bio:["Consultant en développement des compétences, manager d'une équipe de consultants, formateur et coach certifié SEVEN NATURAL SKILLS®, Florian intervient à la croisée des enjeux humains et stratégiques. Sa conviction : la réussite durable repose sur la capacité à développer les compétences, révéler les potentiels et faire grandir les talents.","Il accompagne dirigeants, équipes RH, managers et collaborateurs dans la construction de solutions concrètes favorisant l'engagement, la montée en compétences et la performance collective."],
    tags:['Management','Formation','Leadership','RH','Compétences','Performance collective','Seven Natural Skills®']
  },
  denis: {
    photo:'Denis-Deblevid.png',
    name:'Denis Deblevid',
    role:'Coach Philosophique · Méthode 4P · Co-fondateur',
    location:'Marseille',
    phone:'+33 6 00 00 00 00',
    email:'denisdeblevidcontact@gmail.com',
    bio:["Coach philosophique et fondateur de la Méthode 4P (Psychologique, Physique, Philosophique, Pneuma), Denis accompagne ceux qui portent une soif profonde de sens et de transformation. Son approche s'enracine dans le stoïcisme pratique — une philosophie vécue, incarnée, qui ne reste pas dans les livres.","Ancien pratiquant d'arts martiaux pendant dix ans, Denis a traversé ses propres ruptures pour construire une méthode qui touche l'être dans toutes ses dimensions. Il marche à vos côtés, non au-dessus de vous."],
    tags:['Stoïcisme','Méthode 4P','Identité','Sens','Résilience','Corps & Mental','Philosophie pratique']
  },
  emilie: {
    photo:'Emilie-Abraham.jpg',
    name:'Émilie Abraham',
    role:'Consultante RH · Développement professionnel · Nobel RH',
    location:'France',
    phone:'+33 6 65 52 00 00',
    email:'abrahamemilie@gmail.com',
    bio:[
      "Professionnelle des Ressources Humaines avec plus de 15 ans d'expérience, Émilie accompagne les organisations publiques et privées dans la prévention des risques professionnels, le développement des compétences et l'amélioration de la qualité de vie au travail.",
      "Ancienne Cheffe de service QVT, Adjointe DRH, Responsable formation et recrutement, elle apporte une vision 360° de l'organisation — humaine, stratégique et opérationnelle. Son diagnostic est le point de départ pour définir des objectifs clairs et activer la croissance."
    ],
    tags:['QVT','Prévention des risques','Formation','Recrutement','Dialogue social','RH publique & privée','Développement des compétences','Audit entreprise']
  },
  melanie: {
    photo:'Melanie-Allard.png',
    name:'Mélanie Allard',
    role:'Consultante Emploi · Carrière · Développement',
    location:'Challans (85) + Visio',
    phone:'+33 6 13 06 31 07',
    email:'melanieallardpro@gmail.com',
    bio:["Forte de 20 ans d'expérience en intérim, recrutement et gestion d'agence, Mélanie accompagne particuliers et professionnels à clarifier leur situation, structurer leurs démarches et avancer de manière alignée dans leurs projets professionnels.","Pour les particuliers : transitions professionnelles, orientation, repositionnement, diagnostic CV, préparation aux entretiens. Pour les professionnels : audit business, structuration et développement de TPE/PME. Une approche humaine, structurante et orientée solution."],
    tags:['Carrière','Reconversion','CV & Entretiens','Audit business','TPE·PME','Transitions pro','Bilan carrière']
  },
  laurence: {
    photo:'Laurence-Brouet.png',
    name:'Laurence Brouet',
    role:'Consultante RH · Formation · E-learning',
    location:'Toulouse (distanciel & présentiel)',
    phone:'+33 6 71 82 57 39',
    email:'brouet.laurence@orange.fr',
    bio:[
      "Consultante dans le secteur de la formation et des activités RH, Laurence apporte des solutions concrètes : aux jeunes désireux d'effectuer une formation en alternance par contrat d'apprentissage, aux salariés qui veulent développer leurs compétences professionnelles, aux personnes en reconversion, et aux dirigeants en recherche de talents.",
      "Sa connaissance du monde de l'entreprise et son évolution dans de nombreux secteurs d'activités lui permettent de détecter les attentes et les besoins réels, par l'écoute et l'analyse — pour proposer des solutions adaptées et un accompagnement de qualité jusqu'à la réussite du projet.",
      "Interventions en distanciel, avec possibilité sur site pour le secteur toulousain."
    ],
    tags:['Formation et e-learning','Éducation','Services RH','Alternance','Reconversion professionnelle','Recherche de talents']
  },
  gilles: {
    photo:'Gilles-Quillerier.png',
    name:'Gilles Quillerier',
    role:'Consultant en développement de compétences',
    location:'France & International',
    phone:'À venir',
    email:'À venir',
    bio:[
      "Professionnel du management, du commerce et du développement d'activités depuis plus de 40 ans, Gilles a construit son parcours en France et à l'international à travers des fonctions de direction, de développement commercial et d'accompagnement stratégique.",
      "Il a occupé des postes de responsabilité au sein de grandes enseignes de distribution, notamment dans plusieurs pays du Moyen-Orient, avant de diriger des projets de développement au Cambodge et aux Philippines. Ces expériences lui ont donné une solide expertise en management d'équipes multiculturelles, développement commercial, négociation et conduite du changement.",
      "Aujourd'hui consultant en développement de compétences, il accompagne salariés, dirigeants et personnes en transition professionnelle dans la clarification de leurs objectifs, l'identification de leurs compétences et la construction de parcours durables — en combinant expérience terrain, vision stratégique et accompagnement humain."
    ],
    tags:['Management international','Développement commercial','Transitions professionnelles','Conseil stratégique','Négociation','Conduite du changement','Management multiculturel']
  },
  josselin: {
    photo:'',
    name:'Josselin Dionisi',
    role:'Développeur Web · Builder IA',
    location:'France',
    phone:'',
    email:'contact@boreales-creations.fr',
    bio:[
      "Professionnel de la tech et de l'IA depuis de nombreuses années, Josselin a accompagné des entreprises de toutes tailles — start-up et multinationales — dans leurs processus numériques. Aujourd'hui il se diversifie en gérant un collectif de développeurs, en ayant créé un logiciel en ligne pour faciliter la présence sur les réseaux sociaux, et en cherchant avant tout à étoffer son réseau pour de nouvelles perspectives.",
      "« J'aime faciliter la vie des gens et la technologie est ma meilleure alliée pour ça. »",
      "Une conviction qui lui tient particulièrement à cœur : il ne faut pas écouter tout ce que l'on nous dit. Le marketing, les idées reçues… ont parfois tendance à nous faire passer à côté de choses intéressantes."
    ],
    tags:['Web','IA','Agentique','Formation']
  }
};

// ─── CARTE DES EXPERTS (Leaflet) ───
var expertsGeo = {
  florian:  { lat: 50.6292, lon: 3.0573,  zoom: 8,  ville: "Lille (Hauts-de-France)" },
  denis:    { lat: 43.2965, lon: 5.3698,  zoom: 9,  ville: "Marseille" },
  emilie:   { lat: 46.6034, lon: 1.8883,  zoom: 6,  ville: "France" },
  laurence: { lat: 43.6047, lon: 1.4442,  zoom: 9,  ville: "Toulouse" },
  melanie:  { lat: 46.8494, lon: -1.8794, zoom: 9,  ville: "Challans (85)" },
  gilles:   { lat: 46.6034, lon: 1.8883,  zoom: 5,  ville: "France & International" },
  josselin: { lat: 46.6034, lon: 1.8883,  zoom: 6,  ville: "France" }
};

var expertsMap = null;
var expertsMapMarkers = [];

function buildMarkerIcon(active){
  return L.divIcon({
    className: '',
    html: '<div class="expert-marker' + (active ? ' active' : '') + '"><div class="dot-pulse"></div><div class="dot-pulse-2"></div><div class="dot-core"></div></div>',
    iconSize: [26,26],
    iconAnchor: [13,13]
  });
}

function openMap(activeId){
  document.getElementById('mapOverlay').classList.add('open');
  document.body.style.overflow='hidden';

  var active = expertsGeo[activeId];

  setTimeout(function(){
    if(!expertsMap){
      expertsMap = L.map('expertsMapContainer', { scrollWheelZoom:true });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 18
      }).addTo(expertsMap);
    }

    // Toujours forcer le recalcul de la taille avant de positionner la vue —
    // évite les bugs d'affichage liés à un conteneur qui vient juste de devenir visible
    expertsMap.invalidateSize();
    expertsMap.setView([active.lat, active.lon], active.zoom);

    // Nettoyer les anciens marqueurs
    expertsMapMarkers.forEach(function(m){ expertsMap.removeLayer(m); });
    expertsMapMarkers = [];

    // Ajouter tous les experts, avec l'expert cliqué mis en avant
    Object.keys(expertsGeo).forEach(function(id){
      var g = expertsGeo[id];
      var e = experts[id];
      if(!g) return;
      var isActive = (id === activeId);
      var marker = L.marker([g.lat, g.lon], { icon: buildMarkerIcon(isActive) }).addTo(expertsMap);
      marker.bindPopup('<strong>' + (e ? e.name : id) + '</strong><br>' + g.ville);
      if(isActive) marker.openPopup();
      expertsMapMarkers.push(marker);
    });

    // Second recalcul après un court instant — garantit que Leaflet a bien
    // les bonnes dimensions même sur mobile ou après une animation d'ouverture
    setTimeout(function(){ expertsMap.invalidateSize(); }, 250);
  }, 80);
}

function closeMap(){
  document.getElementById('mapOverlay').classList.remove('open');
  document.body.style.overflow='';
}

function openModal(id){
  var e=experts[id]; if(!e) return;
  var bioHTML=e.bio.map(function(p){ return '<p class="modal-bio">'+p+'</p>'; }).join('');
  var tagsHTML=e.tags.map(function(t){ return '<span class="modal-tag">'+t+'</span>'; }).join('');
  document.getElementById('modalBody').innerHTML=
    '<div class="modal-header">' +
    '<div class="modal-photo" style="overflow:hidden;padding:0;">'+(e.photo ? '<img src="'+e.photo+'" alt="'+e.name+'" style="width:100%;height:100%;object-fit:cover;object-position:center top;">' : '')+'</div>' +
    '<div class="modal-info">' +
    '<h2>'+e.name+'</h2>' +
    '<span class="role-badge">'+e.role+'</span><br>' +
    '<small style="opacity:.4;font-size:.78rem;display:block;margin-bottom:10px;">📍 '+e.location+'</small>' +
    '<div class="contact-links">' +
    (e.phone ? '<a href="tel:'+e.phone+'">📞 '+e.phone+'</a>' : '') +
    (e.email ? '<a href="mailto:'+e.email+'">✉ '+e.email+'</a>' : '') +
    '</div></div></div>' +
    bioHTML +
    '<div class="modal-tags">'+tagsHTML+'</div>';
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}

function closeModal(){
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow='';
}
function closeModalOnBg(e){ if(e.target===document.getElementById('modalOverlay')) closeModal(); }

function handleFormSubmit(e){
  const btn=e.target;
  btn.textContent='✓ Vérifiez votre mail — les vidéos arrivent';
  btn.style.background='var(--teal)';
  setTimeout(()=>{ btn.textContent='Recevoir les 3 vidéos →'; btn.style.background='var(--copper)'; },3500);
}

// Scroll reveal
const obs=new IntersectionObserver(entries=>{
  entries.forEach(en=>{ if(en.isIntersecting) en.target.classList.add('visible'); });
},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

// Animation séquentielle étapes
(function(){
  const grid=document.querySelector('.steps-grid'); if(!grid) return;
  const cards=grid.querySelectorAll('.step-card');
  let done=false;
  const run=()=>{
    if(done) return; done=true;
    cards.forEach((card,i)=>{
      setTimeout(()=>card.classList.add('illumine'), i*380);
      setTimeout(()=>card.classList.remove('illumine'), i*380+900);
      setTimeout(()=>{
        card.classList.add('illumine');
        if(i===cards.length-1) setTimeout(()=>grid.classList.add('sequence-done'),200);
      }, i*380+1400);
    });
  };
  const o=new IntersectionObserver(entries=>{
    entries.forEach(en=>{ if(en.isIntersecting){ setTimeout(run,300); o.disconnect(); } });
  },{threshold:0.3});
  o.observe(grid);
})();

// Section Noria Prisme — animation au scroll
(function(){
  const section = document.getElementById('prisme'); if(!section) return;
  const title = document.getElementById('prismeTitle');
  const visual = document.getElementById('prismeVisual');
  const points = document.querySelectorAll('#prismePoints .prisme-point');
  let done=false;
  const run=()=>{
    if(done) return; done=true;
    if(title) title.classList.add('illumine');
    if(visual) visual.classList.add('in-view');
    points.forEach((pt,i)=>{
      const isLast = i===points.length-1;
      const base = 400 + i*450;
      setTimeout(()=>pt.classList.add('illumine'), base);
      if(!isLast){
        setTimeout(()=>pt.classList.remove('illumine'), base+650);
        setTimeout(()=>pt.classList.add('illumine'), base+1100);
      } else {
        setTimeout(()=>pt.classList.add('illumine-final'), base+650);
      }
    });
  };
  const o=new IntersectionObserver(entries=>{
    entries.forEach(en=>{ if(en.isIntersecting){ run(); o.disconnect(); } });
  },{threshold:0.25});
  o.observe(section);
})();

var svcData = {
  coaching:  {title:"Coaching individuel",   img:"coaching-individuel.png", desc:"Un accompagnement sur-mesure, en profondeur, avec l'expert qui correspond à votre réalité. Blocages, croyances limitantes, objectifs de vie et de carrière.", details:["Séances en visio ou présentiel","Suivi personnalisé","Outils et supports fournis","Fréquence adaptée à votre rythme"], prix:"À partir de 80€ / séance"},
  stages:    {title:"Stages & Ateliers",      img:"stages-ateliers.png", desc:"Des immersions intenses qui transforment. Nature, dépassement de soi, philosophie pratique — pour ancrer des changements profonds.", details:["Formats d'1 à 3 jours","Groupes de 6 à 12 personnes","Encadrement par plusieurs experts","Suivi post-stage inclus"], prix:"À partir de 350€ / participant"},
  formation: {title:"Formations entreprises", img:"formations-entreprises.png", desc:"Interventions sur-mesure pour développer les talents, renforcer le leadership et améliorer la cohésion d'équipe.", details:["Audit des besoins en amont","Programme sur-mesure","Interventions ponctuelles ou récurrentes","Rapport de suivi"], prix:"Sur devis"},
  collectif: {title:"Accompagnement collectif",img:"accompagnement-collectif.png", desc:"Groupes de pairs, cercles de progression, masterminds. L'intelligence collective au service de votre montée en compétence.", details:["Groupes de 6 à 10 personnes","Sessions bi-mensuelles","Animé par un expert","Communauté privée"], prix:"À partir de 150€ / mois"},
  digital:   {title:"Parcours digitaux",      img:"parcours-digitaux.png", desc:"Séquences email, vidéos pédagogiques, questionnaires. Un tunnel pédagogique complet.", details:["Accès 24h/24","Progression à votre rythme","Vidéo + exercices","Support par email"], prix:"À partir de 49€"},
  ressources:{title:"Ressources & Outils",     img:"ressources-outils.png", desc:"Guides pratiques, fiches méthodologiques et outils concrets pour prolonger le travail entre deux rendez-vous.", details:["Bibliothèque de ressources en ligne","Mise à jour régulière","Fiches téléchargeables","Accès inclus selon la formule"], prix:"Inclus ou en complément"}
};

function openService(key){
  var s=svcData[key]; if(!s) return;
  var det=s.details.map(function(d){return "<li>"+d+"</li>";}).join("");
  document.getElementById("serviceBody").innerHTML=
    "<img class=\"service-modal-img\" src=\""+s.img+"\" alt=\""+s.title+"\">"+
    "<h2>"+s.title+"</h2>"+
    "<p class=\"service-modal-desc\">"+s.desc+"</p>"+
    "<div class=\"service-prix\"><span>Tarif indicatif</span>"+s.prix+"</div>"+
    "<ul class=\"service-details\">"+det+"</ul>"+
    "<button class=\"btn-copper-full\" onclick=\"closeService();openDevis('"+key+"')\">Demander un devis &rarr;</button>";
  document.getElementById("serviceOverlay").classList.add("open");
  document.body.style.overflow="hidden";
}
function closeService(){ document.getElementById("serviceOverlay").classList.remove("open"); document.body.style.overflow=""; }
function openDevis(key){ if(key&&svcData[key])document.getElementById("devis-service").value=svcData[key].title; document.getElementById("devisOverlay").classList.add("open"); document.body.style.overflow="hidden"; }
function closeDevis(){ document.getElementById("devisOverlay").classList.remove("open"); document.body.style.overflow=""; }
function submitDevis(){ document.getElementById("devis-confirm").style.display="block"; setTimeout(function(){ closeDevis(); document.getElementById("devis-confirm").style.display="none"; },3000); }

document.addEventListener('keydown',e=>{ if(e.key==='Escape'){closeModal();closeService();closeDevis();closeMap();} });

// ─── MENU ACTIF + SILLAGE SCROLL + BACK TO TOP ───
(function(){
  var anchors = Array.prototype.slice.call(document.querySelectorAll('.nav-anchor'));
  var sections = anchors.map(function(a){
    var id = a.getAttribute('href').replace('#','');
    return { link:a, el:document.getElementById(id) };
  }).filter(function(s){ return s.el; });

  var actionKeys = Array.prototype.slice.call(document.querySelectorAll('.action-key'));
  var backBtn = document.getElementById('backToTop');
  var allCards = Array.prototype.slice.call(document.querySelectorAll('.step-card,.valeur-card,.team-card,.service-card,.pillar,.partner-logo,.tarif-card'));

  function onScroll(){
    var docTop = window.scrollY;
    var current = null;
    sections.forEach(function(s){
      var top = s.el.offsetTop - 120;
      var bot = top + s.el.offsetHeight;
      if(docTop+150 >= top && docTop+150 < bot) current = s.link;
    });
    anchors.forEach(function(a){ a.classList.remove('active'); });
    if(current) current.classList.add('active');

    actionKeys.forEach(function(k){
      var r = k.getBoundingClientRect();
      var c = r.top + r.height/2;
      if(c > window.innerHeight*0.2 && c < window.innerHeight*0.75) k.classList.add('lit');
      else k.classList.remove('lit');
    });

    allCards.forEach(function(card){
      var r = card.getBoundingClientRect();
      var c = r.top + r.height/2;
      if(c > window.innerHeight*0.35 && c < window.innerHeight*0.65) card.classList.add('swept');
      else card.classList.remove('swept');
    });

    if(window.scrollY > 500) backBtn.classList.add('show');
    else backBtn.classList.remove('show');
  }

  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('load', onScroll);
  onScroll();
})();
