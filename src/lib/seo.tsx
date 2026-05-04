import { useEffect } from "react";

type JsonLd = Record<string, unknown> | Record<string, unknown>[];

type SEOProps = {
  title: string;
  description: string;
  /** Absolute or root-relative path. Defaults to current pathname. */
  path?: string;
  /** Set to true on 404 / utility pages. */
  noindex?: boolean;
  /** One or more JSON-LD blocks. */
  jsonLd?: JsonLd;
  /** Override OG image URL. */
  image?: string;
};

const upsertMeta = (selector: string, attrs: Record<string, string>) => {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    Object.entries(attrs).forEach(([k, v]) => {
      if (k !== "content") el!.setAttribute(k, v);
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

/**
 * Lightweight per-page SEO injector. No external dependency.
 * Updates <title>, description, canonical, OG, Twitter, robots, and optional JSON-LD.
 */
export const SEO = ({ title, description, path, noindex, jsonLd, image }: SEOProps) => {
  useEffect(() => {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const pathname =
      path ?? (typeof window !== "undefined" ? window.location.pathname : "/");
    const url = `${origin}${pathname}`;
    const ogImage = image ?? `${origin}/og-image.jpg`;

    const prevTitle = document.title;
    document.title = title;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large",
    });
    upsertLink("canonical", url);

    // Open Graph
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: url });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: "DQ Checklist",
    });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: ogImage });

    // Twitter
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: ogImage });

    // JSON-LD
    const scripts: HTMLScriptElement[] = [];
    if (jsonLd) {
      const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      blocks.forEach((block) => {
        const s = document.createElement("script");
        s.type = "application/ld+json";
        s.dataset.seo = "page";
        s.text = JSON.stringify(block);
        document.head.appendChild(s);
        scripts.push(s);
      });
    }

    return () => {
      document.title = prevTitle;
      scripts.forEach((s) => s.remove());
    };
  }, [title, description, path, noindex, jsonLd, image]);

  return null;
};

export const breadcrumbLd = (
  items: { name: string; path: string }[],
): Record<string, unknown> => {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${origin}${it.path}`,
    })),
  };
};

export const articleLd = ({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Record<string, unknown> => {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${origin}${path}` },
    author: { "@type": "Organization", name: "DQ Checklist" },
    publisher: { "@type": "Organization", name: "DQ Checklist" },
    inLanguage: "en-US",
  };
};
