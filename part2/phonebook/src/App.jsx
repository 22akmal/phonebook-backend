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

  const addPerson = (newData) => {
    personService
      .create(newData)
      .then(newPerson => setPersons(persons.concat(newPerson)))
  }

  const updatePerson = (person, newNumber) => {
    const changedNumber = {...person, number: newNumber}
    personService
      .update(person.id, changedNumber)
      .then(updatedNumber => {
        setPersons(persons.map(p => p.id === updatedNumber.id ? updatedNumber : p))
      })
  }

  const handleDelete = (person) => {
    if (window.confirm(`Delete ${person.name}`)) {
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
      <Filter persons={persons} />
      <h1>add a new</h1>
      <PersonForm persons={persons} onAddPerson={addPerson} onUpdatePerson={updatePerson}/>
      <h2>Numbers</h2>
      <Persons persons={persons} onDeletePerson={handleDelete} />
    </div>
  )
}

export default App
