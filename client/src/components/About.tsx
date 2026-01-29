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
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="relative aspect-[3/4] md:aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/doctor-real-photo.png" 
                alt="Dra. Fernanda Melo atendendo paciente" 
                className="w-full h-full object-cover object-[50%_35%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent mix-blend-multiply" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-accent/40 rounded-full blur-3xl -z-10" />
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <div className="space-y-2">
              <span className="text-secondary font-bold tracking-wider text-sm uppercase">Sobre a Médica</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Dra. Fernanda Melo
              </h2>
              <p className="text-primary font-medium text-lg">CRM 123456 • RQE 12345</p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Acredito que envelhecer é um privilégio que deve ser vivido com plenitude. Minha missão é oferecer um olhar atento e integral à saúde do idoso, indo além do tratamento de doenças.
              </p>
              <p>
                Com mais de 10 anos de experiência em geriatria, meu foco é preservar a autonomia e a qualidade de vida, compreendendo que cada paciente traz consigo uma história única que merece ser ouvida e respeitada.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="font-heading text-xl font-bold mb-4 text-foreground">Formação e Títulos</h3>
              <ul className="space-y-3">
                {credentials.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
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
