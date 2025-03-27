import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useEffect, useRef, useContext } from "react";
import Corusel from "./Imglar/Corusel1.svg";
import Corusel2 from "./Imglar/Corusel2.svg";
import Corusel3 from "./Imglar/Corusel3.svg";
import "aos/dist/aos.css";
import Aos from "aos";
import { ThemeContext } from "../Context/GlobalContext";

// 🔹 Tarjimani saqlash
const translations = {
  en: {
    slides: [
      {
        title: "High-Quality Furniture Just For You",
        description:
          "Our furniture is made from selected and best quality materials that are suitable for your dream home",
        buttonText: "Shop Now",
        product: {
          name: "Bohauss",
          description: "Luxury big sofa 2-seat",
          price: "Rp 17.000.000",
        },
      },
      {
        title: "Find the perfect complement for your home’s aesthetics",
        description:
          "Our furniture is made from selected and best quality materials that are suitable for your dream home",
        buttonText: "Explore",
        product: {
          name: "Luxury Chair",
          description: "Minimalist and stylish chair",
          price: "Rp 5.500.000",
        },
      },
      {
        title: "Modern Designs for Your Comfort",
        description:
          "Our furniture is made from selected and best quality materials that are suitable for your dream home",
        buttonText: "Explore",
        product: {
          name: "Luxury Chair",
          description: "Minimalist and stylish chair",
          price: "Rp 5.500.000",
        },
      },
    ],
  },
  uz: {
    slides: [
      {
        title: "Siz uchun yuqori sifatli mebellar",
        description:
          "Bizning mebellarimiz sizning orzuingizdagi uyga mos keladigan tanlangan va eng yaxshi sifatli materiallardan tayyorlangan",
        buttonText: "Xarid qilish",
        product: {
          name: "Bohauss",
          description: "Katta hashamatli ikki kishilik divan",
          price: "Rp 17.000.000",
        },
      },
      {
        title: "Uy shinamligini ta’minlaydigan mukammal mebelni toping",
        description:
          "Bizning mebellarimiz sizning orzuingizdagi uyga mos keladigan tanlangan va eng yaxshi sifatli materiallardan tayyorlangan",
        buttonText: "Ko'rish",
        product: {
          name: "Hashamatli stul",
          description: "Minimalist va zamonaviy dizayn",
          price: "Rp 5.500.000",
        },
      },
      {
        title: "Sizning qulayligingiz uchun zamonaviy dizaynlar",
        description:
          "Bizning mebellarimiz sizning orzuingizdagi uyga mos keladigan tanlangan va eng yaxshi sifatli materiallardan tayyorlangan",
        buttonText: "Ko'rish",
        product: {
          name: "Hashamatli stul",
          description: "Minimalist va zamonaviy dizayn",
          price: "Rp 5.500.000",
        },
      },
    ],
  },
};

// 🔹 Rasmni saqlash
const images = [Corusel, Corusel2, Corusel3];

const Carusel = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { theme, lang } = useContext(ThemeContext);

  return (
    <div className={`${theme === "dark" ? "bg-gray-800 text-white" : "bg-[#F9F1E7] text-black"}`}>
      <div className="relative w-full max-w-[1440px] mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          className="relative"
        >
          {translations[lang].slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative mt-[50px]">
              <div
                data-aos="fade-right"
                className="max-w-[1434px] h-[553px] mx-auto flex items-center bg-cover bg-center"
                style={{ backgroundImage: `url(${images[index]})` }}
              >
                <div
                  className="w-[298px] ml-2 bg-white/20 p-5 transition-all duration-300 
                  hover:scale-105 absolute top-2 h-[303px] lg:-top-12 lg:bg-white/40 
                  backdrop-blur-lg lg:w-[498px] lg:h-[553px] lg:p-14 shadow-lg rounded-md lg:ml-20"
                >
                  <h2 className="text-xl pt-5 font-bold text-[#3A3A3A] lg:text-5xl">
                    {slide.title}
                  </h2>
                  <p className="text-[#898989] mt-2 lg:mt-5">{slide.description}</p>
                  <button className="mt-5 w-[174px] hover:bg-orange-500 hover:font-semibold h-[48px] bg-[#E89F71] text-white px-6 py-3 lg:w-[374px] lg:12 lg:h-[48px]">
                    <a href="#products">{slide.buttonText}</a>
                  </button>
                </div>

                <div
                  data-aos="fade-left"
                  className="absolute bottom-12 rounded-2xl shadow-lg transition-all duration-300 
                  hover:scale-105 right-3.5 w-[298px] bg-white/40 backdrop-blur-lg p-6 lg:bottom-10 lg:right-28"
                >
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
          className="absolute right-16 top-6 transform -translate-y-1/2 active:bg-orange-500 bg-orange-200 text-white p-3 rounded-full z-10"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-5 top-6 transform -translate-y-1/2 active:bg-orange-500 bg-orange-200 text-white p-3 rounded-full z-10"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carusel;
