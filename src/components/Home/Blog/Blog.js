import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


import "./Blog.css";


const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  return (
      <div className="bg-service">
      <Container className="pt-5 pb-4">
      <div className="my-5 text-center section-title mx-auto">
        <h2>Our Blogs </h2>
        <p>This Our Blogs from our valuable Customer, those who get from BD Travel agency. We every time provide best quality Blogs to our cusotmer.</p>
        </div>
        <Row xs={1} md={3} className="g-4">
          {blog.map((service, index) => (
            <Col>
              <Card className="box text-center">
                <Card.Img
                  className="Blogs-img"
                  variant="top"
                  src={service.image}
                />
                <Card.Body>
                  <Card.Title className="Blogs-title">
                    {service.title}
                  </Card.Title>
                  {/* <p> {service.description.slice(0, 85)}</p> */}
                 <div className="service-meta"> 
               
                 <Card.Text>
                      <h5>Cost: {service.cost}</h5>
                    </Card.Text>
                

                    <Link className="card-btn" to={`/order/${blog._id}`}>
                      Order Now
                    </Link>
                 </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
       
      </Container>
    </div>
  );
};

export default Blog;
