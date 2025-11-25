import { Bot, Zap, TrendingUp, Shield, MessageSquare, Clock } from "lucide-react";

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
    <section className="py-32 px-4 relative overflow-hidden bg-background">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Por Que Escolher a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Cristaly</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnologia de ponta para transformar a forma como você se comunica com seus clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm"
            >
              <div className="flex flex-col items-start space-y-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-500" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
