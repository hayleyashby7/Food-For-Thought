import { render, screen } from "@testing-library/react";
import MealPlanCards from "./MealPlanCards";

describe("MealPlanCards", () => {
  const mockMealData = {
    id: 635446,
    imageType: "jpg",
    title: "Blueberry Cinnamon Porridge",
    readyInMinutes: 45,
    servings: 1,
    sourceUrl: "https://spoonacular.com/blueberry-cinnamon-porridge-635446",
  };

  it("renders without crashing", () => {
    render(<MealPlanCards meal={mockMealData} />);
    const heading = screen.getByText(mockMealData.title);
    expect(heading).toBeInTheDocument();
  });

  it("displays the correct meal details", () => {
    render(<MealPlanCards meal={mockMealData} />);

    expect(
      screen.getByText(`Ready In: ${mockMealData.readyInMinutes} minutes`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Servings: ${mockMealData.servings}`)
    ).toBeInTheDocument();
  });

  it("displays the correct image with alt text", () => {
    render(<MealPlanCards meal={mockMealData} />);

    const img = screen.getByAltText(mockMealData.title);
    expect(img).toHaveAttribute(
      "src",
      `https://spoonacular.com/recipeImages/${mockMealData.id}-240x150.${mockMealData.imageType}`
    );
  });

  it("has a working recipe link with correct attributes", () => {
    render(<MealPlanCards meal={mockMealData} />);

    const link = screen.getByRole("link", { name: /see recipe/i });
    expect(link).toHaveAttribute("href", mockMealData.sourceUrl);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
