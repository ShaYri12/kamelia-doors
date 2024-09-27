'use client'
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const woodMaterials = [
  '/assets/different-wood.svg',
  '/assets/different-wood.svg',
  '/assets/different-wood.svg',
  '/assets/different-wood.svg',
];

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className='md:block hidden custom-prev-arrow absolute z-40 lg:left-[10px] -left-[30px]'
      onClick={onClick}
      style={{  top: '50%', transform: 'translateY(-50%)' }} // Adjust position
    >
      <img src="/assets/left-arrow-slider.svg" width={64} height={64} alt="Previous" className="arrow-image" />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className='md:block hidden custom-next-arrow absolute z-40 lg:right-[10px] -right-[30px]'
      onClick={onClick}
      style={{ top: '50%', transform: 'translateY(-50%)' }} // Adjust position
    >
      <img src="/assets/right-arrow-slider.svg" width={64} height={64} alt="Next" className="arrow-image" />
    </div>
  );
};

const DifferentWood = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false, // Disable default dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: (current, next) => setCurrentSlide(next), // Update current slide index
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    // Assuming sliderRef is your reference to the slider instance
    sliderRef.slickGoTo(index);
  };

  return (
    <div className="bg-[#FCF8F3] px-5 md:px-10 py-[40px] md:py-[80px] w-full">
      <div className="text-center">
        <h1 className="text-[#1B1717] text-[20px] sm:text-[40px] sm:leading-[50px] tracking-[7%] font-bold uppercase mb-2">Different wood MATERIALS</h1>
        <p className="max-w-[342px] sm:max-w-[999px] mx-auto w-full text-[#6E6E6E] text-[15px] sm:text-[17px] sm:leading-[25px] font-normal">Explore a rich palette of wood colors, each carefully selected to enhance the natural beauty of your doors and complement your interior design.</p>
      </div>
      <div className=" mt-10 md:mt-16">
        <Slider {...settings}>
          {woodMaterials.map((material, index) => (
            <div key={index} className="flex justify-center items-center">
              <div className="relative w-full flex justify-center">
                <img
                  src={material}
                  alt={`Wood Material ${index + 1}`}
                  width={988}
                  height={420}
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </Slider>
        {/* Custom Pagination */}
        <div className="flex justify-center items-center mt-8 sm:mt-14 gap-3 sm:gap-4">
          {woodMaterials.map((_, index) => (
            <button
              key={index}
              className={`rounded-[7.5px] h-[10px] md:h-[14px] ${currentSlide === index ? 'bg-[#EE7922] w-[50px] md:w-[70px]' : 'bg-[#F8D3B6] w-[23px]'}`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DifferentWood;
