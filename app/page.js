'use client'
import AppointmentAboutUs from "./components/AppointmentAboutUs";
import CustomizedDoors from "./components/CustomizedDoors";
import DifferentWood from "./components/DifferentWood";
import FeaturedDoors from "./components/FeaturedDoors";
import GetInTouch from "./components/GetInTouch";
import Hero from "./components/Hero";
import OurProjectGallery from "./components/OurProjectGallery";
import Qualityies from "./components/Qualityies";
import WhoWeAre from "./components/WhoWeAre";
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <Hero />
      <Qualityies />
      <section>
        <h1>{t('welcome_message')}</h1>
      </section>
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
