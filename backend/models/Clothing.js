const mongoose = require("mongoose");

const clothingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    brand: {
      type: String,
      required: true,
    },

    size: {
      type: String,
      required: true,
    },

    condition: {
      type: String,
      required: true,
    },

    value: {
      type: Number,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default:
        "",
    },

    description: {
      type: String,
      default: "",
    },

    owner: {
      type: String,
      default: "Unknown",
    },

    status: {
      type: String,
      default: "Available",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "Clothing",
  clothingSchema
);