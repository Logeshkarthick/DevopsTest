import { render, screen } from "@testing-library/react";

import Transaction from "./Transaction";
import TransactionInsert from "./TransactionInsert";


describe("Test Suite For Transaction", () => {
  test("test the Transaction button ", () => {
    render(<Transaction />);
    expect(screen.getByTestId("btnTransaction")).toBeInTheDocument();
  });
  test("test the Transaction ID text box", () => {
    render(<TransactionInsert />);
    expect(screen.getByTestId("ts-Id")).toBeInTheDocument();
  });
  test("test the Transaction Type text box", () => {
    render(<RestaurantInsert />);
    expect(screen.getByTestId("ts-type")).toBeInTheDocument();
  });
});
