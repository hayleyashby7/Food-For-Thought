import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("App rendered and default to homepage", () => {
  render(<App />);

  const homeElement = screen.getByRole("main");

  expect(homeElement).toBeInTheDocument();
  expect(homeElement.textContent).toContain("Welcome");
});

test("App renders with a header containing home page and links", () => {
  render(<App />);

  const headerElement = screen.getByRole("banner");
  const title = screen.getByRole("heading", { level: 1 });
  const home = screen.getByRole("link", { name: /Home/i });
  const login = screen.getByRole("link", { name: /Login/i });
  const mealplanner = screen.getByRole("link", { name: /Meal Planner/i });

  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toContainElement(title);
  expect(headerElement).toContainElement(home);
  expect(headerElement).toContainElement(login);
  expect(headerElement).toContainElement(mealplanner);
});
