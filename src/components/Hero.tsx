import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import cristalyLogo from "@/assets/cristaly-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          {/* Logo */}
          <div className="flex items-center gap-4 mb-4">
            <img 
              src={cristalyLogo} 
              alt="Cristaly - Automação Inteligente com IA" 
              className="w-24 h-24 md:w-32 md:h-32 animate-scale-in drop-shadow-glow"
            />
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground">
              Cristaly<sup className="text-2xl">™</sup>
            </h1>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-full">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Automação Inteligente com IA</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-5xl leading-tight">
            Atendimento <span className="bg-gradient-primary bg-clip-text text-transparent">Lento?</span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl">Mude Isso Agora</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
            Automatize seu atendimento no WhatsApp e redes sociais com inteligência artificial. 
            Responda mais rápido, converta mais vendas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Começar Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Ver Como Funciona
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/30">
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">98%</p>
              <p className="text-sm text-muted-foreground">Taxa de Resposta</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent">24/7</p>
              <p className="text-sm text-muted-foreground">Atendimento</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">3x</p>
              <p className="text-sm text-muted-foreground">Mais Conversões</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
