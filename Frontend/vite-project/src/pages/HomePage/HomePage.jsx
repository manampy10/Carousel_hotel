import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Cards/Cards";
import bannerAccueil from "../../images/banner.png";
import "./HomePage.css";

export default function HomePage() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error("Erreur de chargement :", error));
  }, []);

  return (
    <div className="home">
      <Banner text="Chez vous, partout et ailleurs" image={bannerAccueil} />
      <div className="cards-wrapper">
        <div className="cards-container">
          {properties.map((property) => (
            <Card
              key={property.id}
              id={property.id}
              cover={property.cover}
              title={property.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
