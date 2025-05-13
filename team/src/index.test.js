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

// 문제2. App.js에서 GlobalStyles를 사용하고 있으나
// index.js에서 app.js를 사용하고 있지 않기때문에
// GlobalStyles가 적용되지 않는다.
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    // 이건 문제는 아니고 피드백인데 보통 "/"는 시작페이지의 경로이다.
    // 그래서 "/"와 "/login"을 중복하지 않고 디자인명세서대로 시작화면인
    // "LoginPage"를 "/" 주소로 사용하는게 좋다.
    // (굳이 "/login"이 필요없다는 뜻!!)
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/main",
    element: <MainPage />,
  },

  {
    path: "/time",
    element: <TimePage />,
  },

  {
    path: "/timetable",
    element: <TimetablePage />,
  },

  {
    path: "/timetable/:id",
    element: <TableItem />,
  },

  {
    path: "*", // 모든 경로를 나타낸다
    element: <NotFoundPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
