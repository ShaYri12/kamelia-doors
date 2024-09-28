import productData from "../../public/productData";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation

const FeaturedDoors = () => {
  const { t } = useTranslation(); // Accessing translations from common.json

  // Slice the product data to take only the first 8 products
  const limitedProductData = productData.slice(0, 8);

  return (
    <section className="bg-[#FCF8F3]">
      <div className="py-[50px] md:py-[80px] px-[18px] md:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          <h1 className="text-[30px] md:text-[40px] leading-[50px] tracking-[7%] font-[700] text-center uppercase">
            {t("FeaturedDoors.featured_doors")}{" "}
            {/* Use translation for "Featured Doors" */}
          </h1>
          <p className="md:text-[17px] text-[14px] font-[400] text-[#6E6E6E] md:leading-[25.5px] leading-[21px] md:mb-[60px] mb-[30px] md:mt-[20px] mt-[11px] text-center max-w-[999px] mx-auto">
            {t("FeaturedDoors.featured_doors_description")}{" "}
            {/* Use translation for description */}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[9px] md:gap-x-[20px] md:gap-y-[60px] gap-y-[20px]">
            {limitedProductData.map((product) => (
              <div key={product.id} className="overflow-hidden">
                <Link href={`/products/${product.id}`}>
                  <img
                    src={product.imageUrl}
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

                  <p className="text-grayish line-clamp-2 text-[8px] md:text-[13px] font-[400] md:mt-[15px] mt-[-2px]">
                    {product.description}
                  </p>
                  <div className="flex justify-between flex-wrap items-center mt-[20px] md:mt-[30px] gap-1">
                    {/* <div className="font-[500] text-[14px] md:text-[22px] text-blackish">
                      ${product.price.toFixed(2)}
                    </div> */}
                    <button className="px-[10px] md:px-[15px] py-[8px] md:py-[12px] border-2 border-primaryColor text-primaryColor hover:text-white font-[600] text-[9px] md:text-[13px] leading-[13.5px] md:leading-[19.5px] uppercase rounded-[8px] hover:bg-orange-600 transition duration-300">
                      {t("FeaturedDoors.add_to_cart")}{" "}
                      {/* Use translation for "Add to Cart" */}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-[45px] md:mt-[80px]">
            <button className="px-[23px] py-[13.5px] w-fit bg-primaryColor uppercase text-white text-[15px] font-[500] leading-[22.5px] tracking-[2px] rounded-[10px] hover:text-white hover:bg-orange-600 transition-colors">
              {t("FeaturedDoors.view_more_doors")}{" "}
              {/* Use translation for "View More Doors" */}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDoors;
