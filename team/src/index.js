import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom"; // Navigate 컴포넌트 import
import App from "./App";
import LoginPage from "./pages/login/LoginPage";
import MainPage from "./pages/main/MainPage";
import TimePage from "./pages/timetable/TimePage";
import TimetablePage from "./pages/timetable/TimetablePage";
import TableItem from "./pages/timetable/TableItem";
import NotFoundPage from "./pages/NotFoundPage";
import GotoAttendance from "./pages/attendance/GotoAttendance";
import AttendancePage from "./pages/attendance/AttendancePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App 컴포넌트 렌더링
  
    children: [
      { path: "/", element: <Navigate to="/login" replace /> }, // 기본 경로에서 "/login"으로 리다이렉트
      { path: "login", element: <LoginPage /> }, // "/login"
      { path: "main", element: <MainPage /> }, // "/main"
      { path: "time", element: <TimePage /> }, // "/time"
      { path: "timetable", element: <TimetablePage /> }, // "/timetable"
      { path: "timetable/:id", element: <TableItem /> },
      { path: "*", element: <NotFoundPage /> }, // 와일드카드
      { path: "attendance", element: <AttendancePage /> }, // "/attendance"
      { path: "goto-attendance", element: <GotoAttendance /> },  //출석하러가기 누르는 페이지
      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
