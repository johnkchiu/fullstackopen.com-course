const Course = ({ course }) => (
  <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
);

const Header = ({name}) => {
  return <h1>{name}</h1>;
};

const Content = ({parts}) => {
  return parts.map((part) => (
    // eslint-disable-next-line react/jsx-key
    <Part key={part.id} name={part.name} exercises={part.exercises} />
  ));
};

const Part = ({name, exercises}) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Total = ({parts}) => {
  return (
    <p>
      <b>
        total of {parts.reduce((a, { exercises }) => a + exercises, 0)}{" "}
        exercises
      </b>
    </p>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;