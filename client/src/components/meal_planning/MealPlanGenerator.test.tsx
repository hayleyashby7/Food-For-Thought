import { render, screen } from "@testing-library/react";
import { MealPlanGenerator } from "./MealPlanGenerator";
import "@testing-library/jest-dom/extend-expect";
import { useUserContext } from "../../hooks/useUserContext";

jest.mock("../../hooks/useUserContext");

describe("MealPlanGenerator", () => {
  const dummyMealResponse = {
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
      {
        id: 655822,
        imageType: "jpg",
        title: "Pesto Fresh Caprese Sandwich",
        readyInMinutes: 10,
        servings: 1,
        sourceUrl:
          "https://spoonacular.com/pesto-fresh-caprese-sandwich-655822",
      },
      {
        id: 1005368,
        imageType: "jpg",
        title: "Panzanella Salad",
        readyInMinutes: 45,
        servings: 4,
        sourceUrl: "https://spoonacular.com/panzanella-salad-1005368",
      },
    ],
    nutrients: {
      calories: 2000.14,
      protein: 59.33,
      fat: 125.55,
      carbohydrates: 170.94,
    },
  };

  beforeEach(() => {
    (useUserContext as jest.Mock).mockReturnValue({ id: "testUserId" });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the component successfully", () => {
    render(<MealPlanGenerator mealResponse={dummyMealResponse} />);
    expect(screen.getByText("Nutritional Information:")).toBeInTheDocument();
  });
});
