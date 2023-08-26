import React, { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  useEffect(() => {
    axios({
        method: "GET",
        url: "/api/v1/users/current",
        baseURL: "http://localhost:8080",
        data: {},
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      }).then(
        (response) => {
          console.log(response);
          setId(response.data.id);
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
          setPhoneNumber(response.data.phoneNumber);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);



  return (
    <div className="edit-profile">
      <h1>Profile</h1>
      <br></br>
      <form>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="firstName"
            className="form-control"
            name="firstName"
            value={firstName}
            onChange={handleChangeFirstName}
          />
          <label className="form-label" for="form2Example1">
            First name
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="lastName"
            className="form-control"
            name="lastName"
            value={lastName}
            onChange={handleChangeLastName}
          />
          <label className="form-label" for="form2Example1">
            Last name
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="email"
            className="form-control"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          />
          <label className="form-label" for="form2Example1">
            Email
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="phoneNumber"
            className="form-control"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChangePhoneNumber}
          />
          <label className="form-label" for="form2Example1">
            Phone number
          </label>
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
              axios({
                method: "patch",
                url: "/api/v1/users/" + id ,
                baseURL: "http://localhost:8080",
                data: {
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  phoneNumber: phoneNumber
                },  
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
                },
              }).then(
                (response) => {
                  window.location.reload(false);
                },
                (error) => {
                  console.log(error);
                  setMessage(
                    "Something went wrong! Try again."
                  );
                }
              );
          }}
        >
          Update profile
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

export default Profile;
