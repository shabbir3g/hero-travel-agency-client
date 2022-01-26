import React from "react";
import { Container } from "react-bootstrap";
import "./OrderBanner.css";

const OrderBanner = () => {
  return (
    <div className="container-bg">
      <Container>
        <h2 className="OrderBanner">Order</h2>
      </Container>
    </div>
  );
};

export default OrderBanner;
