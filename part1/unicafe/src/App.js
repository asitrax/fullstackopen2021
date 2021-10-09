import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  return (
    <div>{props.text} {props.value}</div>
  )
}

const Statistics = (props) => {
  const allFeedbacks = props.good + props.neutral + props.bad
  const average = allFeedbacks > 0 ? (props.good - props.bad) / allFeedbacks : 0
  const positivePerc = allFeedbacks > 0 ? props.good / allFeedbacks : 0

  if (allFeedbacks > 0) {
    return(
      <div>
        <StatisticLine text="good" value = {props.good} />
        <StatisticLine text="neutral" value = {props.neutral} />
        <StatisticLine text="bad" value = {props.bad} />
        <StatisticLine text="all" value = {allFeedbacks} />
        <StatisticLine text="average" value = {average} />
        <StatisticLine text="positive" value = {`${positivePerc * 100} %`} />
      </div>
    )
  }
  return (
    <div>No feedback given</div>
  )

  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' onClick={() => setGood(good + 1)} />
      <Button text='neutral' onClick={() => setNeutral(neutral + 1)} />
      <Button text='bad' onClick={() => setBad(bad + 1)}/>

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App