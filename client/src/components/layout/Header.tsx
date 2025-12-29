import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button-custom";
import { cn } from "@/lib/utils";
import logoImg from "@assets/logo_1766941636458.jpg";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "La Clinique", href: "/clinique" },
    { name: "L'Équipe", href: "/equipe" },
    { name: "Galerie", href: "/galerie" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-white/20 py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-lg bg-white shadow-md">
              <img src={logoImg} alt="Easy Dent" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className={cn("text-lg md:text-xl font-bold font-display leading-tight", isScrolled ? "text-secondary" : "text-secondary md:text-white md:drop-shadow-md")}>
                Centre Dentaire
              </span>
              <span className={cn("text-xs md:text-sm font-medium tracking-wider", isScrolled ? "text-primary" : "text-primary md:text-white/90 md:drop-shadow-md")}>
                EASY DENT
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-semibold uppercase tracking-wide transition-colors relative group py-2",
                  location === link.href 
                    ? "text-accent" 
                    : isScrolled ? "text-secondary hover:text-primary" : "text-white hover:text-accent drop-shadow-md"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                  location === link.href && "scale-x-100"
                )} />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:0442752471" className="flex items-center gap-2 text-sm font-bold text-accent hover:text-accent/80 transition-colors bg-secondary/90 px-4 py-2 rounded-full shadow-lg">
              <Phone className="w-4 h-4" />
              <span>Urgence: 04 42 75 24 71</span>
            </a>
            <Button 
              variant="primary" 
              size="sm"
              onClick={() => window.open('https://www.doctolib.fr', '_blank')}
              leftIcon={<Calendar className="w-4 h-4" />}
            >
              Prendre RDV
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn("hamburger lg:hidden", isMobileMenuOpen && "active")}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Side Drawer Overlay */}
      <div 
        className={cn("drawer-overlay", isMobileMenuOpen && "active")} 
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Side Drawer */}
      <div className={cn("side-drawer", isMobileMenuOpen && "open")}>
        <button 
          className="close-drawer" 
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Fermer le menu"
        >
          <X className="w-6 h-6 text-secondary" />
        </button>

        <nav className="flex flex-col gap-6 pt-24 px-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-2xl font-display font-bold transition-colors",
                location === link.href ? "text-primary" : "text-secondary hover:text-primary"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-muted my-4" />
          <Button 
            variant="primary" 
            className="w-full justify-center font-bold"
            onClick={() => {
              window.open('https://www.doctolib.fr', '_blank');
              setIsMobileMenuOpen(false);
            }}
          >
            Prendre Rendez-vous
          </Button>
          <a 
            href="tel:0442752471" 
            className="flex items-center justify-center gap-2 text-primary font-bold bg-muted p-4 rounded-xl hover:bg-muted/80 transition-colors"
          >
            <Phone className="w-5 h-5" />
            04 42 75 24 71
          </a>
        </nav>
      </div>
    </header>
  );
}
