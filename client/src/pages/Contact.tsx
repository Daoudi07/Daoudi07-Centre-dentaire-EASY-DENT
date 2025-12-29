import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button-custom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useCreateContactMessage } from "@/hooks/use-contact";
import { MapPin, Phone, Mail, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";
import stockContact from "@assets/stock_images/modern_dental_clinic_e5189e63.jpg";

export default function Contact() {
  const mutation = useCreateContactMessage();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertContactMessage) => {
    mutation.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <Layout>
      <section className="section-hero" style={{ backgroundImage: `url(${stockContact})` }}>
        <div className="section-hero-title">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl uppercase"
          >
            Contactez-nous
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-medium text-white/80 mt-4"
          >
            Une question ? Une urgence ? Notre équipe est à votre écoute.
          </motion.p>
        </div>
      </section>

      <Section className="pb-0">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-secondary mb-1">Par Téléphone</h3>
                <p className="text-muted-foreground mb-2">Du lundi au vendredi de 9h à 19h</p>
                <a href="tel:0442752471" className="text-xl font-bold text-primary hover:underline">04 42 75 24 71</a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex items-start gap-4">
              <div className="bg-accent/10 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-secondary mb-1">Nous trouver</h3>
                <p className="text-muted-foreground">
                  Centre Dentaire Easy Dent<br />
                  39 Avenue du Groupe Manouchian<br />
                  13110 Port-de-Bouc<br />
                  France
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex items-start gap-4">
              <div className="bg-secondary/10 p-3 rounded-full">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-secondary mb-1">Horaires</h3>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li className="flex justify-between w-40"><span>Lun - Ven:</span> <span>09:00 - 12:00 / 14:00 - 18:00</span></li>
                  <li className="flex justify-between w-40"><span>Samedi - Dimanche:</span> <span className="text-accent font-bold">Fermé</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Professional Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-display font-bold text-secondary mb-6">Envoyez-nous un message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom Complet</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre nom" {...field} className="rounded-xl border-gray-200 focus:border-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="votre@email.com" {...field} className="rounded-xl border-gray-200 focus:border-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Téléphone</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="06 00 00 00 00" 
                            {...field} 
                            value={field.value ?? ""} 
                            className="rounded-xl border-gray-200 focus:border-primary" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Comment pouvons-nous vous aider ?" 
                          className="min-h-[120px] rounded-xl border-gray-200 focus:border-primary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-6 rounded-xl shadow-lg shadow-secondary/20 transition-all duration-300 active:scale-[0.98]"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
                <p className="text-[10px] text-center text-muted-foreground mt-4 italic">
                  En envoyant ce formulaire, vous acceptez que vos données soient traitées pour répondre à votre demande.
                </p>
              </form>
            </Form>
          </div>
        </div>
      </Section>

      {/* REVIEWS SECTION */}
      <Section variant="muted">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-secondary mb-4">Ils nous font confiance</h2>
          <p className="text-lg text-muted-foreground">Découvrez les témoignages de nos patients satisfaits</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {[
            { text: "Cabinet au top! Le meilleur que j'ai fait dans ma vie! Que ce soit niveau soin dentaire, sans parler de la décoration du cabinet, l'hygiène vraiment au top!", author: "Patient vérifié" },
            { text: "Nous sommes extrêmement satisfaits de ce cabinet dentaire, tant par l'accueil, le professionnalisme et la gentillesse del personale ainsi que l'hygiène irréprochable.", author: "Sophie M." },
            { text: "Un cabinet super classe, un accueil irréprochable par une équipe efficace et plutôt rare chez un dentiste jamais d'attente! Le directeur et les dentistes rapides, efficaces.", author: "Thomas B." },
            { text: "Enfin un dentiste qui donne envie d'aller chez le dentiste :) Que ce soit du côté dentaire ou du côté médecine esthétique je le recommande fortement.", author: "Marie L." },
            { text: "Le docteur Margheriti m'a fait de superbes couronnes fidèle à sa réputation. Le centre est très propre et ils ont fait tous les papiers administratifs.", author: "Jean-Pierre D." },
            { text: "Cabinet dentaire au top!! Des secrétaires adorables sans parler du Dr Margheriti, enfin un chirurgien gentil et compétent à la fois. Merci à vous.", author: "Caroline R." }
          ].map((rev, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-accent">
              <div className="flex gap-1 text-accent mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-muted-foreground italic mb-6 leading-relaxed">"{rev.text}"</p>
              <p className="font-bold text-secondary">— {rev.author}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Map */}
      <div className="h-[400px] w-full bg-muted">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.563065476342!2d4.9781829!3d43.3653188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b9d19a2e6f4819%3A0x629531804132890!2s39%20Av.%20du%20Groupe%20Manouchian%2C%2013110%20Port-de-Bouc%2C%20France!5e0!3m2!1sfr!2sfr!4v1650000000000!5m2!1sfr!2sfr" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Carte Centre Dentaire Easy Dent"
        ></iframe>
      </div>

    </Layout>
  );
}
