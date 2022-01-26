import React from 'react';
import {
    Link,
    Outlet
} from "react-router-dom";
import TopHeader from '../../Shared/TopHeader/TopHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus, faClipboard, faTachometerAlt, faTools, faUsersCog } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../../hooks/useAuth';

const Clipboard = <FontAwesomeIcon icon={faClipboard} />
const TachometerAlt = <FontAwesomeIcon icon={faTachometerAlt} />
const UsersCog = <FontAwesomeIcon icon={faUsersCog} />
const CalendarPlus = <FontAwesomeIcon icon={faCalendarPlus} />
const Tools = <FontAwesomeIcon icon={faTools} />

const Dashboard = () => {
    const { admin } = useAuth();
    return (
        <div>
            { <TopHeader page={"dahaboard"}></TopHeader> }
            <div className="container-fluid">
                <div className="row">
                    <div className="dashboard-sidebar col-md-2 bg-dark text-light">
                        <nav className="dashboard-menu">
                            <ul>
                                <li><Link to={`/dashboard`}>{TachometerAlt} <span>Dashboard</span></Link></li>
                               
                                {admin && <>
                                <li><Link to={`/dashboard/ManageBlogs`}>{Tools} <span>All Blogs</span></Link></li>
                                <li><Link to={`/dashboard/AddNewBlog`}>{CalendarPlus} <span>Add New Blog</span></Link></li>
                                <li><Link to={`/dashboard/makeAdmin`}>{UsersCog} <span>Make Admin</span></Link></li>
                                </>}
                                <li><Link to={`/dashboard/addReview`}>{Clipboard} <span>Review</span></Link></li>

                            </ul>
                        </nav>


                    </div>
                    <div className="col-md-10">
                        <Outlet />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Dashboard;