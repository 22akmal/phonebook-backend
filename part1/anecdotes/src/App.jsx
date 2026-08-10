import { useState } from 'react'

const MaxVotes = (props) => {
  const max = Math.max(...props.arr)
  const maxIndex = props.arr.indexOf(max)
  const mostVote = props.data[maxIndex]

  if (max === 0){
    return (
      <div>
        <h1>anecdotes with most votes</h1>
        <p>No votes given</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>anecdotes with most votes</h1>
        <p>{mostVote}</p>
        <p>has {max} votes</p>
      </div>
    )
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length))
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const getRandomNumber = () => {
    const index = Math.floor(Math.random() * anecdotes.length)
    setSelected(index)
  }

  const voting = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={voting}>vote</button>
      <button onClick={getRandomNumber}>next anecdotes</button>
      <MaxVotes arr={votes} data={anecdotes}/>
    </div>
  )
}

export default App