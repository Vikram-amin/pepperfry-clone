
// const mongoose = require('mongoose');

// const orderSchema = mongoose.Schema({
//   addressInfo: {
//     name: { type: String, required: true },
//     phoneNo: { type: String, required: true },
//     pincode: { type: String, required: true },
//     address: { type: String, required: true },
//     city: { type: String, required: true },
//     state: { type: String, required: true },
//     // country: { default: "India" },
//   },
//   orderItems: [
//     {
//       product :{type : mongoose.Schema.ObjectId, required : true, ref : "product"},
//       name: { type: String, required: true },
//       price: { type: Number, required: true },
//       quantity: { type: Number, required: true },
//       image: { type: String, required: true},
//     },
//   ],
// });


// module.exports = mongoose.model('order',orderSchema)