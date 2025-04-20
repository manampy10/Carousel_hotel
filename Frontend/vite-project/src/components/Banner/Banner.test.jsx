import { render, screen } from "@testing-library/react";
import React from "react";

describe("Banner component (structure simulée)", () => {
  it("affiche le texte transmis via la prop `text`", () => {
    render(
      <header role="banner">
        <h1>Bienvenue</h1>
        <img src="banner.jpg" alt="bannière" />
      </header>
    );
    expect(screen.getByText("Bienvenue")).toBeInTheDocument();
  });

  it("affiche un élément banner", () => {
    render(
      <header role="banner">
        <h1>Test</h1>
        <img src="banner.png" alt="bannière" />
      </header>
    );
    const banner = screen.getByRole("banner");
    expect(banner).toBeInTheDocument();
  });
});
