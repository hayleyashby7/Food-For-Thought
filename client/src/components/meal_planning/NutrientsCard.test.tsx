import { render, screen } from "@testing-library/react";
import NutrientsCard from "./NutrientsCard";

describe("NutrientsCard", () => {
  const mockNutrientsData = {
    calories: 2000.14,
    protein: 59.33,
    fat: 125.55,
    carbohydrates: 170.94,
  };

  it("renders without crashing", () => {
    render(<NutrientsCard nutrients={mockNutrientsData} />);
    const heading = screen.getByText(/Nutritional Information:/i);
    expect(heading).toBeInTheDocument();
  });

  it("displays the correct nutritional information", () => {
    render(<NutrientsCard nutrients={mockNutrientsData} />);

    expect(
      screen.getByText(`Calories: ${mockNutrientsData.calories}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Protein: ${mockNutrientsData.protein}g`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Fat: ${mockNutrientsData.fat}g`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Carbohydrates: ${mockNutrientsData.carbohydrates}g`)
    ).toBeInTheDocument();
  });
});
