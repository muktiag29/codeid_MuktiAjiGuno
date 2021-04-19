const axios = require("axios");

class UserController {
  static findAll(req, res) {
    axios({
      method: "GET",
      url: "http://localhost:4001/users",
      headers: { token: req.headers.token },
    })
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  static findSpecific(req, res) {
    let checkParams = req.params.number;

    axios({
      method: "GET",
      url: `http://localhost:4001/users/${checkParams}`,
      headers: { token: req.headers.token },
    })
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  static createUser(req, res) {
    let inputData = req.body;

    axios({
      method: "POST",
      url: "http://localhost:4001/users",
      data: inputData,
      headers: { token: req.headers.token },
    })
      .then((response) => {
        res.status(201).json(response.data);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  static updateUser(req, res) {
    let checkParams = req.params.id;
    let inputData = req.body;

    axios({
      method: "PUT",
      url: `http://localhost:4001/users/${checkParams}`,
      data: inputData,
      headers: { token: req.headers.token },
    })
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  static deleteUser(req, res) {
    let checkParams = req.params.id;

    axios({
      method: "DELETE",
      url: `http://localhost:4001/users/${checkParams}`,
      headers: { token: req.headers.token },
    })
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }
}

module.exports = UserController;
