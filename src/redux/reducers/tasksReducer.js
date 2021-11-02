import actionTypes from "../actions/actionTypes";

const tasksReducer = (tasks=[], action) => {
  let newTasks;

  switch (action.type) {
    case (actionTypes.loadTasks):
      newTasks = [...action.tasks];
      break;
    case (actionTypes.createTask):
      newTasks = [...tasks, action.task];
      break;
    case (actionTypes.deleteTask):
      newTasks = tasks.filter(task => task.id !== action.id );
      break;   
    case (actionTypes.updateTask):
      newTasks =   tasks.map( 
        (task) => task.id === action.task.id 
        ? { ...task, 
            ...action.task
          } 
        : task
      );
      // newTasks = [
      //   ...tasks.filter((task) => task.id !== action.task.id),
      //   action.task,
      // ];
      break;
    case (actionTypes.toggleTask):
      newTasks = tasks.map((task) => task.id===action.id 
      ? {
        ...task,
        completed: !task.completed,
      }
      : task
      );
      break;
    default:
      newTasks = [...tasks];
  }

  return newTasks;
}

export default tasksReducer;