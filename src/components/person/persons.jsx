import React from "react";

import Person from "./Person";

const Persons = ({ persons, personDelet, personChange}) => {
  return (
    <div>
      {persons.map((person) => (
        <Person
          key={Person.id}
          fullname={person.fullname}
          personDelet={() => personDelet(person.id)}
          changed={(event) => personChange(event, person.id)}
        />
      ))}
    </div>
  );
};
export default Persons;
