import React from "react";

const Alert = (props) => {
  console.log(props);
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>Holy guacamole!</strong> You should check in on some of those
      fields below.
    </div>
  );
};

export default Alert;
