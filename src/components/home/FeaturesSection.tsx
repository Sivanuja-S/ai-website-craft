import { Wand2, Palette, Search } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Wand2,
      title: "AI Website Builder",
      description: "Simply describe your vision and watch as our AI creates a fully functional, beautiful website tailored to your needs.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Palette,
      title: "Brand Kit Generator",
      description: "Instantly generate cohesive brand identities including logos, color palettes, typography, and style guides.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Search,
      title: "Instant SEO Content Planner",
      description: "AI-powered SEO optimization with keyword research, content strategy, and automated meta tag generation.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 font-play">
            3 Simple Features That Change Everything
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-play">
            Powerful AI capabilities designed to make website creation effortless and effective.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-elegant transition-all duration-300 h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:shadow-glow-accent transition-all duration-300 group-hover:scale-110`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-4 font-play">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed font-play">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Feature Highlights */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 animate-fade-in">
          <div className="bg-gradient-secondary rounded-2xl p-8 border border-border">
            <h4 className="text-xl font-bold text-primary mb-4 font-play">
              🚀 Built for Speed
            </h4>
            <p className="text-muted-foreground font-play">
              Our AI optimizes every aspect of your website for lightning-fast load times, 
              ensuring better SEO rankings and user experience.
            </p>
          </div>
          <div className="bg-gradient-secondary rounded-2xl p-8 border border-border">
            <h4 className="text-xl font-bold text-primary mb-4 font-play">
              🎨 Infinite Customization
            </h4>
            <p className="text-muted-foreground font-play">
              While AI does the heavy lifting, you maintain full control with intuitive 
              customization tools that require no coding knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
