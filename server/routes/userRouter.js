const express = require("express");
const router = express.Router();

//IMPORT DB FUNCTIONS LATER
const { registerUser } = require("../controller/userController");

//USER ROUTES
router.post("/register", registerUser);

module.exports = router;
