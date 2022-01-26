import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import laxuary from "../../../images/travel company/company_1.png";
import travel from "../../../images/travel company/company_2.png";
import tripswivel from "../../../images/travel company/company_3.png";
import airhovk from "../../../images/travel company/company_4.png";
import globtravel from "../../../images/travel company/company_5.png";

const img = {
  width: "80%",
  paddingTop: '40px'

};

const CompanyLogo = () => {
  return (

    <OwlCarousel style={{backgroundColor: "#f5f5f5"}}
    items={5}
    loop={true}
    autoplay={true}
    dots={false}
    margin={10} 
    nav={false}
    
    className="owl-carousel">

<img style={img} src={laxuary} alt="" />
      <img style={img} src={travel} alt="" />
      <img style={img} src={tripswivel} alt="" />
      <img style={img} src={airhovk} alt="" />
      <img style={img} src={globtravel} alt="" />
    
    </OwlCarousel>
    
    
  );
};

export default CompanyLogo;
