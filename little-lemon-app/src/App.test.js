import { fireEvent, render, screen, userEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

describe("Booking Form", () => {
  test("User is able to submit the form if the first name is provided", () => {
    const firstName = "Liza";
    const handleSubmit = jest.fn();
    render(<BookingForm onSubmit={handleSubmit} />);

    const input = screen.getByLabelText(/First name:/);
    fireEvent.change(input, { target: { value: firstName } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      firstName,
    });
  });

  test("validates email correctly", () => {
    const emailInput = "email@email.com";
    const handleSubmit = jest.fn();
    render(<BookingForm onSubmit={handleSubmit} />);

    const input = screen.getByRole("textbox");

    // Test invalid email
    userEvent.type(input, "invalid-email");
    expect(screen.getByText("Invalid email")).toBeInTheDocument({ emailInput });

    // Test valid email
    userEvent.clear(input);
    userEvent.type(input, "valid@email.com");
    expect(screen.queryByText("Invalid email")).not.toBeInTheDocument({
      emailInput,
    });
  });
});
