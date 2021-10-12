import { useState, useEffect } from "react";

export function useTimerEffect(sec) {
  const [time, setTime] = useState();
  useEffect(() => {
    let id = setTimeout(() => {
      setTime(true);
    }, sec * 1000);

    return () => clearTimeout(id);
  }, [sec]);
  return time;
}

export const useFetch = (url) =>{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log(url);
        setLoading(true);
        fetch(url)
            .then((d) => d.json())
            .then((x) => {
                setLoading(false);
                console.log(x);
                setData(x.items);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            })
    },[]);

    return { loading, error, data };
}