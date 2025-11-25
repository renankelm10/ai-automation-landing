import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, Users, Zap, CheckCircle } from "lucide-react";

const WhatsAppBot = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20">
              <MessageCircle className="w-16 h-16 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-glow">
              WhatsApp Bot
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Automatize seu atendimento no WhatsApp com inteligência artificial. 
              Responda clientes instantaneamente, 24 horas por dia, 7 dias por semana.
            </p>
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Funcionalidades Principais</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-panel p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Atendimento 24/7</h3>
              <p className="text-muted-foreground">
                Seu bot nunca dorme. Atenda clientes a qualquer hora do dia ou da noite.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Respostas Instantâneas</h3>
              <p className="text-muted-foreground">
                Elimine tempo de espera. Seus clientes recebem respostas em segundos.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Atendimento em Massa</h3>
              <p className="text-muted-foreground">
                Atenda milhares de clientes simultaneamente sem perder qualidade.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">IA Humanizada</h3>
              <p className="text-muted-foreground">
                Conversas naturais que seus clientes adoram. Parece humano, mas é IA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-16">Por Que Escolher Nosso WhatsApp Bot?</h2>
          
          <div className="space-y-6">
            {[
              "Reduza custos operacionais em até 70%",
              "Aumente a satisfação do cliente com respostas rápidas",
              "Qualifique leads automaticamente antes do contato humano",
              "Integração completa com seu CRM",
              "Personalize respostas para cada segmento de cliente",
              "Análise de sentimento em tempo real"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 glass-panel p-6 rounded-xl">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Pronto para Automatizar?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Agende uma conversa e descubra como nosso WhatsApp Bot pode transformar seu atendimento.
          </p>
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <a href="https://wa.me/5549991502058?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20WhatsApp%20Bot%21" target="_blank" rel="noopener noreferrer">
              Agendar Conversa
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatsAppBot;
