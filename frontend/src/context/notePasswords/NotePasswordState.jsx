import { useState } from "react";
import NotePasswordContext from "./notePasswordContext";
const NotePasswordState = (props) => {
  const passwordNotesInitial = [
    {
      _id: "619348d015sd41ecc018ad8201",
      user: "619285d3365ccaea8b9a42ef",
      title: "instagram",
      password: "rohan234234",
      date: "2021-11-16T05:59:44.056Z",
      __v: 0,
    },
    {
      _id: "619348d9154sd1ecc018ad8204",
      user: "619285d3365ccaea8b9a42ef",
      title: "instagram",
      password: "rohan234234",
      date: "2021-11-16T05:59:53.696Z",
      __v: 0,
    },
    {
      _id: "619348d9sd1541ecc018sdad8204",
      user: "619285d3365ccaea8b9a42ef",
      title: "instagram",
      password: "rohan234234",
      date: "2021-11-16T05:59:53.696Z",
      __v: 0,
    },
    {
      _id: "61934sdsd8d9sd1541ecc018ad8204",
      user: "619285d3365ccaea8b9a42ef",
      title: "instagram",
      password: "rohan234234",
      date: "2021-11-16T05:59:53.696Z",
      __v: 0,
    },
    {
      _id: "619348d91541esdcc018adsdsd8204",
      user: "619285d3365ccaea8b9a42ef",
      title: "instagram",
      password: "sdsdrohan234234",
      date: "2021-11-16T05:59:53.696Z",
      __v: 0,
    },
  ];
  const [passwordNotes, setpasswordNotes] = useState(passwordNotesInitial);

  // add note
  const addPass = (title, password) => {
    const newPassword = {
      _id: "619348d91541sdsdsesdcc018adsdsd8204",
      user: "619285d3365ccaea8b9a42ef",
      title: title,
      password: password,
      date: "2021-11-16T05:59:53.696Z",
      __v: 0,
    };
    setpasswordNotes(passwordNotes.concat(newPassword));
  };
  // delete note
  const deletePass = (id) => {
    console.log("deleting in process......." + id);
    const newPass = passwordNotes.filter((data) => {
      return data._id !== id;
    });
    setpasswordNotes(newPass);
    console.log("deleed");
  };
  // edit note
  const editPass = () => {};

  return (
    <NotePasswordContext.Provider
      value={{ passwordNotes, setpasswordNotes, addPass, deletePass, editPass }}
    >
      {props.children}
    </NotePasswordContext.Provider>
  );
};

export default NotePasswordState;
