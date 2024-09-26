import React from "react";
import Image from "next/image";

const Qualityies = () => {
  return (
    <section className="px-5 sm:px-[50px] py-[100px]">
      <div className="grid md:grid-cols-4 grid-cols-2 gap-[32px] lg:gap-[53px] items-center justify-center max-w-[1140px] mx-auto">
        <div className="flex flex-col w-fit-h-fit items-center justify-center gap-[17px] lg:gap-[24px] px-[38px] sm:px-[49px] py-[30px] rounded-[20px] border-2 border-primaryColor border-opacity-[0.2]">
          <Image
            className="md:rounded-none rounded-[16px] lg:w-[100px] lg:min-w-[100px] min-w-[59px] lg:h-[100px] w-[59px] h-[59px]"
            src="/assets/water-resistant.png"
            width={100}
            height={100}
          />
          <p className="uppercase text-[13px] sm:text-[18px] md:text-[17px] xl:text-[26px] text-[#303030] w-fit text-center font-[600] leading-[19px] sm:leading-[25px] xl:leading-[36px] tracking-[7%]">
            Water <br /> Resistant
          </p>
        </div>
        <div className="flex flex-col w-fit-h-fit items-center justify-center gap-[17px] lg:gap-[24px] px-[49px] py-[30px] rounded-[20px] border-2 border-primaryColor border-opacity-[0.2]">
          <Image
            className="md:rounded-none rounded-[16px] lg:w-[100px] lg:min-w-[100px] min-w-[59px] lg:h-[100px] w-[59px] h-[59px]"
            src="/assets/hammer.png"
            width={100}
            height={100}
          />
          <p className="uppercase text-[13px] sm:text-[18px] md:text-[17px] xl:text-[26px] text-[#303030] w-fit text-center font-[600] leading-[19px] md:leading-[25px] xl:leading-[36px] tracking-[7%]">
            Hammer <br /> Resistant
          </p>
        </div>
        <div className="flex flex-col w-fit-h-fit items-center justify-center gap-[17px] lg:gap-[24px] px-[49px] py-[30px] rounded-[20px] border-2 border-primaryColor border-opacity-[0.2]">
          <Image
            className="md:rounded-none rounded-[16px] lg:w-[100px] lg:min-w-[100px] min-w-[59px] lg:h-[100px] w-[59px] h-[59px]"
            src="/assets/anti-bacteria.png"
            width={100}
            height={100}
          />
          <p className="uppercase text-[13px] sm:text-[18px] md:text-[17px] xl:text-[26px] text-[#303030] w-fit text-center font-[600] leading-[19px] md:leading-[25px] xl:leading-[36px] tracking-[7%]">
            Anti <br /> Bacterial
          </p>
        </div>
        <div className="flex flex-col w-fit-h-fit items-center justify-center gap-[17px] lg:gap-[24px] px-[49px] py-[30px] rounded-[20px] border-2 border-primaryColor border-opacity-[0.2]">
          <Image
            className="md:rounded-none rounded-[16px] lg:w-[100px] lg:min-w-[100px] min-w-[59px] lg:h-[100px] w-[59px] h-[59px]"
            src="/assets/water-resistant.png"
            width={100}
            height={100}
          />
          <p className="uppercase text-[13px] sm:text-[18px] md:text-[17px] xl:text-[26px] text-[#303030] w-fit text-center font-[600] leading-[19px] md:leading-[25px] xl:leading-[36px] tracking-[7%]">
            Paint And <br /> Maintenance
          </p>
        </div>
      </div>
    </section>
  );
};

export default Qualityies;
