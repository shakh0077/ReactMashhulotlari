import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // <-- axios import qilindi

function Create() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://6781283e85151f714b099f16.mockapi.io/telegrambot/Students",
        values
      )
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex h-[100vh] justify-center items-center bg-gray-100 ">
      <div className="w-[600px] border bg-white shadow px-16 pt-3 pb-5 rounded-md">
        <h1 className="text-center text-xl font-semibold">Add a User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2 flex flex-col gap-1.5">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="border-2 p-2.5 rounded-md"
              placeholder="Enter Your Name"
              onChange={(e) =>
                setValues({ ...values, name: e.target.value })
              }
            />
          </div>
          <div className="mb-2 flex flex-col gap-1.5">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="border-2 p-2.5 rounded-md"
              placeholder="Enter Your Email"
              onChange={(e) =>
                setValues({ ...values, email: e.target.value })
              }
            />
          </div>
          <div className="mb-2 flex flex-col gap-1.5">
            <label htmlFor="phone">Number:</label>
            <input
              type="number"
              name="phone"
              className="border-2 p-2.5 rounded-md"
              placeholder="Enter Phone Number"
              onChange={(e) =>
                setValues({ ...values, phone: e.target.value })
              }
            />
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-orange-300 rounded">Submit</button>
            <Link className="px-4 py-2 bg-indigo-300 rounded" to="/">
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
