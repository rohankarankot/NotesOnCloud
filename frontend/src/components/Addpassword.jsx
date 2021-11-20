import React, { useContext, useState } from "react";
import notePasswordContext from "../context/notePasswords/notePasswordContext";

const Addpassword = () => {
  const { addPass } = useContext(notePasswordContext);
  const [Newpass, setNewpass] = useState({ title: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Newpass.title || !Newpass.password) {
      alert("all field is required");
      return;
    }
    addPass(Newpass.title, Newpass.password);
    setNewpass({ title: "", password: "" });
  };
  const onChange = (e) => {
    setNewpass({ ...Newpass, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form action="" className="text-center">
        <h3 className="card-title">Add a Password</h3>
        <hr />

        <div className="row ">
          <div className="col-md-4 ">
            <label htmlFor="title">Enter site name:</label>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              id="title"
              name="title"
              value={Newpass.title}
              onChange={onChange}
              autoComplete="false"
              className="form-control w-100"
              placeholder="Enter site name"
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-4">
            <label htmlFor="password">Enter Password:</label>
          </div>
          <div className="col-md-8">
            <input
              type="password"
              value={Newpass.password}
              name="password"
              onChange={onChange}
              id="password"
              className="form-control w-100"
              placeholder="Enter Password"
            />
          </div>
        </div>
        <button onClick={handleSubmit} className="btn btn-primary m-4">
          Add to list
        </button>
      </form>
    </div>
  );
};

export default Addpassword;
