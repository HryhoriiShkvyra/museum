import REACT from "react";
import "./ConditionsForVisiting.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const ConditionsForVisiting = () => {
  return (
    <div className="conditions">
      <div className="section">
        <div className="page-title-wrapper">
          <div className="page-title">
            <h1>Ціни та умови відвідування</h1>
          </div>
          <div className="redirect-tree">
            <h2>Головна</h2>
            <div className="redirect-tree-icon">
              <NavigateNextIcon />
            </div>
            <h2>Контакти</h2>
            <div className="redirect-tree-icon">
              <NavigateNextIcon />
            </div>
            <h2>Ціни та умови відвідування</h2>
          </div>
        </div>
      </div>

      <div className="main-section">
        <div className="conditions-announcement">
          <div className="conditions-title">Шановні пані та панове!</div>
          <div className="conditions-title">
            У неділю, 25 травня, відбудеться авторська екскурсія засновника
            музею Олександра Швеця.
          </div>
          <div className="conditions-title">
            Початок о 12:00. Тривалість близько двох годин.
          </div>
          <div className="conditions-title">
            Попередній запис за телефоном (098) 220-20-05.
          </div>
        </div>

        <div className="conditions-wrapper">
          <div className="conditions-column">
            <div className="conditions-row">
              <div className="conditions-text">
                <h2>Вартість вхідного квитка</h2>
              </div>
              <div className="conditions-number">
                <h2>350 грн.</h2>
              </div>
            </div>
            <div className="conditions-row">
              <div className="conditions-text">
                <h2>
                  Пільговий** соціальний (учасники бойових дій, пенсіонери,
                  інваліди I та II груп)
                </h2>
              </div>
              <div className="conditions-number">
                <h2>200 грн.</h2>
              </div>
            </div>
            <div className="conditions-row">
              <div className="conditions-text">
                <h2> Пільговий** юнацький (школярі та студенти) </h2>
              </div>
              <div className="conditions-number">300 грн.</div>
            </div>
            <div className="conditions-row">
              <div className="conditions-text">
                <h2>
                  Сімейний квиток (2 дорослих + 1 дитина віком до 12 років)
                </h2>
              </div>
              <div className="conditions-number">700 грн.</div>
            </div>
            <div className="conditions-row">
              <div className="conditions-text">
                <h2>
                  Безкоштовний** (військові, які мають звання "Герой України"
                  або "Народний Герой України", та члени їх родини, члени родин
                  загиблих захисника чи захисниці України, діти дошкільного
                  віку, діти-інваліди, діти загиблих воїнів, діти-сироти, а
                  також вихованці дитячих будинків та шкіл-інтернатів)
                </h2>
              </div>
              <div className="conditions-number">
                <h2> - </h2>
              </div>
            </div>

            <div className="conditions-disclaimer">
              <h3>
                **за умови наявності дійсного посвідчення та пред’явленні його
                при відвідуванні музею.
              </h3>
            </div>
          </div>

          <div className="conditions-column">
            <div className="conditions-title">
              Участь у групових екскурсіях (проводяться об 11:00, 14:00, 17:00
              (за попереднім записом):
            </div>

            <div className="conditions-row">
              <div className="conditions-text">
                <h2>Загальний квиток</h2>
              </div>
              <div className="conditions-number">
                <h2>450 грн.</h2>
              </div>
            </div>
            <div className="conditions-row">
              <div className="conditions-text">
                <h2>
                  Пільговий** соціальний (учасники бойових дій, пенсіонери,
                  інваліди I та II груп)
                </h2>
              </div>
              <div className="conditions-number">300 грн.</div>
            </div>
            <div className="conditions-row">
              <div className="conditions-text">
                Пільговий** юнацький (школярі та студенти)
              </div>
              <div className="conditions-number">400 грн.</div>
            </div>
            <div className="conditions-row">
              <div className="conditions-text">
                Сімейний квиток (2 дорослих + 1 дитина віком до 12 років)
              </div>
              <div className="conditions-number">1000 грн.</div>
            </div>
            <div className="conditions-row">
              <div className="conditions-text">
                Безкоштовний** (військові, які мають звання "Герой України" або
                "Народний Герой України", та члени їх родини, члени родин
                загиблих захисника чи захисниці України, діти дошкільного віку,
                діти-інваліди, діти загиблих воїнів, діти-сироти, а також
                вихованці дитячих будинків та шкіл-інтернатів)
              </div>
              <div className="conditions-number"> - </div>
            </div>
            <div className="conditions-disclaimer">
              **за умови наявності дійсного посвідчення та пред’явленні його при
              відвідуванні музею.
            </div>
          </div>

          <div className="conditions-column">
            <div className="conditions-title">
              АВТОРСЬКА ЕКСКУРСІЯ, яку проводить засновник музею, відбувається
              кожного музейного робочого дня о 12:00 (за попереднім записом).
            </div>

            <div className="conditions-disclaimer">
              Вартість квитка, який дає право участі в авторській екскурсії, —
              1000 гривень.
            </div>
          </div>

          <div className="conditions-column">
            <div className="conditions-title">
              ІНДИВІДУАЛЬНА АВТОРСЬКА ЕКСКУРСІЯ проводиться лише за попереднім
              записом у будь-який зручний для замовників день.
            </div>
            <div className="conditions-disclaimer">
              На час проведення індивідуальної авторської екскурсії її учасникам
              надається право
              <div className="conditions-disclaimer-p">безкоштовного</div>
              паркування у підземному паркінгу.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConditionsForVisiting;
