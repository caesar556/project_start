import { Schema, model, models } from "mongoose";

const TestimonialSchema = new Schema(
  {
    name: String,
    city: String,
    rating: { type: Number, default: 5 },
    text: String,
    date: { type: Date, default: Date.now },
    isFeatured: { type: Boolean, default: false },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default models.Testimonial ||
  model("Testimonial", TestimonialSchema);