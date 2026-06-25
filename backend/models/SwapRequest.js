const mongoose = require("mongoose");

const swapRequestSchema = new mongoose.Schema(
  {
    requesterName: {
      type: String,
      required: true,
    },

    itemName: {
      type: String,
      required: true,
    },

    ownerName: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "SwapRequest",
  swapRequestSchema
);