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
import { MapPin, Phone, Mail, Clock } from "lucide-react";

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
      <div className="bg-secondary text-white pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display mb-4">Contactez-nous</h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Une question ? Une urgence ? Notre équipe est à votre écoute.
          </p>
        </div>
      </div>

      <Section className="pb-0">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
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
                  Route Nationale 568<br />
                  13230 Port-de-Bouc
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
                  <li className="flex justify-between w-40"><span>Lun - Ven:</span> <span>09:00 - 19:00</span></li>
                  <li className="flex justify-between w-40"><span>Samedi:</span> <span>Sur RDV</span></li>
                  <li className="flex justify-between w-40"><span>Dimanche:</span> <span>Fermé</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100">
            <h2 className="text-2xl font-bold font-display text-secondary mb-6">Envoyez-nous un message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom complet</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre nom" className="rounded-xl h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="vous@email.com" type="email" className="rounded-xl h-12" {...field} />
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
                          <Input placeholder="06 12 34 56 78" className="rounded-xl h-12" {...field} value={field.value || ''} />
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
                        <Textarea placeholder="Comment pouvons-nous vous aider ?" className="rounded-xl min-h-[120px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  isLoading={mutation.isPending}
                >
                  Envoyer le message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </Section>

      {/* Map */}
      <div className="h-[400px] w-full mt-16 bg-muted">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.563065476342!2d4.9781829!3d43.3653188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b9d19a2e6f4819%3A0x629531804132890!2sCentre%20Dentaire%20Easy%20Dent!5e0!3m2!1sfr!2sfr!4v1650000000000!5m2!1sfr!2sfr" 
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
