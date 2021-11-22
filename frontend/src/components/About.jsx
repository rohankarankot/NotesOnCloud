import React from "react";

const About = () => {
  return (
    <div className="col-md-8 m-auto  text-center" style={{ height: "68vh" }}>
      <h2>About developer</h2>
      <hr />
      <img
        style={{ maxHeight: 250 }}
        className="img-fluid img-thumbnail rounded-pill App-logo py-2 "
        src="https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
        alt=""
      />
      <p>
        Forward thinking, having interpersonal skills looking to join a
        progressive organization to utilize my technical skills and also to
        engage in learning new technologies which will be beneficial for both
        the organization and me.
      </p>
      <p className="py-3">👇connect with me 👇</p>
    </div>
  );
};

export default About;
