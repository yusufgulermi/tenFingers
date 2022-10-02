import React from "react";
import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <div className="App">
      <div className="mainPage">
        <p>Test Your Finger Login and Lets Start!</p>
        <div>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/createAcc">
            <button>Create Account</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
