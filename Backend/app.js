const express = require("express");
const mongoose = require("mongoose");
const finesch = require("./schema");
const url = "mongodb+srv://suman:suman@cluster0.az9ml.mongodb.net/FineRecord";
const finerouter = require("./finerouter");
mongoose.connect(url);
const db = mongoose.connection;

db.on("connected", () => {
  console.log("connected");
});

db.on("error", () => {
  console.log("error");
});

// create a server
const app = express();
const port = 3000;

app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//this is thorw a get request
app.get("/", (req, res) => {
  res.send("server running at port: " + port);
});


app.post("/fine", async (req, res) => {
  const name = req.body.name;
  const aadhar = req.body.aadhar;
  const offence = req.body.offence;
  const amount = req.body.amount;

  //save to database
  const fine_var = new finesch({
    name:name,
    aadhar: aadhar,
    offence: offence,
    amount: amount
  });

  fine_var.save().then((heading) => {
      console.log("Data posted");
      res.json({ msg: "Data saved", data: heading });
    })
    .catch((err) => {
      console.log(err);
    });

});

//routing the api
app.use("/api", finerouter);

app.listen(port, () => {
  console.log("listening on port: " + port);
});
