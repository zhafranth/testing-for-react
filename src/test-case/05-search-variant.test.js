import { render, screen } from "@testing-library/react";
import App from "../App";
import { data } from "./component-function/compVariant";

test("Melaukan testing dengan queryBy dan FindBy", async () => {
  render(<App />);
  const txt = screen.queryByText(/Selamat datang/);
  expect(txt).toBeNull();
  const txtResult = await screen.findByText(/Selamat datang/);
  expect(txtResult).toBeInTheDocument();
});

test("Melakukan render p sebanyak total hari", () => {
  render(<App />);
  const text = screen.getAllByTestId("hari");
  expect(text).toHaveLength(data.length);
});
