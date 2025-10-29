// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const AdminModel = require("./models/Admin/Admin.model");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();

require("dotenv").config();

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(morgan("dev"));

const PORT = process.env.PORT;

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Initialize admin (run once)
async function initAdmin() {
  const adminExists = await AdminModel.findOne({ username: "admin" });
  if (!adminExists) {
    const hashedPassword = await bcrypt.hash("admin123", 10);
    await AdminModel.create({ username: "admin", password: hashedPassword });
    console.log("Admin created: username: admin, password: admin123");
  }
}
initAdmin();

// Routes

app.use("/api", require("./routes/routes"));
