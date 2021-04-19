const RegistrationModel = require("../models/registrationModel");
const { hashingPassword, comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../middlewares/authorization");

class RegistrationController {
  static async registration(req, res) {
    let inputData = {
      email: req.body.email,
      password: hashingPassword(req.body.password),
    };

    try {
      const data = await RegistrationModel.registration(inputData);
      return res.json(data.ops);
    } catch (error) {
      return res.json(error);
    }
  }

  static async login(req, res) {
    let inputData = req.body;

    try {
      const data = await RegistrationModel.login(inputData);
      if (!data) throw { msh: "Invalid Username / Password" };

      let comparePass = comparePassword(inputData.password, data.password);
      if (!comparePass) throw { msg: "Invalid Password" };

      let accessToken = createToken({
        _id: data._id,
        email: data.email,
      });
      return res.json({ accessToken, msg: "Successfully Login" });
    } catch (error) {
      return res.json(error);
    }
  }
}

module.exports = RegistrationController;
