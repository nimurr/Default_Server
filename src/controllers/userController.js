const users = require("../models/userModels");

const getUser = (req, res) => {
  try {
    return res.status(200).json({
      message: "User return successfully !!",
      users,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const getUserProfile = (req, res) => {
  return res.status(200).json({
    message: "profile return successfully !!",
  });
};

module.exports = { getUser, getUserProfile };
