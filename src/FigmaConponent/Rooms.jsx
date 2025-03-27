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
import "aos/dist/aos.css";
import Aos from "aos";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../Context/GlobalContext";
import { useTranslation } from "react-i18next";

const slides = [
  {
    id: 1,
    title: "inner_peace",
    category: "bed_room",
    image: Rooms1 ,
  },
  {
    id: 2,
    title: "cozy_white_space",
    category: "living_room",
    image: Rooms2,
  },
  {
    id: 3,
    title: "modern_kitchen",
    category: "kitchen",
    image: Rooms3,
  },
  {
    id: 4,
    title: "luxury_office",
    category: "office",
    image: Rooms4,
  },
];

const Rooms = () => {
  useEffect(()=>{
    Aos.init({duration:1500})
  },[])

  let {theme} = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  return (
    <div id="rooms" className={`${theme==='dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-700 '}`}>
      <div className="mx-auto py-10 px-5 flex flex-col w-full md:flex-row md:mx-auto items-center gap-10 lg:max-w-[1440px]">
        <div data-aos='fade-down' className="w-full md:w-1/2">
          <h2 data-aos='fade-left' className="text-4xl font-bold ">{t("beautiful_rooms")}</h2>
          <p className="mt-4">{t("designer_inspiration")}</p>
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-md">
            <a href="#future">{t("explore_more")}</a>
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
                <div data-aos='fade-left' className="relative shadow-lg rounded-lg overflow-hidden">
                  <img src={slide.image} alt={t(slide.title)} className="w-full h-[350px] object-cover" />
                  <div data-aos='fade-left' className="absolute bottom-5 left-5 bg-white/50 backdrop-blur-lg bg-white p-4 rounded-lg shadow-md">
                    <p className="text-sm text-gray-500">01 — {t(slide.category)}</p>
                    <h3 className="text-xl font-semibold">{t(slide.title)}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button data-aos='fade-down' className="eski-button absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-3 rounded-full shadow-md z-10">
            <FaArrowLeft />
          </button>
          <button data-aos='fade-down' className="yangi-button absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-3 rounded-full shadow-md z-10">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rooms;