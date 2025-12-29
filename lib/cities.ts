import dbConnect from "@/lib/db";
import City from "@/models/City";

export async function getCities() {
  await dbConnect();

  const cities = await City.find({}, { name: 1, slug: 1, distance: 1 })
    .sort({ distance: 1 })
    .lean();

  return cities.map((city) => ({
    id: city._id.toString(),
    name: city.name,
    slug: city.slug,
    distance: city.distance,
  }));
}

export async function getCityBySlug(slug: string) {
  await dbConnect();

  const city = await City.findOne(
    { slug },
    {
      name: 1,
      slug: 1,
      distance: 1,
      introText: 1,
      priceMax: 1,
      priceMin: 1,
      detailsText: 1,
    },
  ).lean();

  if (!city) return null;

  return {
    id: city._id.toString(),
    name: city.name,
    slug: city.slug,
    distance: city.distance,
    introText: city.introText,
    detailsText: city.detailsText,
    priceMax: city.priceMax,
    priceMin: city.priceMin,
  };
}
