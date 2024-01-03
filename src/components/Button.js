import React from "react";

function Button({ no, handleCount }) {
  console.log(handleCount);
  return (
    <div>
      <button onClick={handleCount}>Add Count {no}</button>
    </div>
  );
}

export default React.memo(Button);
