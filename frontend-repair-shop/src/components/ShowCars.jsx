import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ShowCars() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");

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

  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="showCars">
      <h1>Cars</h1>
      <br></br>
      <div className="form-outline mb-4">
        <input
          type="text"
          id="filter"
          className="form-control"
          name="filter"
          value={filter}
          onChange={handleChangeFilter}
        />
        <label className="form-label" for="form2Example1">
          Filter
        </label>
        <br></br>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => {
            axios({
              method: "GET",
              url: "/api/v1/cars/" + filter,
              baseURL: "http://localhost:8080",
              data: {},
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
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
          }}
        >
          Apply
        </button>
      </div>
      <br></br>
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => {
          axios({
            method: "GET",
            url: "/api/v1/cars/sorted-asc",
            baseURL: "http://localhost:8080",
            data: {},
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
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
        }}
      >
        Sort ASC
      </button>
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => {
          axios({
            method: "GET",
            url: "/api/v1/cars/sorted-desc",
            baseURL: "http://localhost:8080",
            data: {},
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
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
        }}
      >
        Sort DESC
      </button>
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
