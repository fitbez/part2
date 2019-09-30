import React from "react";

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

export default Total;
