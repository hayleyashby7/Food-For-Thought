import { rest } from "msw";

export const handlers = [
  rest.get("https://localhost:3000/api/mealplan", (req, res, ctx) => {
    const calories = req.url.searchParams.get("calories");
    const diet = req.url.searchParams.get("diet");
    const exclude = req.url.searchParams.get("exclude");

    if (
      calories === "2000" &&
      diet === "vegetarian" &&
      exclude === "shellfish"
    ) {
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
  }),

  rest.get("https://localhost:3000/api/mealplan", (req, res, ctx) => {
    const calories = req.url.searchParams.get("calories");
    const diet = req.url.searchParams.get("diet");

    if (calories === "3000" && diet === "paleo") {
      return res(
        ctx.json({
          status: 200,
          meals: [
            {
              id: 1100990,
              imageType: "jpg",
              title:
                "Blueberry, Chocolate & Cocao Superfood Pancakes - Gluten-Free/Paleo/Vegan",
              readyInMinutes: 30,
              servings: 2,
              sourceUrl:
                "https://spoonacular.com/blueberry-chocolate-cocao-superfood-pancakes-gluten-free-paleo-vegan-1100990",
            },
            {
              id: 641408,
              imageType: "jpg",
              title: "Delicious Sausage & Peppers",
              readyInMinutes: 30,
              servings: 8,
              sourceUrl:
                "https://spoonacular.com/delicious-sausage-peppers-641408",
            },
            {
              id: 640990,
              imageType: "jpg",
              title: "Cuban Flank Steak With Avocado and Tomato Salad",
              readyInMinutes: 45,
              servings: 1,
              sourceUrl:
                "https://spoonacular.com/cuban-flank-steak-with-avocado-and-tomato-salad-640990",
            },
          ],
          nutrients: {
            calories: 2480.21,
            protein: 86.79,
            fat: 177.37,
            carbohydrates: 155.46,
          },
        })
      );
    }
    return res(ctx.status(404, "Not found"));
  }),
];
