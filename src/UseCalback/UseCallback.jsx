import React, { useCallback, useState } from 'react'

const UseCallback = () => {
    const [data,setData] = useState(0)
    const increment = useCallback(()=>{
        setData((prev)=>prev+1)
    },[])
    const may = useCallback(()=>{
        setData((prev)=>prev-1)
    },[])
    const Tungi = useCallback(()=>{
        setData((prev)=>prev=0)
    },[])
  return (
    <>
    <h1>{data}</h1>
    <button onClick={increment}>Qoshish</button>
    <button onClick={may}>Ayirish</button>
    <button onClick={Tungi}>Reset</button>
    </>
  )
}

export default UseCallback