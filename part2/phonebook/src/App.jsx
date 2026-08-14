import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

function App() {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)})
  }, [])

  const addPerson = (newPerson) => {
    setPersons(persons.concat(newPerson))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons}/>
      <h1>add a new</h1>
      <PersonForm persons={persons} onAddPerson={addPerson}/>
      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  )
}

export default App
