const express = require("express");
const router = express.Router();

let { register, login, verifyEmail, verifyContact } = require("../controllers/user_controller");

let { adminAuth, staffAuth, customerAuth, allAuth } = require("../config/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/verifyEmail/:email/:token", verifyEmail);
router.post("/verifyMobile/:contact", verifyContact);

module.exports = router;