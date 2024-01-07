import React from "react";

function Button({ no, handleCount }) {
  return (
    <div>
      <button onClick={handleCount}>Add Count {no}</button>
    </div>
  );
}

export default React.memo(Button);
