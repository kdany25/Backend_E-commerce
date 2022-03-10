import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import Mongoose from "mongoose";
import userAuth from "./routes/auth";
import userRoute from "./routes/user";
import ProductRoute from "./routes/product";
import CartRoute from "./routes/cart";
import OrderRoute from "./routes/order";
import subRoute from "./routes/sub";
import paymentRoute from "./routes/Kpay"

import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

Mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Database started "))
  .catch((err) => {
    console.log(err);
  });
  const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", cors(), userAuth);
app.use("/api/users",cors(), userRoute);
app.use("/api/products", cors(),ProductRoute);
app.use("/api/order",cors(), OrderRoute);
app.use("/api/cart",cors(), CartRoute);
app.use("/api/sub", subRoute);
app.use("/api/payment", paymentRoute);

app.listen(PORT, () => {
  console.log("MyClikk backend started ");
});
