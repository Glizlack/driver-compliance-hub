import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import VerifyExaminer from "./pages/VerifyExaminer.tsx";
import MedicalCertificate from "./pages/MedicalCertificate.tsx";
import EmploymentApplication from "./pages/EmploymentApplication.tsx";
import InitialMVR from "./pages/InitialMVR.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/verify-examiner" element={<VerifyExaminer />} />
          <Route path="/checklist/medical-certificate" element={<MedicalCertificate />} />
          <Route path="/checklist/employment-application" element={<EmploymentApplication />} />
          <Route path="/checklist/initial-mvr" element={<InitialMVR />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
