import React from "react";
import "./CatalogPageTable.css";
import { Link, useParams } from "react-router-dom";

const CatalogPageTable = ({
  sortByManufacture,
  sortByCountry,
  data,
  setArticle,
  tableState,
}) => {
  const { country } = useParams();

  const [countries, setCountries] = React.useState([]);
  const [manufactures, setManufactures] = React.useState([]);
  const [threeItems, setThreeItems] = React.useState([]);

  const filterByCountries = () => {
    const foundCountries = [];
    data.forEach((item) => {
      if (item.country_ua === sortByCountry) {
        return foundCountries.push(item);
      }
    });
    setCountries(foundCountries);
  };

  React.useEffect(() => {
    filterByCountries();
  }, [sortByCountry]);

  const filterByManufacture = () => {
    const foundManufacture = [];
    data.forEach((item) => {
      if (item.manufacture === sortByManufacture) {
        foundManufacture.push(item);
      }
    });
    setManufactures(foundManufacture);
  };

  React.useEffect(() => {
    filterByManufacture();
  }, [sortByManufacture]);

  const filterElseItems = () => {
    const filteredItems = data
      .filter((item) => item.country === country)
      .slice(0, 3);

    setThreeItems(filteredItems);
  };

  React.useEffect(() => {
    filterElseItems();
  }, [tableState]);

  React.useEffect(() => {
    console.log(threeItems);
  }, [threeItems]);

  const CatalogPageTableRenderLogic = () => {
    if (tableState === "regular") {
      if (sortByCountry === "австрія") {
        return CatalogPageTableRenderTemplate(countries);
      } else if (sortByCountry === "італія") {
        return CatalogPageTableRenderTemplate(countries);
      } else if (sortByCountry === "англія") {
        return CatalogPageTableRenderTemplate(countries);
      } else if (sortByCountry === "данія") {
        return CatalogPageTableRenderTemplate(countries);
      } else if (sortByCountry === "іспанія") {
        return CatalogPageTableRenderTemplate(countries);
      } else if (sortByCountry === "китай") {
        return CatalogPageTableRenderTemplate(countries);
      } else if (sortByCountry === "нідерланди") {
        return CatalogPageTableRenderTemplate(countries);
      } else if (sortByCountry === "німеччина") {
        return CatalogPageTableRenderTemplate(countries);
      } else if (sortByCountry === "туреччина") {
        return CatalogPageTableRenderTemplate(countries);
      } else if (sortByCountry === "україна") {
        return CatalogPageTableRenderTemplate(countries);
      } else if (sortByCountry === "франція") {
        return CatalogPageTableRenderTemplate(countries);
      } else if (sortByCountry === "чехія") {
        return CatalogPageTableRenderTemplate(countries);
      } else if (sortByCountry === "японія") {
        return CatalogPageTableRenderTemplate(countries);
      } else if (sortByManufacture === "всі мануфактури") {
        return CatalogPageTableRenderTemplate(data);
      } else if (sortByManufacture === "lladró") {
        return CatalogPageTableRenderTemplate(manufactures);
      } else if (sortByManufacture === "dragon China") {
        return CatalogPageTableRenderTemplate(manufactures);
      } else if (sortByManufacture === "без бренду") {
        return CatalogPageTableRenderTemplate(manufactures);
      } else if (sortByManufacture === "volkstedt") {
        return CatalogPageTableRenderTemplate(manufactures);
      } else if (sortByManufacture === "wedgwood") {
        return CatalogPageTableRenderTemplate(manufactures);
      } else return console.error("error");
    } else if (tableState === "three-items") {
      if (country === "spain") {
        return CatalogPageTableRenderTemplate(threeItems);
      } else if (country === "austria") {
        return CatalogPageTableRenderTemplate(threeItems);
      } else if (country === "england") {
        return CatalogPageTableRenderTemplate(threeItems);
      } else if (country === "denmark") {
        return CatalogPageTableRenderTemplate(threeItems);
      } else if (country === "italy") {
        return CatalogPageTableRenderTemplate(threeItems);
      } else if (country === "china") {
        return CatalogPageTableRenderTemplate(threeItems);
      } else if (country === "netherlands") {
        return CatalogPageTableRenderTemplate(threeItems);
      } else if (country === "germany") {
        return CatalogPageTableRenderTemplate(threeItems);
      } else if (country === "turkey") {
        return CatalogPageTableRenderTemplate(threeItems);
      } else if (country === "ukraine") {
        return CatalogPageTableRenderTemplate(threeItems);
      } else if (country === "france") {
        return CatalogPageTableRenderTemplate(threeItems);
      } else if (country === "czech_republic") {
        return CatalogPageTableRenderTemplate(threeItems);
      } else if (country === "japan") {
        return CatalogPageTableRenderTemplate(threeItems);
      } else return console.error("error");
    }
  };

  const CatalogPageTableRenderTemplate = (item) => {
    return (
      <div className="catalog-table">
        {item.map((item, index) => (
          <div key={index + " " + item.url_title} className="catalog-item">
            <Link
              to={`/catalog/${item.country}/${item.url_title}`}
              onClick={(e) => setArticle(`${item.url_title}`)}
              className="catalog-item-img-wrapper"
            >
              <img className="catalog-item-img" src={item.src} alt="" />
            </Link>
            <Link
              to={`/catalog/${item.country}/${item.url_title}`}
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

  return <CatalogPageTableRenderLogic />;
};

export default CatalogPageTable;
