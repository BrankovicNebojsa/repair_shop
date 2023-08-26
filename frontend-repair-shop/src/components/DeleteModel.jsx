import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";

function DeleteModel() {
  const [message, setMessage] = useState("");

  const handleDeleteModel = (event) => {
    axios({
      method: "DELETE",
      url: "/api/v1/models/" + event.target.value,
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
          "There is some car with this model name so you can't delete it! Try deleting the car."
        );
      }
    );
  };

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

  if (localStorage.getItem("isWorker") === "true") {
    return (
      <div className="deleteModels">
        <h1>Models</h1>
        <br></br>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Brand name</th>
              <th scope="col">Model name</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((el, index) => (
              <tr>
                <td>{el.brand.name}</td>
                <td>{el.name}</td>
                <td>
                  <Button value={el.id} onClick={handleDeleteModel}>
                    Delete model
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

export default DeleteModel;
