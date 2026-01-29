import { Heart, Clock, Users, Home } from "lucide-react";

export default function Differentials() {
  const differentials = [
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Tempo de Qualidade",
      text: "Consultas com duração estendida para ouvir, examinar e explicar cada detalhe sem pressa."
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Olhar Integral",
      text: "Foco na pessoa e não apenas na doença. Consideramos aspectos físicos, emocionais e sociais."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Apoio à Família",
      text: "Suporte e orientação contínua para familiares e cuidadores durante todo o tratamento."
    },
    {
      icon: <Home className="w-6 h-6 text-primary" />,
      title: "Visita Domiciliar",
      text: "Atendimento no conforto do lar para pacientes com dificuldade de locomoção."
    }
  ];

  return (
    <section id="differentials" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-2/3 h-full opacity-20 mix-blend-multiply pointer-events-none rotate-180">
        <img src="/images/watercolor-bg.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-secondary/30 text-primary text-xs font-bold tracking-widest uppercase">Por que escolher</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
                Um atendimento que faz a diferença
              </h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                A geriatria exige sensibilidade e dedicação. Meu compromisso é oferecer um acolhimento que traga segurança e tranquilidade para você e sua família.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {differentials.map((item, index) => (
                <div key={index} className="space-y-3 group">
                  <div className="bg-white border border-secondary/30 w-14 h-14 rounded-[1rem] flex items-center justify-center mb-2 shadow-sm group-hover:bg-accent/20 group-hover:border-accent/30 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground text-base font-light">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="bg-white/60 backdrop-blur-sm border border-white/50 rounded-[3rem_1rem_3rem_1rem] p-10 md:p-14 relative shadow-xl">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl -z-10" />
              
              <blockquote className="space-y-8 text-center relative z-10">
                <span className="text-6xl text-accent/20 font-serif absolute -top-4 -left-2">"</span>
                <p className="font-heading text-2xl md:text-3xl italic text-primary leading-relaxed">
                  O cuidado com o idoso vai muito além da prescrição médica. É sobre criar laços, entender histórias e proporcionar dias com mais vida.
                </p>
                <footer className="flex flex-col items-center gap-2">
                  <div className="w-12 h-1 bg-accent rounded-full" />
                  <span className="text-primary font-bold tracking-wide text-sm uppercase mt-2">Dra. Fernanda Melo</span>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
