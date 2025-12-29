import React, { useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useLocation } from "wouter";
import { Phone } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [pathname] = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Mobile Urgence Button */}
      <a href="tel:0442752471" className="mobile-urgence-btn">
        <Phone className="w-5 h-5" />
        Urgence
      </a>

      <Footer />
    </div>
  );
}
