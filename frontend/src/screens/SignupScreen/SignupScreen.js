import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "../../components/Utility/axiosInstance";
import "./SignupScreen.css";

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      username: formData.get("username"),
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };
    alert(`You have entered the user details`);
    try {
      const response = await axios.post("/api/users/signup", data);
      console.log("response ", response);
      event.target.reset();
      alert("Your registration was successful");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Registration failure. \n username exist already");
    }
  };

  return (
    <div className="register-container ">
      <h1>Sign Up</h1>
      <div className=" d-flex justify-content-around align-items-center flex-wrap ">
        <div className="p-2 text-center">
          <h5>Your are Welcome Back</h5>
          <NavLink to="/signin">
            <button className="btn btn-primary">Please Sign In</button>
          </NavLink>
        </div>
        <form
          className=" d-flex flex-column justify-content-center align-items-center "
          onSubmit={handleSubmit}
        >
          <label>
            User name
            <br />
            <span>
              <input
                type="text"
                autoComplete="username"
                name="username"
                required={true}
              />
            </span>
          </label>
          <label>
            First name
            <br />
            <span>
              <input
                type="text"
                autoComplete="firstname"
                name="firstname"
                required={true}
              />
            </span>
          </label>
          <label>
            Last name
            <br />
            <span>
              <input
                type="text"
                autoComplete="lastname"
                name="lastname"
                required={true}
              />
            </span>
          </label>
          <label>
            Email
            <br />
            <span>
              <input
                type="email"
                autoComplete="email"
                name="email"
                required={true}
              />
            </span>
          </label>
          <label>
            Password
            <br />
            <span>
              <input
                type="password"
                autoComplete="new-password"
                name="password"
                required={true}
              />
            </span>
          </label>
          <label>
            Confirm Password
            <br />
            <span>
              <input
                type="password"
                autoComplete="confirm-password"
                name="confirm-password"
                required={true}
              />
            </span>
          </label>

          <div className="d-flex  p-3">
            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}