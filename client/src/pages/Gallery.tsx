import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const CASES = [
  { title: "Blanchiment", desc: "Éclaircissement de 3 teintes" },
  { title: "Facettes Céramiques", desc: "Correction du sourire complet" },
  { title: "Implants", desc: "Remplacement molaire" },
  { title: "Alignement", desc: "Traitement orthodontique invisible" },
  { title: "Prothèse", desc: "Restauration complète" },
  { title: "Esthétique", desc: "Harmonisation du sourire" },
];

export default function Gallery() {
  return (
    <Layout>
      <div className="bg-secondary text-white pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display mb-4">Galerie Sourires</h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Découvrez les transformations réalisées par nos experts.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {CASES.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div className="grid grid-cols-2 h-64 md:h-80">
                <div className="bg-gray-100 relative flex items-center justify-center border-r border-white/20">
                  <span className="text-gray-400 font-bold">Avant</span>
                  <Badge className="absolute top-4 left-4 bg-gray-500 hover:bg-gray-600">AVANT</Badge>
                </div>
                <div className="bg-primary/5 relative flex items-center justify-center">
                  <span className="text-primary/40 font-bold">Après</span>
                  <Badge className="absolute top-4 right-4 bg-accent text-secondary hover:bg-accent/80">APRÈS</Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-display text-secondary">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
