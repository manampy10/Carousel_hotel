import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import PropertyPageCarrousel from "./pages/PropertyPageCarrousel/PropertyPageCarrousel";
import PropertyPage from "./pages/PropertyPage/PropertyPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="a-propos" element={<AboutPage />} />
          <Route path="logement/:id" element={<PropertyPageCarrousel />} />
          <Route path="/property/:id" element={<PropertyPage />} />
          <Route path="/404" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
