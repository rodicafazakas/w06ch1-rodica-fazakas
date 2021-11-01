import {combineReducers} from "redux"
import tasksReducer from "./tasksReducer";

const rootReducer = combineReducers({
	tasks: tasksReducer
	// currentTask; currentTaskReducer,
})

export default rootReducer;