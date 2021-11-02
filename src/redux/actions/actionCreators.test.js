import actionTypes from './actionTypes';
import {loadTasksAction, deleteTaskAction} from './actionCreators';

describe("Given a load actionCreator", () => {
  describe("When it receives a list of tasks", () => {
    test("It should return a load type action with the tasks received", () => {
      //use factory from fishery
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
      const expectedAction = {
        type: actionTypes.loadTasks,
        tasks: tasksList
      }

      const actionResult = loadTasksAction(tasksList);

      expect(actionResult).toEqual(expectedAction);
    })
  })
});


describe("Given a delete actionCreator", () => {
  describe("When it receives an id", () => {
    test("Then it should return a delete type action with the id received", () => {
      const id = 2;
      const expectedAction = {
        type: actionTypes.deleteTask,
        id,
      };

      const result = deleteTaskAction(id);

      expect(result).toEqual(expectedAction);
    });
  });
});