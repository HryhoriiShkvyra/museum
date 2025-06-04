import React from "react";
import "./Catalog.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CatalogPageTable from "../CatalogPageTable/CatalogPageTable";
import DataSheet from "../DataSheet/DataSheet";

export default function Catalog() {
  // const [filterCountry, setFilterCountry] = React.useState("всі мануфактури");

  const dataSheet = DataSheet;

  const countries = [
    "Австрія",
    "Англія",
    "Данія",
    "Іспанія",
    "Італія",
    "Китай",
    "Нідерлінди",
    "Німеччина",
    "Туреччина",
    "Україна",
    "Франція",
    "Чехія",
    "Японія",
  ];

  return (
    <div className="Catalog">
      <div className="section">
        <div className="page-title-wrapper">
          <div className="page-title">
            <h1>Експонати музею</h1>
          </div>
          <div className="redirect-tree">
            <h2>Головна</h2>
            <div className="redirect-tree-icon">
              <NavigateNextIcon />
            </div>
            <h2>Експонати музею</h2>
          </div>
        </div>
      </div>

      <div className="main-section">
        <div className="filter-by-country">
          {countries.map((country, index) => (
            <div key={index + "_" + country} className="filter-by-country-btn">
              <h3 key={country} style={{ fontSize: "16px" }}>
                {country}
              </h3>
            </div>
          ))}
        </div>
        <div className="filter-by-manufacture">
          <div className="filter-by-manufacture-text">
            <h2>Мануфактури :</h2>
          </div>
          <div className="filter-by-manufacture-title">
            <h2>Lladró</h2>
          </div>
          <div className="filter-by-manufacture-title">
            <h2>Dragon China</h2>
          </div>
          <div className="filter-by-manufacture-title">
            <h2>Без бренду</h2>
          </div>
          <div className="filter-by-manufacture-title">
            <h2>Volkstedt</h2>
          </div>
          <div className="filter-by-manufacture-title">
            <h2>Wedgwood</h2>
          </div>
          <div className="filter-by-manufacture-title">
            <h2>Всі мануфактури</h2>
          </div>
        </div>
        <CatalogPageTable data={dataSheet} />
      </div>
    </div>
  );
}
