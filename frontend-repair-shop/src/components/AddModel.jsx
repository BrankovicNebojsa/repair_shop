import React, { useState } from "react";
import axios from "axios";

function AddModel() {
  const [brandName, setBrandName] = useState("");
  const [modelName, setModelName] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeBrandName = (event) => {
    setBrandName(event.target.value);
  };

  const handleChangeModelName = (event) => {
    setModelName(event.target.value);
  };

  return (
    <div className="add-model">
      <h1>Add a model</h1>
      <br></br>
      <form>
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

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            axios({
              method: "post",
              url: "/api/v1/models",
              baseURL: "http://localhost:8080",
              data: {
                brand: {
                    name: brandName
                },
                name: modelName
              },
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }).then(
              (response) => {
                window.location.href = "/models";
              },
              (error) => {
                console.log(error);
                setMessage("That model is probably already saved. Check all models!");
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

export default AddModel;
