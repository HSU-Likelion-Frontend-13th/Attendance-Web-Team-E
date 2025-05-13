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
