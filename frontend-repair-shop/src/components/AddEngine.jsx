import React, { useState } from "react";
import axios from "axios";

function AddEngine() {
  const [numberOfCylinders, setNumberOfCylinders] = useState("");
  const [power, setPower] = useState("");
  const [capacity, setCapacity] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeNumberOfCylinders = (event) => {
    setNumberOfCylinders(event.target.value);
  };

  const handleChangePower = (event) => {
    setPower(event.target.value);
  };

  const handleChangeCapacity = (event) => {
    setCapacity(event.target.value);
  };

  return (
    <div className="add-engine">
      <h1>Add an engine</h1>
      <br></br>
      <form>
        <div className="form-outline mb-4">
          <input
            type="number"
            id="numberOfCylinders"
            className="form-control"
            name="numberOfCylinders"
            value={numberOfCylinders}
            onChange={handleChangeNumberOfCylinders}
          />
          <label className="form-label" for="form2Example1">
            Number of cylinders
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="number"
            id="power"
            className="form-control"
            name="power"
            value={power}
            onChange={handleChangePower}
          />
          <label className="form-label" for="form2Example1">
            Power (hp)
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="number"
            id="capacity"
            className="form-control"
            name="capacity"
            value={capacity}
            onChange={handleChangeCapacity}
          />
          <label className="form-label" for="form2Example1">
            Capacity (cc)
          </label>
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            axios({
              method: "post",
              url: "/api/v1/engines",
              baseURL: "http://localhost:8080",
              data: {
                numberOfCylinders: numberOfCylinders,
                power: power,
                capacity: capacity
              },
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }).then(
              (response) => {
                window.location.href = "/engines";
              },
              (error) => {
                console.log(error);
                setMessage("That engine is probably already saved. Check all engines!");
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

export default AddEngine;
