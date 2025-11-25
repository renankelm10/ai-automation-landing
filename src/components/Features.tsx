import { Bot, Workflow, Plug, Brain, Clock, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Automação de Atendimento",
    description: "Chatbots inteligentes no WhatsApp, Instagram e Web. Respostas automáticas 24/7 que liberam sua equipe.",
  },
  {
    icon: Workflow,
    title: "Automação de Processos",
    description: "Workflows automáticos para tarefas repetitivas. Notificações, lembretes e aprovações sem intervenção manual.",
  },
  {
    icon: Plug,
    title: "Integração com Sistemas",
    description: "Conecte com CRM, planilhas e ferramentas que você já usa. Centralize informações em um só lugar.",
  },
  {
    icon: Brain,
    title: "IA Personalizada",
    description: "Inteligência artificial treinada especificamente para seu negócio, que aprende com cada interação.",
  },
  {
    icon: Clock,
    title: "Disponibilidade Total",
    description: "Seu negócio nunca fecha. Atenda clientes a qualquer hora sem aumentar custos operacionais.",
  },
  {
    icon: BarChart3,
    title: "Relatórios Simples",
    description: "Acompanhe métricas importantes com dashboards claros. Veja o que está funcionando de forma visual.",
  },
];

export const Features = () => {
  return (
    <section className="py-16 md:py-32 px-4 relative overflow-hidden bg-background">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-24 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
            Por Que Escolher a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Cristaly</span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Tecnologia de ponta para transformar a forma como você se comunica com seus clientes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm"
            >
              <div className="flex flex-col items-start space-y-4 md:space-y-6">
                <div className="p-3 md:p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-7 h-7 md:w-8 md:h-8 text-primary group-hover:text-accent transition-colors duration-500" />
                </div>

                <div className="space-y-2 md:space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
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
