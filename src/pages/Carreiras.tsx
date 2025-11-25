import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Rocket, Users, TrendingUp, Heart, CheckCircle } from "lucide-react";

const Carreiras = () => {
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
              Carreiras na Cristaly
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Junte-se a nós na missão de transformar negócios com inteligência artificial. 
              Estamos construindo o futuro da automação no Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* Por Que Trabalhar Conosco */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Por Que Cristaly?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-panel p-8 rounded-2xl space-y-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Crescimento Rápido</h3>
              <p className="text-muted-foreground">
                Estamos em expansão acelerada. Oportunidades reais de crescimento profissional.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl space-y-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Time de Excelência</h3>
              <p className="text-muted-foreground">
                Trabalhe com profissionais talentosos e apaixonados por tecnologia.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl space-y-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Tecnologias Modernas</h3>
              <p className="text-muted-foreground">
                Trabalhe com as tecnologias mais avançadas de IA do mercado.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl space-y-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Cultura Positiva</h3>
              <p className="text-muted-foreground">
                Ambiente colaborativo, flexível e focado em resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-16">Benefícios</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Trabalho remoto ou híbrido",
              "Horários flexíveis",
              "Equipamentos fornecidos",
              "Plano de saúde",
              "Vale-alimentação",
              "Participação nos lucros",
              "Cursos e certificações",
              "Ambiente descontraído"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 glass-panel p-6 rounded-xl">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vagas */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Vagas Abertas</h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            Estamos em constante expansão! Mesmo que não haja vagas abertas no momento, 
            adoraríamos conhecer você.
          </p>
          
          <div className="glass-panel p-8 rounded-2xl text-center space-y-6">
            <h3 className="text-2xl font-semibold">Envie Seu Currículo</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mande seu currículo e LinkedIn para nosso email. Entraremos em contato 
              quando surgir uma oportunidade que combine com seu perfil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <a href="mailto:traffio.social@gmail.com?subject=Candidatura - Cristaly.ai">
                  Enviar Currículo
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <a href="https://wa.me/5549991502058?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20sobre%20oportunidades%20na%20Cristaly.ai%21" target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Carreiras;
