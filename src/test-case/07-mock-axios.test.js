import axios from "axios";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

jest.mock("axios");

test("untuk memastikan list users dengan call api", async () => {
  const users = [
    {
      id: 1,
      name: "Zhafran",
    },
    {
      id: 2,
      name: "Tharif",
    },
    {
      id: 1,
      name: "Zhafran Tharif",
    },
  ];
  axios.get.mockImplementation(() => Promise.resolve({ data: users }));

  render(<App />);

  const btnGetUser = screen.getByTestId("get-users");
  userEvent.click(btnGetUser);

  await waitFor(() => {
    expect(screen.getAllByTestId("username")).toHaveLength(users.length);
  });
});
