import { useState, useEffect } from "react"
import countryService from './services/countries'
import Filter from "./components/Filter"

const App = () => {
  const [dataCountry, setDataCountry] = useState([])

  useEffect(() => {
    countryService
      .getAll()
      .then(country => {
        const listCountry = country.map(item => item.name.common)
        setDataCountry(listCountry)
      })
  }, [])

  return (
    <div>
      <Filter data={dataCountry}/>
    </div>
  )
}

export default App