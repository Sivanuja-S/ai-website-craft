import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Startup Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      rating: 5,
      text: "GamTechSol transformed our online presence in days, not months. The AI understood exactly what we needed and delivered beyond expectations."
    },
    {
      name: "Michael Chen",
      role: "E-Commerce Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      rating: 5,
      text: "The AI-powered SEO features alone saved us thousands in consulting fees. Our organic traffic doubled in the first month!"
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Agency Owner",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      rating: 5,
      text: "As a designer, I'm impressed by the quality of AI-generated layouts. It's like having a senior designer on demand, 24/7."
    },
    {
      name: "David Park",
      role: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      rating: 5,
      text: "The brand kit generator is phenomenal. We created a complete brand identity in minutes that would've taken weeks traditionally."
    }
  ];

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 font-play">
            Loved by Thousands of Businesses
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-play">
            See what our clients say about transforming their digital presence with AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl p-6 border border-border hover:shadow-elegant hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 font-play leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-border group-hover:border-primary transition-colors duration-300"
                />
                <div>
                  <div className="font-bold text-primary font-play">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground font-play">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="text-muted-foreground font-play">Trusted by 10,000+ businesses</div>
          <div className="w-px h-8 bg-border"></div>
          <div className="text-muted-foreground font-play">4.9/5 Average Rating</div>
          <div className="w-px h-8 bg-border"></div>
          <div className="text-muted-foreground font-play">24/7 Support</div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
