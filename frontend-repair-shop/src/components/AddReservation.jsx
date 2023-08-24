import React, { useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';

function AddReservation() {
  const [date, setDate] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [mechanicUsername, setMechanicUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  const handleChangeLicensePlate = (event) => {
    setLicensePlate(event.target.value);
  };

  const handleChangeMechanicUsername = (event) => {
    setMechanicUsername(event.target.value);
  };

  return (
    <div className="add-reservation">
      <h1>Add a reservation</h1>
      <br></br>
      <form>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="date"
            className="form-control"
            name="date"
            value={date}
            onChange={handleChangeDate}
          />
          <label className="form-label" for="form2Example1">
            Date (for example: 26.11.2023 10:00)
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="licensePlate"
            className="form-control"
            name="licensePlate"
            value={licensePlate}
            onChange={handleChangeLicensePlate}
          />
          <label className="form-label" for="form2Example1">
            License plate
          </label>
        </div>

        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            axios({
              method: "post",
              url: "/api/v1/reservations",
              baseURL: "http://localhost:8080",
              data: {
                date: date,
                car: {
                  licensePlate: licensePlate,
                },
                mechanic: {
                  username: mechanicUsername,
                },
              },
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }).then(
              (response) => {
                window.location.href = "/reservations";
              },
              (error) => {
                console.log(error);
                setMessage("Check input data!");
              }
            );
          }}
        >
          Save
        </button>
      </form>
      <br></br>
      <div className="message">
        <h5>
          <b>{message}</b>
        </h5>
      </div>
    </div>
  );
}

export default AddReservation;
