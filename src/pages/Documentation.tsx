import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Sparkles, CheckCircle, ArrowRight } from "lucide-react";

const Documentation = () => {
  const steps = [
    {
      number: "01",
      title: "Enter Business Details",
      description: "Tell our AI about your business, industry, target audience, and goals. The more details you provide, the better your website will be.",
      features: ["Business name and description", "Target audience information", "Design preferences", "Content requirements"]
    },
    {
      number: "02",
      title: "AI Creates Wireframe",
      description: "Our intelligent AI analyzes your requirements and generates a custom wireframe optimized for your specific needs.",
      features: ["Smart layout generation", "Industry-specific templates", "Mobile-responsive design", "UX optimization"]
    },
    {
      number: "03",
      title: "AI Generates Content + Branding",
      description: "Watch as AI creates compelling content, selects colors, fonts, and generates a cohesive brand identity.",
      features: ["SEO-optimized content", "Brand color palettes", "Typography selection", "Image suggestions"]
    },
    {
      number: "04",
      title: "Customize with Live Editor",
      description: "Fine-tune every aspect of your website using our intuitive drag-and-drop editor with real-time preview.",
      features: ["Visual editing tools", "Component library", "Real-time preview", "Unlimited revisions"]
    },
    {
      number: "05",
      title: "One-Click Deployment",
      description: "Launch your website to the world with a single click. SSL, CDN, and optimization are handled automatically.",
      features: ["Instant deployment", "SSL certificates", "Global CDN", "Performance optimization"]
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
              <div className="inline-flex items-center space-x-2 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold font-play">How It Works</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 font-play">
                From Idea to Live Website in 5 Simple Steps
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-play">
                Our AI-powered process makes website creation effortless and efficient.
              </p>
            </div>
          </div>
        </section>

        {/* Step-by-Step Workflow */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center text-3xl font-bold text-primary-foreground font-play shadow-glow-accent">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-card border border-border rounded-2xl p-8 hover:shadow-elegant transition-all duration-300">
                      <h3 className="text-2xl font-bold text-primary mb-4 font-play">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 font-play">
                        {step.description}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {step.features.map((feature, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-sm text-foreground font-play">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute left-10 top-20 w-0.5 h-12 bg-gradient-to-b from-primary to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Preview Section */}
        <section className="py-20 bg-gradient-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-play">
                  See the AI Dashboard in Action
                </h2>
                <p className="text-lg text-muted-foreground font-play">
                  Watch as AI assembles components in real-time to create your perfect website.
                </p>
              </div>

              <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="bg-background rounded-2xl shadow-elegant border border-border p-8">
                  {/* Mock Dashboard */}
                  <div className="aspect-video bg-gradient-to-br from-secondary via-background to-secondary rounded-xl border border-border flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-white/5"></div>
                    <div className="relative z-10 text-center">
                      <Sparkles className="w-16 h-16 text-primary mx-auto mb-4 animate-float" />
                      <h3 className="text-2xl font-bold text-primary mb-2 font-play">
                        AI Dashboard Preview
                      </h3>
                      <p className="text-muted-foreground font-play">
                        Real-time component assembly visualization
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-accent opacity-10 animate-pulse"></div>
                  </div>

                  {/* Features */}
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2 font-play">2.5s</div>
                      <div className="text-sm text-muted-foreground font-play">Average Generation Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2 font-play">100%</div>
                      <div className="text-sm text-muted-foreground font-play">Mobile Responsive</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2 font-play">A+</div>
                      <div className="text-sm text-muted-foreground font-play">SEO Score</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-play">
                Ready to Build Your Website?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 font-play">
                Start your journey today and experience the power of AI-driven web creation.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-primary text-primary-foreground hover:shadow-glow-accent transition-all duration-300 font-play group"
              >
                Start Building Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Documentation;
