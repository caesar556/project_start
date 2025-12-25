import { Schema, model, models } from "mongoose";

const FaqSchema = new Schema(
  {
    question: String,
    answer: String,
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export default models.Faq || model("Faq", FaqSchema);
