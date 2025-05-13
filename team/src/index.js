import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import LoginPage from "./pages/login/LoginPage";
import MainPage from "./pages/main/MainPage";
import TimePage from "./pages/timetable/TimePage";
import TimetablePage from "./pages/timetable/TimetablePage";
import TableItem from "./pages/timetable/TableItem";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // 레이아웃
    // App.js를 레이아웃으로 사용하고
    // GlobalStyles를 적용하고 자식 라우트의 요소를 렌더링하는 구조로
    // children을 사용한다.
    // 즉, children 자리에
    // LoginPage, MainPage, TimePage, TimetablePage, TableItem가
    // 갈아끼워진다(?)고 생각하면 편하다!!
    // ******꿀팁!!*******
    // 이 방법을 잘 사용하면 header, footer, sidebar 등
    // 공통적으로 사용되는 레이아웃을 만들 수 있겠죠??
    children: [
      { path: "login", element: <LoginPage /> }, // "/login"
      { path: "main", element: <MainPage /> }, // "/main"
      { path: "time", element: <TimePage /> }, // "/time"
      { path: "timetable", element: <TimetablePage /> }, // "/timetable"
      { path: "timetable/:id", element: <TableItem /> },
      { path: "*", element: <NotFoundPage /> }, // 와일드카드
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
