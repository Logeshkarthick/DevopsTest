import { render, screen } from "@testing-library/react";
import RestaurantInsert from "./RestaurantInsert";
import Restaurant from "./Restaurant";
describe("Test Suite For Restaurant", () => {
    test("test the Restaurant button ", () => {
      render(<Restaurant />);
      expect(screen.getByTestId("btnRestaurant")).toBeInTheDocument();
    });
  test("test the Restaurant code text box", () => {
    render(<RestaurantInsert />);
    expect(screen.getByTestId("resCode")).toBeInTheDocument();
  });
  test("test the Restaurant name text box", () => {
    render(<RestaurantInsert />);
    expect(screen.getByTestId("resName")).toBeInTheDocument();
  });
  test("test the Restaurant Branch text box", () => {
    render(<RestaurantInsert />);
    expect(screen.getByTestId("resbr")).toBeInTheDocument();
  });
});
