import React from 'react';
import { Link } from "react-router-dom";

import GlobalStyles from './GlobalStyles'; // 글로벌 스타일 import
import TableItem from './pages/timetable/TableItem'; // TableItem 컴포넌트 import

function App() {
  return (
    <div className="App">
      <Link to="/login">Login</Link>
        
        <GlobalStyles /> {/* 글로벌 스타일 적용 */}
      <TableItem />
      {/* Add your routes here */}
    </div>
  );
}

export default App;
