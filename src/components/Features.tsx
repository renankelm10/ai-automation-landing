import { Bot, Zap, TrendingUp, Shield, MessageSquare, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Bot,
    title: "IA Avançada",
    description: "Chatbots inteligentes que aprendem com cada interação para melhor atender seus clientes.",
  },
  {
    icon: Zap,
    title: "Respostas Instantâneas",
    description: "Atenda seus clientes em segundos, 24 horas por dia, 7 dias por semana, sem interrupções.",
  },
  {
    icon: MessageSquare,
    title: "Multi-Canal",
    description: "WhatsApp, Instagram, Facebook Messenger e mais, tudo em uma única plataforma.",
  },
  {
    icon: TrendingUp,
    title: "Aumente Vendas",
    description: "Conversões aumentam até 3x com atendimento rápido e personalizado por IA.",
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Dados criptografados e protegidos seguindo as melhores práticas de segurança.",
  },
  {
    icon: Clock,
    title: "Economia de Tempo",
    description: "Automatize tarefas repetitivas e foque no que realmente importa para o seu negócio.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Por Que Escolher a <span className="font-serif bg-gradient-primary bg-clip-text text-transparent">Cristaly</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnologia de ponta para transformar a forma como você se comunica com seus clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-start space-y-4">
                <div className="p-3 bg-gradient-primary rounded-xl">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
