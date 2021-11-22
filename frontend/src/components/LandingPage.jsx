import React from "react";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  const history = useHistory();
  return (
    <div>
      <h3 className="pt-4 text-center ">
        <strong>Master Password Manager</strong>
        <hr />
      </h3>
      <div className="row py-4">
        <div className="col-md-7 col-12 py-4 ">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
            corporis laboriosam culpa dignissimos non voluptate omnis
            necessitatibus itaque accusantium architecto libero eaque natus,
            blanditiis molestias?
          </p>
          {localStorage.getItem("token") ? (
            <button
              type="button"
              onClick={() => {
                history.push("/");
              }}
              className="  btn btn-success btn-lg my-5 mx-5"
            >
              goto Dashboard
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={() => {
                  history.push("/login");
                }}
                className="  btn btn-success btn-lg my-5 mx-5"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => {
                  history.push("/register");
                }}
                className="  btn btn-info btn-lg my-5"
              >
                Register
              </button>
            </>
          )}
        </div>
        <div className="col-md-5 col-12">
          <img
            style={{ maxHeight: 250 }}
            src="https://thethoughtswithinherwords.files.wordpress.com/2017/01/cyber-threat-analysis-leadspace-laptop-lock.gif?w=840"
            className="img-fluid img-thumbnail rounded-pill App-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
