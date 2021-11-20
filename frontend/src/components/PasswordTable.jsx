import React, { useContext } from "react";
import notePasswordContext from "../context/notePasswords/notePasswordContext";

const PasswordTable = (props) => {
  const { deletePass } = useContext(notePasswordContext);
  const { data, updateNote } = props;
  const handleDeletePass = (id) => {
    deletePass(id);
  };

  return (
    <>
      <div className="row">
        <div className="col-4">{data.title}</div>
        <div className="col-4">{data.password}</div>
        <div className="col-4">
          <i
            className="pointer fas fa-edit p-2 text-info"
            onClick={() => updateNote(data)}
          ></i>
          <i
            className=" pointer fas fa-trash-alt p-2 text-danger"
            onClick={() => handleDeletePass(data._id)}
          ></i>
        </div>
      </div>
    </>
  );
};

export default PasswordTable;
