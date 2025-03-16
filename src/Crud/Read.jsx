import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Read() {
  const [data, setData] = useState([])
  const{id} = useParams();

  useEffect(() => {
    axios
      .get(`https://6781283e85151f714b099f16.mockapi.io/telegrambot/Students/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='flex  h-[100vh]  justify-center items-center  bg-gray-100  '>
      <div className='w-[600px] border bg-white shadow px-5 py-5 rounded-md'>
        <h3 className='font-semibold text-xl text-center'>Datails of User </h3>
        <div className='mb-3 flex gap-3'>
          <strong>Name:</strong>
          <h4 className='font-medium'>{data.name}</h4>
        </div>
        <div className='mb-3 flex gap-3'>
          <strong>Email:</strong>
          <h4 className='font-medium'>{data.email}</h4>
        </div>        
        <div className='mb-3 flex gap-3'>
          <strong>Phone:</strong>
          <h4 className='font-medium'>{data.phone}</h4>
        </div>
        <Link className='bg-yellow-600 border-2 text-gray-100 py-2 px-3 rounded-md' to={`/update/${id}` }> Edit  </Link>
        <Link className='bg-cyan-500 border-2 ml-3 text-gray-100  py-2 px-3 rounded-md' to={"/"}> Back  </Link>
      </div>
    </div>
  )
}

export default Read