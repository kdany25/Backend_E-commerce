const express = require('express');
const  Mongoose  = require('mongoose');
const dotenv=require("dotenv")

const app = express();
dotenv.config()

Mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("DBconnection successfull")).catch((err)=>{console.log(err)});
app.listen(5000,()=>{
    console.log('Backend server is running')
})