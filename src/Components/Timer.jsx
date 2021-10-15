
import { useEffect, useState } from "react";
import {useTimerEffect} from "../customHook"

function useTimer(sec) {
  const [time, setTime] = useState();
  setTimeout(() => {
    setTime(true);
  }, sec * 1000);
  return time;
}



function Timer() {

  const [hide, setHide] = useState(false);
  const timer = useTimerEffect(5);
  
  return (
    <div className="App">
      {hide ? "" : timer ? "welcome" : "Loading...."}
      <button onClick={()=>{setHide(!hide)}}>Hide</button>
    </div>
  );
}

export default Timer;
