import { render, screen } from "@testing-library/react";
import MealPlanGenerator from "./MealPlanGenerator";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

const mockMealPlanResponse = {
  status: 200,
  meals: [
    {
      id: 635446,
      imageType: "jpg",
      title: "Blueberry Cinnamon Porridge",
      readyInMinutes: 45,
      servings: 1,
      sourceUrl: "https://spoonacular.com/blueberry-cinnamon-porridge-635446",
    },
  ],
  nutrients: {
    calories: 2000.14,
    protein: 59.33,
    fat: 125.55,
    carbohydrates: 170.94,
  },
};

test("MealPlanGenerator renders correctly", () => {
  render(<MealPlanGenerator mealResponse={mockMealPlanResponse} />);

  expect(screen.getByRole("button", { name: /save/i })).toBeInTheDocument();
});
test('clicking "save" submits saving of the meal info onto db', async () => {
  render(<MealPlanGenerator mealResponse={mockMealPlanResponse} />);

  await userEvent.click(screen.getByRole("button", { name: /save/i }));

  expect(
    await screen.findByText(/Please sign in to save your meal plan./i)
  ).toBeInTheDocument();
});
