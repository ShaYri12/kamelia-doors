"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BASE_URL } from "../config";

export default function OurProjectGallery() {
  const { t } = useTranslation();

  const [projects, setProjects] = useState([]);
  const [activeProjectId, setActiveProjectId] = useState(2); // Default to show second project
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Fetching the project data from the API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${BASE_URL}/projects-list/`);
        const data = await response.json();

        // Set fetched data to projects
        setProjects(data);
        setFilteredProjects(data); // Initially set filteredProjects to all fetched projects
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProjects();
  }, []);

  // Responsive image filtering logic
  useEffect(() => {
    const updateProjects = () => {
      if (window.innerWidth < 768) {
        const filtered = projects.filter((project) => project.id !== 1);
        setFilteredProjects(filtered.slice(0, 3)); // Show the first 3 images excluding the first image
      } else {
        setFilteredProjects(projects); // Show all images on larger screens
      }
    };

    updateProjects(); // Initial call to set the filtered projects based on screen size
    window.addEventListener("resize", updateProjects);

    return () => {
      window.removeEventListener("resize", updateProjects);
    };
  }, [projects]);

  const handleProjectClick = (id) => {
    if (activeProjectId === id) {
      setActiveProjectId(2); // Reset to second project if the same image is clicked
    } else {
      setActiveProjectId(id); // Set the clicked project as active
    }
  };

  const handleMouseEnter = (id) => {
    setActiveProjectId(id); // Set active project on hover
  };

  const handleMouseLeave = () => {
    setActiveProjectId(2); // Reset to second project when mouse leaves
  };

  return (
    <div
      id="portfolio"
      className="w-full bg-[#FCF8F3] py-[40px] md:py-[80px] px-5 md:px-6 lg:px-8"
    >
      <div className="max-w-[1160px] w-full mx-auto">
        <h1 className="text-[25px] md:text-[40px] md:leading-[50px] tracking-[7%] font-[700] text-center uppercase">
          {t("OurProjectGallery.title")}
        </h1>
        <p className="md:text-[17px] text-[12px] font-[400] text-[#6E6E6E] md:leading-[25.5px] leading-[21px] md:mb-[60px] mb-[30px] md:mt-[20px] mt-[11px] text-center max-w-[999px] mx-auto">
          {t("OurProjectGallery.description")}
        </p>
      </div>
      <div className="max-w-[1160px] mx-auto flex flex-wrap md:flex-row flex-col justify-center gap-[16px]">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleProjectClick(project.id)}
            onMouseEnter={() => handleMouseEnter(project.id)} // Set active project on hover
            onMouseLeave={handleMouseLeave} // Reset on mouse leave
            className={`relative rounded-[20px] overflow-hidden shadow-md md:h-[350px] h-[276px] sm:min-w-[300px] min-w-[284px] md:mx-0 mx-auto cursor-pointer group ${
              project.id === 1 || project.id === 3
                ? "lg:w-[28%] md:w-[48.8%] w-[95%]"
                : project.id === 2
                ? "xl:w-[41%] md:w-[48.8%] w-[95%]"
                : project.id === 4 || project.id === 6
                ? "lg:w-[34%] md:w-[48.8%] w-[95%]"
                : "xl:w-[29%] md:w-[48.8%] w-[95%]"
            }`}
          >
            <img
              src={project.main_image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {/* Show details for the active project */}
            {activeProjectId === project.id && (
              <div
                className="absolute inset-0 text-white p-[24px] flex flex-col justify-end items-center"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.84) 70.5%, #000000 100%)",
                }}
              >
                <h2 className="md:text-[26px] text-[22px] leading-[24px] font-[600] text-white">
                  {project.name}
                </h2>
                <p className="md:mt-[11px] mt-[9px] mb-[19px] md:mb-[30px] md:text-[14px] text-[10px] font-[400] text-center">
                  {project.description}
                </p>
                <button className="px-[23px] py-[11.5px] w-fit bg-primaryColor uppercase text-white text-[14px] font-[500] leading-[21px] tracking-[2px] rounded-[10px] hover:bg-orange-600 transition-colors">
                  {t("OurProjectGallery.view_details")}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-[45px] md:mt-[75px]">
        <button className="px-[35px] py-[13.5px] w-fit bg-primaryColor uppercase text-white text-[15px] font-[500] leading-[22.5px] tracking-[2px] rounded-[10px] hover:bg-orange-600 transition-colors">
          {t("OurProjectGallery.view_more")}
        </button>
      </div>
    </div>
  );
}
