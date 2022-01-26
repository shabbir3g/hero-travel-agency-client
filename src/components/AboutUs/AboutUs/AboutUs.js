import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import About from "../About/About";
import CompanyLogo from "../CompanyLogo/CompanyLogo";
import OurJourney from "../OurJourney/OurJourney";
import Package from "../Package/Package";
import TourGuide from "../TourGuide/TourGuide";

const AboutUs = () => {
  return (
    <div>
      <Navigation></Navigation>
      <About></About>
      <OurJourney></OurJourney>
      <TourGuide></TourGuide>
      <Package></Package>
      <CompanyLogo></CompanyLogo>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
