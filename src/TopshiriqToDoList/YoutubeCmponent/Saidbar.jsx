import React from 'react'
import { FaBars } from "react-icons/fa6";
import { GrLike, GrYoutube } from 'react-icons/gr';
import { FaHome } from "react-icons/fa";
import { MdExpandMore, MdLibraryMusic, MdOutlineExplore, MdOutlineWatchLater, MdSubscriptions } from 'react-icons/md';
import { SiYoutubeshorts } from 'react-icons/si';
import { LuHistory } from 'react-icons/lu';
import { PiVideoFill } from 'react-icons/pi';
import Photo1 from "./Imlar/Photo.svg"
import Photo2 from "./Imlar/Photo2.svg"
import Photo3 from "./Imlar/Photo3.svg"
import Photo4 from "./Imlar/Photo4.svg"


const Home = [
    {id:1, name:"Home", icon:<FaHome />},
    {id:2, name:"Explores", icon:<MdOutlineExplore />},
    {id:3, name:"Shorts", icon: <SiYoutubeshorts />},
    {id:4, name:"Subscriptions", icon:<MdSubscriptions />}
]

const library = [
    {id:1, name:"Library", icon:<MdLibraryMusic />},
    {id:2, name:"History", icon:<LuHistory />},
    {id:3, name:"Your videos", icon: <PiVideoFill />},
    {id:4, name:"Watch later", icon:<MdOutlineWatchLater />},
    {id:5, name:"Liked videos", icon:<GrLike />},
    {id:6, name:"Show more", icon:<MdExpandMore />}
]

const Children = [
    {id:1, name:"Nadir On The Go", img: <img src={Photo1} alt="rasmlarYoutube" />},
    {id:2, name:"Coke Studio Bangla", img: <img src={Photo2} alt="rasmlarYoutube" />},
    {id:3, name:"MKBHD", img: <img src={Photo3} alt="rasmlarYoutube" />},
    {id:4, name:"Figma", img: <img src={Photo1} alt="rasmlarYoutube" />},
    {id:5, name:"Alux.com", img: <img src={Photo4} alt="rasmlarYoutube" />},
    {id:6, name:"ATC Android ToTo C...", img: <img src={Photo3} alt="rasmlarYoutube" />},
]

const Saidbar = () => {
  return (
    <>
    <div className='px-5 bg-[#212121] w-[220px] '>
        <div className='flex gap-5 items-center fixed pt-4  z-1 bg-[#212121]'>
            <FaBars className='w-5.5 h-5.5 text-white' />
            <div className='flex gap-1 items-center'>
            <GrYoutube className='text-2xl text-red-600' />
            <h1 className='text-2xl font-semibold text-white'>YouTube</h1>
            </div>
        </div>

        <div className='pt-12 '>
            {Home.map((v)=>(
                <div key={v.id} className='flex gap-5 py-2 font-semibold items-center  text-white'>
                    {v.icon}
                    {v.name}
                </div>
            ))}
        </div>
        <hr />

        <div className='text-white mt-2'>
            {library.map((v)=>(
                <div key={v.id} className='flex gap-5 py-2 font-semibold items-center  text-white'>
                    {v.icon}
                    {v.name}
                </div>
            ))}
        </div>
        <hr />
        <h2 className='text-gray-400 py-2'>SUBSCRIPTIONS</h2>

        <div>
            {Children.map((v)=>(
                <div key={v.id} className='flex gap-5 py-2 font-semibold items-center  text-white'>
                    {v.img}
                    {v.name}
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Saidbar