import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import "./SingleBlog.css";
import SingleBlogBanner from "./SingleBlogBanner/SingleBlogBanner";

const SingleBlog = () => {
  
  let { _id } = useParams();

  const [singleBlog, setSingleBlog] = useState([]);

  useEffect(() => {
    fetch(`https://serene-mesa-56595.herokuapp.com/blogs/${_id}`)
      .then((res) => res.json())
      .then((data) => setSingleBlog(data));
  }, [_id]);

  

  return (
    <>
    <Navigation></Navigation>
    <SingleBlogBanner></SingleBlogBanner>
    <div className="container-fluid" style={{ backgroundColor: "#dddddd" }}>
      <div className="row  ">
        <div className="col-lg-6 col-md-12 col-sm-12 mt-3">
          {singleBlog ? (
            <div  className=" mt-4 mb-4 ">
              <div className=" m-4">
                <img style={{width: '100%'}} src={singleBlog.image} alt="" />
              </div>
              <div className=" align-items-center"></div>
            </div>
          ) : (
            <p>Data Not found</p>
          )}
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 mt-5 mb-5 ">
            <h2>{singleBlog?.title}</h2>
            <hr />
            <h5>Cost: {singleBlog?.cost}</h5>
            <p>{singleBlog?.description}</p>

        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default SingleBlog;
