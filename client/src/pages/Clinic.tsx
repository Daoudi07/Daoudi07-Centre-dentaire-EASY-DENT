import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import equipmentImg from "@assets/attrezzatura_1766941636444.jpg";
import roomImg from "@assets/sala.jpn_1766941636457.webp";
import waitingImg from "@assets/attesa3_1766941636452.jpg";

import stockClinic from "@assets/stock_images/modern_dental_clinic_4b1334f0.jpg";

export default function Clinic() {
  return (
    <Layout>
      <section className="section-hero" style={{ backgroundImage: `url(${stockClinic})` }}>
        <div className="section-hero-title">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl uppercase"
          >
            Notre Clinique
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-medium text-white/80 mt-4"
          >
            L'excellence technologique au service de votre sourire.
          </motion.p>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-display mb-6 text-primary">Technologie Avancée</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Nous investissons continuellement dans les dernières technologies dentaires pour garantir des diagnostics précis et des traitements moins invasifs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Notre plateau technique comprend la radiologie numérique 3D, des scanners intra-oraux pour des empreintes sans pâte, et des systèmes de stérilisation de grade hospitalier.
            </p>
          </div>
          <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-2xl">
            <img src={equipmentImg} alt="Technologie dentaire" className="w-full h-auto hover:scale-105 transition-transform duration-700" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src={waitingImg} alt="Salle d'attente confort" className="w-full h-auto hover:scale-105 transition-transform duration-700" />
          </div>
          <div>
            <h2 className="text-3xl font-display mb-6 text-primary">Confort & Sérénité</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Oubliez l'angoisse du dentiste. Notre clinique a été pensée comme un lieu de vie apaisant. 
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Situé au 39 Avenue du Groupe Manouchian à Port-de-Bouc, notre centre vous accueille du lundi au vendredi de 09h00 à 12h00 et de 14h00 à 18h00.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Dès la salle d'attente, profitez d'une ambiance calme, d'une décoration soignée et d'un accueil chaleureux par notre équipe administrative dévouée.
            </p>
          </div>
        </div>
      </Section>

      <Section variant="muted" className="text-center">
        <h2 className="text-3xl font-display mb-12">Nos Espaces de Soin</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[roomImg, equipmentImg, waitingImg].map((src, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl overflow-hidden shadow-lg h-64 group cursor-pointer"
            >
              <img src={src} alt="Espace clinique" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
