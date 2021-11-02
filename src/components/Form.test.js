import { render, screen } from "@testing-library/react";
import Form from "./Form";
import {Provider} from 'react-redux';
import configureStore from '../redux/store/store';

describe("Given a Form component", () => {
  describe("When it renders", () => {
    test("Then it should show a form with an input and a button and", () => {
      const buttonText = "Add task";
      let store = configureStore();

      render(
        <Provider store={store}>
          <Form />
        </Provider>
      )
      const input = screen.getByPlaceholderText("Enter a new task");
      const button = screen.getByText(buttonText);

      expect(input).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  })

  //test disable button
  //userEvent.type(name, "running");
  //expect(button).not.ToBeDisabled();

  //test delete button
  //const button=screen.getByRole("button", {name:})
});  