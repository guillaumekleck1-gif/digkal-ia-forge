import { User, HeadphonesIcon, ShoppingCart, Calculator, FileText, TrendingUp, Calendar, MessageSquare, LucideIcon } from "lucide-react";

export interface AgentModel {
  slug: string;
  icon: LucideIcon;
  name: string;
  description: string;
  longDescription: string;
  useCases: string[];
  features: string[];
  color: string;
  demoMessages: { role: "user" | "agent"; content: string }[];
  pricing: {
    setup: string;
    monthly: string;
    includes: string[];
  };
}

export const agentModels: AgentModel[] = [
  {
    slug: "secretaire-ia",
    icon: User,
    name: "Secrétaire IA",
    description: "Gestion d'agenda, prise de rendez-vous, filtrage d'emails, rappels automatiques.",
    longDescription: "Votre assistant virtuel disponible 24h/24 pour gérer votre agenda, organiser vos réunions, filtrer vos emails importants et vous rappeler vos échéances. Il s'intègre à vos outils existants (Google Calendar, Outlook, Gmail) pour une productivité maximale.",
    useCases: ["Planification de réunions", "Tri des emails prioritaires", "Suivi des tâches"],
    features: [
      "Synchronisation calendriers multiples",
      "Filtrage intelligent des emails",
      "Rappels automatiques personnalisés",
      "Gestion des conflits d'agenda",
      "Préparation des réunions",
      "Suivi des actions post-réunion"
    ],
    color: "from-blue-500 to-cyan-500",
    demoMessages: [
      { role: "user", content: "Peux-tu me trouver un créneau pour une réunion d'équipe la semaine prochaine ?" },
      { role: "agent", content: "J'ai analysé les agendas de l'équipe. Voici 3 créneaux disponibles : mardi 14h-15h, mercredi 10h-11h, ou jeudi 16h-17h. Quelle option préférez-vous ?" },
      { role: "user", content: "Mardi 14h c'est parfait." },
      { role: "agent", content: "Parfait ! J'ai créé la réunion pour mardi 14h-15h, envoyé les invitations à tous les participants et réservé la salle de conférence B2. Voulez-vous que je prépare un ordre du jour ?" }
    ],
    pricing: {
      setup: "2 500€",
      monthly: "490€",
      includes: [
        "Configuration personnalisée",
        "Intégration calendrier & email",
        "Formation équipe (2h)",
        "Support prioritaire",
        "Mises à jour incluses"
      ]
    }
  },
  {
    slug: "support-client-ia",
    icon: HeadphonesIcon,
    name: "Support Client IA",
    description: "Réponses instantanées aux questions clients, escalade intelligente, satisfaction 24/7.",
    longDescription: "Un agent support disponible jour et nuit pour répondre aux questions de vos clients. Il apprend de votre base de connaissances, escalade intelligemment vers vos équipes humaines quand nécessaire, et améliore continuellement ses réponses.",
    useCases: ["FAQ automatisées", "Tickets niveau 1", "Suivi de commandes"],
    features: [
      "Réponses instantanées 24/7",
      "Base de connaissances auto-évolutive",
      "Escalade intelligente niveau 2",
      "Multilingue (FR, EN, ES, DE)",
      "Analyse sentiment client",
      "Reporting satisfaction"
    ],
    color: "from-green-500 to-emerald-500",
    demoMessages: [
      { role: "user", content: "Bonjour, je n'ai toujours pas reçu ma commande passée il y a 5 jours." },
      { role: "agent", content: "Bonjour ! Je comprends votre préoccupation. Je vérifie immédiatement le statut de votre commande #45892. Votre colis est actuellement en transit et devrait arriver demain. Souhaitez-vous que je vous envoie le lien de suivi ?" },
      { role: "user", content: "Oui s'il vous plaît." },
      { role: "agent", content: "Voici le lien de suivi : track.carrier.com/45892. Je note également dans votre dossier ce délai inhabituel pour améliorer nos services. Puis-je vous aider pour autre chose ?" }
    ],
    pricing: {
      setup: "3 500€",
      monthly: "790€",
      includes: [
        "Intégration base de connaissances",
        "Widget chat personnalisé",
        "Dashboard analytics",
        "Formation équipe support",
        "SLA 99.9% uptime"
      ]
    }
  },
  {
    slug: "commercial-ia",
    icon: ShoppingCart,
    name: "Commercial IA",
    description: "Qualification de leads, relances automatiques, recommandations personnalisées.",
    longDescription: "Votre commercial virtuel qui qualifie vos prospects 24h/24, effectue des relances intelligentes au bon moment, et propose des recommandations personnalisées basées sur le comportement d'achat. Intégré à votre CRM pour un suivi optimal.",
    useCases: ["Qualification prospects", "Devis automatiques", "Relances intelligentes"],
    features: [
      "Qualification leads automatique",
      "Scoring prospects intelligent",
      "Relances personnalisées",
      "Génération devis instantanée",
      "Recommandations cross-sell",
      "Intégration CRM native"
    ],
    color: "from-orange-500 to-amber-500",
    demoMessages: [
      { role: "user", content: "Je cherche une solution pour automatiser mon service client." },
      { role: "agent", content: "Excellent choix ! Pour mieux vous orienter, combien de demandes clients traitez-vous par mois environ ? Et utilisez-vous déjà un outil de ticketing ?" },
      { role: "user", content: "Environ 500 demandes par mois, on utilise Zendesk." },
      { role: "agent", content: "Parfait ! Notre Agent Support IA s'intègre nativement à Zendesk. Pour 500 demandes/mois, je vous recommande notre offre Business à 790€/mois. Voulez-vous planifier une démo personnalisée avec notre équipe ?" }
    ],
    pricing: {
      setup: "4 000€",
      monthly: "890€",
      includes: [
        "Intégration CRM complète",
        "Scoring leads personnalisé",
        "Templates relances",
        "Reporting conversions",
        "A/B testing messages"
      ]
    }
  },
  {
    slug: "comptable-ia",
    icon: Calculator,
    name: "Comptable IA",
    description: "Traitement des factures, rapprochement bancaire, alertes anomalies.",
    longDescription: "Automatisez votre comptabilité quotidienne : lecture et saisie automatique des factures, rapprochement bancaire intelligent, détection d'anomalies et alertes proactives. Compatible avec tous les logiciels comptables majeurs.",
    useCases: ["Saisie factures", "Relances impayés", "Reporting financier"],
    features: [
      "OCR factures intelligent",
      "Rapprochement bancaire auto",
      "Détection anomalies",
      "Relances impayés automatiques",
      "Tableaux de bord temps réel",
      "Export multi-formats"
    ],
    color: "from-purple-500 to-violet-500",
    demoMessages: [
      { role: "user", content: "Combien de factures impayées avons-nous ce mois-ci ?" },
      { role: "agent", content: "Vous avez actuellement 12 factures impayées pour un total de 34 560€. 3 factures sont en retard de plus de 30 jours (8 200€). Voulez-vous que je lance une relance automatique pour ces dernières ?" },
      { role: "user", content: "Oui, envoie les relances pour celles de plus de 30 jours." },
      { role: "agent", content: "C'est fait ! J'ai envoyé 3 emails de relance personnalisés avec les factures en pièce jointe. Je vous notifierai dès réception des paiements. Prochaine relance prévue dans 7 jours si non réglée." }
    ],
    pricing: {
      setup: "3 000€",
      monthly: "690€",
      includes: [
        "Connexion logiciel comptable",
        "OCR illimité",
        "Alertes personnalisées",
        "Export cabinet comptable",
        "Audit trail complet"
      ]
    }
  },
  {
    slug: "juriste-ia",
    icon: FileText,
    name: "Juriste IA",
    description: "Analyse de contrats, veille réglementaire, génération de documents légaux.",
    longDescription: "Votre assistant juridique intelligent pour analyser vos contrats, détecter les clauses à risque, assurer une veille réglementaire automatique et générer des documents légaux conformes. Supervisé par des experts juridiques.",
    useCases: ["Revue de contrats", "Conformité RGPD", "Clauses types"],
    features: [
      "Analyse contrats automatique",
      "Détection clauses à risque",
      "Veille réglementaire",
      "Génération documents types",
      "Suivi conformité RGPD",
      "Alertes échéances légales"
    ],
    color: "from-red-500 to-rose-500",
    demoMessages: [
      { role: "user", content: "Peux-tu analyser ce contrat fournisseur et me signaler les points d'attention ?" },
      { role: "agent", content: "J'ai analysé le contrat. Je détecte 3 points d'attention : 1) Clause de responsabilité limitée très favorable au fournisseur (art. 8.2), 2) Préavis de résiliation de 6 mois (inhabituel), 3) Absence de clause RGPD. Voulez-vous le détail ?" },
      { role: "user", content: "Oui, donne-moi le détail de la clause de responsabilité." },
      { role: "agent", content: "L'article 8.2 limite la responsabilité du fournisseur à 50% du montant annuel du contrat. C'est inférieur aux standards du marché (100% minimum). Je vous recommande de négocier une limite à 100% minimum. Voici une reformulation suggérée..." }
    ],
    pricing: {
      setup: "5 000€",
      monthly: "990€",
      includes: [
        "Analyse contrats illimitée",
        "Base clauses types",
        "Veille juridique secteur",
        "Validation expert (5h/mois)",
        "Templates personnalisés"
      ]
    }
  },
  {
    slug: "analyste-ia",
    icon: TrendingUp,
    name: "Analyste IA",
    description: "Analyse de données, génération de rapports, insights et prédictions.",
    longDescription: "Transformez vos données en insights actionnables. L'agent analyse vos données métier, génère des rapports automatiques, détecte les tendances et vous alerte sur les anomalies. Tableaux de bord dynamiques inclus.",
    useCases: ["Tableaux de bord", "Prévisions ventes", "KPIs automatisés"],
    features: [
      "Connexion multi-sources",
      "Rapports automatiques",
      "Prévisions ML",
      "Détection anomalies",
      "Alertes intelligentes",
      "Export multi-formats"
    ],
    color: "from-indigo-500 to-blue-500",
    demoMessages: [
      { role: "user", content: "Quelles sont les tendances de ventes ce trimestre ?" },
      { role: "agent", content: "Ce trimestre, vos ventes sont en hausse de 12% vs Q3. Les 3 produits stars : Premium Pack (+34%), Solution Pro (+22%), Starter Kit (+15%). Je note cependant une baisse de 8% sur le marché Allemagne. Voulez-vous une analyse approfondie ?" },
      { role: "user", content: "Oui, pourquoi la baisse en Allemagne ?" },
      { role: "agent", content: "L'analyse révèle 2 facteurs : 1) Nouveau concurrent local lancé en septembre (-15% parts de marché), 2) Délais de livraison allongés (moy. 8j vs 5j habituels). Je recommande de prioriser l'optimisation logistique. Voulez-vous un plan d'action ?" }
    ],
    pricing: {
      setup: "4 500€",
      monthly: "890€",
      includes: [
        "Connecteurs data illimités",
        "Dashboards personnalisés",
        "Rapports automatiques",
        "Modèles prédictifs",
        "Formation équipe data"
      ]
    }
  },
  {
    slug: "rh-ia",
    icon: Calendar,
    name: "RH IA",
    description: "Onboarding, réponses collaborateurs, gestion des congés et absences.",
    longDescription: "Simplifiez la vie de vos équipes RH et de vos collaborateurs. L'agent répond aux questions RH courantes, automatise l'onboarding des nouveaux arrivants, gère les demandes de congés et assure le suivi administratif.",
    useCases: ["Questions RH", "Processus onboarding", "Suivi congés"],
    features: [
      "FAQ RH automatisée",
      "Onboarding guidé",
      "Gestion congés/absences",
      "Suivi période d'essai",
      "Alertes échéances contrats",
      "Portail collaborateur"
    ],
    color: "from-pink-500 to-fuchsia-500",
    demoMessages: [
      { role: "user", content: "Il me reste combien de jours de congés ?" },
      { role: "agent", content: "Bonjour Marie ! Vous avez actuellement 12 jours de congés payés disponibles et 3 jours de RTT. Vous avez également 2 jours de congés reportés à prendre avant fin mars. Souhaitez-vous poser des congés ?" },
      { role: "user", content: "Oui, je voudrais poser du 15 au 22 décembre." },
      { role: "agent", content: "Demande enregistrée : 6 jours ouvrés du 15 au 22 décembre. J'ai transmis la demande à votre manager pour validation. Vous recevrez une confirmation sous 48h. Dois-je vous rappeler si pas de réponse ?" }
    ],
    pricing: {
      setup: "3 500€",
      monthly: "790€",
      includes: [
        "Portail collaborateur",
        "Workflows personnalisés",
        "Intégration SIRH",
        "Onboarding digital",
        "Analytics RH"
      ]
    }
  },
  {
    slug: "formateur-ia",
    icon: MessageSquare,
    name: "Formateur IA",
    description: "Formation personnalisée, quiz adaptatifs, suivi de progression.",
    longDescription: "Personnalisez l'apprentissage de chaque collaborateur. L'agent crée des parcours de formation adaptés, génère des quiz pour valider les acquis, et assure un coaching continu basé sur les points à améliorer.",
    useCases: ["Parcours formation", "Évaluation compétences", "Coaching continu"],
    features: [
      "Parcours personnalisés",
      "Quiz adaptatifs",
      "Suivi progression",
      "Micro-learning",
      "Certifications internes",
      "Analytics formation"
    ],
    color: "from-teal-500 to-cyan-500",
    demoMessages: [
      { role: "user", content: "Je voudrais me former sur Excel avancé." },
      { role: "agent", content: "Parfait ! J'ai évalué votre niveau actuel : intermédiaire. Je vous propose un parcours de 8 modules sur les fonctions avancées (TCD, macros, Power Query). Durée estimée : 6h sur 3 semaines. On commence par un quiz diagnostic ?" },
      { role: "user", content: "Oui, allons-y !" },
      { role: "agent", content: "Question 1/10 : Quelle fonction utiliseriez-vous pour rechercher une valeur dans un tableau et retourner une valeur correspondante d'une autre colonne ? A) RECHERCHEV B) SI C) SOMME.SI D) INDEX/EQUIV" }
    ],
    pricing: {
      setup: "3 000€",
      monthly: "590€",
      includes: [
        "Catalogue formations",
        "Créateur de parcours",
        "Quiz illimités",
        "Certificats personnalisés",
        "Reporting LMS"
      ]
    }
  }
];

export function getAgentBySlug(slug: string): AgentModel | undefined {
  return agentModels.find(agent => agent.slug === slug);
}
