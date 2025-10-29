const express = require("express");
const AssignmentModel = require("../../../models/Assignments/Assignment.model");
const router = express.Router();

// Create assignment (Admin only)
router.post("/", async (req, res) => {
  try {
    const assignment = new AssignmentModel(req.body);
    await assignment.save();
    res.status(201).json({ assignment, Error: false });
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
});

// Get all assignments (Admin only)
router.get("/", async (req, res) => {
  try {
    const assignments = await AssignmentModel.find().sort({ createdAt: -1 });
    res.json({ assignments, Error: false });
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

// Update assignment
router.put("/:id", async (req, res) => {
  try {
    const assignment = await AssignmentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ assignment, Error: false });
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
});

// Delete assignment
router.delete("/:id", async (req, res) => {
  try {
    await AssignmentModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Assignment deleted", Error: false });
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

module.exports = router;
