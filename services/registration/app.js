if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const { connect } = require("./config/mongodb");
const app = express();
const router = require("./routes/index");
const port = process.env.PORT || 4002;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

connect()
  .then(async (db) => {
    app.listen(port, () => console.log("Running on port: ", port));
  })
  .catch((err) => {
    console.log(err, "Mongo Connect Error");
  });
