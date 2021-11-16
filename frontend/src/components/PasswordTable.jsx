import React, { useContext } from "react";
import notePasswordContext from "../context/notePasswords/notePasswordContext";

const PasswordTable = (props) => {
  const { deletePass } = useContext(notePasswordContext);
  const { data } = props;
  const handleDeletePass = (id) => {
    deletePass(id);
    alert("password deleted ");
  };
  return (
    <>
      <div className="row">
        <div className="col-4">{data.title}</div>
        <div className="col-4">{data.password}</div>
        <div className="col-4">
          <i
            className="fas fa-edit p-2 text-info"
            onClick={() => alert(data._id)}
          ></i>
          <i
            className="fas fa-trash-alt p-2 text-danger"
            onClick={() => handleDeletePass(data._id)}
          ></i>
        </div>
      </div>
    </>
  );
};

export default PasswordTable;
