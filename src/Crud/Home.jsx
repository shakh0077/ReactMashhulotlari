import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get("https://6781283e85151f714b099f16.mockapi.io/telegrambot/Students")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete=(id)=>{
   
    if(confirm){
      axios.delete(`https://6781283e85151f714b099f16.mockapi.io/telegrambot/Students/${id}`)
      .then(res => {
        location.reload()
      }).catch(err => console.log(err)
      )
    }
  }


  return (
    <div className="flex flex-col justify-center h-[100vh] items-center bg-gray-100 ">
      <h1 className="mt-5 text-3xl font-serif font-semibold">List of Users</h1>
      <div className="  px-10  rounded  bg-white  border shadow-lg my-5 py-5">
        <div className="flex justify-end ">
          <Link
            className="bg-green-500 py-2 px-3.5 rounded-md text-white"
            to={"/create"}
          >
            Add +
          </Link>
        </div>
        <table>
          <thead className="text-left">
            <tr>
              <th className="px-3.5">Id</th>
              <th className="px-3.5">Name</th>
              <th className="px-3.5">Email</th>
              <th className="px-3.5">Phone</th>
              <th className="px-3.5">Action</th>
            </tr>
          </thead>

          <tbody className="text-left">
            {data.map((d, i) => (
              <tr key={i}>
                <td className="px-3.5">{d.id}</td>
                <td className="px-3.5">{d.name}</td>
                <td className="px-3.5">{d.email}</td>
                <td className="px-3.5">{d.phone}</td>
                <td className="flex gap-2 px-3.5">
                  <Link to={`/read/${d.id}`} className="bg-indigo-400 py-2 px-3.5 rounded-md text-gray-900">
                    Read
                  </Link>
                  <Link to={`/update/${d.id}`} className="bg-cyan-400 py-2 px-3.5 rounded-md text-gray-900">
                    Edit
                  </Link>
                  <button onClick={(e)=>handleDelete(d.id)} className="bg-red-500 py-2 px-3.5 rounded-md text-gray-900 ">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

}

export default Home;
