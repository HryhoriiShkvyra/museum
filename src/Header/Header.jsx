import React from "react";
import "./Header.css";
import Logo from "../Assets/logo.png";
import TopBar from "../TopBar/TopBar";
import { Link } from "react-router-dom";
import DehazeRoundedIcon from "@mui/icons-material/DehazeRounded";

export default function Header() {
  const [langActive, setLangActive] = React.useState("UA");
  const [mobileNavbar, setMobileNavBar] = React.useState("");

  const mobileNavbarToggle = () => {
    setMobileNavBar((prev) => !prev);
    console.log(mobileNavbar);
  };

  return (
    <div className="navbar-wrapper">
      <TopBar />

      <div className="navbar">
        <Link onClick={(e) => setMobileNavBar(false)} to="/">
          <img className="logo" src={Logo} alt="" />
        </Link>
        <div className="navbar-btns">
          <div className="navbar-links">
            <Link to="/about-museum" className="navbar-link">
              <h4>про музей</h4>
            </Link>
            <Link to="/museum-tour" className="navbar-link">
              <h4>прогулянки музеєм</h4>
            </Link>
            <Link to="/catalog" className="navbar-link">
              <h4>експонати музею</h4>
            </Link>
            <Link to="/gallery" className="navbar-link">
              <h4>галерея</h4>
            </Link>
            <Link to="/news" className="navbar-link">
              <h4>про нас</h4>
            </Link>
            <Link to="/contact-us" className="navbar-link">
              <h4>контакти</h4>
            </Link>
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
        <div className="navbar-mobile">
          <button onClick={mobileNavbarToggle} className="navbar-mobile-icon">
            <DehazeRoundedIcon style={{ color: "var(--white)" }} />
          </button>
        </div>
      </div>
      {mobileNavbar ? (
        <div className="navbar-mobile-wrapper">
          <div className="navbar-mobile-btns">
            <Link
              onClick={(e) => setMobileNavBar((prev) => !prev)}
              to="/about-museum"
              className="navbar-mobile-btn"
            >
              <h4>ПРО МУЗЕЙ</h4>
            </Link>
            <Link
              onClick={(e) => setMobileNavBar((prev) => !prev)}
              to="/museum-tour"
              className="navbar-mobile-btn"
            >
              <h4>ПРОГУЛЯНКИ МУЗЕЕМ</h4>
            </Link>
            <Link
              onClick={(e) => setMobileNavBar((prev) => !prev)}
              to="/catalog"
              className="navbar-mobile-btn"
            >
              <h4>ЕКСПОНАТИ МУЗЕЮ</h4>
            </Link>
            <Link
              onClick={(e) => setMobileNavBar((prev) => !prev)}
              to="/gallery"
              className="navbar-mobile-btn"
            >
              <h4>ГАЛЕРЕЯ</h4>
            </Link>
            <Link
              onClick={(e) => setMobileNavBar((prev) => !prev)}
              to="/news"
              className="navbar-mobile-btn"
            >
              <h4>ПРО НАС</h4>
            </Link>
            <Link
              onClick={(e) => setMobileNavBar((prev) => !prev)}
              to="/contact-us"
              className="navbar-mobile-btn"
            >
              <h4>КОНТАКТИ</h4>
            </Link>
          </div>
          <div className="navbar-mobile-lang-btns">
            {" "}
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
      ) : null}
    </div>
  );
}
