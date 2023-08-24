import React, { useState } from "react";
import { Link } from "react-router-dom";
import urlBase from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [passwrod, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  localStorage.clear();
  return (
    <div className="Login">
      <h1>Login</h1>
      <form>
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
            value={passwrod}
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
            axios({
              method: "post",
              url: "/api/v1/auth/authenticate",
              baseURL: "http://localhost:8080",
              data: {
                username: username,
                password: passwrod,
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
                setMessage("Wrong input! Check your username and password.");
              }
            );
          }}
        >
          Log in
        </button>
      </form>
      <div className="message">
        <h4>
          <b>{message}</b>
        </h4>
      </div>
      <br />
      <h5>Don't have an account?</h5>
      <button type="button" class="btn btn-secondary" onClick={() => navigate("/register")}>Register</button>
      <br></br>
    </div>
  );
}

export default Login;
