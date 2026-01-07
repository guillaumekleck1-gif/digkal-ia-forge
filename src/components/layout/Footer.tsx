import { Link } from "react-router-dom";
import logoDigkal from "@/assets/logo-digkal.jpg";

const footerLinks = {
  solutions: [
    { name: "Logiciels IA", href: "/solutions" },
    { name: "Agents IA", href: "/agents" },
    { name: "Automatisation", href: "/solutions" },
    { name: "Formations", href: "/formations" },
  ],
  entreprise: [
    { name: "À propos", href: "/" },
    { name: "Méthode", href: "/methode" },
    { name: "Sécurité", href: "/methode" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Mentions légales", href: "#" },
    { name: "Politique de confidentialité", href: "#" },
    { name: "CGV", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-card/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img 
                src={logoDigkal} 
                alt="Digkal IA" 
                className="h-10 w-10 object-contain rounded-lg"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold">DIGKAL</span>
                <span className="text-xs font-medium text-primary tracking-widest">IA</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              L'intelligence artificielle au service de votre entreprise. 
              Solutions concrètes, sécurisées et rentables.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.entreprise.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Digkal IA. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Hébergé en France 🇫🇷
          </div>
        </div>
      </div>
    </footer>
  );
}
