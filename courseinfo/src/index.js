import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Course = ({ courses }) => {
  //   console.log(course);
  const part = courses.parts.map(item => (
    <li key={item.id}>
      {item.name} {item.exercises}
    </li>
  ));
  //   console.log(part);
  return (
    <div>
      <h2>{courses.name}</h2>
      <div>{part}</div>
    </div>
  );
};

const Total = ({ parts }) => {
  //   console.log(parts);
  const total = parts.reduce(
    (s, p) => {
      return s + p.exercises;
    },

    0
  );
  console.log(total);
  return (
    <div>
      <div>
        <b> total of {total} exercises</b>
      </div>
    </div>
  );
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2
        }
      ]
    }
  ];
  return (
    <div>
      <Course courses={courses[0]} />
      <Total parts={courses[0].parts} />
      <Course courses={courses[1]} />
      <Total parts={courses[1].parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
