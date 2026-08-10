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

const Sum = (props) => {
  const sum = props.feedback[0] + props.feedback[1] + props.feedback[2]

  return (
    <p>all {sum}</p>
  )
}

const Average = (props) => {
  const sum = props.feedback[0] + props.feedback[1] + props.feedback[2]
  const goodFeedback = props.feedback[0]
  const neutralFeedback = props.feedback[1] * 0
  const badFeedback = props.feedback[2] * -1
  const average = (goodFeedback + neutralFeedback + badFeedback)/sum

  if (!Number(average)){
    return (
      <p>average 0</p>
    )
  } else {
    return (
      <p>average {average}</p>
    )
  }
}

const PositvePct = (props) => {
  const sum = props.feedback[0] + props.feedback[1] + props.feedback[2]
  const percentage = (props.feedback[0] / sum) * 100

  if (!Number(percentage)){
    return (
      <p>positive 0</p>
    )
  } else {
    return (
      <p>positive {percentage} %</p>
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
      <Paragraph text={"good"} number={good}/>
      <Paragraph text={"neutral"} number={neutral}/>
      <Paragraph text={"bad"} number={bad}/>
      <Sum feedback={[good, neutral, bad]}/>
      <Average feedback={[good, neutral, bad]}/>
      <PositvePct feedback={[good, neutral, bad]}/>
    </div>
  )
}

export default App