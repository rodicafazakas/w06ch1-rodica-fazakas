import Task from './Task';
import useTasks from '../hooks/useTasks';
import { useEffect } from 'react';

const TasksList = () => {

const {tasks, loadTasks} = useTasks();

useEffect(()=>{
		loadTasks();
	}, [loadTasks]); 



// const onDeleteTask = (task) => {
//   deleteTask(task);
// }  

// const onToggleTask = (id) => {
//   toggleTask(task.id)
// }  


  return (
    <ul className="tasks"> 
      { tasks && tasks.length ?
        tasks.map( task => <Task key={task.id } task={task} />)
        : "There is no data from the local API" }
    </ul>
  )
}

export default TasksList;