import { render, screen } from '@testing-library/react';
import App from './App';
import configureStore from 'store/store.js';
import Provider from 'react-redux';

beforeEach(() => {
  let store = configureStore();
  render(
  <Provider store={store}>
    <App />
  </Provider>
  );
})

test('renders learn react link', () => {
  
  const linkElement = screen.getByText(/Todo List/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Given an App component", () => {
  describe("", ()=> {
    test("Then it should not show the task deleted", ()=> {
      render (
        <App/>
      )
    })
  })
}


const challenges = screen.getAllByRole("listitem")
const deleteButton= within(chellaneges[1]).getByRole("button", {name: /delete/i});
userEevent.click(deleteButton);
expect(challenges[1]).not.toBeInTheDocument();

"Show newly created task"
render(<App/>)
const input = screen.getByLabelText(/name/i);
const submit=screen.getByRole("button")
userEvent.type(input, "ggggg");
userEvent.click(submit);
const new = screen.getByRole("heading", {name: newtaskname});
expect(new).toBeInTheDocument();

'toggle test'
const challenges = screen.getAllByRole("listitem");
const taskToToggle = challenges[1];
const checkbos=within(challengeToToggle).getByRole("checkbox");
const isCompleted=checkbox.completed;
userEvent.click("checkbox");

expect(checkbox.completed).toBe(!isCompleted)