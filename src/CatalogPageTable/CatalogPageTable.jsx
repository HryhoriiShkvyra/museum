import React from "react";
import "./CatalogPageTable.css";
import { Link } from "react-router-dom";

const CatalogPageTable = ({ data, setArticle }) => {
  console.log(data);

  return (
    <div className="catalog-table">
      {data.slice(0, 3).map((item, index) => (
        <div key={index + " " + item.url_title} className="catalog-item">
          <Link
            to={`/catalog/${item.url_title}`}
            onClick={(e) => setArticle(`${item.url_title}`)}
            // onClick={(e) => pushToLocalStorage(item)}
            className="catalog-item-img-wrapper"
          >
            <img className="catalog-item-img" src={item.src} alt="" />
          </Link>
          <Link
            to="/catalog/1"
            onClick={(e) => setArticle("1")}
            className="catalog-item-title"
          >
            <h1>{item.title_ua}</h1>
          </Link>
          <div className="catalog-item-about">
            <h3>{item.about}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CatalogPageTable;
