import { Layout } from "@/components/layout/Layout";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Workflow, BarChart3, Cog } from "lucide-react";
import { Link } from "react-router-dom";

const useCases = [
  {
    icon: Cpu,
    sector: "Industrie",
    title: "Maintenance prédictive",
    description: "Anticipez les pannes et optimisez vos interventions grâce à l'analyse IA de vos données machines.",
  },
  {
    icon: BarChart3,
    sector: "Commerce",
    title: "Prévision des ventes",
    description: "Prédisez la demande et optimisez vos stocks avec des modèles IA entraînés sur vos données.",
  },
  {
    icon: Workflow,
    sector: "Services",
    title: "Automatisation documentaire",
    description: "Traitez automatiquement factures, contrats et documents avec extraction intelligente.",
  },
  {
    icon: Cog,
    sector: "BTP",
    title: "Optimisation chantiers",
    description: "Planifiez et suivez vos chantiers avec des outils IA de gestion et prévision.",
  },
];

export default function Solutions() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Solutions IA
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Des logiciels IA <span className="gradient-text">sur-mesure</span> pour votre métier
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Moteurs de recommandation, analyse prédictive, automatisation intelligente. 
              Nous concevons des solutions IA adaptées à vos processus et vos enjeux.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Étudier mon projet
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Use Cases */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Cas d'usage
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              L'IA appliquée à <span className="gradient-text">votre secteur</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="glass-card p-8 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <useCase.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                    {useCase.sector}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
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
              Vous avez un projet IA ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Nos experts analysent votre besoin et vous proposent une solution adaptée.
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
