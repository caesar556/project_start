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
  return (
    <section>
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
