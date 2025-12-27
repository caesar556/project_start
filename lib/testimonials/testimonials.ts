import dbConnect from "../db";
import Testimonial from "@/models/Testimonials";

export async function getTestimonials() {
  await dbConnect();

  const testimonials = await Testimonial.find()
    .select("name city rating text date isFeatured isPublished")
    .lean();

  return testimonials.map((t) => ({
    _id: t._id.toString(),
    name: t.name,
    city: t.city,
    rating: t.rating,
    text: t.text,
    date: t.date,
    isFeatured: t.isFeatured,
    isPublished: t.isPublished,
  }));
}