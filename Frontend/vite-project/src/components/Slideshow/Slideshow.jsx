import { useState } from "react";
import "./Slideshow.css";
import arrowLeft from "../../images/left.png";
import arrowRight from "../../images/right.png";

function Slideshow({ pictures }) {
  const [current, setCurrent] = useState(0);
  const total = pictures.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <div className="slideshow">
      {total > 1 && (
        <>
          <img
            src={arrowLeft}
            alt="Précédent"
            className="arrow left"
            onClick={prevSlide}
          />
          <img
            src={arrowRight}
            alt="Suivant"
            className="arrow right"
            onClick={nextSlide}
          />
        </>
      )}

      <img
        src={pictures[current]}
        alt={`Slide ${current + 1}`}
        className="slide-image"
      />

      {total > 1 && (
        <p className="slide-count">
          {current + 1}/{total}
        </p>
      )}
    </div>
  );
}

export default Slideshow;
