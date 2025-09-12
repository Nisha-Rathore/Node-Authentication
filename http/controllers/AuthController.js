const jwt = require("jsonwebtoken");
const User = require("../../Model/userModel");
const bcrypt = require("bcrypt");


exports.login = async (req, res) => {
  try {
    const detail = await User.findOne({ email: req.body.email });
    if (!detail) {
      return res.json({
        status: 404,
        message: "User not found!",
        success: false,
      });
    }

    const passwordMatch = req.body.password == detail.password;
    if (!passwordMatch) {
      return res.json({
        status: 401,
        message: "Incorrect password!",
        success: false,
      });
    }

    const token = jwt.sign(
      {
        name: detail.name,
        username: detail.username,
        email: detail.email,
      },
      "719cd577c26f98a84b9ae98130262f5c17d1ee5d1ba21149",
      { expiresIn: "1y" }
    );

    res.json({
      token:token,
      status: 200,
      message: "User logged in successfully!",
      success: true,
    });
  } catch (err) {
    res.json({
      error: err,
      status: 500,
      message: "User login failed!",
      success: false,
    });
  }
};
