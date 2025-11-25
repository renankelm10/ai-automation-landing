import { Instagram, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Cristaly<span className="text-primary">.ai</span></h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transformando o atendimento ao cliente com inteligência artificial de ponta.
              Escale seu negócio sem perder a humanidade.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/cristaly_ia" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h4 className="font-semibold text-white">Soluções</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="/solucoes/whatsapp-bot" className="hover:text-primary transition-colors">WhatsApp Bot</a></li>
              <li><a href="/solucoes/instagram-direct" className="hover:text-primary transition-colors">Instagram Direct</a></li>
              <li><a href="/solucoes/crm-integrado" className="hover:text-primary transition-colors">CRM Integrado</a></li>
              <li><a href="/solucoes/analytics-ia" className="hover:text-primary transition-colors">Analytics IA</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h4 className="font-semibold text-white">Empresa</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="/sobre-nos" className="hover:text-primary transition-colors">Sobre Nós</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-semibold text-white">Contato</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:traffio.social@gmail.com" className="hover:text-primary transition-colors">
                  traffio.social@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+5549991502058" className="hover:text-primary transition-colors">
                  +55 49 99150-2058
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Cristaly AI. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
