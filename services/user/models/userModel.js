const { getDatabase } = require("../config/mongodb");
const { ObjectId } = require("mongodb");

class User {
  static findAll() {
    return getDatabase().collection("User").find().toArray();
  }

  static findByAccountNumber(accountNum) {
    return getDatabase()
      .collection("User")
      .findOne({ accountNumber: accountNum });
  }

  static findByIdentityNumber(identityNum) {
    return getDatabase()
      .collection("User")
      .findOne({ identityNumber: identityNum });
  }

  static createUser(user) {
    return getDatabase().collection("User").insertOne(user);
  }

  static updateUser(id, user) {
    return getDatabase()
      .collection("User")
      .replaceOne({ _id: ObjectId(id) }, user, { upsert: true });
  }

  static deleteUser(id) {
    return getDatabase()
      .collection("User")
      .deleteOne({ _id: ObjectId(id) });
  }
}

module.exports = User;
