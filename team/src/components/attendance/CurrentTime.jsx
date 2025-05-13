import React from "react";


export default function CurrentTime({ now }) { //now 값을 props로 받아옴
  return (
    <div>
      <h3>{now.toLocaleDateString()} {now.toLocaleTimeString()}</h3>
      
      
    </div>
  );
}
