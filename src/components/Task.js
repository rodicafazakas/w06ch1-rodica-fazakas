import { useState } from "react";
import useTasks from "../hooks/useTasks";

const Task = (task) => {

  const[isCompleted, setIsCompleted] = useState(task.completed);

  const changeCompleted = (event)=> {
    setIsCompleted(event.target.completed);
  }

  const { deleteTask } = useTasks();

  const deleteOnClick = () => {
    deleteTask(task.task.id)
  }

   return (
    <li className="task"> 
      {task.task.name} 
      <input type="checkbox" 
             completed={isCompleted} 
             onChange={changeCompleted} /> Done

      {/* <button onClick={onUpdate}> Update </button> */}
      
      <button className="delete-button" 
              onClick={deleteOnClick}> Delete </button>
    </li>
  )
}

export default Task;