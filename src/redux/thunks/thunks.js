import {
  loadTasksAction, 
  createTaskAction, 
  deleteTaskAction, 
  updateTaskAction} from '../actions/actionCreators';


const apiUrl="https://todo-api-rodicaf.herokuapp.com/tasks";

export const loadTasksThunk = () => async (dispatch) => {
	const response = await fetch(apiUrl);
	const tasks = await response.json();
	dispatch(loadTasksAction(tasks));
}

export const createTaskThunk = (task) => async(dispatch) => {
  const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });
  const newTask = await response.json();
  dispatch(createTaskAction(newTask));
};

export const deleteTaskThunk = (id) => {
  return async (dispatch) => {
  const response = await fetch(`${apiUrl}/${id}`, {method: "DELETE",});
    if (response.ok) {
      dispatch(deleteTaskAction(id));
    }
  }
};

export const updateTaskThunk = (task) => async (dispatch) => {
  const response = await fetch(`${apiUrl}/${task.id}`, {
      method: "PUT",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const updatedTask = await response.json();
  if (response.ok) {
    dispatch(updateTaskAction(updatedTask));
  }
};