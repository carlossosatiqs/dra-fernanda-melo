import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent z-10" />
        <img 
          src="/images/hero-bg.jpg" 
          alt="Consultório Dra. Fernanda Melo" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container relative z-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-in slide-in-from-left duration-700 fade-in">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-semibold tracking-wide mb-2">
            Geriatria e Longevidade
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Envelhecer com <span className="text-primary italic">saúde</span> e <span className="text-secondary italic">propósito</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Cuidado integral e personalizado para promover autonomia e bem-estar em todas as fases da maturidade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
            >
              Agendar Consulta
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/20 text-primary hover:bg-primary/5 rounded-full px-8 h-12 text-base"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conheça a Dra. Fernanda
            </Button>
          </div>
        </div>

        <div className="relative hidden md:block h-[600px] animate-in slide-in-from-right duration-1000 fade-in delay-200">
          <div className="absolute inset-0 bg-accent/30 rounded-[2rem] transform rotate-3 translate-x-4 translate-y-4 -z-10" />
          <img 
            src="/images/doctor-real-photo.png" 
            alt="Dra. Fernanda Melo" 
            className="w-full h-full object-cover rounded-[2rem] shadow-2xl object-[50%_35%]"
          />
          
          {/* Floating Card */}
          <div className="absolute bottom-8 left-[-2rem] bg-white p-6 rounded-xl shadow-xl max-w-xs animate-in zoom-in duration-500 delay-500">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              </div>
              <div>
                <p className="font-heading font-bold text-foreground">Atendimento Humanizado</p>
                <p className="text-xs text-muted-foreground">Foco na sua história de vida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
