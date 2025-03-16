import { useEffect, useState } from "react"

const Contaxt = () => {
  const[count,setCounter] = useState(0);
  const [data,setData] = useState([]);
  useEffect(()=>{
    fetch('https://6781283e85151f714b099f16.mockapi.io/telegrambot/Students')
    .then(response => response.json())
    .then(res => setData(res));
  },[])
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>setCounter(count+1)}>Oybek</button>
    <br />
    {
      data?.map(v=><div key={v.id} >{v.id}{v.name}{v.like?"💖":"🖤"} </div>)
    }
    </>
  )
}

export default Contaxt