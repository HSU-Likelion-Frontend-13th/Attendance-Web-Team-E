<<<<<<< HEAD
import React from 'react';
import { Link } from "react-router-dom";


=======
import React from "react";
import GlobalStyles from "./GlobalStyles"; // 글로벌 스타일 import
import { Outlet } from "react-router-dom";
>>>>>>> 26a72b0e90a4255aba70025b4241bab33d4987fd

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      
      {/* Add your routes here */}
=======
      <GlobalStyles /> {/* 글로벌 스타일 적용 */}
      <Outlet />
>>>>>>> 26a72b0e90a4255aba70025b4241bab33d4987fd
    </div>
  );
}

export default App;
