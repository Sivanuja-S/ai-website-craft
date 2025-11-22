import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "hello@gamtechsol.com",
      link: "mailto:hello@gamtechsol.com"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Office",
      content: "123 Tech Street, San Francisco, CA 94105",
      link: "#"
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
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-play">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <div className="bg-card border border-border rounded-2xl p-8 shadow-elegant">
                  <h2 className="text-2xl font-bold text-primary mb-6 font-play">
                    Send us a Message
                  </h2>
                  
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName" className="font-play">First Name</Label>
                        <Input 
                          id="firstName" 
                          placeholder="John" 
                          className="mt-2 font-play"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="font-play">Last Name</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Doe" 
                          className="mt-2 font-play"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="font-play">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        className="mt-2 font-play"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company" className="font-play">Company</Label>
                      <Input 
                        id="company" 
                        placeholder="Your Company" 
                        className="mt-2 font-play"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="font-play">Subject</Label>
                      <Input 
                        id="subject" 
                        placeholder="How can we help?" 
                        className="mt-2 font-play"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="font-play">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about your project..."
                        rows={6}
                        className="mt-2 font-play resize-none"
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow-accent transition-all duration-300 font-play"
                      size="lg"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4 font-play">
                      Contact Information
                    </h2>
                    <p className="text-muted-foreground font-play mb-8">
                      Reach out to us through any of these channels. Our team is available 24/7 to assist you.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.link}
                        className="flex items-start space-x-4 p-6 bg-card border border-border rounded-xl hover:shadow-elegant hover:border-primary/50 transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow-accent transition-all duration-300 flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-bold text-primary mb-1 font-play">
                            {info.title}
                          </h3>
                          <p className="text-muted-foreground font-play">
                            {info.content}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* AI Chatbot CTA */}
                  <div className="bg-gradient-secondary border border-border rounded-2xl p-8 mt-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary mb-2 font-play">
                          AI Assistant
                        </h3>
                        <p className="text-muted-foreground mb-4 font-play">
                          Need instant help? Chat with our AI assistant available 24/7.
                        </p>
                        <Button 
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary/5 font-play"
                        >
                          Start Chat
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Map Placeholder */}
                  <div className="bg-gradient-to-br from-secondary via-background to-secondary rounded-2xl border border-border p-8 flex items-center justify-center h-64">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground font-play">
                        Office Location Map
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Hours */}
        <section className="py-20 bg-gradient-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-play">
                  Business Hours
                </h2>
                <p className="text-lg text-muted-foreground font-play">
                  Our team is available during these hours
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background rounded-xl p-6 border border-border">
                  <h3 className="font-bold text-primary mb-4 font-play">Support Hours</h3>
                  <div className="space-y-2 text-muted-foreground font-play">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>

                <div className="bg-background rounded-xl p-6 border border-border">
                  <h3 className="font-bold text-primary mb-4 font-play">AI Support</h3>
                  <div className="space-y-2 text-muted-foreground font-play">
                    <div className="flex justify-between">
                      <span>Availability</span>
                      <span className="text-primary font-semibold">24/7</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Response Time</span>
                      <span className="text-primary font-semibold">Instant</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Languages</span>
                      <span className="text-primary font-semibold">100+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
