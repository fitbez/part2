import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNameChange = e => {
    // console.log(e.target.value);
    setNewName(e.target.value);
  };

  const addPerson = event => {
    event.preventDefault();
    const personObject = {
      name: newName
    };
    setPersons(persons.concat(personObject));
    setNewName(" ");
    console.log(persons.length);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => (
          <li key={person.name}>{person.name}</li>
        ))}
      </div>
    </div>
  );
};

export default App;
