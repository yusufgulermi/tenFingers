import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement } from "../stores/timer";

var refresh;
var timeIsOn = false;
const Timer = () => {
  const count = useSelector((state) => state.counter.value);
  const timer = useSelector((state) => state.timer.value);
  const dispatch = useDispatch();

  if (count.trim() !== "" && !timeIsOn) {
    timeIsOn = true;
    refresh = setInterval(() => {
      dispatch(decrement());
    }, 1000);
  }
  if (timer === 0) {
    clearInterval(refresh);
    timeIsOn = false;
  }
  
  return <div className="timer">
    {timer}</div>;
};

export default Timer;
