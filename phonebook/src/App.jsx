import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personsServie from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    personsServie.getAll().then((initPersons) => {
      setPersons(initPersons);
    });
  }, []);

  const submitName = (event) => {
    event.preventDefault();
    const person = persons.find((p) => p.name === newName);
    if (person) {
      // existing
      if (
        window.confirm(
          `${person.name} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const newPerson = {
          id: person.id,
          name: person.name,
          number: newNumber,
        };

        personsServie
          .updatePerson(person.id, newPerson)
          .then((returnPerson) => {
            setPersons(
              persons.map((p) => (p.id !== person.id ? p : returnPerson))
            );
            setNewName("");
            setNewNumber("");
            showMessage(`Updated ${returnPerson.name}`);
          })
          .catch((error) => {
            console.log(error);
            showMessage(
              `Information of ${person.name} has already been removed from server`
            );
            setPersons(persons.filter((p) => p.id !== person.id));
          });
      }
    } else {
      // new
      const newPerson = { name: newName, number: newNumber };

      personsServie.createPerson(newPerson).then((returnPerson) => {
        setPersons(persons.concat(returnPerson));
        setNewName("");
        setNewNumber("");
        showMessage(`Added ${returnPerson.name}`);
      });
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const deletePerson = (id) => {
    const person = persons.find((p) => p.id === id);
    if (window.confirm(`Delete ${person.name}?`)) {
      personsServie.deletePerson(id).then(() => {
        setPersons(persons.filter((p) => p.id !== id));
        showMessage(`Delete ${person.name}`);
      });
    }
  };

  const showMessage = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  const filterPersons =
    filter === ""
      ? persons
      : persons.filter((person) => person.name.toLowerCase().includes(filter));

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter filter={filter} handleFilter={handleFilter} />
      <h3>add a new</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        submitName={submitName}
      />
      <h3>Numbers</h3>
      <Persons persons={filterPersons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
