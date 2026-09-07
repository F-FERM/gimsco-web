import AboutSection from "@/components/AboutSection";
import Home from "@/components/home/Home";
import ProductEcosystem from "@/components/ProductEcosystem";
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
      <ProductEcosystem/>
    </main>
  );
};

export default page;
