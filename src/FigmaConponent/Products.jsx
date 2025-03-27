import React, { useContext, useEffect } from 'react';
import { GiTrophyCup } from 'react-icons/gi';
import { useTranslation } from "react-i18next";
import icon1 from './Imglar/icon1.svg';
import icon2 from './Imglar/icon2.svg';
import icon3 from './Imglar/icon3.svg';
import Product from './Imglar/Product.svg';
import Product2 from './Imglar/Images (6).svg';
import Product3 from './Imglar/Pruduct3.svg';
import Product4 from './Imglar/Product4.svg';
import Product5 from './Imglar/Product5.svg';
import Product6 from './Imglar/Product6.svg';
import Product7 from './Imglar/Product7.svg';
import "aos/dist/aos.css";
import Aos from "aos";
import { ThemeContext } from '../Context/GlobalContext';

const Products = () => {
  let { theme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation(); 

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className={`${theme === "dark" ? "bg-gray-800 text-white" : "bg-[#F9F1E7] text-[#898989]"}`}>
      <div id='products' className='w-full px-5 mx-auto lg:max-w-[1440px]'>

        <div data-aos='fade-down' className='grid grid-cols-1 mx-auto md:grid-cols-3 lg:grid-cols-4 lg:gap-24'>
          <div className='w-[280px] py-20 flex items-center gap-3.5'>
            <GiTrophyCup className='w-10 h-10' />
            <div>
              <h2 className='font-semibold'>{t("high_quality")}</h2>
              <h3 className='text-base'>{t("crafted_top")}</h3>
            </div>
          </div>
          <div className='w-[280px] py-20 flex items-center gap-3.5'>
            <img src={icon1} className='w-10 h-10' alt='ramslar' />
            <div>
              <h2 className='font-semibold'>{t("warranty_protection")}</h2>
              <h3 className='text-base'>{t("over_years")}</h3>
            </div>
          </div>
          <div className='w-[280px] py-20 flex items-center gap-3.5'>
            <img src={icon2} className='w-10 h-10' alt='rasm' />
            <div>
              <h2 className='font-semibold'>{t("free_shipping")}</h2>
              <h3 className='text-base'>{t("order_over")}</h3>
            </div>
          </div>
          <div className='w-[280px] py-20 flex items-center gap-3.5'>
            <img src={icon3} className='w-10 h-10' alt='rasm' />
            <div>
              <h2 className='font-semibold'>{t("support")}</h2>
              <h3 className='text-base'>{t("dedicated_support")}</h3>
            </div>
          </div>
        </div>

        <div className='px-10 pb-8 text-start lg:text-center'>
          <h1 className='text-3xl font-bold'>{t("our_products")}</h1>
        </div>

        {/* Mahsulotlar ro'yxati */}
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8'>
          {[Product, Product2, Product3, Product4, Product5, Product6, Product7, Product].map((item, index) => (
            <div key={index} className='w-[285px] bg-white rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
              <img src={item} alt="rasm" />
              <div className='bg-[#F4F5F7] p-4'>
                <h3 className='text-[#3A3A3A] font-semibold text-xl'>Product {index + 1}</h3>
                <p className='text-[#898989] text-base'>Description</p>
                <h3 className='text-[#3A3A3A] font-semibold text-xl'>Rp 2.500.000</h3>
              </div>
            </div>
          ))}
        </div>

        <div data-aos='fade-down' className='px-10 py-10 text-center'>
          <button className='py-3 px-16 border-2 border-[#E89F71] text-[#E89F71] hover:bg-orange-500 hover:text-white'>{t("show_more")}</button>
        </div>

      </div>
    </div>
  );
};

export default Products;
