const Course = ({ course }) => (
  <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
);

const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Content = ({ parts }) => {
  return parts.map((part) => (
    <Part key={part.id} name={part.name} exercises={part.exercises} />
  ));
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Total = ({ parts }) => {
  return (
    <p>
      <b>
        total of {parts.reduce((a, { exercises }) => a + exercises, 0)}{" "}
        exercises
      </b>
    </p>
  );
};

export default Course;
