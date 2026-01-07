import { Layout } from "@/components/layout/Layout";
import { FormationsSection } from "@/components/sections/FormationsSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Clock, Users, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";

const formationDetails = [
  {
    title: "Formation Dirigeants",
    subtitle: "Vision stratégique de l'IA",
    duration: "1-2 jours",
    audience: "Dirigeants, CODIR, DG",
    objectives: [
      "Comprendre les opportunités et risques de l'IA",
      "Identifier les cas d'usage à fort ROI",
      "Définir une stratégie IA pour l'entreprise",
      "Piloter la transformation IA",
    ],
  },
  {
    title: "Formation Équipes",
    subtitle: "Maîtrise opérationnelle",
    duration: "2-3 jours",
    audience: "Équipes métiers, managers",
    objectives: [
      "Utiliser les outils IA au quotidien",
      "Optimiser les processus avec l'IA",
      "Créer des prompts efficaces",
      "Intégrer l'IA dans les workflows existants",
    ],
  },
  {
    title: "Formation Technique",
    subtitle: "Développement IA",
    duration: "3-5 jours",
    audience: "DSI, développeurs, data scientists",
    objectives: [
      "Concevoir et déployer des solutions IA",
      "Intégrer des APIs et modèles IA",
      "Sécuriser les données et accès",
      "Maintenir et améliorer les systèmes IA",
    ],
  },
];

const stats = [
  { icon: Users, value: "500+", label: "Personnes formées" },
  { icon: Target, value: "98%", label: "Satisfaction" },
  { icon: Award, value: "50+", label: "Entreprises accompagnées" },
];

export default function Formations() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Formations IA
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Formez vos équipes à <span className="gradient-text">maîtriser l'IA</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Des formations sur-mesure pour dirigeants et équipes. 
              Comprenez, utilisez et maîtrisez l'IA de manière responsable et efficace.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Demander un programme
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FormationsSection />

      {/* Detailed Programs */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Nos programmes <span className="gradient-text">détaillés</span>
            </h2>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {formationDetails.map((formation) => (
              <div key={formation.title} className="glass-card p-8 hover:border-primary/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{formation.title}</h3>
                    <p className="text-muted-foreground mb-4">{formation.subtitle}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{formation.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{formation.audience}</span>
                      </div>
                    </div>

                    <h4 className="font-semibold mb-3">Objectifs :</h4>
                    <ul className="space-y-2">
                      {formation.objectives.map((objective) => (
                        <li key={objective} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Formation sur-mesure pour votre entreprise
            </h2>
            <p className="text-muted-foreground mb-8">
              Nous adaptons le contenu à vos outils, vos processus et vos objectifs.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Demander un devis
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
