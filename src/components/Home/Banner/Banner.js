import React from 'react';
import { Carousel, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import slide1 from '../../../images/1.jpg';
import slide2 from '../../../images/2.jpg';
import slide3 from '../../../images/3.jpg';


const Banner = () => {
    return (
        <div>
            <div className="home-slider"> 
                <Carousel fade>
                    <Carousel.Item>
                            <img className="d-block h- w-100" src={slide1} alt="First slide" />
                            <Carousel.Caption className="text-start">
                            <Row className="align-items-center home-slide"> 
                                <Col xs={12} lg="6">
                                <h1>Hero Travel Agency</h1>
                                <p>Hero Travel Agency Provide to customer always best quality Travel in budget price. You can get Our service within your budget price</p>
                                <Link to="/contact"><Button className="hero-btn" variant="primary"  >Contact Us</Button></Link>
                                </Col>
                                <Col xs={12} lg="6">
                                
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                            <img className="d-block h- w-100" src={slide2} alt="First slide" />
                        <Carousel.Caption className="text-start">
                            <Row className="align-items-center home-slide"> 
                                <Col xs={12} lg="6">
                                <h1>Hero Travel Agency</h1>
                                <p>Hero Travel Agency Provide to customer always best quality Travel in budget price. You can get Our service within your budget price</p>
                                <Link to="/contact"><Button className="hero-btn" variant="primary"  >Contact Us</Button></Link>
                                </Col>
                                <Col xs={12} lg="6">
                               
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                            <img className="d-block h- w-100" src={slide3} alt="First slide" />
                        <Carousel.Caption className="text-start">
                            <Row className="align-items-center home-slide"> 
                                <Col xs={12} lg="6">
                                <h1>Hero Travel Agency</h1>
                                <p>Hero Travel Agency Provide to customer always best quality Travel in budget price. You can get Our service within your budget price</p>
                                <Link to="/contact"><Button className="hero-btn" variant="primary"  >Contact Us</Button></Link>
                                </Col>
                                <Col xs={12} lg="6">
                               
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;