import { Link } from "react-router-dom";
import "./ErrorPage.css";

function ErrorPage() {
  return (
    <div className="error-page">
      <main className="error-main">
        <h1 className="error-code">404</h1>
        <p className="error-message">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="error-link">
          Retourner sur la page d’accueil
        </Link>
      </main>
    </div>
  );
}

export default ErrorPage;
