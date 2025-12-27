/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { specialMenus } from "../assets/constants/listMenu";
import Specials from "../modules/home/Specials";

// Mock react-router-dom
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

// Mock specialMenus supaya predictable saat test
jest.mock("../assets/constants/listMenu", () => ({
  specialMenus: [
    {
      name: "Greek Salad",
      price: "$12.99",
      desc: "Fresh salad with feta cheese, olives, and greens.",
      image: "greek-salad.jpg",
    },
    {
      name: "Bruschetta",
      price: "$5.99",
      desc: "Grilled bread with tomatoes, olive oil, and basil.",
      image: "bruschetta.jpg",
    },
  ],
}));

describe("Specials Component", () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    useNavigate.mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders Specials section with header and button", () => {
    render(
      <MemoryRouter>
        <Specials />
      </MemoryRouter>
    );

    expect(screen.getByText(/Specials/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Online Menu/i })).toBeInTheDocument();
  });

  test("renders list of special menu items", () => {
    render(
      <MemoryRouter>
        <Specials />
      </MemoryRouter>
    );

    // cek jumlah item yang dirender sesuai mock
    const cards = screen.getAllByRole("img");
    expect(cards.length).toBe(specialMenus.length);

    // cek salah satu item tampil
    expect(screen.getByText(/Greek Salad/i)).toBeInTheDocument();
    expect(screen.getByText(/\$12\.99/)).toBeInTheDocument();
  });

  test("navigates to /order-online when 'Order a delivery' clicked", () => {
    render(
      <MemoryRouter>
        <Specials />
      </MemoryRouter>
    );

    const orderButtons = screen.getAllByRole("button", { name: /Order a delivery/i });
    fireEvent.click(orderButtons[0]);

    expect(mockNavigate).toHaveBeenCalledWith("/order-online");
  });
});
