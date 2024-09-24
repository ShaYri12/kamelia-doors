import React from "react";

const WhoWeAre = () => {
  return (
    <section className="px-[18px]">
      <div class="max-w-[1280px] mx-auto md:pb-[100px] pb-[17.35px] md:px-6 lg:px-8 flex md:flex-row flex-col items-center gap-[20px] md:gap-[30px] lg:gap-[75px]">
        <div class="md:w-1/2 md:order-1 order-2">
          <img
            src="/assets/who-we-are.png"
            alt="Kamelia Doors"
            class="rounded-[20px]"
          />
        </div>

        <div class="md:w-1/2 gap-4 md:order-2 order-1">
          <h3 class="text-primaryColor text-[20px] leading-[30px] tracking-[7%] uppercase font-[500]">
            Who we are
          </h3>
          <h2 class="text-[22px] md:text-[28px] lg:text-[40px] uppercase font-[700] text-[#1B1717] leading-[31px] md:leading-[40px] lg:leading-[50px] tracking-[7%] md:mt-[8px] mt-[2px]">
            We are perfect for home interior doors
          </h2>
          <p class="text-[#6E6E6E] md:mt-[30px] lg:mt-[42px] mt-[12px] font-[400] text-[13px] md:text-[17px] leading-[19.5px] md:leading-[25.5px]">
            At Kamelia Doors, we take pride in crafting the perfect doors to
            complement your home's interior. With a focus on quality, precision,
            and durability, our expert craftsmen ensure that every door is
            tailored to meet the highest standards. Whether you're looking to
            add a touch of elegance or a modern flair to your space, Kamelia
            Doors provides solutions that not only enhance the beauty of your
            home but also offer lasting value. Discover the art of fine interior
            doors with us.
          </p>
          <button class="md:flex hidden mt-[48px] px-[23px] py-[13px] bg-primaryColor uppercase text-white font-[600] text-[15px] leading-[22.5px] tracking-[10%] rounded-[10px] hover:bg-orange-600 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
