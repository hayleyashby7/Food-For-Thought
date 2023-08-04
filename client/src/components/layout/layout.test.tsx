import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../home/home";
import Layout from "./layout";
import { Route, Routes } from "react-router-dom";

jest.mock("../header/header", () => {
  return {
    __esModule: true,
    default: () => <div>Mock Header</div>,
  };
});

jest.mock("../footer/footer", () => {
  return {
    __esModule: true,
    default: () => <div>Mock Footer</div>,
  };
});

jest.mock("../home/home", () => {
  return {
    __esModule: true,
    default: () => <div>Mock Home</div>,
  };
});

describe("Layout", () => {
  it("renders the Layout component", () => {
    const { container } = render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
  });

  it("renders the Header and Footer components", () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    expect(screen.getByText("Mock Header")).toBeInTheDocument();
    expect(screen.getByText("Mock Footer")).toBeInTheDocument();
  });

  it("renders the Home component", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Mock Home")).toBeInTheDocument();
  });
});
