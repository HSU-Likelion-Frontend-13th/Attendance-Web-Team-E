import React from "react";

export default function AttendanceButton({ status, onClick }) {
  let ButtonName = "";

  if (status === "before") ButtonName = "새로고침";
  else if (status === "after" || status === "absent") ButtonName = "결석처리";
  else if (status === "late") ButtonName = "지각처리";
  else if (status === "noClass") ButtonName = "새로고침";
  else if (status === "onTime") ButtonName = "정상출석";

  return (
    <button
      onClick={onClick}
      disabled={ status === "after" || status === "absent"}
      style={{
        padding: "20px 25px",
        backgroundColor: "blue",
        color: "white",
        borderRadius: "15px",
        cursor: "pointer",
        fontSize: "20px",
      }}
    >
      {ButtonName} 
    </button>
  );
}
