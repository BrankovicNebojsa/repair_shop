import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ShowReservations() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "/api/v1/reservations",
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
    <div className="showReservations">
      <h1>Reservations</h1>
      <br></br>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Mechanic</th>
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
              <td>{el.date}</td>
              <td>{el.mechanic.firstName} {el.mechanic.lastName}</td>
              <td>{el.car.licensePlate}</td>
              <td>{el.car.model.brand.name}</td>
              <td>{el.car.model.name}</td>
              <td>{el.car.year}</td>
              <td>{el.car.color}</td>
              <td>{el.car.transmission}</td>
              <td>{el.car.engine.numberOfCylinders}</td>
              <td>{el.car.engine.power}</td>
              <td>{el.car.engine.capacity}</td>
              <td>{el.car.engineNumber}</td>
              <td>{el.car.chassisNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => navigate("/reservations/add")}
      >
        Add a reservation
      </button>
    </div>
  );
}

export default ShowReservations;
