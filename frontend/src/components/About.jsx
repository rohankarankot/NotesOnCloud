import React, { useContext } from "react";
import notePasswordContext from "../context/notePasswords/notePasswordContext";

const About = () => {
  const a = useContext(notePasswordContext);
  return <div>name = {a.name} </div>;
};

export default About;
