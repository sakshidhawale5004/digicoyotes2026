import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import PageTransition from "@/components/PageTransition";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import ServicePage from "./pages/ServicePage.tsx";
import Clients from "./pages/Clients.tsx";
import NotFound from "./pages/NotFound.tsx";
import { ThemeProvider } from "@/components/ThemeProvider";
import Loader from "@/components/Loader";
import Chatbot from "@/components/Chatbot";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" forcedTheme="light" attribute="class">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Chatbot />
          {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}
          <BrowserRouter>
            <PageTransition>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/services/:slug" element={<ServicePage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </PageTransition>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
