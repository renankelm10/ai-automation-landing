import { MessageSquare, Target, Bell, Database } from "lucide-react";

const useCases = [
  {
    icon: MessageSquare,
    title: "Atendimento Automático",
    description: "Responda FAQs no WhatsApp e Instagram automaticamente. Coleta informações e transfere para humano quando necessário.",
  },
  {
    icon: Target,
    title: "Qualificação de Leads",
    description: "Faz perguntas iniciais para entender o cliente. Agenda reuniões automaticamente com os leads mais qualificados.",
  },
  {
    icon: Bell,
    title: "Automação de Processos",
    description: "Lembretes de pagamento, confirmações de agendamento e notificações internas funcionam sozinhos.",
  },
  {
    icon: Database,
    title: "Integração de Dados",
    description: "Conecta com planilhas e CRM. Sincroniza informações e centraliza dados em um único lugar.",
  },
];

export const UseCases = () => {
  return (
    <section className="py-16 md:py-32 px-4 relative overflow-hidden bg-black/20">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-24 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
            Casos de Uso <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Práticos</span>
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Veja como a automação pode funcionar no seu dia a dia
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group p-4 sm:p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm"
            >
              <div className="flex flex-col items-start space-y-3 sm:space-y-4 md:space-y-6">
                <div className="p-2.5 sm:p-3 md:p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                  <useCase.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary group-hover:text-accent transition-colors duration-500" />
                </div>

                <div className="space-y-2 md:space-y-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">
                    {useCase.description}
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
