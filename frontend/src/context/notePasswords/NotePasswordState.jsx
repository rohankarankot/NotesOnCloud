import { useState } from "react";
import NotePasswordContext from "./notePasswordContext";
const NotePasswordState = (props) => {
  const HOST = "http://localhost:5000";
  const passwordNotesInitial = [];
  const [passwordNotes, updateNotePassword] = useState(passwordNotesInitial);

  // get all password
  const getAllPasswords = async (title, password) => {
    const response = await fetch(`${HOST}/api/passwords/fetchallpasswords`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE5Mjg1ZDMzNjVjY2FlYThiOWE0MmVmIn0sImlhdCI6MTYzNzA0MTM5NX0.zX50f4cIy-HJc1FqMNA2UyH1KgzMmw5rK_0q54ohRPI",
      },
    });
    const json = await response.json();

    updateNotePassword(json);
  };
  // add note
  const addPass = async (title, password) => {
    const response = await fetch(`${HOST}/api/passwords/addpassword/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE5Mjg1ZDMzNjVjY2FlYThiOWE0MmVmIn0sImlhdCI6MTYzNzA0MTM5NX0.zX50f4cIy-HJc1FqMNA2UyH1KgzMmw5rK_0q54ohRPI",
      },
      body: JSON.stringify({ title, password }),
    });
    const newPassword = await response.json();
    updateNotePassword(passwordNotes.concat(newPassword));
    alert("New password added to database");
  };
  // delete note
  const deletePass = async (id) => {
    //api call
    const response = await fetch(`${HOST}/api/passwords/deletepass/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE5Mjg1ZDMzNjVjY2FlYThiOWE0MmVmIn0sImlhdCI6MTYzNzA0MTM5NX0.zX50f4cIy-HJc1FqMNA2UyH1KgzMmw5rK_0q54ohRPI",
      },
    });
    const json = await response.json();
    console.log(json);
    const newPass = passwordNotes.filter((data) => {
      return data._id !== id;
    });
    updateNotePassword(newPass);

    console.log("deleed");
  };
  // edit note
  const editPass = async (id, title, password) => {
    // API Call
    // console.log(id.password, id.title);
    const noteId = id;
    // console.log(noteId.id);
    const response = await fetch(`${HOST}/api/passwords/update/${noteId.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE5Mjg1ZDMzNjVjY2FlYThiOWE0MmVmIn0sImlhdCI6MTYzNzA0MTM5NX0.zX50f4cIy-HJc1FqMNA2UyH1KgzMmw5rK_0q54ohRPI",
      },
      body: JSON.stringify({ id, title, password }),
    });
    const json = await response.json();

    let newNotes = JSON.parse(JSON.stringify(passwordNotes));
    // Logic to edit in client

    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id.id) {
        newNotes[index].title = id.title;
        newNotes[index].password = id.password;
        break;
      }
    }
    // console.log(newNotes);
    updateNotePassword(newNotes);
    // console.log(passwordNotes);
  };

  return (
    <NotePasswordContext.Provider
      value={{
        passwordNotes,
        updateNotePassword,
        addPass,
        deletePass,
        editPass,
        getAllPasswords,
      }}
    >
      {props.children}
    </NotePasswordContext.Provider>
  );
};

export default NotePasswordState;
