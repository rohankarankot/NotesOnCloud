import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        className=" text-center text-white"
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "0.1rem",
        }}
      >
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              target="_blank"
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#ac2bac" }}
              href="https://www.instagram.com/rohan_isoffline/"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              target="_blank"
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="https://in.linkedin.com/in/rohan-karankot-49043a164"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              target="_blank"
              className="btn btn-primary btn-floating m-1"
              style={{ backgroundColor: "#333333" }}
              href="https://github.com/rohankarankot"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div
          className="text-center p-3 bg-danger"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © {new Date().getFullYear()} Copyright: &nbsp;
          <a
            className="text-white"
            target="_blank"
            href="https://rohankarankot.github.io/"
          >
            Rohan karankot
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
