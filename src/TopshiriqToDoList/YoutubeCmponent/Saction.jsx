import React, { useEffect, useState } from 'react'
import { AiFillAppstore, AiOutlineBell } from 'react-icons/ai'
import { FaMicrophoneLines } from 'react-icons/fa6'
import { IoSearchOutline } from 'react-icons/io5'
import { RiVideoUploadLine } from 'react-icons/ri'
import Photo1 from "./Imlar/Photo.svg"

const navbar = [
    {id:1 , name:"All"},
    {id:2 , name:"Cook Studio"},
    {id:3 , name:"UX"},
    {id:4 , name:"Case Study"},
    {id:5 , name:"Music"},
    {id:6 , name:"Tour"},
    {id:7 , name:"Saintmartin"},
    {id:8 , name:"Tech"},
    {id:9 , name:"iPhone 13"},
    {id:10, name:"Vedeo Live"},
    {id:11, name:"Content"},
]

const Saction = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('https://6781283e85151f714b099f16.mockapi.io/telegrambot/Students')
      .then(response => response.json())
      .then((res) => setData(res))
    },[])
  return (
    <>
    <div className='w-[1150px] py-4  bg-[#181818]'>
        <div className='flex justify-between items-center mb-2 '>
            <div className='pl-[130px] flex items-center gap-1 '>
            <input className='bg-[#323232] text-white  w-[478px]  px-4 h-9' type="text" placeholder='Search' />
            <button className='flex justify-center items-center w-14 h-9   bg-[#383838]'><IoSearchOutline className='text-white' /></button>
            <button className='flex justify-center items-center w-9 h-9'><FaMicrophoneLines className='text-white' /></button>
            </div>
            <div className='flex items-center gap-6 text-white px-8'>
            <RiVideoUploadLine />
            <AiFillAppstore />
            <AiOutlineBell />
            <img src={Photo1} className='w-7 h-7' alt="Rasmlar" />
            </div>
        </div>
        <div className='py-[1px] mx-5 bg-[#383838]'></div>
        <div className='text-white flex gap-3 my-3 pl-5'>
            {navbar.map(v=> <div key={v.id}>
                <button className='bg-[#383838] px-3 py-2 rounded-2xl'>{v.name}</button>
            </div>)}
        </div>
        <div className='py-[1px] mx-5 bg-[#383838]'></div>



        <div className='grid text-white grid-cols-4 gap-4 px-6 py-5'>
            {
                data?.map(v=><div key={v.id} className='flex w-[242px] flex-col gap-2.5'>
                    <img className='h-[136px] overflow-scroll' src={v.avatar} alt="rasm" />
                    <div className='flex gap-2.5 '>
                        <img className='w-8 h-8 rounded-full' src={v.avatar} alt="rasm" />
                        <h3 className='pl-2'>{v.createdAt}</h3>
                    </div>
                    <div className='text-gray-400 text-base leading-4 px-11'>
                        {v.title}
                    </div>
                </div>)
            }
        </div>
    </div>
    </>
  )
}

export default Saction