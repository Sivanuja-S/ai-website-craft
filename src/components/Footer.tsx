import { NavLink } from "@/components/NavLink";
import { Sparkles, Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: "Features", path: "/features" },
      { name: "Documentation", path: "/documentation" },
      { name: "Pricing", path: "/pricing" },
      { name: "Contact", path: "/contact" },
    ],
    Company: [
      { name: "About", path: "#" },
      { name: "Blog", path: "#" },
      { name: "Careers", path: "#" },
      { name: "Partners", path: "#" },
    ],
    Legal: [
      { name: "Privacy Policy", path: "#" },
      { name: "Terms of Service", path: "#" },
      { name: "Cookie Policy", path: "#" },
      { name: "GDPR", path: "#" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-gradient-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-primary font-play">
                GamTechSol
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md font-play">
              Build websites smarter with AI. Instantly create modern, SEO-ready
              websites powered by intelligent automation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-glow-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-primary mb-4 font-play">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <NavLink
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 font-play"
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm font-play">
            © {currentYear} GamTechSol. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm font-play">
            Powered by AI Innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
