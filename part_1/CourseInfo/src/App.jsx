const App = () => {
  const course = {name : 'Half Stack application development',
  parts : [
  {pname :'Fundamentals of React', exer : 10},
  {pname :'Using props to pass data', exer : 7},
  {pname : 'State of a component', exer : 14}
  ]
  }

  return (
    <div>
      <Header name = {course.name} />
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}
const Header = (props) => {
  console.log({props})
  return (
  <>
  <p>{props.name}</p> 
  </>

  )
}

const Content = (props) => {
  return (
  <>
    <p>{props.parts[0].pname} {props.parts[0].exer}</p>
    <p>{props.parts[1].pname} {props.parts[1].exer}</p>
    <p>{props.parts[2].pname} {props.parts[2].exer}</p></>
  )
}

const Total = (props) => {
  const sum_exer =
    props.parts.reduce((sum, part) => sum + part.exer,0);

  return (
  <>
    <p>Number of exercises {sum_exer}</p></>
  )
}
export default App
