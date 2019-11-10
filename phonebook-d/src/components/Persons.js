import React from "react";

const Persons = ({ nameToShow, newName }) => {
  return (
    <div>
      {nameToShow.map(person => {
        return person.name !== newName ? (
          <li key={person.name}>
            {person.name} {""}
            {person.number}
          </li>
        ) : (
          alert(`${newName} is already registerd`)
        );
      })}
    </div>
  );
};

export default Persons;
