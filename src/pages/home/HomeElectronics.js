import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutEight from "../../layouts/LayoutEight";
import HeroSliderThree from "../../wrappers/hero-slider/HeroSliderThree";
import CategoryOneSlider from "../../wrappers/category/CategoryOneSlider";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import TabProductThree from "../../wrappers/product/TabProductThree";
import BannerThree from "../../wrappers/banner/BannerThree";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";

const HomeElectronics = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>PMR | Accueil</title>
        <meta
          name="description"
          content="Accueil"
        />
      </MetaTags>
      <LayoutEight>
        {/* hero slider */}
        <HeroSliderThree />

        {/* category slider */}
        <CategoryOneSlider spaceBottomClass="pb-95" />

        {/* section title with text */}
        <SectionTitleWithText spaceBottomClass="pb-90" />

        {/* tab product */}
        <TabProductThree spaceBottomClass="pb-60" category="electronics" />

        {/* banner */}
        <BannerThree spaceBottomClass="pb-100" />

        {/* testimonial */}
        <TestimonialOne
          spaceTopClass="pt-100"
          spaceBottomClass="pb-95"
          spaceLeftClass="ml-70"
          spaceRightClass="mr-70"
          bgColorClass="bg-gray-3"
        />

        {/* brand logo slider */}
        <BrandLogoSliderOne spaceBottomClass="pb-95" spaceTopClass="pt-100" />

       
      </LayoutEight>
    </Fragment>
  );
};

export default HomeElectronics;
