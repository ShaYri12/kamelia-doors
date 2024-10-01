"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { BASE_URL } from "../config";

// Custom Previous Arrow
const CustomPrevArrow = ({ onClick }) => {
  return (
    <div
      className="md:block hidden custom-prev-arrow absolute z-40 lg:left-[10px] -left-[30px]"
      onClick={onClick}
      style={{ top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}
    >
      <img
        src="/assets/left-arrow-slider.svg"
        width={64}
        height={64}
        alt="Previous"
        className="arrow-image"
      />
    </div>
  );
};

// Custom Next Arrow
const CustomNextArrow = ({ onClick }) => {
  return (
    <div
      className="md:block hidden custom-next-arrow absolute z-40 lg:right-[10px] -right-[30px]"
      onClick={onClick}
      style={{ top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}
    >
      <img
        src="/assets/right-arrow-slider.svg"
        width={64}
        height={64}
        alt="Next"
        className="arrow-image"
      />
    </div>
  );
};

export default function DifferentWood() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [materials, setMaterials] = useState([]);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex); // Use realIndex for looping
  };

  // Fetch materials from the API
  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await fetch(`${BASE_URL}/materials-list`);
        let data = await response.json();

        // If materials are less than 5, clone them until there are 5
        if (data.length < 5) {
          const clones = [];
          while (data.length + clones.length < 5) {
            clones.push(...data.slice(0, 5 - data.length - clones.length));
          }
          data = [...data, ...clones];
        }

        setMaterials(data); // Set the processed materials
      } catch (error) {
        console.error("Error fetching materials:", error);
      }
    };

    fetchMaterials();
  }, []);

  return (
    <div
      dir="ltr"
      className="bg-[#FCF8F3] px-5 md:px-10 py-[40px] md:py-[80px] w-full"
    >
      <div className="text-center">
        <h1 className="text-[#1B1717] text-[20px] sm:text-[40px] sm:leading-[50px] tracking-[7%] font-bold uppercase mb-2">
          {t("DifferentWood.different_wood_materials")}
        </h1>
        <p className="max-w-[342px] sm:max-w-[999px] mx-auto w-full text-[#6E6E6E] text-[15px] sm:text-[17px] sm:leading-[25px] font-normal">
          {t("DifferentWood.wood_description")}
        </p>
      </div>

      <div className="mt-10 md:mt-16 relative">
        {/* Custom Prev Arrow */}
        <CustomPrevArrow onClick={() => swiperRef.current.swiper.slidePrev()} />

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true} // Enable infinite loop
          coverflowEffect={{
            rotate: 30, // Reduce rotation to prevent bending
            stretch: 10, // Adjust the spacing between slides
            depth: 200, // Increase depth for better 3D effect
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          onSlideChange={handleSlideChange}
          ref={swiperRef}
          className="mySwiper"
        >
          {materials.map((material) => (
            <SwiperSlide
              key={material.id}
              className="object-cover h-[420.23px] w-[401.55px]"
            >
              <img
                src={material.image}
                alt={material.name}
                className="object-cover rounded-[18.68px] h-[420.23px] w-[401.55px] transition-all duration-500"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Next Arrow */}
        <CustomNextArrow onClick={() => swiperRef.current.swiper.slideNext()} />

        {/* Custom Pagination Dots */}
        <div className="flex justify-center items-center mt-8 sm:mt-14 gap-3 sm:gap-4">
          {materials.map((_, index) => (
            <button
              key={index}
              className={`rounded-[7.5px] h-[10px] md:h-[14px] transition-all ${
                currentSlide === index
                  ? "bg-[#EE7922] w-[50px] md:w-[70px]"
                  : "bg-[#F8D3B6] w-[23px]"
              }`}
              onClick={() => swiperRef.current.swiper.slideToLoop(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
