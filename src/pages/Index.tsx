import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { UseCases } from "@/components/UseCases";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { QualificationModal } from "@/components/QualificationModal";
import { sendWebhook } from "@/lib/webhooks";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    sendWebhook("page_view", { page: "home" });
  }, []);

  const handleCTAClick = () => {
    sendWebhook("cta_click", { action: "agendar_conversa" });
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero onCTAClick={handleCTAClick} />
      <Features />
      <UseCases />
      <HowItWorks />
      <Testimonials />
      <CTA onCTAClick={handleCTAClick} />
      <Footer />
      <QualificationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        calendlyUrl="https://calendly.com/cristaly/30min"
      />
    </div>
  );
};

export default Index;
