import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, Clock, Users, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button-custom";
import { Section } from "@/components/ui/section";
import heroImg from "@assets/attesa_1766941636456.jpg";
import chairImg from "@assets/sala2_1766941636456.jpg";
import { useLocation } from "wouter";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import sandyImg from "@assets/DrSandyBarbosa_sfondo_1767118407014.png";

const DOCTORS = [
  {
    name: "Dr Sandy Barbosa",
    role: "Chirurgien-dentiste",
    img: sandyImg,
    languages: ["Français", "Anglais", "Espagnol", "Portugais"],
    bio: "Spécialisée en prévention, urgences dentaires, bruxisme et greffes osseuses. Approche douce et professionnelle.",
    doctolib: "https://www.doctolib.fr/dentiste/savigny-sur-orge/sandy-barbosa?pid=practice-131168"
  },
  {
    name: "Dr Nicolas Dray",
    role: "Esthétique dentaire • Implantologie",
    img: "https://i.imgur.com/As9RuQf.jpg",
    languages: ["Français"],
    bio: "Approche holistique de la santé orale. Pratique l'hypnose dentale pour le confort des patients. Spécialiste en facettes et implants.",
    doctolib: "https://www.doctolib.fr/dentiste/aix-en-provence/nicolas-dray?pid=practice-131168"
  },
  {
    name: "Dr Loana Saggesi",
    role: "Chirurgien-dentiste",
    img: "https://i.imgur.com/VoyY5O7.jpg",
    languages: ["Français"],
    bio: "Diplômée de la Faculté d'Odontologie de Marseille. Approche douce et bienveillante. Soins complets pour toute la famille.",
    doctolib: "https://www.doctolib.fr/dentiste/port-de-bouc/loana-saggesi?pid=practice-131168"
  },
  {
    name: "Dr Adriana Sahlean",
    role: "Prothèses fixes et amovibles",
    img: "https://i.imgur.com/r2J7fVo.jpg",
    languages: ["Français", "Italien", "Roumain"],
    bio: "Expertise en prothèse dentaire. Expérience professionnelle à Marseille, Les Angles et Avignon. Travail de précision.",
    doctolib: "https://www.doctolib.fr/dentiste/pertuis/adriana-sahlean?pid=practice-131168"
  },
  {
    name: "Dr Romeissa Touat",
    role: "Réhabilitation orale complète",
    img: "https://i.imgur.com/OL8XLl3.jpg",
    languages: ["Français", "Anglais", "Espagnol", "Portugais", "Arabe"],
    bio: "Spécialisée en réhabilitations orales complexes. Communication facilitée en 5 langues pour accueillir tous les patients.",
    doctolib: "https://www.doctolib.fr/dentiste/marseille/romeissa-touat?pid=practice-131168"
  },
  {
    name: "Dr Melvyn Saadi",
    role: "Chirurgien-dentiste",
    img: "https://i.imgur.com/N24SZf9.jpg",
    languages: ["Français"],
    bio: "Soins conformes aux conventions de la Sécurité Sociale. Approche professionnelle et accessible. Prise en charge complète.",
    doctolib: "https://www.doctolib.fr/dentiste/marseille/melvyn-saadi-marseille?pid=practice-131168"
  }
];

const REVIEWS = [
  { text: "Cabinet au top! Le meilleur que j'ai fait dans ma vie! Que ce soit niveau soin dentaire, sans parler de la décoration du cabinet, l'hygiène vraiment au top!", author: "Patient vérifié" },
  { text: "Nous sommes extrêmement satisfaits de ce cabinet dentaire, tant par l'accueil, le professionnalisme et la gentillesse du personnel ainsi que l'hygiène qui est irréprochable.", author: "Sophie M." },
  { text: "Un cabinet super classe, un accueil irréprochable par une équipe efficace et plutôt rare chez un dentiste jamais d'attente! Le directeur et les dentistes rapides, efficaces.", author: "Thomas B." },
  { text: "Enfin un dentiste qui donne envie d'aller chez le dentiste :) Que ce soit du côté dentaire ou du côté médecine esthétique je le recommande fortement.", author: "Marie L." },
  { text: "Le docteur Margheriti m'a fait de superbes couronnes fidèle à sa réputation. Le centre est très propre et ils ont fait tous les papiers administratifs.", author: "Jean-Pierre D." },
  { text: "Cabinet dentaire au top!! Des secrétaires adorables sans parler du Dr Margheriti, enfin un chirurgien gentil et compétent à la fois. Merci à vous.", author: "Caroline R." },
  { text: "J'ai eu la belle surprise de voir que le tiers payant est réalisé pour tutte les mutuelles. Un vrai plus. Centre moderne et accueillant, je recommande!", author: "Ahmed K." }
];

