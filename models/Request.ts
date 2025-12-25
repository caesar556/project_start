import { Schema, model, models } from "mongoose";

const RequestSchema = new Schema(
  {
    status: {
      type: String,
      enum: ["new", "processing", "completed", "cancelled"],
      default: "new",
    },
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    fromCity: String,
    toCity: String,
    message: { type: String, maxlength: 1000 },
    moveDate: Date,
    fullClearance: Boolean,
    packing: Boolean,
    assembly: Boolean,
  },
  { timestamps: true },
);

export default models.Request || model("Request", RequestSchema);
