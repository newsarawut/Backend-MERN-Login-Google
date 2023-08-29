const express = require("express");
const router = express.Router();
//controllers
const { createAndUpdateUser, currentUser } = require('../Controllers/auth');

//middleware
const { authCheck } = require("../Middleware/authCheck");

// Endpoint    http://localhost:4000/api/auth
// Method      POST
router.post("/auth", authCheck, createAndUpdateUser);
router.post("/current-user", authCheck, currentUser);

module.exports = router;
