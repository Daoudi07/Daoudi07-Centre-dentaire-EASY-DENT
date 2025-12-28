import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, Clock, Users, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button-custom";
import { Section } from "@/components/ui/section";
import heroImg from "@assets/attesa_1766941636456.jpg";
import chairImg from "@assets/sala2_1766941636456.jpg";
import { useLocation } from "wouter";

export default function Home() {
  const [, setLocation] = useLocation();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Salle d'attente moderne" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
        </div>

        <div className="container relative z-10 px-4 pt-20">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="max-w-3xl text-white"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-md border border-accent/30 text-accent mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-bold uppercase tracking-wider">L'excellence dentaire à Port-de-Bouc</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Votre sourire mérite <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                le meilleur soin
              </span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
              Bienvenue chez Easy Dent. Une clinique ultramoderne alliant expertise médicale et confort absolu pour une expérience dentaire unique.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="accent"
                onClick={() => window.open('https://www.doctolib.fr', '_blank')}
                className="text-secondary"
              >
                Prendre rendez-vous
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white/10"
                onClick={() => setLocation('/clinique')}
              >
                Découvrir la clinique
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-current rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* STATS / FEATURES */}
      <Section className="relative -mt-20 z-20 pt-0 pb-20 pointer-events-none">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pointer-events-auto">
          {[
            { 
              icon: Clock, 
              title: "Urgences 7j/7", 
              desc: "Prise en charge rapide de vos douleurs dentaires.",
              color: "bg-blue-600"
            },
            { 
              icon: Shield, 
              title: "Technologie de pointe", 
              desc: "Équipements dernière génération pour des soins précis.",
              color: "bg-secondary"
            },
            { 
              icon: Users, 
              title: "Équipe Experte", 
              desc: "12 praticiens spécialisés à votre écoute.",
              color: "bg-accent"
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${item.color === 'bg-accent' ? 'text-secondary' : 'text-white'} ${item.color} p-8 rounded-2xl shadow-xl hover:-translate-y-1 transition-transform duration-300`}
            >
              <item.icon className="w-10 h-10 mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-2 font-display">{item.title}</h3>
              <p className="opacity-80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* INTRO */}
      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 rounded-3xl rotate-3" />
            <img 
              src={chairImg} 
              alt="Cabinet dentaire" 
              className="relative rounded-2xl shadow-2xl w-full h-auto aspect-[4/3] object-cover"
            />
          </div>
          <div>
            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Notre Philosophie</span>
            <h2 className="text-4xl md:text-5xl mb-6 text-secondary">
              L'art de soigner, <br />
              <span className="text-primary">le plaisir de sourire</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Au Centre Dentaire Easy Dent, nous croyons que chaque patient est unique. Notre approche combine une expertise médicale rigoureuse avec une écoute attentive de vos besoins.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Plans de traitement personnalisés",
                "Transparence totale sur les tarifs",
                "Gestion de la douleur et du stress",
                "Suivi post-opératoire rigoureux"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-secondary font-medium">
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
            <Button onClick={() => setLocation('/clinique')}>
              En savoir plus sur nous <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA BANNER */}
      <Section variant="dark" className="text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-6 text-white">Besoin d'un rendez-vous rapidement ?</h2>
          <p className="text-xl text-white/80 mb-8">
            Consultez nos disponibilités en ligne et réservez votre créneau en quelques clics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="accent" 
              className="text-secondary"
              onClick={() => window.open('https://www.doctolib.fr', '_blank')}
            >
              Réserver sur Doctolib
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white/10"
              onClick={() => window.open('tel:0442752471', '_self')}
            >
              Appeler le 04 42 75 24 71
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
