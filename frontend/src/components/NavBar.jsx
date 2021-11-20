import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  let location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
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
              <form class="form-inline">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
