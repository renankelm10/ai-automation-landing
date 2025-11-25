import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Target, Heart, Zap, Shield } from "lucide-react";

const SobreNos = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-glow">
              Sobre a Cristaly.ai
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nascemos para trazer flexibilidade e eficiência para empresas locais através da inteligência artificial.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Nossa História</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              A Cristaly.ai foi criada por <strong className="text-foreground">Renan Kelm</strong> com uma proposta clara: 
              trazer maior flexibilidade para empresas locais da região onde morava.
            </p>
            <p>
              A ideia surgiu ao perceber que muitos negócios perdiam tempo com tarefas repetitivas 
              que poderiam ser automatizadas. Com a inteligência artificial certa, seria possível 
              reduzir tempo e melhorar o trabalho de diversas áreas e setores.
            </p>
            <p>
              Assim nasceu a Cristaly.ai — uma solução pensada para empresas que querem crescer 
              de forma inteligente, otimizando processos e liberando tempo para o que realmente importa.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Nossos Valores</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-panel p-8 rounded-2xl space-y-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Foco no Cliente</h3>
              <p className="text-muted-foreground">
                Soluções pensadas para resolver problemas reais do seu negócio.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl space-y-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Inovação</h3>
              <p className="text-muted-foreground">
                Sempre buscando as melhores tecnologias do mercado.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl space-y-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Eficiência</h3>
              <p className="text-muted-foreground">
                Reduzir tempo e melhorar resultados é nosso objetivo.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl space-y-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Transparência</h3>
              <p className="text-muted-foreground">
                Comunicação clara e resultados mensuráveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl font-bold">Nossa Missão</h2>
          <p className="text-xl text-muted-foreground">
            Ajudar empresas a otimizarem seus processos e reduzirem tempo através de 
            soluções de inteligência artificial práticas e eficientes.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Vamos Crescer Juntos?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Agende uma conversa e descubra como podemos ajudar seu negócio a alcançar novos patamares.
          </p>
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <a href="https://wa.me/5549991502058?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20a%20Cristaly.ai%21" target="_blank" rel="noopener noreferrer">
              Agendar Conversa
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SobreNos;
