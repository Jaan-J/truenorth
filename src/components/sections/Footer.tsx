import { 
  Linkedin, 
  Twitter, 
  Mail,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const navigation = {
  services: [
    { name: "Clarity Session", href: "/services" },
    { name: "Credit & Debt Reset", href: "/services" },
    { name: "Group Workshops", href: "/services" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Book a Call", href: "/book" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Email", icon: Mail, href: "mailto:hello@truenorth.com" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-narrow py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6 text-primary-foreground"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L12 22" />
                  <path d="M12 2L16 6" />
                  <path d="M12 2L8 6" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3" />
                </svg>
              </div>
              <span className="font-semibold text-xl tracking-tight">
                TrueNorth
              </span>
            </Link>
            
            <p className="text-primary-foreground/60 mb-6 max-w-xs">
              Financial coaching that prioritizes clarity, education, and your peace of mind.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <a href="mailto:hello@truenorth.com" className="flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>hello@truenorth.com</span>
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation Columns */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">
              Services
            </h4>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">
              Company
            </h4>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">
              Legal
            </h4>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Disclaimer */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-narrow py-6">
          <p className="text-xs text-primary-foreground/40 text-center max-w-3xl mx-auto">
            TrueNorth provides financial coaching and education services, not investment advice, 
            financial planning, or tax preparation. We are not licensed financial advisors. 
            Coaching is not a substitute for professional financial, legal, or tax advice. 
            Please consult appropriate professionals for specific financial decisions.
          </p>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-narrow py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
          <p>
            © {new Date().getFullYear()} TrueNorth Financial Coaching. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
