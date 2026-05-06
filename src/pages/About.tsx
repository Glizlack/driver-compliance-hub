import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LangContext";
import { SEO } from "@/lib/seo";

const About = () => {
  const { lang } = useLang();

  const content =
    lang === "es"
      ? {
          title: "Sobre nosotros",
          body: "Hola, soy Steve Martin. Mi objetivo es ayudar a los Owner Operators y a las pequeñas flotas a mantenerse en cumplimiento sin cobrar tarifas elevadas.",
          back: "← Volver al inicio",
        }
      : {
          title: "About Us",
          body: "Hi, I am Steve Martin. My goal is to help Owner Operator's and small fleets stay compliant without charging high fee's!!",
          back: "← Back to home",
        };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="About Us | DQ Checklist"
        description="About DQ Checklist and Steve Martin."
        path="/about"
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
          <p>{content.body}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
