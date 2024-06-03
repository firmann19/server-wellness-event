const mongoose = require("mongoose");

const eventCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 3,
      maxlength: 50,
      required: [true, "nama kategori event harus diisi"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("EventCategory", eventCategorySchema);
