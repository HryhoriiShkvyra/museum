import React from "react";
import "./Catalog.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CatalogPageTable from "../CatalogPageTable/CatalogPageTable";
import DataSheet from "../DataSheet/DataSheet";

export default function Catalog() {
  const tableState = "regular";
  const [sortByCountry, setSortByCountry] = React.useState("");
  const [sortNyManufacture, setSortByManufacture] =
    React.useState("Всі мануфактури");

  const dataSheet = DataSheet;

  const countries = [
    "Австрія",
    "Англія",
    "Данія",
    "Іспанія",
    "Італія",
    "Китай",
    "Нідерланди",
    "Німеччина",
    "Туреччина",
    "Україна",
    "Франція",
    "Чехія",
    "Японія",
  ];

  const manufactures = [
    "Lladró",
    "Dragon China",
    "Без бренду",
    "Volkstedt",
    "Wedgwood",
    "Всі мануфактури",
  ];

  const manufactureSetter = (manufacture) => {
    return setSortByManufacture(manufacture), setSortByCountry("");
  };
  const countrySetter = (country) => {
    return setSortByCountry(country), setSortByManufacture("");
  };

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
            <div
              key={index + "_" + country}
              onClick={(e) => countrySetter(country)}
              className={
                sortByCountry === country
                  ? "filter-by-country-btn-active"
                  : "filter-by-country-btn"
              }
            >
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
          <div className="filter-by-manufacture-wrapper">
            {manufactures.map((manufacture, index) => (
              <div
                onClick={(e) => manufactureSetter(manufacture)}
                className="filter-by-manufacture-title-text"
                key={manufacture + "-" + index}
              >
                <div
                  className={
                    sortNyManufacture === manufacture
                      ? "filter-by-manufacture-title-active"
                      : "filter-by-manufacture-title"
                  }
                >
                  <h2>{manufacture}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <CatalogPageTable
          sortByManufacture={sortNyManufacture}
          sortByCountry={sortByCountry}
          data={dataSheet}
          tableState={tableState}
        />
      </div>
    </div>
  );
}
