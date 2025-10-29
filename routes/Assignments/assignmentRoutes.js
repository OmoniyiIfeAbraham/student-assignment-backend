const express = require("express");
const AssignmentModel = require("../../models/Assignments/Assignment.model");
const router = express.Router();

// Get assignments for specific student
router.get("/:studentName", async (req, res) => {
  try {
    const { studentName } = req.params;
    const assignments = await AssignmentModel.find({
      studentName: studentName.toLowerCase(),
    }).sort({ createdAt: -1 });
    res.json({ assignments, Error: false });
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

module.exports = router;
