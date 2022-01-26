import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Review from './Review/Review';




const Reviews = () => {

    const [reviews, setReviews] = useState([]);

 

    useEffect(() => {
        const url = `http://localhost:5000/review`;
        fetch(url)
        .then(res=> res.json())
        .then(data =>setReviews(data) )
    }, []);

    return (
        <div>
             <Container>
                <div className="my-5 text-center section-title mx-auto">
                    <h2>Customer Reviews</h2>
                    <p>This Our Services from our valuable Customer, those who get from BD Travel agency. We every time provide best quality services to our cusotmer.</p>
                </div>
                <div className="row">
                <div className="col-md-12">
                {reviews.length === 0 ? <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner> :    (  
                    <OwlCarousel 
                    items={2}
                    loop={true}
                    autoplay={true}
                    dots={false}
                    margin={10} 
                    nav={false}
                    
                    className="owl-carousel">

                    {
                        reviews?.map(review => <Review
                        review={review}
                        key={review?._id}
                        ></Review> )
                    }
                    
                    </OwlCarousel>
                    )}
                </div>
                </div>
            </Container>
        </div>
    );
};

export default Reviews;