import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Header = () => {

const getData2 = useSelector((state) => state.data.value);
const handleWeb =()=>{
    setTimeout(()=>{
        window.location.reload()
    },100)
}
  return (
    <div className='header'>
        <div><h1>{getData2}</h1>
        <Link to="/"><button onClick={handleWeb}>Log Out</button></Link></div>
        
    </div>
  )
}

export default Header