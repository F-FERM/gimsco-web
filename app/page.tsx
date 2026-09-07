import AboutSection from "@/components/AboutSection";
import Home from "@/components/home/Home";
import StatsSection from "@/components/StatsSection";
import StoreSolutions from "@/components/StoreSolutions";
import WhyChooseSection from "@/components/WhyChooseSection";
import React from "react";

const page = () => {
  return (
    <main>
      <Home />
      <StatsSection />
      <AboutSection />
      <WhyChooseSection/>
      <StoreSolutions/>
    </main>
  );
};

export default page;
