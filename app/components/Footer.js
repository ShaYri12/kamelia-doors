import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white w-full">
      <div className="py-20 max-w-[1130px] w-full mx-auto flex items-start justify-between px-3.5 sm:px-5 gap-10 md:flex-row flex-col">
        <Image src="/assets/Logo.svg" alt="Logo" width={149} height={32} />
        <div className="flex items-start justify-between max-w-[714px] w-full gap-2 flex-wrap sm:flex-nowrap">
          <ul className="max-w-[100px] sm:max-w-[200px] w-full">
            <h3 className="text-[#0C0839] text-[14px] sm:text-[16px] leading-[24px] tracking-[-1%] font-bold font-jakarta mb-4">
              SELL A HOME
            </h3>
            <li className="text-[#0C0839] opacity-60 font-medium text-[14px] sm:text-[16px] leading-[42px] font-jakarta text-nowrap">
              Request an offer
            </li>
            <li className="text-[#0C0839] opacity-60 font-medium text-[14px] sm:text-[16px] leading-[42px] font-jakarta">
              Pricing
            </li>
            <li className="text-[#0C0839] opacity-60 font-medium text-[14px] sm:text-[16px] leading-[42px] font-jakarta">
              Reviews
            </li>
            <li className="text-[#0C0839] opacity-60 font-medium text-[14px] sm:text-[16px] leading-[42px] font-jakarta">
              Stories
            </li>
          </ul>
          <ul className="max-w-[100px] sm:max-w-[200px] w-full">
            <h3 className="text-[#0C0839] text-[14px] sm:text-[16px] leading-[24px] tracking-[-1%] font-bold font-jakarta mb-4">
              ABOUT
            </h3>
            <li className="text-[#0C0839] opacity-60 font-medium text-[14px] sm:text-[16px] leading-[42px] font-jakarta">
              Company
            </li>
            <li className="text-[#0C0839] opacity-60 font-medium text-[14px] sm:text-[16px] leading-[42px] font-jakarta">
              How it works
            </li>
            <li className="text-[#0C0839] opacity-60 font-medium text-[14px] sm:text-[16px] leading-[42px] font-jakarta">
              Contact
            </li>
            <li className="text-[#0C0839] opacity-60 font-medium text-[14px] sm:text-[16px] leading-[42px] font-jakarta">
              Investors
            </li>
          </ul>
          <ul className="max-w-[100px] sm:max-w-[200px] w-full">
            <h3 className="text-[#0C0839] text-[14px] sm:text-[16px] leading-[24px] tracking-[-1%] font-bold font-jakarta mb-4">
              RESOURCES
            </h3>
            <li className="text-[#0C0839] opacity-60 font-medium text-[14px] sm:text-[16px] leading-[42px] font-jakarta">
              Blog
            </li>
            <li className="text-[#0C0839] opacity-60 font-medium text-[14px] sm:text-[16px] leading-[42px] font-jakarta">
              Guides
            </li>
            <li className="text-[#0C0839] opacity-60 font-medium text-[14px] sm:text-[16px] leading-[42px] font-jakarta">
              FAQ
            </li>
            <li className="text-[#0C0839] opacity-60 font-medium text-[14px] sm:text-[16px] leading-[42px] font-jakarta">
              Help Center
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t-2 border-[#0C0839] border-opacity-10 py-8 px-5">
        <div className="max-w-[1130px] w-full mx-auto flex items-center justify-between sm:flex-row flex-col gap-5">
          <h3 className="text-[#0C0839] text-opacity-60 text-[16px] leading-[30px] font-medium">
            ©2024 NFsTay. All rights reserved
          </h3>
          <div className="opacity-60 flex items-center gap-5 md:gap-10">
            <Link href="/">
              <Image
                src="/assets/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link href="/">
              <Image
                src="/assets/instagram.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link href="/">
              <Image
                src="/assets/twitter.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link href="/">
              <Image
                src="/assets/linkedin.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
