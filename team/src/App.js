import React from "react";
import GlobalStyles from "./GlobalStyles"; // 글로벌 스타일 import
import { Outlet } from "react-router-dom"; // Outlet 컴포넌트 import

function App() {
  return (
    <div className="App">
      <GlobalStyles /> {/* 글로벌 스타일 적용 */}
      {/* *******개선된코드**********
        Outlet 컴포넌트를 사용하여 자식 라우트의 요소를 렌더링한다.
        Outlet은 자식 라우트를 렌더링하는 데 사용된다.
        즉, App.js를 레이아웃으로 사용해서 GlobalStyles를 적용하고
        자식 라우트의 요소를 렌더링하는 구조!!
      */}
      <Outlet />
    </div>
  );
}

export default App;
