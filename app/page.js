"use client";
import { useEffect } from "react";
import AppointmentAboutUs from "./components/AppointmentAboutUs";
import CustomizedDoors from "./components/CustomizedDoors";
import DifferentWood from "./components/DifferentWood";
import FeaturedDoors from "./components/FeaturedDoors";
import GetInTouch from "./components/GetInTouch";
import Hero from "./components/Hero";
import OurProjectGallery from "./components/OurProjectGallery";
import Qualityies from "./components/Qualityies";
import WhoWeAre from "./components/WhoWeAre";
import i18n from "../public/locales/i18n";

export default function Home() {
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);
    document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";
  }, []);
  return (
    <div>
      <Hero />
      <Qualityies />
      <WhoWeAre />
      <OurProjectGallery />
      <CustomizedDoors />
      <DifferentWood />
      <AppointmentAboutUs />
      <FeaturedDoors />
      <GetInTouch />
    </div>
  );
}
