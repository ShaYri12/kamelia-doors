"use client";
import React from "react";
import Slider from "react-slick";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Related = () => {
  const products = [
    {
      id: 1,
      name: "SECURITY DOOR",
      price: "1500 JD",
      image: "/assets/door1.png",
    },
    {
      id: 2,
      name: "FORMICA DOOR",
      price: "1200 JD",
      image: "/assets/door2.png",
    },
    {
      id: 3,
      name: "WOODEN DOOR",
      price: "1487 JD",
      image: "/assets/door3.png",
    },
    {
      id: 4,
      name: "SECURITY DOOR",
      price: "1500 JD",
      image: "/assets/door4.png",
    },
    {
      id: 5,
      name: "FORMICA DOOR",
      price: "1200 JD",
      image: "/assets/door5.png",
    },
    {
      id: 6,
      name: "WOODEN DOOR",
      price: "1487 JD",
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
          YOU MAY ALSO LIKE
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
                  {product.name}
                </h3>
                <p className="text-black text-[14px] font-[500] leading-[15.4px] mt-[17px]">
                  {product.price}
                </p>
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
      <IoIosArrowDroprightCircle size={40} color="#EE7922" />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
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
        style={{ transform: "rotate(180deg)" }}
      />
    </div>
  );
};

export default Related;