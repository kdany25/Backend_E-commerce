import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import Mongoose from "mongoose";

import userAuth from "./routes/auth";
import userRoute from "./routes/user"
import ProductRoute from "./routes/product"
import CartRoute from "./routes/cart"
import OrderRoute from "./routes/order"

const app = express();

Mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("DBconnection successfull"))
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use("/api/auth", userAuth);
app.use("/api/user", userRoute);
app.use('api/product' , ProductRoute)
app.use("/api/cart", CartRoute);
app.use('api/Order' , OrderRoute)

app.listen(5000, () => {
  console.log("Backend server is running");
});
