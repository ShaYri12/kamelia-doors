"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div
      id="hero"
      className="relative h-[357px] sm:h-[100vh] overflow-hidden z-[10]"
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0 sm:h-[90h] h-[357px] w-full">
        <img
          className="sm:h-[105vh] h-[357px] w-full object-cover bg-no-repeat"
          src="/assets/hero-bg.png"
          alt="Hero Background"
        />
      </div>

      {/* Overlay with Blurred Background and Text */}
      <div className="absolute left-[2%] xl:left-[10%] xl:me-0 me-[10%] top-[15vh] hero-content sm:top-[28vh] md:top-[26vh] lg:top-[23vh] xl:top-[20vh] z-10 bg-[#FFFFFF4D]/30 backdrop-blur-md rounded-[20px]">
        <div className="text-left text-black max-w-[650px] rounded-[9.23px] sm:rounded-[20px] px-[15px] md:px-[28px] py-[23px] md:py-[48px]">
          <p className="text-primaryColor text-[9px] sm:text-[16px] lg:text-[18px] font-[600] leading-[13.5px] sm:leading-[27px] tracking-[7%] uppercase">
            {t("Hero.welcome_message")}
          </p>
          <h1 className="text-[28px] sm:text-[35px] lg:text-[55px] leading-[31.37px] sm:leading-[50px] lg:leading-[68px] tracking-[5%] text-blackish font-[800] sm:mt-[4px] mt-[2.3px">
            {t("Hero.main_heading")}
          </h1>
          <p className="sm:mt-[27px] mt-[10.21px] text-[9px] sm:text-[15px] lg:text-[17px] leading-[14px] sm:leading-[25px] font-[400] md:text-grayish text-black">
            {t("Hero.subtext")}
          </p>
          <div className="mt-[22px] sm:mt-[65px] flex flex-wrap gap-[20px]">
            <button className="bg-primaryColor text-white text-[10px] sm:text-[16px] lg:text-[18px] px-[9.54px] sm:px-[28.5px] py-[7.84px] sm:py-[16.5px] rounded-[10px] shadow-lg hover:bg-primaryColor transition duration-300">
              {t("Hero.order_now")}
            </button>
            <button className="sm:flex hidden bg-transparent border-4 border-primaryColor text-primaryColor text-[10px] sm:text-[16px] lg:text-[18px] px-[9.54px] sm:px-[28.5px] py-[7.84px] sm:py-[16.5px] rounded-[10px] hover:bg-primaryColor hover:text-white transition duration-300">
              {t("Hero.take_measurements")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
