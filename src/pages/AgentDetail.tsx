import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Check, Bot, User as UserIcon, Play, Pause } from "lucide-react";
import { getAgentBySlug, agentModels } from "@/data/agentModels";
import { useState, useEffect, useRef } from "react";

export default function AgentDetail() {
  const { slug } = useParams<{ slug: string }>();
  const agent = slug ? getAgentBySlug(slug) : undefined;
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [displayedMessages, setDisplayedMessages] = useState<typeof agent.demoMessages>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!agent) return;
    
    setDisplayedMessages([]);
    setCurrentMessageIndex(0);
    setIsPlaying(true);
  }, [agent]);

  useEffect(() => {
    if (!agent || !isPlaying) return;

    if (currentMessageIndex < agent.demoMessages.length) {
      intervalRef.current = setTimeout(() => {
        setDisplayedMessages(prev => [...prev, agent.demoMessages[currentMessageIndex]]);
        setCurrentMessageIndex(prev => prev + 1);
      }, 1500);
    } else {
      // Reset after showing all messages
      intervalRef.current = setTimeout(() => {
        setDisplayedMessages([]);
        setCurrentMessageIndex(0);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
    };
  }, [agent, currentMessageIndex, isPlaying]);

  if (!agent) {
    return <Navigate to="/agents" replace />;
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const resetDemo = () => {
    setDisplayedMessages([]);
    setCurrentMessageIndex(0);
    setIsPlaying(true);
  };

  // Find next and previous agents for navigation
  const currentIndex = agentModels.findIndex(a => a.slug === slug);
  const prevAgent = currentIndex > 0 ? agentModels[currentIndex - 1] : null;
  const nextAgent = currentIndex < agentModels.length - 1 ? agentModels[currentIndex + 1] : null;

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute left-0 top-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            to="/agents" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux agents
          </Link>

          <div className="max-w-4xl">
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${agent.color} flex items-center justify-center mb-6`}>
              <agent.icon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {agent.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              {agent.longDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Déployer cet agent
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button variant="outline" size="xl" onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}>
                Voir la démo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold mb-6">Fonctionnalités clés</h2>
              <div className="space-y-4">
                {agent.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Cas d'usage</h2>
              <div className="space-y-4">
                {agent.useCases.map((useCase) => (
                  <div key={useCase} className="glass-card p-4 hover:border-primary/50 transition-all">
                    <span className="font-medium">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section id="demo" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Démonstration
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Voyez l'agent en action
            </h2>
            <p className="text-muted-foreground">
              Voici un exemple de conversation avec votre {agent.name}
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="glass-card overflow-hidden">
              {/* Chat Header */}
              <div className={`bg-gradient-to-r ${agent.color} p-4 flex items-center justify-between`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{agent.name}</h3>
                    <span className="text-xs text-white/80">En ligne</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={togglePlayPause}
                    className="text-white hover:bg-white/20"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={resetDemo}
                    className="text-white hover:bg-white/20"
                  >
                    Rejouer
                  </Button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-6 min-h-[300px] space-y-4">
                {displayedMessages.map((message, index) => (
                  <div 
                    key={index}
                    className={`flex gap-3 animate-fade-in ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      message.role === 'user' 
                        ? 'bg-muted' 
                        : `bg-gradient-to-br ${agent.color}`
                    }`}>
                      {message.role === 'user' 
                        ? <UserIcon className="w-4 h-4" />
                        : <Bot className="w-4 h-4 text-white" />
                      }
                    </div>
                    <div className={`max-w-[80%] p-3 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground rounded-tr-sm'
                        : 'bg-muted rounded-tl-sm'
                    }`}>
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                ))}
                {displayedMessages.length === 0 && (
                  <div className="flex items-center justify-center h-[250px] text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span>Chargement de la conversation...</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Tarification
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Investissement transparent
            </h2>
            <p className="text-muted-foreground">
              Un tarif clair, sans surprise, avec tout inclus pour démarrer
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="glass-card p-8 border-primary/50 relative overflow-hidden">
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${agent.color}`} />
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2">{agent.name}</h3>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-4xl font-bold">{agent.pricing.monthly}</span>
                  <span className="text-muted-foreground">/mois</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  + {agent.pricing.setup} de mise en place
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {agent.pricing.includes.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="block">
                <Button variant="hero" size="lg" className="w-full">
                  Demander un devis personnalisé
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center max-w-4xl mx-auto">
            {prevAgent ? (
              <Link 
                to={`/agents/${prevAgent.slug}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <span className="text-xs block">Précédent</span>
                  <span className="font-medium">{prevAgent.name}</span>
                </div>
              </Link>
            ) : <div />}
            
            {nextAgent ? (
              <Link 
                to={`/agents/${nextAgent.slug}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-right group"
              >
                <div>
                  <span className="text-xs block">Suivant</span>
                  <span className="font-medium">{nextAgent.name}</span>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Prêt à déployer votre {agent.name} ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contactez-nous pour une démonstration personnalisée et un devis sur mesure.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Parler à un expert
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
