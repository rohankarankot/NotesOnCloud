import React, { useContext, useState } from "react";
import notePasswordContext from "../context/notePasswords/notePasswordContext";
import { CopyToClipboard } from "react-copy-to-clipboard";
const PasswordTable = (props) => {
  const { deletePass } = useContext(notePasswordContext);
  const { data, updateNote } = props;
  const handleDeletePass = (id) => {
    deletePass(id);
  };
  let value = "";
  const [copied, setcopied] = useState(false);
  return (
    <>
      <div className="row">
        <div className="col-3">{data.title}</div>
        <div className="col-3">
          <input
            type="password"
            value={data.password}
            style={{ border: "none" }}
          />
        </div>
        <div className="row col-3 m-auto pointer">
          <p className="d-none"> {(value = data.password)}</p>

          <CopyToClipboard
            text={value}
            onCopy={() => {
              setcopied(true);
              alert("Copy to clipboard");
            }}
          >
            <i className="fas fa-copy mx-3"></i>
          </CopyToClipboard>
        </div>

        <div className="col-3">
          <i
            className="pointer fas fa-edit p-2 text-info mx-2"
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
