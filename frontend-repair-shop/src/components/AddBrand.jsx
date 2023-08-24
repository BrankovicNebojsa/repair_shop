import React, { useState } from "react";
import axios from "axios";

function AddBrand() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="add-brand">
      <h1>Add a brand</h1>
      <br></br>
      <form>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="name"
            className="form-control"
            name="name"
            value={name}
            onChange={handleChangeName}
          />
          <label className="form-label" for="form2Example1">
            Brand name
          </label>
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            axios({
              method: "post",
              url: "/api/v1/brands",
              baseURL: "http://localhost:8080",
              data: {
                name: name,
              },
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }).then(
              (response) => {
                window.location.href = "/brands";
              },
              (error) => {
                console.log(error);
                setMessage("That brand is probably already saved. Check all brands!");
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

export default AddBrand;
