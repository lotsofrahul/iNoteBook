import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    const { name, email, password } = credentials;
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    //save the auth-token and redirect
    localStorage.setItem("token", json.authtoken);
    navigate("/");
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <h2 className="">Signup to continue</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="my-2">Name</label>
          <input
            type="text"
            className="form-control my-2"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter your name"
            onChange={onChange}
            name="name"
          />
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control my-2"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={onChange}
            name="email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group my-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control my-2"
            id="password"
            placeholder="Password"
            onChange={onChange}
            name="password"
            required
            minLength={5}
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="password"
            className="form-control my-2"
            id="cpassword"
            placeholder="Confirm Password"
            onChange={onChange}
            name="cpassword"
            required
            minLength={5}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
