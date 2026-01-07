import { Button } from "@/components/ui/button";
import { MessageSquare, BarChart3, Users, Briefcase, ArrowRight } from "lucide-react";

const agents = [
  {
    icon: Users,
    name: "Agent RH",
    description: "Automatise le tri des CV, répond aux questions des employés, facilite l'onboarding.",
  },
  {
    icon: MessageSquare,
    name: "Agent Support",
    description: "Répond aux clients 24/7, escalade intelligemment, apprend de chaque interaction.",
  },
  {
    icon: Briefcase,
    name: "Agent Commercial",
    description: "Qualifie les leads, personnalise les propositions, prédit les opportunités.",
  },
  {
    icon: BarChart3,
    name: "Agent Finance",
    description: "Analyse les données financières, détecte les anomalies, génère des rapports.",
  },
];

export function AgentsSection() {
  return (
    <section id="agents" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute left-0 top-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Agents IA
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Vos équipes, <span className="gradient-text">augmentées</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Des agents IA entraînés sur vos données, connectés à vos outils, 
              sécurisés et privés. Ils travaillent pour vous, 24h/24.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                Entraînés sur les données de votre entreprise
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                Connectés à vos outils existants (CRM, ERP...)
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                Sécurisés, privés, non accessibles publiquement
              </li>
            </ul>

            <Button variant="hero" size="lg">
              Découvrir les agents IA
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Right - Agent Cards */}
          <div className="grid grid-cols-2 gap-4">
            {agents.map((agent, index) => (
              <div
                key={agent.name}
                className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group"
                style={{ transform: index % 2 === 1 ? 'translateY(20px)' : 'translateY(0)' }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <agent.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{agent.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {agent.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
