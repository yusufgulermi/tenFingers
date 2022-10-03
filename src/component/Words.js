import React, { useEffect } from "react";
import Timer from "./Timer";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../stores/counter";
import { incrementInCor, incrementInCorRes } from "../stores/inCorrectCount";
import { incrementCor, incrementCorRes } from "../stores/correctCount";
import { getStrokes } from "../stores/keystrokes";
import { getData } from "../stores/data";

var words = ["move","make","so","example","than","sometimes","with","for",
"always","does","it's","family",
"have","earth","may","use","along","say","children","begin","river",
"after","can","question","night","are","or",
"face","start","kind","almost","talk","her","paper","all","above","even",
"boy","no","enough","what","go","book","live",
"way","large","still","second","there","leave","feet",
"sound","into","other","that","word","carry","had","their","got",
"came","country","took","mother","land","tree","then","write","plant","is",
"point","found","into","learn","been","just","America",
"Indian","state","change","same","four",
"tell","city","place","sentence","without","know","food","much",
"end","list","house","own","study","our","see","boy","saw",
"about","read","need","quite","father","also","long","ask","around",
"where","come","line","might","under","begin","animal","thing",
"small","school","mountain","walk","run","life","different",
"something","thought","head","answer","near","over","until",
"don't","who","them","together","mile","soon",
"eat","down","could","water","build","building","muscle","grow",
"box","side","between","should","picture","really"];
var length = words.length;
var firstCounter = 0;
var oldCounter = 0;
var code;
const Words = () => {
  const count = useSelector((state) => state.counter.value);
  const timer = useSelector((state) => state.timer.value);
  const dispatch = useDispatch();

  const resetHandle = () => {
    window.location.reload()
  };
 
 
  useEffect(() => {
    document.addEventListener('keydown', event => {
      code=event.code;
    })
    const getUsername=JSON.parse(localStorage.getItem("username"))
    dispatch(getData(getUsername))
    dispatch(incrementInCorRes(0));
    dispatch(incrementCorRes(0));
    let temp = words;
    words = [];
    for (let i = 0; i < length; i++) {
      let randomNumbers = Math.floor(Math.random() * temp.length);
      words.push(temp[randomNumbers]);
      temp.splice(randomNumbers, 1);
    }
    temp = words;
  }, [dispatch]);

  const arrayCheck = (word1, word2) => {
    try {
      for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) {
          return false;
        }
      }
      return true;
    } catch {
      return false;
    }
  };
  if (timer === 0) {
    document.getElementById("input1").disabled = true;
  }
  useEffect(() => {
    if (code==="Space") {
      dispatch(increment(""));
    }
    if (count.trim() !== "" && code==="Space") {
      if (words[firstCounter].trim() !== count.trim()) {
        document.getElementById(firstCounter).classList.add("incorrect");
        dispatch(incrementInCor());
      } else if (words[firstCounter].trim() === count.trim()) {
        document.getElementById(firstCounter).classList.add("correct");
        dispatch(incrementCor());
        dispatch(getStrokes(words[firstCounter].length))
      }
      oldCounter = firstCounter;
      firstCounter += 1;
      dispatch(increment(""));
      if(firstCounter===words.length){
        oldCounter = 0;
        firstCounter = 0;

      }
    }
  }, [count, dispatch]);

  useEffect(() => {
    document.getElementById(oldCounter).classList.remove("current");
    document.getElementById(firstCounter).classList.add("current");
  }, [count]);

  useEffect(() => {
    if (count.trim() === "") {
      document.getElementById(firstCounter).classList.remove("incorrect");
    }
    !arrayCheck(count, words[firstCounter])
      ? document.getElementById(firstCounter).classList.add("incorrect")
      : document.getElementById(firstCounter).classList.remove("incorrect");
  }, [count]);

  return (
    <div className="allWords">
      <div id="words" className="words">
        {words.map((item, index) => (
          <p key={index} id={index}>
            {item}
          </p>
        ))}
      </div>
      <div className="input-field">
        <input
          id="input1"
          value={count}
          onChange={(e) => dispatch(increment(e.target.value))}
        ></input>
        <Timer />
        <button className="rst-btn" onClick={resetHandle}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Words;
