import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ShowCars() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "/api/v1/cars",
      baseURL: "http://localhost:8080",
      data: {},
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    }).then(
      (response) => {
        console.log(response);
        setData(response.data);
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div className="showCars">
      <h1>Cars</h1>
      <br></br>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">License plate</th>
            <th scope="col">Brand name</th>
            <th scope="col">Model name</th>
            <th scope="col">Manufacturing year</th>
            <th scope="col">Color</th>
            <th scope="col">Transmission</th>
            <th scope="col">Number of cylinders</th>
            <th scope="col">Power (hp)</th>
            <th scope="col">Capacity (cc)</th>
            <th scope="col">Engine number</th>
            <th scope="col">Chassis number</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((el, index) => (
            <tr>
              <td>{el.licensePlate}</td>
              <td>{el.model.brand.name}</td>
              <td>{el.model.name}</td>
              <td>{el.year}</td>
              <td>{el.color}</td>
              <td>{el.transmission}</td>
              <td>{el.engine.numberOfCylinders}</td>
              <td>{el.engine.power}</td>
              <td>{el.engine.capacity}</td>
              <td>{el.engineNumber}</td>
              <td>{el.chassisNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => navigate("/cars/add")}
      >
        Add a car
      </button>
    </div>
  );
}

export default ShowCars;
