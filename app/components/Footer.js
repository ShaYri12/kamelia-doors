"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { useTranslation } from "react-i18next";
import i18n from "../../public/locales/i18n";
import { useEffect } from "react";

const Footer = () => {
  const { t } = useTranslation();
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);
    document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";
  }, []);

  return (
    <footer className="bg-[#FCF8F3] w-full">
      <div className="py-[60px] max-w-[1130px] w-full mx-auto flex items-start justify-between px-5 gap-10 md:flex-row flex-col">
        <Image
          className="order-2 sm:order-1"
          src="/assets/logo.svg"
          alt="Logo"
          width={194.65}
          height={80}
        />
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-y-[35px] items-start justify-between order-1 sm:order-2 flex-wrap max-w-[714px] w-full sm:gap-2">
          <ul className="max-w-[100px] sm:max-w-[200px] w-full">
            <h3 className="text-blackish text-[18px] leading-[19.8px] font-[500] mb-[28px]">
              {t("Footer.pages")}
            </h3>
            <li className="text-blackish opacity-80 font-[400] text-[16px] leading-[35.2px]">
              {t("Footer.home")}
            </li>
            <li className="text-blackish opacity-80 font-[400] text-[16px] leading-[35.2px]">
              {t("Footer.about")}
            </li>
            <li className="text-blackish opacity-80 font-[400] text-[16px] leading-[35.2px]">
              {t("Footer.products")}
            </li>
            <li className="text-blackish opacity-80 font-[400] text-[16px] leading-[35.2px]">
              {t("Footer.gallery")}
            </li>
          </ul>
          <ul className="max-w-[100px] sm:max-w-[200px] w-full">
            <h3 className="text-blackish text-[18px] leading-[19.8px] font-[500] mb-[28px]">
              {t("Footer.others")}
            </h3>
            <li className="text-blackish opacity-80 font-[400] text-[16px] leading-[35.2px]">
              {t("Footer.featured_doors")}
            </li>
            <li className="text-blackish opacity-80 font-[400] text-[16px] leading-[35.2px]">
              {t("Footer.our_experts")}
            </li>
            <li className="text-blackish opacity-80 font-[400] text-[16px] leading-[35.2px]">
              {t("Footer.contact_us")}
            </li>
          </ul>
          <ul className="max-w-[100px] sm:max-w-[200px] w-full">
            <h3 className="text-blackish text-[18px] leading-[19.8px] font-[500] mb-[28px]">
              {t("Footer.join_us")}
            </h3>
            <div className="flex gap-[16px]">
              <li className="text-primaryColor">
                <FaYoutube size={20} />
              </li>
              <li className="text-primaryColor">
                <ImFacebook size={20} />
              </li>
              <li className="text-primaryColor">
                <FaTwitter size={20} />
              </li>
              <li className="text-primaryColor">
                <FaInstagram size={20} />
              </li>
              <li className="text-primaryColor">
                <FaLinkedinIn size={20} />
              </li>
            </div>
          </ul>
        </div>
      </div>

      <div className="border-t-2 border-t-[#C1C7CD] border-opacity-10 py-[40px] px-[28px] sm:px-5">
        <div className="max-w-[1130px] w-full mx-auto flex items-center justify-between sm:flex-row flex-col gap-5">
          <h3 className="text-blackish text-[14px] leading-[19.6px] font-[400] !text-center">
            {t("Footer.footer_rights")}
          </h3>
          <div className="text-blackish hidden sm:flex items-center gap-6 md:gap-6 text-[16px] leading-[16px]">
            <Link href="#privacy-policy">{t("Footer.privacy_policy")}</Link>
            <Link href="#terms-condition">{t("Footer.terms_condition")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
