import { Schema, model, models } from "mongoose";

const CitySchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, unique: true, required: true },
    distance: { type: Number, default: 0 },
    introText: String,
    detailsText: String,
    priceMin: Number,
    priceMax: Number,
    isActive: { type: Boolean, default: true },
    services: [{ type: Schema.Types.ObjectId, ref: "Service" }],
  },
  { timestamps: true },
);

export default models.City || model("City", CitySchema);
