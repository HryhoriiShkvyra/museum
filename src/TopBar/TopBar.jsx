import React from "react";
import "./TopBar.css";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";

function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-links">
        <div className="top-bar-link">
          <div className="top-bar-link-icon">
            <PlaceIcon />
          </div>
          <div className="top-bar-link-text">
            <h2>м. Київ, Вознесенський узвіз, 00</h2>
          </div>
        </div>
        <div className="top-bar-link">
          <div className="top-bar-link-icon">
            <PhoneIcon />
          </div>
          <div className="top-bar-link-text">
            <h2>+38 (000) 000-00-00</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
