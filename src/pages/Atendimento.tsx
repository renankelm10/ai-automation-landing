import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QualificationModal } from "@/components/QualificationModal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
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
  Bot
} from "lucide-react";
import cristyalyLogo from "@/assets/cristaly-logo.png";
import feedback1 from "@/assets/testimonials/feedback-1.png";
import feedback2 from "@/assets/testimonials/feedback-2.png";
import feedback3 from "@/assets/testimonials/feedback-3.png";

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background selection:bg-primary/30">
        {/* Dynamic Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-50" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-accent/10 rounded-full blur-[100px] opacity-30" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <div className="relative z-10 container px-4 sm:px-6 lg:px-8 w-full text-center space-y-6 md:space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg mb-4 animate-slide-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs md:text-sm font-medium text-primary-foreground/80 tracking-wide">
              Revolução no Atendimento
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight break-words px-2 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Substitua processos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-accent text-glow">
              lentos e pessoas sobrecarregadas por
            </span>{" "}
            agentes de IA que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-accent text-glow">
              trabalham 24h por você.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2 sm:px-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Automatize qualificação, atendimento e follow-ups em minutos com agentes de IA 
            treinados para falar com seus leads, entender suas objeções e fechar mais vendas, 
            sem precisar de equipe extra.
          </p>

          <div className="flex justify-center items-center pt-4 sm:pt-8 animate-slide-up px-2" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="h-auto py-3 sm:py-4 px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg whitespace-normal text-center bg-primary hover:bg-primary/90 shadow-[0_0_30px_-10px_rgba(168,85,247,0.6)] hover:shadow-[0_0_40px_-5px_rgba(168,85,247,0.8)] transition-all duration-300 rounded-xl group max-w-full"
            >
              Quero um agente de IA trabalhando para mim
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Button>
          </div>
        </div>
      </section>

      {/* Agentes Section */}
      <section id="agentes" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 break-words px-2">
              Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Agentes Especialistas</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              Cada agente é treinado para uma função específica, garantindo máxima eficiência
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-16">
            {agents.map((agent, index) => (
              <div
                key={index}
                className="group p-4 sm:p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="mb-3 md:mb-4 inline-flex p-2.5 md:p-3 rounded-xl bg-primary/20 text-primary group-hover:scale-110 transition-transform duration-300">
                  <agent.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2">{agent.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  {agent.description}
                </p>
              </div>
            ))}
          </div>

          <div className="glass-panel p-6 md:p-10 rounded-2xl text-center max-w-4xl mx-auto">
            <Bot className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4 md:mb-6" />
            <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed">
              "Tudo isso integrado às suas ferramentas atuais (CRM, WhatsApp,
              Instagram) sem precisar de código, equipe técnica ou dor de cabeça."
            </p>
          </div>
        </div>
      </section>

      {/* Diferencial Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />

        <div className="max-w-5xl mx-auto w-full relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-10 md:mb-16 leading-tight break-words px-2">
            Enquanto o mercado vende 'chatbots', nós entregamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Agentes de IA Completos</span>
          </h2>

          <div className="grid gap-3 sm:gap-4 md:gap-6">
            {[
              "Treinados com dados reais do seu negócio (nada de respostas genéricas).",
              "Otimizados continuamente pela nossa equipe com base em performance.",
              "Focados em conversão real e ROI, não apenas em responder 'oi'.",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 sm:gap-4 md:gap-6 p-3 sm:p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <p className="text-sm sm:text-base md:text-lg text-white/90">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 px-2">
              Resultados <span className="text-primary">Reais</span>
            </h2>
          </div>

          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-lg mx-auto"
          >
            <CarouselContent>
              {[feedback1, feedback2, feedback3].map((feedback, index) => (
                <CarouselItem key={index}>
                  <div className="p-2">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                      <img
                        src={feedback}
                        alt={`Feedback de cliente ${index + 1}`}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4" />
            <CarouselNext className="right-2 md:right-4" />
          </Carousel>
        </div>
      </section>

      {/* Entrega Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 break-words px-2">
              Zero Trabalho Técnico. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Nós Entregamos Tudo Pronto.</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              Basta passar as informações do seu negócio. Nós cuidamos de toda a
              implementação e entregamos uma operação completa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-16">
            <div className="space-y-4 bg-white/5 p-4 sm:p-6 md:p-8 rounded-2xl border border-white/10">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 flex items-center gap-3">
                <Target className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                Implementação
              </h3>
              {features.column1.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="mt-1 w-4 h-4 md:w-5 md:h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/40 transition-colors">
                    <CheckCircle2 className="w-2.5 h-2.5 md:w-3 md:h-3 text-primary" />
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground group-hover:text-white transition-colors">{feature}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 bg-white/5 p-4 sm:p-6 md:p-8 rounded-2xl border border-white/10">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-4 md:mb-6 flex items-center gap-3">
                <Rocket className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                Operação Contínua
              </h3>
              {features.column2.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="mt-1 w-4 h-4 md:w-5 md:h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/40 transition-colors">
                    <CheckCircle2 className="w-2.5 h-2.5 md:w-3 md:h-3 text-accent" />
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground group-hover:text-white transition-colors">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 px-2">
              O Que Você Ganha na <span className="text-primary">Prática</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-4 sm:p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="mb-3 md:mb-4 inline-flex p-2.5 md:p-3 rounded-xl bg-primary/20 text-primary group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 mb-12 md:mb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto w-full text-center space-y-6 md:space-y-10 relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold leading-tight tracking-tight break-words px-2 hyphens-auto">
            Sua concorrência ainda está <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">treinando pessoas</span>. Você pode <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-glow">treinar uma IA</span>.
          </h2>

          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Em 15 a 21 dias, você recebe uma operação completa, 100%
            personalizada e integrada. Sem dor de cabeça.
          </p>

          <div className="px-2">
            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="h-auto py-3 sm:py-4 px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg whitespace-normal text-center bg-primary hover:bg-primary/90 shadow-[0_0_30px_-10px_rgba(168,85,247,0.6)] hover:shadow-[0_0_40px_-5px_rgba(168,85,247,0.8)] transition-all duration-300 rounded-xl group max-w-full"
            >
              🚀 Quero meu Agente de IA Agora
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 border-t border-white/10">
        <p className="text-center text-xs md:text-sm text-muted-foreground">
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
