import { Schema } from "mongoose";

export const BaseRequestFields = {
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 20,
  },
  message: {
    type: String,
    maxlength: 1000,
  },
  status: {
    type: String,
    enum: ["new", "processing", "completed", "cancelled"],
    default: "new",
  },
};
