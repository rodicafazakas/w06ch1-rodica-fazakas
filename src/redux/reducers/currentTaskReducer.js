import actionTypes from '../actions/actionTypes';

const currentTaskReducer = ( currentTask = {isEditing: false, task: {}}, action) => {
  let newCurrentTask;
  switch (action.type) {
    case actionTypes.loadCurrentTask:
      newCurrentTask = {task: action.task, isEditing: true};
      break;
    case actionTypes.resetCurrentTask:
      newCurrentTask = {task: {}, isEditing: false}
      break;
    default:
      newCurrentTask = currentTask;
  }
  return newCurrentTask;
}

export default currentTaskReducer;