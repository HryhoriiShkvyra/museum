import React from "react";
import "./CatalogItemPage.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import IMG_1 from "../Assets/ITEM_1.jpg";

const ContentBlocks = {
  title: ({ children, level = 1 }) => {
    const Tag = `h${level}`;
    return (
      <Tag className="text-3xl font-bold mb-4 text-gray-800">{children}</Tag>
    );
  },

  boldText: ({ children }) => (
    <h2 className="font-semibold text-lg mb-3 text-gray-700">{children}</h2>
  ),

  regularText: ({ children }) => (
    <h2 className="catalog-item-regular-text">{children}</h2>
  ),

  boldAndRegularText: (children) => {
    // console.log("Props received:", props);
    const { items = [] } = children;

    return (
      <div className="catalog-item-bold-and-regular-text-wrapper">
        {items.map((item, index) => (
          <div className="catalog-item-bold-and-regular-text" key={index}>
            <h2 className="catalog-item-bold-and-regular-text-b">
              {item.boldText}:{" "}
            </h2>
            <h2 className="catalog-item-bold-and-regular-text-r">
              {item.regularText && ` ${item.regularText}`}
            </h2>
          </div>
        ))}
      </div>
    );
  },

  column: ({ children, columns = 2 }) => (
    <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-6 mb-6`}>
      {children.map((item, index) => (
        <div key={index}>
          {typeof item === "string" ? (
            <h2 className="text-base mb-3 text-gray-600 leading-relaxed">
              {item}
            </h2>
          ) : (
            <ContentRenderer content={[item]} />
          )}
        </div>
      ))}
    </div>
  ),

  image: ({ src, alt }) => (
    <img className="catalog-item-image" src={src} alt={alt} />
  ),

  quote: ({ children, author }) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-4">
      <h2>{children}</h2>
      {author && (
        <cite className="block text-sm text-gray-500 mt-2">— {author}</cite>
      )}
    </blockquote>
  ),
};

const ContentRenderer = ({ content }) => {
  return (
    <div className="catalog-item-page">
      {content.map((block, index) => {
        const Component = ContentBlocks[block.type];
        if (!Component) {
          console.warn(`Unknown block type: ${block.type}`);
          return null;
        }

        return (
          <Component key={index} {...block.props}>
            {block.content}
          </Component>
        );
      })}
    </div>
  );
};

const sampleArticle1 = [
  {
    type: "image",
    content: "",
    props: {
      src: IMG_1,
      alt: "Порцеляна",
      caption: "Ламассу",
    },
  },
  {
    type: "boldAndRegularText",
    content: "",
    props: {
      items: [
        {
          boldText: "Країна",
          regularText: "Іспанія",
        },
        {
          boldText: "Мануфактура",
          regularText: "Lladró",
        },
        {
          boldText: "Дата створення",
          regularText: "2009",
        },
        {
          boldText: "Скульптор",
          regularText: "Marco Antonio Nogueron",
        },
        {
          boldText: "Розмір (см)",
          regularText: "51x53",
        },
        {
          boldText: "Лімітована серія",
          regularText: "",
        },
      ],
    },
  },

  {
    type: "regularText",
    content: `Пергамський музей (чи, як його ще називають, Пергамон) у Берліні щороку відвідує щонайменше мільйон (!) туристів. Він вражає не лише своїми масштабами, а й унікальною колекцією експонатів, більшість із яких відноситься до дохристиянської доби. Так ось серед цих експонатів мою увагу привернули величезні статуї месопотамських демонів, духів-охоронців людини та її оселі, найчастіше зображуваних у вигляді постаті бика з чоловічим обличчям та крилами. Справа в тому, що таке ж порцелянове диво представлене і в експозиції нашого музею у Києві.`,
  },

  {
    type: "regularText",
    content: `До речі, своєю появою на світ Пергамський музей завдячує німецькому інженеру Карлу Хуману, який керував прокладанням нової дороги в одній із провінцій Малої Азії. У 1878 році під час будівельних робіт йому пощастило наткнутися на руїни античного фризу, прикрашеного барельєфними скульптурами античних героїв та олімпійських богів. Це був легендарний Пергамський вівтар Зевса, який сьогодні вважається головним надбанням музейної колекції Пергамона. Однак коли дивовижну знахідку переправили до Берліна, з'ясувалося, що виставляти її практично нема де. Тоді й було прийнято рішення про будівництво окремої споруди, здатної вмістити в себе не лише цей артефакт, а й численні експонати давньоазіатської та античної скульптури. Так з'явився перший Пергамський музей, який проіснував трохи більше 5 років і був знесений після появи величезних тріщин у фундаменті.`,
  },

  {
    type: "regularText",
    content: `Будівництво другої будівлі почалося майже одразу, проте роботи над ним раз у раз відкладалися. Спочатку їм завадила смерть головного архітектора, якому довго шукали заміну, а потім - Перша світова війна і фінансова криза, яка послідувала за нею, помітно підкосила економічну ситуацію в країні. У результаті новий музейний комплекс було відкрито лише в 1930 році – через 23 роки після закладання першого каменю.`,
  },

  {
    type: "regularText",
    content: `Однак на цьому негаразди в долі Пергамона не скінчилися. Під час Другої світової війни він сильно постраждав від повітряного обстрілу, а потім втратив і основну частину своїх експонатів – їх вивезли на територію тодішнього СРСР. Через кілька десятиліть частина колекції повернулася до Берліна, але деякі рідкісні експонати досі перебувають у музеях Петербурга та Москви.`,
  },

  {
    type: "regularText",
    content: `Першим, що бачить відвідувач Пергамського музею, є велична брама богині Іштар, датована 6 століттям до нашої ери. Вони були знайдені під час розкопок Стародавнього Вавилону. Історики стверджують, що вони входили до складу Дороги процесій, яка використовується під час святкування головного свята країни – Нового року. На синій мозаїці, яка прикрашає ці ворота, можна розглянути барельєфи різних тварин, зображення міфологічних істот, які нагадують доісторичних ящерів, та клинописний напис, нанесений самим Навуходоносором.`,
  },

  {
    type: "regularText",
    content: `Навіть за дуже значних розмірів ця конструкція не є найбільшим експонатом музею. У будівлі Пергамона вдалося розмістити тільки зовнішню частину Іштар - внутрішні ж ворота, які є ще вищими, до нього просто не ввійшли. Є тут і сама Дорога процесій, що веде від Іштар до святилища Есагіла. Залишки керамічного панно, яке розташовувалося на стінах по обидва боки священної дороги, дозволили з абсолютною точністю відновити одне з головних чудес Стародавнього Вавилону.`,
  },

  {
    type: "regularText",
    content: `Архітектура та мистецтво ассирійської цивілізації вражали своїм розмахом. Археологи знайшли вхід до палацу Ашшурнасірапала II (883-859 р. до н. е.), який розташовувався в місті Німруд. Його прикрашали шестиметрові крилаті бики з людськими головами, вирізані з коричневого алебастру. Саме ці бики, які знаходяться зараз в одному із залів Пергамського музею, і надихнули сучасних іспанських майстрів на створення унікальної порцелянової роботи, представленої вашій увазі.`,
  },

  {
    type: "regularText",
    content: `До речі, слідуючи жорстокій політиці рабовласницької імперії, з другої половини VIII століття до н. е. Ассирія зуміла захопити Месопотамію, Палестину, Кіпр, сучасні території Туреччини, Сирії, а також Єгипет. Коли в захоплених містах починалося повстання, ассірійці безжально карали бунтівників. Так сталося і з Вавилоном в 689 року до н. е., коли після повстання правитель Синнехеріб зрівняв місто із землею…`,
  },
];

export default function MuseumApp() {
  const [currentArticle, setCurrentArticle] = React.useState("article1");

  const articles = {
    article1: sampleArticle1,
  };

  return (
    <div className="catalog-item-page-wrapper">
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
        <ContentRenderer content={articles[currentArticle]} />
      </div>
    </div>
  );
}
