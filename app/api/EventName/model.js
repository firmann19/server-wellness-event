const mongoose = require("mongoose");

const EventNameSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 3,
      maxlength: 50,
      required: [true, "nama event harus diisi"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("EventName", EventNameSchema);
