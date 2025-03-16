import React, { useContext } from 'react'
import { GlobalContext } from '../App'

const B = () => {
    let {data} = useContext(GlobalContext)
    
  return (
    <>
    <header className="bg-indigo-200   py-10">
        <div className={ `container_nav  flex bg-orange-200 justify-between items-center text-white `}>
            <span className="font-semibold text-[22px]">Logo</span>
            <ul className="hidden gap-5 sm:flex font-extrabold ">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
                <li className='relative'>
                    <a href="#">Massage</a>
                    <span className='absolute -top-2.5 -right-3 bg-cyan-400 w-5 h-5 text-white rounded-full flex items-center justify-center text-xs'>{data.length}</span>
                </li>
            </ul>
            <button className="bg-slate-200 px-2.5 py-1 rounded-lg text-black font-semibold">Login</button>
        </div>
    </header>
    </>
  )
}

export default B