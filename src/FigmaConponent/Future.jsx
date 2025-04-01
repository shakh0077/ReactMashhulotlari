import React, { useContext, useEffect } from 'react';
import Future1 from './Imglar/Future1.png';
import Future2 from './Imglar/Future2.png';
import Future3 from './Imglar/Future3.png';
import Future4 from './Imglar/Future4.png';
import Future5 from './Imglar/Future5.png';
import Future6 from './Imglar/Future6.png';
import Future7 from './Imglar/Future7.png';
import Future8 from './Imglar/Future8.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Img } from 'react-image';
import { ThemeContext } from '../Context/GlobalContext';

const Future = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={` ${
      theme == 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'
    } `} >
      <div
        id='future'
        className='max-w-[1400px] w-full mx-auto px-4 lg:pt-12 pb-16'
      >
        <h2 className='text-center  py-2 md:text-xl font-semibold mb-6'>
          Share your setup with <br />
          <span className=' text-4xl font-bold'>
            #FuniroFurniture
          </span>
        </h2>
        <div
          data-aos='fade-down'
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '
        >
          <Img
            src={Future1}
            loader={<div>Loading...</div>}
            alt='rasm'
            className='h-[400px]  object-cover transition-transform duration-300 hover:scale-95 hover:brightness-75  mx-auto w-[285px] lg:w-[327px] '
          />
          <Img
            src={Future2}
            loader={<div>Loading...</div>}
            alt='rasm'
            className='h-[400px]  object-cover transition-transform duration-300 hover:scale-95 hover:brightness-75  mx-auto w-[285px] lg:w-[327px] '
          />
          <Img
            src={Future3}
            loader={<div>Loading...</div>}
            alt='rasm'
            className='h-[400px]  object-cover transition-transform duration-300 hover:scale-95 hover:brightness-75  mx-auto w-[285px] lg:w-[327px] '
          />
          <Img
            src={Future4}
            loader={<div>Loading...</div>}
            alt='rasm'
            className=' h-[400px]  object-cover transition-transform duration-300 hover:scale-95 hover:brightness-75  mx-auto w-[285px] lg:w-[327px] '
          />
          <Img
            src={Future5}
            loader={<div>Loading...</div>}
            alt='rasm'
            className=' h-[400px]  object-cover transition-transform duration-300 hover:scale-95 hover:brightness-75  mx-auto w-[285px] lg:w-[327px] '
          />
          <Img
            src={Future6}
            loader={<div>Loading...</div>}
            alt='rasm'
            className=' h-[400px]  object-cover transition-transform duration-300 hover:scale-95 hover:brightness-75  mx-auto w-[285px] lg:w-[327px] '
          />
          <Img
            src={Future7}
            loader={<div>Loading...</div>}
            alt='rasm'
            className=' h-[400px]  object-cover transition-transform duration-300 hover:scale-95 hover:brightness-75  mx-auto w-[285px] lg:w-[327px] '
          />
          <Img
            src={Future8}
            loader={<div>Loading...</div>}
            alt='rasm'
            className='h-[400px]  object-cover transition-transform duration-300 hover:scale-95 hover:brightness-75  mx-auto w-[285px] lg:w-[327px] '
          />
        </div>
      </div>
    </div>
  );
};

export default Future;
