const baseUrl = "https://mirainetics.com";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mirainetics",
    legalName: "Mirainetics",
    url: baseUrl,
    logo: `${baseUrl}/logo.svg`,
    description:
      "Mirainetics builds AI-powered products, intelligent agents, RAG applications, and business automations.",
    email: "contact@mirainetics.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    knowsAbout: [
      "AI Product Engineering",
      "AI Engineering",
      "Business Automation",
      "RAG Applications",
      "LLM Integrations",
      "AI Agents",
      "WhatsApp Bots",
      "Slack Bots",
      "Lead Qualification Automation",
      "Social Media Automation",
      "CRM Routing",
      "Web Development",
      "Mobile App Development",
      
    ],
    sameAs: [
      "https://twitter.com/mirainetics",
      "https://linkedin.com/company/mirainetics",
      "https://github.com/mirainetics",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mirainetics",
    url: baseUrl,
    description:
      "Build AI Products. Automate Your Business. We design and build AI-powered products and practical business automations.",
    publisher: {
      "@type": "Organization",
      name: "Mirainetics",
      url: baseUrl,
    },
  };
}

export function serviceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Products & Business Automation",
    provider: {
      "@type": "Organization",
      name: "Mirainetics",
      url: baseUrl,
    },
    description:
      "Engineering practical AI products, intelligent agents, RAG pipelines, and automated business workflows.",
    areaServed: {
      "@type": "Country",
      name: "Global",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mirainetics Solutions Catalog",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Products & Applications",
            description: "AI assistants, RAG knowledge-base apps, and internal tools.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Engineering & LLM Systems",
            description: "LLM integrations, vector search, tool calling, and AI backend APIs.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Process Automation",
            description: "WhatsApp bots, Slack assistants, social media automation, and CRM routing.",
          },
        },
      ],
    },
  };
}

export function faqJsonLd(
  faqs: { q: string; a: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function contactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Mirainetics",
    url: `${baseUrl}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: "Mirainetics",
      url: baseUrl,
      email: "contact@mirainetics.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },
  };
}
