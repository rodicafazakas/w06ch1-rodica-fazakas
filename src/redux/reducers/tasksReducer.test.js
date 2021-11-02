import actionTypes from '../actions/actionTypes';
import tasksReducer from './tasksReducer';

describe("Given a tasksReducer", () => {
  describe("When it receives an empty tasks list and a load action with a number of tasks", () => {
    test("Then it should return a new task list with the tasks received", () => {
      const initialTasks = [];
      const tasksList = [
        {
            id: 1,
            name: "laundry",
            completed: true
        },
        {
          id: 2,
          name: "cleaning",
          completed: false
        }
      ];
      const action = {
        type: actionTypes.loadTasks,
        tasks: tasksList,
      };

      const newList = tasksReducer(initialTasks, action);

      expect(newList).toEqual(tasksList);
    });
  });
});