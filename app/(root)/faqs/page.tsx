import FaqCta from "@/components/common/cta/FaqCta";
import FaqContent from "@/components/pages/faqs/FaqContent";
import FaqHero from "@/components/pages/faqs/FaqHero";
import FaqInfo from "@/components/pages/faqs/FaqInfo";
import FaqLinks from "@/components/pages/faqs/FaqLinks";
import FaqTitle from "@/components/pages/faqs/FaqTitle";

export default function FaqsPage() {
  return (
    <>
      <FaqHero />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FaqInfo />
            <FaqTitle />
            <FaqContent />
            <FaqLinks />
            <FaqCta />
          </div>
        </div>
      </section>
    </>
  );
}
