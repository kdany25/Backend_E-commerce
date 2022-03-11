import express from "express";
import { v4 as uuidv4 } from "uuid";
import fetch from "cross-fetch";
const router = express.Router();

router.post("/", async (req, res) => {
  const payment = {
    msisdn: "0788730199",
    details: "order",
    refid: uuidv4(),
    amount: 4200,
    email: "kabadany25@gmail.com",
    cname: "kaneza",
    cnumber: "0788730199",
    pmethod: "momo",
    retailerid: "23",
    returl: "myclikkreact.herokuapp.com/",
    redirecturl: "myclikkreact.herokuapp.com/",
    bankid: "130",
  };

  const response = await fetch("https://pay.esicia.com", {
    method: "POST",
    body: JSON.stringify(payment),
    headers: {
      Authorization: "Basic " + "myclikk:2Xqz2d",
    },
  });
});

export default router;
