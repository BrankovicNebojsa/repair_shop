import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ShowBrands() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "/api/v1/brands",
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
    <div className="showBrands">
      <h1>Brands</h1>
      <br></br>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((el, index) => (
            <tr>
              <td>{el.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <button type="button" class="btn btn-primary" onClick={() => navigate("/brands/add")}>Add a brand</button>
    </div>
  );
}

export default ShowBrands;
