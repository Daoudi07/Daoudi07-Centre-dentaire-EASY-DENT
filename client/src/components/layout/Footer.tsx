import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import logoImg from "@assets/logo_1766941636458.jpg";

export function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Easy Dent" className="w-12 h-12 rounded-lg" />
              <div>
                <h3 className="text-xl font-bold font-display text-white">EASY DENT</h3>
                <p className="text-xs text-white/60 uppercase tracking-widest">Centre Dentaire</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed">
              Une approche humaine et technologique pour votre sourire. 
              Notre équipe vous accompagne dans tous vos soins dentaires.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">Navigation</h4>
            <ul className="space-y-4">
              {[
                { label: "La Clinique", href: "/clinique" },
                { label: "Notre Équipe", href: "/equipe" },
                { label: "Traitements", href: "/clinique" },
                { label: "Galerie", href: "/galerie" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 hover:text-white hover:translate-x-1 transition-all inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>
                  39 Avenue du Groupe Manouchian<br />
                  13110 Port-de-Bouc<br />
                  France
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:0442752471" className="hover:text-white">04 42 75 24 71</a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:contact@easydent.fr" className="hover:text-white">contact@easydent.fr</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">Horaires</h4>
            <ul className="space-y-3 text-white/70">
              <li className="flex justify-between">
                <span>Lundi - Vendredi</span>
                <span className="font-medium text-white">09:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Samedi</span>
                <span className="font-medium text-white">Sur RDV</span>
              </li>
              <li className="flex justify-between">
                <span>Dimanche</span>
                <span className="text-accent">Fermé</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 text-accent mb-1">
                <Clock className="w-4 h-4" />
                <span className="font-bold text-sm">Urgences</span>
              </div>
              <p className="text-xs text-white/60">
                En cas d'urgence, contactez le 15 (SAMU) en dehors des horaires d'ouverture.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Centre Dentaire Easy Dent. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Mentions Légales</a>
            <a href="#" className="hover:text-white">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
