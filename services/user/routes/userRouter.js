const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const { authenticate } = require("../middlewares/authorization");

router.use(authenticate);
router.post("/", UserController.createUser);
router.get("/", UserController.findAll);
router.get("/:number", UserController.findSpecific);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
