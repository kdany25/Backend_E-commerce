import mongoose from "mongoose";

const SubSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sub", SubSchema);
