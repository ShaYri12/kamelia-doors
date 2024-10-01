"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import i18n from "../../../public/locales/i18n";
import { BASE_URL } from "@/app/config";

const Related = () => {
  const { t } = useTranslation();
  const currentLanguage = i18n?.language || "en";

  const [products, setProducts] = useState([]); // State to hold product data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/doors-list`); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data); // Set the products state with fetched data
      } catch (error) {
        setError(error.message); // Set error if there is an issue
      } finally {
        setLoading(false); // Set loading to false after fetch is complete
      }
    };

    fetchProducts(); // Call the function to fetch products
  }, []); // Empty dependency array means it runs once when component mounts

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

  if (loading) {
    return <div>Loading...</div>; // Display loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message
  }

  return (
    <div className="pt-[55px] px-[18px] md:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-[35px] sm:text-[40px] md:text-[48px] leading-[52.8px] font-[700] mb-[65px] md:mb-[100px] text-black md:px-[4%] lg:px-[6.5%]">
          {t("Related.you_may_also_like")}
        </h2>
        <Slider {...settings} className="w-full">
          {products.map((product) => (
            <div key={product.id}>
              <img
                src={product.images[0]?.image} // Access the first image
                alt={product.name}
                className="mx-auto h-[457px] object-contain"
              />
              <div className="lg:max-w-[240px] max-w-[210px] w-full mx-auto mt-[18px]">
                <h3 className="text-[24px] font-[500] leading-[26.4px] text-black">
                  {currentLanguage === "ar" && product.name_ar
                    ? product.name_ar // Use Arabic name if available
                    : product.name}
                </h3>
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
  const { i18n } = useTranslation();
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
        }}
      />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  const { i18n } = useTranslation();
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
        }}
      />
    </div>
  );
};

export default Related;
