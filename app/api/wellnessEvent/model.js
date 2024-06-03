const mongoose = require("mongoose");

const wellnessEventSchema = new mongoose.Schema(
  {
    Date_created: {
      type: Date,
    },
    NamaPerusahaan: {
      type: String,
      minlength: 3,
      maxlength: 50,
      required: [true, "nama perusahaan harus diisi"],
    },
    JudulEvent: {
      type: String,
      minlength: 3,
      maxlength: 50,
      required: [true, "judul event harus diisi"],
    },
    EventCategoryName: {
      type: mongoose.Types.ObjectId,
      ref: "EventCategory",
    },
    PostalCode: {
      type: String,
      minlength: 3,
      maxlength: 50,
      required: [true, "kode pos harus diisi"],
    },
    StreetName: {
      type: String,
      minlength: 3,
      maxlength: 50,
      required: [true, "nama jalan harus diisi"],
    },
    VendorName: {
      type: mongoose.Types.ObjectId,
      ref: "Vendor",
    },
    Purposed_Date: {
      type: mongoose.Types.ObjectId,
      ref: "purposedDate",
    },
    StatusEvent: {
      type: String,
      enum: ["Pending", "Rejected", "Approve"],
      default: "Pending",
    },
    Remarks: {
      type: String,
      minlength: 3,
      maxlength: 50,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("wellnessEvent", wellnessEventSchema);
