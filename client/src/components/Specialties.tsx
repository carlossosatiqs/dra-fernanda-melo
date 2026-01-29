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
      image: "/images/specialty-preventive.jpg" // Reusing appropriate image or could generate another
    }
  ];

  return (
    <section id="specialties" className="py-24 bg-accent/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-secondary font-bold tracking-wider text-sm uppercase">Áreas de Atuação</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Cuidado Especializado
          </h2>
          <p className="text-muted-foreground">
            Abordagem completa para as principais necessidades da saúde na maturidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((spec, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group bg-white h-full">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img 
                  src={spec.image} 
                  alt={spec.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-heading text-primary">{spec.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
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
