import { render, screen, cleanup } from "@testing-library/react";
import NotFound from "./not_found";
import PNFImage from "../../assets/images/404Oops.png";

describe("NotFound", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const result = render(<NotFound />);
    container = result.container;
  });

  afterEach(() => {
    cleanup();
  });

  it("renders NotFound component", () => {
    expect(container).toBeInTheDocument();
  });

  it("contains the correct header", () => {
    expect(screen.getByText("404 - Page Not Found!")).toBeInTheDocument();
  });

  it("contains the correct text", () => {
    expect(
      screen.getByText("Sorry! Please go back to the homepage and try again.")
    ).toBeInTheDocument();
  });

  it("contains the 404 image", () => {
    const image = screen.getByAltText("404 page not found");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", expect.stringContaining(PNFImage));
  });
});
