import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Specialties() {
  const specialties = [
    {
      title: "Memória e Cognição",
      description: "Avaliação e acompanhamento de queixas de memória, diagnóstico precoce e tratamento de demências como Alzheimer.",
      image: "/images/specialty-memory.jpg"
    },
    {
      title: "Prevenção e Longevidade",
      description: "Check-up geriátrico focado em envelhecimento saudável, vacinação e orientações para um estilo de vida ativo.",
      image: "/images/specialty-preventive.jpg"
    },
    {
      title: "Doenças Crônicas",
      description: "Manejo cuidadoso de condições como hipertensão, diabetes e osteoporose, visando o controle e bem-estar.",
      image: "/images/specialty-longevity.jpg"
    },
    {
      title: "Avaliação Global",
      description: "Análise completa da saúde física, mental e funcional, identificando riscos e planejando cuidados personalizados.",
      image: "/images/specialty-preventive.jpg"
    }
  ];

  return (
    <section id="specialties" className="py-24 bg-background relative">
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/5 rounded-full blur-3xl -z-10" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-xs font-bold tracking-widest uppercase">Áreas de Atuação</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
            Cuidado Especializado
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            Abordagem completa para as principais necessidades da saúde na maturidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((spec, index) => (
            <Card key={index} className="border-none shadow-none bg-transparent overflow-visible group h-full flex flex-col">
              <div className="h-64 overflow-hidden relative rounded-[2rem] mb-6 shadow-lg transition-transform duration-500 group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-500 z-10" />
                <img 
                  src={spec.image} 
                  alt={spec.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Organic overlay shape */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
              </div>
              
              <CardHeader className="p-0 mb-3 text-center">
                <CardTitle className="text-2xl font-heading text-primary group-hover:text-accent transition-colors">{spec.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-center flex-grow">
                <p className="text-muted-foreground text-base leading-relaxed font-light">
                  {spec.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
