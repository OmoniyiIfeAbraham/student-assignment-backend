const express = require("express");
const router = express.Router();

router.use("/assignments", require("./Assignments/assignmentRoutes"));
router.use("/admin", require("./Admin/adminRoutes"));

module.exports = router;
