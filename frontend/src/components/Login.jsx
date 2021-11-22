import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { HOST } from "./Config";
const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${HOST}api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      history.push("/");
    } else {
      alert("Invalid credentials");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {localStorage.getItem("token") ? (
        history.push("/")
      ) : (
        <div className=" row  mx-auto col-md-4">
          <div className="card  mt-4">
            <div className="card-body">
              <h3 className="card-title text-center">Welcome Back!!! </h3>
              <hr />
              <div className="card-text text-center">
                <form onSubmit={handleSubmit} className="py-4">
                  <input
                    type="email"
                    value={credentials.email}
                    onChange={onChange}
                    id="email"
                    name="email"
                    className="my-2"
                    placeholder="Enter your email address"
                  />
                  <br />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={onChange}
                    className="my-2"
                    placeholder="Enter your password"
                  />
                  <br />
                  <div className="text-center ">
                    <button type="submit" className="btn btn-primary my-4">
                      Login
                    </button>
                    <p
                      className="pointer py-4 text-decoration-underline"
                      onClick={(e) => {
                        e.preventDefault();
                        history.goBack();
                      }}
                    >
                      Go Back
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
