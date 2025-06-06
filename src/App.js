import React from "react";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./Header/Header.jsx";
import AboutMuseum from "./AboutMuseum/AboutMuseum.jsx";
import Footer from "./Footer/Footer.jsx";
import MuseumTour from "./MuseumTour/MuseumTour.jsx";
import Halls from "./Halls/Halls.jsx";
import Catalog from "./Catalog/Catalog.jsx";
import Gallery from "./Gallery/Gallery.jsx";
import ContactUs from "./ContactUs/ContactUs.jsx";
import RulesForVisiting from "./RulesForVisiting/RulesForVisiting.jsx";
import ConditionsForVisiting from "./ConditionsForVisiting/ConditionsForVisiting.jsx";
import News from "./News/News.jsx";
import PressAboutMuseum from "./PressAboutMuseum/PressAboutMuseum.jsx";
import IndexPage from "./IndexPage/IndexPage.jsx";
import CatalogItemPage from "./CatalogItemPage/CatalogItemPage.jsx";

const Layout = () => {
  return (
    <div className="app">
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
        { path: "/", element: <IndexPage /> },
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
        { path: "/catalog/:id", element: <CatalogItemPage /> },
        { path: "/gallery", element: <Gallery /> },
        { path: "/news", element: <News /> },
        { path: "/news/:id", element: <PressAboutMuseum /> },
        // { path: "/test", element: <PressAboutMuseum /> },
        { path: "/contact-us", element: <ContactUs /> },
        {
          path: "/contact-us/rules-for-visiting",
          element: <RulesForVisiting />,
        },
        {
          path: "/contact-us/conditions-for-visiting",
          element: <ConditionsForVisiting />,
        },
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
