import "./CatalogPageTable.css";
import { Link, useNavigate } from "react-router-dom";
import ITEM_1 from "../Assets/ITEM_1.jpg";
import ITEM_2 from "../Assets/ITEM_2.jpg";
import ITEM_3 from "../Assets/ITEM_3.jpg";

const CatalogPageTable = ({ article, setArticle }) => {
  const { navigate } = useNavigate();

  const RedirectToPage = () => {};

  return (
    <div className="catalog-table">
      <div className="catalog-item">
        <Link
          to="/catalog/1"
          onClick={(e) => setArticle("1")}
          className="catalog-item-img-wrapper"
        >
          <img className="catalog-item-img" src={ITEM_1} alt="" />
        </Link>
        <Link
          to="/catalog/1"
          onClick={(e) => setArticle("1")}
          className="catalog-item-title"
        >
          <h1>Ламассу</h1>
        </Link>
        <div className="catalog-item-about">
          <h3>
            Країна: Іспанія Мануфактура: Lladro Дата створення: 2009 Скульптор:
            Marco Antonio Nogueron Розмір (см): 51x53 Лімітована серія
          </h3>
        </div>
      </div>
      <div className="catalog-item">
        <Link
          to="/catalog/2"
          onClick={(e) => setArticle("2")}
          className="catalog-item-img-wrapper"
        >
          <img className="catalog-item-img" src={ITEM_2} alt="" />
        </Link>
        <Link
          to="/catalog/2"
          onClick={(e) => setArticle("2")}
          className="catalog-item-title"
        >
          <h1>Три сестри</h1>
        </Link>
        <div className="catalog-item-about">
          <h3>
            Країна: Іспанія Мануфактура: Lladro Дата створення: 1986 Скульптор:
            Jose Puche Розмір (см): 35x34 Лімітована серія
          </h3>
        </div>
      </div>
      <div
        to="/catalog/3"
        onClick={(e) => setArticle("3")}
        className="catalog-item"
      >
        <Link
          to="/catalog/3"
          onClick={(e) => setArticle("3")}
          className="catalog-item-img-wrapper"
        >
          <img className="catalog-item-img" src={ITEM_3} alt="" />
        </Link>
        <Link
          to="/catalog/3"
          onClick={(e) => setArticle("3")}
          className="catalog-item-title"
        >
          <h1>Східний місяць</h1>
        </Link>
        <div className="catalog-item-about">
          <h3>
            Країна: Іспанія Мануфактура: Lladro Дата створення: 1986 Скульптор:
            Jose Puche Розмір (см): 35x34 Лімітована серія
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CatalogPageTable;
