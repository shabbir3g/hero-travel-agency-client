import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faClipboard, faShoppingBag, faUser, } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const User = <FontAwesomeIcon icon={faUser} />
const ShoppingBag = <FontAwesomeIcon icon={faShoppingBag} />
const Clipboard = <FontAwesomeIcon icon={faClipboard} />
const ArrowAltCircleRight = <FontAwesomeIcon icon={faArrowAltCircleRight} />

const DashboardHome = () => {

    const [allUser, setAllUser] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/users`;
        fetch(url)
            .then(res => res.json())
            .then(data => setAllUser(data))
    }, []);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/blogs`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data.blogs))
    }, []);

    const [reviews, setReviews] = useState([]);



    useEffect(() => {
        const url = `http://localhost:5000/review`;
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    const [orders, setOrders] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/my-orders`)
            .then((res) => res.json())
            .then((data) => setOrders(data))

    }, [orders]);




    return (
        <div>
            <h2 className="text-center my-5">Welcome to Dashboard</h2>

            <div className="row">
                <div className="col-lg-4 col-md-4">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-md-3">
                                    {User}
                                </div>
                                <div className="col-md-9 text-right">
                                    <div className='huge'>{allUser?.length}</div>
                                    <div className="under-number">All Users</div>
                                </div>
                            </div>
                        </div>
                        <Link to="/">
                            <div className="panel-footer">
                                <span className="pull-left blue">View Details</span>
                                <span className="pull-right blue">{ArrowAltCircleRight}</span>
                                <div className="clearfix"></div>
                            </div>
                        </Link>
                    </div>
                </div>


                <div className="col-lg-4 col-md-4">
                    <div className="panel panel-green">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-md-3">
                                    {ShoppingBag}
                                </div>
                                <div className="col-md-9 text-right">
                                    <div className='huge'>{products?.length}</div>
                                    <div className="under-number">Blogs</div>
                                </div>
                            </div>
                        </div>
                        <Link to="/">
                            <div className="panel-footer">
                                <span className="pull-left green">View Details</span>
                                <span className="pull-right green">{ArrowAltCircleRight}</span>
                                <div className="clearfix"></div>
                            </div>
                        </Link>
                    </div>
                </div>



                <div className="col-lg-4 col-md-4">
                    <div className="panel panel-yellow">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-md-3">
                                    {Clipboard}
                                </div>
                                <div className="col-md-9 text-right">
                                    <div className='huge'>{reviews?.length}</div>
                                    <div className="under-number">Review</div>
                                </div>
                            </div>
                        </div>
                        <Link to="/">
                            <div className="panel-footer">
                                <span className="pull-left yellow">View Details</span>
                                <span className="pull-right yellow">{ArrowAltCircleRight}</span>
                                <div className="clearfix"></div>
                            </div>
                        </Link>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default DashboardHome;