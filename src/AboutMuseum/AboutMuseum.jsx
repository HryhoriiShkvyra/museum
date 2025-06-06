import React from "react";
import "./AboutMuseum.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import IMG_1 from "../Assets/about museum/museum_about_1.jpg";
import IMG_2 from "../Assets/about museum/museum_about_2.jpg";
import IMG_3 from "../Assets/about museum/museum_about_3.jpg";
import IMG_4 from "../Assets/about museum/museum_about_4.jpg";
import IMG_5 from "../Assets/about museum/museum_about_5.jpg";
import IMG_6 from "../Assets/about museum/museum_about_6.jpg";
import IMG_7 from "../Assets/about museum/museum_about_7.jpg";

export default function AboutMuseum() {
  return (
    <div className="about-museum">
      <div className="section">
        <div className="page-title-wrapper">
          <div className="page-title">
            <h1>Про музей</h1>
          </div>
          <div className="redirect-tree">
            <h2>Головна</h2>
            <div className="redirect-tree-icon">
              <NavigateNextIcon />
            </div>
            <h2> Про музей</h2>
          </div>
        </div>
      </div>

      <div className="main-section">
        <div className="textarea-wrapper">
          <div className="textarea-img-float">
            <img src={IMG_1} alt="" />
          </div>
          <div className="textarea">
            <div className="textarea-title">
              <h1>Дорогі друзі</h1>
            </div>
            <div className="textarea-text">
              <h2>
                Вітаю вас в унікальному музеї порцелянових фігур, подібного до
                якого, мабуть, ще не було. Хоча б тому, що найбільші колекції
                порцеляни, які демонструються сьогодні у відомих музеях,
                створювалися протягом сотень років. І біля їхніх витоків, як
                правило, стояли могутні монархи або найвпливовіші вельможі, які
                жили в різних історичних епохах і витратили на свої колекції
                величезні статки. А потім вже, після їхнього уходу у засвіти,
                турботу про збереження та поповнення колекцій брала на себе
                держава. Німеччина, наприклад. Або Іспанія. Або Італія. Або
                Австрія. Або Японія. Або Данія.
              </h2>
            </div>
            <div className="textarea-text">
              <h2>
                У нашому випадку все було інакше. Неподалік цієї будівлі
                знаходиться місце, в якому мені довелося довгі роки провести
                серед таких же, як і я, сиріт і дітей з неповних, як раніше
                казали, родин. Кожен із нас мав свою непросту долю. І кожен з
                нас мав свою заповітну мрію. Я мріяв стати журналістом і, ставши
                ним, бувати в інших країнах. Ця мрія здавалася нездійсненною. І
                це було зрозуміло, бо можна було розраховувати тільки на власні
                сили. Навряд чи тоді, на початку 1970-х, я міг собі уявити, що
                мине час і я таки стану журналістом. Що мені пощастить побувати
                майже у ста країнах світу. Що з десятків країн я почну привозити
                до Києва різноманітні дивовижні предмети мистецтва. Що з часом
                це переросте у збирання порцеляни – рідкісного матеріалу,
                здатного передавати і красу, і витонченість, і теплоту, і
                доброту, і, якщо дозволите, навіть любов.
              </h2>
            </div>
          </div>
        </div>

        <div className="img-and-text-wrapper">
          <div className="img-and-text">
            <img className="img" src={IMG_2} alt="" />
            <div className="about-img">
              <div className="textarea-text-center">
                <h2>
                  Так виглядає "Місто порцеляни" під Валенсією, де створюються
                  унікальні вироби, про які мріють колекціонери та музейники у
                  багатьох країнах на всіх континентах
                </h2>
              </div>
            </div>
          </div>
          <div className="img-and-text">
            <img className="img" src={IMG_3} alt="" />
            <div className="about-img">
              <div className="textarea-text-center">
                <h2>
                  Всесвітньо відомому скульптору Франциско Полопе дуже
                  сподобалась привезена спеціально для нього яскрава українська
                  вишиванка
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="textarea-text">
          <h2>
            Все почалося з маленької статуетки з іспанської порцеляни, яку я
            придбав з дружиною Галиною на іспанському острові Мальорка. І з того
            часу ми так загорілися ідеєю зібрати колекцію іспанської порцеляни
            Lladro – на наш погляд, найкращої у світі, – що почали буквально
            полювати за нею країнами та континентами. А трохи пізніше, вирішивши
            продемонструвати всім, що іспанська порцеляна справді найкраща у
            світі, ми почали доповнювати колекцію виробами інших відомих
            мануфактур. Нам довелося побувати для цього в десятках різних країн
            – від Сполучених Штатів та Аргентини до Нової Зеландії та Сінгапуру.
            І звідусіль ми привозили порцеляну, порцеляну, порцеляну. Її ставало
            так багато, що ні вдома, ні на роботі не було ні найменшого вільного
            місця. І тоді з'явилася ідея відкрити музей.
          </h2>
        </div>

        <div className="img-and-text-wrapper">
          <div className="img-and-text">
            <img className="img" src={IMG_4} alt="" />
            <div className="about-img">
              <div className="textarea-text-center">
                <h2>
                  Роса Лладро, яка очолювала мануфактуру Lladro багато років,
                  пригостила гостей з України справжньою іспанською паельєю
                </h2>
              </div>
            </div>
          </div>
          <div className="img-and-text">
            <img className="img" src={IMG_5} alt="" />
            <div className="about-img">
              <div className="textarea-text-center">
                <h2>
                  На ювілейній виставці творів одного з найвідоміших українських
                  майстрів порцелянового мистецтва, присвяченій 90-річчю В.І.
                  Щербини, нам пощастило познайомитися з Владиславом Івановичем
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="textarea-text">
          У Києві є Музей однієї вулиці. Наш музей, дотримуючись тієї ж логіки,
          можна було б назвати музеєм однієї мрії. Адже вміння мріяти дається
          кожному із нас. Але, на жаль, не кожен може свою мрію здійснити. У
          цьому сенсі нам, звісно, пощастило. По-перше, зустріти добрих людей,
          які постійно нам чимось допомагали у цій справі. А багато хто навіть
          поповнював колекцію, щедро роблячи унікальні подарунки. По-друге,
          повірити самим і подарувати іншим віру в те, що мрії здійснюються.
          Якщо в них по-справжньому вірити й так само по-справжньому прагнути
          їхнього здійснення, не звертаючи уваги на перешкоди та життєві
          випробування, яких, на жаль, доля підкидає нам у великій кількості.
        </div>

        <div className="textarea-text">
          Робота з підготовки музею до відкриття не припинялася ані на день
          протягом дев'яти місяців. Вже йшла повномасштабна війна, ворог
          наступав на Київ, постійно вили сирени повітряної тривоги, а часом у
          безпосередній близькості лунали й вибухи крилатих ракет, які прилітали
          в цей район. Але ми, як той майоліковий півник із Бородянки, не
          здавалися. Бо нас вела мрія.
        </div>

        <div className="textarea-text">
          <h2>І вона збулася...</h2>
        </div>

        <div className="textarea-bold">Олександр Швець</div>

        <div className="img-and-text-wrapper">
          <img className="img" src={IMG_6} alt="" />
          <img className="img" src={IMG_7} alt="" />
        </div>

        <div className="textarea-text">
          <h2>
            Під час зустрічі з Хуаном Лладро і Анхелес Лладро ми привезли
            випущені "Укрпоштою" унікальні набори марок, присвячені знаменитій
            на весь світ іспанській родині
          </h2>
        </div>
      </div>
    </div>
  );
}
