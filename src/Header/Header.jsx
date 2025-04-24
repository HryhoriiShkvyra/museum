import React from "react";
import "./Header.css";
import Logo from "../Assets/logo.png";
import TopBar from "../TopBar/TopBar";

export default function Header() {
  const [langActive, setLangActive] = React.useState("UA");

  return (
    <div className="navbar-wrapper">
      <TopBar />

      <div className="section">
        <div className="navbar">
          <img className="logo" src={Logo} alt="" />

          <div className="navbar-btns">
            <div className="navbar-links">
              <div className="navbar-link">
                <h4>про музей</h4>
              </div>
              <div className="navbar-link">
                <h4>прогулянки музеєм</h4>
              </div>
              <div className="navbar-link">
                <h4>експонати музею</h4>
              </div>
              <div className="navbar-link">
                <h4>галерея</h4>
              </div>
              <div className="navbar-link">
                <h4>про нас</h4>
              </div>
              <div className="navbar-link">
                <h4>контакти</h4>
              </div>
            </div>

            <div className="navbar-lang-btns">
              <div
                onClick={(e) => setLangActive("UA")}
                className={
                  langActive === "UA"
                    ? "navbar-lang-btn-wrapper-active"
                    : "navbar-lang-btn-wrapper"
                }
              >
                <div className="navbar-lang-btn">
                  <h3>UA</h3>
                </div>
              </div>
              <div
                onClick={(e) => setLangActive("EN")}
                className={
                  langActive === "EN"
                    ? "navbar-lang-btn-wrapper-active"
                    : "navbar-lang-btn-wrapper"
                }
              >
                <div className="navbar-lang-btn">
                  <h3>EN</h3>
                </div>
              </div>
              <div
                onClick={(e) => setLangActive("RU")}
                className={
                  langActive === "RU"
                    ? "navbar-lang-btn-wrapper-active"
                    : "navbar-lang-btn-wrapper"
                }
              >
                <div className="navbar-lang-btn">
                  <h3>RU</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
