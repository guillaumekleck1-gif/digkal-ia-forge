import { Check, Shield, Server, Users, Eye, Handshake, Scale, Lightbulb } from "lucide-react";

const differentiators = [
  {
    icon: Users,
    title: "IA personnalisée",
    description: "Pas de solutions génériques. Chaque projet est adapté à votre métier et vos besoins.",
  },
  {
    icon: Server,
    title: "Hébergé en France",
    description: "Vos données restent en France et en Europe, sous votre contrôle total.",
  },
  {
    icon: Shield,
    title: "Conforme RGPD",
    description: "Respect strict de la réglementation européenne sur les données personnelles.",
  },
  {
    icon: Eye,
    title: "IA explicable",
    description: "Pas de boîte noire. Vous comprenez ce que fait l'IA et pourquoi.",
  },
  {
    icon: Handshake,
    title: "Accompagnement humain",
    description: "Une équipe d'experts à vos côtés, du conseil au déploiement.",
  },
  {
    icon: Lightbulb,
    title: "Pédagogie forte",
    description: "Nous formons vos équipes pour une adoption réussie et durable.",
  },
  {
    icon: Scale,
    title: "Vision long terme",
    description: "Pas de one-shot. Nous construisons avec vous une stratégie IA pérenne.",
  },
  {
    icon: Check,
    title: "ROI mesurable",
    description: "Des indicateurs clairs pour mesurer l'impact réel de l'IA.",
  },
];

export function DifferentiatorsSection() {
  return (
    <section id="securite" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Pourquoi Digkal IA
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            L'IA n'est pas une menace.{" "}
            <span className="gradient-text">C'est un levier.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            À condition qu'elle soit bien conçue. Voici ce qui nous différencie.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {differentiators.map((item, index) => (
            <div
              key={item.title}
              className="group p-6 rounded-xl bg-card/30 border border-border/50 hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
