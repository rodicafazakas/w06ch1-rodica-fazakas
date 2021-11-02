import { useState } from "react";
// import useTasks from "../hooks/useTasks";
// import { deleteTaskAction } from "../redux/actions/actionCreators";

const Task = (task, onToggle, onDelete, onUpdate) => {

  const[isCompleted, setIsCompleted] = useState(task.task.completed);

  const changeCompleted = (event)=> {
    setIsCompleted(event.target.completed);
    onToggle(task.id);
  }

  // const onDelete = (id)=> {
  //   deleteTaskAction(id);
  // }

  return (
    <li className="task"> 
      {task.task.name} 
      <input type="checkbox" 
             completed={isCompleted} 
             onChange={changeCompleted} /> Done

      <button onClick={onUpdate}> Update </button>
      
      <button className="delete-button" 
              onClick={onDelete}> Delete </button>
    </li>
  )
}

export default Task;