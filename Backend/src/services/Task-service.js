const taskRepository = require('../repository/Task-repository');

const getAllTasks = async () => {
  return await taskRepository.getAllTasks();
};

const addTask = async (text) => {
  if (!text || text.trim() === '') {
    throw new Error('Task text is required');
  }
  return await taskRepository.addTask(text.trim());
};

const deleteTask = async (id) => {
  return await taskRepository.deleteTask(id);
};

module.exports = {
  getAllTasks,
  addTask,
  deleteTask,
};
