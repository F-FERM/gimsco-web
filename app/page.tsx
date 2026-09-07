import AboutSection from "@/components/AboutSection";
import Home from "@/components/home/Home";
import StatsSection from "@/components/StatsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import React from "react";

const page = () => {
  return (
    <main>
      <Home />
      <StatsSection />
      <AboutSection />
      <WhyChooseSection/>
    </main>
  );
};

export default page;
