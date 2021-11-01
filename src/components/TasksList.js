import Task from './Task';

const TasksList = ({tasks}) => {
  return (
    <ul className="tasksList"> 
      { tasks && tasks.length ?
        tasks.map( task => <Task key={task.id }/> )
        : "No hay datos de la api" }
    </ul>
  )
}

export default TasksList;