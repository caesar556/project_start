import { Schema, model, models } from "mongoose";
import { BaseRequestFields } from "./BaseRequest";

const MoveRequestSchema = new Schema(
  {
    ...BaseRequestFields,

    fromCity: {
      type: String,
      required: true,
    },
    fromAddress: {
      type: String,
      maxlength: 200,
    },
    fromFloor: {
      type: String,
      required: true,
    },
    fromElevator: {
      type: Boolean,
      required: true,
    },

    toCity: {
      type: String,
      required: true,
    },
    toAddress: {
      type: String,
      maxlength: 200,
    },
    toFloor: {
      type: String,
      required: true,
    },
    toElevator: {
      type: Boolean,
    },

    rooms: {
      type: String,
    },
    area: {
      type: String,
    },

    moveDate: {
      type: String,
    },

    packing: Boolean,
    assembly: Boolean,
    cleaning: Boolean,
    decluttering: Boolean,
    noParking: Boolean,
  },
  { timestamps: true },
);

export default models.MoveRequest || model("MoveRequest", MoveRequestSchema);
