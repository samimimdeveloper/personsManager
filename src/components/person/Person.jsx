import React from "react";

import "./person.css";

const Person = ({ fullname, personDelet, changed }) => {
  return (
    <div className="person">
      <p style={{textAlign:"center"}}>{`${fullname}`}</p>
      <input style={{height:30,marginInline:8,width:400}} type="text" placeholder={fullname} onChange={changed} />
      <button style={{border:"none",cursor:"pointer",height:30,width:60}} onClick={personDelet}>حذف </button>
    </div>
  );
};
export default Person;
