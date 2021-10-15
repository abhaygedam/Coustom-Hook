import { useState } from "react";
import axios from "axios";
import "./style.css";
import { Throttle } from 'react-throttle';
import Result from "./Result";
import { TextField } from "@mui/material";



function Throttlefun() {
    const [text, setText] = useState("");
    const [data, setData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);


    const handleTrottle = async (e) => {
        setText(e.target.value);
        console.log(text);
        setTimeout(async () => {
             await axios.get(`http://localhost:3003/city?q=${text}`)
            .then((res) => {
                console.log(res.data);
                setData(res.data);
                setIsOpen(true);
            }).catch((err) => {
                console.log(err.message);
            });
        },[2000])
    }

    const handleClick = (e) => {
        console.log(e);
        return (
            <h2 style={{marginTop:"500px"}}>{e.country}</h2>
        )
    }

    return (
        <div>
           
                <TextField id="standard-basic" label="Standard" variant="standard"  type="text" placeholder="Search type" onChange={handleTrottle}/>
          
            <div className={`${isOpen ? `box` : `boxClose`}`}>
                {
                    data.map((e) => {
                        return (
                            <p className="result" onClick={(e) => { handleClick(e) }
                            }>{e.country}</p>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Throttlefun;