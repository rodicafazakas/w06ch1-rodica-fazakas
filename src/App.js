import './App.css';
import Form from './components/Form';
import TasksList from './components/TasksList';

function App() {
  return (
    <div className="App">
      <h1> Todo List </h1>
      <Form />
      <TasksList tasks={[{"id": 1, "name": "laundry"}]} />
    </div>
  );
}

export default App;
