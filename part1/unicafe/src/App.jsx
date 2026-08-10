import {useState} from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const Paragraph = (props) => {
  return (
    <p>{props.text} {props.number}</p>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text={"good"}/>
      <Button onClick={() => setNeutral(neutral + 1)} text={"neutral"}/>
      <Button onClick={() => setBad(bad + 1)} text={"bad"}/>
      <h1>statistics</h1>
      <Paragraph text={"good"} number={good}/>
      <Paragraph text={"neutral"} number={neutral}/>
      <Paragraph text={"bad"} number={bad}/>
    </div>
  )
}

export default App