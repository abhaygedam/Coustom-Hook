import { useState  } from "react";

const useMergeState = (initialState) => {
  const [value, setValue] = useState(initialState);

  const mergeState = newState => {
    if (typeof newState === 'function') newState = newState(value);
    setValue({ ...value, ...newState });
  };

  return [value, mergeState];
};

const initalState = {
  username: "",
  email: "",
  password: "",
} 


function MergeState() {

    const [state, setState] = useMergeState(initalState)
   
  const handleChange = (e) => {
       const { name, value} = e.target;
       setState({ ...state, [name] : value });
    }
  
    const handleAdd = (e) => {
      e.preventDefault();
      console.log(state);
    }
    return (
        <div>
        <form onSubmit={handleAdd}>
            <input type="text" name="username" id="" placeholder="Enter Username" onChange={handleChange} />
            <input type="text" name="email" id="" placeholder="Enter email" onChange={handleChange} />
            <input type="password" name="password" id="" placeholder="Enter password" onChange={handleChange} />
            <input type="submit" name="Add" />
           </form>
        </div>
    );
}

export default MergeState;