const Persons = ({ persons, deletePerson }) => (
  <div>
    {persons.map((person) => (
      <Person key={person.id} person={person} deletePerson={deletePerson} />
    ))}
  </div>
);

const Person = ({ person, deletePerson }) => (
  <div>
    {person.name} {person.number} <button onClick={() => deletePerson(person.id)}>delete</button>
  </div>
);

export default Persons
