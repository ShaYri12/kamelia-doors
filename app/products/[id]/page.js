"use client";
import React, { useState } from "react";
import Qualityies from "../components/Qualityies";
import Additionalinfo from "./Additionalinfo";
import Related from "./Related";

const ProductPage = () => {
  const [image, setImage] = useState(1);

  const images = [
    "/assets/door1.png",
    "/assets/door2.png",
    "/assets/door3.png",
    "/assets/door4.png",
  ];

  return (
    <section>
      <div className="pb-[38px] pt-[150px] lg:pt-[223px] px-[18px] md:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-[20px] md:gap-[30px] lg:gap-[75px]">
          {/* Image Section */}
          <div className="lg:w-[50%] flex flex-col justify-center">
            <div className="rounded-[17px] bg-[#E8E0D7] flex items-center justify-center h-[508px]">
              <img
                src={images[image - 1]}
                alt={`Wooden Door ${image}`}
                className="rounded-md object-contain h-full"
              />
            </div>

            <div className="flex justify-between mt-[21px]">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setImage(index + 1)}
                  className={`focus:outline-none rounded-md h-[125px] w-[155px] ${
                    image === index + 1 ? "border border-primaryColor" : ""
                  } flex items-center justify-center`}
                >
                  <img
                    src={images[index]}
                    alt={`Thumbnail ${index + 1}`}
                    className="object-cover h-full w-full rounded-md"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="lg:w-[50%] flex flex-col justify-start pt-[35px]">
            <h3 class="text-primaryColor text-[11px] leading-[12.1px] uppercase font-[500]">
              HARDWOOD DOOR
            </h3>
            <h1 className="text-[34px] md:text-[40px] font-[500] leading-[44px] text-blackish mt-[8px] md:mt-[17px]">
              WOODEN DOOR
            </h1>
            <p className="text-black text-[14px] font-[400] leading-[17.5px] mt-[18px] md:mt-[35px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the
              1500s,It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem 
            </p>

            <p className="text-primaryColor text-[28px] md:text-[36px] leading-[30px] md:leading-[39.6px] font-[500] mt-[17px]">
              1000 JD
            </p>

            {/* Color Options */}
            <div className="flex space-x-4 mt-[16px] md:mt-[23px]">
              <span className="w-[41.67px] h-[40.64px] bg-[#5F4A42] rounded-[4px] border-2 border-transparent hover:border-primaryColor cursor-pointer"></span>
              <span className="w-[41.67px] h-[40.64px] bg-[#262626] rounded-[4px] border-2 border-transparent hover:border-primaryColor cursor-pointer"></span>
              <span className="w-[41.67px] h-[40.64px] bg-[#9B9D97] rounded-[4px] border-2 border-transparent hover:border-primaryColor cursor-pointer"></span>
              <span className="w-[41.67px] h-[40.64px] bg-[#E8E0D7] rounded-[4px] border-2 border-transparent hover:border-primaryColor cursor-pointer"></span>
            </div>

            {/* Order Button */}
            <button className="mt-[40px] md:mt-[47px] px-[49px] py-[14px] w-fit bg-primaryColor uppercase text-white text-[15px] font-[500] leading-[16.5px] rounded-[5px] hover:bg-orange-600 transition-colors">
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
      <Additionalinfo />
      <Related />
      <Qualityies />
    </section>
  );
};

export default ProductPage;