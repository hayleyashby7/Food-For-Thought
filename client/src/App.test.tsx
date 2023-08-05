import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("navigate to the home page", () => {
  render(<App />);
  userEvent.click(screen.getByRole("link", { name: /home/i }));

  expect(screen.getByText("Home")).toBeInTheDocument();
});
test("App rendered and default to homepage", () => {
  render(<App />);

  const homeElement = screen.getByRole("main");

  expect(homeElement).toBeInTheDocument();
  expect(homeElement.textContent).toContain("Welcome");
});
