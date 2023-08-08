import { render, screen } from "@testing-library/react";
import Header from "./header";
import FFTLogo from "../../assets/images/logo.png";

jest.mock("./nav", () => {
  return {
    __esModule: true,
    default: () => <div>Mock Nav</div>,
  };
});

describe("Header", () => {
  it("renders the Header component", () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });

  it("displays the logo", () => {
    render(<Header />);
    const logo = screen.getByAltText("Food For Thought Logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", FFTLogo);
  });

  it("displays the page title", () => {
    render(<Header />);
    expect(screen.getByText(/Food For Thought/i)).toBeInTheDocument();
  });

  it("renders the Nav components", () => {
    render(<Header />);
    expect(screen.getByText("Mock Nav")).toBeInTheDocument();
  });
});
