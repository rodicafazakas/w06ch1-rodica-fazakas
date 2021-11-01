import {useState} from 'react'; 

const Form = ({dispatch}) => {

  const initialValues = {
    id: "",
    name: ""
  };

  const [taskData, setTaskData] = useState(initialValues);

  const changeData = (event) => {
    setTaskData({
      ...taskData,
      [event.target.id]: event.target.value,
    });
  };

  const createTask = (event) => {
    event.preventDefault();

  }

  return (
    <>
    <form onSubmit={createTask}>
      <input type="text" placeholder="Enter a new task" onChange={changeData} />
      <button type="submit">Add task</button>
    </form>
    </>
  )
}

export default Form;