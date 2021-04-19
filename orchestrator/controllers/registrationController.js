const axios = require("axios");

class RegistrationController {
  static registration(req, res) {
    let inputData = req.body;

    axios({
      method: "POST",
      url: "http://localhost:4002/registration",
      data: inputData,
    })
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  static login(req, res) {
    let inputData = req.body;

    axios({
      method: "POST",
      url: "http://localhost:4002/login",
      data: inputData,
    })
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }
}

module.exports = RegistrationController;
