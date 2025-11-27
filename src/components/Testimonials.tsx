import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import feedback2 from "@/assets/testimonials/feedback-2.png";
import feedback3 from "@/assets/testimonials/feedback-3.png";
import feedback4 from "@/assets/testimonials/feedback-4.png";

export const Testimonials = () => {
  return (
    <section className="py-16 md:py-32 px-4 relative overflow-hidden bg-black/40">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-24 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
            O Que Dizem <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Nossos Clientes</span>
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Empresas que já estão economizando tempo com automação inteligente
          </p>
        </div>

        <Carousel
          opts={{
            loop: true,
          }}
          className="w-full max-w-2xl mx-auto"
        >
          <CarouselContent>
            {[feedback2, feedback3, feedback4].map((feedback, index) => (
              <CarouselItem key={index}>
                <div className="p-2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                    <img 
                      src={feedback} 
                      alt={`Feedback de cliente ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 -translate-x-1/2 bg-primary/20 hover:bg-primary/40 border-primary/30" />
          <CarouselNext className="right-0 translate-x-1/2 bg-primary/20 hover:bg-primary/40 border-primary/30" />
        </Carousel>
      </div>
    </section>
  );
};
