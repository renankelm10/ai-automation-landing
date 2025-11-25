import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Proprietária",
    company: "LojaTech",
    industry: "E-commerce",
    initials: "MS",
    color: "from-primary to-accent",
    testimonial: "Estava gastando horas respondendo as mesmas perguntas no WhatsApp. Agora o sistema responde automaticamente e eu foco apenas nos casos complexos. Liberou muito do meu tempo.",
  },
  {
    name: "Carlos Mendes",
    role: "Gerente",
    company: "Studio Fitness",
    industry: "Academia",
    initials: "CM",
    color: "from-accent to-primary",
    testimonial: "Automação de agendamentos e lembretes foi um divisor de águas. Menos faltas e mais tempo para cuidar dos alunos que estão presentes.",
  },
  {
    name: "Ana Ferreira",
    role: "CEO",
    company: "ConsultaPro",
    industry: "Consultoria",
    initials: "AF",
    color: "from-purple-400 to-primary",
    testimonial: "A qualificação automática de leads economiza horas da minha equipe. Só conversamos com quem realmente tem potencial de fechar.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden bg-black/40">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            O Que Dizem <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Nossos Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empresas que já estão economizando tempo com automação inteligente
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm space-y-6"
            >
              {/* Avatar and Info */}
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg`}>
                  {testimonial.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                  <p className="text-xs text-muted-foreground/60">{testimonial.industry}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial */}
              <p className="text-muted-foreground leading-relaxed group-hover:text-white/90 transition-colors">
                "{testimonial.testimonial}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
