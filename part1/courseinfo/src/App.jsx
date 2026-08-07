const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.part[0].name} exercises={props.part[0].exercises}/>
      <Part part={props.part[1].name} exercises={props.part[1].exercises}/>
      <Part part={props.part[2].name} exercises={props.part[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <p>Number of exercises {props.sum[0].exercises + props.sum[1].exercises + props.sum[2].exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content part={parts}/>
      <Total sum={parts}/>
    </div>
  )
}

export default App