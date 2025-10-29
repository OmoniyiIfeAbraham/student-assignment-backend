const express = require("express");
const router = express.Router();

router.use("/auth", require("./Auth/authRoutes"));
router.use("/assignments", require("./Assignments/adminAssignmentRoutes"));

module.exports = router;
