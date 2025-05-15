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

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [currentNumber, setCurrentNumber] = React.useState(sliderData[0]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % sliderData.length;
      setCurrentIndex(nextIndex);
      setCurrentNumber(sliderData[nextIndex]);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === 0 ? 5 - 1 : prevIndex - 1));
  // };

  const SliderItems = () => {
    return (
      <div className="slider-items">
        {/* <div
          className={
            sliderItemActive === "img_1" ? "slider-item-active" : "slider-item"
          }
        >
          <div className="slider-text">
            <div className="slider-item-title">
              <h1>Venetian Fantasy</h1>
            </div>
            <div className="slider-item-text-red">
              <h3>Limited Edition</h3>
            </div>
            <div className="slider-item-text">
              <h3>Країна: Spain</h3>
            </div>
            <div className="slider-item-text">
              <h3> Мануфактура: Lladro</h3>
            </div>
            <div className="slider-item-text">
              <h3>Дата створення: 2013</h3>
            </div>
            <div className="slider-item-text">
              <h3>Розмір (см): 55x36</h3>
            </div>
          </div>
          <img className="slider-item-img_1" src={IMG_1} alt="" />
        </div>
        <div
          className={
            sliderItemActive === "img_2" ? "slider-item-active" : "slider-item"
          }
        >
          <div className="slider-text">
            <div className="slider-item-title">
              <h1>Winged Fantasy</h1>
            </div>
            <div className="slider-item-text-red">
              <h3>Limited Edition</h3>
            </div>
            <div className="slider-item-text">
              <h3>Країна: Spain</h3>
            </div>
            <div className="slider-item-text">
              <h3> Мануфактура: Lladro</h3>
            </div>
            <div className="slider-item-text">
              <h3>Дата створення: 2018</h3>
            </div>
            <div className="slider-item-text">
              <h3>Розмір (см): 53x104</h3>
            </div>
          </div>
          <img className="slider-item-img_2" src={IMG_2} alt="" />
        </div>
        <div
          className={
            sliderItemActive === "img_3" ? "slider-item-active" : "slider-item"
          }
        >
          <div className="slider-text">
            <div className="slider-item-title">
              <h1>18th century carriage</h1>
            </div>
            <div className="slider-item-text-red">
              <h3>Limited Edition</h3>
            </div>
            <div className="slider-item-text">
              <h3>Країна: Spain</h3>
            </div>
            <div className="slider-item-text">
              <h3> Мануфактура: Lladro</h3>
            </div>
            <div className="slider-item-text">
              <h3>Дата створення: 1985</h3>
            </div>
            <div className="slider-item-text">
              <h3>Розмір (см): 45x113</h3>
            </div>
          </div>
          <img className="slider-item-img_3" src={IMG_3} alt="" />
        </div>
        <div
          className={
            sliderItemActive === "img_4" ? "slider-item-active" : "slider-item"
          }
        >
          <div className="slider-text">
            <div className="slider-item-title">
              <h1>Celestial Journey</h1>
            </div>
            <div className="slider-item-text-red">
              <h3>Limited Edition</h3>
            </div>
            <div className="slider-item-text">
              <h3>Країна: Spain</h3>
            </div>
            <div className="slider-item-text">
              <h3> Мануфактура: Lladro</h3>
            </div>
            <div className="slider-item-text">
              <h3>Дата створення: 1999</h3>
            </div>
            <div className="slider-item-text">
              <h3>Розмір (см): 34x46</h3>
            </div>
          </div>
          <img className="slider-item-img_4" src={IMG_4} alt="" />
        </div>
        <div
          className={
            sliderItemActive === "img_5" ? "slider-item-active" : "slider-item"
          }
        >
          <div className="slider-text">
            <div className="slider-item-title">
              <h1>Queen of the Nile</h1>
            </div>
            <div className="slider-item-text-red">
              <h3>Limited Edition</h3>
            </div>
            <div className="slider-item-text">
              <h3>Країна: Spain</h3>
            </div>
            <div className="slider-item-text">
              <h3> Мануфактура: Lladro</h3>
            </div>
            <div className="slider-item-text">
              <h3>Дата створення: 2006</h3>
            </div>
            <div className="slider-item-text">
              <h3>Розмір (см): 75x160</h3>
            </div>
          </div>
          <img className="slider-item-img_5" src={IMG_5} alt="" />
        </div> */}

        {/* {sliderData.map((sliderItem) => (
          <div className="slider-item-active">
            <div className="slider-text">
              <div className="slider-item-title">
                <h1>{sliderItem.title}</h1>
              </div>
              <div className="slider-item-text-red">
                <h3>Limited Edition</h3>
              </div>
              <div className="slider-item-text">
                <h3>{sliderItem.country}</h3>
              </div>
              <div className="slider-item-text">
                <h3>{sliderItem.manufacture}</h3>
              </div>
              <div className="slider-item-text">
                <h3>{sliderItem.date}</h3>
              </div>
              <div className="slider-item-text">
                <h3>{sliderItem.size}</h3>
              </div>
            </div>
            <img className="slider-item-img_5" src={sliderItem.img} alt="" />
          </div>
        ))} */}

        <div className="slider-item-active">
          <div className="slider-text">
            <div className="slider-item-title">
              <h1>{currentNumber.title}</h1>
            </div>
            <div className="slider-item-text-red">
              <h3>Limited Edition</h3>
            </div>
            <div className="slider-item-text">
              <h3>{currentNumber.country}</h3>
            </div>
            <div className="slider-item-text">
              <h3>{currentNumber.manufacture}</h3>
            </div>
            <div className="slider-item-text">
              <h3>{currentNumber.date}</h3>
            </div>
            <div className="slider-item-text">
              <h3>{currentNumber.size}</h3>
            </div>
          </div>
          <img className="slider-item-img" src={currentNumber.img} alt="" />
        </div>
      </div>
    );
  };

  return (
    <dvi className="slider">
      <div className="slider-btn"></div>
      <SliderItems />
      <div className="slider-btn"></div>
    </dvi>
  );
};

export default Slider;

// <div className="slider-item">
//   <div className="slider-text">
//     <div className="slider-item-title">
//       <h1>{item.title}</h1>
//     </div>
//     <div className="slider-item-text-red">
//       <h3>Limited Edition</h3>
//     </div>
//     <div className="slider-item-text">
//       <h3>Країна: {item.country}</h3>
//     </div>
//     <div className="slider-item-text">
//       <h3> Мануфактура: {item.manufactory}</h3>
//     </div>
//     <div className="slider-item-text">
//       <h3>Дата створення: {item.date}</h3>
//     </div>
//     <div className="slider-item-text">
//       <h3>Розмір (см): {item.size}</h3>
//     </div>
//   </div>
//   <img src={item.img} alt="" />
// </div>
