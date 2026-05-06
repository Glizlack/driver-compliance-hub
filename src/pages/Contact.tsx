import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LangContext";
import { SEO } from "@/lib/seo";

const Contact = () => {
  const { lang } = useLang();

  const content =
    lang === "es"
      ? {
          title: "Contáctenos",
          body: "Envíenos un correo a ",
          email: "fmcsahelper@gmail.com",
          back: "← Volver al inicio",
        }
      : {
          title: "Contact Us",
          body: "Email us at ",
          email: "fmcsahelper@gmail.com",
          back: "← Back to home",
        };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Contact Us | DQ Checklist"
        description="Contact DQ Checklist."
        path="/contact"
      />
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Link
          to="/"
          className="text-sm text-foreground/60 hover:text-foreground"
        >
          {content.back}
        </Link>
        <h1 className="font-display mt-8 text-4xl font-semibold sm:text-5xl">
          {content.title}
        </h1>
        <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/80">
          <p>
            {content.body}
            <a
              href="mailto:fmcsahelper@gmail.com"
              className="underline underline-offset-4 hover:text-foreground"
            >
              {content.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
