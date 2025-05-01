import React from "react";
import "./Catalog.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ITEM_1 from "../Assets/ITEM_1.jpg";
import ITEM_2 from "../Assets/ITEM_2.jpg";
import ITEM_3 from "../Assets/ITEM_3.jpg";

export default function Catalog() {
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
          <div className="filter-by-country-btn">
            <h3 style={{ fontSize: "16px" }}>Австрія</h3>
          </div>
          <div className="filter-by-country-btn">
            <h3 style={{ fontSize: "16px" }}>Англія</h3>
          </div>
          <div className="filter-by-country-btn">
            <h3 style={{ fontSize: "16px" }}>Данія</h3>
          </div>
          <div className="filter-by-country-btn">
            <h3 style={{ fontSize: "16px" }}>Іспанія</h3>
          </div>
          <div className="filter-by-country-btn">
            <h3 style={{ fontSize: "16px" }}>Італія</h3>
          </div>
          <div className="filter-by-country-btn">
            <h3 style={{ fontSize: "16px" }}>Китай</h3>
          </div>
          <div className="filter-by-country-btn">
            <h3 style={{ fontSize: "16px" }}>Нідерланди</h3>
          </div>
          <div className="filter-by-country-btn">
            <h3 style={{ fontSize: "16px" }}>Німеччина</h3>
          </div>
          <div className="filter-by-country-btn">
            <h3 style={{ fontSize: "16px" }}>Туреччина</h3>
          </div>
          <div className="filter-by-country-btn">
            <h3 style={{ fontSize: "16px" }}>Україна</h3>
          </div>
          <div className="filter-by-country-btn">
            <h3 style={{ fontSize: "16px" }}>Франція</h3>
          </div>
          <div className="filter-by-country-btn">
            <h3 style={{ fontSize: "16px" }}>Чехія</h3>
          </div>
          <div className="filter-by-country-btn">
            <h3 style={{ fontSize: "16px" }}>Японія</h3>
          </div>
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
        <div className="catalog-table">
          <div className="catalog-item">
            <div className="catalog-item-img-wrapper">
              <img className="catalog-item-img" src={ITEM_1} alt="" />
            </div>
            <div className="catalog-item-title">
              <h1>Ламассу</h1>
            </div>
            <div className="catalog-item-about">
              <h3>
                Країна: Іспанія Мануфактура: Lladro Дата створення: 2009
                Скульптор: Marco Antonio Nogueron Розмір (см): 51x53 Лімітована
                серія
              </h3>
            </div>
          </div>
          <div className="catalog-item">
            <div className="catalog-item-img-wrapper">
              <img className="catalog-item-img" src={ITEM_2} alt="" />
            </div>{" "}
            <div className="catalog-item-title">
              <h1>Три сестри</h1>
            </div>
            <div className="catalog-item-about">
              <h3>
                Країна: Іспанія Мануфактура: Lladro Дата створення: 1986
                Скульптор: Jose Puche Розмір (см): 35x34 Лімітована серія
              </h3>
            </div>
          </div>
          <div className="catalog-item">
            <div className="catalog-item-img-wrapper">
              <img className="catalog-item-img" src={ITEM_3} alt="" />
            </div>{" "}
            <div className="catalog-item-title">
              <h1>Східний місяць</h1>
            </div>
            <div className="catalog-item-about">
              <h3>
                Країна: Іспанія Мануфактура: Lladro Дата створення: 1986
                Скульптор: Jose Puche Розмір (см): 35x34 Лімітована серія
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
