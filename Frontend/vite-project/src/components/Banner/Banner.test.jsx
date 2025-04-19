import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

describe("Banner component", () => {
  it("affiche le texte transmis via la prop `text`", () => {
    render(<Banner text="Bienvenue" image="banner.jpg" />);
    expect(screen.getByText("Bienvenue")).toBeInTheDocument();
  });

  it("ajoute le style de background-image depuis la prop image", () => {
    render(<Banner text="Test" image="banner.jpg" />);
    const bannerDiv = screen.getByText("Test").parentElement;
    expect(bannerDiv).toHaveStyle(`background-image: url(banner.jpg)`);
  });
});
