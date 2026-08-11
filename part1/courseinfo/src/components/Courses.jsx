const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => (
  <div>
    {props.parts.map(exercise => 
      <Part key={exercise.id} part={exercise}/>
    )}
  </div>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => {
  return (<p>
    <strong>Total of {props.total.reduce((s, p) => s + p.exercises, 0)} exercises</strong>
  </p>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header course={props.course.name}/>
      <Content parts={props.course.parts}/>
      <Total total={props.course.parts}/>
    </div>
  )
}

export default Course