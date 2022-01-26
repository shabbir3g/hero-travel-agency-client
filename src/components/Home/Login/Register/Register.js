import React, { useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import register from "../../../../images/login.png";
import '../Login/Login.css'

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const { user, registerUser, isLoading, authError } = useAuth();
  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };

  const handleRegisterSubmit = (e) => {
    if (registerData.password !== registerData.Repassword) {
      alert("login password didn't match");
      return;
    }
    registerUser(
      registerData.email,
      registerData.password,
      registerData.name,
      navigate
    );
    e.preventDefault();
  };

  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <Row className="login-form">
          <Col xs={12} md={6}>
            <h2>Register</h2>
            {!isLoading && (
              <form onSubmit={handleRegisterSubmit}>
                <input
                  style={{ width: "75%" }}
                  placeholder="Your Name"
                  name="name"
                  type="text"
                  onBlur={handleOnBlur}
                />
                <br />
                <input
                  style={{ width: "75%" }}
                  placeholder="Your Email"
                  name="email"
                  type="email"
                  onBlur={handleOnBlur}
                />
                <br />
                <input
                  style={{ width: "75%" }}
                  placeholder="Your Password"
                  name="password"
                  type="password"
                  onBlur={handleOnBlur}
                />
                <br />
                <input
                  style={{ width: "75%" }}
                  placeholder="Retype Your Password"
                  name="Repassword"
                  type="password"
                  onBlur={handleOnBlur}
                />
                <br />
                <Button className="hero-btn btn btn-dark" style={{ width: "75%" }} type="submit">
                  Register
                </Button>
              </form>
            )}
            {isLoading && <Spinner animation="border" />}
            <Link style={{ textDecoration: "none" }} to="/login">
              Already Registered? Please Login
            </Link>
            <br />
            {user.email && (
              <alert severity="success">User Created successfully</alert>
            )}
            {authError && <alert severity="error">{authError}</alert>}
          </Col>
          <Col item xs={12} md={6}>
            <img style={{ width: "80%" }} src={register} alt="" />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Register;
