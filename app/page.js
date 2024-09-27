import AppointmentAboutUs from "./components/AppointmentAboutUs";
import CustomizedDoors from "./components/CustomizedDoors";
import DifferentWood from "./components/DifferentWood";
import FeaturedDoors from "./components/FeaturedDoors";
import GetInTouch from "./components/GetInTouch";
import Hero from "./components/Hero";
import OurProjectGallery from "./components/OurProjectGallery";
import Qualityies from "./components/Qualityies";
import WhoWeAre from "./components/WhoWeAre";

export default function Home() {
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
