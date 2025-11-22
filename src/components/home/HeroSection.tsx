import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full mb-6 shadow-glow-accent">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold font-play">AI-Powered Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 font-play leading-tight">
              Build Websites Smarter with AI
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 font-play">
              Instantly create modern, SEO-ready websites powered by intelligent automation. 
              No coding required, just describe your vision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground hover:shadow-glow-accent transition-all duration-300 font-play group"
              >
                Create My Website
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 font-play"
              >
                See AI in Action
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-primary font-play">10K+</div>
                <div className="text-sm text-muted-foreground font-play">Sites Created</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-primary font-play">98%</div>
                <div className="text-sm text-muted-foreground font-play">Satisfaction</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-primary font-play">24/7</div>
                <div className="text-sm text-muted-foreground font-play">AI Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - AI Animation */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative bg-background rounded-2xl shadow-elegant p-6 border border-border">
              {/* Mock AI Dashboard */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <h3 className="font-bold text-primary font-play">AI Website Builder</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-destructive"></div>
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                </div>
                
                {/* Animated Building Blocks */}
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="h-16 bg-gradient-secondary rounded-lg border border-border animate-slide-in relative overflow-hidden"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      <div 
                        className="absolute inset-0 bg-gradient-accent opacity-20 animate-pulse"
                        style={{ animationDelay: `${i * 0.3}s` }}
                      ></div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center justify-center space-x-2 text-muted-foreground">
                  <Sparkles className="w-4 h-4 animate-glow" />
                  <span className="text-sm font-play">AI Generating Your Website...</span>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-accent opacity-20 blur-xl -z-10 animate-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
