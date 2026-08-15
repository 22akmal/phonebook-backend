import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
import personService from './services/phonebook'

function App() {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    personService
      .getAll()
      .then(dataInitial => setPersons(dataInitial))
  }, [])

  const addPerson = (newPerson) => {
    personService
      .create(newPerson)
      .then(newData => setPersons(persons.concat(newData)))
  }

  const handleDelete = (person) => {
    if(window.confirm(`Delete ${person.name}`)){
      personService
        .remove(person.id)
        .then(personRemoved => {
          console.log("delete: ", personRemoved)
          setPersons(persons.filter((person) => person.id !== personRemoved.id))
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons}/>
      <h1>add a new</h1>
      <PersonForm persons={persons} onAddPerson={addPerson}/>
      <h2>Numbers</h2>
      <Persons persons={persons} onDeletePerson={handleDelete}/>
    </div>
  )
}

export default App
