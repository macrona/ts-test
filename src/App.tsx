import React from "react";
// import { Routes, Route, Redi } from "react-router";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import {isLogined} from './utils/auth'
import "./App.css";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Profile from "./pages/Profile";

function App() {
  
  const routes = useRoutes([
    {
      path: "/",
      element: isLogined() ? <Main/> : <Navigate to='/login' />,
      children: [
        {
          path: "/profile",
          element: <Profile />,
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    
  ]);

  return (
    <div>{routes}</div>
  );
}

export default App;
