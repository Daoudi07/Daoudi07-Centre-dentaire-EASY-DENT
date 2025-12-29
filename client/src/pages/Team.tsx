import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/section";
import { User2 } from "lucide-react";
import { Button } from "@/components/ui/button-custom";
import { motion } from "framer-motion";

const TEAM_MEMBERS = [
  {
    name: "Dr Sandy Barbosa",
    role: "Chirurgien-dentiste",
    img: "https://i.imgur.com/gY3xRoF.jpg",
    languages: ["🇫🇷 Français", "🇬🇧 Anglais", "🇪🇸 Espagnol", "🇵🇹 Portugais"],
    bio: "Spécialisée en prévention, urgences dentaires, bruxisme et greffes osseuses. Approche douce et professionnelle.",
    doctolib: "https://www.doctolib.fr/dentiste/savigny-sur-orge/sandy-barbosa?pid=practice-131168"
  },
  {
    name: "Dr Nicolas Dray",
    role: "Chirurgien-dentiste",
    spec: "Esthétique dentaire • Implantologie • Orthodontie invisible",
    img: "https://i.imgur.com/As9RuQf.jpg",
    languages: ["🇫🇷 Français"],
    bio: "Approche holistique de la santé orale. Pratique l'hypnose dentale pour le confort des patients. Spécialiste en facettes et implants.",
    doctolib: "https://www.doctolib.fr/dentiste/aix-en-provence/nicolas-dray?pid=practice-131168"
  },
  {
    name: "Dr Loana Saggesi",
    role: "Chirurgien-dentiste",
    img: "https://i.imgur.com/VoyY5O7.jpg",
    languages: ["🇫🇷 Français"],
    bio: "Diplômée de la Faculté d'Odontologie de Marseille. Approche douce et bienveillante. Soins complets pour toute la famille.",
    doctolib: "https://www.doctolib.fr/dentiste/port-de-bouc/loana-saggesi?pid=practice-131168"
  },
  {
    name: "Dr Adriana Sahlean",
    role: "Chirurgien-dentiste",
    spec: "Couronnes dentaires • Prothèses fixes et amovibles",
    img: "https://i.imgur.com/r2J7fVo.jpg",
    languages: ["🇫🇷 Français", "🇮🇹 Italien", "🇷🇴 Roumain"],
    bio: "Expertise en prothèse dentaire. Expérience professionnelle à Marseille, Les Angles et Avignon. Travail de précision.",
    doctolib: "https://www.doctolib.fr/dentiste/pertuis/adriana-sahlean?pid=practice-131168"
  },
  {
    name: "Dr Romeissa Touat",
    role: "Chirurgien-dentiste",
    spec: "Réhabilitation orale complète",
    img: "https://i.imgur.com/OL8XLl3.jpg",
    languages: ["🇫🇷 Français", "🇬🇧 Anglais", "🇪🇸 Espagnol", "🇵🇹 Portugais", "🇸🇦 Arabe"],
    bio: "Spécialisée en réhabilitations orales complexes. Communication facilitée en 5 langues pour accueillir tous les patients.",
    doctolib: "https://www.doctolib.fr/dentiste/marseille/romeissa-touat?pid=practice-131168"
  },
  {
    name: "Dr Melvyn Saadi",
    role: "Chirurgien-dentiste",
    img: "https://i.imgur.com/N24SZf9.jpg",
    languages: ["🇫🇷 Français"],
    bio: "Soins conformes aux conventions de la Sécurité Sociale. Approche professionnelle et accessible. Prise en charge complète.",
    doctolib: "https://www.doctolib.fr/dentiste/marseille/melvyn-saadi-marseille?pid=practice-131168"
  },
  {
    name: "Dr Petra Hent",
    role: "Chirurgien-dentiste",
    languages: ["🇫🇷 Français", "🇬🇧 Anglais", "🇭🇺 Hongrois", "🇷🇴 Roumain"],
    bio: "Spécialisée dans le diagnostic et le traitement des pathologies bucco-dentaires. Approche attentive aux besoins du patient.",
    doctolib: "https://www.doctolib.fr/dentiste/marseille/petra-hent-saint-ouen?pid=practice-131168"
  },
  {
    name: "Dr Ines Youcef",
    role: "Chirurgien-dentiste",
    bio: "Prévention, diagnostic et traitement des pathologies dentaires. Soins complets : détartrage, caries, gencives.",
    doctolib: "https://www.doctolib.fr/dentiste/berre-l-etang/ines-youcef-port-de-bouc?pid=practice-131168"
  },
  {
    name: "Dr Elea Bondil",
    role: "Chirurgien-dentiste",
    languages: ["🇫🇷 Français"],
    bio: "Prévention et traitement des principales pathologies dentaires. Soins de qualité dans un cadre professionnel.",
    doctolib: "https://www.doctolib.fr/dentiste/marseille/elea-bondil-4cfb7ce8-a247-408f-83c5-a837c7af9a6a?pid=practice-131168"
  },
  {
    name: "Dr Emilie Egidio",
    role: "Chirurgien-dentiste",
    bio: "Prévention, diagnostic et traitement dans un environnement moderne. Soins complets pour toute la famille.",
    doctolib: "https://www.doctolib.fr/dentiste/port-de-bouc/emilie-egidio-port-de-bouc?pid=practice-131168"
  },
  {
    name: "Dr Ophélie Rogeon",
    role: "Chirurgien-dentiste",
    bio: "Prévention et traitement des pathologies dentaires avec professionnalisme. Soins personnalisés.",
    doctolib: "https://www.doctolib.fr/dentiste/port-de-bouc/ophelie-rogeon-fbc1f39f-d022-4237-936b-d92f20f398c1?pid=practice-131168"
  },
  {
    name: "Dr Wacil Youcef",
    role: "Chirurgien-dentiste",
    bio: "Soins de dents, gencives, nerfs et mâchoires. Traitement complet des pathologies bucco-dentaires.",
    doctolib: "https://www.doctolib.fr/dentiste/port-de-bouc/wacil-youcef?pid=practice-131168"
  }
];

import stockTeamHero from "@assets/stock_images/modern_luxury_dental_ed57f610.jpg";

export default function Team() {
  return (
    <Layout>
      <section className="section-hero relative h-[400px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${stockTeamHero})` }}>
        <div className="absolute inset-0 bg-black/50 z-[1]" />
        <div className="relative z-[2] text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-3xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-wider mb-4"
          >
            NOTRE ÉQUIPE DE SPÉCIALISTES
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-lg md:text-xl font-medium tracking-wide"
          >
            Une expertise de pointe pour votre santé dentaire
          </motion.p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div 
              key={idx}
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="h-80 bg-muted flex items-center justify-center relative overflow-hidden shrink-0">
                {member.img ? (
                  <img src={member.img} alt={member.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <User2 className="w-24 h-24 text-muted-foreground/30" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              </div>
              <div className="p-6 text-center flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-secondary font-display mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                  {member.role}
                </p>
                {member.spec && (
                   <p className="text-xs font-medium text-primary/80 mb-3">{member.spec}</p>
                )}
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                  {member.bio}
                </p>
                {member.languages && (
                  <p className="text-xs text-muted-foreground/80 mb-6 font-medium">
                    {member.languages.join(' • ')}
                  </p>
                )}
                <Button 
                  className="w-full bg-[#0077B6] hover:bg-[#005f8d] text-white font-bold"
                  onClick={() => window.open(member.doctolib, '_blank')}
                >
                  📅 Prendre RDV avec Dr {member.name.split(' ').pop()}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}

