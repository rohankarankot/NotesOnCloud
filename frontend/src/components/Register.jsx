import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { HOST } from "../components/Config";

const Register = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!name || !email || !password || cpassword) {
    //   alert("Please enter values");
    // }
    const { name, email, password } = credentials;
    const response = await fetch(`${HOST}api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const json = await response.json();
    // console.log(json);
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
          <div className="card  mt-2">
            <div className="card-body">
              <h3 className="card-title text-center">Register </h3>
              <hr />
              <div className="card-text text-center">
                <form onSubmit={handleSubmit}>
                  <input
                    required
                    type="text"
                    value={credentials.name}
                    onChange={onChange}
                    id="name"
                    name="name"
                    className="my-2"
                    placeholder="Enter your Name"
                  />
                  <input
                    required
                    type="email"
                    value={credentials.email}
                    onChange={onChange}
                    id="email"
                    name="email"
                    className="my-2"
                    placeholder="Enter your email address"
                  />
                  <input
                    required
                    type="password"
                    minLength={5}
                    value={credentials.password}
                    onChange={onChange}
                    id="password"
                    name="password"
                    className="my-2"
                    placeholder="Password"
                  />
                  <br />
                  <input
                    required
                    type="password"
                    minLength={5}
                    value={credentials.cpassword}
                    onChange={onChange}
                    id="cpassword"
                    name="cpassword"
                    className="my-2"
                    placeholder="Confirm password"
                  />
                  <br />
                  <div className="text-center ">
                    <button type="submit" className="btn btn-primary my-4">
                      Register
                    </button>
                    <p
                      className="pointer py-2 text-decoration-underline"
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

export default Register;
