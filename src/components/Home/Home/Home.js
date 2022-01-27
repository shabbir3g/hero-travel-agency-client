import React from 'react';
import Banner from "../Banner/Banner";
import Footer from "../../Shared/Footer/Footer";
import Navigation from '../../Shared/Navigation/Navigation';
import Reviews from '../Reviews/Reviews';
import Blog from '../Blog/Blog';
import TopRatedSpot from '../TopRatedSpot/TopRatedSpot';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
           <div className="container-fluid"> 
           <div className='row'> 
                <div className="col-md-9"> 
                    <Blog></Blog>
                   
                </div>
                <div className="col-md-3">
                    <TopRatedSpot></TopRatedSpot>
                </div>
            </div>
           </div>
           <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;