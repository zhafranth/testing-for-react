import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import CompUserEvent from "./component-function/compUserEvent";

const MOCK_SUBMIT_BTN = jest.fn();

test("testing onchange ketika typing", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("input value");
  userEvent.type(input, "zhafran");
  expect(screen.getByText(/Anda sedang mengetik zhafran/)).toBeInTheDocument();
});

test("testing onclick pada compUserEvent", () => {
  render(<CompUserEvent onSubmit={MOCK_SUBMIT_BTN} />);
  const textSubmit = screen.getByTestId("text-submit");
  userEvent.click(textSubmit);
  expect(MOCK_SUBMIT_BTN).toHaveBeenCalled();
});
