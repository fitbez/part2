import React from "react";

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

export default Course;
