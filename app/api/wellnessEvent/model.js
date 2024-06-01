const mongoose = require("mongoose");

const CheckoutWOSchema = new mongoose.Schema(
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
    WellnessEventName: {
      type: mongoose.Types.ObjectId,
      ref: "EventName",
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

module.exports = mongoose.model("CheckoutWO", CheckoutWOSchema);
