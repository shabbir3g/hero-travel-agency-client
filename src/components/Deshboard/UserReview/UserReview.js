import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Rating from 'react-rating';
import useAuth from '../../../hooks/useAuth';
import startEmpty from '../../../images/star-empty.png'
import startFull from '../../../images/star-full.png'

const UserReview = () => {
    const { user } = useAuth();
    const [success, setSuccess] = useState(false);
    const [myRating, setMyRating] = useState(0);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {

        data.rating = myRating;
        data.name = user.displayName;
        data.email = user.email;
        data.photo = user.photoURL;

        axios.post('https://serene-mesa-56595.herokuapp.com/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    setSuccess(true);
                    reset();
                }
            })



    }

    const handleReviewCange = (fullSymbol) => {

        setMyRating(fullSymbol);

    }

    return (
        <div>
            <h2 className="text-center mt-5">Review</h2>
            <div className="add-review">
                <Container>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="RoomSize">
                                <Form.Label><b>Your Name</b></Form.Label>
                                {<input style={{ cursor: 'not-allowed' }} disabled type="text" defaultValue={user?.displayName}  {...register("name")} />}
                            </Form.Group>
                            <Form.Group as={Col} controlId="RoomSize">
                                <Form.Label><b>Your E-mail</b></Form.Label>
                                {<input style={{ cursor: 'not-allowed' }} disabled type="text" defaultValue={user?.email}  {...register("email")} />}
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <div className="my-rating">
                                <Rating
                                    fullSymbol={<img src={startFull} alt="starfull" className="icon" />}
                                    emptySymbol={<img src={startEmpty} alt="startEmpty" className="icon" />}
                                    onClick={handleReviewCange}
                                />

                            </div>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="Review">
                                <Form.Label><b>Review</b></Form.Label>
                                <textarea style={{ height: '100px' }} type="text" placeholder="Your Review"   {...register("review", { required: true })} />
                            </Form.Group>
                        </Row>
                        {success && <div className="alert alert-success" role="alert">
                            Your Review and rating has been submitted
                        </div>}
                        {errors.exampleRequired && <span>This field is required</span>}
                        <Button className="fw-bold" variant="primary" type="submit">
                            Add Review
                        </Button>
                    </Form>
                </Container>
            </div>
        </div>
    );
};

export default UserReview;