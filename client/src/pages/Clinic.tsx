import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import equipmentImg from "@assets/attrezzatura_1766941636444.jpg";
import roomImg from "@assets/sala.jpn_1766941636457.webp";
import waitingImg from "@assets/attesa3_1766941636452.jpg";
import scanner3D from "@assets/stock_images/3d_dental_scanner_ma_016a0eac.jpg";
import panoramicXray from "@assets/stock_images/panoramic_dental_x-r_968f4dcc.jpg";

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
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="rounded-2xl overflow-hidden shadow-2xl relative group">
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img 
              src={roomImg} 
              alt="Notre cabinet" 
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" 
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6">L'Excellence au service de votre santé</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Le Centre Dentaire Easy Dent est dédié à fournir des soins dentaires de la plus haute qualité dans un environnement luxueux et apaisant. Notre équipe de praticiens expérimentés utilise les technologies les plus avancées pour garantir des traitements précis et confortables.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "Hygiène Rigoureuse", desc: "Protocoles de stérilisation de pointe pour votre sécurité." },
                { title: "Technologie de Pointe", desc: "Scanner 3D et radiologie numérique de dernière génération." },
                { title: "Empathie & Écoute", desc: "Une approche douce pour une expérience sans stress." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-muted rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  <div>
                    <h4 className="font-bold text-secondary">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-display mb-6 text-primary">Plateau Technique de Pointe</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Nous investissons continuellement dans les dernières technologies dentaires pour garantir des diagnostics précis et des traitements moins invasifs.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 items-center bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                <img src={scanner3D} alt="3D Dental Scanner" className="w-20 h-20 object-cover rounded-lg" />
                <div>
                  <h4 className="font-bold text-secondary">Scanner Dentaire 3D</h4>
                  <p className="text-sm text-muted-foreground">Imagerie haute résolution pour une précision chirurgicale.</p>
                </div>
              </div>
              <div className="flex gap-4 items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <img src={panoramicXray} alt="Panoramic X-ray" className="w-20 h-20 object-cover rounded-lg" />
                <div>
                  <h4 className="font-bold text-secondary">Radiographie Panoramique</h4>
                  <p className="text-sm text-muted-foreground">Diagnostic global rapide et efficace.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-2xl">
            <img src={equipmentImg} alt="Technologie dentaire" className="w-full h-auto hover:scale-105 transition-transform duration-700" />
          </div>
        </div>

        {/* Patient Journey Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-display font-bold text-center text-secondary mb-16">Votre parcours chez Easy Dent</h2>
          <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 md:border-l-0 md:flex md:justify-between">
            {[
              { step: "01", title: "Accueil", desc: "Prise en charge personnalisée dès votre arrivée." },
              { step: "02", title: "Diagnostic", desc: "Bilan complet avec imagerie numérique 3D." },
              { step: "03", title: "Plan de Soins", desc: "Explication détaillée des options et devis clair." },
              { step: "04", title: "Traitement", desc: "Réalisation des soins avec les meilleures technologies." },
              { step: "05", title: "Suivi", desc: "Accompagnement post-opératoire et maintenance." }
            ].map((item, i) => (
              <div key={i} className="mb-12 md:mb-0 md:flex-1 md:text-center relative px-4">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary md:relative md:left-0 md:mx-auto md:mb-4" />
                <span className="text-accent font-bold text-lg block mb-2">{item.step}</span>
                <h4 className="font-bold text-secondary mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
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
