/* =====================================================================
   CONTENU DE L'ESPACE CONTINUUM — à alimenter ici
   ---------------------------------------------------------------------
   • sessions : une entrée par session. "titre" et "detail" s'affichent
     tels quels. Le mois est lu dans le titre (après le « · »).
   • cercles : une entrée par cercle. "mois" détermine l'ordre d'affichage
     et le point de départ du défilement.
     ATTENTION : les dates ci-dessous sont FICTIVES. Remplacez-les avant
     d'ouvrir l'espace aux membres.
   • une : la ressource mise en avant (choisie à la main), ou null.
       { titre: "...", type: "Fiche pratique", description: "...", url: "..." }
   • notifications : { titre, texte (facultatif), date (facultatif), url (facultatif) }
     Liste vide = aucune notification.
   • ressources : une entrée par domaine, avec trois listes :
       - videos    : { titre: "...", url: "...", duree: "court" }
                     (duree "court" ou "long" ; sans duree = court)
       - documents : { titre: "...", url: "..." }
       - supports  : { titre: "...", url: "..." }
     Une liste vide affiche « À venir ». Les vidéos sont hébergées
     ailleurs (YouTube non listé, Vimeo, Google Drive) : on met
     leur lien ici, pas le fichier vidéo.
   ATTENTION : ce fichier est lisible par toute personne qui connaît
   son adresse. N'y mettez pas de contenu confidentiel.
   ===================================================================== */
var ESPACE_CONTENU = {
  sessions: [
    { titre: 'Session Horizon · Novembre 2026', detail: '75 à 90 minutes · avec un expert · date précise à confirmer' },
    { titre: 'Session Horizon · Décembre 2026', detail: '75 à 90 minutes · avec un expert · date précise à confirmer' },
    { titre: 'Session Horizon · Janvier 2027',  detail: '75 à 90 minutes · avec un expert · date précise à confirmer' },
    { titre: 'Session Horizon · Février 2027',  detail: '75 à 90 minutes · avec un expert · date précise à confirmer' },
    { titre: 'Session Horizon · Mars 2027',     detail: '75 à 90 minutes · avec un expert · date précise à confirmer' },
    { titre: 'Session Horizon · Avril 2027',    detail: '75 à 90 minutes · avec un expert · date précise à confirmer' }
  ],
  // FICTIFS : à remplacer
  cercles: [
    { titre: 'Mieux se comprendre au travail', detail: 'Le langage du management et de la coopération · 60 min · en visio', mois: 'Décembre 2026' },
    { titre: 'Décider sous pression',          detail: 'Rester lucide quand la situation s\'accélère · 60 min · en visio',   mois: 'Janvier 2027' },
    { titre: 'Manager dans l\'incertitude',    detail: 'Repères et pratiques de terrain · 60 min · en visio',               mois: 'Février 2027' },
    { titre: 'Donner un feedback juste',       detail: 'Mettre des mots sur ce qui compte · 60 min · en visio',             mois: 'Mars 2027' },
    { titre: 'Accompagner une équipe en transition', detail: 'Tenir le cap quand tout bouge · 60 min · en visio', mois: 'Avril 2027' },
    { titre: 'Prendre une décision difficile',     detail: 'Clarifier ses critères et assumer son choix · 60 min · en visio', mois: 'Mai 2027' }
  ],
  // Ressource mise en avant : à choisir à la main, ou null
  une: null,
  notifications: [],
  ressources: [
    { categorie: 'Management & RH',                          videos: [], documents: [], supports: [] },
    { categorie: 'Formation & e-learning',                   videos: [], documents: [], supports: [] },
    { categorie: 'Carrière & emploi',                        videos: [], documents: [], supports: [] },
    { categorie: 'Finance d\'entreprise',                    videos: [], documents: [], supports: [] },
    { categorie: 'Publicité en ligne',                       videos: [], documents: [], supports: [] },
    { categorie: 'Décoration & impression murale',           videos: [], documents: [], supports: [] },
    { categorie: 'Web & IA',                                 videos: [], documents: [], supports: [] },
    { categorie: 'Compétences psychosociales & coopération', videos: [], documents: [], supports: [] },
    { categorie: 'Développement de compétences',             videos: [], documents: [], supports: [] },
    { categorie: 'Philosophie & développement personnel',   videos: [], documents: [], supports: [] },
    { categorie: 'Préparation physique & survie',            videos: [], documents: [], supports: [] }
  ]
};
