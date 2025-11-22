import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 px-4 bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Pronto Para Transformar Seu <span className="font-serif bg-gradient-primary bg-clip-text text-transparent">Atendimento</span>?
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground">
            Junte-se a centenas de empresas que já automatizaram seu atendimento com a Cristaly
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Começar Gratuitamente
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              <Mail className="mr-2 w-5 h-5" />
              Falar com Especialista
            </Button>
          </div>

          <div className="pt-12 border-t border-border/30 mt-16">
            <p className="text-sm text-muted-foreground">
              Sem cartão de crédito necessário • Configuração em minutos • Suporte dedicado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
