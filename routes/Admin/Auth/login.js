const express = require("express");
const AdminModel = require("../../../models/Admin/Admin.model");
const bcrypt = require("bcryptjs");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log(req.body)
    const { username, password } = req.body;
    const admin = await AdminModel.findOne({ username });

    if (!admin) {
      return res.status(401).json({ Error: "Invalid credentials" });
    }

    const isValid = await bcrypt.compare(password, admin.password);
    if (!isValid) {
      return res.status(401).json({ Error: "Invalid credentials" });
    }

    res.json({
      message: "Login successful",
      token: "admin-token",
      Error: false,
    });
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

module.exports = router;
