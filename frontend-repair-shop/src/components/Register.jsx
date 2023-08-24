import React, { useState } from "react";
import { Link } from "react-router-dom";
import urlBase from "../App";
import axios from "axios";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  localStorage.clear();
  return (
    <div className="Register">
      <h1>Register</h1>
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

        <div className="form-outline mb-4">
          <input
            type="text"
            id="username"
            className="form-control"
            name="username"
            value={username}
            onChange={handleChangeUsername}
          />
          <label className="form-label" for="form2Example1">
            Username
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            name="password"
            value={password}
            onChange={handleChangePassword}
          />
          <label className="form-label" for="form2Example2">
            Password
          </label>
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            console.log(
              firstName +
                " " +
                lastName +
                " " +
                email +
                " " +
                phoneNumber +
                " " +
                username +
                " " +
                password
            );
            axios({
              method: "post",
              url: "/api/v1/auth/register",
              baseURL: "http://localhost:8080",
              data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phoneNumber: phoneNumber,
                username: username,
                password: password,
                role: "CLIENT",
              },
            }).then(
              (response) => {
                console.log(response);
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("isWorker", response.data.isWorker);
                window.location.href = "/";
              },
              (error) => {
                console.log(error);
                setMessage("Wrong input! Check your data input.");
              }
            );
          }}
        >
          Register
        </button>
      </form>
      <br></br>
      <div className="message">
        <h4>
          <b>{message}</b>
        </h4>
      </div>
    </div>
  );
}

export default Register;
