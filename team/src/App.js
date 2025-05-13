import React from "react";
import GlobalStyles from "./GlobalStyles"; // 글로벌 스타일 import
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles /> {/* 글로벌 스타일 적용 */}
      <Outlet />
    </div>
  );
}

export default App;
