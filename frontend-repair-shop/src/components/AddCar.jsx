import React, { useState } from "react";
import axios from "axios";

function AddCar() {
  const [licensePlate, setLicensePlate] = useState("");
  const [year, setYear] = useState("");
  const [engineNumber, setEngineNumber] = useState("");
  const [chassisNumber, setChassisNumber] = useState("");
  const [color, setColor] = useState("");
  const [transmission, setTransmission] = useState("");
  const [brandName, setBrandName] = useState("");
  const [modelName, setModelName] = useState("");
  const [numberOfCylinders, setNumberOfCylinders] = useState("");
  const [power, setPower] = useState("");
  const [capacity, setCapacity] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeLicensePlate = (event) => {
    setLicensePlate(event.target.value);
  };
  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };

  const handleChangeEngineNumber = (event) => {
    setEngineNumber(event.target.value);
  };

  const handleChangeChassisNumber = (event) => {
    setChassisNumber(event.target.value);
  };

  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };

  const handleChangeTransmission = (event) => {
    setTransmission(event.target.value);
  };

  const handleChangeBrandName = (event) => {
    setBrandName(event.target.value);
  };

  const handleChangeModelName = (event) => {
    setModelName(event.target.value);
  };

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
    <div className="add-car">
      <h1>Add a car</h1>
      <br></br>
      <form>
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

        <div className="form-outline mb-4">
          <input
            type="number"
            id="year"
            className="form-control"
            name="year"
            value={year}
            onChange={handleChangeYear}
          />
          <label className="form-label" for="form2Example1">
            Manufacturing year
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="engineNumber"
            className="form-control"
            name="engineNumber"
            value={engineNumber}
            onChange={handleChangeEngineNumber}
          />
          <label className="form-label" for="form2Example1">
            Engine number
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="chassisNumber"
            className="form-control"
            name="chassisNumber"
            value={chassisNumber}
            onChange={handleChangeChassisNumber}
          />
          <label className="form-label" for="form2Example1">
            Chassis number
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="color"
            className="form-control"
            name="color"
            value={color}
            onChange={handleChangeColor}
          />
          <label className="form-label" for="form2Example1">
            Color (White, Black, etc)
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="transmission"
            className="form-control"
            name="transmission"
            value={transmission}
            onChange={handleChangeTransmission}
          />
          <label className="form-label" for="form2Example1">
            Transmission (AUTOMATIC/MANUAL)
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="brandName"
            className="form-control"
            name="brandName"
            value={brandName}
            onChange={handleChangeBrandName}
          />
          <label className="form-label" for="form2Example1">
            Brand name
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="modelName"
            className="form-control"
            name="modelName"
            value={modelName}
            onChange={handleChangeModelName}
          />
          <label className="form-label" for="form2Example1">
            Model name
          </label>
        </div>

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
              url: "/api/v1/cars",
              baseURL: "http://localhost:8080",
              data: {
                licensePlate: licensePlate,
                year: year,
                engineNumber: engineNumber,
                chassisNumber: chassisNumber,
                color: color,
                transmission: transmission,
                model: {
                  brand: {
                    name: brandName,
                  },
                  name: modelName,
                },
                engine: {
                  numberOfCylinders: numberOfCylinders,
                  power: power,
                  capacity: capacity,
                },
              },
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }).then(
              (response) => {
                window.location.href = "/cars";
              },
              (error) => {
                console.log(error);
                setMessage(
                  "Check input data! If everything is okay, check if car with that license plate is already in database!"
                );
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

export default AddCar;
