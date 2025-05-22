const express = require('express');
const router = express.Router();

const TaskController = require('../../controllers/Task-controller');

router.get('/tasks', TaskController.getAllTasks);
router.post('/tasks', TaskController.addTask);
router.delete('/tasks/:id', TaskController.deleteTask);

module.exports = router;