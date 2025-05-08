import React from "react";
import "./Gallery.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import IMG_1 from "../Assets/gallery/IMG_1.jpg";
import IMG_2 from "../Assets/gallery/IMG_2.jpg";
import IMG_3 from "../Assets/gallery/IMG_3.jpg";
import IMG_4 from "../Assets/gallery/IMG_4.jpg";
import IMG_5 from "../Assets/gallery/IMG_5.jpg";
import IMG_6 from "../Assets/gallery/IMG_6.jpg";
import IMG_7 from "../Assets/gallery/IMG_7.jpg";
import IMG_8 from "../Assets/gallery/IMG_8.jpg";
import IMG_9 from "../Assets/gallery/IMG_9.jpg";
import IMG_10 from "../Assets/gallery/IMG_10.jpg";
import IMG_11 from "../Assets/gallery/IMG_11.jpg";
import IMG_12 from "../Assets/gallery/IMG_12.jpg";
import IMG_13 from "../Assets/gallery/IMG_13.jpg";
import IMG_14 from "../Assets/gallery/IMG_14.jpg";
import IMG_15 from "../Assets/gallery/IMG_15.jpg";
import IMG_16 from "../Assets/gallery/IMG_16.jpg";
import IMG_17 from "../Assets/gallery/IMG_17.jpg";
import IMG_18 from "../Assets/gallery/IMG_18.jpg";
import IMG_19 from "../Assets/gallery/IMG_19.jpg";

export default function Gallery() {
  const galleryData = [
    {
      img: IMG_1,
      text: "Відома співачка, народна артистка УРСР, Герой України Ніна Матвієнко була вражена унікальними роботами з порцеляни, які представлені у Shvets Museum (лютий 2023 року)",
    },
    {
      img: IMG_2,
      text: "Відома співачка, народна артистка УРСР, Герой України Ніна Матвієнко була вражена унікальними роботами з порцеляни, які представлені у Shvets Museum (лютий 2023 року)",
    },
    {
      img: IMG_3,
      text: "Відома співачка, народна артистка УРСР, Герой України Ніна Матвієнко була вражена унікальними роботами з порцеляни, які представлені у Shvets Museum (лютий 2023 року)",
    },
    {
      img: IMG_4,
      text: "Керівництво ТОВ “Агромат” завітало до першого в Україні музею світової порцеляни (зима 2023 року)",
    },
    {
      img: IMG_5,
      text: "Засновник ТОВ “Агромат”, один із дарувальників Shvets Museum Сергій Войтенко (липень 2022 року)",
    },
    {
      img: IMG_6,
      text: "Олександр Швець провів екскурсію для колег-журналістів Олександра Ільченко, Олени Шрамко, Олени Холоденко, Євгена Гольцова, Сергія Тихого (лютий 2023 року)",
    },
    {
      img: IMG_7,
      text: "Петро Мага, народний артист України, вразився видатними цілісними порцеляновими роботами, представленими у музеї в липні 2022 року.",
    },
    {
      img: IMG_8,
      text: "Дмитро Гордон під час інтерв`ю з засновником музею Олександром Швецем (вересень 2022 року)",
    },
    {
      img: IMG_9,
      text: "Спортивний журналіст Олександр Ліпенко, Олександр Швець та легендарний футболіст, заслужений тренер України Леонід Буряк (осінь 2022 року)",
    },
    {
      img: IMG_10,
      text: "Серед дарувальників Shvets MuseumТетяна та Анатолій Макаренки стали першими, хто завітав до музею одразу після відкриття (9 червня 2023 року)",
    },
    {
      img: IMG_11,
      text: "Приємно бачити серед відвідувачів нашого музею давніх друзів, дарувальників музею віцеспікерку Верховної Ради Олену Кондратюк і її чоловіка, легендарного телевізійного топ-менеджера Олександра Богуцького. До нас вони завітали с батьками та донькою Юстиною",
    },
    {
      img: IMG_12,
      text: "Приємно бачити серед відвідувачів нашого музею давніх друзів, дарувальників музею віцеспікерку Верховної Ради Олену Кондратюк і її чоловіка, легендарного телевізійного топ-менеджера Олександра Богуцького. До нас вони завітали с батьками та донькою Юстиною",
    },
    {
      img: IMG_13,
      text: "Засновник музею Олександр Швець та один із дарувальників ShvetsMuseum відомий кардіохірург, професор, директор Інституту серця Борис Тодуров з дружиною Наталією (березень 2024)",
    },
    {
      img: IMG_14,
      text: "Легендарні українські футболісти Олексій Михайличенко, Олег Кузнецов та Павло Яковенко з дружинами та друзями завітали до ShvetsMuseum (березень 2024)",
    },
    {
      img: IMG_15,
      text: "До ShvetsMuseum завітав відомий конферансьє, шоу-мен та артист Дмитро Оскін (травень 2024 року)",
    },
    {
      img: IMG_16,
      text: "Гостями ShvetsMuseum стали відомі українські блогери Максим і Даша Співаки (YouTube-канал Спектакуляре) та їхній двомісячний синочок Марко — наймолодший відвідувач музею (вересень 2024)",
    },
    {
      img: IMG_17,
      text: "До першого в Україні музею порцелянових фігур завітали Герой України, заступник командира полку «Азов» Святослав Паламар («Калина») та його дружина Антоніна (жовтень 2024)",
    },
    {
      img: IMG_18,
      text: "На авторській екскурсії Олександра Швеця побували вдова всесвітньо відомого українського співака Анатолія Солов’яненко Світлана з подругою, народний артист України Павло Зібров та легендарний поет, Герой України Юрій Рибчинський з дружиною Олександрою",
    },
    {
      img: IMG_19,
      text: "Засновник музею Олександр Швець: «Геніальні вірші Юрія Рибчинського в музейному приміщенні звучали по-урочистому пророче і водночас по-домашньому тепло» (жовтень 2024 року)",
    },
  ];

  return (
    <div className="gallery">
      <div className="section">
        <div className="page-title-wrapper">
          <div className="page-title">
            <h1>Галерея</h1>
          </div>
          <div className="redirect-tree">
            <h2>Головна</h2>
            <div className="redirect-tree-icon">
              <NavigateNextIcon />
            </div>
            <h2>Фото</h2>
            <div className="redirect-tree-icon">
              <NavigateNextIcon />
            </div>
            <h2>Галерея</h2>
          </div>
        </div>
      </div>
      <div className="main-section">
        <div className="gallery-table">
          {galleryData.map((gallery_item) => (
            <div key={gallery_item.img} className="gallery-table-item">
              <div className="gallery-table-photo">
                <img src={gallery_item.img} alt="#" />
              </div>
              <div className="gallery-table-text">{gallery_item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
