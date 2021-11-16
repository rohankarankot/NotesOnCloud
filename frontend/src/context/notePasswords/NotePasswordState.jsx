import NotePasswordContext from "./notePasswordContext";

const NotePasswordState = (props) => {
  const state = {
    name: "Rohan karankot",
    password: "mypassword",
  };
  return (
    <NotePasswordContext.Provider value={state}>
      {props.children}
    </NotePasswordContext.Provider>
  );
};

export default NotePasswordState;
