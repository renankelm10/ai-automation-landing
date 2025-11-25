import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Database, Users, BarChart, Workflow, CheckCircle } from "lucide-react";

const CrmIntegrado = () => {
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
              <Database className="w-16 h-16 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-glow">
              CRM Integrado
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Centralize todos os seus clientes em um só lugar. Gerencie leads, 
              automatize follow-ups e nunca perca uma oportunidade de venda.
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
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Gestão de Contatos</h3>
              <p className="text-muted-foreground">
                Todos os seus clientes organizados em um banco de dados inteligente.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Workflow className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Automação de Funil</h3>
              <p className="text-muted-foreground">
                Automatize follow-ups e mova leads pelo funil sem esforço.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <BarChart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Relatórios Avançados</h3>
              <p className="text-muted-foreground">
                Visualize métricas de vendas, conversão e performance em tempo real.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Database className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Integração Total</h3>
              <p className="text-muted-foreground">
                Conecte com WhatsApp, Instagram e todas as suas ferramentas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-16">Por Que Usar Nosso CRM?</h2>
          
          <div className="space-y-6">
            {[
              "Centralize todos os leads em um único sistema",
              "Histórico completo de conversas e interações",
              "Segmentação inteligente de clientes",
              "Pipeline visual para acompanhar negociações",
              "Notificações automáticas de follow-up",
              "Sincronização em tempo real com todos os canais"
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
          <h2 className="text-4xl font-bold">Organize Seu Negócio Hoje</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Agende uma demonstração e veja como nosso CRM pode transformar sua gestão de vendas.
          </p>
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <a href="https://wa.me/5549991502058?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20CRM%20Integrado%21" target="_blank" rel="noopener noreferrer">
              Agendar Conversa
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CrmIntegrado;
