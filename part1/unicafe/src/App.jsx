const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return props.parts.map((part) => (
    // eslint-disable-next-line react/jsx-key
    <Part name={part.name} exercises={part.exercises} />
  ));
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.parts.reduce((a, {exercises}) => a + exercises, 0)}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
