import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Testing select elemen dan dijadikan expect value", () => {
  test("Memastikan text yang pertama dirender betul", () => {
    render(<App />);
    const txt = screen.getByText("Saya sedang Sembunyi");
    expect(txt).toBeInTheDocument();
  });

  test("Memastikan text button yang peratama dirender betul", () => {
    render(<App />);
    const btn = screen.getByText("Munculkan");
    expect(btn).toBeInTheDocument();
  });
});
