import { Button } from "@/components/ui/button";
import { Mail, Instagram, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const contactInfo = {
    whatsapp: "5521996450099",
    email: "contato@drafernandamelo.com.br",
    instagram: "drafernandamelo",
    address: "Av. Nossa Sra. de Copacabana, 788 - Sala 705 - Copacabana, Rio de Janeiro - RJ, 22050-001"
  };

  return (
    <footer id="contact" className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Organic Top Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background"></path>
        </svg>
      </div>

      <div className="container pt-32 pb-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Brand & Intro */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <img src="/images/logo-light.png" alt="Logo" className="h-14 w-14 opacity-90" />
              <h3 className="font-heading text-2xl font-bold tracking-wide">FERNANDA MELO</h3>
            </div>
            <p className="text-primary-foreground/80 max-w-sm leading-relaxed font-light">
              Médica Geriatra dedicada a promover saúde, autonomia e qualidade de vida na maturidade com um olhar integral e humanizado.
            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href={`https://instagram.com/${contactInfo.instagram}`} 
                target="_blank" 
                rel="noreferrer"
                className="bg-white/10 hover:bg-accent hover:text-primary transition-all p-3 rounded-full group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="bg-white/10 hover:bg-accent hover:text-primary transition-all p-3 rounded-full group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Contact Actions */}
          <div className="space-y-8">
            <h4 className="font-heading text-xl font-bold border-b border-white/20 pb-2 inline-block">Entre em Contato</h4>
            <div className="space-y-4">
              <Button 
                className="w-full bg-accent text-primary hover:bg-white hover:text-primary font-bold h-14 rounded-xl flex items-center justify-center gap-3 shadow-lg transition-all text-base uppercase tracking-wider"
                onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp}`, "_blank")}
              >
                <Phone className="w-5 h-5" />
                Agendar pelo WhatsApp
              </Button>
              
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors p-2"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-8">
            <h4 className="font-heading text-xl font-bold border-b border-white/20 pb-2 inline-block">Localização</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <p className="leading-relaxed font-light">
                  {contactInfo.address}
                </p>
              </div>
              
              {/* Interactive Map Link */}
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Av.+Nossa+Sra.+de+Copacabana,+788+-+Copacabana,+Rio+de+Janeiro+-+RJ" 
                target="_blank" 
                rel="noreferrer"
                className="h-32 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-sm text-white/40 overflow-hidden relative group cursor-pointer hover:border-accent/50 transition-colors block"
              >
                <div className="absolute inset-0 bg-[url('/images/watercolor-bg.jpg')] opacity-10 mix-blend-overlay bg-cover bg-center" />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-accent transition-colors">
                  <MapPin className="w-4 h-4" /> Ver no Google Maps
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60 font-light">
          <p>© {new Date().getFullYear()} Dra. Fernanda Melo. Todos os direitos reservados.</p>
          <p>Geriatria com Amor e Ciência</p>
        </div>
      </div>
    </footer>
  );
}
