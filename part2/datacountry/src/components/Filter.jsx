import { useState, useEffect } from "react"
import countryService from '../services/countries'

const ButtonDisplay = ({ item, onDisplayCountry }) => {
  return (
    <p>
      {item}
      <button onClick={() => onDisplayCountry(item)}>Show</button>
    </p>
  )
}

const DisplayCountry = ({ displayCountry }) => {
  return (
    <div>
      <h1>{displayCountry.name.common}</h1>
      {displayCountry.capital.map((item, index) =>
        <p key={index}>{item}</p>)}
      <p>Area {displayCountry.area}</p>
      <h2>Languages</h2>
      <ul>
        {Object.values(displayCountry.languages).map((item, index) =>
          <li key={index}>{item}</li>)}
      </ul>
      <img src={displayCountry.flags.png} alt={displayCountry.flags.alt} />
    </div>
  )
}

const Filtered = ({ country, data }) => {
  const [displayCountry, setDisplayCountry] = useState(null)

  const temp = data.filter((item) =>
    item.toLowerCase().includes(country.toLocaleLowerCase()))

  useEffect(() => {
    setDisplayCountry(null)
    if (temp.length === 1) {
      countryService
        .getCountry(temp[0])
        .then((response) => setDisplayCountry(response))
    }
  }, [country])

  const handleClickDisplay = (countryName) => {
    countryService
      .getCountry(countryName)
      .then(response => {
        setDisplayCountry(response)
      })
  }

  if (!country) {
    return null
  }

  if (displayCountry) {
    return <DisplayCountry displayCountry={displayCountry} />
  }

  if (temp.length > 10) {
    return 'Too many matches, specify another filter'
  }

  if (temp.length > 1) {
    return temp.map((item, index) =>
      <ButtonDisplay item={item} key={index} onDisplayCountry={handleClickDisplay} />)
  }

  return null
}

const Filter = ({ data }) => {
  const [country, setCountry] = useState('')

  const handleInputChange = (event) => {
    setCountry(event.target.value)
  }

  return (
    <div>
      <p>find country <input value={country} onChange={handleInputChange} /></p>
      <Filtered country={country} data={data} />
    </div>
  )
}

export default Filter