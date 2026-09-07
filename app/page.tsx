import AboutSection from "@/components/AboutSection";
import Home from "@/components/home/Home";
import StatsSection from "@/components/StatsSection";
import React from "react";

const page = () => {
  return (
    <main>
      <Home />
      <StatsSection />
      <AboutSection />
    </main>
  );
};

export default page;
