import { useState, useEffect } from "react"
import countryService from './services/countries'
import Filter from "./components/Filter"

const App = () => {
  const [dataCountry, setDataCountry] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    countryService
      .getAll()
      .then(country => {
        setDataCountry(country)
      })
  }, [])

  const matchedCountry = dataCountry.filter((item) =>
    item.name.common.toLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <div>
      <div>
        find countries{' '}
        <input value={search} onChange={(event) => setSearch(event.target.value)} />
      </div>
      {search === '' ? null : (
        <Filter countries={matchedCountry} showCountry={setSearch}/>
      )}
    </div>
  )
}

export default App