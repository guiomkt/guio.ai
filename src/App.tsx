import React, { Suspense, lazy } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ContactDialog from "./components/ContactDialog";
import { useContactDialog } from "./hooks/use-contact-dialog";

const queryClient = new QueryClient();

const LazyToaster = lazy(() => import('@/components/ui/toaster').then(module => ({ default: module.Toaster })));
const LazyToasterWrapper = lazy(() => import('@/components/ui/sonner').then(module => ({ default: module.ToasterWrapper })));

const App = () => {
  const { isOpen, setOpen, buttonText } = useContactDialog();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Suspense fallback={<div>Carregando...</div>}>
          <LazyToaster />
          <LazyToasterWrapper />
        </Suspense>
        
        <ContactDialog 
          open={isOpen} 
          onOpenChange={setOpen} 
          buttonText={buttonText} 
        />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
