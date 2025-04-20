import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

describe("Collapse component (simulé)", () => {
  function FakeCollapse({ title, children }) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <div>
        <div onClick={() => setIsOpen(!isOpen)}>{title}</div>
        {isOpen && <div>{children}</div>}
      </div>
    );
  }

  it("affiche le titre et cache le contenu par défaut", () => {
    render(<FakeCollapse title="Description">Contenu secret</FakeCollapse>);
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.queryByText("Contenu secret")).not.toBeInTheDocument();
  });

  it("affiche le contenu après un clic", () => {
    render(
      <FakeCollapse title="Voir plus">Détails supplémentaires</FakeCollapse>
    );
    const header = screen.getByText("Voir plus");
    fireEvent.click(header);
    expect(screen.getByText("Détails supplémentaires")).toBeInTheDocument();
  });
});
