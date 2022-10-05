import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const getData2 = useSelector((state) => state.data.value);
  const handleWeb = () => {
    localStorage.setItem("username", JSON.stringify(""));
    setTimeout(() => {
      window.location.reload();
    }, 100);
    console.log(getData2);
  };
  return (
    <div className="header">
      {getData2 === "" ? (
        <div>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/createAcc">
            <button>Create Account</button>
          </Link>
        </div>
      ) : (
        <div>
          <h1>{getData2}</h1>
          <Link to="/">
            <button onClick={handleWeb}>Log Out</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
