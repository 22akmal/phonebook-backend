import { useState } from "react";
import personService from '../services/phonebook'

const PersonForm = (props) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const personNameList = props.persons.map((person) => person.name)
    if (personNameList.includes(newName)){
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const updatePerson = props.persons.find((person) => 
          person.name === newName
        )
        props.onUpdatePerson(updatePerson, newNumber)
      }
      setNewName('')
      setNewNumber('')
      return
    }
    const newPerson = { name: newName, number: newNumber }
    setNewName('')
    setNewNumber('')
    props.onAddPerson(newPerson)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
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
  )
}

export default PersonForm