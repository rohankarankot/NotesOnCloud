import React, { useContext } from "react";
import notePasswordContext from "../context/notePasswords/notePasswordContext";
import PasswordTable from "./PasswordTable";

const YourPasswords = () => {
  const context = useContext(notePasswordContext);
  const { passwordNotes } = context;

  return (
    <div>
      {passwordNotes.map((pass) => {
        return <PasswordTable data={pass} key={pass._id} />;
      })}
    </div>
  );
};

export default YourPasswords;
