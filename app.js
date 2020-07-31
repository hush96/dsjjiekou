const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.userRouter = require("./router/user");
app.use("/api", userRouter);
app.listen(3007, function () {
  console.log(`http://127.0.0.1:3007 启动了`);
});
