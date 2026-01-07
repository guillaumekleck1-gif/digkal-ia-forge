import { Layout } from "@/components/layout/Layout";
import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag, Share2, Bookmark, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getArticleBySlug, getRelatedArticles, type Article } from "@/data/articles";
import ReactMarkdown from "react-markdown";

const TableOfContents = ({ items }: { items: Article["tableOfContents"] }) => (
  <nav className="bg-card rounded-xl p-6 border border-border sticky top-24">
    <h3 className="font-bold text-lg mb-4">Sommaire</h3>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="text-muted-foreground hover:text-primary transition-colors text-sm block py-1"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

const AuthorCard = ({ author }: { author: Article["author"] }) => (
  <div className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border">
    <img
      src={author.avatar}
      alt={author.name}
      className="w-16 h-16 rounded-full object-cover"
    />
    <div>
      <p className="font-bold">{author.name}</p>
      <p className="text-sm text-muted-foreground">{author.role}</p>
    </div>
  </div>
);

const RelatedArticles = ({ articles }: { articles: Article[] }) => (
  <section className="py-16 bg-muted/20">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-8">Articles similaires</h2>
      <div className="grid md:grid-cols-3 gap-8">
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
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : null;

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const relatedArticles = getRelatedArticles(article.id);

  // JSON-LD Schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Digkal",
      logo: {
        "@type": "ImageObject",
        url: "https://digkal.com/logo.png",
      },
    },
    datePublished: article.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://digkal.com/blog/${article.id}`,
    },
  };

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>

            {/* Category & Meta */}
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              {article.category}
            </Badge>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-muted-foreground mb-8">
              {article.excerpt}
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-foreground">{article.author.name}</p>
                  <p className="text-xs">{article.author.role}</p>
                </div>
              </div>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime} de lecture
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Featured Image */}
            <div className="aspect-video rounded-2xl overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {/* Sidebar - Table of Contents */}
            <aside className="hidden lg:block lg:col-span-1">
              <TableOfContents items={article.tableOfContents} />
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-3 prose prose-invert prose-lg max-w-none">
              <ReactMarkdown
                components={{
                  h2: ({ children, ...props }) => {
                    const id = children?.toString().toLowerCase()
                      .replace(/[^a-z0-9\s]/g, '')
                      .replace(/\s+/g, '-')
                      .replace(/\{#([^}]+)\}/, '$1');
                    const text = children?.toString().replace(/\{#[^}]+\}/, '');
                    return <h2 id={id} className="text-2xl font-bold mt-12 mb-4 text-foreground scroll-mt-24" {...props}>{text}</h2>;
                  },
                  h3: ({ children, ...props }) => (
                    <h3 className="text-xl font-bold mt-8 mb-3 text-foreground" {...props}>{children}</h3>
                  ),
                  p: ({ children, ...props }) => (
                    <p className="text-muted-foreground mb-4 leading-relaxed" {...props}>{children}</p>
                  ),
                  ul: ({ children, ...props }) => (
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6" {...props}>{children}</ul>
                  ),
                  ol: ({ children, ...props }) => (
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6" {...props}>{children}</ol>
                  ),
                  li: ({ children, ...props }) => (
                    <li className="text-muted-foreground" {...props}>{children}</li>
                  ),
                  strong: ({ children, ...props }) => (
                    <strong className="text-foreground font-semibold" {...props}>{children}</strong>
                  ),
                  blockquote: ({ children, ...props }) => (
                    <blockquote className="border-l-4 border-primary pl-4 py-2 my-6 bg-primary/5 rounded-r-lg" {...props}>
                      {children}
                    </blockquote>
                  ),
                  table: ({ children, ...props }) => (
                    <div className="overflow-x-auto my-6">
                      <table className="w-full border-collapse border border-border rounded-lg" {...props}>{children}</table>
                    </div>
                  ),
                  th: ({ children, ...props }) => (
                    <th className="border border-border bg-muted px-4 py-2 text-left font-semibold text-foreground" {...props}>{children}</th>
                  ),
                  td: ({ children, ...props }) => (
                    <td className="border border-border px-4 py-2 text-muted-foreground" {...props}>{children}</td>
                  ),
                  code: ({ children, className, ...props }) => {
                    const isInline = !className;
                    if (isInline) {
                      return <code className="bg-muted px-2 py-1 rounded text-sm text-primary" {...props}>{children}</code>;
                    }
                    return (
                      <code className="block bg-muted p-4 rounded-lg overflow-x-auto text-sm" {...props}>
                        {children}
                      </code>
                    );
                  },
                  pre: ({ children, ...props }) => (
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-6" {...props}>{children}</pre>
                  ),
                  a: ({ children, href, ...props }) => (
                    <a href={href} className="text-primary hover:underline" {...props}>{children}</a>
                  ),
                  hr: () => <hr className="my-8 border-border" />,
                }}
              >
                {article.content}
              </ReactMarkdown>

              {/* Share & Actions */}
              <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-border">
                <Button variant="outline" className="gap-2">
                  <Share2 className="w-4 h-4" />
                  Partager
                </Button>
                <Button variant="outline" className="gap-2">
                  <Bookmark className="w-4 h-4" />
                  Sauvegarder
                </Button>
              </div>

              {/* Author Card */}
              <div className="mt-12">
                <AuthorCard author={article.author} />
              </div>

              {/* CTA */}
              <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
                <h3 className="text-xl font-bold mb-2">Besoin d'un accompagnement IA ?</h3>
                <p className="text-muted-foreground mb-4">
                  Nos experts vous accompagnent dans votre transformation digitale avec l'intelligence artificielle.
                </p>
                <Button asChild>
                  <Link to="/contact">
                    Prendre rendez-vous
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && <RelatedArticles articles={relatedArticles} />}
    </Layout>
  );
};

export default BlogArticle;
