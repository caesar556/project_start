import dbConnect from "../db";
import Service from "@/models/Service";

export async function getServices() {
  await dbConnect();

  const services = await Service.find()
    .select("title description icon")
    .lean();

  return services.map((service) => ({
    _id: service._id.toString(),
    title: service.title,
    description: service.description,
    icon: service.icon,
  }));
}