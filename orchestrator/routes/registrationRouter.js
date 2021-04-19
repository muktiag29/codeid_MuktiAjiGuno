const express = require("express");
const router = express.Router();
const RegistrationController = require("../controllers/registrationController");

router.post("/registration", RegistrationController.registration);
router.post("/login", RegistrationController.login);

module.exports = router;
