import App from "./component/App";
import MainPage from "./component/MainPage"
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import CreateAcc from "./component/CreateAcc";

const MainApp = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
        <Route path="/main" element={<App />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/createAcc" element={<CreateAcc/>}></Route>
      </Routes>
    </Router>
  );
};

export default MainApp;
