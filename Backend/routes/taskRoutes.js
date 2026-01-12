// taskRoutes.js - UPDATED
const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// This becomes: GET http://localhost:5000/api/tasks
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// This becomes: POST http://localhost:5000/api/tasks
router.post("/", async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json(task);
});

// This becomes: DELETE http://localhost:5000/api/tasks/:id
router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

// This becomes: PUT http://localhost:5000/api/tasks/:id
router.put("/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.completed = !task.completed;
  await task.save();
  res.json(task);
});

module.exports = router;