import { useEffect, useState } from "react";

function Card () {
  const [students, setStudents] = useState([])


  useEffect(()=>{
    fetch("https://6781283e85151f714b099f16.mockapi.io/telegrambot/Students")
    .then((res)=>res.json())
    .then((data)=>setStudents(data))
    .catch((error)=>console.log(error.massage));
  },);
  
    return (
      <>
      <div className="flex mx-10 text-center my-5 gap-5">
      { students?.map(v=> <div key={v.id}>
          <h2 className="text-center font-semibold text-2xl">{v.name}</h2>
          <img src={v.avatar} alt="rasmlar" />
          <h1>{v.id}</h1>
          <p>{v.createdAt}</p>
        </div>)}
      </div>
      </>
    );
  }
  
  export default Card;
  