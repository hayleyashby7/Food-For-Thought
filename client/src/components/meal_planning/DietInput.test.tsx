import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DietInput from "./DietInput";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import mockFetch from "../../../__mocks__/mockFetch";

global.fetch = mockFetch;

test("fetches diet options and renders select input", async () => {
  const { getByLabelText } = render(<DietInput inputChanged={jest.fn()} />);
  await waitFor(() => {
    const dietSelect = getByLabelText("Please Choose Your Type of Diet");
    expect(dietSelect).toBeInTheDocument();
  });
});
