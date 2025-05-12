import React from 'react';
import {useNavigate} from 'react-router-dom';


const GotoAttendance = () => {
    let ButtonAttedance = "출석하러 가기";
 return (
    <button
     
     
      style={{
        padding: "10px 18px",
        backgroundColor: "blue",
        color: "white",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      {ButtonAttedance} 
    </button>
  );
}

export default GotoAttendance
