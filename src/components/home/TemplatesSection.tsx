import { Button } from "@/components/ui/button";
import { Store, Briefcase, GraduationCap, Rocket, Building2, Palette } from "lucide-react";

const TemplatesSection = () => {
  const templates = [
    {
      icon: Store,
      title: "E-Commerce",
      description: "Full-featured online stores with cart and checkout",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Briefcase,
      title: "Agency",
      description: "Professional portfolio and service showcase",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: GraduationCap,
      title: "Learning Management",
      description: "Complete LMS with course management",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Startup",
      description: "Modern landing pages for new ventures",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Building2,
      title: "Business",
      description: "Corporate websites with CMS integration",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Palette,
      title: "Portfolio",
      description: "Creative showcases for designers and artists",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 font-play">
            AI-Generated Templates for Every Need
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-play">
            Choose from our rotating collection of professionally designed templates, 
            all generated and optimized by AI for your specific industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {templates.map((template, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl overflow-hidden border border-border hover:shadow-elegant hover:border-primary/50 transition-all duration-300 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-48 bg-gradient-to-br ${template.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-grid-white/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <template.icon className="w-20 h-20 text-white opacity-90 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2 font-play">
                  {template.title}
                </h3>
                <p className="text-muted-foreground mb-4 font-play">
                  {template.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-primary/50 text-primary hover:bg-primary/5 font-play"
                >
                  Preview Template
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Button 
            size="lg"
            className="bg-gradient-primary text-primary-foreground hover:shadow-glow-accent transition-all duration-300 font-play"
          >
            Explore All Templates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;
