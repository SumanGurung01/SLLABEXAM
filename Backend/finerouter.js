const express = require("express");
const router = express.Router();
const finesch = require("./schema");

router.get("/getfine", (req, res) => {
  //db.collection.find();
  finesch.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
