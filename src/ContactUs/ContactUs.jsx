import React from "react";
import "./ContactUs.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <div className="contact-us">
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
      <div className="main-section">
        <div className="contact-us-about">
          <div className="contact-us-textarea-wrapper">
            <div className="contact-us-textarea">
              <div className="contact-us-textarea-bold">Адреса:</div>
              <div className="contact-us-textarea-text">
                м. Київ, Вознесенський узвіз, 00 (метро "Контрактова площа")
              </div>
            </div>

            <div className="contact-us-textarea">
              <div className="contact-us-textarea-bold">Телефон: </div>
              <div className="contact-us-textarea-text">
                +38 (000) 000-00-00
              </div>
            </div>
            <div className="contact-us-textarea">
              <div className="contact-us-textarea-bold">E-mail: </div>
              <div className="contact-us-textarea-text">
                office.shvetsmuseum@gmail.com
              </div>
            </div>
            <div className="contact-us-textarea">
              <div className="contact-us-textarea-bold">
                Графік роботи музею:
              </div>
            </div>
            <div className="contact-us-textarea">
              <div className="contact-us-textarea-text">
                п’ятниця, субота, неділя: з 10:00 до 19:00.
              </div>
            </div>
            <div className="contact-us-textarea">
              <div className="contact-us-textarea-bold-black">
                Перед відвідуванням екскурсії, будь ласка, ознайомтесь з
                правилами відвідування музею.
              </div>
            </div>
            <div className="contact-us-textarea">
              <Link
                to="/contact-us/rules-for-visiting"
                className="contact-us-btn"
              >
                Правила відвідування музею
              </Link>
            </div>
            <div className="contact-us-textarea">
              <Link
                to="/contact-us/conditions-for-visiting"
                className="contact-us-btn"
              >
                Ціни та умови відвідування
              </Link>
            </div>
          </div>
          <div className="contact-us-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2539.909140204549!2d30.50495118356249!3d50.46141661457129!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf7df800e80f%3A0xe0a29a9e996f9b17!2sShvets%CA%B9muzey!5e0!3m2!1sen!2sua!4v1746714860966!5m2!1sen!2sua"
              width="650"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
