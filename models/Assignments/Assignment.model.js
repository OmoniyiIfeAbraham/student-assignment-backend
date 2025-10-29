const mongoose = require("mongoose");

const AssignmentSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true,
      enum: ["harold", "hera"],
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    dueDate: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Assignment", AssignmentSchema);
