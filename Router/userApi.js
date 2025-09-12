const express = require("express");
const router = express.Router();
const UserController = require("../http/controllers/UserController");
const AuthController = require("../http/controllers/AuthController");


 //UserController
router.post("/create",UserController.create); // create API
router.get("/list",UserController.list); //list API
router.put("/update/:user_id",UserController.update);  // update API
router.delete("/delete/:user_id",UserController.delete);   //delete API
router.get("/detail",UserController.detail);    // login API

//AuthController

router.post("/login",AuthController.login);

module.exports = router;


