import { useState } from "react";

const Person = ({ person }) => <div>{person.name} {person.number}</div>;

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "39-44-5323523" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const submitName = (event) => {
    event.preventDefault();
    if (persons.find((e) => e.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons([...persons, { name: newName, number: newNumber }]);
      setNewName("");
      setNewNumber("");
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  );
};

export default App;
