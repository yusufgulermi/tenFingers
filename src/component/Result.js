import React from 'react'
import { useSelector } from 'react-redux'
import Data from './Data';

const Result = ({allData,setAllData}) => {
  const cor = useSelector((state) => state.correctCount.value);
  const inCor = useSelector((state) => state.inCorrectCount.value);
  const keyCount= useSelector((state)=> state.keystrokes.value)
  const wpm=keyCount / 5; 
  return (
    <div className='result'>
      <h1>Result</h1>
      <span>{wpm} WPM</span>
      <span>Keystrokes  <p>{keyCount}</p></span>
      <span>Correct Word  <p>{cor}</p></span>
      <span>Incorrect Word  <p>{inCor}</p></span>
      <Data allData={allData} setAllData={setAllData}/>
    </div>
  )
}

export default Result