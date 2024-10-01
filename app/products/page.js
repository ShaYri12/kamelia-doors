"use client";
import i18n from "@/public/locales/i18n";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BASE_URL } from "../config";

const Products = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);
    document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";

    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/doors-list/`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="bg-[#FCF8F3]">
      <div className="pb-[65px] md:pb-[100px] pt-[100px] sm:pt-[150px] lg:pt-[180px] px-[18px] md:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          <h1 className="text-[30px] md:text-[40px] leading-[50px] tracking-[7%] font-[700] md:mb-[65px] mb-[30px] text-center uppercase">
            {t("Products.our_products")} {/* Translated heading */}
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[9px] md:gap-x-[20px] md:gap-y-[60px] gap-y-[12.33px]">
            {products.map((product) => (
              <div key={product.id} className="overflow-hidden">
                <Link href={`/products/${product.id}`}>
                  <img
                    src={product.images[0]?.image || "/placeholder.jpg"}
                    alt={product.name}
                    className="w-full h-[202.91px] md:h-[300px] object-cover rounded-[12px]"
                  />
                </Link>
                <div className="px-[6px] md:px-[9px] pt-[12px] md:pt-[26px] text-left">
                  <Link href={`/products/${product.id}`}>
                    <h2 className="text-[13px] sm:text-[20px] md:text-[24px] leading-[18px] md:leading-[25px] font-[500] mb-[8px] text-blackish line-clamp-2">
                      {product.name}
                    </h2>
                  </Link>

                  <p className="text-grayish text-[8px] md:text-[13px] font-[400] md:mt-[15px] mt-[-2px] line-clamp-3">
                    {product.description}
                  </p>
                  <div className="flex justify-between flex-wrap items-center mt-[20px] md:mt-[30px] gap-1">
                    <button className="px-[10px] md:px-[15px] py-[8px] md:py-[12px] border-2 border-primaryColor text-primaryColor font-[600] text-[9px] md:text-[13px] leading-[13.5px] md:leading-[19.5px] uppercase rounded-[8px] hover:bg-orange-600 transition duration-300">
                      {t("Products.add_to_cart")} {/* Translated button text */}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
