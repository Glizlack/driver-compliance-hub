import { useEffect } from "react";

type JsonLd = Record<string, unknown> | Record<string, unknown>[];

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
  jsonLd?: JsonLd;
  image?: string;
};

const SITE_ORIGIN = "https://fmcsahelper.com";

const upsertMeta = (selector: string, attrs: Record<string, string>) => {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    Object.entries(attrs).forEach(([key, value]) => {
      if (key !== "content") el!.setAttribute(key, value);
    });
    document.head.appendChild(el);
  }
  el.setAttribute("content", attrs.content);
  return el;
};

const upsertLink = (rel: string, href: string) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
  return el;
};

export const SEO = ({ title, description, path, noindex, jsonLd, image }: SEOProps) => {
  useEffect(() => {
    const pathname = path ?? (typeof window !== "undefined" ? window.location.pathname : "/");
    const url = `${SITE_ORIGIN}${pathname}`;
    const ogImage = image ?? `${SITE_ORIGIN}/og-image.jpg`;
    const isDeployPreview =
      typeof window !== "undefined" &&
      window.location.hostname.startsWith("deploy-preview-") &&
      window.location.hostname.endsWith(".netlify.app");
    const displayTitle = title.replace("DQ Checklist", "Driver Compliance Hub");
    const prevTitle = document.title;
    document.title = displayTitle;

    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: noindex || isDeployPreview ? "noindex, nofollow" : "index, follow, max-image-preview:large",
    });
    upsertLink("canonical", url);
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: displayTitle });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: url });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: "Driver Compliance Hub" });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: ogImage });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: displayTitle });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: ogImage });

    const scripts: HTMLScriptElement[] = [];
    if (jsonLd) {
      const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      blocks.forEach((block) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.dataset.seo = "page";
        script.text = JSON.stringify(block);
        document.head.appendChild(script);
        scripts.push(script);
      });
    }

    return () => {
      document.title = prevTitle;
      scripts.forEach((script) => script.remove());
    };
  }, [title, description, path, noindex, jsonLd, image]);

  return null;
};

export const breadcrumbLd = (items: { name: string; path: string }[]): Record<string, unknown> => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_ORIGIN}${item.path}`,
    })),
  };
};

export const articleLd = ({ title, description, path }: { title: string; description: string; path: string }): Record<string, unknown> => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title.replace("DQ Checklist", "Driver Compliance Hub"),
    description,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_ORIGIN}${path}` },
    author: { "@type": "Organization", name: "Driver Compliance Hub" },
    publisher: { "@type": "Organization", name: "Driver Compliance Hub" },
    inLanguage: "en-US",
  };
};
