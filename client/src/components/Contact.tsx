import { Button } from "@/components/ui/button";
import { Mail, Instagram, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const contactInfo = {
    whatsapp: "5511999999999",
    email: "contato@drafernandamelo.com.br",
    instagram: "drafernandamelo",
    address: "Av. Paulista, 1000 - Conj. 101 - Bela Vista, São Paulo - SP"
  };

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Brand & Intro */}
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-bold">Dra. Fernanda Melo</h3>
            <p className="text-primary-foreground/80 max-w-sm leading-relaxed">
              Médica Geriatra dedicada a promover saúde, autonomia e qualidade de vida na maturidade.
            </p>
            <div className="flex gap-4">
              <a 
                href={`https://instagram.com/${contactInfo.instagram}`} 
                target="_blank" 
                rel="noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Actions */}
          <div className="space-y-6">
            <h4 className="font-heading text-xl font-bold">Entre em Contato</h4>
            <div className="space-y-4">
              <Button 
                className="w-full bg-white text-primary hover:bg-white/90 font-bold h-12 rounded-xl flex items-center justify-center gap-2 shadow-lg"
                onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp}`, "_blank")}
              >
                <Phone className="w-5 h-5" />
                Agendar pelo WhatsApp
              </Button>
              
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-white transition-colors p-2"
              >
                <Mail className="w-5 h-5" />
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-6">
            <h4 className="font-heading text-xl font-bold">Localização</h4>
            <div className="flex items-start gap-3 text-primary-foreground/80">
              <MapPin className="w-6 h-6 shrink-0 mt-1" />
              <p className="leading-relaxed">
                {contactInfo.address}
              </p>
            </div>
            {/* Embed map placeholder or link */}
            <div className="h-32 bg-white/10 rounded-xl flex items-center justify-center text-sm text-white/60">
              Mapa do Google
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Dra. Fernanda Melo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
