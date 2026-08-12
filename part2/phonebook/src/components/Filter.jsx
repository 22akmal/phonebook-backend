import { useState } from 'react'

const Filter = ({persons}) => {
  const [filterName, setFilterName] = useState('')

  const handleNameFilter = (event) => {
    setFilterName(event.target.value)
  }

  const filteredPerson = persons.filter((person) =>
    person.name.toLowerCase().startsWith(filterName.toLowerCase())
  )

  return (
    <div>
      filter shown with: <input value={filterName} onChange={handleNameFilter} />
      <div>
        {filterName.length > 0 && filteredPerson.map((person) =>
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        )}
      </div>
    </div>
  )
}

export default Filter