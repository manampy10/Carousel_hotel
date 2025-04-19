import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function PropertyPage() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data || Object.keys(data).length === 0) {
          setNotFound(true);
        } else {
          setProperty(data);
        }
      })
      .catch(() => setNotFound(true));
  }, [id]);

  if (notFound) return <Navigate to="/404" />;
  if (!property) return <p>Chargement...</p>;

  return (
    <div className="property-page">
      <h1>{property.title}</h1>
      <img src={property.cover} alt={property.title} />
      <p>{property.description}</p>
    </div>
  );
}

export default PropertyPage;
