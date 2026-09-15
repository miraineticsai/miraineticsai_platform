const baseUrl = "https://mirainetics.com";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mirainetics",
    url: baseUrl,
    logo: `${baseUrl}/logo.svg`,
    description:
      "Mirainetics builds intelligent automation systems, software development solutions, and data analytics platforms for enterprise operations.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@mirainetics.com",
      telephone: "+91-8446049402",
      contactType: "sales",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
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
      "AI-powered automation systems that eliminate manual processes and unlock operational efficiency.",
    publisher: {
      "@type": "Organization",
      name: "Mirainetics",
      url: baseUrl,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function serviceJsonLd({
  name,
  description,
  url,
  serviceType,
}: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    provider: {
      "@type": "Organization",
      name: "Mirainetics",
      url: baseUrl,
    },
    description,
    serviceType,
    url,
    areaServed: {
      "@type": "Country",
      name: "Global",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mirainetics Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Advanced Automation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web & Mobile Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Data Analytics & Integration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Revenue Cycle Management",
          },
        },
      ],
    },
  };
}

export function faqJsonLd(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
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
      telephone: "+91-8446049402",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },
  };
}

export function caseStudyJsonLd({
  title,
  description,
  url,
  domain,
}: {
  title: string;
  description: string;
  url: string;
  domain: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    author: {
      "@type": "Organization",
      name: "Mirainetics",
    },
    publisher: {
      "@type": "Organization",
      name: "Mirainetics",
      url: baseUrl,
    },
    about: {
      "@type": "Thing",
      name: domain,
    },
  };
}

export function aboutPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Mirainetics",
    url: `${baseUrl}/about`,
    mainEntity: {
      "@type": "Organization",
      name: "Mirainetics",
      url: baseUrl,
      description:
        "Mirainetics builds intelligent automation systems that eliminate manual workflows across industries using AI, automation, and data intelligence.",
      foundingDate: "2024",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },
  };
}
