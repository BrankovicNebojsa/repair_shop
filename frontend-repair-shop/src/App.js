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

            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
