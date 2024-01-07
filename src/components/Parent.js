import React, { useState } from "react";
import Title from "./Title";
import ChildCompo from "./ChildCompo";
import Button from "./Button";

function Parent() {
  const [handleCount1, sethandleCount1] = useState(0);
  const [handleCount2, sethandleCount2] = useState(0);

  const fn1 = React.useCallback(() => {
    sethandleCount1(handleCount1 + 1);
  }, [handleCount1]);
  const fn2 = React.useCallback(() => {
    sethandleCount2(handleCount2 + 1);
  }, [handleCount2]);

  return (
    <div>
      <Title>Parent Comp</Title>
      <ChildCompo handleCount1={handleCount1} />
      <Button handleCount={fn1} no={handleCount1} />
      <ChildCompo handleCount2={handleCount2} />
      <Button handleCount={fn2} no={handleCount2} />
    </div>
  );
}

export default Parent;
