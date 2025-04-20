import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Slideshow from "../../components/Slideshow/Slideshow";
import Collapse from "../../components/Collapse/Collapse";
import "./PropertyPageCarrousel.css";

function PropertyPageCarrousel() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id.toString() === id);
        setProperty(found);
        console.log("ID:", id);
        console.log("Found property:", found);
      })
      .catch(() => {
        setProperty(null);
      });
  }, [id]);

  if (!property) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <div className="property-page">
        <Slideshow pictures={property.pictures} />

        <div className="property-top">
          <div className="property-infos">
            <h1 className="property-title">{property.title}</h1>
            <p className="property-location">{property.location}</p>
            <div className="property-tags">
              {property.tags.map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="property-host-container">
            <div className="host-info">
              <div className="host-name">
                <p>{property.host.name.split(" ")[0]}</p>
                <p>{property.host.name.split(" ")[1]}</p>
              </div>
              <img
                className="host-picture"
                src={property.host.picture}
                alt={property.host.name}
              />
            </div>

            <div className="stars">
              {[1, 2, 3, 4, 5].map((n) => (
                <span
                  key={n}
                  style={{
                    color:
                      n <= parseInt(property.rating) ? "#FF6060" : "#E3E3E3",
                  }}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="property-collapse">
          <Collapse title="Description">{property.description}</Collapse>
          <Collapse title="Équipements">
            <ul>
              {property.equipments.map((eq, i) => (
                <li key={i}>{eq}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </>
  );
}

export default PropertyPageCarrousel;
