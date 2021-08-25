import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("Memunculkan/debug tag html dalam app", () => {
  render(<App />);
  //   screen.debug();
  const btn = screen.getAllByRole("button")[0];
  fireEvent.click(btn);
  //   screen.debug();
});

describe("melakukan selecting element untuk diberikan trigger event", () => {
  test("Memastikan text yang dirender setelah diclick", () => {
    render(<App />);
    const btn = screen.getByText("Munculkan");
    fireEvent.click(btn);

    const txt = screen.getByText("Saya sedang Muncul");
    expect(txt).toBeInTheDocument();
  });

  test("Memastikan text didalam button sudah sesuai setelah button diclick", () => {
    render(<App />);

    // Melihat role yang tersedia (getByRole)
    // screen.getByRole('')

    const btn = screen.getByText("Munculkan");
    fireEvent.click(btn);

    const btnResult = screen.getByText("Sembunyikan");
    expect(btnResult).toBeInTheDocument();
  });
});
