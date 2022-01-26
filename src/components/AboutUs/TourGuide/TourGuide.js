import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./TourGuide.css";
import sakura from "../../../images/tour guide/guide-1.png";
import jonson from "../../../images/tour guide/guide-2.png";
import nabila from "../../../images/tour guide/guide-3.png";
// import jango from '../../../images/tour guide/guide-4.png';

const Facebook = <FontAwesomeIcon icon={faFacebook} />;
const Twitter = <FontAwesomeIcon icon={faTwitter} />;
const Instagram = <FontAwesomeIcon icon={faInstagram} />;
const Linkedin = <FontAwesomeIcon icon={faLinkedin} />;

const TourGuide = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <Container style={{ padding: "30px 0px" }}>
        <div style={{ padding: "30px 0px" }}>
          <h5>Tour Guide</h5>
          <h1>All Guide Are 5 Year Expart In Travel</h1>
        </div>
        <div>
          <Row>
            <Col className="tour-guide" xs="12" md="4" lg="4">
              <img src={sakura} alt="" />
              <div className="guide-info"> 
                <h3>Sakura Chen</h3>
                <h5>Tour Guide</h5>
                <div>
                  <ul className="bd-travel-tourguide-social">
                    <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer">{Facebook}</a></li>
                    <li><a href="https://www.twitter.com/" target="_blank" rel="noreferrer">{Twitter}</a></li>
                    <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">{Instagram}</a></li>
                    <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">{Linkedin}</a></li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col className="tour-guide" xs="12" md="4" lg="4">
              <img src={nabila} alt="" />
              <div className="guide-info"> 
              <h3>Sakura Chen</h3>
              <h5>Tour Guide</h5>
              <div>
                <ul className="bd-travel-tourguide-social">
                  <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer">{Facebook}</a></li>
                  <li><a href="https://www.twitter.com/" target="_blank" rel="noreferrer">{Twitter}</a></li>
                  <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">{Instagram}</a></li>
                  <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">{Linkedin}</a></li>
                </ul>
              </div>
              </div>
            </Col>
            <Col className="tour-guide" xs="12" md="4" lg="4">
              <img src={jonson} alt="" />
              <div className="guide-info"> 
              <h3>Sakura Chen</h3>
              <h5>Tour Guide</h5>
              <div>
                <ul className="bd-travel-tourguide-social">
                  <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer">{Facebook}</a></li>
                  <li><a href="https://www.twitter.com/" target="_blank" rel="noreferrer">{Twitter}</a></li>
                  <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">{Instagram}</a></li>
                  <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">{Linkedin}</a></li>
                </ul>
              </div>
              </div>
            </Col>
            {/* <Col xs="12" md="6" lg="4">
            <img src={jango} alt="" />
          </Col> */}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default TourGuide;
