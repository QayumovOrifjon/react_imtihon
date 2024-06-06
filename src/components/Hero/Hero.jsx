import React from "react";
import Categories from "./Categories";
import Section from "./Section";
import SectionTwo from "./SectionTwo";
import Blog from "./Blog";
import Footer from "../Footer/Footer";

const Hero = () => {
  const [badgeCount, setBadgeCount] = React.useState(0);

  const handleIncrementBadge = () => {
    setBadgeCount(badgeCount + 1);
  };
  return (
    <div className="max-w-custom mx-auto  mt-[50px]">
      <div className="grid grid-cols-[1fr_3fr] gap-[50px] mb-[96px] mt-[30px]">
        <Categories />
        <Section />
      </div>
      <div>
        <SectionTwo />
      </div>
      <div>
        <Blog />
      </div>
      <Footer />
    </div>
  );
};

export default Hero;
