import dbConnect from "@/lib/db";
import City from "@/models/City";

export async function getCities() {
  await dbConnect();

  const cities = await City.find(
    {},
    { name: 1, slug: 1, distance: 1 }
  )
    .sort({ distance: 1 })
    .lean();

  return cities.map((city) => ({
    id: city._id.toString(),
    name: city.name,
    slug: city.slug,
    distance: city.distance,
  }));
}