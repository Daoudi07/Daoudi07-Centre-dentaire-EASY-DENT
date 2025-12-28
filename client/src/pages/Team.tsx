import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/section";
import { User2 } from "lucide-react";

const TEAM_MEMBERS = [
  { name: "Dr Sandy Barbosa", role: "Chirurgien-Dentiste", spec: "Implantologie" },
  { name: "Dr Nicolas Dray", role: "Chirurgien-Dentiste", spec: "Omnipratique" },
  { name: "Dr Michael Scetbon", role: "Chirurgien-Dentiste", spec: "Esthétique" },
  { name: "Dr David Cohen", role: "Chirurgien-Dentiste", spec: "Parodontologie" },
  { name: "Dr Sarah Levi", role: "Chirurgien-Dentiste", spec: "Pédodontie" },
  { name: "Dr Julien Marciano", role: "Chirurgien-Dentiste", spec: "Chirurgie Orale" },
  { name: "Dr Emma Petit", role: "Chirurgien-Dentiste", spec: "Omnipratique" },
  { name: "Dr Thomas Dubois", role: "Chirurgien-Dentiste", spec: "Endodontie" },
  { name: "Dr Lea Martin", role: "Chirurgien-Dentiste", spec: "Orthodontie" },
  { name: "Dr Kevin Durand", role: "Chirurgien-Dentiste", spec: "Prothèses" },
  { name: "Dr Sophie Bernard", role: "Chirurgien-Dentiste", spec: "Omnipratique" },
  { name: "Dr Pierre Morel", role: "Chirurgien-Dentiste", spec: "Implantologie" },
];

export default function Team() {
  return (
    <Layout>
      <div className="bg-secondary text-white pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display mb-4">Notre Équipe</h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Des experts passionnés au service de votre santé bucco-dentaire.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div 
              key={idx}
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="h-64 bg-muted flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <User2 className="w-24 h-24 text-muted-foreground/30" />
                {/* Placeholder for real image */}
                {/* <img src={member.img} className="absolute inset-0 w-full h-full object-cover" /> */}
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-secondary font-display mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground">
                  Spécialité : {member.spec}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
