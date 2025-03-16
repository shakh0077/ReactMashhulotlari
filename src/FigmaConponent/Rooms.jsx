import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Rooms1 from './Imglar/Rooms1.svg'
import Rooms2 from './Imglar/Rooms2.svg'
import Rooms3 from './Imglar/Product5.svg'
import Rooms4 from './Imglar/Product2.svg'


const slides = [
  {
    id: 1,
    title: "Inner Peace",
    category: "Bed Room",
    image: Rooms1 ,
  },
  {
    id: 2,
    title: "Cozy White Space",
    category: "Living Room",
    image: Rooms2,
  },
  {
    id: 3,
    title: "Modern Kitchen",
    category: "Kitchen",
    image: Rooms3,
  },
  {
    id: 4,
    title: "Luxury Office",
    category: "Office",
    image: Rooms4,
  },
];

const Rooms = () => {
  return (
    <div className="bg-[#FCF8F3]">
            <div className="max-w-7xl mx-auto py-10 px-5 flex flex-col  md:flex-row items-center gap-10">
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold text-gray-900">
          50+ Beautiful rooms inspiration
        </h2>
        <p className="text-gray-500 mt-4">
          Our designer already made a lot of beautiful prototype of rooms that inspire you
        </p>
        <button className="mt-6 bg-orange-500 text-white px-5 py-3 rounded-md">
          Explore More
        </button>
      </div>

      <div className="w-full md:w-1/2 relative">
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".eski-button",
            nextEl: ".yangi-button",
          }}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative  shadow-lg rounded-lg overflow-hidden">
                <img src={slide.image} alt={slide.title} className="w-full h-[350px] object-cover" />
                <div className="absolute bottom-5 left-5 bg-white/50 backdrop-blur-lg bg-white p-4 rounded-lg shadow-md">
                  <p className="text-sm text-gray-500">01 — {slide.category}</p>
                  <h3 className="text-xl font-semibold">{slide.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="eski-button absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-3 rounded-full shadow-md z-10">
          <FaArrowLeft />
        </button>
        <button className="yangi-button absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-3 rounded-full shadow-md z-10">
          <FaArrowRight />
        </button>
      </div>
    </div>
    </div>
  );
};

export default Rooms;
