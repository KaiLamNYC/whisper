const express = require("express");
const router = express.Router();

//IMPORT DB FUNCTIONS LATER
const { registerUser, signIn } = require("../controller/userController");

//USER ROUTES

router.post("/register", registerUser);

router.post("/login", signIn);

module.exports = router;
