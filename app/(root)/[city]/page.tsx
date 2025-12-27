import CityCta from "@/components/common/cta/cityCta";
import ContactInfoBlock from "@/components/layout/ContactInfo";
import CityAbout from "@/components/pages/city-page/CityAbout";
import CityHero from "@/components/pages/city-page/CityHero";
import CityPrice from "@/components/pages/city-page/CityPrice";
import CityServices from "@/components/pages/city-page/CityServices";
import { getCityBySlug } from "@/lib/cities";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    city: string;
  };
};

const CONTACT_DUMMY_DATA = {
  phone: "+43 660 1234567",
  email: "info@richard-umzug.at",
  whatsapp: "436601234567",
  address: {
    street: "Hauptstraße 12",
    zip: "1010",
    city: "Wien",
  },
};

export default async function CityPage({ params }: PageProps) {
  const { city } = await params;
  const data = await getCityBySlug(city);
  if (!data) return notFound();
  return (
    <>
      <CityHero name={data.name} slug={data.slug} introText={data.introText} />
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <CityAbout
              name={data.name}
              distance={data.distance}
              slug={data.slug}
            />
            <div className="flex flex-col  gap-8 mb-16">
              <CityPrice
                name={data.name}
                maxPrice={data.priceMax}
                minPrice={data.priceMin}
              />
              <ContactInfoBlock
                phone={CONTACT_DUMMY_DATA.phone}
                email={CONTACT_DUMMY_DATA.email}
                whatsapp={CONTACT_DUMMY_DATA.whatsapp}
                address={CONTACT_DUMMY_DATA.address}
                showHeading
                variant="default"
              />
              <CityServices name={data.name} />
              <CityCta name={data.name} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
