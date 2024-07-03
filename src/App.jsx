import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MainSection from "./components/MainSection";
import MyFooter from "./components/MyFooter";
import GalleriaFilms from "./components/GalleriaFilms";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/gallerie" element={<GalleriaFilms />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
