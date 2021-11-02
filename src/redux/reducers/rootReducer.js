import {combineReducers} from "redux"
import tasksReducer from "./tasksReducer";
import currentTaskReducer from './currentTaskReducer';

const rootReducer = combineReducers({
	tasks: tasksReducer,
	currentTask: currentTaskReducer,
})

export default rootReducer;