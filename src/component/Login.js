import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { getData, getPsw } from "../stores/data";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {
  const [allData, setAllData] = useState([]);
  const [gotData, setgotData] = useState(false);
  const [isLogin, setIsLogin] = useState(2);
  const dispatch = useDispatch();
  const username = useSelector((state) => state.data.value);
  const password = useSelector((state) => state.data.password);
  useEffect(() => {
    const getDatafromServer = async () => {
      const response = await axios.get(
        "https://63285d1c9a053ff9aab61b1a.mockapi.io/users"
      );
      setAllData(response.data);
      setgotData(true);
    };
    getDatafromServer();
  }, [gotData,dispatch]);
  const handleClick = async () => {
    try {
      const user = allData.filter((item) => username === item.name);
      if (password === user[0].password) {
        localStorage.setItem("username", JSON.stringify(username));
        setIsLogin(1);
        dispatch(getData(""));
        dispatch(getPsw(""));
        setTimeout(() => {
          document.getElementById("loginSuccses").click();
        }, 1000);
      } else {
        setIsLogin(0);
      }
    } catch {setIsLogin(0);}
  };

  return (
    <div className="loginAppBody">
      <div className="loginApp">
        <h1>LOGIN</h1>
        <div className="loginInputField">
          <p>Username:</p>
          <input
          value={username}
            onChange={(e) => dispatch(getData(e.target.value.trim()))}
            placeholder="Type your username.."
          ></input>
          <p>Password:</p>
          <input
          type="password"
          value={password}
            onChange={(e) => dispatch(getPsw(e.target.value.trim()))}
            placeholder="Type your password.."
          ></input>
          {isLogin >= 1 ? null : <code>Wrong Username or Password! </code>}
        </div>
        <div className="loginButtons">
        <button onClick={handleClick}>Login</button>
        {isLogin === 1 ? <Link to="/main" id="loginSuccses"></Link> : null}
        <Link to="/createAcc">
          <button>Create Account</button>
        </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
