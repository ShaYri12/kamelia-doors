"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
  const [currentHash, setCurrentHash] = useState(""); // State to store current hash
  const [scrolled, setScrolled] = useState(false); // State to track scroll position
  const menuRef = useRef(null);
  const pathname = usePathname(); // Get the current path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
      setIsDropdownOpen(false); // Close dropdown when clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Set the current hash when the component mounts
    setCurrentHash(window.location.hash);
  }, []);

  // Function to apply active link styles
  const getLinkClasses = (linkPath) => {
    // Check if the link path has a hash
    const isHashLink = linkPath.startsWith("/#");

    // Determine if the current pathname is exactly equal to the link path
    const isExactMatch = pathname === linkPath;

    // Determine if the current hash matches the link
    const isHashMatch = isHashLink && currentHash === linkPath;

    // Apply active class if it's a hash link or an exact match
    if (isExactMatch || isHashMatch) {
      return "px-[13.5px] py-[12px] md:py-[20px] rounded-md bg-primaryColor bg-opacity-[0.2] text-primaryColor transition";
    }

    return "px-[13.5px] py-[12px] md:py-[20px] hover:bg-primaryColor hover:bg-opacity-[0.2] hover:text-primaryColor transition";
  };

  // Scroll event listener to detect when the user scrolls past a certain point
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
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center sm:w-auto sm:h-auto text-[36px] text-black font-abhaya font-[700] leading-[42.47px]"
        >
          <Image
            src="/assets/logo.svg"
            width={scrolled ? 130 : 194.65} // Reduce logo size when scrolled
            height={scrolled ? 70 : 80}
            alt="Logo"
            className="transition-all duration-300 sm:h-auto h-[36px] sm:w-auto w-[87.59px]"
          />
        </Link>

        {/* Hamburger Button for Mobile Menu */}
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

        {/* Desktop Navigation + Buttons */}
        <div className="hidden lg:flex items-center gap-[20px]">
          <nav className="flex gap-[20px] text-[14px] leading-[21px] tracking-[10%] text-blackish font-[600] uppercase">
            <Link href="/#hero" className={getLinkClasses("/#hero")}>
              Home
            </Link>
            <Link href="/#about-us" className={getLinkClasses("/#about-us")}>
              About Us
            </Link>
            <Link
              href="/our-products"
              className={getLinkClasses("/our-products")}
            >
              Our Products
            </Link>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="px-[13.5px] py-[12px] md:py-[20px] hover:bg-primaryColor hover:bg-opacity-[0.2] hover:text-primaryColor transition uppercase font-[600] text-[14px] flex items-center gap-[5px]"
              >
                Our Projects
                <IoIosArrowDown />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 py-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                  <Link
                    href="/project-1"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Project 1
                  </Link>
                  <Link
                    href="/project-2"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Project 2
                  </Link>
                  <Link
                    href="/project-3"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Project 3
                  </Link>
                </div>
              )}
            </div>
            <Link href="/#portfolio" className={getLinkClasses("/#portfolio")}>
              Portfolio
            </Link>
          </nav>
          <div className="inline-flex gap-[22px]">
            <Link href="/#contact">
              <button className="uppercase font-[600] text-[15px] leading-[21px] text-white tracking-[10%] py-[13px] px-[23px] bg-primaryColor rounded-[10px]">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          id="mobile-menu"
          className={`fixed inset-y-0 right-0 transform w-2/3 max-w-xs p-5 z-50 bg-white lg:hidden flex flex-col items-center gap-[10px] shadow-lg transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
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

          {/* Mobile Navigation */}
          <nav className="flex flex-col gap-[5px] items-center text-[18px] sm:text-[20px] leading-[24px] text-primary-color font-[400]">
            <Link href="/#hero" className={getLinkClasses("/#hero")}>
              Home
            </Link>
            <Link href="/#about-us" className={getLinkClasses("/#about-us")}>
              About Us
            </Link>
            <Link
              href="/our-products"
              className={getLinkClasses("/our-products")}
            >
              Our Products
            </Link>
            <button
              onClick={toggleDropdown}
              className="hover:text-primaryColor px-[13.5px] py-[12px] flex gap-[5px] items-center"
            >
              Our Projects
              <IoIosArrowDown />
            </button>
            {isDropdownOpen && (
              <div className="flex flex-col gap-[8px]">
                <Link
                  href="/project-1"
                  className="hover:text-primaryColor"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Project 1
                </Link>
                <Link
                  href="/project-2"
                  className="hover:text-primaryColor"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Project 2
                </Link>
                <Link
                  href="/project-3"
                  className="hover:text-primaryColor"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Project 3
                </Link>
              </div>
            )}
            <Link href="/#portfolio" className={getLinkClasses("/#portfolio")}>
              Portfolio
            </Link>
          </nav>

          <div className="inline-flex gap-[22px]">
            <Link href="/#contact">
              <button className="uppercase font-[600] text-[15px] leading-[21px] text-white tracking-[10%] py-[13px] px-[23px] bg-primaryColor rounded-[10px]">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
