const getAllTasks = (req, res) => {
  res.status(200).send('all items');
};
const createTask = (req, res) => {
  res.status(201).json(req.body);
};
const getTask = (req, res) => {
  res.status(200).send('get single task');
};
const updateTask = (req, res) => {
  res.status(201).send('update task');
};
const deleteTask = (req, res) => {
  res.status(201).send('delete task');
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
