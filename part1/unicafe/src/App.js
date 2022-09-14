import { useState } from 'react'

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
            <h3>statistics</h3>
            good {good} <br/>
            neutral {neutral} <br/>
            bad {bad} <br/>
            total {all} <br/>
            average {avg} <br/>
            positive {goodPer} %
        
        </div>
    )
}

export default App
