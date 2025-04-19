import { render, screen, fireEvent } from "@testing-library/react";
import Collapse from "./Collapse";

describe("Collapse component", () => {
  it("n'affiche pas le contenu par défaut", () => {
    render(<Collapse title="Titre">Contenu caché</Collapse>);
    expect(screen.queryByText("Contenu caché")).not.toBeInTheDocument();
  });

  it("affiche le contenu après clic", () => {
    render(<Collapse title="Titre">Contenu visible</Collapse>);
    fireEvent.click(screen.getByText("Titre"));
    expect(screen.getByText("Contenu visible")).toBeInTheDocument();
  });

  it("retourne à l’état fermé après un second clic", () => {
    render(<Collapse title="Titre">Contenu toggle</Collapse>);
    const header = screen.getByText("Titre");
    fireEvent.click(header);
    fireEvent.click(header);
    expect(screen.queryByText("Contenu toggle")).not.toBeInTheDocument();
  });
});
