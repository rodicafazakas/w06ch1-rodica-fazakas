const Task = (task) => {

  return (
    <li className="task"> 
      {task.task.name} 
    </li>
  )
}

export default Task;