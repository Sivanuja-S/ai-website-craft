import { Sparkles, Zap, Target, Shield } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Generation",
      description: "Advanced AI algorithms create stunning websites in minutes, not days."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "From concept to launch in record time with our intelligent automation."
    },
    {
      icon: Target,
      title: "Precision Design",
      description: "Every element optimized for conversion and user experience."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with automatic backups and SSL certificates."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 font-play">
            The Next-Gen AI Website Creation Engine
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-play">
            GamTechSol combines cutting-edge artificial intelligence with intuitive design 
            to revolutionize how websites are built. Say goodbye to complex coding and hello 
            to intelligent automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-6 hover:shadow-elegant hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow-accent transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2 font-play">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-play">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-secondary rounded-2xl p-8 md:p-12 border border-border animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-play">
                Why Choose GamTechSol?
              </h3>
              <p className="text-muted-foreground mb-6 font-play">
                We're not just another website builder. We're your AI-powered partner 
                in digital transformation, combining machine learning with human creativity 
                to deliver exceptional results.
              </p>
              <ul className="space-y-3">
                {["No coding knowledge required", "SEO optimized from the start", "Unlimited revisions with AI", "24/7 automated support"].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-foreground font-play">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-primary rounded-xl flex items-center justify-center relative overflow-hidden shadow-elegant">
                <Sparkles className="w-20 h-20 text-primary-foreground animate-float" />
                <div className="absolute inset-0 bg-gradient-accent opacity-30 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
