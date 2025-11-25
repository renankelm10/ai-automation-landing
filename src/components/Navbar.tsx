import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-white/10">
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-primary" />
          <span className="text-lg md:text-xl font-bold text-foreground">
            Cristaly<span className="text-primary">.ai</span>
          </span>
        </Link>
        
        <Button asChild size="sm" className="text-xs md:text-sm h-8 md:h-9 px-3 md:px-4">
          <a href="https://wa.me/5549991502058?text=Ol%C3%A1%2C%20quero%20automatizar%20meu%20neg%C3%B3cio%21" target="_blank" rel="noopener noreferrer">
            Agendar Conversa
          </a>
        </Button>
      </div>
    </nav>
  );
};
