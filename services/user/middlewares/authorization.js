const jwt = require("jsonwebtoken");

function createToken(payload) {
  return jwt.sign(payload, process.env.SECRET);
}

const authenticate = function (req, res, next) {
  try {
    const token = req.headers.token;
    const decoded = jwt.verify(token, process.env.SECRET);
    req.decoded = decoded;
    next();
  } catch (error) {
    return res.json({ msg: "Invalid token" });
  }
};

module.exports = { createToken, authenticate };
