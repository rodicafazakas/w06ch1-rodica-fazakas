import Task from './Task';

const TasksList = ({tasks}) => {
  return (
    <ul>
        {tasks.map( task => <Task/> )}
    </ul>
  )
}

export default TasksList;