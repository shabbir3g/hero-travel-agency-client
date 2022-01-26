import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import "./order.css";
import OrderBanner from "./OrderBanner/OrderBanner";

const Order = () => {
  
  let { _id } = useParams();

  const [order, setOrder] = useState([]);
  // add cart
  const [count, setCount] = useState(1);
  const [selected, setSelected] = useState("Choose");

  useEffect(() => {
    fetch(`http://localhost:5000/services/${_id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [_id]);

  const some = order ? order.cost : 0;
  const totalPrice = some * count;


  // onClick function going here
  const inCrease = () => {
    return count < 20 ? setCount(count + 1) : null;
  };
  const deCrease = () => {
    return count > 1 ? setCount(count - 1) : null;
  };

  //selected on changed function
  const handleSelect = (event) => {
    return setSelected(event.target.value);
  };

  if (!order) {
    return <h1>your given is not valid</h1>;
  }

  return (
    <>
    <Navigation></Navigation>
    <OrderBanner></OrderBanner>
    <div className="container-fluid" style={{ backgroundColor: "#dddddd" }}>
      <div className="row  ">
        <div className="col-lg-6 col-md-12 col-sm-12 mt-3">
          {order ? (
            <div  className=" mt-4 mb-4 ">
              <div className=" m-4">
                <img style={{width: '100%'}} src={order.image} alt="" />
              </div>
              <div className=" align-items-center"></div>
            </div>
          ) : (
            <p>Data Not found</p>
          )}
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 mt-5 mb-5 ">
          <div className="order-details-container">
            <div className="order-details">
              <p className="mt-4">
                - Availability:
                <span style={{ color: "#03AA67" }}> In Stock</span>
              </p>

              <div>
                {order ? (
                  <div className=" mt-4 mb-4 ">
                    <h4 className="text-info fw-bolder">
                      {order?.title}
                    </h4>
                    <p>Price Per Person: ${order?.cost * count}</p>
                  </div>
                ) : (
                  <p>Data Not found</p>
                )}
              </div>

              <hr />
              <br />

              {/* select option  */}
              <div className="d-flex ">
                <label for="cars"></label>
                <div class="custom-select me-5">
                  <h4>Package :</h4>
                  <select
                    value={selected}
                    // id="cars"
                    onChange={(event) => {
                      handleSelect(event);
                    }}
                  >
                    <option value="Choose">Travel Type</option>
                    <option value="city">City Tour</option>
                    <option value="couple">Couple Tour</option>
                    <option value="adventure">Adventure Tour</option>
                    <option value="vacation">Vacation Tour</option>
                    <option value="group">Group Tour</option>
                  </select>
                </div>
                {/* select option  */}
                <br />
                {/* order now */}
                <div className="order-number mt-5">
                  <div className="increase-decrease">
                    <p className="increase-order" onClick={deCrease}>
                      -
                    </p>
                    <p>{count}</p>
                    <p className="increase-order" onClick={inCrease}>
                      +
                    </p>
                  </div>{" "}
                  <br />
                  {selected === "Choose" ? (
                    <button className="order-button-deActive" disabled>
                      {" "}
                      Add-Cart
                    </button>
                  ) : (
                    // <h2>Click Here</h2>
                    <Link className="order-button" active to={`/addCart/${totalPrice}`}>
                      Add-Cart
                    </Link>
                  )}
                </div>
              </div>
              {/* order now */}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default Order;
