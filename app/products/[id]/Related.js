"use client";
import React from "react";
import Slider from "react-slick";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import i18n from "../../../public/locales/i18n";

const Related = () => {
  const { t } = useTranslation();
  const currentLanguage = i18n?.language || "en";

  const products = [
    {
      id: 1,
      name: t("Related.security_door"), // Translate product name
      image: "/assets/door1.png",
    },
    {
      id: 2,
      name: t("Related.formica_door"),
      image: "/assets/door2.png",
    },
    {
      id: 3,
      name: t("Related.wooden_door"),
      image: "/assets/door3.png",
    },
    {
      id: 4,
      name: t("Related.security_door"), // Reuse translation if needed
      image: "/assets/door4.png",
    },
    {
      id: 5,
      name: t("Related.formica_door"),
      image: "/assets/door5.png",
    },
    {
      id: 6,
      name: t("Related.wooden_door"),
      image: "/assets/door3.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-[55px] px-[18px] md:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-[35px] sm:text-[40px] md:text-[48px] leading-[52.8px] font-[700] mb-[65px] md:mb-[100px] text-black md:px-[4%] lg:px-[6.5%]">
          {t("Related.you_may_also_like")} {/* Translated heading */}
        </h2>
        <Slider {...settings} className="w-full">
          {products.map((product) => (
            <div key={product.id} className="">
              <img
                src={product.image}
                alt={product.name}
                className="mx-auto h-[457px] object-contain"
              />
              <div className="lg:max-w-[240px] max-w-[210px] w-full mx-auto mt-[18px]">
                <h3 className="text-[24px] font-[500] leading-[26.4px] text-black">
                  {product.name} {/* Product name translated */}
                </h3>
                {/* <p className="text-black text-[14px] font-[500] leading-[15.4px] mt-[17px]">
                  {product.price}
                </p> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  const { i18n } = useTranslation(); // Access the current language
  const currentLanguage = i18n.language;

  return (
    <div
      className={`${className} custom-arrow`}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        width: "70px",
        height: "70px",
        background: "transparent",
      }}
      onClick={onClick}
    >
      <IoIosArrowDroprightCircle
        size={40}
        color="#EE7922"
        style={{
          transform: currentLanguage === "ar" ? "rotate(180deg)" : "none",
        }} // Mirror the icon if language is Arabic
      />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  const { i18n } = useTranslation(); // Access the current language
  const currentLanguage = i18n.language;

  return (
    <div
      className={`${className} custom-arrow`}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        width: "70px",
        height: "70px",
        background: "transparent",
      }}
      onClick={onClick}
    >
      <IoIosArrowDroprightCircle
        size={40}
        color="#EE7922"
        style={{
          transform: currentLanguage === "ar" ? "none" : "rotate(180deg)",
        }} // Rotate or mirror the icon depending on the language
      />
    </div>
  );
};

export default Related;
