import actionTypes from "../actions/actionTypes";
import currentTaskReducer from './currentTaskReducer';

describe("Given a currentTaskReducer", () => {
  describe("When it receives a current task and a load action with a new current task", ()=>{
    test("Then it should return a new current task equal to the one received", ()=> {
      const initialState = {
        task: {},
        isEditing: false,
      };
      const newTask = 
      { 
        id: 4,
        name: "gym",
        completed: false,
      };
      const expectedState = {
        task: newTask,
        isEditing: true,
      };
      const action = {
        type: actionTypes.loadCurrentTask,
        task: newTask
      };

      const newState = currentTaskReducer(initialState, action);
      
      expect(newState).toEqual(expectedState);
    })
  })
})