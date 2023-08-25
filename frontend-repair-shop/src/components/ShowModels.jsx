import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ShowModels() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "/api/v1/models",
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
    <div className="showModels">
      <h1>Brands</h1>
      <br></br>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Brand name</th>
            <th scope="col">Model name</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((el, index) => (
            <tr>
              <td>{el.brand.name}</td>
              <td>{el.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => navigate("/models/add")}
      >
        Add a model
      </button>
    </div>
  );
}

export default ShowModels;
