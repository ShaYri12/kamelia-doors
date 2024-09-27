"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function OurProjectGallery() {
  const allDoors = [
    { id: 1, src: "/assets/project-gallery-1.png" },
    {
      id: 2,
      src: "/assets/project-gallery-2.png",
      title: "Door Name",
      details:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusium dolore...",
    },
    { id: 3, src: "/assets/project-gallery-3.png" },
    { id: 4, src: "/assets/project-gallery-4.png" },
    { id: 5, src: "/assets/project-gallery-5.png" },
    { id: 6, src: "/assets/project-gallery-6.png" },
  ];

  const [doors, setDoors] = useState(allDoors);

  // Effect to listen for window resize and adjust the number of images displayed
  useEffect(() => {
    const updateDoors = () => {
      if (window.innerWidth < 768) {
        const filteredDoors = allDoors.filter((door) => door.id !== 1);
        setDoors(filteredDoors.slice(0, 3)); // Show the first 3 images excluding the first image
      } else {
        setDoors(allDoors); // Show all images
      }
    };

    // Call initially
    updateDoors();

    // Add event listener for window resize
    window.addEventListener("resize", updateDoors);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", updateDoors);
    };
  }, [allDoors]); // Make sure to include allDoors in the dependency array

  return (
    <div
      id="portfolio"
      className="w-full bg-[#FCF8F3] py-[40px] md:py-[80px] px-5 md:px-6 lg:px-8"
    >
      <div className="max-w-[1160px] w-full mx-auto">
        <h1 className="text-[25px] md:text-[40px] md:leading-[50px] tracking-[7%] font-[700] text-center uppercase">
          Our Project Gallery
        </h1>
        <p className="md:text-[17px] text-[12px] font-[400] text-[#6E6E6E] md:leading-[25.5px] leading-[21px] md:mb-[60px] mb-[30px] md:mt-[20px] mt-[11px] text-center max-w-[999px] mx-auto">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo
        </p>
      </div>
      <div className="max-w-[1160px] mx-auto flex flex-wrap md:flex-row flex-col justify-center gap-[16px]">
        {doors.map((door) => (
          <div
            key={door.id}
            className={`relative rounded-[20px] overflow-hidden shadow-md md:h-[350px] h-[276px] sm:min-w-[300px] min-w-[284px] md:mx-0 mx-auto ${
              door.id === 1 || door.id === 3
                ? "lg:w-[28%] md:w-[48.8%] w-[95%]" // First and third images take ~28% width
                : door.id === 2
                ? "xl:w-[41%] md:w-[48.8%] w-[95%]" // Second image takes ~44% width
                : door.id === 4 || door.id === 6
                ? "lg:w-[34%] md:w-[48.8%] w-[95%]" // Fourth and sixth images take ~36% width
                : "xl:w-[29%] md:w-[48.8%] w-[95%]" // Adjust other images as necessary
            }`}
          >
            <Image
              src={door.src}
              alt={door.title}
              className="w-full h-full object-cover"
              width={400}
              height={400}
            />
            {door.details && (
              <div
                className="absolute inset-0 text-white p-[24px] flex flex-col justify-end items-center"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.84) 70.5%, #000000 100%)",
                }}
              >
                <h2 className="md:text-[26px] text-[22px] leading-[24px] font-[600] text-white">
                  {door.title}
                </h2>
                <p className="md:mt-[11px] mt-[9px] mb-[19px] md:mb-[30px] md:text-[14px] text-[10px] font-[400] text-center">
                  {door.details}
                </p>
                <button className="px-[23px] py-[11.5px] w-fit bg-primaryColor uppercase text-white text-[14px] font-[500] leading-[21px] tracking-[2px] rounded-[10px] hover:bg-orange-600 transition-colors">
                  View Details
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-[45px] md:mt-[75px]">
        <button className="px-[35px] py-[13.5px] w-fit bg-primaryColor uppercase text-white text-[15px] font-[500] leading-[22.5px] tracking-[2px] rounded-[10px] hover:bg-orange-600 transition-colors">
          View More
        </button>
      </div>
    </div>
  );
}
