import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import Mongoose from "mongoose";
import userAuth from "./routes/auth";
import userRoute from "./routes/user";
import ProductRoute from "./routes/product";
import CartRoute from "./routes/cart";
import OrderRoute from "./routes/order";
import stripeRoute from "./routes/stripe";
import subRoute from "./routes/sub";

import cors from "cors";

const app = express();

Mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Database started "))
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use(express.json());
app.use("/api/auth", userAuth);
app.use("/api/users", userRoute);
app.use("/api/products", ProductRoute);
app.use("/api/order", OrderRoute);
app.use("/api/cart", CartRoute);
app.use("/api/checkout", stripeRoute);
app.use("/api/sub", subRoute);


app.listen(5000, () => {
  console.log("MyClikk backend started ");
});
