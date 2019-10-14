import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  const handleNameChange = e => {
    // console.log(e.target.value);
    setNewName(e.target.value);
  };
  const handleNumberChange = e => {
    // console.log(e.target.value);
    setNewNumber(e.target.value);
  };
  const handleFilterName = e => {
    // console.log(e.target.value);
    setFilterName(e.target.value);
  };

  const filteredName = filterName.toUpperCase();
  const nameToShow = persons.filter(
    person => person.name.toUpperCase().indexOf(filteredName) > -1
  );
  const addPerson = event => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    };

    setPersons(persons.concat(personObject));
    setNewName(" ");
    setNewNumber(" ");
  };
  // console.log(newName);
  // console.log(nameToShow);
  // console.log(filteredName);

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with{" "}
        <input value={filterName} onChange={handleFilterName} />
      </div>
      <div>
        <h2>add a new</h2>
      </div>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>

        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
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
    </div>
  );
};

export default App;
