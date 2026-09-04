const express = require("express");

const authMiddleware = require("../config/models/routes/middleware/authMiddleware");

const {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} = require("../config/controllers/taskController");

const router = express.Router();

// Create task
router.post("/", authMiddleware, createTask);

// Get all tasks
router.get("/", authMiddleware, getTasks);

// Update task
router.put("/:id", authMiddleware, updateTask);

// Delete task
router.delete("/:id", authMiddleware, deleteTask);

module.exports = router;