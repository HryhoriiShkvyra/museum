import React from "react";
import "./MuseumTour.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HAll_1 from "../Assets/halls/hall_1.jpg";
import HAll_2 from "../Assets/halls/hall_2.jpg";
import HAll_3 from "../Assets/halls/hall_3.jpg";
import HAll_4 from "../Assets/halls/hall_4.jpg";

export default function MuseumTour() {
  return (
    <div className="main-section">
      {/* <div className="section">
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
        </div> */}

      <div className="halls">
        <div className="hall">
          <img className="hall-img" src={HAll_1} alt="" />
          <div className="hall-img-text">Зал 1</div>
        </div>
        <div className="hall">
          <img className="hall-img" src={HAll_2} alt="" />
          <div className="hall-img-text">Зал 2</div>
        </div>
        <div className="hall">
          <img className="hall-img" src={HAll_3} alt="" />
          <div className="hall-img-text">Зал 3</div>
        </div>
        <div className="hall">
          <img className="hall-img" src={HAll_4} alt="" />
          <div className="hall-img-text">Зал 4</div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
