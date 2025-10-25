/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen } from "@testing-library/react";
import { listTestimonials } from "../assets/constants/listTestimonials";
import Testimonial from "../modules/home/Testimonial";


// Mock data biar predictable saat test
jest.mock("../assets/constants/listTestimonials", () => ({
  listTestimonials: [
    {
      name: "John Doe",
      rating: 5,
      avatar: "john.jpg",
      quote: "Amazing food and atmosphere!",
    },
    {
      name: "Jane Smith",
      rating: 4,
      avatar: "jane.jpg",
      quote: "Loved the service and the desserts!",
    },
  ],
}));

describe("Testimonial Component", () => {
  test("renders title correctly", () => {
    render(<Testimonial />);
    expect(screen.getByText(/What Our Customers Say/i)).toBeInTheDocument();
  });

  test("renders testimonials from the list", () => {
    render(<Testimonial />);

    // Cek jumlah testimonial yang dirender sesuai mock
    const cards = screen.getAllByRole("img");
    expect(cards.length).toBe(listTestimonials.length);

    // Cek nama dan kutipan tampil
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Amazing food and atmosphere!/i)).toBeInTheDocument();
    expect(screen.getByText(/Jane Smith/i)).toBeInTheDocument();
  });

  test("displays correct number of stars for rating", () => {
    render(<Testimonial />);
    const ratings = screen.getAllByText(/⭐/);
    expect(ratings.length).toBeGreaterThan(0); // minimal ada 1 rating
  });
});
