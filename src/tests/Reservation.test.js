import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Reservation from "../modules/reservation";

// Mock komponen anak ReservationForm
jest.mock("../modules/reservation/ReservationForm", () => (props) => (
  <div data-testid="reserve-form">
    <button onClick={() => props.setReservation(true)}>Check Availability</button>
  </div>
));

// Mock komponen BookingForm (pastikan path ini benar!)
jest.mock("../modules/reservation/BookingForm", () => (props) => (
  <div data-testid="booking-form">Booking Form</div>
));

describe("Reservation Component", () => {
  test("Render awal menampilkan ReserveForm", () => {
    render(<Reservation />);
    expect(screen.getByTestId("reserve-form")).toBeInTheDocument();
    expect(screen.queryByTestId("booking-form")).not.toBeInTheDocument();
  });

  test("Klik pada tombol Check Availability mengganti tampilan ke BookingForm", () => {
    render(<Reservation />);

    // Pastikan awalnya tampil ReserveForm
    expect(screen.getByTestId("reserve-form")).toBeInTheDocument();

    // Simulasikan klik "Check Availability"
    fireEvent.click(screen.getByText("Check Availability"));

    // Sekarang seharusnya tampil BookingForm
    expect(screen.getByTestId("booking-form")).toBeInTheDocument();
  });

  test("Tombol back mengembalikan tampilan ke ReserveForm", () => {
    render(<Reservation />);

    // Klik tombol di ReserveForm untuk menampilkan BookingForm
    fireEvent.click(screen.getByText("Check Availability"));
    expect(screen.getByTestId("booking-form")).toBeInTheDocument();

    // Klik tombol back (anggap ada role=button di BookingForm)
    const backButton = screen.getByRole("button");
    fireEvent.click(backButton);

    // Sekarang kembali ke ReserveForm
    expect(screen.getByTestId("reserve-form")).toBeInTheDocument();
  });

  test("Render menampilkan title dan city", () => {
    render(<Reservation />);
    expect(screen.getByText("Little Lemon")).toBeInTheDocument();
    expect(screen.getByText("Chicago")).toBeInTheDocument();
  });
});
