import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, CheckCircle } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center glass-card p-12">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Message envoyé !</h3>
            <p className="text-muted-foreground">
              Notre équipe d'experts IA vous contactera dans les plus brefs délais.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute left-0 top-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left - Content */}
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Contact
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Étudions{" "}
              <span className="gradient-text">votre projet IA</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Décrivez-nous votre besoin. Un expert IA analysera votre cas et 
              vous proposera une solution adaptée à vos objectifs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Échange découverte</h4>
                  <p className="text-sm text-muted-foreground">
                    Nous comprenons vos enjeux et vos objectifs
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Étude de faisabilité</h4>
                  <p className="text-sm text-muted-foreground">
                    Nous analysons les possibilités et le ROI potentiel
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Proposition sur-mesure</h4>
                  <p className="text-sm text-muted-foreground">
                    Une solution adaptée à votre contexte et budget
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Société *</label>
                  <Input 
                    placeholder="Nom de votre entreprise" 
                    required 
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Votre rôle *</label>
                  <Select required>
                    <SelectTrigger className="bg-muted/50 border-border focus:border-primary">
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dirigeant">Dirigeant</SelectItem>
                      <SelectItem value="dsi">DSI / Responsable IT</SelectItem>
                      <SelectItem value="innovation">Responsable Innovation</SelectItem>
                      <SelectItem value="metier">Direction Métier</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email *</label>
                  <Input 
                    type="email" 
                    placeholder="vous@entreprise.com" 
                    required 
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Téléphone</label>
                  <Input 
                    type="tel" 
                    placeholder="+33 6 00 00 00 00" 
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Objectif IA *</label>
                <Select required>
                  <SelectTrigger className="bg-muted/50 border-border focus:border-primary">
                    <SelectValue placeholder="Que souhaitez-vous automatiser ?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="automatisation">Automatiser des processus</SelectItem>
                    <SelectItem value="agent">Créer un agent IA</SelectItem>
                    <SelectItem value="logiciel">Développer un logiciel IA</SelectItem>
                    <SelectItem value="formation">Former mes équipes</SelectItem>
                    <SelectItem value="conseil">Conseil stratégique IA</SelectItem>
                    <SelectItem value="autre">Autre projet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Décrivez votre projet</label>
                <Textarea 
                  placeholder="Quels processus souhaitez-vous automatiser ? Quels outils utilisez-vous actuellement ? Quels résultats attendez-vous ?"
                  rows={4}
                  className="bg-muted/50 border-border focus:border-primary resize-none"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Étudier mon projet IA
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Vos données sont protégées. Conformité RGPD garantie.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
