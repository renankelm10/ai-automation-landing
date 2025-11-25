import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Instagram, MessageSquare, TrendingUp, Target, CheckCircle } from "lucide-react";

const InstagramDirect = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-transparent" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex p-4 rounded-2xl bg-accent/10 border border-accent/20">
              <Instagram className="w-16 h-16 text-accent" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-glow-accent">
              Instagram Direct
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforme suas DMs em máquina de vendas. Automatize conversas, 
              qualifique leads e converta seguidores em clientes pagantes.
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
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Respostas Automáticas</h3>
              <p className="text-muted-foreground">
                Responda DMs instantaneamente com IA treinada no seu negócio.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Qualificação de Leads</h3>
              <p className="text-muted-foreground">
                Identifique automaticamente leads quentes e priorize atendimento.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Conversão Otimizada</h3>
              <p className="text-muted-foreground">
                Fluxos de conversa otimizados para maximizar vendas no Instagram.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Instagram className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Integração Nativa</h3>
              <p className="text-muted-foreground">
                Funciona direto no Instagram. Sem apps externos ou complicações.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-16">Vantagens do Instagram Direct Automatizado</h2>
          
          <div className="space-y-6">
            {[
              "Nunca mais perca um lead por demora na resposta",
              "Converta até 3x mais seguidores em clientes",
              "Economize horas respondendo DMs manualmente",
              "Atenda em massa sem perder personalização",
              "Integração com Stories e posts para captura automática",
              "Dashboard completo com métricas de conversão"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 glass-panel p-6 rounded-xl">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Pronto para Vender Mais no Instagram?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Agende uma demonstração e veja como automatizar suas DMs pode multiplicar suas vendas.
          </p>
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <a href="https://wa.me/5549991502058?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20Instagram%20Direct%21" target="_blank" rel="noopener noreferrer">
              Agendar Conversa
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InstagramDirect;
