const Persons = (props) => {
  return (
    <div>
      {props.persons.map((person) =>
        <p key={person.name}>
          {person.name} {person.number} <button onClick={() => props.onDeletePerson(person)}>delete</button>
        </p>
      )}
    </div>
  )
}

export default Persons