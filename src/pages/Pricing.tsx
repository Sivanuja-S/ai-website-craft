import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals and small projects",
      features: [
        "5 AI-generated websites",
        "Basic brand kit generator",
        "SEO assistant",
        "5GB storage",
        "Community support",
        "SSL certificate",
        "Mobile responsive",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "Unlimited AI-generated websites",
        "Advanced brand kit generator",
        "Full SEO suite",
        "50GB storage",
        "Priority support",
        "SSL certificate",
        "Mobile responsive",
        "Advanced analytics",
        "A/B testing",
        "Custom domain",
        "Team collaboration (5 users)",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with custom needs",
      features: [
        "Everything in Pro",
        "Unlimited storage",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom AI training",
        "White-label solution",
        "Advanced security",
        "SLA guarantee",
        "Unlimited team members",
        "Custom integrations",
        "On-premise deployment option",
        "Training & onboarding"
      ],
      popular: false
    }
  ];

  const comparisonFeatures = [
    {
      category: "Core Features",
      items: [
        { name: "AI Website Builder", starter: true, pro: true, enterprise: true },
        { name: "Brand Kit Generator", starter: "Basic", pro: "Advanced", enterprise: "Custom" },
        { name: "SEO Assistant", starter: "Basic", pro: "Full Suite", enterprise: "Full Suite" },
        { name: "Website Limit", starter: "5", pro: "Unlimited", enterprise: "Unlimited" },
      ]
    },
    {
      category: "Storage & Performance",
      items: [
        { name: "Storage", starter: "5GB", pro: "50GB", enterprise: "Unlimited" },
        { name: "SSL Certificate", starter: true, pro: true, enterprise: true },
        { name: "CDN", starter: true, pro: true, enterprise: true },
        { name: "Uptime SLA", starter: false, pro: "99.9%", enterprise: "99.99%" },
      ]
    },
    {
      category: "Collaboration",
      items: [
        { name: "Team Members", starter: "1", pro: "5", enterprise: "Unlimited" },
        { name: "API Access", starter: false, pro: true, enterprise: true },
        { name: "White Label", starter: false, pro: false, enterprise: true },
      ]
    },
    {
      category: "Support",
      items: [
        { name: "Email Support", starter: true, pro: true, enterprise: true },
        { name: "Priority Support", starter: false, pro: true, enterprise: true },
        { name: "Phone Support", starter: false, pro: false, enterprise: true },
        { name: "Dedicated Manager", starter: false, pro: false, enterprise: true },
      ]
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
                Simple, Transparent Pricing
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-play">
                Choose the perfect plan for your needs. All plans include 14-day free trial.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-card border rounded-2xl p-8 animate-fade-in ${
                    plan.popular 
                      ? 'border-primary shadow-elegant scale-105' 
                      : 'border-border hover:border-primary/50'
                  } transition-all duration-300`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold font-play flex items-center space-x-1">
                        <Sparkles className="w-4 h-4" />
                        <span>Most Popular</span>
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-primary mb-2 font-play">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl md:text-5xl font-bold text-primary font-play">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground ml-2 font-play">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm font-play">
                      {plan.description}
                    </p>
                  </div>

                  <Button 
                    className={`w-full mb-8 font-play ${
                      plan.popular 
                        ? 'bg-gradient-primary text-primary-foreground hover:shadow-glow-accent' 
                        : 'border-primary text-primary hover:bg-primary/5'
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                  </Button>

                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground font-play text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-gradient-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-play">
                  Compare All Features
                </h2>
                <p className="text-lg text-muted-foreground font-play">
                  Detailed comparison of features across all plans
                </p>
              </div>

              <div className="bg-background rounded-2xl shadow-elegant border border-border overflow-hidden">
                {comparisonFeatures.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="border-b border-border last:border-b-0">
                    <div className="bg-secondary/50 px-6 py-4">
                      <h3 className="font-bold text-primary font-play">{section.category}</h3>
                    </div>
                    {section.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="grid grid-cols-4 gap-4 px-6 py-4 hover:bg-secondary/30 transition-colors"
                      >
                        <div className="col-span-1 font-play text-foreground">{item.name}</div>
                        <div className="text-center">
                          {typeof item.starter === 'boolean' ? (
                            item.starter ? (
                              <Check className="w-5 h-5 text-primary mx-auto" />
                            ) : (
                              <span className="text-muted-foreground">—</span>
                            )
                          ) : (
                            <span className="font-play text-foreground">{item.starter}</span>
                          )}
                        </div>
                        <div className="text-center">
                          {typeof item.pro === 'boolean' ? (
                            item.pro ? (
                              <Check className="w-5 h-5 text-primary mx-auto" />
                            ) : (
                              <span className="text-muted-foreground">—</span>
                            )
                          ) : (
                            <span className="font-play text-foreground">{item.pro}</span>
                          )}
                        </div>
                        <div className="text-center">
                          {typeof item.enterprise === 'boolean' ? (
                            item.enterprise ? (
                              <Check className="w-5 h-5 text-primary mx-auto" />
                            ) : (
                              <span className="text-muted-foreground">—</span>
                            )
                          ) : (
                            <span className="font-play text-foreground">{item.enterprise}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-play">
                Still Have Questions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 font-play">
                Our team is here to help you choose the right plan for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-primary text-primary-foreground hover:shadow-glow-accent transition-all duration-300 font-play"
                >
                  Contact Sales
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5 font-play"
                >
                  View FAQ
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
