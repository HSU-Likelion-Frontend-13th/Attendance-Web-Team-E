import React from "react";

export default function AttendanceButton({ status, onClick }) {
  let ButtonName = "";

  if (status === "before") ButtonName = "새로고침";
  else if (status === "after" || status === "absent") ButtonName = "결석처리";
  else if (status === "late") ButtonName = "지각처리";
  else if (status === "onTime") ButtonName = "정상출석";

  return (
    <button
      onClick={onClick}
      disabled={status === "before" || status === "after" || status === "absent"}
      style={{
        padding: "10px 18px",
        backgroundColor: "blue",
        color: "white",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      {ButtonName} 
    </button>
  );
}
