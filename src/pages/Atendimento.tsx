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
  Rocket,
  Users,
  ArrowRight,
  Bot,
  Sparkles
} from "lucide-react";
import cristyalyLogo from "@/assets/cristaly-logo.png";

export default function Atendimento() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const agents = [
    {
      icon: Target,
      title: "IA de Qualificação",
      description:
        "Identifica leads prontos para comprar e descarta curiosos automaticamente.",
      color: "text-primary",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: MessageSquare,
      title: "IA de Atendimento",
      description:
        "Responde perguntas em tempo real com linguagem natural e 100% personalizada.",
      color: "text-accent",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: TrendingUp,
      title: "IA de Conversão",
      description:
        "Acompanha leads até a decisão, com follow-ups baseados em comportamento.",
      color: "text-primary",
      gradient: "from-purple-500/20 to-purple-500/5"
    },
  ];

  const features = {
    column1: [
      "Assistente de IA 100% personalizado",
      "Criação de follow-ups inteligentes",
      "Integração com seus sistemas atuais",
      "Dashboard de performance em tempo real",
      "Treinamento completo da IA",
    ],
    column2: [
      "Otimização contínua dos scripts",
      "Setup completo e integrações",
      "Disparo de mensagens ilimitado",
      "Controle total das conversas",
      "Suporte próximo e humanizado",
    ],
  };

  const benefits = [
    {
      icon: CheckCircle2,
      title: "Consistência Total",
      description:
        "Seu script de vendas é seguido perfeitamente, sempre, sem variações ou esquecimentos.",
      color: "text-primary",
    },
    {
      icon: TrendingUp,
      title: "Mais Conversão",
      description:
        "Respostas instantâneas nos momentos em que o lead está quente aumentam o fechamento.",
      color: "text-accent",
    },
    {
      icon: TrendingDown,
      title: "Redução de Custos",
      description:
        "Economia de até 80% em tempo e recursos, sem precisar contratar e treinar mais gente.",
      color: "text-primary",
    },
    {
      icon: Clock,
      title: "Disponibilidade 24/7",
      description:
        "Atendimento ativo todos os dias, inclusive finais de semana, feriados e madrugadas.",
      color: "text-accent",
    },
    {
      icon: Rocket,
      title: "Escala Infinita",
      description:
        "Atenda 10 ou 10.000 leads simultaneamente sem perder a qualidade ou a paciência.",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Zero Dependência",
      description:
        "Seu negócio funciona independente de variações de humor, faltas ou turnover da equipe.",
      color: "text-accent",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg mb-4 animate-slide-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground/80 tracking-wide">
              Revolução no Atendimento
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Substitua processos <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/60">lentos e manuais</span> por <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-accent text-glow">
              Agentes de IA 24/7
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Automatize qualificação, atendimento e follow-ups. Treine agentes de IA para falar com seus leads,
            entender objeções e fechar vendas, tudo isso sem aumentar sua equipe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 shadow-[0_0_30px_-10px_rgba(168,85,247,0.6)] hover:shadow-[0_0_40px_-5px_rgba(168,85,247,0.8)] transition-all duration-300 rounded-xl group"
            >
              Quero um Agente de IA
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('agentes')?.scrollIntoView({ behavior: 'smooth' })}
              className="h-14 px-8 text-lg border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white hover:text-white transition-all duration-300 rounded-xl"
            >
              Ver Modelos
            </Button>
          </div>
        </div>
      </section>

      {/* Agentes Section */}
      <section id="agentes" className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Agentes Especialistas</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada agente é treinado para uma função específica, garantindo máxima eficiência
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {agents.map((agent, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <agent.icon className={`w-7 h-7 ${agent.color}`} />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white">{agent.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {agent.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-panel p-8 md:p-12 rounded-3xl border-primary/20 bg-gradient-to-br from-white/5 to-transparent text-center max-w-4xl mx-auto">
            <Bot className="w-12 h-12 text-primary mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed">
              "Tudo isso integrado às suas ferramentas atuais (CRM, WhatsApp,
              Instagram) sem precisar de código, equipe técnica ou dor de cabeça."
            </p>
          </div>
        </div>
      </section>

      {/* Diferencial Section */}
      <section className="py-24 px-4 bg-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 leading-tight">
            Enquanto o mercado vende 'chatbots', <br />
            nós entregamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Agentes de IA Completos</span>
          </h2>

          <div className="grid gap-6">
            {[
              "Treinados com dados reais do seu negócio (nada de respostas genéricas).",
              "Otimizados continuamente pela nossa equipe com base em performance.",
              "Focados em conversão real e ROI, não apenas em responder 'oi'.",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-6 p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <p className="text-lg md:text-xl text-white/90">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Resultados <span className="text-primary">Reais</span>
            </h2>
          </div>

          <div className="glass-panel border-primary/20 p-8 md:p-12 rounded-[2.5rem] relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>

            <div className="text-center space-y-8 pt-6">
              <p className="text-xl md:text-2xl italic text-white/90 leading-relaxed">
                "A Cristaly transformou nossa operação. Nosso time agora foca no
                que realmente importa enquanto a IA cuida de toda qualificação e
                follow-up. Aumentamos 40% em conversão em apenas 2 meses."
              </p>

              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg mb-2">
                  JM
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">João Mendes</h4>
                  <p className="text-sm text-primary">CEO, Tech Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entrega Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Zero Trabalho Técnico. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Nós Entregamos Tudo Pronto.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Basta passar as informações do seu negócio. Nós cuidamos de toda a
              implementação e entregamos uma operação completa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
            <div className="space-y-4 bg-white/5 p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                Implementação
              </h3>
              {features.column1.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/40 transition-colors">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-muted-foreground group-hover:text-white transition-colors">{feature}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 bg-white/5 p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Rocket className="w-6 h-6 text-accent" />
                Operação Contínua
              </h3>
              {features.column2.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="mt-1 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/40 transition-colors">
                    <CheckCircle2 className="w-3 h-3 text-accent" />
                  </div>
                  <p className="text-muted-foreground group-hover:text-white transition-colors">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              O Que Você Ganha na <span className="text-primary">Prática</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-24 px-4 mb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Sua concorrência ainda está <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">treinando pessoas</span>. <br />
            Você pode <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-glow">treinar uma IA</span>.
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Em 15 a 21 dias, você recebe uma operação completa, 100%
            personalizada e integrada. Sem dor de cabeça.
          </p>

          <Button
            size="lg"
            onClick={() => setIsModalOpen(true)}
            className="h-16 px-10 text-xl bg-white text-black hover:bg-white/90 hover:scale-105 transition-all duration-300 rounded-2xl shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
          >
            🚀 Quero meu Agente de IA Agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 bg-black/40">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Cristaly AI. Todos os direitos reservados.
        </p>
      </footer>

      <QualificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
