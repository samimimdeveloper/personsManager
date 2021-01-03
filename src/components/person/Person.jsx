import React from "react";

import "./person.css";

const Person = ({ fullname, personDelet, changed }) => {
  return (
    <div className="person">
      <p>{`${fullname}`}</p>
      <input type="text" placeholder={fullname} onChange={changed} />
      <button onClick={personDelet}>حذف </button>
    </div>
  );
};
export default Person;
