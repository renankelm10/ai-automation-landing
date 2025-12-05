import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface QualificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  calendlyUrl?: string;
}

export const QualificationModal = ({ isOpen, onClose, calendlyUrl }: QualificationModalProps) => {
  const [step, setStep] = useState<"question" | "calendly" | "thanks">("question");
  const url = calendlyUrl || "https://calendly.com/renankelm-contact/30min";

  const handleYes = () => {
    setStep("calendly");
  };

  const handleNo = () => {
    setStep("thanks");
    setTimeout(() => {
      onClose();
      setStep("question");
    }, 2000);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setStep("question"), 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className={step === "calendly" ? "max-w-full sm:max-w-4xl h-[80vh] sm:h-[90vh] mx-4" : "max-w-md mx-4"}>
        {step === "question" && (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl text-center">
                Vamos começar!
              </DialogTitle>
              <DialogDescription className="text-center text-base mt-4">
                O volume de leads que você recebe hoje exige respostas rápidas?
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button
                onClick={handleYes}
                className="flex-1 bg-primary hover:bg-primary/90 text-lg py-6"
                size="lg"
              >
                Sim
              </Button>
              <Button
                onClick={handleNo}
                variant="outline"
                className="flex-1 text-lg py-6"
                size="lg"
              >
                Não
              </Button>
            </div>
          </>
        )}

        {step === "calendly" && (
          <div className="h-full flex flex-col">
            <DialogHeader className="pb-4">
              <DialogTitle className="text-lg sm:text-xl">Agende sua demonstração</DialogTitle>
            </DialogHeader>
            <iframe
              src={url}
              width="100%"
              height="100%"
              frameBorder="0"
              className="rounded-lg flex-1"
            />
          </div>
        )}

        {step === "thanks" && (
          <div className="py-8 text-center">
            <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-primary mx-auto mb-4" />
            <DialogTitle className="text-xl sm:text-2xl mb-2">
              Obrigado pela visita!
            </DialogTitle>
            <DialogDescription className="text-base">
              Estamos sempre aqui quando você precisar.
            </DialogDescription>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
