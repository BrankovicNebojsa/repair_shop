import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";

function DeleteEngine() {
  const [message, setMessage] = useState("");

  const handleDeleteEngine = (event) => {
    axios({
      method: "DELETE",
      url: "/api/v1/engines/" + event.target.value,
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
          "There is some car with this engine so you can't delete it! Try deleting the car."
        );
      }
    );
  };

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

  if (localStorage.getItem("isWorker") === "true") {
    return (
      <div className="deleteEngines">
        <h1>Engines</h1>
        <br></br>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Number of cylinders</th>
              <th scope="col">Power (hp)</th>
              <th scope="col">Capacity (cc)</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((el, index) => (
              <tr>
                <td>{el.numberOfCylinders}</td>
                <td>{el.power}</td>
                <td>{el.capacity}</td>
                <td>
                  <Button value={el.id} onClick={handleDeleteEngine}>
                    Delete engine
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

export default DeleteEngine;
