import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SEO } from "@/lib/seo";
import { useLang, tr } from "@/contexts/LangContext";

const NotFound = () => {
  const location = useLocation();
  const { lang } = useLang();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <SEO
        title={tr(lang, "Page not found | Driver Compliance Hub", "Pagina no encontrada | Driver Compliance Hub")}
        description={tr(lang, "The page you requested could not be found.", "No se encontro la pagina solicitada.")}
        noindex
      />
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">{tr(lang, "Page not found", "Pagina no encontrada")}</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          {tr(lang, "Return to Home", "Volver al inicio")}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
