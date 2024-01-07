import React from "react";

function Title({ children }) {
  console.log("Title");
  return <div>{children}</div>;
}

export default React.memo(Title);
