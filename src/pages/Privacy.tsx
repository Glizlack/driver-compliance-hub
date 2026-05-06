import { Link } from "react-router-dom";
import { TRANSLATIONS } from "@/config/i18n";
import { useLang } from "@/contexts/LangContext";
import { SEO } from "@/lib/seo";

const Privacy = () => {
  const { lang } = useLang();
  const t = TRANSLATIONS[lang];

  const content = lang === "es" ? {
    title: "Política de Privacidad",
    updated: "Última actualización: 5 de mayo de 2026",
    intro: "Valoramos su privacidad. Este sitio web no recopila, almacena ni comparte información personal de sus visitantes.",
    s1Title: "1. Recopilación de Datos:",
    s1Body: "No utilizamos cookies, píxeles de seguimiento ni formularios de contacto que almacenen sus datos personales en nuestros servidores.",
    s2Title: "2. Enlaces de Terceros:",
    s2Body: "Nuestro sitio puede contener enlaces a otros sitios web. No somos responsables de las prácticas de privacidad de esos sitios externos.",
    s3Title: "3. Contacto:",
    s3Body: "Si tiene alguna pregunta sobre esta política, por favor contáctenos en fmcsahelper@gmail.com",
    back: "← Volver al inicio",
  } : {
    title: "Privacy Policy",
    updated: "Last Updated: May 5, 2026",
    intro: "We value your privacy. This website does not collect, store, or share any personal information from its visitors.",
    s1Title: "1. Data Collection:",
    s1Body: "We do not use cookies, tracking pixels, or contact forms that store your personal data on our servers.",
    s2Title: "2. Third-Party Links:",
    s2Body: "Our site may contain links to other websites. We are not responsible for the privacy practices of those external sites.",
    s3Title: "3. Contact:",
    s3Body: "If you have any questions about this policy, please reach out to us at fmcsahelper@gmail.com",
    back: "← Back to home",
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Privacy Policy | DQ Checklist"
        description="Privacy policy for the Federal Driver Qualification Checklist site."
        path="/privacy"
      />
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Link to="/" className="text-sm text-foreground/60 hover:text-foreground">
          {content.back}
        </Link>
        <h1 className="font-display mt-8 text-4xl font-semibold sm:text-5xl">{content.title}</h1>
        <p className="mt-3 text-sm text-foreground/60">{content.updated}</p>
        <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/80">
          <p>{content.intro}</p>
          <p><span className="font-semibold text-foreground">{content.s1Title}</span> {content.s1Body}</p>
          <p><span className="font-semibold text-foreground">{content.s2Title}</span> {content.s2Body}</p>
          <p>
            <span className="font-semibold text-foreground">{content.s3Title}</span>{" "}
            {content.s3Body.split("fmcsahelper@gmail.com")[0]}
            <a href="mailto:fmcsahelper@gmail.com" className="underline hover:text-foreground">
              fmcsahelper@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
