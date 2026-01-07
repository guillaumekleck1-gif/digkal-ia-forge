import { Bot, Cpu, GraduationCap, Workflow } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Logiciels IA sur-mesure",
    description: "Moteurs de recommandation, analyse de données, automatisation intelligente adaptés à votre métier.",
    features: ["Analyse prédictive", "IA métier", "Intégration ERP/CRM"],
  },
  {
    icon: Bot,
    title: "Agents IA personnalisés",
    description: "Agents internes (RH, support, commercial) connectés à vos outils, entraînés sur vos données.",
    features: ["Agent privé sécurisé", "Connecté à vos outils", "Apprentissage continu"],
  },
  {
    icon: Workflow,
    title: "Automatisation IA",
    description: "Workflows intelligents qui suppriment les tâches répétitives et optimisent vos processus.",
    features: ["Workflows automatisés", "Intégration métiers", "ROI immédiat"],
  },
  {
    icon: GraduationCap,
    title: "Formations IA",
    description: "Formez vos équipes et dirigeants à l'usage responsable et efficace de l'IA.",
    features: ["Formation dirigeants", "Montée en compétence", "Usage sécurisé"],
  },
];

export function ServicesSection() {
  return (
    <section id="solutions" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Nos Solutions
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            L'IA au service de{" "}
            <span className="gradient-text">votre entreprise</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Des solutions concrètes, déployables et rentables. Pas de l'IA gadget, 
            mais de l'IA qui transforme vraiment votre activité.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card p-8 hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="absolute inset-0 w-14 h-14 rounded-xl bg-primary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
