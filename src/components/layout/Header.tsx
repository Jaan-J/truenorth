import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-slow",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-elevated py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-narrow">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 rounded-lg bg-primary flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark" />
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="relative w-6 h-6 text-primary-foreground"
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
            <span className={cn(
              "font-semibold text-xl tracking-tight transition-colors",
              isScrolled ? "text-primary" : "text-primary-foreground group-hover:text-primary-foreground/80"
            )}>
              TrueNorth
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-fast link-underline",
                  isScrolled
                    ? isActive(item.href)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                    : isActive(item.href)
                      ? "text-primary-foreground"
                      : "text-primary-foreground/70 hover:text-primary-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/book">
              <Button 
                variant={isScrolled ? "secondary" : "hero"} 
                size="sm"
              >
                Book a Call
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "md:hidden p-2",
              isScrolled ? "text-primary" : "text-primary-foreground"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-slow",
            isMobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
          )}
        >
          <div className="bg-card rounded-xl p-4 shadow-elevated border border-border">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                    isActive(item.href)
                      ? "bg-primary/5 text-primary"
                      : "text-foreground hover:bg-muted"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-border my-2" />
              <Link to="/book" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="secondary" className="w-full">
                  Book a Call
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
