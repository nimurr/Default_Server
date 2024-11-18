const express = require("express");
const {getUser  , getUserProfile } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.get("/", getUser);

userRouter.get("/profile" , getUserProfile);

module.exports = userRouter;
