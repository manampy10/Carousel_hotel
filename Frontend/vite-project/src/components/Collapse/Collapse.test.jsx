// src/components/Collapse/Collapse.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import Collapse from "./Collapse";

describe("Collapse component", () => {
  it("affiche le titre et cache le contenu par défaut", () => {
    render(<Collapse title="Description">Contenu secret</Collapse>);
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.queryByText("Contenu secret")).not.toBeInTheDocument();
  });

  it("affiche le contenu après un clic", () => {
    render(<Collapse title="Voir plus">Détails supplémentaires</Collapse>);
    const header = screen.getByText("Voir plus");
    fireEvent.click(header);
    expect(screen.getByText("Détails supplémentaires")).toBeInTheDocument();
  });
});
