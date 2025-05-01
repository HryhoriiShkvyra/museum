import React from "react";
import "./Halls.css";
import { useParams } from "react-router";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import IMG_1_1 from "../Assets/halls/hall_1/hall_1_1.jpg";
import IMG_1_2 from "../Assets/halls/hall_1/hall_1_2.jpg";
import IMG_1_3 from "../Assets/halls/hall_1/hall_1_3.jpg";
import IMG_1_4 from "../Assets/halls/hall_1/hall_1_4.jpg";
import IMG_1_5 from "../Assets/halls/hall_1/hall_1_5.jpg";
import IMG_1_6 from "../Assets/halls/hall_1/hall_1_6.jpg";
import IMG_2_1 from "../Assets/halls/hall_2/hall_2_1.jpg";
import IMG_2_2 from "../Assets/halls/hall_2/hall_2_2.jpg";
import IMG_2_3 from "../Assets/halls/hall_2/hall_2_3.jpg";
import IMG_2_4 from "../Assets/halls/hall_2/hall_2_4.jpg";
import IMG_2_5 from "../Assets/halls/hall_2/hall_2_5.jpg";
import IMG_2_6 from "../Assets/halls/hall_2/hall_2_6.jpg";
import IMG_3_1 from "../Assets/halls/hall_3/hall_3_1.jpg";
import IMG_3_2 from "../Assets/halls/hall_3/hall_3_2.jpg";
import IMG_3_3 from "../Assets/halls/hall_3/hall_3_3.jpg";
import IMG_3_4 from "../Assets/halls/hall_3/hall_3_4.jpg";
import IMG_3_5 from "../Assets/halls/hall_3/hall_3_5.jpg";
import IMG_3_6 from "../Assets/halls/hall_3/hall_3_6.jpg";
import IMG_4_1 from "../Assets/halls/hall_4/hall_4_1.jpg";
import IMG_4_2 from "../Assets/halls/hall_4/hall_4_2.jpg";
import IMG_4_3 from "../Assets/halls/hall_4/hall_4_3.jpg";
import IMG_4_4 from "../Assets/halls/hall_4/hall_4_4.jpg";
import IMG_4_5 from "../Assets/halls/hall_4/hall_4_5.jpg";
import IMG_4_6 from "../Assets/halls/hall_4/hall_4_6.jpg";

