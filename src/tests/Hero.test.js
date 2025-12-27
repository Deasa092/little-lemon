/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import Hero from "../modules/home/Hero";


// Mock useNavigate
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Hero Component", () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    useNavigate.mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders hero section with text and image", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    // Cek teks utama
    expect(screen.getByText(/Little Lemon/i)).toBeInTheDocument();
    expect(screen.getByText(/Chicago/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Lorem ipsum dolor sit amet/i)
    ).toBeInTheDocument();

    // Cek gambar hero tampil
    const img = screen.getByAltText(/Restorant/i);
    expect(img).toBeInTheDocument();
  });

  test("navigates to /reservations when button clicked", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: /Reserve a table/i });
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith("/reservations");
  });
});
