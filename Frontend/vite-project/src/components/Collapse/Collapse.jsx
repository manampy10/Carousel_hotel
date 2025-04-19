// src/components/Collapse/Collapse.jsx
import { useState } from "react";
import "./Collapse.css";
import arrowIcon from "../../images/arrowIcon.png";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="collapse">
      <div
        className={`collapse-header ${isOpen ? "open" : ""}`}
        onClick={toggle}
      >
        <h2>{title}</h2>
        <img
          src={arrowIcon}
          alt="toggle arrow"
          className={`arrow-icon ${isOpen ? "open" : ""}`}
        />
      </div>
      {isOpen && (
        <div className="collapse-content">
          <p>{children}</p>
        </div>
      )}
    </div>
  );
}

export default Collapse;
