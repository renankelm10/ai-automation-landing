import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { LineChart, Brain, TrendingUp, Target, CheckCircle } from "lucide-react";

const AnalyticsIA = () => {
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
              <LineChart className="w-16 h-16 text-accent" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-glow-accent">
              Analytics IA
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Decisões baseadas em dados, impulsionadas por inteligência artificial. 
              Preveja tendências, otimize estratégias e maximize resultados.
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
                <Brain className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Análise Preditiva</h3>
              <p className="text-muted-foreground">
                IA prevê comportamento de clientes e tendências de vendas futuras.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Insights em Tempo Real</h3>
              <p className="text-muted-foreground">
                Dashboards ao vivo com métricas que realmente importam.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Otimização Automática</h3>
              <p className="text-muted-foreground">
                Recomendações de IA para melhorar cada aspecto do negócio.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <LineChart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Relatórios Inteligentes</h3>
              <p className="text-muted-foreground">
                Relatórios gerados automaticamente com conclusões acionáveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-16">O Poder dos Dados com IA</h2>
          
          <div className="space-y-6">
            {[
              "Identifique oportunidades de crescimento antes da concorrência",
              "Reduza custos eliminando estratégias que não funcionam",
              "Aumente ROI com campanhas baseadas em dados reais",
              "Preveja comportamento de clientes com precisão",
              "Visualize métricas complexas de forma simples",
              "Receba alertas automáticos sobre anomalias e oportunidades"
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
          <h2 className="text-4xl font-bold">Tome Decisões Mais Inteligentes</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra como Analytics IA pode transformar seus dados em vantagem competitiva.
          </p>
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <a href="https://wa.me/5549991502058?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20Analytics%20IA%21" target="_blank" rel="noopener noreferrer">
              Agendar Conversa
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AnalyticsIA;
