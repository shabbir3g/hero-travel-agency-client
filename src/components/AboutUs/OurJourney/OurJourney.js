import { faHandPointRight } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import about from "../../../images/tour guide/about.jpg";

const HandPointRight = <FontAwesomeIcon icon={faHandPointRight} />;

const padding = {
  fontSize: "16px",
  padding: "7px 0px",
};

const OurJourney = () => {
  return (
    <Container>
      <div className="pt-5 pb-5">
        <Row>
          <Col xs="12" lg="6">
            <h2>Our Journey</h2>
            <p className="pt-5 pb-3">
              Since 2009, our strong company culture and passion for our
              profession has resulted in our being named each year as one of the
              "Best Places To Work" in Los Angeles County. Our management is
              active on various travel advisory boards and committees for travel
              organizations, travel magazines (Afar, Travel+Leisure), major
              hotel brands, & more.
            </p>
            <div className="d-flex pt-3 pb-3">
              <div className="w-100">
                <ul style={{ listStyle: "none", paddingLeft: "0px" }}>
                  <li style={padding}>{HandPointRight} First Class Flights</li>
                  <li style={padding}>{HandPointRight} First Class Flights</li>
                  <li style={padding}>{HandPointRight} Handpicked Hotels</li>
                  <li style={padding}>{HandPointRight} 10 Languages Available</li>
                </ul>
              </div>
              <div className="w-100">
                <ul style={{ listStyle: "none", paddingLeft: "0px" }}>
                  <li style={padding}>{HandPointRight} 5 Star Accommodations</li>
                  <li style={padding}>{HandPointRight} Latest Model Vehicles</li>
                  <li style={padding}>{HandPointRight} Accesibility Managment</li>
                  <li style={padding}>{HandPointRight} +120 Premium City Tours</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs="12" lg="6">
            <img src={about} alt="" />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default OurJourney;
