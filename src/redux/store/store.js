import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from "../reducers/rootReducer";

const configureStore = (initialValues)=>{
  //const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	return createStore(
    rootReducer, 
    initialValues, 
    composeWithDevTools(applyMiddleware(thunk))
    //composeEnhancers(applyMiddleware(thunk))
  );
};
export default configureStore;