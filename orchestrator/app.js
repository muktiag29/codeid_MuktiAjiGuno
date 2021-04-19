const express = require("express");
const app = express();
const router = require("./routes/index");
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

app.listen(port, () => console.log("Running on port: ", port));
