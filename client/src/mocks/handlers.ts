import { rest } from "msw";

export const handlers = [
  rest.get(
    "localhost:3000/api/mealplan?calories=2000&diet=vegetarian&exclude=shellfish",
    (req, res, ctx) => {
      return res(
        ctx.json({
          status: 200,
          meals: [
            {
              id: 635446,
              imageType: "jpg",
              title: "Blueberry Cinnamon Porridge",
              readyInMinutes: 45,
              servings: 1,
              sourceUrl:
                "https://spoonacular.com/blueberry-cinnamon-porridge-635446",
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
        })
      );
    }
  ),
];
