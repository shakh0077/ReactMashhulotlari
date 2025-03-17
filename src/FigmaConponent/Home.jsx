import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { IoSearch } from 'react-icons/io5'
import Oybek from './Imglar/Oybek.jpg'

const Home = () => {
  return (
    <>
    <div className='bg-[#F9F1E7]'>
    <div className=' mx-auto px-5 bg-[#F9F1E7] lg:w-[1440px]'>
        <div className='px-25 py-10   gap-12 justify-between items-center md:flex   '>
            <h1 className='text-black font-bold text-2xl'>Funiro.</h1>
            <div className='flex gap-10 items-center '>
                <select className='bg-transparent text-[#3A3A3A]'>
                    <option value="products">Products</option>
                    <option value="rooms">Rooms</option>
                    <option value="inspirations">Inspirations</option>
                </select>
                <select className='bg-transparent text-[#3A3A3A]'>
                    <option value="products">Rooms</option>
                    <option value="rooms">Products</option>
                    <option value="inspirations">Inspirations</option>
                </select>
                <h2 className='hidden md:block'>Inspirations</h2>
            </div>
            <div className='relative hidden md:block'>
                <IoSearch className='absolute top-3 left-2 w-5 h-5' />
                <input className='w-[473px] h-[45px] px-11 py-3 p' type="text" placeholder='Search for minimalist chair' />
            </div>
            <div className='hidden  items-center gap-8 md:flex '>
                <FaRegHeart />
                <FiShoppingCart />
                <img src={Oybek} alt="rasmlar" className='w-10 h-10 rounded-full object-cover' />
            </div>
            
        </div>
    </div> 
    </div>
    </>
  )
}

export default Home