import React from "react";
// import { Routes, Route, Redi } from "react-router";
import { Link, RouteObject, useRoutes } from "react-router-dom";
import "./App.css";
import { rootRouter } from "./router";



function App() {
  const Outlet = () => {
    const routes = useRoutes(rootRouter);
    return routes;
  }

  return (
    <div>
      <div className="navbar">
        <Link to="/">main</Link>
        <Link to="/profile">profile</Link>
        <Link to="/login">login</Link>
      </div>
      <Outlet/>
    </div>
  );
}

export default App;
