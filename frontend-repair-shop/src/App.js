import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import ShowReservations from "./components/ShowReservations";
import DeleteBrand from "./components/DeleteBrand";
import DeleteModel from "./components/DeleteModel";
import DeleteEngine from "./components/DeleteEngine";
import TopNavbar from "./components/Navbar";
import DeleteCar from "./components/DeleteCar";
import DeleteReservation from "./components/DeleteReservation";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="Page">
      <BrowserRouter className="App">
        <div className="NavBar">
          <TopNavbar />
        </div>
        <div className="Main">
          <div className="CenterComponent">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />

              <Route path="/brands" element={<ShowBrands />} />
              <Route path="/brands/add" element={<AddBrand />} />
              <Route path="/brands/delete" element={<DeleteBrand />} />

              <Route path="/models" element={<ShowModels />} />
              <Route path="/models/add" element={<AddModel />} />
              <Route path="/models/delete" element={<DeleteModel />} />

              <Route path="/engines" element={<ShowEngines />} />
              <Route path="/engines/add" element={<AddEngine />} />
              <Route path="/engines/delete" element={<DeleteEngine />} />

              <Route path="/cars" element={<ShowCars />} />
              <Route path="/cars/add" element={<AddCar />} />
              <Route path="/cars/delete" element={<DeleteCar />} />

              <Route path="/reservations" element={<ShowReservations />} />
              <Route path="/reservations/add" element={<AddReservation />} />
              <Route path="/reservations/delete" element={<DeleteReservation />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
