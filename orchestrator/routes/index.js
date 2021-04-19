const express = require("express");
const router = express.Router();
const users = require("./userRouter");
const registration = require("./registrationRouter");

router.use("/", registration);
router.use("/users", users);

module.exports = router;
