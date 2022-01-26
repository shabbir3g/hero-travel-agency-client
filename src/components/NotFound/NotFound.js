import React from 'react';
import error from '../../images/error.png'
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const NotFound = () => {
    return (
        <div className="normal-page">
        

            <Navigation></Navigation>
            <div className="margin-top-200 mb-5 mx-auto"> 
                <div className="text-center"> 
                    <img className="img-fluid" src={error} alt="" />
                </div>
            
            </div>

            <Footer></Footer>
        </div>
    );
};

export default NotFound;