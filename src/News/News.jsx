import "./News.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import IMG_1 from "../Assets/news/Part one. The start of the collection and the story of the creation of the museum/part-one-the-start cover.jpg";
import IMG_2 from "../Assets/news/Part two. The Story of Spanish Porcelain Lladro/COVER.jpg";
import IMG_3 from "../Assets/news/Part three. Walk through the «East» hall/COVER.jpg";
import IMG_4 from "../Assets/news/Part four. Acquaintance with the unique products of Ukrainian factories and famous manufactories of Western Europe/COVER.jpg";
import IMG_5 from "../Assets/news/Part five. «Divine» hall of Shvets Museum/COVER.jpg";
import { Link, useNavigate } from "react-router-dom";

const News = () => {
  const navigate = useNavigate();

  const newsData = [
    {
      // id: "1",
      title_eng:
        "Part one. The start of the collection and the history of the creation of the museum",
      title_ua:
        "Частина перша. З чого почалося колекціонування та історія створення музею",
      sub_title:
        "В інтерв'ю газеті «ФАКТИ» Олександр Швець розповів про єдиний в Україні музей порцелянових фігур",
      date: "6 серпня 2022",
      img: IMG_1,
    },
    {
      id: "2",
      title_eng: "Part two. The Story of Spanish Porcelain Lladro",
      title_ua: "Частина друга. Розповідь про іспанську порцеляну Lladro",
      sub_title:
        "У першій частині циклу «Прогулянки по „Shvets Museum“ з Олександром Швецем» головний редактор «ФАКТІВ» розповів про те, чому зайнявся колекціонуванням, чим відрізняється іспанська порцеляна Lladro від інших фарфорів, і пояснив, чому його головна мрія, до якої він ішов довгі роки, поки що не здійснилася.",
      date: "13 серпня 2022",
      img: IMG_2,
    },
    {
      id: "3",
      title_eng: "Part three. Walk through the «East» hall",
      title_ua: "Частина третя. Прогулянка по «Східному» залу",
      sub_title:
        "У першій і другій частинах циклу «Прогулянки по „Shevts Museum“ з Олександром Швецем» він розповів про те, чому вони з дружиною захопилися роботами іспанської мануфактури Lladro, про історію створення унікальних композицій і про те, як вдалося їх збирати для колекції по всьому світу. Другий зал — «Східний».",
      date: "20 серпня 2022",
      img: IMG_3,
    },
    {
      id: "4",
      title_eng:
        "Part four. Acquaintance with the unique products of Ukrainian factories and famous manufactories of Western Europe",
      title_ua:
        "Частина четверта. Знайомство з унікальними порцеляновими виробами українських заводів та найвідоміших мануфактур Західної Європи",
      sub_title:
        "У першій, другій та третій частинах циклу «Прогулянки по „Shvets Museum“ з Олександром Швецем» він розповів про те, як почав колекціонувати унікальні порцелянові роботи і чому було віддано перевагу іспанській порцеляні Lladro. Після екскурсії першим залом, де зібрані роботи тільки цієї мануфактури, і другим, який називається Східним, ми переходимо до третього залу, присвяченого західноєвропейській та українській порцеляні.",
      date: "27 серпня 2022",
      img: IMG_4,
    },
    {
      id: "5",
      title_eng: "Part five. «Divine» hall of Shvets Museum",
      title_ua: "Частина п’ята. «Божественний» зал Shvets Museum",
      sub_title:
        "Це завершальна частина циклу «Прогулянки по „Shvets Museum“ з Олександром Швецем». У попередніх він розповів про те, чому зайнявся колекціонуванням, чому найбільше любить іспанську порцеляну Lladro, показав роботи відомих мануфактур, зокрема українських, і переконав, що деякі з них ні в чому не поступаються світовим брендам.",
      date: "03 вересня 2022",
      img: IMG_5,
    },
  ];

  const MakeUrl = (e) => {
    let url = e.title_eng;
    url = url

      .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase();

    navigate(`/news/${url}`);
  };

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
        <div className="news">
          {newsData.map((news) => (
            <Link
              onClick={(e) => MakeUrl(news)}
              key={news.title_eng}
              className="news-post"
            >
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
                <h1>{news.title_ua}</h1>
              </div>
              <div className="news-sub-title">
                <h2>{news.sub_title}</h2>
              </div>
              <div className="news-data">
                <CalendarMonthIcon /> {news.date}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
