import { render, screen } from "@testing-library/react";
import BookingForm from "./components/sections/bookingPage/BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Choose time");
  expect(headingElement).toBeInTheDocument();
});
