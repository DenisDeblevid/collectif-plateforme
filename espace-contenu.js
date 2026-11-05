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
    { titre: 'Conversations difficiles', detail: 'Dire ce qui doit être dit, sans abîmer la relation.', mois: 'Novembre 2026', expert: 'Présentée par notre expert · Florian Dhaussy' },
    { titre: 'Priorités & charge mentale', detail: 'Quand tout semble urgent, retrouver de la clarté et reprendre la main sur l’essentiel.', mois: 'Décembre 2026', expert: 'Présentée par votre expert · Denis Deblevid' },
    { titre: 'IA au travail', detail: 'Gagner du temps sans perdre son expertise.', mois: 'Janvier 2027', expert: 'Présentée par votre expert · Denis Deblevid' },
    { titre: 'À venir', detail: 'Thème et expert annoncés prochainement.', mois: 'Février 2027' },
    { titre: 'À venir', detail: 'Thème et expert annoncés prochainement.', mois: 'Mars 2027' },
    { titre: 'À venir', detail: 'Thème et expert annoncés prochainement.', mois: 'Avril 2027' }
  ],
  cercles: [
    { titre: 'Sortir d’une situation bloquée', detail: 'Apporter une situation concrète qui n’avance plus et faire émerger de nouvelles pistes grâce au regard du groupe.', mois: 'Novembre 2026', animateur: 'Denis Deblevid' },
    { titre: 'Faire le tri avant de repartir', detail: 'Prendre du recul ensemble sur ce qu’il faut continuer, arrêter ou faire évoluer avant la nouvelle année.', mois: 'Décembre 2026', animateur: 'Florian Dhaussy' },
    { titre: 'Débloquer une décision importante', detail: 'Clarifier un choix, une hésitation ou une décision professionnelle grâce à l’intelligence collective.', mois: 'Janvier 2027', animateur: 'Denis Deblevid' },
    { titre: 'À venir', detail: 'Thème annoncé prochainement.', mois: 'Février 2027' },
    { titre: 'À venir', detail: 'Thème annoncé prochainement.', mois: 'Mars 2027' },
    { titre: 'À venir', detail: 'Thème annoncé prochainement.', mois: 'Avril 2027' }
  ],
  // Ressource mise en avant : à choisir à la main, ou null
  une: null,
  notifications: [],
  ressources: [
    { categorie: 'Management & RH',                          videos: [], supports: [], documents: [
      { titre: 'Préparer un entretien difficile', url: 'management-preparer-entretien-difficile.pdf' },
      { titre: 'Dire les choses sans abîmer la relation', url: 'management-dire-les-choses-guide-express.pdf' }
    ] },
    { categorie: 'Décision & efficacité professionnelle',     videos: [], documents: [], supports: [
      { titre: 'Décider quand tout semble urgent', url: 'decision-decider-quand-tout-semble-urgent.pdf' },
      { titre: 'Clarifier une situation avant d\'agir', url: 'decision-clarifier-avant-d-agir.pdf' },
      { titre: 'La carte des angles morts', url: 'decision-carte-des-angles-morts.pdf' },
      { titre: 'Cartes de décision Noria', fichiers: [
        { label: 'Version imprimable / bureau', url: 'decision-cartes-decision-bureau.pdf' },
        { label: 'Version mobile', url: 'decision-cartes-decision-mobile.pdf' }
      ] }
    ] },
    { categorie: 'Formation & e-learning',                   videos: [], documents: [], supports: [] },
    { categorie: 'Carrière & emploi',                        videos: [], documents: [], supports: [] },
    { categorie: 'Finance d\'entreprise',                    videos: [], documents: [], supports: [] },
    { categorie: 'Publicité en ligne',                       videos: [], documents: [], supports: [] },
    { categorie: 'Décoration & impression murale',           videos: [], documents: [], supports: [] },
    { categorie: 'Web & IA',                                 videos: [], supports: [], documents: [
      { titre: 'Utiliser l\'IA sans perdre son esprit critique', url: 'web-ia-checklist-esprit-critique.pdf' }
    ] },
    { categorie: 'Compétences psychosociales & coopération', videos: [], documents: [], supports: [] },
    { categorie: 'Développement de compétences',             videos: [], documents: [], supports: [] },
    { categorie: 'Philosophie & développement personnel',   videos: [
      { titre: 'Capsule 1', fichier: 'philosophie-capsule-1.mp4' },
      { titre: 'Capsule 2', fichier: 'philosophie-capsule-2.mp4' },
      { titre: 'Capsule 3', fichier: 'philosophie-capsule-3.mp4' },
      { titre: 'Capsule 4', fichier: 'philosophie-capsule-4.mp4' }
    ], supports: [], documents: [
      { titre: 'Renaître de la soif · guide de transformation intérieure', url: 'philosophie-booklet-renaitre-de-la-soif.pdf', vignette: 'philosophie-booklet-couverture.jpg' }
    ] },
    { categorie: 'Préparation physique & survie',            videos: [], documents: [], supports: [] }
  ]
};
