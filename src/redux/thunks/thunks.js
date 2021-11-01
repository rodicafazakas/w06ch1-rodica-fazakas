import {loadTasksAction, createTaskAction} from '../actions/actionCreators';

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