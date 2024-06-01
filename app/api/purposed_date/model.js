const mongoose = require("mongoose");

const PurposedDateSchema = new mongoose.Schema(
  {
    purposed_date: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("purposedDate", PurposedDateSchema);
