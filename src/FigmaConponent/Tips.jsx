import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Tips1 from './Imglar/Tips1.svg'
import Tips2 from './Imglar/Tips2.svg'
import Tips3 from './Imglar/Tips3.svg'
import Tips4 from './Imglar/Tips4.svg'

const slides = [
  {
    id: 1,
    title: "How to create a living room to love",
    date: "20 Jan 2020",
    image: Tips1,
  },
  {
    id: 2,
    title: "Solution for clean look working space",
    date: "10 Jan 2020",
    image:Tips2,
  },
  {
    id: 3,
    title: "Make your cooking activity more fun with ",
    date: "20 Jan 2020",
    image: Tips3,
  },
  {
    id: 4,
    title: "Decor ideas for a cozy bedroom",
    date: "15 Jan 2020",
    image: Tips4,
  },
];

const Tips = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-5">
      <h2 className="text-3xl font-bold text-center mb-8">Tips & Tricks</h2>
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: ".prev-button",
            nextEl: ".next-button",
          }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 }, 
            1024: { slidesPerView: 3 },
          }}
          loop={true}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={slide.image} alt={slide.title} className="w-full h-[250px] object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{slide.title}</h3>
                  <p className="text-gray-500 text-sm">{slide.date}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="prev-button absolute -left-5 top-1/2 transform -translate-y-1/2 text-[#E89F71] bg-white p-3 rounded-full shadow-md border z-10">
          <FaArrowLeft />
        </button>
        <button className="next-button absolute -right-5 top-1/2 transform -translate-y-1/2 text-[#E89F71] bg-white p-3 rounded-full shadow-md border z-10">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Tips;
