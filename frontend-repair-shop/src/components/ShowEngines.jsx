import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ShowEngines() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "/api/v1/engines",
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
    <div className="showEngines">
      <h1>Brands</h1>
      <br></br>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Number of cylinders</th>
            <th scope="col">Power (hp)</th>
            <th scope="col">Capacity (cc)</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((el, index) => (
            <tr>
              <td>{el.numberOfCylinders}</td>
              <td>{el.power}</td>
              <td>{el.capacity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <button type="button" class="btn btn-primary" onClick={() => navigate("/engines/add")}>Add an engine</button>
    </div>
  );
}

export default ShowEngines;
