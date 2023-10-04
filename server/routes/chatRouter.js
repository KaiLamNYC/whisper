const express = require("express");
const router = express.Router();

//FUNCTIONS
const { accessChat } = require("../controllers/chatController");

const verifyJWT = require("../controllers/middleware/verifyJWT");

//ROUTES
router.post("/accessChat", verifyJWT, accessChat);
// router.get("/", verifyJWT, fetchChats);
// router.post("/createGroupChat", verifyJWT, createGroupChat);
// router.put("/renameGroupChat", verifyJWT, renameGroupChat);
// router.put("/removeFromGroup", verifyJWT, removeFromGroupChat);
// router.put("/addToGroup", verifyJWT, addToGroup);

module.exports = router;
