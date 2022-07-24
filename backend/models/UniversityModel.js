const mongoose = require("mongoose");

const universitySchema = mongoose.Schema(
  {
    domains: [
      {
        type: String,
        required: [true, "domain is required"],
      },
    ],
    web_pages: [
      {
        type: String,
        required: [true, "web page is required"],
      },
    ],
    state_province: {
      type: String,
    },
    name: {
      type: String,
      required: [true, "name is required"],
    },
    country: {
      type: String,
      required: [true, "name is required"],
    },
    alpha_two_code: {
      type: String,
      required: [true, "name is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("university", universitySchema);
