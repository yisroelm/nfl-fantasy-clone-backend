const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const router = express.Router();

router.get("/player", userController.player);
router.get("/signup", authController.signUp);
router.get("/signin", authController.signIn);
router.get("/signout", authController.signOut);

module.exports = router;
