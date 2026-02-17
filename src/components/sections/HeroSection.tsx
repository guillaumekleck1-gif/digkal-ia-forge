import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20 z-0" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Solutions IA pour entreprises</span>
          </div>

          {/* Main Headline */}
          <h1 className="fade-in-up delay-100 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Transformez l'IA en{" "}
            <span className="gradient-text">outil de travail</span>{" "}
            concret
          </h1>

          {/* Subheadline */}
          <p className="fade-in-up delay-200 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Pas des démos. Pas des promesses floues.{" "}
            <span className="text-foreground font-medium">
              Des agents IA, des logiciels IA et des formations
            </span>{" "}
            qui produisent des résultats mesurables.
          </p>

          {/* Key Value Props */}
          <div className="fade-in-up delay-300 flex flex-wrap justify-center gap-6 mb-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>IA personnalisée</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Hébergé en France</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Conforme RGPD</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="fade-in-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              Parler à un expert IA
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="neon" size="xl">
              Découvrir nos solutions
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="fade-in-up delay-500 mt-16 pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground mb-4">Ils nous font confiance</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <span className="text-lg font-semibold text-muted-foreground">PME</span>
              <span className="text-lg font-semibold text-muted-foreground">ETI</span>
              <span className="text-lg font-semibold text-muted-foreground">Industries</span>
              <span className="text-lg font-semibold text-muted-foreground">Services</span>
              <span className="text-lg font-semibold text-muted-foreground">BTP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Spline 3D Animation */}
      <div className="w-full h-[500px] md:h-[600px] relative z-10 -mt-8">
        <spline-viewer url="https://prod.spline.design/rEcixPrhReI-XjUL/scene.splinecode" style={{ width: '100%', height: '100%', background: 'transparent' }} />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
}
