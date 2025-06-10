import React from "react";
import "./CatalogPageTable.css";
import { Link } from "react-router-dom";

const CatalogPageTable = ({
  sortByManufacture,
  sortByCountry,
  data,
  setArticle,
  tableState,
}) => {
  console.log(data);
  console.log(sortByCountry);
  console.log(setArticle);
  console.log(sortByManufacture);
  console.log(tableState);

  const [countries, setCountries] = React.useState("");

  const filterCountries = () => {
    const foundCountries = [];
    data.forEach((item) => {
      if (item.country_ua === sortByCountry) {
        foundCountries.push(item);
      }
    });
    setCountries(foundCountries);
  };

  React.useEffect(() => {
    filterCountries();
  }, [sortByCountry]);

  const CatalogPageTableRenderLogic = () => {
    if (tableState === "regular") {
      if (sortByCountry === "Австрія") {
        return CatalogPageTableRenderTemplate(countries);
      } else if (sortByCountry === "Італія") {
        return CatalogPageTableRenderTemplate(countries);
      } else if (sortByManufacture === "Всі мануфактури") {
        return CatalogPageTableRenderTemplate(data);
      }
    } else if (tableState === "three-items") {
      if (sortByCountry === "Австрія") {
        return CatalogPageTableRenderTemplate(countries);
      } else if (sortByCountry === "Італія") {
        return CatalogPageTableRenderTemplate(countries);
      }
    }
  };

  const CatalogPageTableRenderTemplate = (data) => {
    return (
      <div className="catalog-table">
        {data.map((item, index) => (
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
              to={`/catalog/${item.url_title}`}
              onClick={(e) => setArticle(`${item.url_title}`)}
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

  const CataloPageTableRender = () => {
    if (sortByCountry === "") {
      return (
        <>
          {" "}
          {data.map((item, index) => (
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
                to={`/catalog/${item.url_title}`}
                onClick={(e) => setArticle(`${item.url_title}`)}
                className="catalog-item-title"
              >
                <h1>{item.title_ua}</h1>
              </Link>
              <div className="catalog-item-about">
                <h3>{item.about}</h3>
              </div>
            </div>
          ))}
        </>
      );
    } else if (sortByCountry === "Австрія") {
      return (
        <>
          {" "}
          {countries.map((item, index) => (
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
                to={`/catalog/${item.url_title}`}
                onClick={(e) => setArticle(`${item.url_title}`)}
                className="catalog-item-title"
              >
                <h1>{item.title_ua}</h1>
              </Link>
              <div className="catalog-item-about">
                <h3>{item.about}</h3>
              </div>
            </div>
          ))}
        </>
      );
    }
  };

  return <CatalogPageTableRenderLogic />;
};

export default CatalogPageTable;
