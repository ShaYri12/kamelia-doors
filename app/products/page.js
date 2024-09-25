"use client";
import React from "react";

// Sample product data
const productData = [
  {
    id: 1,
    name: "Door Name 1",
    description: "Sed ut perspiciatis unde omnis iste voluptatem accuium.",
    price: 200.0,
    imageUrl: "/assets/product-1.png",
  },
  {
    id: 2,
    name: "Door Name 2",
    description: "Sed ut perspiciatis unde omnis iste voluptatem accuium.",
    price: 200.0,
    imageUrl: "/assets/product-2.png",
  },
  {
    id: 3,
    name: "Door Name 3",
    description: "Sed ut perspiciatis unde omnis iste voluptatem accuium.",
    price: 200.0,
    imageUrl: "/assets/product-3.png",
  },
  {
    id: 4,
    name: "Door Name 4",
    description: "Sed ut perspiciatis unde omnis iste voluptatem accuium.",
    price: 200.0,
    imageUrl: "/assets/product-4.png",
  },
];

const Products = () => {
  return (
    <section className="bg-[#FCF8F3]">
      <div className="pb-[38px] pt-[150px] lg:pt-[180px] px-[18px] md:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          <h1 className="text-[40px] leading-[50px] tracking-[7%] font-[700] mb-[65px] text-center uppercase">
            Our Products
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productData.map((product) => (
              <div key={product.id} className="rounded-lg overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-[300px] object-cover"
                />
                <div className="p-4 text-left">
                  <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="font-bold text-xl mb-2">
                    ${product.price.toFixed(2)}
                  </div>
                  <button className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition duration-300">
                    Add to Cart
                  </button>
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
