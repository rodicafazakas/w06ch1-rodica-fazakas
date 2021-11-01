const Task = (task) => {

  return (
    <li className="task"> 
      {task.task.name} 
      <button className="delete-button">Delete</button>
    </li>
  )
}

export default Task;