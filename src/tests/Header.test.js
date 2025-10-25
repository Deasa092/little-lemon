import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/Header";
/* eslint-disable testing-library/no-node-access */

// Mock logo
jest.mock("../assets/constants/listImage", () => ({
  logo: "mock-logo.png",
}));

describe("Header Component", () => {
  test("renders logo and navigation links", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Logo tampil
    const logo = screen.getByAltText(/little lemon logo/i);
    expect(logo).toBeInTheDocument();

    // Link utama
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Menu/i)).toBeInTheDocument();
    expect(screen.getByText(/Reservations/i)).toBeInTheDocument();
    expect(screen.getByText(/Order Online/i)).toBeInTheDocument();
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });

  test("toggles mobile menu when hamburger is clicked", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Cari elemen dengan class .menu-toggle
    const toggleButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    // Awalnya tertutup
    expect(nav.classList.contains("active")).toBe(false);

    // Klik untuk buka
    fireEvent.click(toggleButton);
    expect(nav.classList.contains("active")).toBe(true);

    // Klik lagi untuk tutup
    fireEvent.click(toggleButton);
    expect(nav.classList.contains("active")).toBe(false);
  });

  test("clicking a link closes the menu", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const toggleButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    // Buka menu
    fireEvent.click(toggleButton);
    expect(nav.classList.contains("active")).toBe(true);

    // Klik link "About"
    const aboutLink = screen.getByText(/About/i);
    fireEvent.click(aboutLink);

    // Menu tertutup
    expect(nav.classList.contains("active")).toBe(false);
  });
});
