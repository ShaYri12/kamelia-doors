import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const WhoWeAre = () => {
  const { t } = useTranslation();

  return (
    <section className="px-[18px]">
      <div className="max-w-[1200px] mx-auto md:pb-[100px] pb-[17.35px] md:px-6 lg:px-8 flex xmd:flex-row flex-col items-center gap-[20px] md:gap-[30px] lg:gap-[75px]">
        <Image
          src="/assets/who-we-are.svg"
          alt="Kamelia Doors"
          width={500}
          height={530}
          className="lg:w-[500px] xmd:w-[400px]"
        />

        <div>
          <h3 className="text-primaryColor text-[20px] leading-[30px] tracking-[7%] uppercase font-[500]">
            {t("WhoWeAre.title")}
          </h3>
          <h2 className="text-[22px] md:text-[28px] lg:text-[40px] uppercase font-[700] text-[#1B1717] leading-[31px] md:leading-[40px] lg:leading-[50px] tracking-[7%] md:mt-[8px] mt-[2px]">
            {t("WhoWeAre.subtitle")}
          </h2>
          <p className="text-[#6E6E6E] md:mt-[20px] lg:mt-[42px] mt-[12px] font-[400] text-[13px] md:text-[17px] leading-[19.5px] md:leading-[25.5px]">
            {t("WhoWeAre.description")}
          </p>
          <button className="md:flex hidden mt-6 px-6 py-3 bg-primaryColor text-white font-semibold rounded-md hover:bg-orange-600 transition duration-300">
            {t("WhoWeAre.learn_more")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
