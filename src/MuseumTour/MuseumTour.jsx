import React from "react";
import "./MuseumTour.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HAll_1 from "../Assets/halls/hall_1.jpg";
import HAll_2 from "../Assets/halls/hall_2.jpg";
import HAll_3 from "../Assets/halls/hall_3.jpg";
import HAll_4 from "../Assets/halls/hall_4.jpg";
import { Link } from "react-router-dom";

export default function MuseumTour() {
  return (
    <div className="museum-tour">
      <div className="section">
        <div className="page-title-wrapper">
          <div className="page-title">
            <h1>Прогулянки музеєм</h1>
          </div>
          <div className="redirect-tree">
            <h2>Головна</h2>
            <div className="redirect-tree-icon">
              <NavigateNextIcon />
            </div>
            <h2>Прогулянки музеєм</h2>
          </div>
        </div>

        <div className="main-section">
          <div className="halls">
            <Link className="hall" to="/museum-tour/hall-1">
              <img className="hall-img" src={HAll_1} alt="" />
              <div className="hall-img-text">Зал 1</div>
            </Link>
            <Link className="hall" to="/museum-tour/hall-2">
              <img className="hall-img" src={HAll_2} alt="" />
              <div className="hall-img-text">Зал 2</div>
            </Link>
            <Link className="hall" to="/museum-tour/hall-3">
              <img className="hall-img" src={HAll_3} alt="" />
              <div className="hall-img-text">Зал 3</div>
            </Link>
            <Link className="hall" to="/museum-tour/hall-4">
              <img className="hall-img" src={HAll_4} alt="" />
              <div className="hall-img-text">Зал 4</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
