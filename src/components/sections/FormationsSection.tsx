import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Shield, TrendingUp } from "lucide-react";

const formations = [
  {
    icon: Users,
    title: "Dirigeants & Décideurs",
    description: "Comprendre les enjeux stratégiques de l'IA, identifier les opportunités, piloter la transformation.",
    duration: "1 à 2 jours",
  },
  {
    icon: TrendingUp,
    title: "Équipes Opérationnelles",
    description: "Maîtriser les outils IA au quotidien, optimiser les processus, gagner en productivité.",
    duration: "2 à 3 jours",
  },
  {
    icon: Shield,
    title: "Usage Responsable",
    description: "Sécurité des données, éthique de l'IA, conformité RGPD, bonnes pratiques.",
    duration: "1 jour",
  },
];

export function FormationsSection() {
  return (
    <section id="formations" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Formations
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Formez vos équipes à{" "}
            <span className="gradient-text">maîtriser l'IA</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            L'IA est un outil puissant. Encore faut-il savoir s'en servir. 
            Nous formons vos collaborateurs pour une adoption réussie.
          </p>
        </div>

        {/* Formations Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {formations.map((formation) => (
            <div
              key={formation.title}
              className="glass-card p-8 text-center hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <formation.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{formation.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {formation.description}
              </p>
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                {formation.duration}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="neon" size="lg">
            <GraduationCap className="w-5 h-5 mr-2" />
            Découvrir nos formations
          </Button>
        </div>
      </div>
    </section>
  );
}
