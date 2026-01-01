import { Schema, model, models } from "mongoose";

const ServiceSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, default: "Package" },
    isActive: { type: Boolean, default: true },
    features: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true },
);

export default models.Service || model("Service", ServiceSchema);
