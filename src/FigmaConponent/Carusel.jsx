import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useRef } from "react";
import Corusel from './Imglar/Corusel1.svg';
import Corusel2 from './Imglar/Corusel2.svg';
import Corusel3 from './Imglar/Corusel3.svg';

const slides = [
  {
    id: 1,
    title: "High-Quality Furniture Just For You",
    description:
      "Our furniture is made from selected and best quality materials that are suitable for your dream home",
    buttonText: "Shop Now",
    bgUrl: Corusel,
    product: {
      name: "Bohauss",
      description: "Luxury big sofa 2-seat",
      price: "Rp 17.000.000",
    },
  },
  {
    id: 2,
    title: "Find the perfect  to complement your home’s aesthetics",
    description:
      "Our furniture is made from selected and best quality materials that are suitable for your dream home",
    buttonText: "Explore",
    bgUrl: Corusel2,
    product: {
      name: "Luxury Chair",
      description: "Minimalist and stylish chair",
      price: "Rp 5.500.000",
    },
  },
  {
    id: 3,
    title: "Modern Designs for Your Comfort",
    description:
      "Our furniture is made from selected and best quality materials that are suitable for your dream home",
    buttonText: "Explore",
    bgUrl: Corusel3,
    product: {
      name: "Luxury Chair",
      description: "Minimalist and stylish chair",
      price: "Rp 5.500.000",
    },
  },
];

const Carusel = () => {
  const swiperRef = useRef(null); 

  return (
    <div className="bg-[#FCF8F3] relative">
      <div className="relative w-full max-w-[1440px] mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          className="relative"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="relative mt-[50px]">
              <div
                className="max-w-[1434px] h-[553px] mx-auto flex items-center bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.bgUrl})` }}>
                <div className="w-[298px] ml-2 bg-white/20 p-5 absolute top-2 h-[303px] lg:-top-12 lg:bg-white/40 backdrop-blur-lg lg:w-[498px] lg:h-[553px]  lg:p-14 shadow-lg rounded-md lg:ml-20">
                  <h2 className="text-xl  pt-5 font-bold text-[#3A3A3A] lg:text-5xl">{slide.title}</h2>
                  <p className="text-[#898989] mt-2 lg:mt-5">{slide.description}</p>
                  <button className="mt-5 w-[174px] h-[48px] bg-[#E89F71] text-white px-6 py-3 lg:w-[374px] lg:12 lg:h-[48px] ">
                    <a href="#products">{slide.buttonText}</a>
                  </button>
                </div>

                <div className="absolute bottom-12 right-3.5  w-[298px] bg-white/40 backdrop-blur-lg p-6 shadow-md rounded-md lg:bottom-10 lg:right-28">
                  <h3 className="text-lg font-semibold">{slide.product.name}</h3>
                  <p className="text-gray-500">{slide.product.description}</p>
                  <p className="text-black font-bold mt-2">{slide.product.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={() => swiperRef.current?.slidePrev()} 
          className="absolute right-16 top-6 transform -translate-y-1/2 active:bg-[#edac84] bg-orange-200 text-white p-3 rounded-full z-10">
          <FaArrowLeft />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()} 
          className="absolute right-5 top-6 transform -translate-y-1/2 active:bg-[#edac84] bg-orange-200 text-white p-3 rounded-full z-10">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carusel;
