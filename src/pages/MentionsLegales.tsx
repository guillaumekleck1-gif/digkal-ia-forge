import { Layout } from "@/components/layout/Layout";

export default function MentionsLegales() {
  return (
    <Layout>
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Mentions légales</h1>
          
          <div className="space-y-8 text-muted-foreground">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Éditeur du site</h2>
              <p className="mb-4">Le site digkal.com est édité par :</p>
              <ul className="space-y-2 list-none">
                <li><strong className="text-foreground">Raison sociale :</strong> Digkal Logiciel</li>
                <li><strong className="text-foreground">Forme juridique :</strong> SAS</li>
                <li><strong className="text-foreground">Siège social :</strong> Alsace, France</li>
                <li><strong className="text-foreground">SIRET :</strong> 98432219800024</li>
                <li><strong className="text-foreground">Email :</strong> <a href="mailto:contact@digkal.fr" className="text-primary hover:underline">contact@digkal.fr</a></li>
                <li><strong className="text-foreground">Téléphone :</strong> <a href="tel:+33678015732" className="text-primary hover:underline">06 78 01 57 32</a></li>
                <li><strong className="text-foreground">Directeur de la publication :</strong> Digkal</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Groupe Digkal</h2>
              <p className="mb-4">Digkal Logiciel fait partie du groupe Digkal, spécialisé dans les solutions numériques innovantes :</p>
              <ul className="space-y-2 list-none">
                <li>
                  <strong className="text-foreground">Groupe Digkal :</strong>{" "}
                  <a href="https://digkal.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    digkal.fr
                  </a>{" "}
                  - Site officiel du groupe
                </li>
                <li>
                  <strong className="text-foreground">Création de sites web :</strong>{" "}
                  <a href="https://digkal-web.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    digkal-web.fr
                  </a>{" "}
                  - Conception et développement de sites internet professionnels
                </li>
                <li>
                  <strong className="text-foreground">Solutions Intelligence Artificielle :</strong>{" "}
                  <a href="https://digkal-ia.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    digkal-ia.fr
                  </a>{" "}
                  - Solutions d'IA pour entreprises
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Hébergement</h2>
              <p className="mb-4">Le site est hébergé par :</p>
              <ul className="space-y-2 list-none">
                <li><strong className="text-foreground">Hébergeur :</strong> Digkal</li>
                <li><strong className="text-foreground">Adresse :</strong> Alsace, France</li>
                <li><strong className="text-foreground">Téléphone :</strong> <a href="tel:+33678015732" className="text-primary hover:underline">06 78 01 57 32</a></li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Propriété intellectuelle</h2>
              <p>
                L'ensemble des éléments constituant ce site (textes, graphismes, logiciels, photographies, images, vidéos, sons, plans, logos, marques, etc.) sont la propriété exclusive de Digkal Logiciel ou de ses partenaires. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitation de responsabilité</h2>
              <p>
                Digkal Logiciel s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Cookies</h2>
              <p>
                Le site peut être amené à vous demander l'acceptation des cookies pour des besoins de statistiques et d'affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez. Pour plus d'informations, consultez notre politique de confidentialité.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Droit applicable</h2>
              <p>
                Tout litige en relation avec l'utilisation du site est soumis au droit français. Les tribunaux français sont seuls compétents.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
