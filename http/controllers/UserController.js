const User = require("../../Model/userModel");
const jwt = require("jsonwebtoken");

exports.create = async (req, res) => {
  try {
    const createData = new User({
      name: req.body.name,
      username: req.body.username,
      age: req.body.age,
      email: req.body.email,
      password: req.body.password,
    });

    await createData.save();

    res.json({
      data: createData,
      status: 200,
      message: "User is created successfully",
      success: true,
    });
  } catch (err) {
    res.json({
      error: err,
      status: 500,
      message: "User failed to create",
      success: false,
    });
  }
};

exports.list = async (req, res) => {
  try {
    const readData = await User.find();

    res.json({
      data: readData,
      status: 200,
      message: "User data is read successfully",
      success: true,
    });
  } catch (err) {
    res.json({
      error: err,
      status: 500,
      message: "Data is failed to raed",
      success: false,
    });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedData = await User.findByIdAndUpdate(
      req.params.user_id,
      req.body,
      { new: true }
    );

    res.json({
      data: updatedData,
      status: 200,
      message: "User data is updated successfully",
      success: true,
    });
  } catch (err) {
    res.json({
      error: err,
      status: 500,
      message: "Data is failed to update",
      success: false,
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const deletedData = await User.findByIdAndDelete(req.params.user_id);
    res.json({
      data: deletedData,
      status: 200,
      message: "User data is deleted successfully",
      success: true,
    });
  } catch (err) {
    res.json({
      error: err,
      status: 500,
      message: "Data is failed to delete",
      success: false,
    });
  }
};

exports.detail = async (req, res) => {
  try {
    const detail = await User.findOne({ email: req.body.email });
    if (!detail) {
      res.json({
        data: err,
        status: 500,
        message: "User is not Found!",
        success: false,
      });
    }
    res.json({
      data: detail,
      status: 200,
      message: "Login successfully!",
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
