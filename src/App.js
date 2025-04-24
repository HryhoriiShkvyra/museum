import "./index.css";
import Header from "./Header/Header.jsx";
import AboutMuseum from "./AboutMuseum/AboutMuseum.jsx";
import Footer from "./Footer/Footer.jsx";
import MuseumTour from "./MuseumTour/MuseumTour.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <MuseumTour />
      <Footer />
    </div>
  );
}

export default App;
