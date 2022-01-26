import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import tourguide from "../../../images/tour guide/about-image-group2.png";

const Package = () => {
  return (
    <div style={{ padding: "5% 0%" }}>
      <Container>
        <Row>
          <Col xs="12" lg="6">
            <div className="mb-5">
              <h1 style={{ fontSize: "48px" }}>
                Why Package Book With{" "}
                <span style={{ color: "#ff7602" }}>TourX Pro?</span>
              </h1>
            </div>
            <div className="d-flex align-items-center border rounded mb-5 p-3">
              <div className="me-3">
                <h2>500+</h2>
                <h6>Awesome Tour</h6>
              </div>
              <p>
                Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                venenatis hendrerit a id lectus. Suspendissendt enlane molestie
                turpis nec lacinia vehicula.
              </p>
            </div>
            <div className="d-flex align-items-center border rounded mb-5 p-3">
              <div className="me-3">
                <h2>300+</h2>
                <h6>Destinations</h6>
              </div>
              <p>
                Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                venenatis hendrerit a id lectus. Suspendissendt enlane molestie
                turpis nec lacinia vehicula.
              </p>
            </div>
            <div className="d-flex align-items-center border rounded mb-5 p-3">
              <div className="me-3">
                <h2>150+</h2>
                <h6>Mountains</h6>
              </div>
              <p>
                Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                venenatis hendrerit a id lectus. Suspendissendt enlane molestie
                turpis nec lacinia vehicula.
              </p>
            </div>
          </Col>
          <Col xs="12" lg="6">
            <img style={{ width: "100%" }} src={tourguide} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Package;
