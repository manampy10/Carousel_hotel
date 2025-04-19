import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

describe("Banner component", () => {
  it("affiche le texte transmis via la prop `text`", () => {
    render(<Banner text="Bienvenue" image="banner.jpg" />);
    expect(screen.getByText("Bienvenue")).toBeInTheDocument();
  });

  it("affiche un élément banner", () => {
    render(<Banner text="Test" image="banner.png" />);
    const banner = screen.getByRole("banner");
    expect(banner).toBeInTheDocument();
  });
});
