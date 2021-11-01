import {loadTasksAction} from '../actions/actionCreators';

export const loadTasksThunk = () => async (dispatch) => {
	const response = await fetch("http://localhost:3001/tasks");
	const tasks = await response.json();
	dispatch(loadTasksAction(tasks));
}

