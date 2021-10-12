import { useEffect, useState, useReducer } from "react";
import axios from "axios";


 
export const Todo = () => {

    const [text, setText] = useState();
    const [data, setData] = useState([]);

    useEffect(() => {
        handleGetTodo();
    }, []);
    
    const reducer = (state, { type, payload }) => {
    switch (type) {
      case "ADD_TODO":
        return {
          ...state,
          todo: [{payload}]
        }
      default:
        return {
          state
        }
    }
  }

    const handleAddTodo = async () => {
        try {
            const res = await axios.post("http://localhost:3003/todos", {
                tittle: text,
            });
            console.log(res.data);
            dispatch({type:"ADD_TODO", payload: res.data})
             handleGetTodo();
        }
        catch (e) {
            console.log(e.message);
        }
        setText("");
    }

     const handleGetTodo = async () => {
         try {
            const res = await axios.get("http://localhost:3003/todos");
             setData(res.data);
        }
        catch (e) {
           console.log(e.message);
        }
    }

    const initState = {
       todos:[],
    }
    const [state, dispatch] = useReducer(reducer, initState);
   
    return (
        <div>
            <input value={text} type="text" onChange={(e) => {
                setText(e.target.value);
            }} placeholder="Enter Todo" />
            <button onClick={handleAddTodo}>Add Todo</button>

            {
                data.map((e) => {
                    return (
                        <div>{e.tittle}</div>
                    )
                })
            }
        </div>
    );
}

