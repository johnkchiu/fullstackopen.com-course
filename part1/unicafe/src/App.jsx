import { useState } from "react";

const Button = ({onClick, text}) =>
  <button onClick={onClick}>{text}</button>

const Result = ({name, value}) => <div>{name} {value}</div>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        onClick={() => {
          setGood(good + 1);
        }}
        text={"good"}
      />
      <Button
        onClick={() => {
          setNeutral(neutral + 1);
        }}
        text={"neutral"}
      />{" "}
      <Button
        onClick={() => {
          setBad(bad + 1);
        }}
        text={"bad"}
      />
      <h1>statistics</h1>
      <Result name="good" value={good} />
      <Result name="neutral" value={neutral} />
      <Result name="bad" value={bad} />
    </div>
  );
};

export default App;
