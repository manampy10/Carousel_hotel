// Banner.test.jsx
import { render, screen } from "@testing-library/react";
import Banner from "./Banner";
import React from "react";

describe("Banner component", () => {
  const mockImage = "test-image.jpg";

  it("affiche le texte transmis via la prop `text`", () => {
    render(<Banner text="Chez vous, partout et ailleurs" image={mockImage} />);
    expect(
      screen.getByText("Chez vous, partout et ailleurs")
    ).toBeInTheDocument();
  });

  it("ajoute bien l'image en fond via les styles inline", () => {
    const { container } = render(
      <Banner text="Chez vous, partout et ailleurs" image={mockImage} />
    );
    const bannerDiv = container.querySelector(".banner");
    expect(bannerDiv).toHaveStyle(`background-image: url(${mockImage})`);
  });

  it("n'affiche pas de titre s’il n'y a pas de prop `text`", () => {
    render(<Banner image={mockImage} />);
    const heading = screen.queryByRole("heading");
    expect(heading).not.toBeInTheDocument();
  });
});
