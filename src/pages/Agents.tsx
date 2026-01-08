import { Layout } from "@/components/layout/Layout";
import { AgentsSection } from "@/components/sections/AgentsSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Lock, Zap, RefreshCw, Database, Shield, User, HeadphonesIcon, ShoppingCart, Calculator, FileText, Calendar, MessageSquare, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Database,
    title: "Entraînés sur vos données",
    description: "L'agent apprend de votre base de connaissances, vos documents, votre historique.",
  },
  {
    icon: Zap,
    title: "Connectés à vos outils",
    description: "Intégration native avec votre CRM, ERP, messagerie, outils métiers existants.",
  },
  {
    icon: Lock,
    title: "Privés et sécurisés",
    description: "Accès restreint, données chiffrées, hébergement France/Europe.",
  },
  {
    icon: RefreshCw,
    title: "Apprentissage continu",
    description: "L'agent s'améliore avec chaque interaction et feedback de vos équipes.",
  },
];

const benefits = [
  "Disponible 24h/24, 7j/7",
  "Réponses instantanées et précises",
  "Réduction des tâches répétitives",
  "Scalabilité illimitée",
  "ROI mesurable dès le premier mois",
  "Conformité RGPD garantie",
];

const agentModels = [
  {
    icon: User,
    name: "Secrétaire IA",
    description: "Gestion d'agenda, prise de rendez-vous, filtrage d'emails, rappels automatiques.",
    useCases: ["Planification de réunions", "Tri des emails prioritaires", "Suivi des tâches"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: HeadphonesIcon,
    name: "Support Client IA",
    description: "Réponses instantanées aux questions clients, escalade intelligente, satisfaction 24/7.",
    useCases: ["FAQ automatisées", "Tickets niveau 1", "Suivi de commandes"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: ShoppingCart,
    name: "Commercial IA",
    description: "Qualification de leads, relances automatiques, recommandations personnalisées.",
    useCases: ["Qualification prospects", "Devis automatiques", "Relances intelligentes"],
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Calculator,
    name: "Comptable IA",
    description: "Traitement des factures, rapprochement bancaire, alertes anomalies.",
    useCases: ["Saisie factures", "Relances impayés", "Reporting financier"],
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: FileText,
    name: "Juriste IA",
    description: "Analyse de contrats, veille réglementaire, génération de documents légaux.",
    useCases: ["Revue de contrats", "Conformité RGPD", "Clauses types"],
    color: "from-red-500 to-rose-500",
  },
  {
    icon: TrendingUp,
    name: "Analyste IA",
    description: "Analyse de données, génération de rapports, insights et prédictions.",
    useCases: ["Tableaux de bord", "Prévisions ventes", "KPIs automatisés"],
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Calendar,
    name: "RH IA",
    description: "Onboarding, réponses collaborateurs, gestion des congés et absences.",
    useCases: ["Questions RH", "Processus onboarding", "Suivi congés"],
    color: "from-pink-500 to-fuchsia-500",
  },
  {
    icon: MessageSquare,
    name: "Formateur IA",
    description: "Formation personnalisée, quiz adaptatifs, suivi de progression.",
    useCases: ["Parcours formation", "Évaluation compétences", "Coaching continu"],
    color: "from-teal-500 to-cyan-500",
  },
];

export default function Agents() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute left-0 top-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Agents IA
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Des agents IA <span className="gradient-text">personnalisés</span> pour votre entreprise
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Agents RH, support, commercial, finance... Créez des collaborateurs virtuels 
              entraînés sur vos données, connectés à vos outils, disponibles 24h/24.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Créer mon agent IA
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <AgentsSection />

      {/* Agent Models Gallery */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Nos modèles
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Agents IA <span className="gradient-text">prêts à déployer</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Découvrez nos modèles d'agents déjà développés et personnalisables selon vos besoins métiers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {agentModels.map((agent) => (
              <div 
                key={agent.name} 
                className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <agent.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{agent.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{agent.description}</p>
                <div className="space-y-2">
                  {agent.useCases.map((useCase) => (
                    <div key={useCase} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Check className="w-3 h-3 text-primary shrink-0" />
                      <span>{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button variant="neon" size="lg">
                Personnaliser un agent
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Comment fonctionnent <span className="gradient-text">nos agents IA</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature) => (
              <div key={feature.title} className="glass-card p-8 hover:border-primary/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Les bénéfices d'un agent IA Digkal
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold">Sécurité maximale</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Contrairement aux IA grand public, nos agents sont privés. 
                Vos données ne sont jamais partagées, jamais utilisées pour entraîner d'autres modèles.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  Hébergement France/Europe
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  Chiffrement de bout en bout
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  Conformité RGPD certifiée
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Prêt à créer votre agent IA ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Décrivez-nous votre besoin, nous concevons l'agent parfait pour votre entreprise.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Parler à un expert IA
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
