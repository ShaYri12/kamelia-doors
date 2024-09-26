import React from "react";

const Additionalinfo = () => {
  return (
    <section className="px-[18px] md:px-6 lg:px-8 bg-[#FAFAFA] relative">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-[20px] md:gap-[30px] lg:gap-[75px]">
        <div className="flex-grow py-[65px] md:py-[100px] relative z-[11]">
          <h2 className="text-[26px] sm:text-[30px] md:text-[36px] text-primaryColor leading-[39.6px] font-[600]">
            Additional Informations
          </h2>
          <ul className="mt-[18px] md:mt-[26px] list-disc ps-[20px]">
            <li className="text-[16px] sm:text-[18px] md:text-[20px] font-[500] leading-[32px] sm:leading-[40px] md:leading-[47.8px] text-black">
              Material Options: Solid wood, engineered wood, MDF, and glass.
            </li>
            <li className="text-[16px] sm:text-[18px] md:text-[20px] font-[500] leading-[32px] sm:leading-[40px] md:leading-[47.8px] text-black">
              Finish Choices: Matte, semi-gloss, high-gloss, and custom stains.
            </li>
            <li className="text-[16px] sm:text-[18px] md:text-[20px] font-[500] leading-[32px] sm:leading-[40px] md:leading-[47.8px] text-black">
              Available Sizes: Standard and custom dimensions to fit any space.
            </li>
            <li className="text-[16px] sm:text-[18px] md:text-[20px] font-[500] leading-[32px] sm:leading-[40px] md:leading-[47.8px] text-black">
              Hardware: Includes a selection of handles, hinges, and locks.
            </li>
            <li className="text-[16px] sm:text-[18px] md:text-[20px] font-[500] leading-[32px] sm:leading-[40px] md:leading-[47.8px] text-black">
              Customization: Personalized designs, engravings, and panel styles.
            </li>
          </ul>
          <button className="mt-[38px] md:mt-[42px] px-[46px] py-[14px] w-fit bg-primaryColor text-white text-[14px] sm:text-[15px] font-[500] leading-[16.5px] rounded-[5px] hover:bg-orange-600 transition-colors uppercase">
            CONTACT US
          </button>
        </div>
        <div className="max-h-[682px] h-full absolute right-[28px] top-0 z-[10] md:flex hidden">
          <img
            src="/assets/diagonal-orange.png"
            alt="vector"
            className="object-contain h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Additionalinfo;