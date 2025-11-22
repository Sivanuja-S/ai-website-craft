import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full mb-6 shadow-glow-accent animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold font-play">Start Your Journey Today</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 font-play animate-fade-in">
            Start Building Your AI-Powered Website Today
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-play animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Join thousands of businesses already using GamTechSol to create stunning, 
            high-performing websites in minutes. No credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground hover:shadow-glow-accent transition-all duration-300 font-play group text-lg px-8"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 font-play text-lg px-8"
            >
              Schedule a Demo
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>
              <span className="font-play">No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>
              <span className="font-play">Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>
              <span className="font-play">Free forever plan available</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-border animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-play">10K+</div>
                <div className="text-sm text-muted-foreground font-play">Active Users</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-play">50K+</div>
                <div className="text-sm text-muted-foreground font-play">Websites Created</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-play">98%</div>
                <div className="text-sm text-muted-foreground font-play">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-play">24/7</div>
                <div className="text-sm text-muted-foreground font-play">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
