import {loadTasksAction} from '../actions/actionCreators';

export const loadTasksThunk = () => async (dispatch) => {
	const response = await fetch("https://todo-api-rodicaf.herokuapp.com/tasks");
	const tasks = await response.json();
	dispatch(loadTasksAction(tasks));
}

