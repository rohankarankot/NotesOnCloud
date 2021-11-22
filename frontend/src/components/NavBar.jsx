import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
const NavBar = () => {
  let location = useLocation();
  const history = useHistory();
  const handleLogout = () => {
    {
      history.go("/landing");
      localStorage.removeItem("token");
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/landing">
            MPM
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                to="/"
                aria-current="page"
              >
                Home
              </Link>
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
                aria-current="page"
              >
                About
              </Link>
              {localStorage.getItem("token") ? (
                <>
                  <a className={`nav-link pointer`} onClick={handleLogout}>
                    LogOut
                  </a>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
