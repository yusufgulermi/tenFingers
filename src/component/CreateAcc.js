import React, { useEffect } from "react";
import { getData, getConfirmPsw, getPsw } from "../stores/data";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

var usernameCheck = true;
var passwordCheck = true;
var usernameCont = true;
var passwordCont = true;
var success=false;
const CreateAcc = () => {
  const [allData, setAllData] = useState([]);
  const [gotData, setgotData] = useState(false);
  const dispatch = useDispatch();
  const username = useSelector((state) => state.data.value);
  const password = useSelector((state) => state.data.password);
  const confirmPassword = useSelector((state) => state.data.confirmPassword);
  useEffect(() => {
    dispatch(getData(""));
    dispatch(getPsw(""));
    dispatch(getConfirmPsw(""));
    usernameCheck = true;
    passwordCheck = true;
    usernameCont = true;
    passwordCont = true;
    success=false;
  }, [dispatch]);
  useEffect(() => {
    const getDatafromServer = async () => {
      const response = await axios.get(
        "https://63285d1c9a053ff9aab61b1a.mockapi.io/users"
      );
      setAllData(response.data);
      setgotData(true);
    };
    getDatafromServer();
  }, [gotData]);
  if(username !==""){
    success=false
  }
  const handleClick = async () => {
    if (password.length > 3 && password.length < 13) {
      passwordCont = true;
    } else {
      passwordCont = false;
      setgotData(false);
    }
    if (username.length > 3 && username.length < 9) {
      usernameCont = true;
    } else {
      usernameCont = false;
      setgotData(false);
    }
    
    if (usernameCont && passwordCont) {
      const checkingUsername = allData.some((item) => item.name === username);
      if (checkingUsername === false) {
        usernameCheck = true;
      } else if (checkingUsername === true) {
        usernameCheck = false;
        setgotData(false);
      }
      if (password === confirmPassword) {
        passwordCheck = true;
      } else if (password !== confirmPassword) {
        setgotData(false);
        passwordCheck = false;
      }
      if (usernameCheck && passwordCheck) {
        dispatch(getData(""));
        dispatch(getPsw(""));
        dispatch(getConfirmPsw(""));
        await axios.post("https://63285d1c9a053ff9aab61b1a.mockapi.io/users", {
          name: username,
          password: password,
        });
        setgotData(false);
        success=true;
      }
    }
  };

  return (
    <div className="createAccBody">
      <div className="createAcc">
        <h1>Create Account</h1>
        <div className="createAccInputField">
          <p>Username:</p>
          <input
            value={username}
            onChange={(e) => dispatch(getData(e.target.value.trim()))}
            placeholder="Type Username.."
          ></input>
          {usernameCheck ? null : <code>This Username Already Taken!</code>}
          {usernameCont ? null : <code>Username length must be 4-8! </code>}
          <p>Password:</p>
          <input
            type="password"
            value={password}
            onChange={(e) => dispatch(getPsw(e.target.value.trim()))}
            placeholder="Type Password.."
          ></input>
          {passwordCheck ? null : <code>The Password Not Match!</code>}
          {passwordCont ? null : <code>Password length must be 4-12! </code>}
          <p>Confirm Password:</p>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => dispatch(getConfirmPsw(e.target.value.trim()))}
            placeholder="Confirm Password.."
          ></input>
          {success ?<code>Your Account Created!</code>:null}
        </div>
        <div className="createAccButtons">
          <button onClick={handleClick}>Create Account</button>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateAcc;
