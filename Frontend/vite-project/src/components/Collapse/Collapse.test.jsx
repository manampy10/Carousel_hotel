import { render, screen, fireEvent } from "@testing-library/react";
import Collapse from "./Collapse";
import React from "react";

describe("Collapse component", () => {
  it("affiche le titre transmis via la prop `title`", () => {
    render(<Collapse title="Description">Contenu caché</Collapse>);
    expect(screen.getByText("Description")).toBeInTheDocument();
  });

  it("cache le contenu par défaut", () => {
    render(<Collapse title="Description">Contenu caché</Collapse>);
    expect(screen.queryByText("Contenu caché")).not.toBeInTheDocument();
  });

  it("affiche le contenu après un clic", () => {
    render(<Collapse title="Description">Contenu visible</Collapse>);
    const header = screen.getByText("Description");
    fireEvent.click(header);
    expect(screen.getByText("Contenu visible")).toBeInTheDocument();
  });

  it("cache à nouveau le contenu si on reclique", () => {
    render(<Collapse title="Description">Contenu visible</Collapse>);
    const header = screen.getByText("Description");
    fireEvent.click(header);
    fireEvent.click(header);
    expect(screen.queryByText("Contenu visible")).not.toBeInTheDocument();
  });
});
