import { Layout } from "@/components/layout/Layout";
import { ContactSection } from "@/components/sections/ContactSection";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    details: ["France"],
  },
  {
    icon: Phone,
    title: "Téléphone",
    details: ["06 78 01 57 32"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contact@digkal.fr"],
  },
  {
    icon: Clock,
    title: "Horaires",
    details: ["Lun - Ven : 9h - 18h"],
  },
];

export default function Contact() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-8 relative">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute left-0 top-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Contact
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Parlons de <span className="gradient-text">votre projet IA</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Notre équipe d'experts est à votre écoute pour analyser vos besoins 
              et vous proposer une solution sur-mesure.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {contactInfo.map((info) => (
              <div key={info.title} className="glass-card p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{info.title}</h3>
                {info.details.map((detail) => (
                  <p key={detail} className="text-sm text-muted-foreground">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
}
