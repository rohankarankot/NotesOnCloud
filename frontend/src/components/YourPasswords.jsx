import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import notePasswordContext from "../context/notePasswords/notePasswordContext";
import PasswordTable from "./PasswordTable";

const YourPasswords = () => {
  let history = useHistory();
  const context = useContext(notePasswordContext);
  const { passwordNotes, getAllPasswords, editPass } = context;
  const ref = useRef(null);
  const refCloseModal = useRef(null);
  const [Newpass, setNewpass] = useState({ id: "", etitle: "", epassword: "" });
  const updateNote = (currentPassword) => {
    setNewpass({
      id: currentPassword._id,
      etitle: currentPassword.title,
      epassword: "",
    });
    ref.current.click();
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getAllPasswords();
    } else {
      history.push("/login");
    }

    // eslint-disable-next-line
  }, []);
  const handleSubmit = (e) => {
    ref.current.click();
    editPass({
      id: Newpass.id,
      title: Newpass.etitle,
      password: Newpass.epassword,
    });
  };
  const onChange = (e) => {
    setNewpass({ ...Newpass, [e.target.name]: e.target.value });
  };
  return (
    <div
      style={{
        maxHeight: "50%",
        width: "100%",
        display: "inline-block",
        overflow: "scroll",
        scrollbarWidth: "inherit",
        overflowX: "hidden",
      }}
    >
      <button
        style={{ display: "none" }}
        type="button"
        className="btn btn-primary"
        data-mdb-toggle="modal"
        data-mdb-target="#exampleModal"
        ref={ref}
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Password
              </h5>
              <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <form action="" className="text-center">
                  <div className="row ">
                    <div className="col-md-4 ">
                      <label htmlFor="etitle">Enter site name:</label>
                    </div>
                    <div className="col-md-8">
                      <input
                        value={Newpass.etitle}
                        type="text"
                        id="etitle"
                        name="etitle"
                        onChange={onChange}
                        className="form-control w-100"
                        placeholder="Enter site name"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-4">
                      <label htmlFor="epassword">
                        Enter/paste new Password:
                      </label>
                    </div>
                    <div className="col-md-8">
                      <input
                        value={Newpass.epassword}
                        type="password"
                        name="epassword"
                        onChange={onChange}
                        id="epassword"
                        className="form-control w-100"
                        placeholder="Enter Password"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                onClick={handleSubmit}
                className="btn btn-primary"
              >
                Update Changes
              </button>
              <button
                ref={refCloseModal}
                type="button"
                className="btn btn-secondary d-none"
                data-mdb-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {passwordNotes.length === 0 && (
        <div className="alert alert-danger alert-dismissible fade show text-center">
          <strong>
            <i className="fas fa-exclamation-triangle"></i>No Passwords Found!
            <i className="fas fa-exclamation-triangle"></i>
          </strong>
          <br />
          Please add some Passwords to your account
        </div>
      )}
      {passwordNotes.map((pass) => {
        return (
          <PasswordTable data={pass} key={pass._id} updateNote={updateNote} />
        );
      })}
    </div>
  );
};

export default YourPasswords;
