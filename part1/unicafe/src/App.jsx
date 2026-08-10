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

  if (!Number(average)){
    return 0
  } else {
    return average
  }
}

function positvePct(data) {
  const sum = data[0] + data[1] + data[2]
  const percentage = (data[0] / sum) * 100

  if (!Number(percentage)){
    return 0
  } else {
    return percentage
  }
}

const Statistics = (props) => {
  const sumFeedback = sum(props.feedback)
  const averageFeedback = average(props.feedback)
  const positiveFeedbackPct = positvePct(props.feedback)

  return (
    <div>
      <h1>statistics</h1>
      <p>good {props.feedback[0]}</p>
      <p>neutral {props.feedback[1]}</p>
      <p>bad {props.feedback[2]}</p>
      <p>all {sumFeedback}</p>
      <p>average {averageFeedback}</p>
      <p>positive {positiveFeedbackPct} %</p>
    </div>
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
      <Statistics feedback={[good, neutral, bad]}/>
    </div>
  )
}

export default App