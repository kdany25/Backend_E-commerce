import  mongoose  from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    
    products: [
      {
        productId: {
          type: Object,
        },
        quantity: {
          type: Number,
          default: 1,
        },
        color: {
          type: String,
          
        },
        size: {
          type: String,
         
        },
      
      },
    ],
    amount: { type: Number, required: true },
    address: { type: String, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);