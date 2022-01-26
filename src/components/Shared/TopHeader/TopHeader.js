import React from 'react';
import demouser from '../../../images/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faSignOutAlt, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import './TopHeader.css'
import useAuth from '../../../hooks/useAuth';


const TachometerAlt = <FontAwesomeIcon icon={faTachometerAlt} />
const Envelope = <FontAwesomeIcon icon={faEnvelope} />
const SignOutAlt = <FontAwesomeIcon icon={faSignOutAlt} />
const Home = <FontAwesomeIcon icon={faHome} />


const TopHeader = (props) => {

    const page = props.page;

    const { user, logOut } = useAuth({});

    return (
        <div>
              {user.email ?

        <div className="st-top-header">
            <div className="container-fluid">
          
                <div className="st-top-header-in ">
               
                <ul className="st-top-header-list">
                   
                    {page === "frontend" ?  
                    <li><Link to="/dashboard">{TachometerAlt} Dashboard</Link></li> : 
                     
                    <li><Link to="/home">{Home} Visit Site</Link></li> } 


                    <li>

                    {Envelope}
                    {user.email}</li>
                
                    
                </ul>
            
            <div> 
                <> 
                    <span className="st-top-header-btn st-smooth-move">Howdy, {user.displayName}</span> 
                
                    {
                        user.photoURL == null ? <span className="st-top-header-btn st-smooth-move"><img src={demouser} alt="" /></span>
                        
                        : <span className="st-top-header-btn st-smooth-move"><img src={user.photoURL} alt="" /></span>  
                    }


                    
                    <span onClick={logOut} className="st-top-header-btn st-smooth-move logout-button">Log Out {SignOutAlt}</span>
                   

                </>
               
                
            </div>
                </div>
                 
            </div>
        </div>
           : '' }
        </div>
    );
};

export default TopHeader;