import { Schema, model, models } from "mongoose";
import { BaseRequestFields } from "./BaseRequest";

const ClearanceRequestSchema = new Schema(
  {
    ...BaseRequestFields,

    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 200,
    },
    floor: {
      type: String,
      required: true,
    },
    elevator: {
      type: Boolean,
      required: true,
    },

    propertyType: {
      type: String,
      required: true,
    },
    rooms: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },

    preferredDate: {
      type: String,
      required: true,
    },

    fullClearance: Boolean,
    partialClearance: Boolean,
    disposal: Boolean,
    cleaning: Boolean,
  },
  { timestamps: true },
);

export default models.ClearanceRequest ||
  model("ClearanceRequest", ClearanceRequestSchema);
