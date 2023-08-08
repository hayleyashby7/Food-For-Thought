import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Nav from "./nav";

describe("Nav", () => {
  it("renders the Nav component", () => {
    const { container } = render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
  });

  it("displays nav items", () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
    const homeLink = screen.getByText("Home");
    const startPlanningLink = screen.getByText("Start Planning");
    expect(homeLink).toBeInTheDocument();
    expect(startPlanningLink).toBeInTheDocument();
  });

  it("links point to the correct location", () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
    expect(screen.getByText("Home")).toHaveAttribute("href", "/");
    expect(screen.getByText("Start Planning")).toHaveAttribute(
      "href",
      "/startplanning"
    );
    expect(screen.getByText("Sign In/Up")).toHaveAttribute("href", "/login");
  });
});
