import { MessageCircle, Settings, LineChart, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Conversa Inicial",
    description: "Entendemos seu negócio e identificamos oportunidades de automação em uma conversa de 20-30 minutos.",
  },
  {
    icon: Settings,
    number: "02",
    title: "Configuração Personalizada",
    description: "Criamos e treinamos a automação especificamente para suas necessidades e processos.",
  },
  {
    icon: LineChart,
    number: "03",
    title: "Acompanhamento",
    description: "Ajustamos e melhoramos conforme você usa. A IA evolui junto com seu negócio.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-32 px-4 bg-black/40 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Como <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Processo simples e transparente para começar a automatizar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center space-y-6 group"
            >
              {/* Icon Circle */}
              <div className="relative z-10 w-24 h-24 rounded-full bg-background border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all duration-500 shadow-lg group-hover:shadow-primary/20">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <step.icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors duration-500" />

                {/* Number Badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-white shadow-lg">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3 px-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Mobile Arrow */}
              {index < steps.length - 1 && (
                <div className="md:hidden text-muted-foreground/30">
                  <ArrowRight className="w-8 h-8 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
