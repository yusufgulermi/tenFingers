import React from 'react'
import { getData } from "./stores/data";
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const Login = () => {
    const dispatch = useDispatch();
    const getData2 = useSelector((state) => state.data.value);

    const saveUsername =()=>{
      localStorage.setItem("username",JSON.stringify(getData2.trim()))
    }
  return (
    <div className="App">
      <div className="loginApp">
      <p>Test Your Finger Type Your Name and Lets Start!</p>
      <input
        text="text"
        value={getData2}
        onChange={(e) => dispatch(getData(e.target.value.trim()))}
      ></input>
      {(getData2.length > 0 && getData2.length < 11) ?
      <Link to="/main"><button onClick={saveUsername}>Giriş</button></Link>:
      null}
      </div>
      
    </div>
  )
}

export default Login