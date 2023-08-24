import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import ShowBrands from "./components/ShowBrands";
import AddBrand from "./components/AddBrand";
import AddModel from "./components/AddModel";
import ShowModels from "./components/ShowModels";
import AddEngine from "./components/AddEngine";
import ShowEngines from "./components/ShowEngines";
import ShowCars from "./components/ShowCars";
import AddCar from "./components/AddCar";
import AddReservation from "./components/AddReservation";

const urlBase = "localhost:8080";

function App() {
  return (
    <div className="Page">
      <BrowserRouter className="App">
        <div className="NavBar">
          <Navbar />
        </div>
        <div className="Main">
          <div className="CenterComponent">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/brands" element={<ShowBrands />} />
              <Route path="/brands/add" element={<AddBrand />} />
              <Route path="/models" element={<ShowModels />} />
              <Route path="/models/add" element={<AddModel />} />
              <Route path="/engines" element={<ShowEngines />} />
              <Route path="/engines/add" element={<AddEngine />} />
              <Route path="/cars" element={<ShowCars />} />
              <Route path="/cars/add" element={<AddCar />} />
              {/* <Route path="/reservations" element={<ShowCars />} /> */}
              <Route path="/reservations/add" element={<AddReservation />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
