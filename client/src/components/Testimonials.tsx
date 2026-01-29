import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const reviews = [
    {
      name: "Luciana",
      text: "Gentil, nos explicou tudo e tirou todas as nossas dúvidas.",
      rating: 5,
      initial: "L",
      color: "bg-green-100 text-green-700"
    },
    {
      name: "Paciente",
      text: "Fernanda é uma médica geriatra extremamente competente!",
      rating: 5,
      image: "/images/reviewer-photo.jpg", // Placeholder if image unavailable, using initial fallback
      initial: "P",
      color: "bg-orange-100 text-orange-700"
    },
    {
      name: "Daniela",
      text: "Fernanda Melo foi muito boa.",
      rating: 5,
      initial: "D",
      color: "bg-teal-100 text-teal-700"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-secondary/10 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 mix-blend-multiply pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/40 rounded-full blur-3xl -z-10" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-xs font-bold tracking-widest uppercase">Depoimentos</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
            O que dizem nossos pacientes
          </h2>
          <div className="flex items-center justify-center gap-2 text-yellow-500">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-muted-foreground text-sm font-medium">(5.0 no Google)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="border-none shadow-lg bg-white/80 backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${review.color}`}>
                    {review.initial}
                  </div>
                  <Quote className="w-8 h-8 text-primary/10" />
                </div>
                
                <div className="flex text-yellow-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-muted-foreground italic leading-relaxed">
                  "{review.text}"
                </p>

                <div className="pt-4 border-t border-gray-100">
                  <p className="font-heading font-bold text-primary">{review.name}</p>
                  <p className="text-xs text-muted-foreground">Avaliação no Google</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://www.google.com/search?q=Dra.+Fernanda+Carvalho+Melo+Camino" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors border-b-2 border-primary/20 hover:border-accent pb-1"
          >
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
