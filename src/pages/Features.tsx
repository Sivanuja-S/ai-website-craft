import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Wand2, Palette, Search, Layers, Zap, Shield, 
  Globe, BarChart, Code, Database, Users, Rocket 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Wand2,
      title: "AI Website Builder",
      description: "Transform your ideas into reality with our intelligent AI that understands your vision and creates pixel-perfect websites automatically.",
      benefits: ["Natural language input", "Smart layout generation", "Instant revisions"]
    },
    {
      icon: Layers,
      title: "Drag-and-Generate UI",
      description: "Combine the power of drag-and-drop simplicity with AI-powered generation for ultimate creative control.",
      benefits: ["Intuitive interface", "Component library", "Real-time preview"]
    },
    {
      icon: Palette,
      title: "Instant Brand Kit",
      description: "Generate complete brand identities including logos, color schemes, typography, and visual guidelines in seconds.",
      benefits: ["AI-powered design", "Professional templates", "Consistent branding"]
    },
    {
      icon: Search,
      title: "SEO Assistant",
      description: "Built-in SEO optimization with AI-driven keyword research, content suggestions, and automated meta tag generation.",
      benefits: ["Keyword analysis", "Content optimization", "Performance tracking"]
    },
    {
      icon: Zap,
      title: "One-Click Publishing",
      description: "Deploy your website instantly to the cloud with automatic SSL, CDN, and performance optimization.",
      benefits: ["Global CDN", "SSL certificates", "Auto-scaling"]
    },
    {
      icon: Globe,
      title: "Template Marketplace",
      description: "Access thousands of professionally designed, AI-optimized templates for every industry and use case.",
      benefits: ["Industry-specific", "Fully customizable", "Regular updates"]
    },
    {
      icon: BarChart,
      title: "Real-Time Dashboard Preview",
      description: "Monitor your website's performance with comprehensive analytics and insights powered by AI.",
      benefits: ["Live analytics", "User behavior tracking", "Conversion optimization"]
    },
    {
      icon: Code,
      title: "AI Page Structure Analyzer",
      description: "Automatically analyze and optimize your page structure for better UX and conversion rates.",
      benefits: ["Structure analysis", "UX recommendations", "A/B testing"]
    },
    {
      icon: Database,
      title: "Content Management",
      description: "Powerful CMS with AI-assisted content creation and automatic content optimization.",
      benefits: ["Easy content editing", "AI writing assistant", "Multi-language support"]
    },
    {
      icon: Users,
      title: "Collaboration Tools",
      description: "Work seamlessly with your team using real-time collaboration and AI-powered suggestions.",
      benefits: ["Team workspaces", "Version control", "Comment system"]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with automatic backups, DDoS protection, and compliance management.",
      benefits: ["Data encryption", "Regular backups", "GDPR compliant"]
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "AI-powered performance optimization ensures lightning-fast load times and perfect SEO scores.",
      benefits: ["Image optimization", "Code minification", "Lazy loading"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 font-play">
                All the Features You Need to Succeed
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-play">
                Discover the comprehensive suite of AI-powered tools designed to make 
                website creation effortless and effective.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-2xl p-8 hover:shadow-elegant hover:border-primary/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:shadow-glow-accent transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-3 font-play">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 font-play">
                    {feature.description}
                  </p>

                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                        <span className="text-muted-foreground font-play">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-play">
                Ready to Experience the Future?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 font-play">
                Start building your AI-powered website today with all these features and more.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-primary text-primary-foreground hover:shadow-glow-accent transition-all duration-300 font-play"
              >
                Get Started Now
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Features;
