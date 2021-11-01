import rootReducer from "../reducers/rootReducer";
import {createStore, applyMiddleware} from "react-redux";

const configureStore=(initialValues)=>{
	return createStore(
    rootReducer, 
    initialValues, 
    // composeWithDevTools(applyMiddleware(thunk))
  );
};
export default configureStore;