import { Heart, Clock, Users, Home } from "lucide-react";

export default function Differentials() {
  const differentials = [
    {
      icon: <Clock className="w-8 h-8 text-secondary" />,
      title: "Tempo de Qualidade",
      text: "Consultas com duração estendida para ouvir, examinar e explicar cada detalhe sem pressa."
    },
    {
      icon: <Heart className="w-8 h-8 text-secondary" />,
      title: "Olhar Integral",
      text: "Foco na pessoa e não apenas na doença. Consideramos aspectos físicos, emocionais e sociais."
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Apoio à Família",
      text: "Suporte e orientação contínua para familiares e cuidadores durante todo o tratamento."
    },
    {
      icon: <Home className="w-8 h-8 text-secondary" />,
      title: "Visita Domiciliar",
      text: "Atendimento no conforto do lar para pacientes com dificuldade de locomoção."
    }
  ];

  return (
    <section id="differentials" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-secondary font-bold tracking-wider text-sm uppercase">Por que escolher</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Um atendimento que faz a diferença
              </h2>
              <p className="text-muted-foreground text-lg">
                A geriatria exige sensibilidade e dedicação. Meu compromisso é oferecer um acolhimento que traga segurança e tranquilidade para você e sua família.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {differentials.map((item, index) => (
                <div key={index} className="space-y-3 p-4 rounded-xl hover:bg-accent/20 transition-colors duration-300">
                  <div className="bg-accent/30 w-14 h-14 rounded-full flex items-center justify-center mb-2">
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-primary/5 rounded-[2rem] p-8 md:p-12 relative">
              <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-secondary/20 rounded-full blur-xl" />
              
              <blockquote className="space-y-6 text-center">
                <p className="font-heading text-2xl md:text-3xl italic text-foreground leading-relaxed">
                  "O cuidado com o idoso vai muito além da prescrição médica. É sobre criar laços, entender histórias e proporcionar dias com mais vida."
                </p>
                <footer className="text-primary font-bold tracking-wide">
                  — Dra. Fernanda Melo
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
