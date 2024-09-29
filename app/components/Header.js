"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import i18n from "../../public/locales/i18n";

const Header = () => {
  const { t } = useTranslation(); // Initialize translation hook
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);
    document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setCurrentHash(window.location.hash);
  }, []);

  const getLinkClasses = (linkPath) => {
    const isHashLink = linkPath.startsWith("/");
    const isExactMatch = pathname === linkPath;
    const isHashMatch = isHashLink && currentHash === linkPath;

    if (isExactMatch || isHashMatch) {
      return "px-[13.5px] py-[12px] md:py-[20px] rounded-md bg-primaryColor bg-opacity-[0.2] text-primaryColor transition";
    }

    return "px-[13.5px] py-[12px] md:py-[20px] hover:bg-primaryColor hover:bg-opacity-[0.2] hover:text-primaryColor transition";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full text-gray-600 z-[999] transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-[1280px] mx-auto flex px-5 ${
          scrolled ? "py-2" : "sm:py-5 py-[12px]"
        } items-center justify-between transition-all duration-300`}
      >
        <Link
          href="/"
          className="flex items-center sm:w-auto sm:h-auto text-[36px] text-black font-abhaya font-[700] leading-[42.47px]"
        >
          <Image
            src="/assets/logo.svg"
            width={scrolled ? 130 : 194.65}
            height={scrolled ? 70 : 80}
            alt="Logo"
            className="transition-all duration-300 sm:h-auto h-[36px] sm:w-auto w-[87.59px]"
          />
        </Link>

        <button
          className="lg:hidden text-black focus:outline-none"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-[28px] h-[28px]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>

        <div className="hidden lg:flex items-center gap-[20px]">
          <nav className="flex gap-[20px] text-[14px] leading-[21px] tracking-[10%] text-blackish font-[600] uppercase">
            <a href="/#hero" className={getLinkClasses("/#hero")}>
              {t("Header.home")}
            </a>
            <a href="/#about-us" className={getLinkClasses("/#about-us")}>
              {t("Header.about_us")}
            </a>
            <Link href="/products" className={getLinkClasses("/products")}>
              {t("Header.our_products")}
            </Link>

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="px-[13.5px] py-[12px] md:py-[20px] hover:bg-primaryColor hover:bg-opacity-[0.2] hover:text-primaryColor transition uppercase font-[600] text-[14px] flex items-center gap-[5px]"
              >
                {t("Header.our_projects")}
                <IoIosArrowDown />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 py-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                  <Link
                    href="/project-1"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {t("Header.project_1")}
                  </Link>
                  <Link
                    href="/project-2"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {t("Header.project_2")}
                  </Link>
                  <Link
                    href="/project-3"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {t("Header.project_3")}
                  </Link>
                </div>
              )}
            </div>
            <a href="/#portfolio" className={getLinkClasses("/#portfolio")}>
              {t("Header.portfolio")}
            </a>
          </nav>
          <div className="inline-flex gap-[22px]">
            <a href="/#contact">
              <button className="uppercase font-[600] text-[15px] leading-[21px] text-white tracking-[10%] py-[13px] px-[23px] bg-primaryColor rounded-[10px]">
                {t("Header.contact_us")}
              </button>
            </a>
          </div>
          <LanguageSwitcher />
        </div>

        <div
          ref={menuRef}
          id="mobile-menu"
          className={`fixed inset-y-0 right-0 transform w-2/3 max-w-xs p-5 z-50 bg-white lg:hidden flex flex-col items-center gap-[10px] shadow-lg transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="self-end text-black focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-[28px] h-[28px]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <nav className="flex flex-col gap-[10px]">
            <a href="/#hero" className={getLinkClasses("/#hero")}>
              {t("Header.home")}
            </a>
            <a href="/#about-us" className={getLinkClasses("/#about-us")}>
              {t("Header.about_us")}
            </a>
            <Link href="/products" className={getLinkClasses("/products")}>
              {t("Header.our_products")}
            </Link>
            <Link href="/portfolio" className={getLinkClasses("/#portfolio")}>
              {t("Header.portfolio")}
            </Link>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-left flex items-center justify-between w-full px-[13.5px] py-[12px] md:py-[20px] hover:bg-primaryColor hover:bg-opacity-[0.2] hover:text-primaryColor transition uppercase font-[600] text-[14px]"
              >
                {t("Header.our_projects")}
                <IoIosArrowDown />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 py-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                  <Link
                    href="/project-1"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {t("Header.project_1")}
                  </Link>
                  <Link
                    href="/project-2"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {t("Header.project_2")}
                  </Link>
                  <Link
                    href="/project-3"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {t("Header.project_3")}
                  </Link>
                </div>
              )}
            </div>
            <LanguageSwitcher />
            <a href="/#contact">
              <button className="uppercase font-[600] text-[15px] leading-[21px] text-white tracking-[10%] py-[13px] px-[23px] bg-primaryColor rounded-[10px]">
                {t("Header.contact_us")}
              </button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
