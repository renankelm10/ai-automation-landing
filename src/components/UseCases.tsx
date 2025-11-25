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
    <section className="py-32 px-4 relative overflow-hidden bg-background">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Casos de Uso <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Práticos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja como a automação pode funcionar no seu dia a dia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm"
            >
              <div className="flex flex-col items-start space-y-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                  <useCase.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-500" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
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
