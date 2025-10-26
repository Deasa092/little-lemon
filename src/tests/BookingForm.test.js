import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../modules/reservation/BookingForm"

jest.mock("../components/PopupSuccess", () => {
  return function MockSuccessPopup({ message }) {
    return <div data-testid="success-popup">{message}</div>;
  };
});

describe("BookingForm Component", () => {
  const setup = () => {
    const formData = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      specialRequest: "",
    };
    const setFormData = jest.fn();
    render(<BookingForm formData={formData} setFormData={setFormData} />);
    return { setFormData };
  };

  test("renders all form fields", () => {
    setup();
    expect(screen.getByLabelText(/\* First name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/\* Last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/\* Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/\* Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Add a special request/i)).toBeInTheDocument();
  });

  test("shows validation errors if submitted empty", () => {
    setup();
    fireEvent.click(screen.getByText(/Book a Table/i));

    expect(screen.getByText(/First name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Last name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Phone number is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
  });

  test("calls setFormData when typing in inputs", () => {
    const { setFormData } = setup();
    const input = screen.getByLabelText(/\* First name/i);
    fireEvent.change(input, { target: { value: "John" } });
    expect(setFormData).toHaveBeenCalled();
  });

  test("shows success popup when form is filled correctly", () => {
    const formData = {
      firstName: "John",
      lastName: "Doe",
      phone: "08123456789",
      email: "john@example.com",
      specialRequest: "",
    };
    const setFormData = jest.fn();

    render(<BookingForm formData={formData} setFormData={setFormData} />);
    fireEvent.click(screen.getByText(/Book a Table/i));

    expect(
      screen.getByTestId("success-popup")
    ).toHaveTextContent("Your booking was submitted successfully!");
  });
});
