import { CURRENCY, faqs, plans, site } from "@/lib/content";

/**
 * JSON-LD for search engines and AI answer engines.
 *
 * The FAQPage block matters most here: assistants quote question/answer
 * pairs almost verbatim, so the answers people actually ask before
 * buying — who owns the number, what Meta charges, what the trial is —
 * are the ones worth making machine-readable.
 *
 * Nothing is claimed that isn't true. There is deliberately no
 * `aggregateRating`: the product has no public reviews, and inventing
 * one is both dishonest and against Google's structured data policy —
 * it earns a manual action, not a rich result.
 */
export function StructuredData() {
  const organization = {
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: `${site.url}/logo-512.png`,
    parentOrganization: {
      "@type": "Organization",
      name: site.company,
      url: site.companyUrl,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
  };

  const software = {
    "@type": "SoftwareApplication",
    "@id": `${site.url}/#software`,
    name: site.name,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "CRM",
    operatingSystem: "Web, Android",
    url: site.url,
    publisher: { "@id": `${site.url}/#organization` },
    description:
      "Shared WhatsApp inbox for teams, with contacts, sales pipelines, broadcasts, automations and AI replies.",
    // One offer per plan, so a price range can be derived rather than
    // guessed at.
    offers: plans.map((p) => ({
      "@type": "Offer",
      name: p.name,
      price: p.price,
      priceCurrency: CURRENCY,
      category: "subscription",
      url: `${site.url}/#pricing`,
    })),
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${site.url}/#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en-PK",
  };

  // One graph rather than four separate script tags — the @id
  // references above only resolve if the nodes share a document.
  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, website, software, faqPage],
  };

  return (
    <script
      type="application/ld+json"
      // Content is ours and static; there is no user input in this tree.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
