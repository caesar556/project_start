import {
  Hero,
  ServicesSection,
  TestimonialsSection,
  CtaSection,
  GoogleReviews,
  CitiesSection,
  RabattBanner,
  ContactSection,
} from "@/components/home";
import { getServices } from "@/lib/services/services";

export default async function Home() {
  const services = await getServices();
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Entrümpelung & Umzug Service",
    "description": "Professionelle Entrümpelung und Umzüge. Haushaltsauflösungen, Firmenauflösungen und Entsorgungen.",
    "url": "https://ihre-domain.de",
    "telephone": "+49 123 456789",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Beispielstraße 123",
      "addressLocality": "Musterstadt",
      "postalCode": "12345",
      "addressCountry": "DE"
    },
    "serviceType": ["Entrümpelung", "Umzug", "Haushaltsauflösung"]
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <GoogleReviews />
      <ServicesSection services={services} />
      <CitiesSection />
      <RabattBanner />
      <TestimonialsSection />
      <ContactSection />
      <CtaSection />
    </section>
  );
}
