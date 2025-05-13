import React from "react";
import { Link } from "react-router-dom";

import GlobalStyles from "./GlobalStyles"; // 글로벌 스타일 import
import TableItem from "./pages/timetable/TableItem"; // TableItem 컴포넌트 import

function App() {
  return (
    <div className="App">
      {/* Link 삭제는 다예가 잘 수정한 부분! */}
      <Link to="/login">Login</Link>
      {/* 문제1. 글로벌 스타일을 사용하는 위치는 app.js이다. */}
      <GlobalStyles />
      {/* TableItem 삭제는 다예가 잘 수정한 부분! */}
      <TableItem />
    </div>
  );
}

export default App;

// 다예 변경 사항
// import React from "react";
// import { Link } from "react-router-dom";

// function App() {
//   return <div className="App">{/* Add your routes here */}</div>;
// }

// export default App;
