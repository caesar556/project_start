import { Schema, model, models } from "mongoose";

const GlobalSettingSchema = new Schema(
  {
    companyName: { type: String, default: "Richard Umzug" },
    phone: { type: String, default: "+43 660 123 4567" },
    email: { type: String, default: "info@richard-umzug.at" },
    whatsapp: String,
    addressStreet: { type: String, default: "Musterstraße 1" },
    addressZip: { type: String, default: "1010" },
    addressCity: { type: String, default: "Wien" },
    openingHours: { type: String, default: "Mo-Sa: 07:00 - 20:00 Uhr" },
    footerCopyrightText: String,
    attributionLabel: String,
    attributionUrl: String,
  },
  { timestamps: true },
);

export default models.GlobalSetting ||
  model("GlobalSetting", GlobalSettingSchema);
