"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next"; // Import useTranslation

const AppointmentAboutUs = () => {
  const { t } = useTranslation(); // Accessing translations from common.json
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      {
        threshold: 0.1, // Adjust as needed
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div id="about-us" className="px-5 md:px-10 w-full py-10 md:py-20">
      <div className="max-w-[1160px] mx-auto w-full flex flex-col gap-[30px] sm:gap-[50px] md:gap-[80px] lg:gap-[118px]">
        {/* appointment */}
        <div className="flex items-center xmd:flex-row flex-col-reverse justify-between gap-10">
          <Image
            src="/assets/appointment.svg"
            alt={t("AppointmentAboutUs.appointment_alt")} // Use translation for alt text
            width={500}
            height={530}
            className="lg:w-[500px] xmd:w-[400px]"
          />
          <div>
            <h3 className="text-[#EE7922] text-[14px] sm:text-[20px] leading-[30px] tracking-[7%] font-medium uppercase mb-2.5">
              {t("AppointmentAboutUs.appointment")}{" "}
              {/* Translation key for appointment */}
            </h3>
            <h1 className="text-[#1B1717] text-[25px] sm:text-[40px] sm:leading-[50px] tracking-[7%] font-bold uppercase max-w-[500px]">
              {t("AppointmentAboutUs.book_appointment_with_expert")}{" "}
              {/* Translation key for booking appointment */}
            </h1>
            <p className="mt-4 xmd:mt-12 text-[#6E6E6E] text-[13px] sm:text-[17px] leading-[19px] sm:leading-[25px] font-normal xmd:max-w-[585px]">
              {t("AppointmentAboutUs.appointment_description")}{" "}
              {/* Translation key for appointment description */}
            </p>
            <button className="mt-4 sm:mt-12 sm:block hidden uppercase w-full sm:max-w-[400px] h-[48px] sm:h-[55px] bg-[#EE7922] text-white text-[17px] leading-[25px] tracking-[10%] font-semibold rounded-[10px]">
              {t("AppointmentAboutUs.book_free_appointment")}{" "}
              {/* Translation key for button text */}
            </button>
            <button className="mt-4 sm:mt-12 sm:hidden block uppercase w-full sm:w-[400px] h-[48px] sm:h-[55px] bg-[#EE7922] text-white text-[15px] sm:text-[17px] leading-[25px] tracking-[10%] font-semibold rounded-[10px]">
              {t("AppointmentAboutUs.take_measurements")}{" "}
              {/* Translation key for button text */}
            </button>
          </div>
        </div>
        {/* WHO ARE KAMELIA? */}
        <div className="flex items-center xmd:flex-row flex-col justify-between gap-10">
          <div>
            <h3 className="sm:mb-2.5 text-[#EE7922] text-[14px] sm:text-[20px] leading-[30px] tracking-[7%] font-medium uppercase">
              {t("AppointmentAboutUs.who_are_kamelia")}{" "}
              {/* Translation key for "WHO ARE KAMELIA?" */}
            </h3>
            <h1 className="text-[#1B1717] text-[35px] sm:text-[40px] leading-[50px] tracking-[7%] font-bold uppercase">
              {t("AppointmentAboutUs.about_us")}{" "}
              {/* Translation key for "ABOUT US" */}
            </h1>
            <p className="mt-3 sm:mt-5 text-[#000000] text-[13px] sm:text-[17px] leading-[19px] sm:leading-[25px] font-normal xmd:max-w-[585px]">
              {t("AppointmentAboutUs.kamelia_description_1")}{" "}
              {/* Translation key for Kamelia description */}
            </p>
            <p className="mt-3 text-[#000000] text-[13px] sm:text-[17px] leading-[19px] sm:leading-[25px] font-normal xmd:max-w-[585px]">
              {t("AppointmentAboutUs.kamelia_description_2")}{" "}
              {/* Translation key for Kamelia description */}
            </p>
            <button className="mt-5 sm:mt-12 w-full sm:w-[300px] h-[48px] sm:h-[55px] bg-[#EE7922] text-white text-[15px] sm:text-[17px] leading-[25px] tracking-[10%] font-semibold rounded-[10px] uppercase">
              {t("AppointmentAboutUs.exporting_abroad")}{" "}
              {/* Translation key for button text */}
            </button>
          </div>
          <Image
            src="/assets/about-us.svg"
            alt={t("AppointmentAboutUs.about_us_alt")} // Use translation for alt text
            width={500}
            height={530}
            className="lg:w-[500px] xmd:w-[400px]"
          />
        </div>
        {/* Banner */}
        <div className="bg-custom rounded-[30px] py-[28px] px-5 sm:p-5 grid sm:grid-cols-2 grid-cols-1 gap-5">
          <div className="text-white border border-[#FFFFFF60] bg-[#FFFFFF0D] bg-opacity-70 py-[25px] sm:py-[28px] px-[20px] sm:px-[36px] rounded-[26px]">
            <h1
              ref={sectionRef}
              className="font-inter text-[28px] sm:text-[40px] leading-[48px] tracking-[7%] font-bold italic uppercase"
            >
              {isVisible && <CountUp start={0} end={15} duration={2} />}{" "}
              {t("AppointmentAboutUs.years")}{" "}
              {/* Use translation for "Years" */}
            </h1>
            <h3 className="text-[18.5px] leading-[27px] font-medium tracking-[0.2em]">
              {t("AppointmentAboutUs.industry_experience")}{" "}
              {/* Translation key for "Industry Experience" */}
            </h3>
            <p className="mt-6 text-[14px] leading-[21px] font-normal">
              {t("AppointmentAboutUs.experience_description")}{" "}
              {/* Translation key for description */}
            </p>
          </div>
          <div className="text-white border border-[#ffffff60] bg-[#FFFFFF0D] bg-opacity-70 py-[25px] sm:py-[28px] px-[25px] sm:px-[36px] rounded-[26px] flex flex-col justify-between">
            <h1
              ref={sectionRef}
              className="font-inter text-[28px] sm:text-[40px] leading-[48px] tracking-[7%] font-bold italic uppercase"
            >
              {isVisible && <CountUp start={0} end={200} duration={2} />}+{" "}
              {t("AppointmentAboutUs.products")}{" "}
              {/* Use translation for "Products" */}
            </h1>
            <p className="mt-6 text-[14px] leading-[21px] font-normal">
              {t("AppointmentAboutUs.experience_description")}{" "}
              {/* Translation key for description */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentAboutUs;
