import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// Import the component
import RemoveIngredient from "./RemoveIngredient";

test("renders component with provided ingredient and triggers inputChanged on input", () => {
  const mockInputChanged = jest.fn();

  const ingredient = "Test Ingredient";

  // Render the component
  const { getByLabelText } = render(
    <RemoveIngredient ingredient={ingredient} inputChanged={mockInputChanged} />
  );

  // Get the input element by its label text
  const inputElement = getByLabelText("Remove these ingredients");

  // Simulate typing a value into the input
  fireEvent.input(inputElement, { target: { value: "New Value" } });

  // Check if inputChanged function was called with the correct arguments
  expect(mockInputChanged).toHaveBeenCalledWith("New Value", true);
});
