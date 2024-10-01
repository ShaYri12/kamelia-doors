"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // To get the current path
import Qualityies from "../../components/Qualityies";
import Additionalinfo from "./Additionalinfo";
import Related from "./Related";
import { useTranslation } from "react-i18next"; // Import useTranslation
import i18n from "@/public/locales/i18n";
import { BASE_URL } from "@/app/config";

const ProductPage = () => {
  const { t } = useTranslation(); // Initialize translation
  const pathname = usePathname(); // Get the path
  const id = parseInt(pathname.split("/").pop());

  const [product, setProduct] = useState(null);
  const [image, setImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get language from localStorage
    const savedLanguage = localStorage.getItem("language") || "en";

    // Set language and document direction only if it has changed
    if (i18n.language !== savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";
    }

    // Check if the id is valid before attempting to fetch
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`${BASE_URL}/doors-detail/${id}`);
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
          const data = await response.json();
          setProduct(data);
          setLoading(false);
        } catch (err) {
          console.error("Error fetching product details:", err);
          setError(t("ProductPage.error_loading_product"));
          setLoading(false);
        }
      };

      fetchProduct();
    } else {
      console.error("Invalid product ID:", id);
    }
  }, [id, t]); // Only dependencies are id and t

  if (loading) {
    return (
      <div className="pb-[38px] pt-[150px] lg:pt-[223px] px-[18px] md:px-6 lg:px-8">
        Loading...
      </div>
    ); // Show loading message
  }

  if (error) {
    return (
      <div className="pb-[38px] pt-[150px] lg:pt-[223px] px-[18px] md:px-6 lg:px-8">
        {error}
      </div>
    ); // Show error message if something went wrong
  }

  // If product is not found or invalid
  if (!product) {
    return (
      <div className="pb-[38px] pt-[150px] lg:pt-[223px] px-[18px] md:px-6 lg:px-8">
        Not Found
      </div>
    ); // Translated message
  }

  return (
    <section>
      <div className="pb-[38px] pt-[150px] lg:pt-[223px] px-[18px] md:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-[20px] md:gap-[30px] lg:gap-[75px]">
          {/* Image Section */}
          <div className="lg:w-[50%] flex flex-col justify-center">
            <div className="rounded-[17px] bg-[#E8E0D7] flex items-center justify-center h-[508px]">
              <img
                src={product.images[image]?.image || ""}
                alt={`Product Image ${image + 1}`}
                className="rounded-md object-contain h-full"
              />
            </div>

            <div className="flex justify-between mt-[21px]">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setImage(index)}
                  className={`focus:outline-none rounded-md h-[125px] w-[155px] ${
                    image === index ? "border border-primaryColor" : ""
                  } flex items-center justify-center`}
                >
                  <img
                    src={img.image}
                    alt={`Thumbnail ${index + 1}`}
                    className="object-cover h-full w-full rounded-md"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="lg:w-[50%] flex flex-col justify-start pt-[35px]">
            <h3 className="text-primaryColor text-[11px] leading-[12.1px] uppercase font-[500]">
              {t("ProductPage.door_category")}
            </h3>
            <h1 className="text-[34px] md:text-[40px] font-[500] leading-[44px] text-blackish mt-[8px] md:mt-[17px]">
              {product.name}
            </h1>
            <p className="text-black text-[14px] font-[400] leading-[17.5px] mt-[18px] md:mt-[35px]">
              {product.description}
            </p>

            <p className="text-primaryColor text-[28px] md:text-[36px] leading-[30px] md:leading-[39.6px] font-[500] mt-[17px]">
              1000 JD
            </p>

            {/* Color Options */}
            <div className="flex space-x-4 mt-[16px] md:mt-[23px]">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className="w-[41.67px] h-[40.64px] rounded-[4px] border-2 border-transparent hover:border-primaryColor cursor-pointer"
                  style={{
                    backgroundColor: color.color_name || "#ccc", // Change the background color based on color_name
                  }}
                ></span>
              ))}
            </div>

            {/* Order Button */}
            <button className="mt-[40px] md:mt-[47px] px-[49px] py-[14px] w-fit bg-primaryColor uppercase text-white text-[15px] font-[500] leading-[16.5px] rounded-[5px] hover:bg-orange-600 transition-colors">
              {t("ProductPage.order_now")} {/* Translated button text */}
            </button>
          </div>
        </div>
      </div>
      <Additionalinfo product={product} />
      <Related />
      <Qualityies />
    </section>
  );
};

export default ProductPage;
