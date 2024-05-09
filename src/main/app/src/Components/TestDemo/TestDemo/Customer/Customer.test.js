import { render, screen } from "@testing-library/react";
import Customer from "./Customer";
import CustomerInsert from "./CustomerInsert";

describe("Test Suite For Customer", () => {
  test("test the Customer button ", () => {
    render(<Customer />);
    expect(screen.getByTestId("btnCustomer")).toBeInTheDocument();
  });
  test("test the customer age text box", () => {
    render(<Customer />);
    expect(screen.getByTestId("tbox-age")).toBeInTheDocument();
  });
  test("test the customer name text box", () => {
    render(<CustomerInsert />);
    expect(screen.getByTestId("tbox-name")).toBeInTheDocument();
  });
  test("test the customer address text box", () => {
    render(<CustomerInsert />);
    expect(screen.getByTestId("tbox-add")).toBeInTheDocument();
  });
});
