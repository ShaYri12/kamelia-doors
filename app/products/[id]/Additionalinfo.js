import React, { useEffect, useState } from "react"; // Import useState and useEffect
import { useTranslation } from "react-i18next";
import i18n from "../../../public/locales/i18n";

const Additionalinfo = ({ product }) => {
  // Accept id as a prop
  const { t } = useTranslation();
  const currentLanguage = i18n?.language || "en";

  const { additionalInfo } = product;

  return (
    <section className="px-[18px] md:px-6 lg:px-8 bg-[#FAFAFA] relative">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-[20px] md:gap-[30px] lg:gap-[75px]">
        <div className="flex-grow py-[65px] md:py-[100px] relative z-[11]">
          <h2 className="text-[26px] sm:text-[30px] md:text-[36px] text-primaryColor leading-[39.6px] font-[600]">
            {t("Additionalinfo.additional_informations")}
          </h2>
          {Array.isArray(additionalInfo) ? ( // Check if additionalInfo is an array
            <ul className="mt-[18px] md:mt-[26px] list-disc ps-[20px]">
              {additionalInfo.map(
                (
                  info,
                  index // Map through additionalInfo
                ) => (
                  <li
                    key={index}
                    className="text-[16px] sm:text-[18px] md:text-[20px] font-[500] leading-[32px] sm:leading-[40px] md:leading-[47.8px] text-black"
                  >
                    {info}
                  </li>
                )
              )}
            </ul>
          ) : (
            <p className="mt-[18px] md:mt-[26px] text-[16px] sm:text-[18px] md:text-[20px] font-[500] leading-[32px] sm:leading-[40px] md:leading-[47.8px] text-black">
              {additionalInfo}
            </p>
          )}
          <button className="mt-[38px] md:mt-[42px] px-[46px] py-[14px] w-fit bg-primaryColor text-white text-[14px] sm:text-[15px] font-[500] leading-[16.5px] rounded-[5px] hover:bg-orange-600 transition-colors uppercase">
            {t("Additionalinfo.contact_us")}
          </button>
        </div>
        <div
          className={`${
            currentLanguage === "ar" ? "left-[28px]" : "right-[28px]"
          } max-h-[682px] h-full absolute top-0 z-[10] md:flex hidden`}
        >
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
