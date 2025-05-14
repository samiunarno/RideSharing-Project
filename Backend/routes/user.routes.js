const express = require("express");

const router = express.Router();
const { body } = require("express-validator");

const userController = require("../controllers/user.controller");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Please enter a Valid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least three characters long"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password Must 8 characters long"),
  ],
  userController.registerUser
);

module.exports = router;
