const Task = require('../models/Tasks');

const getAllTasks = async () => {
  return await Task.find();
};

const addTask = async (text) => {
  const task = new Task({ text });
  return await task.save();
};

const deleteTask = async (id) => {
  return await Task.findByIdAndDelete(id);
};

module.exports = {
  getAllTasks,
  addTask,
  deleteTask,
};
