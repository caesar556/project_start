import ContactBadge from "../common/contact/contactBadge";
import ContactForm from "../form/contact-form/contactForm";

export default function ContactSection() {
  return (
    <section
      className="py-12 md:py-16 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(13,22,40,0.03) 0%, rgba(255,106,0,0.05) 100%)",
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-900/5 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ContactBadge />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
