import { useDispatch, useSelector } from "react-redux";
import {useCallback} from 'react';
import { createTaskThunk, loadTasksThunk } from "../redux/thunks/thunks";


const useTasks=()=> {
  const tasks = useSelector( (store) => store.tasks)
  const dispatch = useDispatch();

  const loadTasks=useCallback(()=> {
    dispatch(loadTasksThunk());
  }, [dispatch])

  const createTask = (task) => {
    dispatch(createTaskThunk({name: task.name, completed: task.completed}))
  }

  return {
      tasks,
      loadTasks,
      createTask,
  }
}

export default useTasks;