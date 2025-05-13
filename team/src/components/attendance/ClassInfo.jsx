import React from "react";

const courseData = {
  A: {
    name: "UX/UI 지적 재산권 [A]",
    time: "10:30~12:00",
    place: "탐구관 502호",
  },
  D: {
    name: "AI와 HCI [D]",
    time: "13:30~15:00",
    place: "탐구관 508호",
  },
  B: {
    name: "영어 커뮤니케이션 [B]",
    time: "16:00~19:00",
    place: "탐구관 502호",
  },
};

export default function ClassInfo({ course }) {
  const info = courseData[course];

  if (!info) {
    return <div>현재 진행 중인 수업이 없어요.</div>;
  }

  return (
    <div>
      <strong>{info.name}</strong> | {info.time}
      <br />
      <span style={{ color: "#888" }}>{info.place}</span>
    </div>
  );
}
