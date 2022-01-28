import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import Mongoose from "mongoose";
import useRouter from "./routes/userRouter"

const app = express();

Mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("DBconnection successfull"))
  .catch((err) => {
    console.log(err);
  });
app.use(express.json())
  app.use("/api/user", useRouter)
app.listen(5000, () => {
  console.log("Backend server is running");
});
