const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "nama user harus diisi"],
      minlength: 5,
      maxlength: 50,
    },
    username: {
      type: String,
      required: [true, "Username harus diisi"],
      minlength: 5,
      maxlength: 50,
    },
    password: {
      type: String,
      required: [true, "Password harus diisi"],
      minlength: 8,
    },
    role: {
      type: String,
      enum: ["HR", "Vendor"],
      default: "HR",
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  const User = this;
  if (User.isModified("password")) {
    User.password = await bcrypt.hash(User.password, 12);
  }
  next();
});

UserSchema.pre("findOneAndUpdate", async function (next) {
  const User = this._update;
  if (User.password) {
    User.password = await bcrypt.hash(User.password, 12);
  }
  next();
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("User", UserSchema);
