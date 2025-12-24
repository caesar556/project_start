import CitiesSection from "@/components/home/CitiesSection";
import CtaSection from "@/components/home/CtaSection";
import GoogleReviewsSection from "@/components/home/GoogleReviews";
import HeroSection from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <GoogleReviewsSection />
      <ServicesSection />
      <CitiesSection />
      <TestimonialsSection />
      <CtaSection />
    </section>
  );
}
