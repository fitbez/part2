import React, { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
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
      <Filter value={filterName} onChange={handleFilterName} />
      <div>
        <h2>add a new</h2>
      </div>
      <PersonForm
        valueName={newName}
        valueNumber={newNumber}
        onChangeName={handleNameChange}
        addPerson={addPerson}
        onChangeNumber={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons nameToShow={nameToShow} newName={newName} />
    </div>
  );
};

export default App;
