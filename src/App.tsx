import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WhatsAppBot from "./pages/solucoes/WhatsAppBot";
import InstagramDirect from "./pages/solucoes/InstagramDirect";
import CrmIntegrado from "./pages/solucoes/CrmIntegrado";
import AnalyticsIA from "./pages/solucoes/AnalyticsIA";
import SobreNos from "./pages/SobreNos";
import Carreiras from "./pages/Carreiras";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solucoes/whatsapp-bot" element={<WhatsAppBot />} />
          <Route path="/solucoes/instagram-direct" element={<InstagramDirect />} />
          <Route path="/solucoes/crm-integrado" element={<CrmIntegrado />} />
          <Route path="/solucoes/analytics-ia" element={<AnalyticsIA />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/carreiras" element={<Carreiras />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