export default function Home() {
  const [, setLocation] = useLocation();
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Salle d'attente moderne" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#001F3F]/80" />
        </div>

        <div className="container relative z-10 px-4 pt-20 flex flex-col items-center text-center">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="max-w-4xl w-[95%] md:w-full p-6 md:p-12 rounded-[20px] bg-white/10 backdrop-blur-[10px] border border-white/20"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-md border border-accent/30 text-accent mb-8">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-bold uppercase tracking-wider">L'excellence dentaire à Port-de-Bouc</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-[1.8rem] md:text-[3.5rem] font-display font-bold leading-[1.2] mb-6 text-white text-shadow-lg whitespace-normal break-keep">
              Votre sourire mérite <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                le meilleur soin
              </span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto leading-relaxed text-shadow">
              Bienvenue chez Easy Dent. Une clinique ultramoderne alliant expertise médicale et confort absolu pour une expérience dentaire unique.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="accent"
                onClick={() => window.open('https://www.doctolib.fr/cabinet-dentaire/port-de-bouc/centre-dentaire-port-de-bouc', '_blank')}
                className="text-secondary font-bold px-8 h-12"
              >
                Prendre RDV
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white/10 px-8 h-12"
                onClick={() => setLocation('/clinique')}
              >
                La clinique
              </Button>
            </motion.div>
          </motion.div>

          {/* FLOATING CARDS */}
          <div className="mt-8 md:mt-[60px] flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-6 w-full max-w-5xl px-4 md:px-0">
            {[
              { 
                icon: () => <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-500 shadow-[0_0_12px_#ef4444] animate-pulse" />, 
                title: "Service d'Urgence", 
                desc: "Prise en charge 7j/7"
              },
              { 
                icon: () => <Shield className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37] stroke-[1px]" />, 
                title: "Technologie 3D", 
                desc: "Plateau technique de pointe"
              },
              { 
                icon: () => <Star className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37] stroke-[1px]" />, 
                title: "Experts Diplômés", 
                desc: "12 praticiens spécialisés"
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (idx * 0.1) }}
                className="flex items-center gap-3 md:gap-4 p-4 md:p-6 rounded-xl border border-[#D4AF37]/40 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-[#D4AF37] transition-all duration-500"
              >
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#D4AF37]/20 flex items-center justify-center">
                  <item.icon />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-white font-display tracking-wide uppercase text-[13px] md:text-[15px] text-center">{item.title}</h3>
                  <p className="text-xs md:text-sm text-white/70 font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

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
      {/* DOCTORS CAROUSEL */}
      <Section className="overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-secondary mb-4">Notre équipe de spécialistes</h2>
          <p className="text-lg text-muted-foreground">Des praticiens passionnés, multilingues et dévoués à votre santé bucco-dentaire</p>
        </div>
        
        <div className="relative group">
          <div className="flex gap-8 animate-scroll hover:[animation-play-state:paused] w-max py-4">
            {[...DOCTORS, ...DOCTORS].map((doc, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedDoctor(doc)}
                className="w-[320px] bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300"
              >
                <div className="h-[400px] p-2">
                  <img src={doc.img} alt={doc.name} className="w-full h-full object-cover rounded-[15px] shadow-sm" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary font-display mb-1">{doc.name}</h3>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">{doc.role}</p>
                  <p className="text-xs text-muted-foreground">{doc.languages.join(' • ')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" onClick={() => setLocation('/equipe')}>
            Découvrir tutta l'équipe (12 praticiens)
          </Button>
        </div>
      </Section>
      {/* INTRO / PHILOSOPHY */}
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
            <h2 className="text-4xl md:text-5xl mb-6 text-secondary font-display">
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
      {/* REVIEWS CAROUSEL */}
      <Section variant="muted" className="overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-secondary mb-4">Ce que nos patients disent de nous</h2>
          <p className="text-lg text-muted-foreground">Plus de 180 avis positifs sur Google et autres plateformes</p>
        </div>

        <div className="relative">
          <div className="flex gap-8 animate-scroll-reverse hover:[animation-play-state:paused] w-max py-4">
            {[...REVIEWS, ...REVIEWS].map((rev, idx) => (
              <div 
                key={idx}
                className="w-[400px] bg-white p-8 rounded-2xl shadow-md border-l-4 border-accent"
              >
                <div className="flex gap-1 text-accent mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-muted-foreground italic mb-6 leading-relaxed">"{rev.text}"</p>
                <p className="font-bold text-secondary">— {rev.author}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      {/* CTA BANNER */}
      <Section variant="dark" className="text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-6 text-white font-display">Besoin d'un rendez-vous rapidement ?</h2>
          <p className="text-xl text-white/80 mb-8">
            Consultez nos disponibilités en ligne et réservez votre créneau en quelques clics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="accent" 
              className="text-secondary"
              onClick={() => window.open('https://www.doctolib.fr/cabinet-dentaire/port-de-bouc/centre-dentaire-port-de-bouc', '_blank')}
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
      {/* Doctor Modal */}
      <Dialog open={!!selectedDoctor} onOpenChange={() => setSelectedDoctor(null)}>
        <DialogContent className="max-w-2xl">
          {selectedDoctor && (
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2 rounded-[15px] overflow-hidden shadow-lg border border-gray-100">
                <img src={selectedDoctor.img} alt={selectedDoctor.name} className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-display font-bold text-secondary mb-2">{selectedDoctor.name}</h2>
                  <p className="text-primary font-bold uppercase tracking-wider text-sm mb-4">{selectedDoctor.role}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{selectedDoctor.bio}</p>
                  <div className="mb-6">
                    <p className="text-sm font-bold text-secondary mb-2">Langues parlées :</p>
                    <p className="text-sm text-muted-foreground">{selectedDoctor.languages.join(', ')}</p>
                  </div>
                </div>
                <Button 
                  size="lg" 
                  className="w-full bg-[#0077B6] hover:bg-[#005f8d]"
                  onClick={() => window.open(selectedDoctor.doctolib, '_blank')}
                >
                  📅 Prendre RDV avec {selectedDoctor.name}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}

