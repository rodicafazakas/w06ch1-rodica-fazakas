import {useState} from 'react'; 
import useTasks from '../hooks/useTasks';

const Form = ({dispatch}) => {
  const {createTask} = useTasks();

  const initialValues = {
    id: "",
    name: "",
    completed: false
  };

  const [taskData, setTaskData] = useState(initialValues);

  const changeData = (event) => {
    setTaskData({
      id: taskData.id,  
      name: event.target.value,
      completed: taskData.completed
    });
  };

  const onCreateTask = (event) => {
    event.preventDefault();
    createTask(taskData);
  }

  return (
    <>
    <form onSubmit={onCreateTask}>
      <input type="text" placeholder="Enter a new task" onChange={changeData} />
      <button type="submit">Add task</button>
    </form>
    </>
  )
}

export default Form;