export default function Halls() {
  const params = useParams();
  const hallId = params.hallId;
  const [hallActive, setHallActive] = React.useState(hallId);

  React.useEffect(() => {
    console.log(hallActive);
  }, []);

  const RedirectToPage = () => {};

  const HallData = [
    {
      hall: "hall-1",
      hall_data: [
        {
          hall_title: "Зал 1",
          hall_text: `Присвячено порцеляновим композиціям, створеним на мануфактурі Lladro (м. Валенсія, Іспанія). Тут представлені рідкісні лімітовані вироби ручної роботи кращих іспанських майстрів, в тому числі композиції, які входять в список найбільших виробів із порцеляни у світі. Серед них: "Цариця Нілу", "Прибуття Попелюшки", "Карета XVIII століття" та "Велика подорож" ("Потяг").`,
          hall_imgs: [IMG_1_1, IMG_1_2, IMG_1_3, IMG_1_4, IMG_1_5, IMG_1_6],
        },
      ],
    },
    {
      hall: "hall-2",
      hall_data: [
        {
          hall_title: "Зал 2",
          hall_text: `Названо "Східним" не випадково. У цьому залі представлені вироби ручної роботи найвідоміших порцелянових мануфактур із Китаю, Японії, Таїланду та деяких інших країн Сходу, а також композиції майстрів іспанської мануфактури Lladro, присвячені східній тематиці.`,
          hall_text_else: `Справжньою окрасою цього залу є старовинна імператорська ваза, створена у XVIII столітті майстрами відомої японської мануфактури Satsuma, та вироби з костяного фарфору, датовані тим же періодом.`,
          hall_imgs: [IMG_2_1, IMG_2_2, IMG_2_3, IMG_2_4, IMG_2_5, IMG_2_6],
        },
      ],
    },

    {
      hall: "hall-3",
      hall_data: [
        {
          hall_title: "Зал 3",
          hall_text: `Представляє вашій увазі унікальні порцелянові вироби українських заводів та найвідоміших мануфактур Західної Європи. Зокрема, таких, як:`,
          hall_table: [
            "Коростень, Баранівка, Полонне, Київ (Україна)",
            "Meissen, Velstadt, Hutschenreuther та інші (Німеччина)",
            "Royal Copenhagen (Данія)",
            "Capodimonte (м. Неаполь, Італія)",
            "Royal Daulton, Wedgwood (Англія)",
            "Royal Vienna (Австрія)",
            "Sevres, Limoges (Франція) та багато інших.",
          ],
          hall_text_else: `Унікальним є повний комплект "Пори року", створення якого майстри з Мейсенської мануфактурі розпочали у середині XVIII століття.`,
          hall_imgs: [IMG_3_1, IMG_3_2, IMG_3_3, IMG_3_4, IMG_3_5, IMG_3_6],
        },
      ],
    },
    {
      hall: "hall-4",
      hall_data: [
        {
          hall_title: "Зал 4",
          hall_text: `Зал 4 знаходиться в епіцентрі храмів та культових споруд, які належать вірянам різних конфесій і ніби оточують наш музей з усіх боків: Андріївська церква, Хрестовоздвиженський храм, Свято-Покровський монастир, мечеть, синагога, церква св. Миколи (Притиска) та багатьох інших.`,
          hall_text_else: `У цьому залі, крім того, зібрано унікальні порцелянові композиції, присвячені таким популярним темам, як квіти, птахи, родинні зв’язки, мандри Дон Кіхота і рідкісна колекція творів відомого іспанського дизайнера Хайме Айона.`,
          hall_imgs: [IMG_4_1, IMG_4_2, IMG_4_3, IMG_4_4, IMG_4_5, IMG_4_6],
        },
      ],
    },
  ];

  const RenderHallPage = () => {
    const RenderPhoto = () => {
      const photoArrayMap =
        HallData.find((hallData) => hallData.hall === hallId)?.hall_data.find(
          (data) => data.hall_imgs
        )?.hall_imgs || [];

      return (
        <div className="hall-main-imgs">
          {photoArrayMap.map((img, index) => (
            <img key={img + index} className="hall-main-img" src={img} alt="" />
          ))}
        </div>
      );
    };

    const FindHall = () => {
      const hallGroup = HallData.find((hall) => hall.hall === hallId);

      return hallGroup;
    };

    const FindPage = () => {
      const currentHall = FindHall();

      return (
        <div className="section">
          <div key={currentHall.hall_data[0].hall_title}>
            <div className="page-title-wrapper">
              <div className="page-title">
                <h1>{currentHall.hall_data[0].hall_title}</h1>
              </div>
              <div className="redirect-tree">
                <h2>Головна</h2>
                <div className="redirect-tree-icon">
                  <NavigateNextIcon />
                </div>
                <h2>Прогулянки музеєм</h2>
                <NavigateNextIcon />
                <h2>{currentHall.hall_data[0].hall_title}</h2>
                <div className="redirect-tree-icon"></div>
              </div>
            </div>
            <div className="hall-wrapper">
              <div className="hall-cols">
                <Link
                  to="/museum-tour/hall-1"
                  onClick={(e) => {
                    setHallActive("hall-1");
                  }}
                  className={
                    hallActive === "hall-1" ? "hall-col-active" : "hall-col"
                  }
                >
                  <h2>Зал 1</h2>
                </Link>
                <Link
                  to="/museum-tour/hall-2"
                  onClick={(e) => {
                    setHallActive("hall-2");
                  }}
                  className={
                    hallActive === "hall-2" ? "hall-col-active" : "hall-col"
                  }
                >
                  <h2>Зал 2</h2>
                </Link>
                <Link
                  to="/museum-tour/hall-3"
                  onClick={(e) => {
                    setHallActive("hall-3");
                  }}
                  className={
                    hallActive === "hall-3" ? "hall-col-active" : "hall-col"
                  }
                >
                  <h2>Зал 3</h2>
                </Link>
                <Link
                  to="/museum-tour/hall-4"
                  onClick={(e) => {
                    setHallActive("hall-4");
                  }}
                  style={{ borderBottom: "none" }}
                  className={
                    hallActive === "hall-4" ? "hall-col-active" : "hall-col"
                  }
                >
                  <h2>Зал 4</h2>
                </Link>
              </div>

              <div className="hall-main">
                <div className="textarea-text">
                  <h2>{currentHall.hall_data[0].hall_text}</h2>
                </div>
                {currentHall.hall_data[0].hall_table ? (
                  <ul className="hall-text-table">
                    {currentHall.hall_data[0].hall_table.map((table_item) => (
                      <li className="hall-text-bold">
                        <div className="hall-text-circle"></div>
                        <h2>{table_item}</h2>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {currentHall.hall_data[0].hall_text_else ? (
                  <div className="textarea-text">
                    <h2>{currentHall.hall_data[0].hall_text_else}</h2>
                  </div>
                ) : null}

                <RenderPhoto />
              </div>
            </div>
          </div>
        </div>
      );
    };

    return <FindPage />;
  };

  return <RenderHallPage />;
}
