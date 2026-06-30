import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";
import CareersPage from "./pages/CareersPage";
import ServiceDetails from "./pages/ServiceDetails";
import WhatWeDo from "./pages/WhatWeDo";
import CuttingEdgeDetailsMobile from "./pages/CuttingEdgeDetailsMobile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<WhatWeDo />} />
          <Route path="/portfolio" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/work" element={<Navigate to="/portfolio" replace />} />
          <Route path="/what-we-do" element={<Navigate to="/services" replace />} />
          <Route path="/services/cutting-edge-details" element={<CuttingEdgeDetailsMobile />} />
          <Route path="/what-we-do/cutting-edge-details" element={<Navigate to="/services/cutting-edge-details" replace />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
