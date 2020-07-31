const express = require("express");
const router = express.Router();
router.post("/reguser", function (req, res) {
  res.send("注册成功");
});
router.post("/login", function (req, res) {
  res.send("登录成功");
});

module.exports = router;
