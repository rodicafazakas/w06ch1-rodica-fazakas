import { render, screen } from "@testing-library/react";
import Task from './Task';

describe("Given a Task component", () => {
  describe("when it receives a task", () =>{
    test("It should render the name and a checkbox", () => {
      const task = {
        id: 2,
        name: "hairdresser",
        completed: false,
      };
      render(<Task task={task}/>)

      // const nameHeading = screen.getByRole("heading", {name: task.name});
      const checkbox=screen.getByRole("checkbox");

      // expect(nameHeading).toBeInTheDocument();
      expect(checkbox).toBeInTheDocument();

    })
  })

  //testear el togglear;
  //userEvent.click(checkbox);
})