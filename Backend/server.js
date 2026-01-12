const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes"); // Links your modular routes

const app = express();
const PORT = 5000;

// ===== MIDDLEWARE =====
app.use(cors()); 
app.use(express.json()); // Essential for reading data from your frontend script

// ===== CONNECT TO MONGODB =====
mongoose.connect("mongodb://127.0.0.1:27017/todo-app")
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ===== MOUNT ROUTES =====
/** * This line is the "bridge." 
 * It tells Express: "Any request starting with /api/tasks should go to taskRoutes.js"
 */
app.use("/api/tasks", taskRoutes);

// Optional: Health check route to verify server is alive in browser
app.get("/", (req, res) => {
  res.send("Backend Server is Running!");
});

// ===== START SERVER =====
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://127.0.0.1:${PORT}`);
});