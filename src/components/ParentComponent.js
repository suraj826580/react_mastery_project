import React, { useCallback, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

const ParentComponent = () => {
  const [age, setage] = useState(25);
  const [salary, setsalary] = useState(30000);

  const increamentAge = useCallback(() => {
    setage(age + 1);
  }, [age]);

  const increamentSalary = useCallback(() => {
    setsalary(salary + 1000);
  }, [salary]);

  return (
    <>
      <Title />
      <Count text="age" count={age} />
      <Button handleClick={increamentAge}> Increament Age </Button>
      <Count text="salary" count={salary} />
      <Button handleClick={increamentSalary}> Increament Salary </Button>
    </>
  );
};

export default ParentComponent;
// -----------------------------------

// git config --global user.email "you@example.com"
// git config --global user.name "Your Name"