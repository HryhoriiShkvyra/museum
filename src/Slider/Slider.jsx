import React from "react";
import "./Slider.css";
import IMG_1 from "../Assets/slide1.jpg";
import IMG_2 from "../Assets/slide2.jpg";
import IMG_3 from "../Assets/slide3.jpg";
import IMG_4 from "../Assets/slide4.jpg";
import IMG_5 from "../Assets/slide5.jpg";
import IMG_6 from "../Assets/slide6.jpg";
import IMG_7 from "../Assets/slide7.jpg";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  const sliderData = [
    {
      title_ua: "Венеціанська фантазія",
      country: "Іспанія",
      manufacture: "Lladro",
      date: "2013",
      size: "55x36",
      img: IMG_1,
    },
    {
      title_ua: "Крилата фантазія",
      country: "Іспанія",
      manufacture: "Lladro",
      date: "2018",
      size: "53x104",
      img: IMG_2,
    },
    {
      title_ua: "Карета XVIII століття",
      country: "Іспанія",
      manufacture: "Lladro",
      date: "1985",
      size: "45x113",
      img: IMG_3,
    },
    {
      title_ua: "Небесна подорож",
      country: "Іспанія",
      manufacture: "Lladro",
      date: "1999",
      size: "34x46",
      img: IMG_4,
    },
    {
      title_ua: "Цариця Нілу",
      country: "Іспанія",
      manufacture: "Lladro",
      date: "2006",
      size: "75x160",
      img: IMG_5,
    },
  ];
  const slideInterval = 5000;
  const totalSlides = sliderData.length;

  React.useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, slideInterval);

      return () => clearInterval(timer);
    }
  }, [isHovered, totalSlides]);

  const nextSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  return (
    <>
      <div
        className="slider-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="slider-wrapper">
          {sliderData.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentSlide ? "active" : ""}`}
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="info-block">
                <h3 className="info-title">{slide.title_ua}</h3>
                <h5 className="info-subtitle">Limited edition</h5>
                <div className="info-details">
                  <div className="info-row">
                    <h3 className="info-label">Країна:</h3>
                    <h3 className="info-value">{slide.country}</h3>
                  </div>

                  <div className="info-row">
                    <h3 className="info-label">Майстер:</h3>
                    <h3 className="info-value">{slide.manufacture}</h3>
                  </div>
                  <div className="info-row">
                    <h3 className="info-label">Дата:</h3>
                    <h3 className="info-value">{slide.date}</h3>
                  </div>
                  <div className="info-row">
                    <h3 className="info-label">Розмір:</h3>
                    <h3 className="info-value">{slide.size}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-arrow prev" onClick={prevSlide}>
          ‹
        </button>
        <button className="nav-arrow next" onClick={nextSlide}>
          ›
        </button>
      </div>
    </>
  );
};

export default Slider;
