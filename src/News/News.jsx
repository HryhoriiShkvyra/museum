import REACT from "react";
import "./News.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import IMG_1 from "../Assets/news/Part one. The start of the collection and the story of the creation of the museum/part-one-the-start cover.jpg";

const News = () => {
  const newsData = [
    {
      id: "1",
      title:
        "Частина перша. З чого почалося колекціонування та історія створення музею",
      sub_title:
        "В інтерв'ю газеті «ФАКТИ» Олександр Швець розповів про єдиний в Україні музей порцелянових фігур",
      date: "6 серпня 2022",
      img: IMG_1,
    },
    {
      id: "2",
      title: "Частина друга. Розповідь про іспанську порцеляну Lladro",
      sub_title:
        "У першій частині циклу «Прогулянки по „Shvets Museum“ з Олександром Швецем» головний редактор «ФАКТІВ» розповів про те, чому зайнявся колекціонуванням, чим відрізняється іспанська порцеляна Lladro від інших фарфорів, і пояснив, чому його головна мрія, до якої він ішов довгі роки, поки що не здійснилася.",
      date: "13 серпня 2022",
      img: "",
    },
    {
      id: "3",
      title: "Частина третя. Прогулянка по «Східному» залу",
      sub_title:
        "У першій і другій частинах циклу «Прогулянки по „Shevts Museum“ з Олександром Швецем» він розповів про те, чому вони з дружиною захопилися роботами іспанської мануфактури Lladro, про історію створення унікальних композицій і про те, як вдалося їх збирати для колекції по всьому світу. Другий зал — «Східний».",
      date: "20 серпня 2022",
      img: "",
    },
    {
      id: "4",
      title:
        "Частина четверта. Знайомство з унікальними порцеляновими виробами українських заводів та найвідоміших мануфактур Західної Європи",
      sub_title:
        "У першій, другій та третій частинах циклу «Прогулянки по „Shvets Museum“ з Олександром Швецем» він розповів про те, як почав колекціонувати унікальні порцелянові роботи і чому було віддано перевагу іспанській порцеляні Lladro. Після екскурсії першим залом, де зібрані роботи тільки цієї мануфактури, і другим, який називається Східним, ми переходимо до третього залу, присвяченого західноєвропейській та українській порцеляні.",
      date: "27 серпня 2022",
      img: "",
    },
    {
      id: "5",
      title: "Частина п’ята. «Божественний» зал Shvets Museum",
      sub_title:
        "Це завершальна частина циклу «Прогулянки по „Shvets Museum“ з Олександром Швецем». У попередніх він розповів про те, чому зайнявся колекціонуванням, чому найбільше любить іспанську порцеляну Lladro, показав роботи відомих мануфактур, зокрема українських, і переконав, що деякі з них ні в чому не поступаються світовим брендам.",
      date: "03 вересня 2022",
      img: "",
    },
  ];

  return (
    <div className="news-page">
      <div className="section">
        <div className="page-title-wrapper">
          <div className="page-title">
            <h1>Новини</h1>
          </div>
          <div className="redirect-tree">
            <h2>Головна</h2>
            <div className="redirect-tree-icon">
              <NavigateNextIcon />
            </div>
            <h2>Новини</h2>
          </div>
        </div>
      </div>
      <div className="main-section">
        {/* <div className="news">
          {newsData.map((news) => (
            <div key={news.id + "_" + news.img} className="news-post">
              {news.img ? (
                <img
                  className="news-img"
                  src={news.img}
                  //   src="https://placehold.co/600x400?text=IMG"
                  alt="news.img"
                ></img>
              ) : (
                <img
                  className="news-img"
                  src="https://placehold.co/600x400?text=IMG"
                  alt="placeholder"
                ></img>
              )}

              <div className="news-title">
                <h1>{news.title}</h1>
              </div>
              <div className="news-sub-title">
                <h2>{news.sub_title}</h2>
              </div>
              <div className="news-data">
                <CalendarMonthIcon /> {news.date}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default News;
