const express = require("express");
const { registerUser, authUser } = require("../controller/userController");
const {
  checkingLogInData,
  checkingSignUpData,
  upload,
} = require("../middleware/middleware");

const router = express.Router();

router.post("/signup", upload, registerUser);
router.post("/login", checkingLogInData, authUser);

module.exports = router;
