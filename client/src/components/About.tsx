import { CheckCircle2 } from "lucide-react";

export default function About() {
  const credentials = [
    "Graduação em Medicina pela USP",
    "Residência em Clínica Médica",
    "Especialização em Geriatria pelo Hospital das Clínicas",
    "Membro da Sociedade Brasileira de Geriatria e Gerontologia",
    "Pós-graduação em Cuidados Paliativos"
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 mix-blend-multiply pointer-events-none">
        <img src="/images/watercolor-bg.jpg" alt="" className="w-full h-full object-cover opacity-50" />
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            {/* Organic Image Frame */}
            <div className="relative aspect-[3/4] md:aspect-square rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/images/doctor-real-photo.png" 
                alt="Dra. Fernanda Melo atendendo paciente" 
                className="w-full h-full object-cover object-[50%_35%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent mix-blend-multiply" />
            </div>
            
            {/* Decorative organic shapes */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-secondary/30 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-accent/30 rounded-full blur-3xl -z-10" />
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-primary text-xs font-bold tracking-widest uppercase">Sobre a Médica</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
                Dra. Fernanda Melo
              </h2>
              <p className="text-accent-foreground font-medium text-lg border-l-4 border-accent pl-4">CRM 123456 • RQE 12345</p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg font-light">
              <p>
                Acredito que envelhecer é um privilégio que deve ser vivido com <strong className="text-primary font-medium">plenitude</strong>. Minha missão é oferecer um olhar atento e integral à saúde do idoso, indo além do tratamento de doenças.
              </p>
              <p>
                Com mais de 10 anos de experiência em geriatria, meu foco é preservar a autonomia e a qualidade de vida, compreendendo que cada paciente traz consigo uma história única que merece ser ouvida e respeitada.
              </p>
            </div>

            <div className="pt-6 bg-background/50 p-6 rounded-2xl border border-secondary/20">
              <h3 className="font-heading text-xl font-bold mb-6 text-primary flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-sm">✦</span>
                Formação e Títulos
              </h3>
              <ul className="space-y-4">
                {credentials.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5 group-hover:text-accent transition-colors" />
                    <span className="text-foreground/80 group-hover:text-primary transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
