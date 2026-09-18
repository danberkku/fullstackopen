import { useState } from 'react'

const Button = (props) => {
  return (
  <button onClick = {props.onClick}> {props.text}</button>
  )
}
const StatitcsLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({good,bad,neutral})=> {
  const all = good + neutral + bad 
  let average = 0
  let positive = 0
  if (all >0){
  average = ((good-bad)/all).toFixed(2);
  
  positive = (good/all *100).toFixed(2);
   +'%'
 

  return (
    <>
    <h1>statistics</h1>
    <table>
      <StatitcsLine text = "good" value = {good}/>
      <StatitcsLine text = "neutral" value = {neutral}/>
      <StatitcsLine text = "bad" value = {bad}/>
      <StatitcsLine text = "all" value = {all}/>
      <StatitcsLine text = "average" value = {average}/>
      <StatitcsLine text = "positive" value = {positive}/>
    </table>
    </>
  )
  }
  
    if (all ===0) {
      return (
      <>

    <h1>statistics</h1>
      <p>No feedback given</p>
      </>
    )
  }
  }

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (

    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good +1)} text = 'good'/>
      <Button onClick={() => setNeutral(neutral+1)} text = 'neutral'/>
      <Button onClick={() => setBad(bad +1)} text = 'bad'/>
    <Statistics good = {good} neutral = {neutral} bad= {bad}/>
    </div>
  )
}

export default App
