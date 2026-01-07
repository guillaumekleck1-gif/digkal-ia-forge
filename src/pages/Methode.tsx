import { Layout } from "@/components/layout/Layout";
import { DifferentiatorsSection } from "@/components/sections/DifferentiatorsSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Search, Lightbulb, Rocket, RefreshCw, Shield, Server, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Échange découverte",
    description: "Nous comprenons vos enjeux, vos processus et vos objectifs. Sans jargon, avec pédagogie.",
  },
  {
    number: "02",
    icon: Search,
    title: "Étude de faisabilité",
    description: "Nos experts analysent les possibilités IA adaptées à votre contexte et estiment le ROI.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Conception sur-mesure",
    description: "Nous concevons une solution IA personnalisée, adaptée à vos outils et contraintes.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Déploiement & formation",
    description: "Mise en production, formation des équipes, documentation. Vous êtes autonomes.",
  },
  {
    number: "05",
    icon: RefreshCw,
    title: "Amélioration continue",
    description: "Suivi des performances, optimisations, évolutions. Nous vous accompagnons dans la durée.",
  },
];

const securityFeatures = [
  {
    icon: Server,
    title: "Hébergement souverain",
    description: "Vos données sont hébergées exclusivement en France et en Europe, dans des datacenters certifiés.",
  },
  {
    icon: Lock,
    title: "Chiffrement de bout en bout",
    description: "Toutes les données sont chiffrées en transit et au repos. Aucun accès non autorisé possible.",
  },
  {
    icon: Shield,
    title: "Conformité RGPD",
    description: "Respect strict de la réglementation européenne. Vos données restent votre propriété exclusive.",
  },
];

export default function Methode() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Notre méthode
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Une approche <span className="gradient-text">rigoureuse et sécurisée</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              De la compréhension de vos besoins au déploiement, nous vous accompagnons 
              avec méthode, transparence et exigence de sécurité.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Notre processus en <span className="gradient-text">5 étapes</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex gap-8 pb-12 last:pb-0">
                {/* Line connector */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[39px] top-20 w-0.5 h-full bg-border" />
                )}
                
                {/* Number */}
                <div className="shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/30">
                    <span className="text-2xl font-bold gradient-text">{step.number}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="glass-card p-8 flex-1 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Sécurité & Conformité
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Vos données sont <span className="gradient-text">notre priorité</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Contrairement aux IA grand public, vos données ne sortent jamais de votre environnement sécurisé.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {securityFeatures.map((feature) => (
              <div key={feature.title} className="glass-card p-8 text-center hover:border-primary/50 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DifferentiatorsSection />

      {/* CTA */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Prêt à démarrer votre projet IA ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Échangeons sur vos besoins. Premier rendez-vous découverte offert.
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
