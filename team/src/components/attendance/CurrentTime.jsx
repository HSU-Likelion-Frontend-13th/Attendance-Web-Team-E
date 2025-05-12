import React from "react";


export default function CurrentTime({ now }) { //now 값을 props로 받아옴
  return (
    <div>
      <h3>현재 시간: {now.toLocaleTimeString()}</h3>
    </div>
  );
}
