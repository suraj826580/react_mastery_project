import React from "react";

function ChildCompo() {
  console.log("Child");
  return <div>ChildCompo</div>;
}

export default React.memo(ChildCompo);
