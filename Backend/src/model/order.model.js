
const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
  {
    addressInfo: {
      name: { type: String, required: true },
      phoneNo: { type: String, required: true },
      pincode: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      country: { default: "India" },
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);


module.exports = mongoose.model('order',orderSchema)