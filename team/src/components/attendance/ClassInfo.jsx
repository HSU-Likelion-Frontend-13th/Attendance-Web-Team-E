import React from "react";

export default function ClassInfo({ now }) {
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  let text = "현재 진행 중인 수업이 없어요.";

  if (currentHour === 10 && currentMinute >= 30 || currentHour === 11) {
    text = "UX/UI 지적 재산권 [A] | 10:30~12:00 탐구관 502호";
  } else if (currentHour === 13 && currentMinute >= 30 || currentHour === 14) {
    text = "AI와 HCI [D] | 13:30~15:00 탐구관 508호";
  } else if (currentHour >= 16 && currentHour < 19) {
    text = "영어 커뮤니케이션 [B] | 16:00~19:00 탐구관 502호";
  }

  return (
    <div>
      {text}
    </div>
  );
}
