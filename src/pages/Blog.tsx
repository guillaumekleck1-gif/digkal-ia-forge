import { Layout } from "@/components/layout/Layout";
import { Calendar, Clock, ArrowRight, Tag, Search, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { articles, categories, popularTags, getFeaturedArticle } from "@/data/articles";

const featuredArticle = getFeaturedArticle();

const Blog = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              <TrendingUp className="w-3 h-3 mr-1" />
              Blog IA & Innovation
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Tout Savoir sur l'
              <span className="text-primary">Intelligence Artificielle</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Guides pratiques, comparatifs des meilleures plateformes IA, et conseils d'experts 
              pour transformer votre entreprise avec l'intelligence artificielle.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Rechercher un article... (ex: agents IA, ChatGPT, automatisation)"
                className="pl-12 pr-4 py-6 text-lg rounded-full border-2 border-muted focus:border-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-primary" />
            Article à la Une
          </h2>
          
          <Link to={`/blog/${featuredArticle.id}`} className="group block">
            <div className="grid md:grid-cols-2 gap-8 bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
              <div className="aspect-video md:aspect-auto overflow-hidden">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                  {featuredArticle.category}
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {featuredArticle.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredArticle.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredArticle.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredArticle.readTime} de lecture
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Articles Grid */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold mb-8">Derniers Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {articles.map((article) => (
                  <Link 
                    key={article.id} 
                    to={`/blog/${article.id}`}
                    className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20 text-xs">
                        {article.category}
                      </Badge>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" className="group">
                  Voir plus d'articles
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              {/* Categories */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-primary" />
                  Catégories
                </h3>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat.name}>
                      <button className="w-full flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted transition-colors text-left">
                        <span>{cat.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {cat.count}
                        </Badge>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-bold text-lg mb-4">Tags Populaires</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                <h3 className="font-bold text-lg mb-2">Newsletter IA</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Recevez chaque semaine les dernières actualités IA et nos conseils d'experts.
                </p>
                <Input 
                  placeholder="Votre email"
                  className="mb-3"
                />
                <Button className="w-full">
                  S'abonner
                </Button>
              </div>

              {/* CTA */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-bold text-lg mb-2">Besoin d'un Expert IA ?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Nos consultants vous accompagnent dans votre transformation IA.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contact">
                    Prendre RDV
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SEO FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Questions Fréquentes sur l'Intelligence Artificielle
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Réponses aux questions les plus posées sur l'IA, les agents IA et l'automatisation
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  q: "Qu'est-ce qu'un agent IA ?",
                  a: "Un agent IA est un programme autonome capable d'exécuter des tâches complexes : répondre aux clients, qualifier des leads, rédiger des documents, analyser des données. Il travaille 24h/24 sans intervention humaine."
                },
                {
                  q: "Quelle est la meilleure plateforme IA en 2025 ?",
                  a: "ChatGPT-4 excelle en polyvalence, Claude en raisonnement et textes longs, Gemini en multimodal. Le choix dépend de vos besoins : rédaction, analyse, code, ou conversation."
                },
                {
                  q: "Comment automatiser mon entreprise avec l'IA ?",
                  a: "Identifiez les tâches répétitives (emails, prospection, support), choisissez les outils adaptés, et déployez progressivement. Digkal vous accompagne de l'audit à l'intégration."
                },
                {
                  q: "L'IA peut-elle remplacer mes employés ?",
                  a: "L'IA augmente vos équipes plutôt qu'elle ne les remplace. Elle automatise les tâches chronophages pour que vos collaborateurs se concentrent sur la valeur ajoutée."
                },
                {
                  q: "Combien coûte l'intégration d'agents IA ?",
                  a: "Les coûts varient selon la complexité : de quelques centaines d'euros pour un chatbot simple à plusieurs milliers pour une solution sur-mesure. Le ROI est généralement atteint en 3-6 mois."
                },
                {
                  q: "L'IA est-elle sécurisée pour mon entreprise ?",
                  a: "Avec les bonnes pratiques (données chiffrées, accès contrôlés, conformité RGPD), l'IA est sécurisée. Digkal garantit des déploiements conformes aux normes européennes."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-bold mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
