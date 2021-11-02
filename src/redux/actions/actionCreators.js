import actionTypes from "./actionTypes";

export const loadTasksAction = (tasks) => ({
  type: actionTypes.loadTasks,
  tasks,
});

export const createTaskAction = (task) => ({
  type: actionTypes.createTask,
  task,
})

export const deleteTaskAction = (id) => ({
  type: actionTypes.deleteTask,
  id,
});

export const toggleTaskAction = (id) => ({
  type: actionTypes.toggleTask,
  id,
});

export const updateTaskAction = (task) => ({
  type: actionTypes.updateTask,
  task, 
});

export const loadCurrentTaskAction = (task) => ({
  type: actionTypes.loadCurrentTask,
  task,
});

export const resetCurrentTaskAction = () => ({
  type: actionTypes.resetCurrentTask,
});