import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from 'axios';
import React, { useState } from 'react';

const AddNewBlog = () => {
    const [success, setSuccess] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post('https://serene-mesa-56595.herokuapp.com/blogs', data)
            .then(res => {
                if (res.data.insertedId) {
                    setSuccess(true);
                    reset();
                }
            })
    }
    return (
        <div>
            <h2 className="text-center mt-5">Add New Blog</h2>
            <div className="add-product">
                <Container>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="RoomTitle">
                                <Form.Label><b>Title</b></Form.Label>
                                <input type="text" placeholder="Tour Place Name"   {...register("title", { required: true })} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="Description">
                                <Form.Label><b>Price</b></Form.Label>
                                <input type="text" placeholder="Tour Cost"   {...register("cost", { required: true })} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="RoomSize">
                                <Form.Label><b>Image URL</b></Form.Label>
                                <input type="text" placeholder="Image URL"   {...register("image", { required: true })} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="Description">
                                <Form.Label><b>Description</b></Form.Label>
                                <textarea style={{ height: '150px' }} type="text" placeholder="Description"   {...register("description", { required: true })} />
                            </Form.Group>
                        </Row>
                        {success && <div className="alert alert-success" role="alert">
                            Added Tour Place Successfully!
                        </div>}
                        {errors.exampleRequired && <span>This field is required</span>}
                        <Button className="fw-bold" variant="primary" type="submit">
                            Publish Blog
                        </Button>
                    </Form>
                </Container>
            </div>
        </div>
    );
};

export default AddNewBlog;