const User = require("../models/userModel");
const Redis = require("ioredis");
const redis = new Redis();

class UserController {
  static async findAll(req, res) {
    try {
      const userRedis = await redis.get("user:data");

      if (userRedis) {
        return res.json(JSON.parse(userRedis));
      } else {
        const users = await User.findAll();

        await redis.set("user:data", JSON.stringify(users));
        return res.json(users);
      }
    } catch (error) {
      return res.json(error);
    }
  }

  static async findSpecific(req, res) {
    let checkParams = req.params.number;

    if (checkParams.length === 16) {
      // Based on NIK in ID / KTP
      try {
        const users = await User.findByIdentityNumber(checkParams);
        return res.json(users);
      } catch (error) {
        return res.json(error);
      }
    } else {
      // Based on Account Number
      try {
        const users = await User.findByAccountNumber(checkParams);
        return res.json(users);
      } catch (error) {
        return res.json(error);
      }
    }
  }

  static async createUser(req, res) {
    let inputData = req.body;

    try {
      const users = await User.createUser(inputData);

      await redis.del("user:data");
      return res.json(users.ops);
    } catch (error) {
      return res.json(error);
    }
  }

  static async updateUser(req, res) {
    let checkParams = req.params.id;
    let inputData = req.body;

    try {
      const users = await User.updateUser(checkParams, inputData);

      await redis.del("user:data");
      return res.json(users.ops);
    } catch (error) {
      return res.json(error);
    }
  }

  static async deleteUser(req, res) {
    let checkParams = req.params.id;

    try {
      const users = await User.deleteUser(checkParams);

      await redis.del("user:data");
      return res.json({ msg: "User successfully deleted" });
    } catch (error) {
      return res.json(error);
    }
  }
}

module.exports = UserController;
