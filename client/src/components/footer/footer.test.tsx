import { render } from "@testing-library/react";
import Footer from "../footer/footer";

describe("Footer", () => {
  it("renders the footer component correctly", () => {
    const { container } = render(<Footer />);
    expect(container).toBeInTheDocument();
  });

  it("contains the correct text", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("@ Food For Thought 2023")).toBeInTheDocument();
  });
});
