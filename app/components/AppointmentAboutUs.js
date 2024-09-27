"use client"
import Image from "next/image";
import React from "react";
import CountUp from 'react-countup';

const AppointmentAboutUs = () => {
  return (
    <div id="about-us" className="px-5 md:px-10 w-full py-10 md:py-20">
      <div className="max-w-[1160px] mx-auto w-full flex flex-col gap-[30px] sm:gap-[50px] md:gap-[80px] lg:gap-[118px]">
        {/* appointment */}
        <div className="flex items-center xmd:flex-row flex-col-reverse justify-between gap-10">
          <Image
            src="/assets/appointment.svg"
            alt="appointment"
            width={500}
            height={530}
            className="lg:w-[500px] xmd:w-[400px]"
          />
          <div>
            <h3 className="text-[#EE7922] text-[14px] sm:text-[20px] leading-[30px] tracking-[7%] font-medium uppercase mb-2.5">
              appointment
            </h3>
            <h1 className="text-[#1B1717] text-[25px] sm:text-[40px] sm:leading-[50px] tracking-[7%] font-bold uppercase max-w-[500px]">
              book appointment with our expert
            </h1>
            <p className="mt-4 xmd:mt-12 text-[#6E6E6E] text-[13px] sm:text-[17px] leading-[19px] sm:leading-[25px] font-normal xmd:max-w-[585px]">
              Ready to take the next step in creating your perfect door? Book an
              appointment with our expert to get precise measurements taken
              right at your location. Our specialist will guide you through the
              process, ensuring that every detail is accounted for, from the
              dimensions to the design preferences, so you can achieve the exact
              look and fit you desire for your home.
            </p>
            <button className="mt-4 sm:mt-12 sm:block hidden uppercase w-full sm:max-w-[400px] h-[48px] sm:h-[55px] bg-[#EE7922] text-white text-[17px] leading-[25px] tracking-[10%] font-semibold rounded-[10px]">
              Book your free appointment now
            </button>
            <button className="mt-4 sm:mt-12 sm:hidden block uppercase w-full sm:w-[400px] h-[48px] sm:h-[55px] bg-[#EE7922] text-white text-[15px] sm:text-[17px] leading-[25px] tracking-[10%] font-semibold rounded-[10px]">
              Take MEASUREMENTS
            </button>
          </div>
        </div>
        {/* WHO ARE KAMELIA? */}
        <div className="flex items-center xmd:flex-row flex-col justify-between gap-10">
          <div>
            <h3 className="sm:mb-2.5 text-[#EE7922] text-[14px] sm:text-[20px] leading-[30px] tracking-[7%] font-medium uppercase">
              WHO ARE KAMELIA?
            </h3>
            <h1 className="text-[#1B1717] text-[35px] sm:text-[40px] leading-[50px] tracking-[7%] font-bold uppercase">
              ABOUT US
            </h1>
            <p className="mt-3 sm:mt-5 text-[#000000] text-[13px] sm:text-[17px] leading-[19px] sm:leading-[25px] font-normal xmd:max-w-[585px]">
              Kamellia Doors is a company specializing in the manufacturing of
              custom interior doors according to precise specifications and
              measurements. Our production facility, covering over 6,500 square
              meters, is equipped with a comprehensive production line that
              meets your needs for both speed and quality.
            </p>
            <p className="mt-3 text-[#000000] text-[13px] sm:text-[17px] leading-[19px] sm:leading-[25px] font-normal xmd:max-w-[585px]">
              We offer a wide range of doors in various styles and designs to
              satisfy diverse customer requirements, including interior doors,
              exterior doors, security doors, glass doors, and more.
            </p>
            <button className="mt-5 sm:mt-12 w-full sm:w-[300px] h-[48px] sm:h-[55px] bg-[#EE7922] text-white text-[15px] sm:text-[17px] leading-[25px] tracking-[10%] font-semibold rounded-[10px] uppercase">
              EXPORTING ABOARD
            </button>
          </div>
          <Image
            src="/assets/about-us.svg"
            alt="about-us"
            width={500}
            height={530}
            className="lg:w-[500px] xmd:w-[400px]"
          />
        </div>
        {/* Banner */}
        <div className="bg-custom rounded-[30px] py-[28px] px-5 sm:p-5 grid sm:grid-cols-2 grid-cols-1 gap-5">
          <div className="text-white border border-[#FFFFFF60] bg-[#FFFFFF0D] bg-opacity-70 py-[25px] sm:py-[28px] px-[20px] sm:px-[36px] rounded-[26px]">
            <h1 className="font-inter text-[28px] sm:text-[40px] leading-[48px] tracking-[7%] font-bold italic uppercase">
              <CountUp start={0} end={15} duration={2} /> Years
            </h1>
            <h3 className="text-[18.5px] leading-[27px] font-medium tracking-[0.2em]">
              Industry Experience
            </h3>
            <p className="mt-6 text-[14px] leading-[21px] font-normal">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accuium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
          <div className="text-white border border-[#ffffff60] bg-[#FFFFFF0D] bg-opacity-70 py-[25px] sm:py-[28px] px-[25px] sm:px-[36px] rounded-[26px] flex flex-col justify-between">
            <h1 className="font-inter text-[28px] sm:text-[40px] leading-[48px] tracking-[7%] font-bold italic uppercase">
              <CountUp start={0} end={200} duration={2} />+ Products
            </h1>
            <p className="mt-6 text-[14px] leading-[21px] font-normal">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accuium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentAboutUs;
