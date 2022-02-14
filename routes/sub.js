import Sub from "../models/Sub";

const router = require("express").Router();

//CREATE

router.post("/", async (req, res) => {
  const newSub = new Sub(req.body);

  try {
    const savedSub = await newSub.save();
    res.status(200).json(savedSub);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString();
    }
  
    try {
      const updatedUser = await Sub.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      await Sub.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //GET USER
  router.get("/find/:id",  async (req, res) => {
    try {
      const user = await Sub.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //GET ALL SUB
  router.get("/", async (req, res) => {
    const query = req.query.new;
    try {
      const users = query
        ? await Sub.find().sort({ _id: -1 }).limit(5)
        : await Sub.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
module.exports = router;