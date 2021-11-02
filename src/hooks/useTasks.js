import { useDispatch, useSelector } from "react-redux";
import { useCallback } from 'react';
import { createTaskThunk, loadTasksThunk, updateTaskThunk, deleteTaskThunk } from "../redux/thunks/thunks";


const useTasks=()=> {
  const tasks = useSelector( (store) => store.tasks);
  const dispatch = useDispatch();

  const loadTasks=useCallback(()=> {
    dispatch(loadTasksThunk());
  }, [dispatch])

  const createTask = (task) => {
    dispatch(createTaskThunk({name: task.name, completed: task.completed}))
  }

//  const deleteTask = (task) => {
//     dispatch(deleteTaskThunk(task));
//   };

  const updateTask = (task) => {
    dispatch(updateTaskThunk(task));
  };

  return {
      tasks,
      loadTasks,
      createTask,
      // deleteTask,
      updateTask,
  }
}

export default useTasks;