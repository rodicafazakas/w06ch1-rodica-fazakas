import { useDispatch, useSelector } from "react-redux";
import {useCallback} from 'react';
import { loadTasksThunk } from "../redux/thunks/thunks";

const useTasks=()=> {
  const tasks = useSelector( ({tasks}) => tasks)
  const dispatch = useDispatch();

  const loadTasks=useCallback(()=> {
    dispatch(loadTasksThunk());
  }, [dispatch])

  return {
      tasks,
      loadTasks,
  }
}

export default useTasks;