import App from "./App";
import Login from "./Login";
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

const MainApp = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="/main" element={<App />}></Route>
      </Routes>
    </Router>
  );
};

export default MainApp;
