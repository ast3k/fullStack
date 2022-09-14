import { useState } from 'react'

const Statistics = (props) => {
    return (
        <div>
            <h3>statistics</h3>
            good {props.good} <br/>
            neutral {props.neutral} <br/>
            bad {props.bad} <br/>
            total {props.all} <br/>
            average {props.avg} <br/>
            positive {props.goodPer} %
        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    let all = good + neutral + bad
    let avg = (good - bad) / all
    let goodPer = (good / all) * 100
    return (
        <div>
            <h3>give feedback</h3>
            <button onClick={() => setGood(good + 1)}>good</button>
            <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
            <button onClick={() => setBad(bad + 1)}>bad</button>
            <Statistics good={good} neutral={neutral} bad={bad} total={all} avg={avg} goodPer={goodPer} />
        
        </div>
    )
}

export default App
