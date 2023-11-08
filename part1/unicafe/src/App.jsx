import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  return total == 0 ? (
    "No feedback given"
  ) : (
    <>
      <Result name="good" value={good} />
      <Result name="neutral" value={neutral} />
      <Result name="bad" value={bad} />
      <Total feedbacks={[good, neutral, bad]} />
      <Average good={good} neutral={neutral} bad={bad} />
      <Positive good={good} neutral={neutral} bad={bad} />
    </>
  );
};

const Result = ({ name, value }) => (
  <div>
    {name} {value}
  </div>
);

const Total = ({ feedbacks }) => (
  <div>all {feedbacks.reduce((a, b) => a + b, 0)}</div>
);

const Average = ({ good, neutral, bad }) => (
  <div>
    average {(good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)}
  </div>
);

const Positive = ({ good, neutral, bad }) => (
  <div>positive {(good / (good + neutral + bad)) * 100}%</div>
);

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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
