import React from "react";
import { Container } from "react-bootstrap";
import "./CartBanner.css";

const CartBanner = () => {
  return (
    <div className="container-bg">
      <Container>
        <h2 className="CartBanner">Checkout</h2>
      </Container>
    </div>
  );
};

export default CartBanner;
