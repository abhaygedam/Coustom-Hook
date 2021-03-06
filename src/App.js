import './App.css';
import { useEffect, useReducer, useState } from "react";
import Timer from './Components/Timer';
import Throttlefun from './Components/Throttle';
import { Github } from './Components/Github';
import { Todo } from "./Components/Todo";
import MergeState from './Components/mergeState';

function App() {
  const [age, setAge] = useState(0);

  const reducer = (state, { type, payload }) => {
    switch (type) {
      case "ADD_COUNT":
        return {
          ...state,
          count: state.count + payload
        }
      default:
        return {
          state
        }
    }
  }

  const initState = {
    count: 10,
  }

  function Debounce(delay,) {
     
  }

  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div className="App">

      {/* Your age is : {state.count}
      <br/><br/>
      <button onClick={() => {
        dispatch({type:"ADD_COUNT", payload: 1})
      }}>Add 1</button> */}

      {/* <MergeState></MergeState> */}
      {/* <Todo></Todo> */}
      <Throttlefun></Throttlefun>
      {/* <Timer></Timer> */}
      {/* <Github></Github> */}
    </div>
  );
}

export default App;
