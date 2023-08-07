import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RemoveIngredient from "./RemoveIngredient";

test("renders component with provided ingredient and triggers inputChanged on input", () => {
  const mockInputChanged = jest.fn();

  const ingredient = "Test Ingredient";

  const { getByLabelText } = render(
    <RemoveIngredient ingredient={ingredient} inputChanged={mockInputChanged} />
  );
  const inputElement = getByLabelText("Remove these ingredients");
  fireEvent.input(inputElement, { target: { value: "New Value" } });
  expect(mockInputChanged).toHaveBeenCalledWith("New Value", true);
});
