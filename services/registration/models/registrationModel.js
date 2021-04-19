const { getDatabase } = require("../config/mongodb");
const { ObjectId } = require("mongodb");

class RegistrationModel {
  static registration(data) {
    return getDatabase().collection("Registration").insertOne(data);
  }

  static login(data) {
    return getDatabase()
      .collection("Registration")
      .findOne({ email: data.email });
  }
}

module.exports = RegistrationModel;
