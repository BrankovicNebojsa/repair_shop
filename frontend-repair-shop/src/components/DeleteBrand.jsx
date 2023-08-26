import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";

function DeleteBrand() {
  const [message, setMessage] = useState("");

  const handleDeleteBrand = (event) => {
    axios({
      method: "DELETE",
      url: "/api/v1/brands/" + event.target.value,
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
          "There is some model with this brand name so you can't delete it! Try deleting model."
        );
      }
    );
  };

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

  if (localStorage.getItem("isWorker") === "true") {
    return (
      <div className="deleteBrands">
        <h1>Brands</h1>
        <br></br>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((el, index) => (
              <tr>
                <td>{el.name}</td>
                <td>
                  <Button value={el.id} onClick={handleDeleteBrand}>
                    Delete brand
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

export default DeleteBrand;
