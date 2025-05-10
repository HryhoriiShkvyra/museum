import REACT from "react";
import "./PressAboutMuseum.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const PressAboutMuseum = () => {
  return (
    <div className="press-about-museum">
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
    </div>
  );
};

export default PressAboutMuseum;
