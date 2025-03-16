import React from 'react'
import { GiTrophyCup } from 'react-icons/gi'
import icon1 from './Imglar/icon1.svg'
import icon2 from './Imglar/icon2.svg'
import icon3 from './Imglar/icon3.svg'
import Product from './Imglar/Product.svg'
import Product2 from './Imglar/Images (6).svg'
import Product3 from './Imglar/Pruduct3.svg'
import Product4 from './Imglar/Product4.svg'
import Product5 from './Imglar/Product5.svg'
import Product7 from './Imglar/Product7.svg'
import Product6 from './Imglar/Product6.svg'
import Addtoo from './Imglar/Addtoo.svg'

const Products = () => {
  return (
    <div>
        <div className='w-[1440px] pl-10 mx-auto '>
            <div className='grid grid-cols-4 gap-24'>
                <div className= 'w-[280px] py-20 flex items-center gap-3.5'>
                <GiTrophyCup  className='w-10 h-10'/>
                <div>
                <h2 className='text-[#3A3A3A] font-semibold'>High Quality</h2>
                <h3 className='text-[#898989] text-base'>crafted from top materials</h3>
                </div>
                </div>
                <div className= 'w-[280px] py-20 flex items-center gap-3.5'>
                <img src={icon1}  className='w-10 h-10' alt='ramslar'/>
                <div>
                <h2 className='text-[#3A3A3A] font-semibold'>Warrany Protection</h2>
                <h3 className='text-[#898989] text-base'>Over 2 years</h3>
                </div>
                </div>
                <div className= 'w-[280px] py-20 flex items-center gap-3.5'>
                <img src={icon2} className='w-10 h-10' alt='rasm'/>
                <div>
                <h2 className='text-[#3A3A3A] font-semibold'>Free Shipping</h2>
                <h3 className='text-[#898989] text-base'>Order over 150 $</h3>
                </div>
                </div>
                <div className= 'w-[280px] py-20 flex items-center gap-3.5'>
                <img src={icon3}  className='w-10 h-10' alt='rasm'/>
                <div>
                <h2 className='text-[#3A3A3A] font-semibold'>24 / 7 Support</h2>
                <h3 className='text-[#898989] text-base'>Dedicated support</h3>
                </div>
                </div>
            </div>

            <div className='text-center pb-8'>
                <h1 className='text-[#3A3A3A] text-3xl font-bold'>Our Products</h1>
            </div>
            <div className='grid grid-cols-4 gap-8'>
                <div className='w-[285px] h-[446px]'>
                    <img src={Product} alt="rasm" />
                    <div className='bg-[#F4F5F7] p-4'>
                        <h3 className='text-[#3A3A3A] font-semibold text-xl'>Syltherine</h3>
                        <p className='text-[#898989] text-base'>Stylish cafe chair</p>
                        <h3 className='text-[#3A3A3A] font-semibold text-xl'>Rp 2.500.000  <span className='text-[#B0B0B0] text-base'>Rp 3.500.000</span></h3>
                    </div>
                </div>
                <div className='relative w-[285px] h-[446px]'>
                    <img src={Product2}  alt="rasm" />
                    <img
                        src={Addtoo}
                        alt="Overlay"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full "
                        />
                    <div className='bg-[#F4F5F7] p-4'>
                        <h3 className='text-[#3A3A3A] font-semibold text-xl'>Syltherine</h3>
                        <p className='text-[#898989] text-base'>Stylish cafe chair</p>
                        <h3 className='text-[#3A3A3A] flex gap-2 items-center font-semibold text-xl'>Rp 2.500.000  <span className='text-[#B0B0B0] text-base'>Rp 3.500.000</span></h3>
                    </div>
                </div>
                <div className='w-[285px] h-[446px]'>
                    <img src={Product3} alt="rasm" />
                    <div className='bg-[#F4F5F7] p-4'>
                        <h3 className='text-[#3A3A3A] font-semibold text-xl'>Lolito</h3>
                        <p className='text-[#898989] text-base'>Luxury big sofa</p>
                        <h3 className='text-[#3A3A3A] flex gap-2 items-center font-semibold text-xl '>Rp 7.000.000<span className='text-[#B0B0B0] text-base line-through'>Rp 14.000.000</span></h3>
                    </div>
                </div>
                <div className='w-[285px] h-[446px]'>
                    <img src={Product4} alt="rasm" />
                    <div className='bg-[#F4F5F7] p-4'>
                        <h3 className='text-[#3A3A3A] font-semibold text-xl'>Respira</h3>
                        <p className='text-[#898989] text-base'> Minimalist fan</p>
                        <h3 className='text-[#3A3A3A] flex gap-2 items-center font-semibold text-xl'>Rp 2.500.000 </h3>
                    </div>
                </div>
                <div className='w-[285px] h-[446px]'>
                    <img src={Product5} alt="rasm" />
                    <div className='bg-[#F4F5F7] p-4'>
                        <h3 className='text-[#3A3A3A] font-semibold text-xl'>Grifo</h3>
                        <p className='text-[#898989] text-base'>Night lamp</p>
                        <h3 className='text-[#3A3A3A] flex gap-2 items-center font-semibold text-xl'>Rp 2.500.000  </h3>
                    </div>
                </div>
                <div className='w-[285px] h-[446px]'>
                    <img src={Product} alt="rasm" />
                    <div className='bg-[#F4F5F7] p-4'>
                        <h3 className='text-[#3A3A3A] font-semibold text-xl'>Muggo</h3>
                        <p className='text-[#898989] text-base'>Small mug</p>
                        <h3 className='text-[#3A3A3A] flex gap-2 items-center font-semibold text-xl'>Rp 2.500.000  </h3>
                    </div>
                </div>
                <div className='w-[285px] h-[446px]'>
                    <img src={Product6} alt="rasm" />
                    <div className='bg-[#F4F5F7] p-4'>
                        <h3 className='text-[#3A3A3A] font-semibold text-xl'>Pingky</h3>
                        <p className='text-[#898989] text-base'>Cute bed set</p>
                        <h3 className='text-[#3A3A3A] flex gap-2 items-center font-semibold text-xl'>Rp 7.000.000  <span className='text-[#B0B0B0] text-base'>Rp 3.500.000</span></h3>
                    </div>
                </div>
                <div className='w-[285px] h-[446px]'>
                    <img src={Product7} alt="rasm" />
                    <div className='bg-[#F4F5F7] p-4'>
                        <h3 className='text-[#3A3A3A] font-semibold text-xl'>Potty</h3>
                        <p className='text-[#898989] text-base'>Minimalist flower pot</p>
                        <h3 className='text-[#3A3A3A] flex gap-2 items-center font-semibold text-xl'>Rp 2.500.000  </h3>
                    </div>
                </div>
            </div>
            <div className='text-center pt-5 pb-12'>
                <button className='py-3 px-24 border-2 border-[#E89F71] text-[#E89F71]'>Show More</button>
            </div>


        </div>
    </div>
  )
}

export default Products