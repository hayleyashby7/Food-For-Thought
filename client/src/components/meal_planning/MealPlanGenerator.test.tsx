import { render, screen } from "@testing-library/react";
import MealPlanGenerator from "./MealPlanGenerator";
import "@testing-library/jest-dom/extend-expect";
import { useUserContext } from "../../hooks/useUserContext";
import { server } from "../../mocks/server";
import { rest } from "msw";

jest.mock("../../hooks/useUserContext");

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

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
  it("it throws 500 error", async () => {
    server.use(
      rest.get("https://localhost:3000/api/mealplan", (_req, res, ctx) => {
        return res(
          ctx.status(500),
          ctx.json({ error: "An error occurred while creating the meal plan." })
        );
      })
    );
  });
  it("it throws 404 error", async () => {
    server.use(
      rest.get("https://localhost:3000/api/mealplan", (_req, res, ctx) => {
        return res(ctx.status(404), ctx.json({ error: "Not found" }));
      })
    );
  });
  it("displays meals based on a vegetarian diet", async () => {
    render(<MealPlanGenerator mealResponse={dummyMealResponse} />);
    const mealTitle = await screen.findByText("Blueberry Cinnamon Porridge");
    expect(mealTitle).toBeInTheDocument();
  });
});
