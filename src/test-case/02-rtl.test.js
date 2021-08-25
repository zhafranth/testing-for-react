import { render, screen } from "@testing-library/react";
import App from "../App";

test("Menyapa nama yang ada dalam aplikasi", () => {
  render(<App />);
  const text = screen.getByText("Hello Zhafran");
  expect(text).toBeInTheDocument();
});
