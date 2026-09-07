import AboutSection from "@/components/AboutSection";
import Certifications from "@/components/Certifications";
import CompanyHistory from "@/components/CompanyHistory";
import Home from "@/components/home/Home";
import ProductEcosystem from "@/components/ProductEcosystem";
import QualityValue from "@/components/QualityValue";
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
      <Certifications/>
      <CompanyHistory/>
      <QualityValue/>
    </main>
  );
};

export default page;
