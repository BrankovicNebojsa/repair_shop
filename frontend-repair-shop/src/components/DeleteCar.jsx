import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";

function DeleteCar() {
  const [message, setMessage] = useState("");

  const handleDeleteCar = (event) => {
    axios({
      method: "DELETE",
      url: "/api/v1/cars/" + event.target.value,
      baseURL: "http://localhost:8080",
      data: {},
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    }).then(
      (response) => {
        console.log(response);
        window.location.reload(false);
      },
      (error) => {
        console.log(error);
        setMessage(
          "There is some reservation with this car so you can't delete it! Try deleting the reservation."
        );
      }
    );
  };

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

  if (localStorage.getItem("isWorker") === "true") {
    return (
      <div className="deleteCars">
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
              <th scope="col"></th>
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
                <td>
                  <Button value={el.id} onClick={handleDeleteCar}>
                    Delete car
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br></br>
        <div className="message">
          <h5>
            <b>{message}</b>
          </h5>
        </div>
      </div>
    );
  } else {
    window.location.href = "/";
    return (
      <div></div>
    );
  }
}

export default DeleteCar;
