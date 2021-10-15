import { useEffect, useState } from "react"
import { useFetch } from "../customHook";



export const Github = () => {
  
  
        const { loading, error, data } = useFetch(`https://api.github.com/search/users?q=masai&per_page=8`);
        console.log("data", data);
   
   
    return loading ? "Loading" : error ? "Error" : (
        <div>
           
            {
                data.map((e) => {
                    return <div style={{height:"100px", width:"100px", margin:"auto"}}>
                        <h4>{e.login}</h4>
                        <img src={e.avatar_url} alt="" style={{height:"70px", width:"70px"}} />
                    </div>
                })
           }
        </div>
    )
}