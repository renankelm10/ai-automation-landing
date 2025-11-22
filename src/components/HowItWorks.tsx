import { MessageCircle, Settings, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Conecte Seus Canais",
    description: "Integre WhatsApp, Instagram e outras plataformas em minutos, sem complicação.",
  },
  {
    icon: Settings,
    number: "02",
    title: "Configure a IA",
    description: "Personalize o comportamento do chatbot de acordo com o seu negócio e marca.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Comece a Automatizar",
    description: "Deixe a IA trabalhar por você enquanto foca em expandir seu negócio.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Como <span className="bg-gradient-accent bg-clip-text text-transparent">Funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Em apenas 3 passos simples, você está pronto para revolucionar seu atendimento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center space-y-4 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-accent" />
              )}

              {/* Step number */}
              <div className="relative z-10 w-32 h-32 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                <span className="text-4xl font-bold">{step.number}</span>
              </div>

              {/* Icon */}
              <div className="p-4 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-xl">
                <step.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
