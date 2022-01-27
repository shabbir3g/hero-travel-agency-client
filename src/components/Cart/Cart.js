import React, { useState } from "react";
import "./cart.css";
import { useNavigate,useParams } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import CartBanner from "./CartBanner/CartBanner";

const Cart = () => {
  let { _id } = useParams();
  
  //define navigate function
  const navigate = useNavigate();

  const [Input, setInput] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    City: "",
    townName: "",
    district: "",
    Postcode: "",
    mobileNumber: "",
    email: "",
    Price: _id,
  });

  // console.log(Input.Price);

  // this function is used to clear all state property after form submission
  const clearInput = () => {
    return setInput({
      ...Input,
      firstName: "",
      lastName: "",
      streetAddress: "",
      City: "",
      townName: "",
      district: "",
      Postcode: "",
      mobileNumber: "",
      email: "",
      Price: "",
    });
  };

  const onSubmit = (event) => {
    console.log(Input);

    // data send to the server
    fetch("https://serene-mesa-56595.herokuapp.com/my-orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Input),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // <Alert variant="success">Order Successfully</Alert>
          alert("Order successfully ");
          clearInput();
          navigate("/dashboard/myOrder");
        }
      });
    event.preventDefault();
  };
  return (
    <>
    <Navigation></Navigation>
    <CartBanner></CartBanner>
    <div>
      <div className="order-container">
        <div className="order-main-container">
          <p className="title">Billing details</p>
          <form onSubmit={onSubmit}>
            {/* name division */}
            <div className="first-last-name">
              <div className="name-input">
                <label for="first-name">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="First Name"
                  required
                  onChange={(event) => {
                    setInput({ ...Input, firstName: event.target.value });
                  }}
                  min="3"
                  max="15"
                />
              </div>
              <div style={{ width: "10%" }}></div>
              <div className="name-input">
                <label for="Last-name">Last Name</label>
                <input
                  type="text"
                  id="Last-name"
                  onChange={(event) => {
                    setInput({ ...Input, lastName: event.target.value });
                  }}
                  placeholder="Last Name"
                  required
                  min="3"
                  max="15"
                />
              </div>
            </div>
            {/* name division */}

            <div>
              <p className="country-name">
                Country
                <span style={{ color: "red", fontSize: "25px" }}> *</span>
              </p>
              <p className="country-region">Bangladesh</p>
            </div>
            <div className="company-name">
              <label for="Street-name">
                Street address
                <span style={{ color: "red", fontSize: "25px" }}> *</span>
              </label>
              <input
                required
                type="text"
                onChange={(event) => {
                  setInput({ ...Input, streetAddress: event.target.value });
                }}
                id="Street-name"
                placeholder="House number and street number *"
                max="30"
              />
              <input
                type="text"
                onChange={(event) => {
                  setInput({ ...Input, City: event.target.value });
                }}
                placeholder="Apartment, suite, unit, etc. (optional)"
                max="30"
              />
            </div>
            <div className="company-name">
              <label for="town-name">
                Town / City
                <span style={{ color: "red", fontSize: "25px" }}> *</span>
              </label>
              <input
                required
                type="text"
                id="town-name"
                onChange={(event) => {
                  setInput({ ...Input, townName: event.target.value });
                }}
                placeholder="Town / City name"
                max="20"
              />
            </div>
            <div className="company-name">
              <label for="district-name">
                District
                <span style={{ color: "red", fontSize: "25px" }}> *</span>
              </label>
              <select
                id="district-name"
                onChange={(event) => {
                  setInput({ ...Input, district: event.target.value });
                }}
              >
                <option value="select district">Select a district</option>
                <option value="Pabna ">Pabna </option>
                <option value="Madaripur ">Madaripur </option>
                <option value="Bandarban ">Bandarban </option>
                <option value="Dhaka ">Dhaka </option>
                <option value="Barguna ">Barguna </option>
                <option value="Barisal ">Barisal </option>
                <option value="Bhola ">Bhola </option>
                <option value="Jhalokati ">Jhalokati </option>
                <option value="Patuakhali ">Patuakhali </option>
                <option value="Pirojpur ">Pirojpur </option>
                <option value="Bandarban ">Bandarban </option>
                <option value="Satkhira ">Satkhira </option>
                <option value="Sirajganj ">Sirajganj </option>
                <option value="Dinajpur ">Dinajpur </option>
                <option value="Gaibandha ">Gaibandha </option>
                <option value="Kurigram ">Kurigram </option>
                <option value="Brahmanbaria District">Brahmanbaria</option>
              </select>
            </div>
            <div className="company-name">
              <label for="Postcode / ZIP (optional)">
                Postcode / ZIP (optional)
              </label>
              <input
                type="text"
                id="Postcode / ZIP (optional)"
                placeholder="Company name"
                max="10"
                onChange={(event) => {
                  setInput({ ...Input, Postcode: event.target.value });
                }}
              />
            </div>
            <div className="company-name">
              <label for="Billing Mobile Number *">
                Billing Mobile Number
                <span style={{ color: "red", fontSize: "25px" }}> *</span>
              </label>
              <input
                type="text"
                id="Billing Mobile Number *"
                placeholder="Billing Mobile Number"
                onChange={(event) => {
                  setInput({ ...Input, mobileNumber: event.target.value });
                }}
                required
              />
            </div>
            <div className="company-name">
              <label for="Billing Email">
                Billing Email
                <span style={{ color: "red", fontSize: "25px" }}> *</span>
              </label>
              <input
                type="email"
                onChange={(event) => {
                  setInput({ ...Input, email: event.target.value });
                }}
                id="Billing Email"
                placeholder="Billing Email"
                required
              />
            </div>

            <br />
            <div className="place-order-button">
              <button className="place-button">Payment Here</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default Cart;
