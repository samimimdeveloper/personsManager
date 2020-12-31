import React from "react";
import Person from "./Person";

const Persons = ({ persons,personDelet }) => {
  return (
    <div>
      {persons.map(person => (
        <Person
        key={Person.id}
          firstname={person.firstname}
          lastname={person.lastname}
          personDelet={() => personDelet (person.id)} 
        />
      ))}
    </div>
  );
};

export default Persons;
