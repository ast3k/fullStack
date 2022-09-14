import { useState } from 'react'

const Button = (props) => {
    return (
        <>
            <button onClick={() => props.set(props.variable + 1)} >
                {props.text}
            </button>
        </>
    )
}

const StatisticLine = (props) => {
    return (
        <tr>
            <td>{props.text}</td><td>{props.value} {props.unit}</td>
        </tr>
    )
}

const Statistics = (props) => {
    if ( props.good === 0 && props.neutral === 0 && props.bad ===0) {
        return (
            <div>
                No feedback given
            </div>
        )
    }
    else {
        return (
            <table>
                <tbody>
                <StatisticLine text="good" value ={props.good} />
                <StatisticLine text="neutral" value ={props.neutral} />
                <StatisticLine text="bad" value ={props.bad} />
                <StatisticLine text="total" value ={props.all} />
                <StatisticLine text="average" value ={props.avg} />
                <StatisticLine text="positive" value ={props.goodPer} unit="%" />
                </tbody>
            </table>
        )
    }
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    let all = good + neutral + bad
    let avg = (good - bad) / all
    let goodPer = (good / all) * 100
    return (
        <div>
            <h3>give feedback</h3>
            <Button text="good" variable={good} set={setGood} />
            <Button text="neutral" variable={neutral} set={setNeutral} />
            <Button text="bad" variable={bad} set={setBad} />
            <h3>statistics</h3>
            <Statistics good={good} neutral={neutral} bad={bad} total={all} avg={avg} goodPer={goodPer} />
        
        </div>
    )
}

export default App
