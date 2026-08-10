import {useState} from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

function sum (data) {
  const sum = data[0] + data[1] + data[2]
  return sum
}

function average(data) {
  const sum = data[0] + data[1] + data[2]
  const goodFeedback = data[0]
  const neutralFeedback = data[1] * 0
  const badFeedback = data[2] * -1
  const average = (goodFeedback + neutralFeedback + badFeedback)/sum

  if (isNaN(average)){
    return 0
  } else {
    return average.toFixed(1)
  }
}

function positivePct(data) {
  const sum = data[0] + data[1] + data[2]
  const percentage = (data[0] / sum) * 100

  if (isNaN(percentage)){
    return "0 %"
  } else {
    return `${percentage.toFixed(1)} %`
  }
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.feedback[0] === 0 && props.feedback[1] === 0 && props.feedback[2] === 0){
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={props.feedback[0]}/>
          <StatisticLine text="neutral" value={props.feedback[1]}/>
          <StatisticLine text="bad" value={props.feedback[2]}/>
          <StatisticLine text="all" value={sum(props.feedback)}/>
          <StatisticLine text="average" value={average(props.feedback)}/>
          <StatisticLine text="positive" value={positivePct(props.feedback)}/>
        </tbody>
      </table>
    )
  }
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
      <Statistics feedback={[good, neutral, bad]}/>
    </div>
  )
}

export default App