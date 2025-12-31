import React, { useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ExpandableFAB } from "../ExpandableFAB";
import { useLocation } from "wouter";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export function Layout({ 
  children, 
  title = "Centre Dentaire Easy Dent - Dentiste Port-de-Bouc | Urgences & Luxe",
  description = "Découvrez le Centre Dentaire Easy Dent à Port-de-Bouc. Soins dentaires de luxe, urgences 7j/7, technologie 3D et équipe de spécialistes diplômés."
}: LayoutProps) {
  const [pathname] = useLocation();

  // Scroll to top and SEO update on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
  }, [pathname, title, description]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      
      <ExpandableFAB />

      <Footer />
    </div>
  );
}
