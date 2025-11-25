import { Button } from "@/components/ui/button";
import { Calendar, Mail, CheckCircle2 } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-16 backdrop-blur-xl shadow-2xl text-center space-y-10 overflow-hidden relative group">

          {/* Glow Effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Vamos Conversar Sobre <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-glow">
              Automação?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Agende uma conversa de 30 minutos para entender se faz sentido para o seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
            <Button
              size="lg"
              className="h-16 px-10 text-xl bg-white text-black hover:bg-white/90 hover:scale-105 transition-all duration-300 rounded-2xl shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
            >
              <Calendar className="mr-2 w-6 h-6" />
              Agendar Conversa
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-16 px-10 text-xl border-white/20 bg-transparent hover:bg-white/10 text-white transition-all duration-300 rounded-2xl"
            >
              <Mail className="mr-2 w-6 h-6" />
              Enviar Mensagem
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-muted-foreground/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Entenda seu caso específico</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Veja exemplos práticos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Sem pressão, sem compromisso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
