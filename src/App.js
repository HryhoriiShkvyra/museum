import React from "react";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./Header/Header.jsx";
import AboutMuseum from "./AboutMuseum/AboutMuseum.jsx";
import Footer from "./Footer/Footer.jsx";
import MuseumTour from "./MuseumTour/MuseumTour.jsx";
import Halls from "./Halls/Halls.jsx";
import Catalog from "./Catalog/Catalog.jsx";

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: "" },
        { path: "/about-museum", element: <AboutMuseum /> },
        {
          path: "/museum-tour",
          element: <MuseumTour />,
        },
        {
          path: "/museum-tour/:hallId",
          element: <Halls />,
        },
        { path: "/catalog", element: <Catalog /> },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
