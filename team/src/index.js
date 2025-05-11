import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import LoginPage from './pages/login/LoginPage';
import MainPage from './pages/main/MainPage';
import TimePage from './pages/timetable/TimePage';
import TimetablePage from "./pages/timetable/TimetablePage";
import TableItem from"./pages/timetable/TableItem";
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

