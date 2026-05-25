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
import RoadTest from "./pages/RoadTest.tsx";
import SafetyPerformanceHistory from "./pages/SafetyPerformanceHistory.tsx";
import Privacy from "./pages/Privacy.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import { LangProvider } from "./contexts/LangContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LangProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/verify-examiner" element={<VerifyExaminer />} />
            <Route path="/checklist/medical-certificate" element={<MedicalCertificate />} />
            <Route path="/checklist/employment-application" element={<EmploymentApplication />} />
            <Route path="/checklist/initial-mvr" element={<InitialMVR />} />
            <Route path="/checklist/road-test" element={<RoadTest />} />
            <Route path="/checklist/safety-performance-history" element={<SafetyPerformanceHistory />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/es/" element={<Index />} />
            <Route path="/es/verify-examiner" element={<VerifyExaminer />} />
            <Route path="/es/checklist/medical-certificate" element={<MedicalCertificate />} />
            <Route path="/es/checklist/employment-application" element={<EmploymentApplication />} />
            <Route path="/es/checklist/initial-mvr" element={<InitialMVR />} />
            <Route path="/es/checklist/road-test" element={<RoadTest />} />
            <Route path="/es/checklist/safety-performance-history" element={<SafetyPerformanceHistory />} />
            <Route path="/es/privacy" element={<Privacy />} />
            <Route path="/es/about" element={<About />} />
            <Route path="/es/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LangProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
