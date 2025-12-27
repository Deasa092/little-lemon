import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Reservation from "../modules/reservation";

// ✅ Mock komponen anak (ReservationForm)
jest.mock("../modules/reservation/ReservationForm", () => {
  return function MockReservationForm({ setReservation }) {
    return (
      <div data-testid="reserve-form">
        <h2>Reserve a Table</h2>
        <button onClick={() => setReservation(true)}>Check Availability</button>
      </div>
    );
  };
});

// ✅ Mock komponen BookingForm
jest.mock("../modules/reservation/BookingForm", () => {
  return function MockBookingForm() {
    return <div data-testid="booking-form">Booking Form</div>;
  };
});

describe("Reservation Component", () => {
  test("Render awal menampilkan ReserveForm", () => {
    render(<Reservation />);
    expect(screen.getByTestId("reserve-form")).toBeInTheDocument();
    expect(screen.queryByTestId("booking-form")).not.toBeInTheDocument();
  });

  test("Klik pada tombol Check Availability menampilkan BookingForm", () => {
    render(<Reservation />);

    // Pastikan awalnya tampil ReserveForm
    expect(screen.getByTestId("reserve-form")).toBeInTheDocument();

    // Klik tombol Check Availability
    fireEvent.click(screen.getByText("Check Availability"));

    // Sekarang BookingForm muncul
    expect(screen.getByTestId("booking-form")).toBeInTheDocument();
  });

  test("Klik tombol back (SVG) mengembalikan ke ReserveForm", () => {
    render(<Reservation />);

    // Pindah dulu ke BookingForm
    fireEvent.click(screen.getByText("Check Availability"));
    expect(screen.getByTestId("booking-form")).toBeInTheDocument();

    // Klik tombol kembali
    const backButton = screen.getByRole("button");
    fireEvent.click(backButton);

    // Balik ke ReserveForm
    expect(screen.getByTestId("reserve-form")).toBeInTheDocument();
  });

  test("Render menampilkan title dan city", () => {
    render(<Reservation />);
    expect(screen.getByText("Little Lemon")).toBeInTheDocument();
    expect(screen.getByText("Chicago")).toBeInTheDocument();
  });
});
