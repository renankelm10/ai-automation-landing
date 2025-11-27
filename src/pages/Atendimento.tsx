import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QualificationModal } from "@/components/QualificationModal";
import {
  Target,
  MessageSquare,
  TrendingUp,
  CheckCircle2,
  Clock,
  TrendingDown,
  CalendarClock,
  Rocket,
  Users,
} from "lucide-react";
import cristyalyLogo from "@/assets/cristaly-logo.png";

export default function Atendimento() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const agents = [
    {
      icon: Target,
      title: "IA de Qualificação",
      description:
        "identifica leads prontos para comprar e descarta curiosos.",
      color: "text-primary",
    },
    {
      icon: MessageSquare,
      title: "IA de Atendimento",
      description:
        "responde perguntas em tempo real com linguagem natural e personalizada.",
      color: "text-accent",
    },
    {
      icon: TrendingUp,
      title: "IA de Conversão",
      description:
        "acompanha leads até a decisão, com mensagens baseadas em comportamento e intenção.",
      color: "text-primary",
    },
  ];

  const features = {
    column1: [
      "Assistente de IA 100% personalizado e otimizado para o seu negócio",
      "Criação de follow-ups inteligentes",
      "Integração com sistemas que você já usa",
      "Dashboard de performance e acompanhamento",
      "Treinamento completo da sua equipe",
    ],
    column2: [
      "Desenvolvimento e otimização dos scripts de vendas",
      "Integrações com CRM e setup completo",
      "Disparo de mensagens ilimitado",
      "Central de controle de conversas com acesso ilimitado",
      "Suporte próximo e contínuo",
    ],
  };

  const benefits = [
    {
      icon: CheckCircle2,
      title: "Maior consistência no atendimento",
      description:
        "Seu script de vendas é seguido perfeitamente, sempre, sem variações humanas.",
      color: "text-primary",
    },
    {
      icon: TrendingUp,
      title: "Aumento de conversão e vendas",
      description:
        "Respostas rápidas nos momentos em que o lead está mais quente aumentam fechamento.",
      color: "text-accent",
    },
    {
      icon: TrendingDown,
      title: "Redução de custos operacionais",
      description:
        "Economia de até 80% em tempo e recursos, sem precisar contratar mais gente.",
      color: "text-primary",
    },
    {
      icon: Clock,
      title: "Disponibilidade 24/7",
      description:
        "Atendimento ativo todos os dias, inclusive finais de semana e feriados.",
      color: "text-accent",
    },
    {
      icon: Rocket,
      title: "Operação escalável",
      description:
        "Atenda mais leads sem depender de motivação ou disponibilidade do time.",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Menos dependência humana",
      description:
        "Seu negócio funciona independente de variações de humor ou turnover da equipe.",
      color: "text-accent",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <img
            src={cristyalyLogo}
            alt="Cristaly.ai"
            className="h-12 mx-auto mb-8"
          />
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Substitua processos{" "}
            <span className="text-primary">lentos e pessoas sobrecarregadas</span>{" "}
            por agentes de IA que{" "}
            <span className="text-accent">trabalham 24h por você</span>.
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Automatize qualificação, atendimento e follow-ups em minutos com
            agentes de IA treinados para falar com seus leads, entender suas
            objeções e fechar mais vendas, sem precisar de equipe extra.
          </p>
          
          <Button
            size="lg"
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6 h-auto"
          >
            Quero um agente de IA trabalhando para mim
          </Button>
        </div>
      </section>

      {/* Agentes Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {agents.map((agent, index) => (
              <div
                key={index}
                className="glass-panel border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:scale-105"
              >
                <agent.icon className={`w-12 h-12 mb-4 ${agent.color}`} />
                <h3 className="text-xl font-semibold mb-3">{agent.title}</h3>
                <p className="text-muted-foreground">{agent.description}</p>
              </div>
            ))}
          </div>
          
          <p className="text-center text-lg text-muted-foreground max-w-4xl mx-auto">
            Tudo isso integrado às suas ferramentas atuais (CRM, WhatsApp,
            Instagram, plataformas de agendamento, prontuários, planilhas) sem
            precisar de código, equipe técnica ou tempo perdido.
          </p>
        </div>
      </section>

      {/* Diferencial Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Enquanto o mercado vende 'chatbots', nós entregamos{" "}
            <span className="text-primary">agentes de IA completos</span>.
          </h2>
          
          <div className="space-y-6">
            {[
              "Treinados com dados do seu negócio (não respostas genéricas).",
              "São otimizados continuamente pela nossa equipe com base nos resultados.",
              "Entregam aumento real de conversão e economia de até 80% em tempo operacional.",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Depoimentos de Clientes
          </h2>
          
          <div className="glass-panel border-accent/20 p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                JM
              </div>
              <div>
                <h4 className="font-semibold">João Mendes</h4>
                <p className="text-sm text-muted-foreground">CEO, Tech Solutions</p>
              </div>
            </div>
            <p className="text-lg italic">
              "A Cristaly transformou nossa operação. Nosso time agora foca no
              que realmente importa enquanto a IA cuida de toda qualificação e
              follow-up. Aumentamos 40% em conversão em apenas 2 meses."
            </p>
          </div>
        </div>
      </section>

      {/* Entrega Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background via-accent/5 to-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
            Você não precisa fazer nada técnico.{" "}
            <span className="text-primary">Nós entregamos tudo pronto.</span>
          </h2>
          
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Basta passar as informações do seu negócio. Nós cuidamos de toda a
            implementação e entregamos uma operação completa:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-4">
              {features.column1.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {features.column2.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            O que você ganha na prática?
          </h3>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="glass-panel border-primary/20 p-6 hover:border-accent/40 transition-all duration-300"
              >
                <benefit.icon className={`w-10 h-10 mb-4 ${benefit.color}`} />
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-20 px-4 mb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Sua concorrência ainda está{" "}
            <span className="text-primary">treinando pessoas</span>. Você pode{" "}
            <span className="text-accent">treinar uma IA</span>.
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Em 15 a 21 dias, você recebe uma operação completa, 100%
            personalizada para o seu negócio e integrada às suas ferramentas sem
            precisar se envolver em nada técnico.
          </p>
          
          <Button
            size="lg"
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-primary hover:opacity-90 text-xl px-10 py-7 h-auto"
          >
            🚀 Quero meu agente de IA agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <p className="text-center text-muted-foreground">
          © 2025 Cristaly AI. Todos os direitos reservados.
        </p>
      </footer>

      <QualificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
