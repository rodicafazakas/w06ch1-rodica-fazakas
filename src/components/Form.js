import {useEffect, useState, useMemo} from 'react'; 
import useTasks from '../hooks/useTasks';
// import { resetCurrentTaskAction } from '../redux/actions/actionCreators';
// import currentTaskReducer from '../redux/reducers/currentTaskReducer';

const Form = () => {
  const {createTask} = useTasks();

  const initialValues = useMemo (
    () => 
      ({
        id: "",
        name: "",
        completed: false
      }), []  
  );

  const [taskData, setTaskData] = useState(initialValues);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  // useEffect( ()=> {
  //   if ( currentTaskReducer.isEditing) {
  //     setTaskData(currentTask.task)
  //   } else {
  //     setTaskData(initialvalues)
  //   }), [currentTask, initialValues]
  // });

  const changeData = (event) => {
    setTaskData({
      id: taskData.id,  
      name: event.target.value,
      completed: taskData.completed
    });
  };

  useEffect(()=>{
    setButtonDisabled(taskData.name === "")
  }, [taskData]);

  const onSubmit = (event) => {
    event.preventDefault();
    createTask(taskData);
    setTaskData(initialValues);

    // if(currentTask.isEditing) {
    //   updateTask(taskData);
    //   setTaskData(initialValues);
    //   resetCurrentTask();

    // } else {
    //   createTask(taskData);
    //   setTaskData(initialValues);
    // } 
  }

  return (
    <>
    <form onSubmit={onSubmit} autoComplete="off" noValidate>
      <div className="form-group">
        <input type="text" placeholder="Enter a new task" onChange={changeData} />
      </div>
      <div className="form-group">
        <button type="submit" disabled={buttonDisabled}>Add task</button>
      </div>
    </form>
    </>
  )
}

export default Form;