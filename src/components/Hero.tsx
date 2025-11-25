import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap, Globe, Settings } from "lucide-react";
import cristalyLogo from "@/assets/cristaly-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background selection:bg-primary/30">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-accent/10 rounded-full blur-[100px] opacity-30" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 px-4 pt-20 pb-32">
        <div className="flex flex-col items-center text-center space-y-10 animate-fade-in">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary-foreground/80 tracking-wide">
              A Nova Era da Automação
            </span>
          </div>

          {/* Main Content */}
          <div className="space-y-6 max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <img
                src={cristalyLogo}
                alt="Cristaly AI"
                className="w-16 h-16 md:w-20 md:h-20 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
              />
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                Cristaly<span className="text-primary">.ai</span>
              </h1>
            </div>

            <h2 className="text-4xl md:text-7xl font-bold tracking-tight leading-tight animate-slide-up" style={{ animationDelay: "0.3s" }}>
              Automatize Seu Negócio com <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-accent text-glow">
                Inteligência Artificial
              </span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: "0.4s" }}>
              Automatize atendimento, vendas e processos com IA. 
              Ofereça suporte 24/7 e escale seu negócio de forma inteligente.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center items-center animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <Button
              size="lg"
              asChild
              className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 shadow-[0_0_30px_-10px_rgba(168,85,247,0.6)] hover:shadow-[0_0_40px_-5px_rgba(168,85,247,0.8)] transition-all duration-300 rounded-xl group"
            >
              <a href="https://wa.me/554991502058?text=Ol%C3%A1%2C%20quero%20automatizar%20meu%20neg%C3%B3cio%21" target="_blank" rel="noopener noreferrer">
                Agendar Conversa
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full max-w-5xl animate-slide-up" style={{ animationDelay: "0.6s" }}>
            {[
              {
                icon: Bot,
                title: "Atendimento 24/7",
                desc: "Respostas automáticas a qualquer hora, em qualquer canal."
              },
              {
                icon: Zap,
                title: "Qualificação de Leads",
                desc: "Identifica e prioriza automaticamente os melhores clientes."
              },
              {
                icon: Settings,
                title: "Automação de Processos",
                desc: "Lembretes, agendamentos e notificações no piloto automático."
              }
            ].map((feature, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/20 text-primary group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
